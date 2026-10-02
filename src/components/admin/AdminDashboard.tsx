"use client";

import Link from "next/link";
import { isAddressEqual, parseUnits } from "viem";
import { useAccount } from "wagmi";
import { AdminAddress } from "@/components/admin/AdminAddress";
import { AdminContractInfo } from "@/components/admin/AdminContractInfo";
import { AdminHealthChecks } from "@/components/admin/AdminHealthChecks";
import { AdminOverviewCards } from "@/components/admin/AdminOverviewCards";
import { AdminSaleControls } from "@/components/admin/AdminSaleControls";
import { AdminSecurityNotice } from "@/components/admin/AdminSecurityNotice";
import { AdminTransactions } from "@/components/admin/AdminTransactions";
import { ConnectWalletButton } from "@/components/ConnectWalletButton";
import { Logo } from "@/components/Logo";
import { useAdminSaleDashboard } from "@/hooks/useAdminSaleDashboard";
import {
  BSCSCAN_BASE_URL,
  CHAIN_ID,
  CHAIN_NAME,
  INITIAL_SALE_ALLOCATION,
  PAYMENT_TOKEN_DECIMALS,
  SALE_CONTRACT_ADDRESS,
  TOKEN_DECIMALS,
  TREASURY_WALLET_ADDRESS,
} from "@/lib/contracts";

