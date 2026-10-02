"use client";

import { useEffect, useMemo, useState } from "react";
import { formatUnits, parseUnits, type Hash } from "viem";
import {
  useAccount,
  usePublicClient,
  useSwitchChain,
  useWriteContract,
} from "wagmi";
import { TokenBalances } from "@/components/TokenBalances";
import { useZaraiSale } from "@/hooks/useZaraiSale";
import { erc20Abi, saleAbi } from "@/lib/abis";
import {
  BSCSCAN_BASE_URL,
  CHAIN_ID,
  PAYMENT_TOKEN_ADDRESS,
  PAYMENT_TOKEN_DECIMALS,
  SALE_CONTRACT_ADDRESS,
  TOKEN_DECIMALS,
} from "@/lib/contracts";
import { getWalletErrorMessage } from "@/lib/wallet-errors";

type TransactionStage =
  | "idle"
  | "approving"
  | "approval-confirmed"
  | "purchasing"
  | "confirmed";

function displayTokenAmount(value: bigint, decimals: number, digits = 6) {
  return Number(formatUnits(value, decimals)).toLocaleString("en-US", {
    maximumFractionDigits: digits,
  });
}

export function BuyZaraiModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [stage, setStage] = useState<TransactionStage>("idle");
  const [error, setError] = useState("");
  const [approvalHash, setApprovalHash] = useState<Hash>();
  const [purchaseHash, setPurchaseHash] = useState<Hash>();

  const { address, chainId, isConnected } = useAccount();
  const publicClient = usePublicClient({ chainId: CHAIN_ID });
  const { writeContractAsync } = useWriteContract();
  const { switchChainAsync, isPending: isSwitching } = useSwitchChain();
  const {
    saleEnabled,
    tokenPrice,
    priceDenominator,
    zaraiBalance,
    usdtBalance,
    allowance,
    saleInventory,
    bnbBalance,
    isSaleLoading,
    isAccountLoading,
    saleReadError,
    accountReadError,
    refresh,
  } = useZaraiSale(address);

  const isWrongNetwork = isConnected && chainId !== CHAIN_ID;
  const isBusy = stage === "approving" || stage === "purchasing";

  const amountWei = useMemo(() => {
    const normalized = amount.trim();

    if (!normalized) {
      return undefined;
    }

    try {
      return parseUnits(normalized, TOKEN_DECIMALS);
    } catch {
      return undefined;
    }
  }, [amount]);

  const requiredUsdt = useMemo(() => {
    if (
      amountWei === undefined ||
      tokenPrice === undefined ||
      priceDenominator === undefined ||
      priceDenominator === 0n
    ) {
      return undefined;
    }

    return (amountWei * tokenPrice) / priceDenominator;
  }, [amountWei, priceDenominator, tokenPrice]);

  const validationError = useMemo(() => {
    if (!isConnected || !address) {
      return "Connect your wallet before purchasing.";
    }

    if (isWrongNetwork) {
      return "Switch your wallet to BNB Chain Mainnet.";
    }

    if (saleReadError) {
      return "The live sale contract could not be read. Try again shortly.";
    }

    if (isSaleLoading || saleEnabled === undefined) {
      return "Checking the live sale contract…";
    }

    if (!saleEnabled) {
      return "The token sale is currently paused.";
    }

    if (!amount.trim()) {
      return "Enter the amount of ZARAI you want to buy.";
    }

    if (amountWei === undefined) {
      return "Enter a valid amount with no more than 18 decimal places.";
    }

    if (amountWei <= 0n) {
      return "The ZARAI amount must be greater than zero.";
    }

    if (requiredUsdt === undefined) {
      return "The required USDT amount is not available yet.";
    }

    if (accountReadError) {
      return "Wallet balances could not be read. Try again shortly.";
    }

    if (isAccountLoading || usdtBalance === undefined || allowance === undefined) {
      return "Checking your wallet balances…";
    }

    if (usdtBalance < requiredUsdt) {
      return `Insufficient USDT. This purchase requires ${displayTokenAmount(
        requiredUsdt,
        PAYMENT_TOKEN_DECIMALS,
      )} USDT.`;
    }

    if (saleInventory !== undefined && saleInventory < amountWei) {
      return "The sale contract does not have enough ZARAI for this amount.";
    }

    if (bnbBalance === 0n) {
      return "Add BNB to your wallet to pay the BNB Chain network fee.";
    }

    return "";
  }, [
    accountReadError,
    address,
    allowance,
    amount,
    amountWei,
    bnbBalance,
    isAccountLoading,
    isConnected,
    isSaleLoading,
    isWrongNetwork,
    requiredUsdt,
    saleEnabled,
    saleInventory,
    saleReadError,
    usdtBalance,
  ]);

  const needsApproval =
    requiredUsdt !== undefined &&
    allowance !== undefined &&
    allowance < requiredUsdt;

  const triggerReason = !isConnected
    ? "Connect wallet to continue"
    : isWrongNetwork
      ? "Switch to BNB Chain to continue"
      : saleReadError
        ? "Sale status unavailable"
        : isSaleLoading
          ? "Checking live sale status…"
          : saleEnabled
            ? tokenPrice === undefined
              ? "Reading live price…"
              : `${displayTokenAmount(
                  tokenPrice,
                  PAYMENT_TOKEN_DECIMALS,
                )} USDT per ZARAI`
            : "Token sale is paused";

  const triggerDisabled =
    !isConnected ||
    isWrongNetwork ||
    isSaleLoading ||
    Boolean(saleReadError) ||
    saleEnabled !== true;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && !isBusy) {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isBusy, isOpen]);

  function updateAmount(value: string) {
    setAmount(value);
    setError("");

    if (!isBusy) {
      setStage("idle");
      setApprovalHash(undefined);
      setPurchaseHash(undefined);
    }
  }

  async function switchNetwork() {
    setError("");

    try {
      await switchChainAsync({ chainId: CHAIN_ID });
    } catch (switchError) {
      setError(getWalletErrorMessage(switchError, "switch"));
    }
  }

  async function approveUsdt() {
    if (!requiredUsdt || validationError || !publicClient) {
      return;
    }

    setError("");
    setStage("approving");

    try {
      const hash = await writeContractAsync({
        address: PAYMENT_TOKEN_ADDRESS,
        abi: erc20Abi,
        functionName: "approve",
        args: [SALE_CONTRACT_ADDRESS, requiredUsdt],
        chainId: CHAIN_ID,
      });

      setApprovalHash(hash);
      const receipt = await publicClient.waitForTransactionReceipt({ hash });

      if (receipt.status !== "success") {
        throw new Error("The USDT approval transaction reverted.");
      }

      await refresh().catch(() => undefined);
      setStage("approval-confirmed");
    } catch (approvalError) {
      setStage("idle");
      setError(getWalletErrorMessage(approvalError, "approve"));
    }
  }

  async function purchaseZarai() {
    if (!amountWei || validationError || !publicClient) {
      return;
    }

    setError("");
    setStage("purchasing");

    try {
      const hash = await writeContractAsync({
        address: SALE_CONTRACT_ADDRESS,
        abi: saleAbi,
        functionName: "buyTokens",
        args: [amountWei],
        chainId: CHAIN_ID,
      });

      setPurchaseHash(hash);
      const receipt = await publicClient.waitForTransactionReceipt({ hash });

      if (receipt.status !== "success") {
        throw new Error("The ZARAI purchase transaction reverted.");
      }

      await refresh().catch(() => undefined);
      setStage("confirmed");
    } catch (purchaseError) {
      setStage("idle");
      setError(getWalletErrorMessage(purchaseError, "purchase"));
    }
  }

  const actionLabel =
    stage === "approving"
      ? "Approving USDT…"
      : stage === "purchasing"
        ? "Purchasing ZARAI…"
        : stage === "confirmed"
          ? "Purchase confirmed"
          : needsApproval && requiredUsdt !== undefined
            ? `Approve ${displayTokenAmount(
                requiredUsdt,
                PAYMENT_TOKEN_DECIMALS,
              )} USDT`
            : amountWei
              ? `Buy ${displayTokenAmount(amountWei, TOKEN_DECIMALS)} ZARAI`
              : "Enter an amount";

  return (
    <>
      <div className="buy-trigger-wrap">
        <button
          className="btn-primary"
          type="button"
          disabled={triggerDisabled}
          onClick={() => setIsOpen(true)}
          aria-describedby="buy-trigger-reason"
        >
          Purchase ZARAI
        </button>
        <span id="buy-trigger-reason" className="buy-trigger-reason">
          {triggerReason}
        </span>
      </div>

      {isOpen && (
        <div
          className="modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget && !isBusy) {
              setIsOpen(false);
            }
          }}
        >
          <section
            className="buy-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="buy-modal-title"
          >
            <div className="modal-heading">
              <div>
                <span className="modal-eyebrow">BNB Chain Mainnet</span>
                <h2 id="buy-modal-title">Buy ZARAI with USDT</h2>
              </div>
              <button
                className="modal-close"
                type="button"
                onClick={() => setIsOpen(false)}
                disabled={isBusy}
                aria-label="Close purchase window"
              >
                ×
              </button>
            </div>

            {isWrongNetwork && (
              <div className="transaction-notice warning">
                <span>Your wallet is connected to the wrong network.</span>
                <button
                  type="button"
                  onClick={switchNetwork}
                  disabled={isSwitching}
                >
                  {isSwitching ? "Switching…" : "Switch to BNB Chain"}
                </button>
              </div>
            )}

            <TokenBalances
              zaraiBalance={zaraiBalance}
              usdtBalance={usdtBalance}
              allowance={allowance}
              bnbBalance={bnbBalance}
              isLoading={isAccountLoading}
            />

            <label className="amount-field">
              <span>ZARAI amount</span>
              <div className="amount-input-wrap">
                <input
                  type="text"
                  inputMode="decimal"
                  autoComplete="off"
                  placeholder="0.00"
                  value={amount}
                  onChange={(event) => updateAmount(event.target.value)}
                  disabled={isBusy}
                  autoFocus
                />
                <strong>ZARAI</strong>
              </div>
            </label>

            <div className="purchase-summary">
              <div>
                <span>Current sale contract price</span>
                <strong>
                  {tokenPrice === undefined
                    ? "—"
                    : `${displayTokenAmount(
                        tokenPrice,
                        PAYMENT_TOKEN_DECIMALS,
                      )} USDT`}
                </strong>
              </div>
              <div>
                <span>USDT required</span>
                <strong>
                  {requiredUsdt === undefined
                    ? "—"
                    : `${displayTokenAmount(
                        requiredUsdt,
                        PAYMENT_TOKEN_DECIMALS,
                      )} USDT`}
                </strong>
              </div>
              <div>
                <span>Sale inventory</span>
                <strong>
                  {saleInventory === undefined
                    ? "—"
                    : `${displayTokenAmount(
                        saleInventory,
                        TOKEN_DECIMALS,
                        2,
                      )} ZARAI`}
                </strong>
              </div>
            </div>

            {stage === "approval-confirmed" && (
              <div className="transaction-notice success">
                Approval confirmed. Review and select Buy ZARAI to open the
                purchase request in your wallet.
              </div>
            )}

            {stage === "confirmed" && (
              <div className="transaction-notice success">
                Purchase confirmed. Your refreshed ZARAI balance is shown above.
              </div>
            )}

            {error && (
              <div className="transaction-notice error" role="alert">
                {error}
              </div>
            )}

            {!error && validationError && (
              <p className="validation-message">{validationError}</p>
            )}

            <button
              className="purchase-action"
              type="button"
              onClick={needsApproval ? approveUsdt : purchaseZarai}
              disabled={Boolean(validationError) || isBusy || stage === "confirmed"}
            >
              {actionLabel}
            </button>

            <p className="transaction-help">
              Approval and purchase are separate actions. Nothing is submitted
              until you confirm each request in your wallet.
              {" "}The sale contract price is not a secondary-market price.
              {" "}<a href="/whitepaper#risk-information">Read risk information</a>.
            </p>

            {(approvalHash || purchaseHash) && (
              <div className="transaction-links">
                {approvalHash && (
                  <a
                    href={`${BSCSCAN_BASE_URL}/tx/${approvalHash}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View approval on BscScan ↗
                  </a>
                )}
                {purchaseHash && (
                  <a
                    href={`${BSCSCAN_BASE_URL}/tx/${purchaseHash}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View purchase on BscScan ↗
                  </a>
                )}
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
}
