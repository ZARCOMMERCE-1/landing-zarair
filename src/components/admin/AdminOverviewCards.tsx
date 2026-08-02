import { AdminAddress } from "@/components/admin/AdminAddress";
import {
  BSCSCAN_BASE_URL,
  PAYMENT_TOKEN_DECIMALS,
  TOKEN_DECIMALS,
} from "@/lib/contracts";
import { formatTokenAmount } from "@/lib/format";

type AdminOverviewCardsProps = {
  saleEnabled?: boolean;
  tokenPrice?: bigint;
  saleInventory?: bigint;
  initialAllocation: bigint;
  soldZarai: bigint;
  estimatedRaised?: bigint;
  treasuryUsdtBalance?: bigint;
  treasuryAddress?: string;
  isLoading: boolean;
};

function LoadingValue({ children, loading }: { children: React.ReactNode; loading: boolean }) {
  return loading ? <span className="admin-value-loading">Loading…</span> : children;
}

export function AdminOverviewCards({
  saleEnabled,
  tokenPrice,
  saleInventory,
  initialAllocation,
  soldZarai,
  estimatedRaised,
  treasuryUsdtBalance,
  treasuryAddress,
  isLoading,
}: AdminOverviewCardsProps) {
  return (
    <section className="admin-section" aria-labelledby="overview-title">
      <div className="admin-section-heading">
        <div>
          <span className="admin-eyebrow">Live contract data</span>
          <h2 id="overview-title">Sale Overview</h2>
        </div>
        <span className="admin-refresh-note">Reads refresh after confirmed actions</span>
      </div>

      <div className="admin-overview-grid">
        <article className="admin-stat-card">
          <span>Sale Status</span>
          <LoadingValue loading={isLoading && saleEnabled === undefined}>
            <strong className={saleEnabled ? "is-positive" : "is-warning"}>
              {saleEnabled === undefined
                ? "Unavailable"
                : saleEnabled
                  ? "Enabled"
                  : "Disabled"}
            </strong>
          </LoadingValue>
        </article>

        <article className="admin-stat-card">
          <span>Current Price</span>
          <LoadingValue loading={isLoading && tokenPrice === undefined}>
            <strong>
              {formatTokenAmount(tokenPrice, PAYMENT_TOKEN_DECIMALS, 6)} USDT
            </strong>
            <small>per ZARAI</small>
          </LoadingValue>
        </article>

        <article className="admin-stat-card">
          <span>Sale Contract Balance</span>
          <LoadingValue loading={isLoading && saleInventory === undefined}>
            <strong>{formatTokenAmount(saleInventory, TOKEN_DECIMALS)} ZARAI</strong>
          </LoadingValue>
        </article>

        <article className="admin-stat-card">
          <span>Initial Sale Allocation</span>
          <strong>{formatTokenAmount(initialAllocation, TOKEN_DECIMALS)} ZARAI</strong>
        </article>

        <article className="admin-stat-card">
          <span>Sold ZARAI</span>
          <LoadingValue loading={isLoading && saleInventory === undefined}>
            <strong>{formatTokenAmount(soldZarai, TOKEN_DECIMALS)} ZARAI</strong>
          </LoadingValue>
        </article>

        <article className="admin-stat-card">
          <span>Remaining ZARAI</span>
          <LoadingValue loading={isLoading && saleInventory === undefined}>
            <strong>{formatTokenAmount(saleInventory, TOKEN_DECIMALS)} ZARAI</strong>
          </LoadingValue>
        </article>

        <article className="admin-stat-card admin-stat-wide">
          <span>Estimated Raised USDT</span>
          <LoadingValue loading={isLoading && estimatedRaised === undefined}>
            <strong>
              {formatTokenAmount(
                estimatedRaised,
                PAYMENT_TOKEN_DECIMALS,
                2,
              )} USDT
            </strong>
            <small>
              Estimate uses the current price; historical price changes are not
              available in this calculation.
            </small>
          </LoadingValue>
        </article>

        <article className="admin-stat-card">
          <span>Treasury USDT Balance</span>
          <LoadingValue loading={isLoading && treasuryUsdtBalance === undefined}>
            <strong>
              {formatTokenAmount(
                treasuryUsdtBalance,
                PAYMENT_TOKEN_DECIMALS,
                2,
              )} USDT
            </strong>
          </LoadingValue>
        </article>

        <article className="admin-stat-card">
          <span>Treasury Wallet</span>
          <AdminAddress
            address={treasuryAddress}
            label="Treasury wallet"
            scanUrl={
              treasuryAddress
                ? `${BSCSCAN_BASE_URL}/address/${treasuryAddress}`
                : undefined
            }
          />
        </article>
      </div>
    </section>
  );
}
