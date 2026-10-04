import {
  BSCSCAN_BASE_URL,
  SALE_CONTRACT_ADDRESS,
  ZARAI_TOKEN_ADDRESS,
} from "@/lib/contracts";

export function AdminSecurityNotice() {
  return (
    <section className="admin-panel admin-security-panel" aria-labelledby="security-title">
      <div className="admin-panel-heading">
        <div>
          <span className="admin-eyebrow">Internal guidance</span>
          <h2 id="security-title">MetaMask Security Alert</h2>
        </div>
      </div>
      <p className="admin-security-lead">
        Wallet warnings reflect the security provider&apos;s assessment.
        Contract source verification and Token Info publication do not
        guarantee that a warning will be removed. Review the alert and
        contract details before signing.
      </p>
      <ul className="admin-security-checklist">
        <li>
          <span aria-hidden="true">□</span>
          <a
            href={`${BSCSCAN_BASE_URL}/token/${ZARAI_TOKEN_ADDRESS}#code`}
            target="_blank"
            rel="noreferrer"
          >
            Check token contract source on BscScan ↗
          </a>
        </li>
        <li>
          <span aria-hidden="true">□</span>
          <a
            href={`${BSCSCAN_BASE_URL}/address/${SALE_CONTRACT_ADDRESS}#code`}
            target="_blank"
            rel="noreferrer"
          >
            Check sale contract source on BscScan ↗
          </a>
        </li>
        <li><span aria-hidden="true">□</span> Check Token Info submission status</li>
        <li><span aria-hidden="true">□</span> Approve flow uses exact USDT amount, not unlimited</li>
        <li><span aria-hidden="true">□</span> Transparency section added to landing</li>
        <li><span aria-hidden="true">□</span> Review wallet-provider warning status if needed</li>
      </ul>
      <p className="admin-security-footnote">
        This checklist is informational. Verify each item with the relevant
        explorer or security provider before marking it complete.
      </p>
    </section>
  );
}
