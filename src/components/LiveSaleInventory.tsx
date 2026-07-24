"use client";

import { formatUnits } from "viem";
import { useZaraiSale } from "@/hooks/useZaraiSale";
import { TOKEN_DECIMALS } from "@/lib/contracts";

export function LiveSaleInventory() {
  const { saleInventory, isSaleLoading, saleReadError } = useZaraiSale();

  const displayValue =
    saleInventory === undefined
      ? "Loading…"
      : `${Number(formatUnits(saleInventory, TOKEN_DECIMALS)).toLocaleString(
          "en-US",
          { maximumFractionDigits: 2 },
        )} ZARAI`;

  return (
    <div className="stat-value live-price">
      {saleReadError ? "Unavailable" : isSaleLoading ? "Loading…" : displayValue}
    </div>
  );
}
