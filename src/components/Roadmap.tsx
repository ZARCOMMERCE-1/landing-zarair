"use client";

const ROADMAP_PHASES = [
  {
    title: "Token & Sale Contracts",
    description:
      "ZARAI and its USDT sale contract are deployed on BNB Smart Chain Mainnet.",
  },
  {
    title: "Digital Services — Under Evaluation",
    description:
      "Potential digital services require technical, commercial and regulatory review before implementation. No delivery date is confirmed.",
  },
  {
    title: "Future Concepts — Under Evaluation",
    description:
      "Potential reward and travel-related features are not implemented. Eligibility and redemption rules are not finalized, and no current on-chain claim to these benefits exists.",
  },
];

const ACTIVE_PHASE_INDEX = 0;

export function Roadmap() {
  return (
    <div className="timeline">
      {ROADMAP_PHASES.map((phase, index) => {
        const isActive = index === ACTIVE_PHASE_INDEX;
        const phaseLabel = isActive
          ? `Phase ${index + 1} — Current`
          : `Phase ${index + 1}`;

        return (
          <div
            key={index}
            className={`timeline-item reveal${isActive ? " active" : ""}`}
          >
            <div
              className={`timeline-dot${isActive ? " active" : ""}`}
            />
            <div className="timeline-content">
              <div className="phase">{phaseLabel}</div>
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
