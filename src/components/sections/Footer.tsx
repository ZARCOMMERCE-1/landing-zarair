import { Logo } from "@/components/Logo";
import {
  BSCSCAN_BASE_URL,
  PAYMENT_TOKEN_ADDRESS,
  SALE_CONTRACT_ADDRESS,
  ZARAI_TOKEN_ADDRESS,
} from "@/lib/contracts";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <Logo size={40} />
            </div>
            <p>Zar Air (ZARAI) · BEP-20 token on BNB Smart Chain Mainnet.</p>
            <p><a href="mailto:info@zarair.com">info@zarair.com</a></p>
            <div style={{ marginTop: "1rem", fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
              <span style={{ color: "var(--sky-blue)" }}>BNB Smart Chain Mainnet</span> &middot;
              <span style={{ color: "var(--primary-gold)" }}> USDT payments</span> &middot;
              <span style={{ color: "var(--accent-gold)" }}> Sale contract pricing</span>
            </div>
          </div>
          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li><Link href="/#tokenomics">Token Information</Link></li>
              <li><a href={`${BSCSCAN_BASE_URL}/token/${ZARAI_TOKEN_ADDRESS}`} target="_blank" rel="noreferrer">View Token on BscScan</a></li>
              <li><a href={`${BSCSCAN_BASE_URL}/address/${ZARAI_TOKEN_ADDRESS}`} target="_blank" rel="noreferrer">Token Contract on BscScan</a></li>
              <li><a href={`${BSCSCAN_BASE_URL}/address/${SALE_CONTRACT_ADDRESS}`} target="_blank" rel="noreferrer">Sale Contract on BscScan</a></li>
              <li><a href={`${BSCSCAN_BASE_URL}/token/${PAYMENT_TOKEN_ADDRESS}`} target="_blank" rel="noreferrer">Payment Token</a></li>
              <li><Link href="/how-to-buy">How to Buy</Link></li>
              <li><Link href="/whitepaper">Project Overview</Link></li>
              <li><Link href="/whitepaper#risk-information">Risk Information</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Project</h4>
            <ul>
              <li><a href={BSCSCAN_BASE_URL} target="_blank" rel="noreferrer">BscScan Explorer</a></li>
              <li><a href="https://www.bnbchain.org/en" target="_blank" rel="noreferrer">BNB Chain</a></li>
              <li><a href="https://zarair.com">Official Website</a></li>
              <li><a href="mailto:info@zarair.com">Contact Zar Air</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Zar Air. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
