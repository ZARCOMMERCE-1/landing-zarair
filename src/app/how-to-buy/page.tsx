import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/sections/Footer";
import { BSCSCAN_BASE_URL, PAYMENT_TOKEN_ADDRESS } from "@/lib/contracts";
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
          <p>
            These steps describe purchasing ZARAI tokens through
            the sale contract on BNB Smart Chain Mainnet (chain ID 56).
          </p>
          <p>
            ZARAI can lose all value. Availability may be subject to applicable
            laws and restrictions in your jurisdiction. Read the{" "}
            <Link href="/whitepaper#risk-information">risk information</Link> before purchasing.
          </p>
        </div>

        <section
          className="how-to-video-section"
          aria-labelledby="learning-video-title"
        >
          <div className="how-to-video-heading">
            <span>Video walkthrough</span>
            <h2 id="learning-video-title">ZARAI purchase walkthrough</h2>
            <p id="learning-video-description">
              Watch the complete purchase process, then use the written guide
              below as a step-by-step reference.
            </p>
          </div>
          <div className="how-to-video-frame">
            {/* The detailed written guide below provides an equivalent text alternative. */}
            <video
              className="how-to-video"
              controls
              preload="metadata"
              playsInline
              aria-describedby="learning-video-description"
            >
              <source
                src="/videos/zarair-how-to-buy.mp4"
                type="video/mp4"
              />
              Your browser does not support embedded videos. Use the written
              buying guide below instead.
            </video>
          </div>
          <p className="how-to-video-note">
            Before confirming a transaction, make sure your wallet is on BNB
            Chain and verify the official contract details shown on the site.
          </p>
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
                On desktop, MetaMask is available for Chrome, Firefox, Brave,
                and Edge. Select &ldquo;Add to Browser&rdquo; and confirm the
                extension installation.
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
                Never share your phrase with anyone. MetaMask staff will never
                ask for it.
              </li>
            </ul>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Get USDT (BEP-20)</h3>
            <ul className="step-list">
              <li>ZARAI tokens are purchased with USDT on BNB Chain.</li>
              <li>You also need BNB on BNB Smart Chain to pay network fees for approval and purchase.</li>
              <li>
                Buy USDT on an exchange and withdraw it using the{" "}
                <strong>BNB Smart Chain (BEP-20)</strong> network.
              </li>
              <li className="step-warning">
                Do NOT withdraw via ERC-20 or other networks — your funds will
                not arrive on BNB Chain.
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
                <Link href="/">home page</Link> to link your MetaMask.
              </li>
              <li>
                On mobile Chrome, the connect button opens the installed
                MetaMask app. Approve the connection there, then return to
                Chrome to continue.
              </li>
              <li>
                Click <strong>&ldquo;Purchase ZARAI&rdquo;</strong> and enter the
                amount of ZARAI you want to purchase.
              </li>
              <li>
                First, approve the sale contract to spend the required USDT
                amount, then confirm the separate purchase transaction.
              </li>
              <li>
                Each transaction requires a confirmation in your MetaMask popup
                — review the details and click Confirm.
              </li>
              <li>
                After confirmation, your ZARAI balance will update
                automatically.
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
