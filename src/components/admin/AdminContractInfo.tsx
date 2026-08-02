import { AdminAddress } from "@/components/admin/AdminAddress";
import {
  BSCSCAN_BASE_URL,
  CHAIN_ID,
  CHAIN_NAME,
  PAYMENT_TOKEN_ADDRESS,
  SALE_CONTRACT_ADDRESS,
  TREASURY_WALLET_ADDRESS,
  ZARAI_TOKEN_ADDRESS,
} from "@/lib/contracts";

type AdminContractInfoProps = {
  owner?: string;
  treasury?: string;
};

export function AdminContractInfo({ owner, treasury }: AdminContractInfoProps) {
  const treasuryAddress = treasury ?? TREASURY_WALLET_ADDRESS;

  return (
    <section className="admin-panel" aria-labelledby="contract-info-title">
      <div className="admin-panel-heading">
        <div>
          <span className="admin-eyebrow">On-chain identity</span>
          <h2 id="contract-info-title">Contract Information</h2>
        </div>
      </div>

      <div className="admin-contract-list">
        <AdminAddress
          showLabel
          label="ZARAI token address"
          address={ZARAI_TOKEN_ADDRESS}
          scanUrl={`${BSCSCAN_BASE_URL}/token/${ZARAI_TOKEN_ADDRESS}`}
        />
        <AdminAddress
          showLabel
          label="Sale contract address"
          address={SALE_CONTRACT_ADDRESS}
          scanUrl={`${BSCSCAN_BASE_URL}/address/${SALE_CONTRACT_ADDRESS}#code`}
        />
        <AdminAddress
          showLabel
          label="USDT token address"
          address={PAYMENT_TOKEN_ADDRESS}
          scanUrl={`${BSCSCAN_BASE_URL}/token/${PAYMENT_TOKEN_ADDRESS}`}
        />
        <AdminAddress
          showLabel
          label="Treasury wallet address"
          address={treasuryAddress}
          scanUrl={`${BSCSCAN_BASE_URL}/address/${treasuryAddress}`}
        />
        <AdminAddress
          showLabel
          label="Sale owner address"
          address={owner}
          scanUrl={owner ? `${BSCSCAN_BASE_URL}/address/${owner}` : undefined}
        />
        <div className="admin-contract-fact">
          <span>Network</span>
          <strong>{CHAIN_NAME}</strong>
        </div>
        <div className="admin-contract-fact">
          <span>Chain ID</span>
          <strong>{CHAIN_ID}</strong>
        </div>
      </div>
    </section>
  );
}
