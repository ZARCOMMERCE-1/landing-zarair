import { defineChain } from "viem";
import { CHAIN_NAME } from "@/lib/contracts";

export const bnbMainnet = defineChain({
  id: 56,
  name: CHAIN_NAME,
  nativeCurrency: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://bsc-dataseed.bnbchain.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "BscScan",
      url: "https://bscscan.com",
    },
  },
});
