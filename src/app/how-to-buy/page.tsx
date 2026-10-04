import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/sections/Footer";
import {
  BSCSCAN_BASE_URL,
  CHAIN_ID,
  PAYMENT_TOKEN_ADDRESS,
  SALE_CONTRACT_ADDRESS,
  TOKEN_DECIMALS,
  ZARAI_TOKEN_ADDRESS,
} from "@/lib/contracts";
import {
  JURISDICTION_STATEMENT,
  SALE_CHANNEL_STATEMENT,
} from "@/lib/project-content";
import "../style.css";

export const metadata: Metadata = {
  title: "How to Buy ZARAI | Zar Air",
  alternates: { canonical: "/how-to-buy" },
  openGraph: {
    url: "https://zarair.com/how-to-buy",
    title: "How to Buy ZARAI | Zar Air",
    description: "Purchase Zar Air (ZARAI) with USDT on BNB Smart Chain through the sale contract.",
    siteName: "Zar Air",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Zar Air logo" }],
  },
};

export default function HowToBuy() {
  return (
    <>
      <nav>
        <Link href="/" className="logo" style={{ textDecoration: "none" }}>
          <Logo />
        </Link>
      </nav>

      <main className="how-to-page">
        <Link href="/" className="back-link">
          &larr; Back to Home
        </Link>

        <div className="how-to-header">
          <h1>How to Buy ZARAI</h1>
          <p>{SALE_CHANNEL_STATEMENT}</p>
          <p>
            Use BNB Smart Chain Mainnet (chain ID {CHAIN_ID}). Crypto assets can
            fluctuate significantly in value. {JURISDICTION_STATEMENT} Read the{" "}
            <Link href="/risk-disclosure">Risk Disclosure</Link> before purchasing.
          </p>
        </div>

        <section className="how-to-video-section" aria-labelledby="verify-before-buy-title">
          <div className="how-to-video-heading">
            <span>Official contracts</span>
            <h2 id="verify-before-buy-title">Verify Before You Buy</h2>
          </div>
          <ul className="step-list">
            {[
              { label: "Official ZARAI Token", address: ZARAI_TOKEN_ADDRESS, path: "/token/" },
              { label: "Official Sale Contract", address: SALE_CONTRACT_ADDRESS, path: "/address/" },
              { label: "Official USDT on BNB Smart Chain", address: PAYMENT_TOKEN_ADDRESS, path: "/token/" },
            ].map((contract) => (
              <li key={contract.address}>
                <strong>{contract.label}</strong>
                <a
                  className="contract-address"
                  href={`${BSCSCAN_BASE_URL}${contract.path}${contract.address}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {contract.address} ↗
                </a>
              </li>
            ))}
            <li>Always verify the contract address and network before signing a transaction.</li>
            <li>Zar Air will never ask for your seed phrase or private key.</li>
            <li>
              If you receive an unsolicited message claiming to represent Zar
              Air, verify it through <Link href="/">zarair.com</Link> or{" "}
              <a href="mailto:info@zarair.com">info@zarair.com</a>.
            </li>
          </ul>
        </section>

        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Install MetaMask</h3>
            <ul className="step-list">
              <li>
                Visit{" "}
                <a href="https://metamask.io/download" target="_blank" rel="noreferrer">
                  metamask.io
                </a>{" "}
                and choose the official browser extension or mobile app for
                your device.
              </li>
              <li>
                On mobile, install MetaMask from the verified App Store or
                Google Play link on the MetaMask download page.
              </li>
              <li>
                Follow the installation instructions for your device.
              </li>
            </ul>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Create Your Wallet</h3>
            <ul className="step-list">
              <li>
                Open MetaMask, choose the wallet creation method available on
                your device, and follow its setup instructions.
              </li>
              <li>Set a strong password to lock MetaMask on this device.</li>
              <li>
                <strong>
                  If you choose Secret Recovery Phrase setup, back up the phrase
                </strong>{" "}
                as instructed by MetaMask and keep it private.
              </li>
              <li>
                Never share your seed phrase or private key. Zar Air support
                will never request either.
              </li>
              <li>The website interface does not control or hold your private keys.</li>
            </ul>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Get USDT on BNB Smart Chain</h3>
            <ul className="step-list">
              <li>ZARAI tokens are purchased with the official USDT contract listed above.</li>
              <li>You also need BNB on BNB Smart Chain to pay network fees for approval and purchase.</li>
              <li>
                If withdrawing from an exchange, select the{" "}
                <strong>BNB Smart Chain (BEP-20)</strong> network and verify your
                receiving wallet address before submitting.
              </li>
              <li className="step-warning">
                USDT on Ethereum or another network cannot pay for this sale.
                Check both the network and token address before transferring.
              </li>
              <li>
                You can verify your USDT contract is correct on{" "}
                <a
                  href={BSCSCAN_BASE_URL + "/token/" + PAYMENT_TOKEN_ADDRESS}
                  target="_blank"
                  rel="noreferrer"
                >
                  BscScan
                </a>
                .
              </li>
            </ul>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Buy ZARAI</h3>
            <ul className="step-list">
              <li>
                Click <strong>&ldquo;Connect Wallet&rdquo;</strong> on the{" "}
                <Link href="/">home page</Link> and approve the wallet connection.
                Check that your wallet is on BNB Smart Chain Mainnet.
              </li>
              <li>
                Follow your wallet&apos;s connection prompts. On mobile, return
                to the website after completing the connection in your wallet.
              </li>
              <li>
                Click <strong>&ldquo;Purchase ZARAI&rdquo;</strong> and enter the
                amount, and review the current Sale Contract price and required USDT.
              </li>
              <li>
                Read the <Link href="/risk-disclosure">Risk Disclosure</Link>
                {" "}and select the reading acknowledgement. Selecting the
                checkbox does not submit a transaction or open a wallet request.
              </li>
              <li>
                If your existing USDT allowance is insufficient, the approval
                transaction authorizes the official Sale Contract to spend the
                exact USDT amount required for this purchase. Review the spender
                address and allowance amount in your wallet before signing.
              </li>
              <li>
                After approval confirms, select Buy ZARAI to submit the separate
                purchase transaction. If your existing allowance is sufficient,
                the approval step is skipped. Confirm each transaction separately
                in your wallet and review its details before signing.
              </li>
              <li>
                The displayed price is the current official Sale Contract price.
                It is not a secondary-market quote or a guaranteed resale or redemption value.
              </li>
            </ul>
          </div>

          <div className="step-card">
            <div className="step-number">5</div>
            <h3>Verify Your Purchase</h3>
            <ul className="step-list">
              <li>
                Open the purchase transaction using the BscScan link in the
                purchase window. Verify that <strong>Status = Success</strong>
                {" "}and that the transaction interacted with the official{" "}
                <a
                  href={`${BSCSCAN_BASE_URL}/address/${SALE_CONTRACT_ADDRESS}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Sale Contract
                </a>.
              </li>
              <li>
                Check the ZARAI transfer to your wallet and your updated balance
                in the purchase window or on the{" "}
                <a
                  href={`${BSCSCAN_BASE_URL}/token/${ZARAI_TOKEN_ADDRESS}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  ZARAI token page on BscScan
                </a>.
                A submitted transaction hash alone does not mean a purchase succeeded.
              </li>
              <li>
                If ZARAI is missing from your wallet display, select BNB Smart
                Chain Mainnet and use the wallet&apos;s custom-token import option.
                Enter the official token address below, verify the symbol and
                decimals, then confirm the import.
                <span className="step-detail contract-address">Token: {ZARAI_TOKEN_ADDRESS}</span>
                <span className="step-detail">Symbol: ZARAI · Decimals: {TOKEN_DECIMALS}</span>
                See{" "}
                <a
                  href="https://support.metamask.io/manage-crypto/tokens/how-to-display-tokens-in-metamask"
                  target="_blank"
                  rel="noreferrer"
                >
                  MetaMask&apos;s token-display instructions
                </a>.
              </li>
              <li>
                Importing a token only changes the wallet display; it does not
                transfer tokens. The website interface does not control or hold your private keys.
              </li>
            </ul>
          </div>

          <section className="step-card" aria-labelledby="purchase-faq-title">
            <h3 id="purchase-faq-title">Purchase FAQ</h3>
            <ul className="step-list">
              <li>
                <strong>Why do I need BNB?</strong> BNB pays the network fees on
                BNB Smart Chain. Keep enough for the purchase and, when needed,
                a separate USDT approval. Fees vary with network conditions.
              </li>
              <li>
                <strong>Which USDT can I use?</strong> Use USDT on BNB Smart
                Chain Mainnet at the official payment-token address listed above.
                A matching token name on another network is insufficient.
              </li>
              <li>
                <strong>Why are approval and purchase separate?</strong> USDT
                approval sets the amount the Sale Contract may spend from your
                wallet. The purchase transaction then pays USDT and transfers
                ZARAI. An approval alone does not buy ZARAI. Sufficient existing
                allowance lets you skip a new approval.
              </li>
              <li>
                <strong>What should I check in the approval?</strong> Verify the
                spender is the official Sale Contract and the allowance matches
                the required USDT amount. This website requests that exact
                amount, rather than unlimited allowance. Review every wallet request before signing.
              </li>
              <li>
                <strong>What if the network or address is wrong?</strong> Stop
                before signing and correct it. Blockchain transactions can be
                irreversible. If you already transferred funds, contact your
                wallet or exchange through its official support channel; recovery
                may not be possible.
              </li>
              <li>
                <strong>How do I verify a transaction?</strong> Use the BscScan
                transaction link, confirm Success, verify the Sale Contract
                interaction and ZARAI transfer, then check your wallet balance.
                Pending or reverted transactions are not completed purchases.
              </li>
              <li>
                <strong>Why is ZARAI not visible in my wallet?</strong> First
                verify the purchase and receiving address on BscScan. If the
                balance exists, follow Step 5 to import the official token with
                symbol ZARAI and {TOKEN_DECIMALS} decimals on BNB Smart Chain.
              </li>
              <li>
                <strong>How do I contact Zar Air?</strong> Email{" "}
                <a href="mailto:info@zarair.com">info@zarair.com</a> with the
                public transaction hash if needed. Never send your seed phrase
                or private key. Verify unsolicited messages through zarair.com or this email address.
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
