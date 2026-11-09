import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { Logo } from "@/components/Logo";
import "./pitch-deck.css";

export const metadata: Metadata = {
  title: "Investment Pitch Deck | Zar Air",
  description:
    "Zar Air's investment pitch deck: project vision, tokenomics, roadmap, and current offer.",
  alternates: { canonical: "/pitch-deck" },
  openGraph: {
    title: "Investment Pitch Deck | Zar Air",
    description:
      "Zar Air's investment pitch deck: project vision, tokenomics, roadmap, and current offer.",
    url: "/pitch-deck",
    siteName: "Zar Air",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Zar Air logo" }],
  },
};

export default function PitchDeckPage() {
  return (
    <>
      <nav className="pitch-deck-nav">
        <Link href="/" className="logo" aria-label="Zar Air home">
          <Logo />
        </Link>
        <div className="pitch-deck-nav__links">
          <Link href="/whitepaper">Whitepaper</Link>
          <Link href="/how-to-buy">How to Buy</Link>
        </div>
      </nav>
      <main className="pitch-deck-shell">
        <div className="pitch-deck">
          <div className="pitch-deck-intro">
            <p>Investor information</p>
            <div>
              <Link href="/whitepaper">Read the Whitepaper</Link>
              <Link className="btn-primary" href="/how-to-buy">How to Buy ZARAI</Link>
            </div>
          </div>
          <div className="pitch-deck-content">
            <svg width="0" height="0" style={{position: "absolute"}}>
                  <defs>
                    <path id="plane" d="M186.62,464H160a16,16,0,0,1-14.57-22.6l64.46-142.25L113.1,297,77.8,339.77C71.07,348.23,65.7,352,52,352H34.08a17.66,17.66,0,0,1-14.7-7.06c-2.38-3.21-4.72-8.65-2.44-16.41l19.82-71c.15-.53.33-1.06.53-1.58a.38.38,0,0,0,0-.15,14.82,14.82,0,0,1-.53-1.59L16.92,182.76c-2.15-7.61.2-12.93,2.56-16.06a16.83,16.83,0,0,1,13.6-6.7H52c10.23,0,20.16,4.59,26,12l34.57,42.05,97.32-1.44-64.44-142A16,16,0,0,1,160,48h26.91a25,25,0,0,1,19.35,9.8l125.05,152,57.77-1.52c4.23-.23,15.95-.31,18.66-.31C463,208,496,225.94,496,256c0,9.46-3.78,27-29.07,38.16-14.93,6.6-34.85,9.94-59.21,9.94-2.68,0-14.37-.08-18.66-.31l-57.76-1.54-125.36,152A25,25,0,0,1,186.62,464Z"/>
                    <linearGradient id="gGold" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#f2dd93"/><stop offset="1" stopColor="#a8874a"/>
                    </linearGradient>
                    <linearGradient id="gBar" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#f2dd93"/><stop offset="1" stopColor="#c9a227"/>
                    </linearGradient>
                    <linearGradient id="gBarSoft" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#a8874a"/><stop offset="1" stopColor="#6e5726"/>
                    </linearGradient>
                  </defs>
                </svg>

                
                <section className="slide cover">
                  <svg className="sky" viewBox="0 0 1100 640" preserveAspectRatio="xMidYMid slice">
                    <path d="M-40 500 Q 260 350 560 440 T 1150 310" fill="none" stroke="#d4af37" strokeWidth="2" strokeDasharray="14 10" opacity="0.35"/>
                    <image href="/airplane.svg" x="935" y="270" width="50" height="50" transform="rotate(-14 960 295)" filter="brightness(0) saturate(100%) invert(83%) sepia(60%) saturate(500%) hue-rotate(5deg)"/>
                    <g fill="#e7c65e">
                      <circle cx="150" cy="120" r="1.6" opacity="0.7"/><circle cx="320" cy="80" r="1.1" opacity="0.5"/>
                      <circle cx="520" cy="140" r="1.4" opacity="0.6"/><circle cx="700" cy="70" r="1" opacity="0.4"/>
                      <circle cx="860" cy="150" r="1.3" opacity="0.55"/><circle cx="1030" cy="90" r="1.1" opacity="0.5"/>
                      <circle cx="240" cy="220" r="1.2" opacity="0.45"/><circle cx="940" cy="430" r="1.4" opacity="0.5"/>
                    </g>
                    <circle cx="1020" cy="540" r="100" fill="#d4af37" opacity="0.05"/>
                    <g opacity="0.06" fill="#ffffff">
                      <ellipse cx="280" cy="520" rx="90" ry="22"/><ellipse cx="330" cy="508" rx="55" ry="16"/>
                    </g>
                  </svg>
                  <div className="kicker" style={{position: "relative"}}>Investment Pitch Deck · October 2026</div>
                  <div className="logo"><Image src="/assets/zarair-logo.png" alt="" width={76} height={76} />ZAR AIR</div>
                  <div className="rule"></div>
                  <div className="slogan">Where Blockchain Takes Flight — Come Fly With Us</div>
                  <div className="sub">A low-cost airline project powered by the ZARAI token · zarair.com</div>
                  <div className="row">
                    <span className="chip">ZARAI · BEP-20 on BNB Smart Chain</span>
                    <span className="chip">Fixed Supply · 1,400,000</span>
                    <span className="chip">Direct On-Chain Sale</span>
                  </div>
                </section>

                
                <section className="slide">
                  <svg className="deco" viewBox="0 0 300 300"><use href="#plane" transform="translate(60,40) scale(0.45)"/></svg>
                  <div className="kicker">The Gap in the Sky</div>
                  <h2><span className="hicon"><svg viewBox="0 0 24 24"><path d="M12 3l10 18H2z"/><path d="M12 10v5"/><path d="M12 17.5v.01"/></svg></span><span className="gtext">The Problem</span></h2>
                  <div className="grid grid-3">
                    <div className="card">
                      <div className="head"><span className="ic"><svg viewBox="0 0 24 24"><path d="M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0L3 13V3h10l7.6 7.6a2 2 0 010 2.8z"/><circle cx="7.5" cy="7.5" r="1.2"/></svg></span><b>Flying is still a luxury</b></div>
                      <p style={{color: "#c9cdd6"}}>High fares keep affordable air travel out of reach for millions across regional markets — demand goes unserved.</p>
                    </div>
                    <div className="card">
                      <div className="head"><span className="ic"><svg viewBox="0 0 24 24"><path d="M6 2h12M6 22h12M8 2v3l4 5 4-5V2M8 22v-3l4-5 4 5v3"/></svg></span><b>&quot;Money first, product later&quot;</b></div>
                      <p style={{color: "#c9cdd6"}}>Most token projects raise capital before real infrastructure exists — unfulfilled promises erode market trust.</p>
                    </div>
                    <div className="card">
                      <div className="head"><span className="ic"><svg viewBox="0 0 24 24"><path d="M12 2l8 3v6c0 5-3.5 8.6-8 11-4.5-2.4-8-6-8-11V5z"/><path d="M9 12l2 2 4-4"/></svg></span><b>The trust gap</b></div>
                      <p style={{color: "#c9cdd6"}}>Today&apos;s investors demand verifiable evidence, not claims. Projects that cannot be audited do not attract serious capital.</p>
                    </div>
                    <div className="card">
                      <div className="head"><span className="ic"><svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V8l7-5 7 5v13"/><path d="M9 21v-5h6v5"/></svg></span><b>Traditional funding is heavy</b></div>
                      <p style={{color: "#c9cdd6"}}>High-interest debt or premature equity giveaways strip founders of control over their own project.</p>
                    </div>
                    <div className="card" style={{gridColumn: "span 2"}}>
                      <div className="head"><span className="ic"><svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 109 9"/><path d="M12 7v5l3 3"/></svg></span><b>The result</b></div>
                      <p style={{color: "#c9cdd6"}}>A large market hungry for affordable flight — with no modern, transparent funding path available to the founders who want to serve it.</p>
                    </div>
                  </div>
                  <div className="footer"><span>02 — 12</span><span className="fbrand">ZAR AIR · zarair.com</span></div>
                </section>

                
                <section className="slide">
                  <svg className="deco" viewBox="0 0 300 300"><use href="#plane" transform="translate(60,40) scale(0.45)"/></svg>
                  <div className="kicker">One Project · Two Industries</div>
                  <h2><span className="hicon"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.8.7 1 1.5 1 2.5h6c0-1 .2-1.8 1-2.5A6 6 0 0012 3z"/></svg></span><span className="gtext">Our Solution</span></h2>
                  <div className="gold-box" style={{fontSize: "16px"}}>
                    <b>Zar Air</b> is a low-cost airline funded by the <b>ZARAI</b> token — no middlemen, no exchange listings required, sold directly on-chain.
                  </div>
                  <div className="grid">
                    <div className="card">
                      <div className="head"><span className="ic"><svg className="plane-icon" viewBox="0 0 512 512" aria-hidden="true"><use href="#plane"/></svg></span><b>The Airline</b></div>
                      <p style={{color: "#c9cdd6"}}>The proven low-cost carrier playbook — pre-owned fuel-efficient aircraft, high-demand regional routes, lean seat economics.</p>
                    </div>
                    <div className="card">
                      <div className="head"><span className="ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/></svg></span><b>The Token — ZARAI (BEP-20)</b></div>
                      <p style={{color: "#c9cdd6"}}>Live on BNB Smart Chain, with a fixed and limited supply of <b className="num-ltr">1,400,000</b> tokens.</p>
                    </div>
                    <div className="card">
                      <div className="head"><span className="ic"><svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M16 13h5"/></svg></span><b>Direct Sale</b></div>
                      <p style={{color: "#c9cdd6"}}>Purchase through our own smart contract at zarair.com with a wallet such as MetaMask — no platform intermediaries, no legacy gateways.</p>
                    </div>
                    <div className="card">
                      <div className="head"><span className="ic"><svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="2.2"/><circle cx="19" cy="6" r="2.2"/><circle cx="19" cy="18" r="2.2"/><path d="M7 11l9.5-4M7 13l9.5 4"/></svg></span><b>The Ecosystem Vision</b></div>
                      <p style={{color: "#c9cdd6"}}>Bridging the travel industry with blockchain transparency — a foundation designed to grow alongside the airline.</p>
                    </div>
                  </div>
                  <p style={{marginTop: "10px", color: "var(--muted)", fontSize: "13px", position: "relative"}}>Transparency note: as stated in our whitepaper, ZARAI confers no ownership stake and no profit rights in the company.</p>
                  <div className="footer"><span>03 — 12</span><span className="fbrand">ZAR AIR · zarair.com</span></div>
                </section>

                
                <section className="slide">
                  <svg className="deco" viewBox="0 0 300 300"><use href="#plane" transform="translate(60,40) scale(0.45)"/></svg>
                  <div className="kicker">Built Before Asking</div>
                  <h2><span className="hicon"><svg viewBox="0 0 24 24"><path d="M12 2l3 7 7 .6-5.3 4.6L18.3 22 12 18.3 5.7 22l1.6-7.8L2 9.6 9 9z"/></svg></span><span className="gtext">Why We Are Different</span></h2>
                  <div className="grid grid-3">
                    <div className="card" style={{textAlign: "center"}}>
                      <span className="big">1+ Year</span>
                      <b>Infrastructure — built and tested</b>
                      <p style={{color: "#c9cdd6"}}>Website, token, and sale smart contract are live and MetaMask-tested. The first year of iteration is behind us.</p>
                    </div>
                    <div className="card" style={{textAlign: "center"}}>
                      <span className="big">~1 Year</span>
                      <b>Ahead of comparable projects</b>
                      <p style={{color: "#c9cdd6"}}>Peers are still building technology. Every marketing dollar we raise goes to visibility — not to tech or consulting.</p>
                    </div>
                    <div className="card" style={{textAlign: "center"}}>
                      <span className="big">100%</span>
                      <b>Independently verifiable</b>
                      <p style={{color: "#c9cdd6"}}>Our contracts are publicly viewable on BscScan, a public block explorer — every claim can be checked against a contract address.</p>
                    </div>
                  </div>
                  <div className="gold-box" style={{fontSize: "16px", textAlign: "center"}}>
                    <b>The key sentence for investors:</b> &quot;We are not selling you an idea. We are presenting a one-year-old project with tested infrastructure, a live website, and a ready-made sale mechanism.&quot;
                  </div>
                  <div className="footer"><span>04 — 12</span><span className="fbrand">ZAR AIR · zarair.com</span></div>
                </section>

                
                <section className="slide">
                  <div className="kicker">Fixed · Auditable · On-Chain</div>
                  <h2><span className="hicon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.2c0-1.3 1.1-2.2 2.5-2.2s2.5.9 2.5 2.2-1 1.8-2.5 2.2-2.5.9-2.5 2.2 1.1 2.2 2.5 2.2 2.5-.9 2.5-2.2"/></svg></span><span className="gtext">Tokenomics</span></h2>
                  <div style={{display: "grid", gridTemplateColumns: "310px 1fr", gap: "24px", alignItems: "center", position: "relative"}}>
                    <div className="chart-wrap" style={{textAlign: "center"}}>
                      <div className="chart-title">Total Supply · 1,400,000 ZARAI</div>
                      <svg viewBox="0 0 220 220" style={{width: "224px", height: "224px", margin: "auto", display: "block"}}>
                        <circle cx="110" cy="110" r="80" fill="none" stroke="#22252e" strokeWidth="26"/>
                        <circle cx="110" cy="110" r="80" fill="none" stroke="#3a3f4a" strokeWidth="26"
                          strokeDasharray="301.6 201.1" transform="rotate(-90 110 110)"/>
                        <circle cx="110" cy="110" r="80" fill="none" stroke="url(#gGold)" strokeWidth="26"
                          strokeDasharray="201.1 301.6" strokeDashoffset="-301.6" transform="rotate(-90 110 110)"/>
                        <text x="110" y="106" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#e7c65e" fontFamily="Georgia, serif">1.4M</text>
                        <text x="110" y="130" textAnchor="middle" fontSize="11" fill="#9aa4b5">ZARAI</text>
                      </svg>
                    </div>
                    <div>
                      <div style={{display: "flex", gap: "10px", marginBottom: "14px", flexWrap: "wrap"}}>
                        <span style={{background: "linear-gradient(140deg,#f2dd93,#c9a227)", color: "#1a1405", borderRadius: "16px", padding: "4px 16px", fontSize: "13px", fontWeight: "600"}}>40% Public Sale (560,000)</span>
                        <span style={{background: "#3a3f4a", color: "#e6e0cf", border: "1px solid #4a4f5c", borderRadius: "16px", padding: "4px 16px", fontSize: "13px"}}>60% Team & Project (840,000)</span>
                      </div>
                      <ul>
                        <li>The <b>60% founder allocation is not offered to the public until the airline launches</b> — as committed in our public whitepaper.</li>
                        <li><b>Sale price:</b> <span className="num-ltr">140 USDT</span> per token — a fixed rate hardcoded into the smart contract.</li>
                        <li><b>How to buy:</b> pay USDT directly to the sale contract; tokens transfer instantly to the buyer&apos;s own wallet.</li>
                      </ul>
                      <div className="card" style={{marginTop: "10px"}}>
                        <b>Token contract:</b><br/><span className="num-ltr" style={{fontSize: "12px", color: "var(--steel)"}}>0xb6F69E830E13f6Dd57edBCC7B12d18299E131323</span>
                      </div>
                    </div>
                  </div>
                  <div className="footer"><span>05 — 12</span><span className="fbrand">ZAR AIR · zarair.com</span></div>
                </section>

                
                <section className="slide">
                  <div className="kicker">Two Growth Markets · One Entry Point</div>
                  <h2><span className="hicon"><svg viewBox="0 0 24 24"><path d="M3 20h18M6 20v-6M11 20V9M16 20V4M21 20v-9"/></svg></span><span className="gtext">Market Opportunity</span></h2>
                  <div style={{display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: "20px", position: "relative"}}>
                    <div className="chart-wrap">
                      <div className="chart-title">Global Low-Cost Carrier (LCC) Market</div>
                      <svg viewBox="0 0 430 255" style={{width: "100%", height: "auto", display: "block"}}>
                        <line x1="45" y1="218" x2="410" y2="218" stroke="#4a4f5c" strokeWidth="1.5"/>
                        <text x="92" y="242" textAnchor="middle" fontSize="13" fill="#9aa4b5">2025</text>
                        <text x="212" y="242" textAnchor="middle" fontSize="13" fill="#9aa4b5">2026</text>
                        <text x="335" y="242" textAnchor="middle" fontSize="13" fill="#9aa4b5">2035</text>
                        <rect x="64" y="188" width="56" height="30" rx="4" fill="url(#gBarSoft)"/>
                        <rect x="184" y="184" width="56" height="34" rx="4" fill="url(#gBarSoft)"/>
                        <rect x="307" y="33" width="56" height="185" rx="4" fill="url(#gBar)"/>
                        <text x="92" y="176" textAnchor="middle" fontSize="13.5" fontWeight="bold" fill="#e7c65e">$320.6B</text>
                        <text x="212" y="172" textAnchor="middle" fontSize="13.5" fontWeight="bold" fill="#e7c65e">$375.1B</text>
                        <text x="335" y="20" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#f2dd93">$1,490B</text>
                        <path d="M124 182 Q 230 150 303 41" fill="none" stroke="#7fd6a0" strokeWidth="2.2" strokeDasharray="8 6"/>
                        <path d="M295 54 L304 37 L310 52" fill="none" stroke="#7fd6a0" strokeWidth="2.2"/>
                        <text x="158" y="122" fontSize="13" fill="#7fd6a0" fontWeight="bold">CAGR 16.61%</text>
                      </svg>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: "13px"}}>
                      <div className="stat">
                        <span className="v">741M</span>
                        <span className="l">Global crypto owners (2025)</span>
                        <span className="pill">▲ +12.4% year-over-year</span>
                      </div>
                      <div className="card">
                        <b>Where the two curves meet</b>
                        <p style={{fontSize: "13.5px", color: "#c9cdd6"}}>Soaring demand for affordable regional flight, multiplied by a global, borderless community of crypto users who can participate in minutes — at any size.</p>
                      </div>
                    </div>
                  </div>
                  <div className="src">
                    Sources: Precedence Research — Low-Cost Carrier Market (<a href="https://www.precedenceresearch.com/low-cost-carrier-market">precedenceresearch.com</a>)
                    · Crypto.com Research — Crypto Market Sizing Report 2025 (<a href="https://crypto.com/en/research/crypto-market-sizing-report-2025">crypto.com/en/research</a>)
                  </div>
                  <div className="footer"><span>06 — 12</span><span className="fbrand">ZAR AIR · zarair.com</span></div>
                </section>

                
                <section className="slide">
                  <svg className="deco" viewBox="0 0 300 300"><path d="M20 280 Q 140 180 260 60" fill="none" stroke="#d4af37" strokeWidth="2.5" strokeDasharray="10 8"/></svg>
                  <div className="kicker">From Phase Zero to Take-Off</div>
                  <h2><span className="hicon"><svg viewBox="0 0 24 24"><path d="M4 20l6-6M10 14l4-4M14 10l4-4M17 4h4v4"/></svg></span><span className="gtext">Roadmap</span></h2>
                  <div className="timeline">
                    <div className="phase"><div className="dot now">0</div>
                      <div className="txt"><b>Phase Zero — current:</b> raising launch capital through a limited token sale to a maximum of 100 supporters; selecting the incorporation jurisdiction and completing legal counsel.</div>
                    </div>
                    <div className="phase"><div className="dot">1</div>
                      <div className="txt"><b>Incorporation:</b> establishing the company in the chosen jurisdiction (offshore options under review), opening the office and bank accounts, hiring the first core team.</div>
                    </div>
                    <div className="phase"><div className="dot">2</div>
                      <div className="txt"><b>Licensing:</b> obtaining aviation and business licenses; activating the ready-built KYC infrastructure immediately after incorporation.</div>
                    </div>
                    <div className="phase"><div className="dot">3</div>
                      <div className="txt"><b>Fleet:</b> negotiating and acquiring pre-owned, cost-efficient aircraft — including exploring arrangements where sellers accept tokens as part of payment (negotiations ongoing; not guaranteed).</div>
                    </div>
                    <div className="phase"><div className="dot">4</div>
                      <div className="txt"><b>Take-off:</b> launching regional low-cost flight operations, then expanding route by route.</div>
                    </div>
                  </div>
                  <p style={{marginTop: "8px", color: "var(--muted)", fontSize: "13px", position: "relative"}}>Note: aviation licensing timelines rest with the regulators of the relevant jurisdiction and are inherently lengthy by nature.</p>
                  <div className="footer"><span>07 — 12</span><span className="fbrand">ZAR AIR · zarair.com</span></div>
                </section>

                
                <section className="slide">
                  <div className="kicker">A Limited Invitation</div>
                  <h2><span className="hicon"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg></span><span className="gtext">The Offer</span></h2>
                  <div className="grid grid-3">
                    <div className="stat"><span className="v">1,200</span><span className="l">Tokens offered in this phase</span></div>
                    <div className="stat"><span className="v">$140</span><span className="l">Fixed smart-contract rate per token</span></div>
                    <div className="stat"><span className="v">100</span><span className="l">Maximum supporters in this phase</span></div>
                  </div>
                  <div className="gold-box" style={{marginTop: "18px", fontSize: "15.5px"}}>
                    <b>Terms of participation:</b> minimum purchase of <b className="num-ltr">10 tokens ($1,400)</b> per supporter — bought directly at <span className="num-ltr">zarair.com</span> with a MetaMask wallet. Tokens are delivered instantly to the buyer&apos;s own wallet.
                  </div>
                  <div className="grid">
                    <div className="card"><div className="head"><span className="ic"><svg viewBox="0 0 24 24"><path d="M12 2v20M17 7H9.5a3 3 0 000 6h5a3 3 0 010 6H6"/></svg></span><b>Where the funds go</b></div><p style={{color: "#c9cdd6", fontSize: "14px"}}>Every dollar carries the project through Phase Zero: incorporation, licensing, and operational readiness — detailed on the next slide.</p></div>
                    <div className="card"><div className="head"><span className="ic"><svg viewBox="0 0 24 24"><path d="M12 2l2.4 5.4L20 8.2l-4 4 1 5.8-5-2.8-5 2.8 1-5.8-4-4 5.6-.8z"/></svg></span><b>The spirit of this phase</b></div><p style={{color: "#c9cdd6", fontSize: "14px"}}>An invitation to join the journey: limited, personal, fully transparent — and with no profit promises.</p></div>
                  </div>
                  <div className="cta">
                    <div className="t1">Your invitation is waiting — <b>the Founders&apos; Circle is capped at 100 supporters.</b></div>
                    <div className="t2">Take your place directly at <span className="num-ltr">zarair.com/how-to-buy</span> — tokens are delivered instantly to your own wallet.</div>
                  </div>
                  <div className="footer"><span>08 — 12</span><span className="fbrand">ZAR AIR · zarair.com</span></div>
                </section>

                
                <section className="slide">
                  <div className="kicker">Every Dollar Has a Destination</div>
                  <h2><span className="hicon"><svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12h18"/></svg></span><span className="gtext">Use of Funds</span></h2>
                  <div className="grid" style={{gap: "11px"}}>
                    <div className="fund"><div className="n">1</div><div><b>Legal & commercial due diligence</b><p>Jurisdiction selection, incorporation and compliance counsel.</p></div></div>
                    <div className="fund"><div className="n">2</div><div><b>Working visits</b><p>On-site visits to candidate countries; meetings with authorities and local partners.</p></div></div>
                    <div className="fund"><div className="n">3</div><div><b>Company incorporation</b><p>Formal establishment costs in the selected jurisdiction.</p></div></div>
                    <div className="fund"><div className="n">4</div><div><b>Office & team</b><p>Setting up and equipping the office; hiring the first core staff.</p></div></div>
                    <div className="fund"><div className="n">5</div><div><b>Licenses</b><p>Aviation and business licensing fees.</p></div></div>
                    <div className="fund"><div className="n">6</div><div><b>Market studies</b><p>Market activation and building a network of prospective passengers.</p></div></div>
                  </div>
                  <div className="gold-box">
                    <b>Our principle:</b> not a single dollar goes into building technology — the infrastructure is already built. Every dollar of this phase turns a ready project into a legal company.
                  </div>
                  <div className="footer"><span>09 — 12</span><span className="fbrand">ZAR AIR · zarair.com</span></div>
                </section>

                
                <section className="slide">
                  <svg className="deco" viewBox="0 0 300 300"><use href="#plane" transform="translate(60,40) scale(0.45)"/></svg>
                  <div className="kicker">Honouring the First Hundred</div>
                  <h2><span className="hicon"><svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="5"/><path d="M8.5 13.5L7 21l5-3 5 3-1.5-7.5"/></svg></span><span className="gtext">The Founders&apos; Circle</span></h2>
                  <div style={{display: "grid", gridTemplateColumns: "210px 1fr", gap: "22px", alignItems: "center", position: "relative"}}>
                    <div className="chart-wrap" style={{textAlign: "center", padding: "24px 10px"}}>
                      <svg viewBox="0 0 100 100" style={{width: "118px", height: "118px"}}>
                        <circle cx="50" cy="50" r="42" fill="none" stroke="#22252e" strokeWidth="13"/>
                        <circle cx="50" cy="50" r="42" fill="none" stroke="url(#gGold)" strokeWidth="13" strokeDasharray="264" transform="rotate(-90 50 50)"/>
                        <text x="50" y="47" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#e7c65e" fontFamily="Georgia, serif">100</text>
                        <text x="50" y="66" textAnchor="middle" fontSize="9.5" fill="#9aa4b5">SUPPORTERS</text>
                      </svg>
                      <div style={{fontSize: "12px", color: "var(--muted)", marginTop: "4px", letterSpacing: "1px"}}>FOUNDING CIRCLE CAPACITY</div>
                    </div>
                    <div>
                      <p style={{fontSize: "15.5px"}}>As a gesture of gratitude, the first <b>100 supporters</b> who back the project with a minimum purchase of <b className="num-ltr">10 tokens</b> will receive a <b>symbolic keepsake to mark the official inauguration of the company</b>.</p>
                      <ul>
                        <li><b>Public and transparent:</b> this appreciation programme is part of the project&apos;s public narrative — not a private arrangement.</li>
                        <li><b>Symbolic and non-monetary:</b> it is an inauguration memento. No repayment, profit, or financial benefit is attached to it.</li>
                        <li><b>Delivery:</b> after incorporation, once the office is established and bank accounts are opened.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="gold-box">
                    <b>Our commitment to investors:</b> any benefit linked to a token purchase is disclosed — plainly and without ambiguity — in this deck and in our public documents. No hidden arrangements.
                  </div>
                  <div className="footer"><span>10 — 12</span><span className="fbrand">ZAR AIR · zarair.com</span></div>
                </section>

                
                <section className="slide">
                  <div className="kicker">Trust Is Our Infrastructure</div>
                  <h2><span className="hicon"><svg viewBox="0 0 24 24"><path d="M12 2l8 3v6c0 5-3.5 8.6-8 11-4.5-2.4-8-6-8-11V5z"/><path d="M9 12l2 2 4-4"/></svg></span><span className="gtext">Transparency & Compliance</span></h2>
                  <div className="grid">
                    <div className="card"><div className="head"><span className="ic"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h4"/></svg></span><b>Public documentation</b></div><p style={{color: "#c9cdd6"}}>The full whitepaper, tokenomics, and purchase guide are publicly available at <span className="num-ltr">zarair.com</span> — readable before any commitment.</p></div>
                    <div className="card"><div className="head"><span className="ic"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M16 16l5 5"/><path d="M8 11l2 2 4-4"/></svg></span><b>On-chain verification</b></div><p style={{color: "#c9cdd6"}}>The token and sale contracts are publicly viewable and code-verified on BscScan, a public block explorer — every transfer is traceable.</p></div>
                    <div className="card"><div className="head"><span className="ic"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="10" cy="10" r="2"/><path d="M14 14h4M14 17h3M6.5 16c1-2 4-2 5 0"/></svg></span><b>KYC after incorporation</b></div><p style={{color: "#c9cdd6"}}>KYC is not possible before a legal entity exists — but the infrastructure is designed and ready, and will be activated immediately upon incorporation.</p></div>
                    <div className="card"><div className="head"><span className="ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18"/></svg></span><b>Geo-aware approach</b></div><p style={{color: "#c9cdd6"}}>This offer is made only to jurisdictions with clear legal standing. Geographic restrictions — including the exclusion of US and EU persons — are enforced at the point of sale, both technically and contractually.</p></div>
                  </div>
                  <div className="gold-box" style={{marginTop: "14px"}}>
                    <b>Honesty statement:</b> ZARAI grants no profit rights, no ownership, and no repayment. Participating in this phase means supporting the launch of a real project.
                  </div>
                  <div className="footer"><span>11 — 12</span><span className="fbrand">ZAR AIR · zarair.com</span></div>
                </section>

                
                {/* <section className="slide">
                  <div className="kicker">Two Decades Behind One Idea</div>
                  <h2><span className="hicon"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><circle cx="17.5" cy="9" r="2.8"/><path d="M16.5 14.6c3 0 5 2 5 5.4"/></svg></span><span className="gtext">Behind the Project</span></h2>
                  <div className="card" style={{display: "flex", gap: "18px", alignItems: "center", marginTop: "4px"}}>
                    <svg viewBox="0 0 100 100" style={{flex: "0 0 74px", width: "74px", height: "74px"}}>
                      <rect width="100" height="100" rx="18" fill="#14161d" stroke="#a8874a" strokeWidth="2"/>
                      <path d="M20 78h60v-6c0-8-9-13-16-14l-4-8 8-12c3-4 1-12-8-12s-11 8-8 12l8 12-4 8c-7 1-16 6-16 14z" fill="#d4af37"/>
                    </svg>
                    <div>
                      <b style={{fontSize: "16.5px"}}>Zar Commerce FZE</b>
                      <p style={{fontSize: "14px", color: "#c9cdd6"}}>Registered in the RAK Free Trade Zone, UAE · Registration <span className="num-ltr">RAKFTZA-FZE-0245</span> · Incorporated 16 June 2004 — more than two decades of international trading history behind the project.</p>
                    </div>
                  </div>
                  <h3 style={{color: "#e6e0cf", margin: "20px 0 6px", fontFamily: "Georgia, serif", fontSize: "18px", position: "relative"}}>Leadership</h3>
                  <div className="grid">
                    <div className="card" style={{textAlign: "center"}}>
                      <div className="avatar"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg></div>
                      <b>[Founder&apos;s Name]</b>
                      <p style={{fontSize: "13.5px", color: "var(--muted)"}}>Founder & CEO — [add background & expertise]</p>
                    </div>
                    <div className="card" style={{textAlign: "center"}}>
                      <div className="avatar"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg></div>
                      <b>[Technical Lead&apos;s Name]</b>
                      <p style={{fontSize: "13.5px", color: "var(--muted)"}}>Token & smart-contract architect — [add background]</p>
                    </div>
                  </div>
                  <div className="gold-box" style={{background: "rgba(212,175,55,0.08)", borderStyle: "dashed"}}>
                    <b>Internal note (remove before presenting):</b> insert the real names and track records of key team members, and replace the avatars with real photos. Angel investors weigh &quot;who is behind this&quot; as heavily as the idea itself.
                  </div>
                  <div className="footer"><span>12 — 13</span><span className="fbrand">ZAR AIR · zarair.com</span></div>
                </section> */}

                
                <section className="slide" style={{background: "radial-gradient(ellipse 700px 380px at 82% -10%, rgba(212,175,55,0.14), transparent 60%), linear-gradient(160deg, #0b0c11, #101014 60%, #191306)"}}>
                  <div className="kicker">We Hide Nothing</div>
                  <h2><span className="hicon"><svg viewBox="0 0 24 24"><path d="M12 3l10 18H2z"/><path d="M12 10v5"/><path d="M12 17.5v.01"/></svg></span><span className="gtext">Honest Risks & Contact</span></h2>
                  <div className="risk">Airline financing is staged. This phase covers launch costs only; later stages require substantially larger capital.</div>
                  <div className="risk">Aviation licensing is a lengthy process and rests with the regulators of the jurisdiction of incorporation and operation.</div>
                  <div className="risk">ZARAI is not exchange-listed in this phase; liquidity is limited to the private market.</div>
                  <div className="risk">Aviation and crypto markets are both volatile. Our business model must be built for both — which is exactly why our tokenomics are deliberately conservative.</div>
                  <div style={{background: "linear-gradient(120deg, rgba(212,175,55,0.16), rgba(212,175,55,0.05))", border: "1px solid var(--line)", borderRadius: "14px", padding: "22px 24px", marginTop: "18px", textAlign: "center", position: "relative"}}>
                    <div style={{fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "var(--gold-deep)", marginBottom: "6px"}}>Let&apos;s Talk</div>
                    <div style={{fontFamily: "Georgia, serif", fontSize: "19px", color: "#fff"}}><span className="num-ltr">zarair.com</span> &nbsp;·&nbsp; <span className="num-ltr">info@zarair.com</span></div>
                    <div style={{fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "17px", color: "var(--gold-bright)", marginTop: "10px"}}>&quot;Zar Air — Where Blockchain Takes Flight. Come Fly With Us.&quot;</div>
                  </div>
                  <div className="footer"><span>12 — 12</span><span className="fbrand">ZAR AIR · zarair.com</span></div>
                </section>
          </div>
          <div className="pitch-deck-end-links">
            <Link href="/whitepaper">Explore the Whitepaper</Link>
            <Link className="btn-primary" href="/how-to-buy">Continue to How to Buy</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
