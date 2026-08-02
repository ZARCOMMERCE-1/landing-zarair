"use client";

import { useQuery } from "@tanstack/react-query";
import type { Address, Hash } from "viem";
import { usePublicClient } from "wagmi";
import { tokensPurchasedEvent } from "@/lib/abis";
import {
  BSCSCAN_BASE_URL,
  CHAIN_ID,
  SALE_CONTRACT_ADDRESS,
} from "@/lib/contracts";

const BLOCK_LOOKBACK = 50_000n;
const LOG_CHUNK_SIZE = 4_500n;
const MAX_EVENTS = 100;

export type SalePurchaseEvent = {
  txHash: Hash;
  buyer: Address;
  zaraiAmount: bigint;
  usdtAmount: bigint;
  blockNumber: bigint;
  logIndex: number;
  bscscanUrl: string;
};

export function useSaleEvents() {
  const publicClient = usePublicClient({ chainId: CHAIN_ID });

  return useQuery({
    queryKey: ["zarai-sale-purchases", CHAIN_ID, SALE_CONTRACT_ADDRESS],
    enabled: Boolean(publicClient),
    staleTime: 30_000,
    refetchInterval: 60_000,
    queryFn: async (): Promise<SalePurchaseEvent[]> => {
      if (!publicClient) {
        return [];
      }

      const latestBlock = await publicClient.getBlockNumber();
      const earliestBlock =
        latestBlock > BLOCK_LOOKBACK ? latestBlock - BLOCK_LOOKBACK : 0n;
      const purchases: SalePurchaseEvent[] = [];
      let toBlock = latestBlock;

      while (toBlock >= earliestBlock && purchases.length < MAX_EVENTS) {
        const candidateFrom =
          toBlock >= LOG_CHUNK_SIZE ? toBlock - LOG_CHUNK_SIZE + 1n : 0n;
        const fromBlock =
          candidateFrom > earliestBlock ? candidateFrom : earliestBlock;
        const logs = await publicClient.getLogs({
          address: SALE_CONTRACT_ADDRESS,
          event: tokensPurchasedEvent,
          fromBlock,
          toBlock,
        });

        for (const log of logs) {
          if (
            !log.transactionHash ||
            log.blockNumber === null ||
            !log.args.buyer ||
            log.args.zaraiAmount === undefined ||
            log.args.paymentAmount === undefined
          ) {
            continue;
          }

          purchases.push({
            txHash: log.transactionHash,
            buyer: log.args.buyer,
            zaraiAmount: log.args.zaraiAmount,
            usdtAmount: log.args.paymentAmount,
            blockNumber: log.blockNumber,
            logIndex: log.logIndex ?? 0,
            bscscanUrl: `${BSCSCAN_BASE_URL}/tx/${log.transactionHash}`,
          });
        }

        if (fromBlock === earliestBlock) {
          break;
        }

        toBlock = fromBlock - 1n;
      }

      return purchases
        .sort((left, right) => {
          if (left.blockNumber === right.blockNumber) {
            return right.logIndex - left.logIndex;
          }

          return left.blockNumber > right.blockNumber ? -1 : 1;
        })
        .slice(0, MAX_EVENTS);
    },
  });
}
