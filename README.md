# ZARAIR Landing Page

Next.js App Router landing page with a live ZARAI token-sale flow on BNB Chain Mainnet.

The frontend connects to an injected wallet such as MetaMask, validates chain ID `56`, reads the live sale status and price, displays wallet balances, requests an exact USDT allowance when needed, and calls the verified sale contract to purchase ZARAI.

## Requirements

- Node.js 20.9 or newer
- pnpm
- MetaMask or another injected EVM wallet
- USDT on BNB Chain Mainnet for the purchase
- BNB on BNB Chain Mainnet for network fees

The frontend never needs a private key or seed phrase. Do not add `PRIVATE_KEY`, a seed phrase, or any other wallet secret to `.env.local`, the repository, or the hosting provider.

## Environment

Copy `.env.example` to `.env.local`. These are public frontend values:

```dotenv
NEXT_PUBLIC_CHAIN_ID=56
NEXT_PUBLIC_CHAIN_NAME=BNB Chain
NEXT_PUBLIC_ZARAI_TOKEN_ADDRESS=0xb6F69E830E13f6Dd57edBCC7B12d18299E131323
NEXT_PUBLIC_SALE_CONTRACT_ADDRESS=0xb509dF201C4dA14cCc1Ce925ba7ad7Db33Ae6AcF
NEXT_PUBLIC_PAYMENT_TOKEN_ADDRESS=0x55d398326f99059fF775485246999027B3197955
NEXT_PUBLIC_BSCSCAN_BASE_URL=https://bscscan.com
```

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Production checks:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

## Wallet flow

1. Select **Connect Wallet** and approve the connection in MetaMask.
2. The connected address is shortened in the navigation.
3. If the wallet is on another network, select **Switch to BNB Chain**. The connector first requests `wallet_switchEthereumChain` and supplies the configured BNB Chain details if the wallet needs to add chain `56`.
4. **Buy Now** is enabled only when the wallet is connected, BNB Chain is active, and the live sale contract reports that the sale is enabled.

## Test a small purchase

Use a wallet that contains a small amount of both USDT and BNB on BNB Chain Mainnet.

1. Connect the wallet and verify the displayed ZARAI, USDT, allowance, and BNB balances.
2. Open **Buy Now** and enter a small ZARAI amount.
3. Confirm that the required USDT is calculated from the live `tokenPrice()` value.
4. If the allowance is too low, select **Approve USDT** and manually confirm the exact allowance in the wallet.
5. Wait for the approval confirmation, then select **Buy ZARAI** and manually confirm the separate purchase transaction.
6. Open the provided BscScan links and verify both receipts.
7. Confirm that the ZARAI and USDT balances refresh after the purchase.

Transactions are never submitted automatically. The user must confirm every approval and purchase request in the wallet.

## Production checklist

- [ ] Set all six `NEXT_PUBLIC_` environment variables in the hosting provider.
- [ ] Configure and verify the production domain.
- [ ] Re-check the ZARAI, sale, and USDT addresses against the verified BscScan pages.
- [ ] Confirm that `saleEnabled()` is true and `tokenPrice()` is the intended price.
- [ ] Confirm that the sale contract holds enough ZARAI inventory.
- [ ] Complete one small Mainnet purchase from the production domain.
- [ ] Verify that approval and purchase BscScan links open correctly.
- [ ] Confirm that no private key, seed phrase, or non-public wallet secret exists in the frontend repository or hosting environment.

## Contracts

- ZARAI token: [`0xb6F69E830E13f6Dd57edBCC7B12d18299E131323`](https://bscscan.com/token/0xb6F69E830E13f6Dd57edBCC7B12d18299E131323)
- Verified sale contract: [`0xb509dF201C4dA14cCc1Ce925ba7ad7Db33Ae6AcF`](https://bscscan.com/address/0xb509dF201C4dA14cCc1Ce925ba7ad7Db33Ae6AcF#code)
- USDT payment token: [`0x55d398326f99059fF775485246999027B3197955`](https://bscscan.com/token/0x55d398326f99059fF775485246999027B3197955)
