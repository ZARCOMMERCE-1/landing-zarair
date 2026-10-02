"use client";

import { useState } from "react";
import { LiveSaleInventory } from "@/components/LiveSaleInventory";
import { LiveTokenPrice } from "@/components/LiveTokenPrice";
import {
  BSCSCAN_BASE_URL,
  CHAIN_ID,
  SALE_CONTRACT_ADDRESS,
  TOKEN_DECIMALS,
  ZARAI_TOKEN_ADDRESS,
} from "@/lib/contracts";

export function Tokenomics() {
  const [copyStatus, setCopyStatus] = useState("");

  async function copyTokenAddress() {
    try {
      await navigator.clipboard.writeText(ZARAI_TOKEN_ADDRESS);
      setCopyStatus("Token contract address copied.");
    } catch {
      setCopyStatus("Unable to copy. Select and copy the token address above.");
    }
  }

  return (
    <section className="tokenomics" id="tokenomics" aria-labelledby="token-information-title">
      <div className="tokenomics-inner">
        <div className="section-header">
          <h2 id="token-information-title">Token Information</h2>
          <p>The official ZARAI token details and live sale data on BNB Smart Chain Mainnet.</p>
        </div>

        <div className="tokenomics-layout">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-label">Total Supply</div>
              <div className="stat-value">1,400,000</div>
              <div>ZARAI</div>
            </div>
            <div className="stat-card reveal reveal-delay-2">
              <div className="stat-label">Live Sale Inventory</div>
              <LiveSaleInventory />
            </div>
            <div className="stat-card reveal reveal-delay-3">
              <div className="stat-label">Current Sale Contract Price</div>
              <LiveTokenPrice />
              <p className="token-information-note">Purchase price, not a secondary-market quote.</p>
            </div>
            <div className="stat-card">
              <div className="stat-label">Payment Token</div>
              <div className="stat-value">USDT</div>
              <div>BNB Smart Chain</div>
            </div>
          </div>

          <div className="tokenomics-content">
            <div className="chart-card token-information">
              <h3>Official Token Details</h3>
              <dl className="token-details">
                <div><dt>Token Name</dt><dd>Zar Air</dd></div>
                <div><dt>Symbol</dt><dd>ZARAI</dd></div>
                <div><dt>Network</dt><dd>BNB Smart Chain Mainnet</dd></div>
                <div><dt>Chain ID</dt><dd>{CHAIN_ID}</dd></div>
                <div><dt>Standard</dt><dd>BEP-20</dd></div>
                <div><dt>Decimals</dt><dd>{TOKEN_DECIMALS}</dd></div>
                <div><dt>Total Supply</dt><dd>1,400,000 ZARAI</dd></div>
                <div><dt>Token Contract</dt><dd><code>{ZARAI_TOKEN_ADDRESS}</code></dd></div>
                <div><dt>Official Website</dt><dd><a href="https://zarair.com">https://zarair.com</a></dd></div>
                <div><dt>Official Email</dt><dd><a href="mailto:info@zarair.com">info@zarair.com</a></dd></div>
              </dl>
              <p className="token-information-note">Use the token contract above when adding ZARAI to your wallet.</p>
              <div className="token-actions">
                <button type="button" className="btn-tertiary" onClick={copyTokenAddress}>Copy Token Contract</button>
                <a href={`${BSCSCAN_BASE_URL}/token/${ZARAI_TOKEN_ADDRESS}`} target="_blank" rel="noreferrer">View Token on BscScan</a>
                <a href={`${BSCSCAN_BASE_URL}/address/${ZARAI_TOKEN_ADDRESS}`} target="_blank" rel="noreferrer">View Contract on BscScan</a>
              </div>
              <p className="token-copy-status" role="status">{copyStatus}</p>
              <dl className="token-details sale-contract-details">
                <div><dt>Sale Contract</dt><dd><code>{SALE_CONTRACT_ADDRESS}</code></dd></div>
              </dl>
              <p className="token-information-note">This contract handles purchases with USDT; it is separate from the ZARAI token.</p>
              <a className="token-explorer-link" href={`${BSCSCAN_BASE_URL}/address/${SALE_CONTRACT_ADDRESS}`} target="_blank" rel="noreferrer">View Sale Contract on BscScan</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
