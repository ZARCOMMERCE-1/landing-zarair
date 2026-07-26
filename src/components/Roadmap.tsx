"use client";

const ROADMAP_PHASES = [
  {
    title: "Token Creation & Launch",
    description:
      "Establish tokenomics, create the ZARAi token, and launch the token sale.",
  },
  {
    title: "Token Sale",
    description:
      "Operate the verified ZARAI sale contract on BNB Chain with USDT payments.",
  },
  {
    title: "Ecosystem Readiness",
    description:
      "Evaluate future integrations and distribution channels subject to technical, legal, and partner review.",
  },
  {
    title: "App & Licensing",
    description:
      "Develop the ZARAir booking app and obtain airline operating licenses.",
  },
  {
    title: "First Commercial Flights",
    description:
      "Launch initial routes with quality used aircraft on underserved corridors.",
  },
  {
    title: "International Expansion",
    description:
      "Scale operations across borders, activate token rewards, and transition to DAO governance.",
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
