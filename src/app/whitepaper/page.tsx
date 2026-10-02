import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/sections/Footer";
import {
  BSCSCAN_BASE_URL,
  PAYMENT_TOKEN_ADDRESS,
  SALE_CONTRACT_ADDRESS,
  TOKEN_DECIMALS,
  ZARAI_TOKEN_ADDRESS,
} from "@/lib/contracts";

export const metadata: Metadata = {
  title: "Project Overview | Zar Air (ZARAI)",
  description:
    "A factual overview of Zar Air (ZARAI), a BEP-20 token on BNB Smart Chain.",
  alternates: { canonical: "/whitepaper" },
  openGraph: {
    title: "Project Overview | Zar Air (ZARAI)",
    description:
      "A factual overview of Zar Air (ZARAI), a BEP-20 token on BNB Smart Chain.",
    url: "/whitepaper",
    siteName: "Zar Air",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Zar Air logo" }],
  },
};

export default function ProjectOverviewPage() {
  return (
    <>
      <nav>
        <Link className="logo" href="/" style={{ textDecoration: "none" }}>
          <Logo />
        </Link>
      </nav>
      <main className="whitepaper" style={{ paddingTop: "6rem" }}>
        <Link className="back-to-home" href="/">Back to Home</Link>
        <h1>Zar Air Project Overview</h1>
        <h2>1. Executive Overview</h2>
        <p>
          Zar Air (ZARAI) is a BEP-20 token deployed on BNB Smart Chain for the
          Zar Air ecosystem. ZARAI is designed to support digital services and
          token-based utilities within the Zar Air project. The token has a
          fixed total supply of 1,400,000 ZARAI.
        </p>
        <p>
          This document describes the current project information and purchase
          interface. Future concepts are identified separately from existing
          functionality.
        </p>
        <hr />
        <h2>2. Token Information</h2>
        <ul>
          <li><strong>Token Name:</strong> Zar Air</li>
          <li><strong>Symbol:</strong> ZARAI</li>
          <li><strong>Network:</strong> BNB Smart Chain Mainnet (Chain ID 56)</li>
          <li><strong>Standard:</strong> BEP-20</li>
          <li><strong>Decimals:</strong> {TOKEN_DECIMALS}</li>
          <li><strong>Total Supply:</strong> 1,400,000 ZARAI</li>
          <li>
            <strong>Token Contract:</strong>{" "}
            <a href={`${BSCSCAN_BASE_URL}/address/${ZARAI_TOKEN_ADDRESS}`} target="_blank" rel="noreferrer" style={{ overflowWrap: "anywhere" }}>
              {ZARAI_TOKEN_ADDRESS}
            </a>
          </li>
          <li>
            <strong>Sale Contract:</strong>{" "}
            <a href={`${BSCSCAN_BASE_URL}/address/${SALE_CONTRACT_ADDRESS}`} target="_blank" rel="noreferrer" style={{ overflowWrap: "anywhere" }}>
              {SALE_CONTRACT_ADDRESS}
            </a>
          </li>
        </ul>
        <p>
          <a href={`${BSCSCAN_BASE_URL}/token/${ZARAI_TOKEN_ADDRESS}`} target="_blank" rel="noreferrer">View Token on BscScan</a>
          {" · "}
          <Link href="/how-to-buy">How to Buy</Link>
        </p>
        <hr />
        <h2>3. Current Technical Architecture</h2>
        <p>
          The ZARAI token contract and the sale contract have separate roles.
          The token contract represents ZARAI balances and token transfers.
          The sale contract provides the USDT purchase mechanism used by this
          website. Users connect a wallet and review each transaction before
          signing it; connecting a wallet does not make a purchase.
        </p>
        <p>
          The interface reads sale status, sale inventory and pricing from the
          sale contract. Contract addresses and public transaction records can
          be inspected independently on BscScan.
        </p>
        <hr />
        <h2>4. Token Supply</h2>
        <p>
          The project&apos;s stated fixed total supply is 1,400,000 ZARAI.
          Total supply is distinct from circulating supply and from the
          inventory available through the sale contract. No allocation
          percentages or token-locking schedule are published in this overview.
        </p>
        <hr />
        <h2>5. Current Functionality</h2>
        <ul>
          <li>A BEP-20 token on BNB Smart Chain Mainnet.</li>
          <li>Wallet connection and balance display.</li>
          <li>A separate sale interface using USDT on BNB Smart Chain.</li>
          <li>Separate wallet confirmations for USDT approval and purchase.</li>
          <li>Links to token and sale-contract records on BscScan.</li>
        </ul>
        <p>
          The sale contract exposes owner controls for sale availability and
          pricing. Its displayed settings and inventory can change. Future
          utility described below is not part of the current purchase mechanism.
        </p>
        <hr />
        <h2>6. Current Sale Mechanism</h2>
        <p>
          Purchases use USDT on BNB Smart Chain, with BNB required for network
          transaction fees. The payment token address used by the interface is{" "}
          <a href={`${BSCSCAN_BASE_URL}/token/${PAYMENT_TOKEN_ADDRESS}`} target="_blank" rel="noreferrer" style={{ overflowWrap: "anywhere" }}>
            {PAYMENT_TOKEN_ADDRESS}
          </a>.
        </p>
        <p>
          The interface calculates the required USDT from the requested ZARAI
          amount and the sale contract&apos;s current pricing parameters. If an
          allowance is needed, the user first authorizes the sale contract to
          spend that USDT amount, then separately confirms the purchase.
          Transactions may fail if sale conditions change before execution.
        </p>
        <p>
          <strong>Current sale contract price</strong> means the purchase price
          set in that contract. It is not a secondary-market quote, redemption
          value or promise of future value. Read the{" "}
          <Link href="/how-to-buy">purchase guide</Link> and the risk information
          below before interacting with the sale.
        </p>
        <hr />
        <h2>7. Future Concepts — Under Evaluation</h2>
        <p>
          The project may evaluate additional digital services, utility, reward
          and travel-related features. Any such functionality would require
          separate technical, commercial and applicable regulatory review before
          implementation.
        </p>
        <p>
          Implementation details, eligibility and redemption rules are not
          finalized. These concepts create no current on-chain claim or
          contractual entitlement. Availability and delivery are not guaranteed,
          and no implementation dates are stated.
        </p>
        <hr />
        <h2>8. Transparency &amp; Verification</h2>
        <p>
          Compare the official addresses in this document with your wallet before
          signing. Use the token address for ZARAI and the separate sale address
          for the purchase mechanism.
        </p>
        <ul>
          <li><a href={`${BSCSCAN_BASE_URL}/token/${ZARAI_TOKEN_ADDRESS}`} target="_blank" rel="noreferrer">ZARAI token records</a></li>
          <li><a href={`${BSCSCAN_BASE_URL}/address/${ZARAI_TOKEN_ADDRESS}`} target="_blank" rel="noreferrer">ZARAI token contract</a></li>
          <li><a href={`${BSCSCAN_BASE_URL}/address/${SALE_CONTRACT_ADDRESS}`} target="_blank" rel="noreferrer">ZARAI sale contract</a></li>
        </ul>
        <p>
          Public blockchain records support independent inspection. Explorer
          links do not establish a security audit or endorsement by BscScan,
          BNB Chain or a regulator.
        </p>
        <hr />
        <h2 id="risk-information">9. Important Risk Information</h2>
        <ul>
          <li>Crypto assets can fluctuate significantly and lose all value.</li>
          <li>Liquidity can vary; a purchase does not ensure a resale market.</li>
          <li>Blockchain transactions can be irreversible, and smart-contract interactions carry technical risks.</li>
          <li>Verify the network and contract addresses, and understand approvals and purchases before signing.</li>
          <li>Availability may be subject to applicable laws and restrictions in your jurisdiction.</li>
        </ul>
        <hr />
        <h2>10. Official Contact</h2>
        <p>
          <a href="https://zarair.com">zarair.com</a>
          {" · "}
          <a href="mailto:info@zarair.com">info@zarair.com</a>
        </p>
      </main>
      <Footer />
    </>
  );
}
