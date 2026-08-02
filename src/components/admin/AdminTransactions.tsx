"use client";

import { formatUnits } from "viem";
import { AdminAddress } from "@/components/admin/AdminAddress";
import { useSaleEvents } from "@/hooks/useSaleEvents";
import {
  BSCSCAN_BASE_URL,
  PAYMENT_TOKEN_DECIMALS,
  TOKEN_DECIMALS,
} from "@/lib/contracts";
import { formatTokenAmount, shortenAddress } from "@/lib/format";

function escapeCsv(value: string) {
  return `"${value.replaceAll('"', '""')}"`;
}

export function AdminTransactions() {
  const { data: purchases = [], isLoading, isFetching, error, refetch } =
    useSaleEvents();

  function exportCsv() {
    if (purchases.length === 0) {
      return;
    }

    const headers = [
      "txHash",
      "buyer",
      "zaraiAmount",
      "usdtAmount",
      "blockNumber",
      "bscscanUrl",
    ];
    const rows = purchases.map((purchase) =>
      [
        purchase.txHash,
        purchase.buyer,
        formatUnits(purchase.zaraiAmount, TOKEN_DECIMALS),
        formatUnits(purchase.usdtAmount, PAYMENT_TOKEN_DECIMALS),
        purchase.blockNumber.toString(),
        purchase.bscscanUrl,
      ]
        .map(escapeCsv)
        .join(","),
    );
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "zarai-recent-purchases.csv";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="admin-section" aria-labelledby="transactions-title">
      <div className="admin-section-heading admin-section-heading-actions">
        <div>
          <span className="admin-eyebrow">Recent on-chain activity</span>
          <h2 id="transactions-title">Purchases</h2>
        </div>
        <div className="admin-heading-actions">
          <button
            type="button"
            className="admin-small-button"
            onClick={() => void refetch()}
            disabled={isFetching}
          >
            {isFetching ? "Refreshing…" : "Refresh"}
          </button>
          <button
            type="button"
            className="admin-small-button is-primary"
            onClick={exportCsv}
            disabled={purchases.length === 0}
          >
            Export CSV
          </button>
        </div>
      </div>

      <p className="admin-section-description">
        Reads the verified TokensPurchased event directly from recent BNB Chain
        blocks. Up to 100 purchases are shown.
      </p>

      {isLoading && (
        <div className="admin-empty-state" role="status">
          <span className="admin-spinner" aria-hidden="true" />
          <p>Loading recent purchase events…</p>
        </div>
      )}

      {!isLoading && error && (
        <div className="admin-empty-state is-error" role="alert">
          <strong>Recent purchases are temporarily unavailable.</strong>
          <p>
            The public RPC could not return event logs. The rest of the
            dashboard remains available without a BscScan API key.
          </p>
        </div>
      )}

      {!isLoading && !error && purchases.length === 0 && (
        <div className="admin-empty-state">
          <strong>No purchases found in the recent block window.</strong>
          <p>
            Older activity may fall outside the direct RPC lookback. Optional
            BscScan API support can be configured later for deeper history.
          </p>
        </div>
      )}

      {purchases.length > 0 && (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Buyer</th>
                <th>ZARAI Amount</th>
                <th>USDT Amount</th>
                <th>Block</th>
                <th>Transaction</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map((purchase) => (
                <tr key={`${purchase.txHash}-${purchase.logIndex}`}>
                  <td data-label="Buyer">
                    <AdminAddress
                      address={purchase.buyer}
                      label="Buyer address"
                      scanUrl={`${BSCSCAN_BASE_URL}/address/${purchase.buyer}`}
                    />
                  </td>
                  <td data-label="ZARAI Amount">
                    {formatTokenAmount(
                      purchase.zaraiAmount,
                      TOKEN_DECIMALS,
                      6,
                    )}
                  </td>
                  <td data-label="USDT Amount">
                    {formatTokenAmount(
                      purchase.usdtAmount,
                      PAYMENT_TOKEN_DECIMALS,
                      6,
                    )}
                  </td>
                  <td data-label="Block">
                    {purchase.blockNumber.toString()}
                  </td>
                  <td data-label="Transaction">
                    <a
                      className="admin-table-link"
                      href={purchase.bscscanUrl}
                      target="_blank"
                      rel="noreferrer"
                      title={purchase.txHash}
                    >
                      {shortenAddress(purchase.txHash)} ↗
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
