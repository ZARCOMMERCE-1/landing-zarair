export const erc20Abi = [
  {
    type: "function",
    name: "balanceOf",
    stateMutability: "view",
    inputs: [{ name: "account", type: "address" }],
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    type: "function",
    name: "decimals",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "uint8" }],
  },
  {
    type: "function",
    name: "symbol",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "string" }],
  },
  {
    type: "function",
    name: "allowance",
    stateMutability: "view",
    inputs: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
    ],
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    type: "function",
    name: "approve",
    stateMutability: "nonpayable",
    inputs: [
      { name: "spender", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    outputs: [{ name: "", type: "bool" }],
  },
] as const;

export const tokensPurchasedEvent = {
  type: "event",
  name: "TokensPurchased",
  anonymous: false,
  inputs: [
    { indexed: true, name: "buyer", type: "address" },
    { indexed: false, name: "zaraiAmount", type: "uint256" },
    { indexed: false, name: "paymentAmount", type: "uint256" },
  ],
} as const;

// Minimal interface taken from the verified ZarAirTokenSale contract on BscScan.
export const saleAbi = [
  {
    type: "function",
    name: "PRICE_DENOMINATOR",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    type: "function",
    name: "buyTokens",
    stateMutability: "nonpayable",
    inputs: [{ name: "zaraiAmount", type: "uint256" }],
    outputs: [],
  },
  {
    type: "function",
    name: "owner",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "address" }],
  },
  {
    type: "function",
    name: "paymentToken",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "address" }],
  },
  {
    type: "function",
    name: "saleEnabled",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "bool" }],
  },
  {
    type: "function",
    name: "tokenPrice",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    type: "function",
    name: "treasury",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "address" }],
  },
  {
    type: "function",
    name: "zaraiToken",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "address" }],
  },
  {
    type: "function",
    name: "setSaleEnabled",
    stateMutability: "nonpayable",
    inputs: [{ name: "enabled", type: "bool" }],
    outputs: [],
  },
  {
    type: "function",
    name: "setTokenPrice",
    stateMutability: "nonpayable",
    inputs: [{ name: "newTokenPrice", type: "uint256" }],
    outputs: [],
  },
  {
    type: "function",
    name: "withdrawUnsoldTokens",
    stateMutability: "nonpayable",
    inputs: [
      { name: "to", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    outputs: [],
  },
  tokensPurchasedEvent,
  {
    type: "event",
    name: "PriceUpdated",
    anonymous: false,
    inputs: [
      { indexed: false, name: "oldPrice", type: "uint256" },
      { indexed: false, name: "newPrice", type: "uint256" },
    ],
  },
  {
    type: "event",
    name: "SaleStatusUpdated",
    anonymous: false,
    inputs: [{ indexed: false, name: "enabled", type: "bool" }],
  },
  {
    type: "event",
    name: "UnsoldTokensWithdrawn",
    anonymous: false,
    inputs: [
      { indexed: true, name: "to", type: "address" },
      { indexed: false, name: "amount", type: "uint256" },
    ],
  },
] as const;
