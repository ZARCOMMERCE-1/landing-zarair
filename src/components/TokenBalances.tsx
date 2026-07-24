"use client";

import { formatUnits } from "viem";
import {
  PAYMENT_TOKEN_DECIMALS,
  TOKEN_DECIMALS,
} from "@/lib/contracts";

function displayBalance(value: bigint | undefined, decimals: number) {
  if (value === undefined) {
    return "—";
  }

  return Number(formatUnits(value, decimals)).toLocaleString("en-US", {
    maximumFractionDigits: 4,
  });
}

export function TokenBalances({
  zaraiBalance,
  usdtBalance,
  allowance,
  bnbBalance,
  isLoading,
}: {
  zaraiBalance?: bigint;
  usdtBalance?: bigint;
  allowance?: bigint;
  bnbBalance?: bigint;
  isLoading: boolean;
}) {
  return (
    <div className="balance-grid" aria-busy={isLoading}>
      <div className="balance-item">
        <span>ZARAI balance</span>
        <strong>
          {isLoading ? "Loading…" : displayBalance(zaraiBalance, TOKEN_DECIMALS)}
        </strong>
      </div>
      <div className="balance-item">
        <span>USDT balance</span>
        <strong>
          {isLoading
            ? "Loading…"
            : displayBalance(usdtBalance, PAYMENT_TOKEN_DECIMALS)}
        </strong>
      </div>
      <div className="balance-item">
        <span>USDT allowance</span>
        <strong>
          {isLoading
            ? "Loading…"
            : displayBalance(allowance, PAYMENT_TOKEN_DECIMALS)}
        </strong>
      </div>
      <div className="balance-item">
        <span>BNB for gas</span>
        <strong>
          {isLoading ? "Loading…" : displayBalance(bnbBalance, 18)}
        </strong>
      </div>
    </div>
  );
}
