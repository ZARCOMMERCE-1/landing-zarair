import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ProjectAllocation } from "@/components/ProjectAllocation";
import { ProjectTeam } from "@/components/ProjectTeam";
import { Footer } from "@/components/sections/Footer";
import {
  BSCSCAN_BASE_URL,
  PAYMENT_TOKEN_ADDRESS,
  SALE_CONTRACT_ADDRESS,
  TOKEN_DECIMALS,
  ZARAI_TOKEN_ADDRESS,
} from "@/lib/contracts";
import {
  FUTURE_FEATURES_STATEMENT,
  JURISDICTION_STATEMENT,
  SALE_CHANNEL_STATEMENT,
  TOKEN_RIGHTS_STATEMENT,
} from "@/lib/project-content";

export const metadata: Metadata = {
  title: "Project Overview | Zar Air (ZARAI)",
  description:
    "Zar Air project information, team, initial allocation, token rights and future plans for ZARAI on BNB Smart Chain.",
  alternates: { canonical: "/whitepaper" },
  openGraph: {
    title: "Project Overview | Zar Air (ZARAI)",
    description:
      "Zar Air project information, team, initial allocation, token rights and future plans for ZARAI on BNB Smart Chain.",
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
        <p>
          This overview describes the current token and purchase interface,
          owner-approved project policies, and future concepts. Project
          information and policies may be updated as the project develops.
        </p>
        <h2>1. Project Overview</h2>
        <p>
          Zar Air (ZARAI) is a fixed-supply BEP-20 token on BNB Smart Chain
          supporting the development of the Zar Air project. The project
          includes a planned low-cost airline concept and future digital,
          loyalty and travel-related utility under evaluation.
        </p>
        <p>
          Current functionality is the deployed token and wallet purchase
          flow. The future airline and travel concepts require separate
          implementation before services can become available.
        </p>
        <hr />
        <h2>2. Project Team &amp; Supporting Entity</h2>
        <ProjectTeam compact />
        <hr />
        <h2>3. Token Specifications</h2>
        <ul>
          <li><strong>Token Name:</strong> Zar Air</li>
          <li><strong>Symbol:</strong> ZARAI</li>
          <li><strong>Network:</strong> BNB Smart Chain Mainnet (Chain ID 56)</li>
          <li><strong>Standard:</strong> BEP-20</li>
          <li><strong>Decimals:</strong> {TOKEN_DECIMALS}</li>
          <li><strong>Fixed Total Supply:</strong> 1,400,000 ZARAI</li>
          <li><strong>Payment Token:</strong> USDT on BNB Smart Chain</li>
        </ul>
        <p>
          Total supply is distinct from circulating supply and the current
          inventory available through the sale contract.
        </p>
        <hr />
        <h2>4. Token Rights</h2>
        <p>{TOKEN_RIGHTS_STATEMENT}</p>
        <hr />
        <h2>5. Initial Token Allocation</h2>
        <ProjectAllocation />
        <hr />
        <h2>6. Current Sale Architecture</h2>
        <p>{SALE_CHANNEL_STATEMENT}</p>
        <p>
          The token contract represents ZARAI balances and transfers. The
          separate sale contract provides the USDT purchase mechanism. Users
          control their own wallet and review each transaction before signing;
          connecting a wallet does not make a purchase.
        </p>
        <p>
          The website reads sale availability and pricing parameters from the
          sale contract. Current Sale Inventory is the ZARAI token balance of
          the sale contract, read on-chain. It is separate from the initial
          560,000 ZARAI sale allocation.
        </p>
        <p>
          The interface calculates the required USDT for the requested ZARAI
          amount. When the existing allowance is insufficient, it requests
          approval for that calculated USDT amount, followed by a separate
          purchase confirmation. BNB is required for network fees.
        </p>
        <p>
          The current Sale Contract price is the purchase price set in that
          contract. It is not a secondary-market quote or a guaranteed resale
          or redemption value. Sale conditions may change before a transaction
          executes. See the <Link href="/how-to-buy">purchase guide</Link>.
        </p>
        <hr />
        <h2>7. Current Functionality</h2>
        <ul>
          <li>A BEP-20 token on BNB Smart Chain Mainnet.</li>
          <li>Wallet connection and token balance display.</li>
          <li>A separate USDT purchase flow with approval and purchase confirmations.</li>
          <li>Live reads of sale availability, Sale Contract price and current Sale Inventory.</li>
          <li>Links to public token, contract and transaction records on BscScan.</li>
        </ul>
        <p>
          Sale availability and pricing are subject to the sale contract&apos;s
          owner controls. Travel redemption and reward services are not part
          of the current purchase mechanism.
        </p>
        <hr />
        <h2>8. Owner Allocation Policy</h2>
        <p>
          The policy disclosed with the initial allocation is a management
          policy about the 60% project/owner allocation. It does not make
          those tokens technically non-transferable.
        </p>
        <p>
          Initial allocation figures are not current wallet balances.
          Current on-chain balances may change as permitted transfers or
          purchases occur. Changes to project policy will require updated
          project disclosures.
        </p>
        <hr />
        <h2>9. Future Airline &amp; Travel Concept</h2>
        <p>
          Zar Air&apos;s planned low-cost airline is a future project concept.
          The concept requires separate technical, commercial and applicable
          licensing work before flights can be offered. ZARAI does not
          currently provide flight redemption.
        </p>
        <p>{FUTURE_FEATURES_STATEMENT}</p>
        <p>
          Feature details, eligibility and redemption rules are not finalized.
          Purchasing ZARAI does not create an entitlement to unreleased
          features, rewards or services, and implementation is not guaranteed.
        </p>
        <hr />
        <h2>10. Roadmap</h2>
        <ul>
          <li>
            <strong>Phase 1 — Live:</strong> ZARAI token and Sale Contract
            deployed on BNB Smart Chain Mainnet, with the website and wallet
            purchase flow.
          </li>
          <li>
            <strong>Phase 2 — Development / Evaluation:</strong> Digital
            ecosystem services and the technical, commercial and regulatory
            work required for future features.
          </li>
          <li>
            <strong>Phase 3 — Planned Airline / Travel Ecosystem:</strong> A
            future project subject to separate implementation and approvals
            where required. No launch date or current flight entitlement is
            promised.
          </li>
        </ul>
        <hr />
        <h2 id="risk-information">11. Risk Information</h2>
        <p>
          Crypto assets can fluctuate significantly and may lose all value.
          Liquidity and a resale market are not assured. Wallet and
          smart-contract interactions carry technical risks, and future
          features may not be implemented.
        </p>
        <p>
          Read the <Link href="/risk-disclosure">full Risk Disclosure</Link>
          {" "}before purchasing or interacting with ZARAI.
        </p>
        <hr />
        <h2>12. Regulatory &amp; Jurisdiction Information</h2>
        <p>{JURISDICTION_STATEMENT}</p>
        <p>
          Project statements do not establish a regulatory licence or
          approval. Company formation records establish incorporation only.
          BscScan is a blockchain explorer; publication of token information
          or verification of contract source code does not establish legal
          approval or certification of the business model.
        </p>
        <hr />
        <h2>13. Official Contracts</h2>
        <p>
          Verify BNB Smart Chain Mainnet (Chain ID 56) and these addresses
          against your wallet before signing a transaction.
        </p>
        <ul>
          <li>
            <strong>ZARAI Token:</strong>{" "}
            <a href={`${BSCSCAN_BASE_URL}/token/${ZARAI_TOKEN_ADDRESS}`} target="_blank" rel="noreferrer" style={{ overflowWrap: "anywhere" }}>
              {ZARAI_TOKEN_ADDRESS}
            </a>
          </li>
          <li>
            <strong>Sale Contract:</strong>{" "}
            <a href={`${BSCSCAN_BASE_URL}/address/${SALE_CONTRACT_ADDRESS}`} target="_blank" rel="noreferrer" style={{ overflowWrap: "anywhere" }}>
              {SALE_CONTRACT_ADDRESS}
            </a>
          </li>
          <li>
            <strong>USDT Payment Token:</strong>{" "}
            <a href={`${BSCSCAN_BASE_URL}/token/${PAYMENT_TOKEN_ADDRESS}`} target="_blank" rel="noreferrer" style={{ overflowWrap: "anywhere" }}>
              {PAYMENT_TOKEN_ADDRESS}
            </a>
          </li>
        </ul>
        <p>
          Public blockchain records support independent inspection. Explorer
          links do not establish a security audit or an endorsement by
          BscScan, BNB Chain or a regulator.
        </p>
        <hr />
        <h2>14. Official Channels</h2>
        <p>
          <a href="https://zarair.com">zarair.com</a>
          {" · "}
          <a href="mailto:info@zarair.com">info@zarair.com</a>
        </p>
        <p>
          Zar Air support will never request your seed phrase or private key.
          Use the official website and verify contract addresses before
          responding to purchase instructions.
        </p>
      </main>
      <Footer />
    </>
  );
}
