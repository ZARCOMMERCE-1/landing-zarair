"use client";

import { useReadContract } from "wagmi";
import { erc20Abi, saleAbi } from "@/lib/abis";
import {
  CHAIN_ID,
  PAYMENT_TOKEN_ADDRESS,
  SALE_CONTRACT_ADDRESS,
  TREASURY_WALLET_ADDRESS,
  ZARAI_TOKEN_ADDRESS,
} from "@/lib/contracts";

export function useAdminSaleDashboard() {
  const ownerQuery = useReadContract({
    address: SALE_CONTRACT_ADDRESS,
    abi: saleAbi,
    functionName: "owner",
    chainId: CHAIN_ID,
  });
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
  const contractTreasuryQuery = useReadContract({
    address: SALE_CONTRACT_ADDRESS,
    abi: saleAbi,
    functionName: "treasury",
    chainId: CHAIN_ID,
  });
  const contractZaraiTokenQuery = useReadContract({
    address: SALE_CONTRACT_ADDRESS,
    abi: saleAbi,
    functionName: "zaraiToken",
    chainId: CHAIN_ID,
  });
  const contractPaymentTokenQuery = useReadContract({
    address: SALE_CONTRACT_ADDRESS,
    abi: saleAbi,
    functionName: "paymentToken",
    chainId: CHAIN_ID,
  });
  const saleInventoryQuery = useReadContract({
    address: ZARAI_TOKEN_ADDRESS,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [SALE_CONTRACT_ADDRESS],
    chainId: CHAIN_ID,
  });
  const treasuryUsdtBalanceQuery = useReadContract({
    address: PAYMENT_TOKEN_ADDRESS,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [contractTreasuryQuery.data ?? TREASURY_WALLET_ADDRESS],
    chainId: CHAIN_ID,
  });

  const queries = [
    ownerQuery,
    saleEnabledQuery,
    tokenPriceQuery,
    priceDenominatorQuery,
    contractTreasuryQuery,
    contractZaraiTokenQuery,
    contractPaymentTokenQuery,
    saleInventoryQuery,
    treasuryUsdtBalanceQuery,
  ];

  async function refresh() {
    await Promise.all(queries.map((query) => query.refetch()));
  }

  return {
    owner: ownerQuery.data,
    saleEnabled: saleEnabledQuery.data,
    tokenPrice: tokenPriceQuery.data,
    priceDenominator: priceDenominatorQuery.data,
    contractTreasury: contractTreasuryQuery.data,
    contractZaraiToken: contractZaraiTokenQuery.data,
    contractPaymentToken: contractPaymentTokenQuery.data,
    saleInventory: saleInventoryQuery.data,
    treasuryUsdtBalance: treasuryUsdtBalanceQuery.data,
    isLoading: queries.some((query) => query.isLoading),
    readError: queries.find((query) => query.error)?.error,
    refresh,
  };
}
