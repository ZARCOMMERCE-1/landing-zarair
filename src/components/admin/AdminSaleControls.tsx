"use client";

import { useMemo, useState } from "react";
import { parseUnits, type Address, type Hash } from "viem";
import { usePublicClient, useWriteContract } from "wagmi";
import { AdminAddress } from "@/components/admin/AdminAddress";
import { saleAbi } from "@/lib/abis";
import {
  BSCSCAN_BASE_URL,
  CHAIN_ID,
  PAYMENT_TOKEN_DECIMALS,
  SALE_CONTRACT_ADDRESS,
  TOKEN_DECIMALS,
} from "@/lib/contracts";
import { formatTokenAmount } from "@/lib/format";
import { getWalletErrorMessage } from "@/lib/wallet-errors";

type AdminAction = "status" | "price" | "withdraw";

type AdminSaleControlsProps = {
  canManage: boolean;
  disabledReason: string;
  saleEnabled?: boolean;
  tokenPrice?: bigint;
  saleInventory?: bigint;
  withdrawRecipient: Address;
  refresh: () => Promise<void>;
};

export function AdminSaleControls({
  canManage,
  disabledReason,
  saleEnabled,
  tokenPrice,
  saleInventory,
  withdrawRecipient,
  refresh,
}: AdminSaleControlsProps) {
  const [priceInput, setPriceInput] = useState("");
  const [withdrawInput, setWithdrawInput] = useState("");
  const [pendingAction, setPendingAction] = useState<AdminAction>();
  const [transactionHash, setTransactionHash] = useState<Hash>();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const publicClient = usePublicClient({ chainId: CHAIN_ID });
  const { writeContractAsync } = useWriteContract();

  const nextPrice = useMemo(() => {
    const normalized = priceInput.trim();

    if (!normalized) {
      return undefined;
    }

    try {
      return parseUnits(normalized, PAYMENT_TOKEN_DECIMALS);
    } catch {
      return undefined;
    }
  }, [priceInput]);

  const withdrawAmount = useMemo(() => {
    const normalized = withdrawInput.trim();

    if (!normalized) {
      return undefined;
    }

    try {
      return parseUnits(normalized, TOKEN_DECIMALS);
    } catch {
      return undefined;
    }
  }, [withdrawInput]);

  const priceError = !priceInput.trim()
    ? "Enter a new sale price."
    : nextPrice === undefined
      ? "Enter a valid number with no more than 18 decimal places."
      : nextPrice <= 0n
        ? "The new price must be greater than zero."
        : nextPrice === tokenPrice
          ? "The new price matches the current price."
          : "";

  const withdrawError = !withdrawInput.trim()
    ? "Enter a ZARAI amount to withdraw."
    : withdrawAmount === undefined
      ? "Enter a valid number with no more than 18 decimal places."
      : withdrawAmount <= 0n
        ? "The withdrawal amount must be greater than zero."
        : saleInventory === undefined
          ? "The sale balance is still loading."
          : withdrawAmount > saleInventory
            ? "The withdrawal amount exceeds the available sale balance."
            : "";

  const isBusy = pendingAction !== undefined;

  function resetTransactionState() {
    setTransactionHash(undefined);
    setSuccessMessage("");
    setErrorMessage("");
  }

  async function waitForConfirmation(hash: Hash, action: AdminAction) {
    if (!publicClient) {
      throw new Error("BNB Chain client is unavailable.");
    }

    setTransactionHash(hash);
    const receipt = await publicClient.waitForTransactionReceipt({ hash });

    if (receipt.status !== "success") {
      throw new Error("The admin transaction reverted.");
    }

    await refresh();
    setSuccessMessage(
      action === "status"
        ? "Sale status updated and confirmed on BNB Chain."
        : action === "price"
          ? "Sale price updated and confirmed on BNB Chain."
          : "ZARAI withdrawal confirmed on BNB Chain.",
    );
  }

  async function updateSaleStatus() {
    if (!canManage || saleEnabled === undefined || isBusy) {
      return;
    }

    const nextStatus = !saleEnabled;
    const approved = window.confirm(
      nextStatus
        ? "Resume the ZARAI sale? Buyers will be able to purchase tokens after the transaction confirms."
        : "Pause the ZARAI sale? Buyers will be unable to purchase tokens after the transaction confirms.",
    );

    if (!approved) {
      return;
    }

    resetTransactionState();
    setPendingAction("status");

    try {
      const hash = await writeContractAsync({
        address: SALE_CONTRACT_ADDRESS,
        abi: saleAbi,
        functionName: "setSaleEnabled",
        args: [nextStatus],
        chainId: CHAIN_ID,
      });
      await waitForConfirmation(hash, "status");
    } catch (error) {
      setErrorMessage(getWalletErrorMessage(error, "admin"));
    } finally {
      setPendingAction(undefined);
    }
  }

  async function updatePrice() {
    if (!canManage || !nextPrice || priceError || isBusy) {
      return;
    }

    const currentPriceLabel = formatTokenAmount(
      tokenPrice,
      PAYMENT_TOKEN_DECIMALS,
      6,
    );
    const nextPriceLabel = formatTokenAmount(
      nextPrice,
      PAYMENT_TOKEN_DECIMALS,
      6,
    );
    const approved = window.confirm(
      `You are changing price from ${currentPriceLabel} USDT to ${nextPriceLabel} USDT per ZARAI. Continue to wallet confirmation?`,
    );

    if (!approved) {
      return;
    }

    resetTransactionState();
    setPendingAction("price");

    try {
      const hash = await writeContractAsync({
        address: SALE_CONTRACT_ADDRESS,
        abi: saleAbi,
        functionName: "setTokenPrice",
        args: [nextPrice],
        chainId: CHAIN_ID,
      });
      await waitForConfirmation(hash, "price");
      setPriceInput("");
    } catch (error) {
      setErrorMessage(getWalletErrorMessage(error, "admin"));
    } finally {
      setPendingAction(undefined);
    }
  }

  async function withdrawUnsoldTokens() {
    if (!canManage || !withdrawAmount || withdrawError || isBusy) {
      return;
    }

    const approved = window.confirm(
      `This will remove ${formatTokenAmount(
        withdrawAmount,
        TOKEN_DECIMALS,
        6,
      )} ZARAI from the sale contract and reduce available tokens for buyers. The tokens will be sent to ${withdrawRecipient}. Continue to wallet confirmation?`,
    );

    if (!approved) {
      return;
    }

    resetTransactionState();
    setPendingAction("withdraw");

    try {
      const hash = await writeContractAsync({
        address: SALE_CONTRACT_ADDRESS,
        abi: saleAbi,
        functionName: "withdrawUnsoldTokens",
        args: [withdrawRecipient, withdrawAmount],
        chainId: CHAIN_ID,
      });
      await waitForConfirmation(hash, "withdraw");
      setWithdrawInput("");
    } catch (error) {
      setErrorMessage(getWalletErrorMessage(error, "admin"));
    } finally {
      setPendingAction(undefined);
    }
  }

  return (
    <section className="admin-section" aria-labelledby="sale-controls-title">
      <div className="admin-section-heading">
        <div>
          <span className="admin-eyebrow">Owner wallet required</span>
          <h2 id="sale-controls-title">Sale Controls</h2>
        </div>
        <span className={`admin-access-pill ${canManage ? "is-owner" : ""}`}>
          {canManage ? "Owner actions enabled" : "Read-only mode"}
        </span>
      </div>

      {!canManage && (
        <div className="admin-inline-notice is-warning" role="status">
          {disabledReason}
        </div>
      )}

      <div className="admin-control-grid">
        <article className="admin-control-card">
          <div className="admin-control-heading">
            <div>
              <span>Sale availability</span>
              <h3>{saleEnabled ? "Sale is enabled" : "Sale is disabled"}</h3>
            </div>
            <span
              className={`admin-status-dot ${saleEnabled ? "is-live" : "is-paused"}`}
              aria-hidden="true"
            />
          </div>
          <p>
            {saleEnabled
              ? "Pausing prevents new purchases after the transaction confirms."
              : "Resuming allows purchases after the transaction confirms."}
          </p>
          <button
            type="button"
            className={`admin-action-button ${saleEnabled ? "is-secondary" : ""}`}
            onClick={updateSaleStatus}
            disabled={!canManage || saleEnabled === undefined || isBusy}
          >
            {pendingAction === "status"
              ? "Waiting for confirmation…"
              : saleEnabled
                ? "Pause Sale"
                : "Resume Sale"}
          </button>
        </article>

        <article className="admin-control-card">
          <div className="admin-control-heading">
            <div>
              <span>Pricing</span>
              <h3>Update Sale Price</h3>
            </div>
          </div>
          <label className="admin-field">
            <span>New price in USDT per ZARAI</span>
            <div className="admin-input-wrap">
              <input
                type="text"
                inputMode="decimal"
                autoComplete="off"
                placeholder="Enter new price"
                value={priceInput}
                onChange={(event) => {
                  setPriceInput(event.target.value);
                  resetTransactionState();
                }}
                disabled={isBusy}
              />
              <strong>USDT</strong>
            </div>
          </label>
          {nextPrice && !priceError ? (
            <p className="admin-confirmation-summary">
              You are changing price from {formatTokenAmount(
                tokenPrice,
                PAYMENT_TOKEN_DECIMALS,
                6,
              )} USDT to {formatTokenAmount(
                nextPrice,
                PAYMENT_TOKEN_DECIMALS,
                6,
              )} USDT per ZARAI.
            </p>
          ) : (
            <p className="admin-field-help">{priceError}</p>
          )}
          <button
            type="button"
            className="admin-action-button"
            onClick={updatePrice}
            disabled={!canManage || Boolean(priceError) || isBusy}
          >
            {pendingAction === "price"
              ? "Waiting for confirmation…"
              : "Update Price"}
          </button>
        </article>

        <article className="admin-control-card admin-danger-card">
          <div className="admin-control-heading">
            <div>
              <span>Protected action</span>
              <h3>Withdraw Unsold ZARAI</h3>
            </div>
          </div>
          <p className="admin-danger-copy">
            This will remove tokens from the sale contract and reduce available
            tokens for buyers.
          </p>
          <div className="admin-balance-line">
            <span>Available sale balance</span>
            <strong>
              {formatTokenAmount(saleInventory, TOKEN_DECIMALS, 6)} ZARAI
            </strong>
          </div>
          <label className="admin-field">
            <span>ZARAI amount to withdraw</span>
            <div className="admin-input-wrap">
              <input
                type="text"
                inputMode="decimal"
                autoComplete="off"
                placeholder="0.00"
                value={withdrawInput}
                onChange={(event) => {
                  setWithdrawInput(event.target.value);
                  resetTransactionState();
                }}
                disabled={isBusy}
              />
              <strong>ZARAI</strong>
            </div>
          </label>
          <div className="admin-withdraw-recipient">
            <span>Recipient: configured treasury</span>
            <AdminAddress
              address={withdrawRecipient}
              label="Withdrawal recipient"
              scanUrl={`${BSCSCAN_BASE_URL}/address/${withdrawRecipient}`}
            />
          </div>
          <p className="admin-field-help">{withdrawError}</p>
          <button
            type="button"
            className="admin-action-button is-danger"
            onClick={withdrawUnsoldTokens}
            disabled={!canManage || Boolean(withdrawError) || isBusy}
          >
            {pendingAction === "withdraw"
              ? "Waiting for confirmation…"
              : "Withdraw ZARAI"}
          </button>
        </article>
      </div>

      {pendingAction && (
        <div className="admin-transaction-state" role="status">
          <span className="admin-spinner" aria-hidden="true" />
          <div>
            <strong>
              {transactionHash
                ? "Transaction submitted"
                : "Confirm the request in your wallet"}
            </strong>
            <p>
              {transactionHash
                ? "Waiting for BNB Chain confirmation."
                : "Nothing is sent unless the connected owner wallet approves it."}
            </p>
          </div>
        </div>
      )}

      {successMessage && (
        <div className="admin-inline-notice is-success" role="status">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="admin-inline-notice is-error" role="alert">
          {errorMessage}
        </div>
      )}

      {transactionHash && (
        <a
          className="admin-transaction-link"
          href={`${BSCSCAN_BASE_URL}/tx/${transactionHash}`}
          target="_blank"
          rel="noreferrer"
        >
          View latest admin transaction on BscScan ↗
        </a>
      )}
    </section>
  );
}
