"use client";

import { formatUnits } from "viem";
import { useZaraiSale } from "@/hooks/useZaraiSale";
import { BSCSCAN_BASE_URL, SALE_CONTRACT_ADDRESS, TOKEN_DECIMALS, ZARAI_TOKEN_ADDRESS } from "@/lib/contracts";

export function LiveSaleInventory() {
  const { saleInventory, isSaleLoading, saleReadError } = useZaraiSale();

  if (saleReadError) {
    return <p className="live-data-unavailable">Temporarily unavailable — <a href={`${BSCSCAN_BASE_URL}/token/${ZARAI_TOKEN_ADDRESS}?a=${SALE_CONTRACT_ADDRESS}`} target="_blank" rel="noreferrer">verify on BscScan</a></p>;
  }

  const displayValue =
    saleInventory === undefined
      ? "Loading…"
      : `${Number(formatUnits(saleInventory, TOKEN_DECIMALS)).toLocaleString(
          "en-US",
          { maximumFractionDigits: 2 },
        )} ZARAI`;

  return (
    <div className="stat-value live-price">
      {isSaleLoading ? "Loading…" : displayValue}
    </div>
  );
}
