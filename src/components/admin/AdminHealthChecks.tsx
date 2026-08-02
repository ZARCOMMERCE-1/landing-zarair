import { isAddressEqual, zeroAddress, type Address } from "viem";
import {
  PAYMENT_TOKEN_ADDRESS,
  TREASURY_WALLET_ADDRESS,
  ZARAI_TOKEN_ADDRESS,
} from "@/lib/contracts";

type HealthState = "green" | "yellow" | "red";

type HealthCheck = {
  label: string;
  detail: string;
  state: HealthState;
};

type AdminHealthChecksProps = {
  isConnected: boolean;
  isWrongNetwork: boolean;
  isOwner: boolean;
  saleInventory?: bigint;
  saleEnabled?: boolean;
  tokenPrice?: bigint;
  owner?: Address;
  contractTreasury?: Address;
  contractZaraiToken?: Address;
  contractPaymentToken?: Address;
  readError?: Error | null;
};

function matches(left?: Address, right?: Address) {
  return Boolean(left && right && isAddressEqual(left, right));
}

export function AdminHealthChecks({
  isConnected,
  isWrongNetwork,
  isOwner,
  saleInventory,
  saleEnabled,
  tokenPrice,
  owner,
  contractTreasury,
  contractZaraiToken,
  contractPaymentToken,
  readError,
}: AdminHealthChecksProps) {
  const checks: HealthCheck[] = [
    {
      label: "Correct network: BNB Chain",
      state: !isConnected ? "yellow" : isWrongNetwork ? "red" : "green",
      detail: !isConnected
        ? "Connect a wallet to check its active network."
        : isWrongNetwork
          ? "Connected wallet is on the wrong network."
          : "Connected wallet is on chain ID 56.",
    },
    {
      label: "Sale contract has ZARAI balance",
      state:
        saleInventory === undefined
          ? readError
            ? "red"
            : "yellow"
          : saleInventory > 0n
            ? "green"
            : "red",
      detail:
        saleInventory === undefined
          ? "Waiting for the inventory read."
          : saleInventory > 0n
            ? "Tokens remain available in the sale contract."
            : "Sale inventory is empty.",
    },
    {
      label: "Sale status is readable",
      state:
        saleEnabled === undefined
          ? readError
            ? "red"
            : "yellow"
          : saleEnabled
            ? "green"
            : "yellow",
      detail:
        saleEnabled === undefined
          ? "Waiting for sale status."
          : saleEnabled
            ? "Sale is currently enabled."
            : "Sale is currently disabled.",
    },
    {
      label: "Price is greater than zero",
      state:
        tokenPrice === undefined
          ? readError
            ? "red"
            : "yellow"
          : tokenPrice > 0n
            ? "green"
            : "red",
      detail:
        tokenPrice === undefined
          ? "Waiting for the live price."
          : tokenPrice > 0n
            ? "The on-chain price is non-zero."
            : "The on-chain price is zero.",
    },
    {
      label: "Treasury wallet configured",
      state:
        !contractTreasury
          ? "yellow"
          : contractTreasury === zeroAddress
            ? "red"
            : matches(contractTreasury, TREASURY_WALLET_ADDRESS)
              ? "green"
              : "yellow",
      detail:
        !contractTreasury
          ? "Waiting for the contract treasury read."
          : matches(contractTreasury, TREASURY_WALLET_ADDRESS)
            ? "Contract treasury matches the configured wallet."
            : "Contract treasury does not match the configured treasury value.",
    },
    {
      label: "Connected wallet ownership",
      state: !isConnected || !owner ? "yellow" : isOwner ? "green" : "red",
      detail: !isConnected
        ? "No wallet connected; dashboard is read-only."
        : !owner
          ? "Waiting for the on-chain owner read."
          : isOwner
            ? "Connected wallet matches sale owner()."
            : "Connected wallet is not the sale contract owner.",
    },
    {
      label: "Token contract address matches env",
      state: !contractZaraiToken
        ? "yellow"
        : matches(contractZaraiToken, ZARAI_TOKEN_ADDRESS)
          ? "green"
          : "red",
      detail: !contractZaraiToken
        ? "Waiting for zaraiToken()."
        : matches(contractZaraiToken, ZARAI_TOKEN_ADDRESS)
          ? "On-chain token address matches the public configuration."
          : "On-chain token address differs from the public configuration.",
    },
    {
      label: "Payment token address matches USDT env",
      state: !contractPaymentToken
        ? "yellow"
        : matches(contractPaymentToken, PAYMENT_TOKEN_ADDRESS)
          ? "green"
          : "red",
      detail: !contractPaymentToken
        ? "Waiting for paymentToken()."
        : matches(contractPaymentToken, PAYMENT_TOKEN_ADDRESS)
          ? "On-chain payment token matches the configured USDT address."
          : "On-chain payment token differs from the configured USDT address.",
    },
  ];

  return (
    <section className="admin-panel" aria-labelledby="health-title">
      <div className="admin-panel-heading">
        <div>
          <span className="admin-eyebrow">Operational safety</span>
          <h2 id="health-title">Sale Health Checks</h2>
        </div>
      </div>
      <ul className="admin-health-list">
        {checks.map((check) => (
          <li key={check.label}>
            <span
              className={`admin-health-dot is-${check.state}`}
              aria-label={`${check.state} status`}
            />
            <div>
              <strong>{check.label}</strong>
              <p>{check.detail}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="admin-health-legend" aria-label="Health status legend">
        <span><i className="is-green" /> Healthy</span>
        <span><i className="is-yellow" /> Review</span>
        <span><i className="is-red" /> Action needed</span>
      </div>
    </section>
  );
}
