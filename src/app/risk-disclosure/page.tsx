import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/sections/Footer";
import {
  ALLOCATION_POLICY_STATEMENT,
  ALLOCATION_TECHNICAL_DISCLOSURE,
  JURISDICTION_STATEMENT,
  TOKEN_RIGHTS_STATEMENT,
} from "@/lib/project-content";

export const metadata: Metadata = {
  title: "Risk Disclosure | Zar Air (ZARAI)",
  description:
    "Understand ZARAI token rights, price, liquidity, allocation, future feature and wallet risks before purchasing.",
  alternates: { canonical: "/risk-disclosure" },
  openGraph: {
    title: "Risk Disclosure | Zar Air (ZARAI)",
    description:
      "Understand ZARAI token rights, price, liquidity, allocation, future feature and wallet risks before purchasing.",
    url: "/risk-disclosure",
    siteName: "Zar Air",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Zar Air logo" }],
  },
};

export default function RiskDisclosurePage() {
  return (
    <>
      <nav>
        <Link className="logo" href="/" style={{ textDecoration: "none" }}>
          <Logo />
        </Link>
      </nav>
      <main className="whitepaper" style={{ paddingTop: "6rem" }}>
        <Link className="back-to-home" href="/">Back to Home</Link>
        <h1>Risk Disclosure</h1>
        <p>
          Review this information before purchasing or interacting with ZARAI.
          The <Link href="/whitepaper">Project Overview</Link> describes the
          current functionality, project policies and future concepts.
        </p>
        <h2>1. Volatility &amp; Liquidity</h2>
        <p>
          Crypto assets can fluctuate significantly in value. Users should
          consider the risks before purchasing or interacting with ZARAI.
          You may lose some or all of the amount paid.
        </p>
        <p>
          A purchase does not ensure a resale market or sufficient liquidity.
          You may be unable to sell ZARAI when you want or at the price you
          expect.
        </p>
        <hr />
        <h2>2. Token Rights &amp; Regulatory Treatment</h2>
        <p>{TOKEN_RIGHTS_STATEMENT}</p>
        <p>
          Company formation records establish incorporation only. They do
          not establish an airline, crypto or financial-services licence.
          BscScan is a blockchain explorer; contract verification or token
          information publication does not constitute regulatory approval.
        </p>
        <hr />
        <h2>3. Future Functionality</h2>
        <p>
          Future features remain under evaluation and may not be implemented.
          Purchasing ZARAI does not create an entitlement to unreleased
          features, rewards or services.
        </p>
        <p>
          The planned low-cost airline and travel-related concepts require
          separate technical, commercial and regulatory implementation.
          ZARAI does not currently provide flight redemption.
        </p>
        <hr />
        <h2>4. Jurisdiction</h2>
        <p>{JURISDICTION_STATEMENT}</p>
        <hr />
        <h2>5. Blockchain &amp; Wallet</h2>
        <ul>
          <li>
            Verify BNB Smart Chain Mainnet (Chain ID 56), the official website
            and contract addresses before signing. See the{" "}
            <Link href="/how-to-buy">purchase guide and address checklist</Link>.
          </li>
          <li>
            Blockchain transactions can be irreversible. Incorrect addresses,
            the wrong network or malicious approvals can result in loss of
            tokens or funds.
          </li>
          <li>
            You control your wallet and private keys. Protect your recovery
            information; Zar Air support will never request your seed phrase
            or private key.
          </li>
          <li>
            Smart contracts, wallets and network services carry technical
            risks, including bugs, outages and failed transactions. Network
            fees may be charged even when a transaction fails.
          </li>
          <li>
            Review USDT approval and purchase as separate wallet actions.
            Connecting a wallet or acknowledging this disclosure does not
            authorize either transaction.
          </li>
        </ul>
        <hr />
        <h2>6. Sale Contract Price</h2>
        <p>
          The displayed purchase price is the current official Sale Contract
          price. It is not a secondary-market quote or a guaranteed resale
          or redemption value.
        </p>
        <p>
          Sale availability, price and inventory can change before a
          transaction executes. Current Sale Inventory is read from the
          ZARAI token balance of the Sale Contract; it is not the initial
          sale allocation. Review the current figures and wallet request
          before signing.
        </p>
        <hr />
        <h2>7. Information &amp; Advice</h2>
        <p>
          This website provides project information and does not provide
          individual financial, legal or tax advice.
        </p>
        <hr />
        <h2>8. Project / Owner Allocation</h2>
        <p>
          The initial project/owner allocation was 60% of total supply
          (840,000 ZARAI). This figure describes initial allocation rather
          than a verified current wallet balance.
        </p>
        <p>{ALLOCATION_POLICY_STATEMENT}</p>
        <p>{ALLOCATION_TECHNICAL_DISCLOSURE}</p>
        <p>
          A concentrated allocation and subsequent transfers or sales may
          affect liquidity and market conditions.
        </p>
        <p>
          Official contact: <a href="mailto:info@zarair.com">info@zarair.com</a>.
        </p>
      </main>
      <Footer />
    </>
  );
}
