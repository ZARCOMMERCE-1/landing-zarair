"use client";

import Image from "next/image";
import { BuyZaraiModal } from "@/components/BuyZaraiModal";
import { SaleStatusBadge } from "@/components/SaleStatusBadge";
import { useSubtitleCycle } from "@/hooks/useSubtitleCycle";

export function Hero() {
  const subtitle = useSubtitleCycle();

  return (
    <section className="hero">
      <div className="sky-gradient" />
      <div className="hero-grid" />
      <div className="hero-ring hero-ring-1" />
      <div className="hero-ring hero-ring-2" />
      <div className="hero-ring hero-ring-3" />
      <div className="hero-corner hero-corner-tl" />
      <div className="hero-corner hero-corner-tr" />
      <div className="hero-corner hero-corner-bl" />
      <div className="hero-corner hero-corner-br" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="flying-plane">
        <Image width={100} height={100} src="/airplane.svg" alt="" />
      </div>
      <div className="cloud-layer">
        <div className="cloud cloud-1" />
        <div className="cloud cloud-2" />
        <div className="cloud cloud-3" />
        <div className="cloud cloud-4" />
      </div>

      <div className="particles">
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
      </div>

      <SaleStatusBadge />

      <div className="coin-wrapper">
        <div className="coin">
          <div className="coin-face coin-front" />
          <div className="coin-rim" />
          <div className="coin-face coin-back" />
          <div className="coin-highlight" />
        </div>
        <div className="coin-shadow" />
      </div>

      <h1>Zar Air (ZARAI)</h1>
      <p className="hero-subtitle">
        <span className="subtitle-static">A BEP-20 token on BNB Smart Chain for the Zar Air ecosystem.</span>
        <span className="subtitle-cycle">
          <span
            className={`cycle-word${subtitle.isHidden ? " hidden" : ""}`}
            onTransitionEnd={subtitle.onTransitionEnd}
          >
            {subtitle.text}
          </span>
        </span>
      </p>
      <div className="hero-buttons">
        <BuyZaraiModal />
        <a href="#tokenomics" className="btn-secondary">Token Information</a>
        <a href="/how-to-buy" className="btn-tertiary">How to Buy</a>
      </div>
      <p className="purchase-risk-note">
        ZARAI can lose all value. Availability may be subject to applicable laws
        and restrictions in your jurisdiction. {" "}
        <a href="/whitepaper#risk-information">Read risk information</a> before purchasing.
      </p>
    </section>
  );
}
