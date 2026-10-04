"use client";

import { ALLOCATION_POLICY_STATEMENT, ALLOCATION_TECHNICAL_DISCLOSURE } from "@/lib/project-content";

const ROADMAP_PHASES = [
  {
    title: "Token & Sale Infrastructure — Live",
    description:
      "ZARAI and its USDT Sale Contract are deployed on BNB Smart Chain Mainnet. The website provides wallet purchases and links to public contract information.",
  },
  {
    title: "Digital Ecosystem — Development / Evaluation",
    description:
      "Potential digital services require technical, commercial and regulatory review before implementation. No delivery date is confirmed.",
  },
  {
    title: "Planned Airline & Travel Ecosystem",
    description:
      "A planned low-cost airline concept is a future project. Travel-related and reward features remain under evaluation, with no confirmed launch date or current flight entitlement.",
  },
];

const ACTIVE_PHASE_INDEX = 0;

export function Roadmap() {
  return (
    <div className="timeline">
      {ROADMAP_PHASES.map((phase, index) => {
        const isActive = index === ACTIVE_PHASE_INDEX;
        const phaseLabel = isActive
          ? `Phase ${index + 1} — Live`
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
              {index === 2 && (
                <p className="roadmap-policy"><strong>Project policy:</strong> {ALLOCATION_POLICY_STATEMENT} <strong>Technical disclosure:</strong> {ALLOCATION_TECHNICAL_DISCLOSURE}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