export function AdminDashboard() {
  const { address, chainId, isConnected } = useAccount();
  const dashboard = useAdminSaleDashboard();
  const isWrongNetwork = isConnected && chainId !== CHAIN_ID;
  const isOwner = Boolean(
    address && dashboard.owner && isAddressEqual(address, dashboard.owner),
  );
  const canManage =
    isConnected &&
    !isWrongNetwork &&
    isOwner &&
    !dashboard.isLoading &&
    !dashboard.readError;
  const treasuryAddress =
    dashboard.contractTreasury ?? TREASURY_WALLET_ADDRESS;
  const initialAllocation = parseUnits(
    INITIAL_SALE_ALLOCATION,
    TOKEN_DECIMALS,
  );
  const soldZarai =
    dashboard.saleInventory === undefined ||
    dashboard.saleInventory >= initialAllocation
      ? 0n
      : initialAllocation - dashboard.saleInventory;
  const estimatedRaised =
    dashboard.tokenPrice !== undefined &&
    dashboard.priceDenominator !== undefined &&
    dashboard.priceDenominator > 0n
      ? (soldZarai * dashboard.tokenPrice) / dashboard.priceDenominator
      : undefined;

  const currentChain = !isConnected
    ? "Wallet not connected"
    : chainId === CHAIN_ID
      ? `${CHAIN_NAME} (${CHAIN_ID})`
      : `Unsupported chain (${chainId ?? "unknown"})`;

  const disabledReason = !isConnected
    ? "Connect the sale owner wallet to enable management actions."
    : isWrongNetwork
      ? "Switch to BNB Chain before submitting an admin transaction."
      : !dashboard.owner || dashboard.isLoading
        ? "Sale ownership and live contract data are still loading."
        : !isOwner
          ? "Connected wallet is not the sale contract owner. Management actions are disabled."
          : dashboard.readError
            ? "Management actions are disabled until live contract reads recover."
            : "Management actions are disabled.";

  return (
    <div className="admin-shell">
      <header className="admin-topbar">
        <Link href="/" className="admin-brand" aria-label="Return to Zar Air landing page">
          <Logo className="admin-logo" />
          <span className="admin-product-label">Admin Dashboard</span>
        </Link>
        <div className="admin-topbar-actions">
          <Link href="/" className="admin-back-link">
            Public site
          </Link>
          <ConnectWalletButton />
        </div>
      </header>

      <main className="admin-main">
        <section className="admin-hero" aria-labelledby="admin-title">
          <div>
            <span className="admin-eyebrow">BNB Chain sale operations</span>
            <h1 id="admin-title">ZARAI Admin Dashboard</h1>
            <p>
              Monitor live sale data and submit owner-authorized management
              requests. Every write requires manual confirmation in the
              connected wallet.
            </p>
          </div>
          <a
            className="admin-contract-link"
            href={`${BSCSCAN_BASE_URL}/address/${SALE_CONTRACT_ADDRESS}#code`}
            target="_blank"
            rel="noreferrer"
          >
            View verified sale contract <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section className="admin-access-card" aria-labelledby="wallet-access-title">
          <div className="admin-access-heading">
            <div>
              <span className="admin-eyebrow">On-chain authorization</span>
              <h2 id="wallet-access-title">Admin Wallet Access</h2>
            </div>
            <span
              className={`admin-access-pill ${canManage ? "is-owner" : ""}`}
            >
              {canManage ? "Owner verified" : "Read-only access"}
            </span>
          </div>

          <div className="admin-access-grid">
            <div>
              <span>Connected wallet</span>
              {address ? (
                <AdminAddress
                  address={address}
                  label="Connected wallet"
                  scanUrl={`${BSCSCAN_BASE_URL}/address/${address}`}
                />
              ) : (
                <strong>Not connected</strong>
              )}
            </div>
            <div>
              <span>Current chain</span>
              <strong className={isWrongNetwork ? "is-error" : ""}>
                {currentChain}
              </strong>
            </div>
            <div>
              <span>Sale contract owner()</span>
              <AdminAddress
                address={dashboard.owner}
                label="Sale contract owner"
                scanUrl={
                  dashboard.owner
                    ? `${BSCSCAN_BASE_URL}/address/${dashboard.owner}`
                    : undefined
                }
              />
            </div>
          </div>

          <div
            className={`admin-access-message ${canManage ? "is-success" : "is-warning"}`}
            role="status"
          >
            {canManage
              ? "Connected wallet matches the on-chain sale owner. Management actions are enabled."
              : disabledReason}
          </div>
        </section>

        {dashboard.readError && (
          <div className="admin-inline-notice is-error" role="alert">
            Some live contract data could not be read. Read-only values may be
            incomplete, and management actions remain disabled until the RPC
            connection recovers.
          </div>
        )}

        <AdminOverviewCards
          saleEnabled={dashboard.saleEnabled}
          tokenPrice={dashboard.tokenPrice}
          saleInventory={dashboard.saleInventory}
          initialAllocation={initialAllocation}
          soldZarai={soldZarai}
          estimatedRaised={estimatedRaised}
          treasuryUsdtBalance={dashboard.treasuryUsdtBalance}
          treasuryAddress={treasuryAddress}
          isLoading={dashboard.isLoading}
        />

        <AdminSaleControls
          canManage={canManage}
          disabledReason={disabledReason}
          saleEnabled={dashboard.saleEnabled}
          tokenPrice={dashboard.tokenPrice}
          saleInventory={dashboard.saleInventory}
          withdrawRecipient={treasuryAddress}
          refresh={dashboard.refresh}
        />

        <AdminTransactions />

        <div className="admin-two-column">
          <AdminContractInfo
            owner={dashboard.owner}
            treasury={dashboard.contractTreasury}
          />
          <AdminHealthChecks
            isConnected={isConnected}
            isWrongNetwork={isWrongNetwork}
            isOwner={isOwner}
            saleInventory={dashboard.saleInventory}
            saleEnabled={dashboard.saleEnabled}
            tokenPrice={dashboard.tokenPrice}
            owner={dashboard.owner}
            contractTreasury={dashboard.contractTreasury}
            contractZaraiToken={dashboard.contractZaraiToken}
            contractPaymentToken={dashboard.contractPaymentToken}
            readError={dashboard.readError}
          />
        </div>

        <AdminSecurityNotice />
      </main>

      <footer className="admin-footer">
        <p>
          Zar Air admin tools never store private keys or sign transactions on
          behalf of a wallet.
        </p>
        <span>
          Price units: {PAYMENT_TOKEN_DECIMALS} decimals · Token units: {TOKEN_DECIMALS} decimals
        </span>
      </footer>
    </div>
  );
}
