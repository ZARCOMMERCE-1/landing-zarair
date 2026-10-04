"use client";

import { formatUnits } from "viem";
import { useZaraiSale } from "@/hooks/useZaraiSale";
import { BSCSCAN_BASE_URL, PAYMENT_TOKEN_DECIMALS, SALE_CONTRACT_ADDRESS } from "@/lib/contracts";

function formatPrice(value: bigint) {
  return Number(formatUnits(value, PAYMENT_TOKEN_DECIMALS)).toLocaleString(
    "en-US",
    {
      maximumFractionDigits: 6,
    },
  );
}

export function LiveTokenPrice() {
  const { tokenPrice, isSaleLoading, saleReadError } = useZaraiSale();

  if (saleReadError) {
    return <p className="live-data-unavailable">Temporarily unavailable — <a href={`${BSCSCAN_BASE_URL}/address/${SALE_CONTRACT_ADDRESS}#readContract`} target="_blank" rel="noreferrer">verify on BscScan</a></p>;
  }

  return (
    <div className="stat-value live-price">
      {isSaleLoading || tokenPrice === undefined
          ? "Loading…"
          : `${formatPrice(tokenPrice)} USDT`}
    </div>
  );
}
