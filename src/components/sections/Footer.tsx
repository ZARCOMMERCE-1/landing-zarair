import { Logo } from "@/components/Logo";
import {
  BSCSCAN_BASE_URL,
  PAYMENT_TOKEN_ADDRESS,
  SALE_CONTRACT_ADDRESS,
  ZARAI_TOKEN_ADDRESS,
} from "@/lib/contracts";

export function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <Logo fill="#D4AF37" size={28} />
            </div>
            <p>Secure, efficient, global airline travel.</p>
            <div style={{ marginTop: "1rem", fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
              <span style={{ color: "var(--sky-blue)" }}>BNB Chain Mainnet</span> &middot;
              <span style={{ color: "var(--primary-gold)" }}> USDT payments</span> &middot;
              <span style={{ color: "var(--accent-gold)" }}> Live contract pricing</span>
            </div>
          </div>
          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li><a href={`${BSCSCAN_BASE_URL}/address/${SALE_CONTRACT_ADDRESS}#code`} target="_blank" rel="noreferrer">Verified Sale Contract</a></li>
              <li><a href={`${BSCSCAN_BASE_URL}/token/${ZARAI_TOKEN_ADDRESS}`} target="_blank" rel="noreferrer">ZARAI Token</a></li>
              <li><a href={`${BSCSCAN_BASE_URL}/token/${PAYMENT_TOKEN_ADDRESS}`} target="_blank" rel="noreferrer">Payment Token</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Network</h4>
            <ul>
              <li><a href={BSCSCAN_BASE_URL} target="_blank" rel="noreferrer">BscScan Explorer</a></li>
              <li><a href="https://www.bnbchain.org/en" target="_blank" rel="noreferrer">BNB Chain</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 ZARAIR Token. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
