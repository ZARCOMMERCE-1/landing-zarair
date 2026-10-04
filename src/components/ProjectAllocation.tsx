import {
  ALLOCATION_POLICY_STATEMENT,
  ALLOCATION_TECHNICAL_DISCLOSURE,
} from "@/lib/project-content";

export function ProjectAllocation() {
  return (
    <div className="project-allocation">
      <div className="allocation-grid">
        <div className="stat-card">
          <div className="stat-label">Initial Sale Allocation</div>
          <div className="stat-value">40%</div>
          <p>560,000 ZARAI allocated to the official Sale Contract.</p>
        </div>
        <div className="stat-card">
          <div className="stat-label">Initial Project / Owner Allocation</div>
          <div className="stat-value">60%</div>
          <p>840,000 ZARAI allocated to the project/owner.</p>
        </div>
      </div>
      <p className="token-information-note">These figures describe the initial allocation, not current holdings. Current on-chain balances may change as permitted transfers or purchases occur. Current Sale Inventory is the ZARAI balance of the Sale Contract, read separately from the chain.</p>
      <p><strong>Project policy:</strong> {ALLOCATION_POLICY_STATEMENT}</p>
      <p><strong>Technical disclosure:</strong> {ALLOCATION_TECHNICAL_DISCLOSURE}</p>
    </div>
  );
}
