import { formatUnits } from "viem";

export function shortenAddress(value: string) {
  return `${value.slice(0, 6)}…${value.slice(-4)}`;
}

export function formatTokenAmount(
  value: bigint | undefined,
  decimals: number,
  maximumFractionDigits = 2,
) {
  if (value === undefined) {
    return "—";
  }

  return Number(formatUnits(value, decimals)).toLocaleString("en-US", {
    maximumFractionDigits,
  });
}
