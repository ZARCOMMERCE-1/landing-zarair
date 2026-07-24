"use client";

import type { Address } from "viem";
import {
  useBalance,
  useReadContract,
} from "wagmi";
import { erc20Abi, saleAbi } from "@/lib/abis";
import {
  CHAIN_ID,
  PAYMENT_TOKEN_ADDRESS,
  SALE_CONTRACT_ADDRESS,
  ZARAI_TOKEN_ADDRESS,
} from "@/lib/contracts";

export function useZaraiSale(account?: Address) {
  const saleEnabledQuery = useReadContract({
    address: SALE_CONTRACT_ADDRESS,
    abi: saleAbi,
    functionName: "saleEnabled",
    chainId: CHAIN_ID,
  });

  const tokenPriceQuery = useReadContract({
    address: SALE_CONTRACT_ADDRESS,
    abi: saleAbi,
    functionName: "tokenPrice",
    chainId: CHAIN_ID,
  });

  const priceDenominatorQuery = useReadContract({
    address: SALE_CONTRACT_ADDRESS,
    abi: saleAbi,
    functionName: "PRICE_DENOMINATOR",
    chainId: CHAIN_ID,
  });

  const zaraiBalanceQuery = useReadContract({
    address: ZARAI_TOKEN_ADDRESS,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: account ? [account] : undefined,
    chainId: CHAIN_ID,
    query: {
      enabled: Boolean(account),
    },
  });

  const usdtBalanceQuery = useReadContract({
    address: PAYMENT_TOKEN_ADDRESS,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: account ? [account] : undefined,
    chainId: CHAIN_ID,
    query: {
      enabled: Boolean(account),
    },
  });

  const allowanceQuery = useReadContract({
    address: PAYMENT_TOKEN_ADDRESS,
    abi: erc20Abi,
    functionName: "allowance",
    args: account ? [account, SALE_CONTRACT_ADDRESS] : undefined,
    chainId: CHAIN_ID,
    query: {
      enabled: Boolean(account),
    },
  });

  const saleInventoryQuery = useReadContract({
    address: ZARAI_TOKEN_ADDRESS,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [SALE_CONTRACT_ADDRESS],
    chainId: CHAIN_ID,
  });

  const bnbBalanceQuery = useBalance({
    address: account,
    chainId: CHAIN_ID,
    query: {
      enabled: Boolean(account),
    },
  });

  async function refresh() {
    await Promise.all([
      saleEnabledQuery.refetch(),
      tokenPriceQuery.refetch(),
      priceDenominatorQuery.refetch(),
      saleInventoryQuery.refetch(),
      account ? zaraiBalanceQuery.refetch() : Promise.resolve(),
      account ? usdtBalanceQuery.refetch() : Promise.resolve(),
      account ? allowanceQuery.refetch() : Promise.resolve(),
      account ? bnbBalanceQuery.refetch() : Promise.resolve(),
    ]);
  }

  return {
    saleEnabled: saleEnabledQuery.data,
    tokenPrice: tokenPriceQuery.data,
    priceDenominator: priceDenominatorQuery.data,
    zaraiBalance: zaraiBalanceQuery.data,
    usdtBalance: usdtBalanceQuery.data,
    allowance: allowanceQuery.data,
    saleInventory: saleInventoryQuery.data,
    bnbBalance: bnbBalanceQuery.data?.value,
    isSaleLoading:
      saleEnabledQuery.isLoading ||
      tokenPriceQuery.isLoading ||
      priceDenominatorQuery.isLoading ||
      saleInventoryQuery.isLoading,
    isAccountLoading:
      Boolean(account) &&
      (zaraiBalanceQuery.isLoading ||
        usdtBalanceQuery.isLoading ||
        allowanceQuery.isLoading ||
        bnbBalanceQuery.isLoading),
    saleReadError:
      saleEnabledQuery.error ??
      tokenPriceQuery.error ??
      priceDenominatorQuery.error ??
      saleInventoryQuery.error,
    accountReadError:
      zaraiBalanceQuery.error ??
      usdtBalanceQuery.error ??
      allowanceQuery.error ??
      bnbBalanceQuery.error,
    refresh,
  };
}
