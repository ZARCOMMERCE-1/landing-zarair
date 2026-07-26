"use client";

import { AnimatedCounter } from "@/components/AnimatedCounter";
import { LiveSaleInventory } from "@/components/LiveSaleInventory";
import { LiveTokenPrice } from "@/components/LiveTokenPrice";

export function Tokenomics() {
  return (
    <section className="tokenomics" id="tokenomics">
      <div className="tokenomics-inner">
        <div className="section-header reveal">
          <h2>Tokenomics</h2>
          <p>Contract-based token distribution with a live USDT sale price that can be independently verified on BNB Chain.</p>
        </div>

        <div className="tokenomics-layout">
          <div className="stats-grid">
            <div className="stat-card reveal reveal-delay-1">
              <div className="stat-label">Total Supply</div>
              <AnimatedCounter target={1.4} suffix="M" decimals={1} />
            </div>
            <div className="stat-card reveal reveal-delay-2">
              <div className="stat-label">Live Sale Inventory</div>
              <LiveSaleInventory />
            </div>
            <div className="stat-card reveal reveal-delay-3">
              <div className="stat-label">Live Sale Price</div>
              <LiveTokenPrice />
            </div>
            <div className="stat-card reveal reveal-delay-4">
              <div className="stat-label">Payment Token</div>
              <div className="stat-value">USDT</div>
            </div>
          </div>

          <div className="tokenomics-content">
            <div className="chart-card reveal">
              <h3>Token Distribution</h3>
              <div className="chart-body">
                <div className="pie-chart" />
                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="legend-color" style={{ background: "var(--primary-gold)" }} />
                    <span className="legend-label">Public Sale</span>
                    <span className="legend-value">40%</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color" style={{ background: "var(--sky-blue)" }} />
                    <span className="legend-label">Ecosystem Fund</span>
                    <span className="legend-value">25%</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color" style={{ background: "#8B6914" }} />
                    <span className="legend-label">Team &amp; Advisors</span>
                    <span className="legend-value">15%</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color" style={{ background: "var(--complement)" }} />
                    <span className="legend-label">Marketing</span>
                    <span className="legend-value">10%</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color" style={{ background: "#3a3a3a" }} />
                    <span className="legend-label">Reserve</span>
                    <span className="legend-value">10%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
