import { constants } from "./constants";
import { getAddress, type Address } from "viem";

function requireValue(value: string | undefined, name: string) {
  if (!value) {
    throw new Error(`Missing required public environment variable: ${name}`);
  }

  return value;
}

function requireAddress(value: string | undefined, name: string): Address {
  return getAddress(requireValue(value, name));
}

const configuredChainId = Number(
  requireValue(constants.NEXT_PUBLIC_CHAIN_ID, "NEXT_PUBLIC_CHAIN_ID"),
);

if (configuredChainId !== 56) {
  throw new Error("NEXT_PUBLIC_CHAIN_ID must be 56 for BNB Chain Mainnet.");
}

export const CHAIN_ID = configuredChainId;
export const CHAIN_NAME = requireValue(
  constants.NEXT_PUBLIC_CHAIN_NAME,
  "NEXT_PUBLIC_CHAIN_NAME",
);
export const ZARAI_TOKEN_ADDRESS = requireAddress(
  constants.NEXT_PUBLIC_ZARAI_TOKEN_ADDRESS,
  "NEXT_PUBLIC_ZARAI_TOKEN_ADDRESS",
);
export const SALE_CONTRACT_ADDRESS = requireAddress(
  constants.NEXT_PUBLIC_SALE_CONTRACT_ADDRESS,
  "NEXT_PUBLIC_SALE_CONTRACT_ADDRESS",
);
export const PAYMENT_TOKEN_ADDRESS = requireAddress(
  constants.NEXT_PUBLIC_PAYMENT_TOKEN_ADDRESS,
  "NEXT_PUBLIC_PAYMENT_TOKEN_ADDRESS",
);
export const TREASURY_WALLET_ADDRESS = requireAddress(
  constants.NEXT_PUBLIC_TREASURY_WALLET,
  "NEXT_PUBLIC_TREASURY_WALLET",
);
export const INITIAL_SALE_ALLOCATION = requireValue(
  constants.NEXT_PUBLIC_INITIAL_SALE_ALLOCATION,
  "NEXT_PUBLIC_INITIAL_SALE_ALLOCATION",
);

if (
  !/^\d+(\.\d+)?$/.test(INITIAL_SALE_ALLOCATION) ||
  Number(INITIAL_SALE_ALLOCATION) <= 0
) {
  throw new Error(
    "NEXT_PUBLIC_INITIAL_SALE_ALLOCATION must be a positive token amount.",
  );
}

export const BSCSCAN_BASE_URL = requireValue(
  constants.NEXT_PUBLIC_BSCSCAN_BASE_URL,
  "NEXT_PUBLIC_BSCSCAN_BASE_URL",
).replace(/\/$/, "");

export const TOKEN_DECIMALS = 18;
export const PAYMENT_TOKEN_DECIMALS = 18;
