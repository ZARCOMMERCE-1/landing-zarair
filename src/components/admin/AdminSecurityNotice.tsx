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
        MetaMask/Blockaid warning may appear until the contracts are verified,
        token info is submitted, and wallet security providers review the
        contract.
      </p>
      <ul className="admin-security-checklist">
        <li>
          <span aria-hidden="true">□</span>
          <a
            href={`${BSCSCAN_BASE_URL}/token/${ZARAI_TOKEN_ADDRESS}#code`}
            target="_blank"
            rel="noreferrer"
          >
            Token contract verified on BscScan ↗
          </a>
        </li>
        <li>
          <span aria-hidden="true">□</span>
          <a
            href={`${BSCSCAN_BASE_URL}/address/${SALE_CONTRACT_ADDRESS}#code`}
            target="_blank"
            rel="noreferrer"
          >
            Sale contract verified on BscScan ↗
          </a>
        </li>
        <li><span aria-hidden="true">□</span> Token Info submitted</li>
        <li><span aria-hidden="true">□</span> Approve flow uses exact USDT amount, not unlimited</li>
        <li><span aria-hidden="true">□</span> Transparency section added to landing</li>
        <li><span aria-hidden="true">□</span> False-positive review submitted if needed</li>
      </ul>
      <p className="admin-security-footnote">
        This checklist is informational. Verify each item with the relevant
        explorer or security provider before marking it complete.
      </p>
    </section>
  );
}
