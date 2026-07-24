"use client";

import { formatUnits } from "viem";
import { useZaraiSale } from "@/hooks/useZaraiSale";
import { PAYMENT_TOKEN_DECIMALS } from "@/lib/contracts";

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

  return (
    <div className="stat-value live-price">
      {saleReadError
        ? "Unavailable"
        : isSaleLoading || tokenPrice === undefined
          ? "Loading…"
          : `${formatPrice(tokenPrice)} USDT`}
    </div>
  );
}
