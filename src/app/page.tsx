"use client";

import { Roadmap } from "@/components/Roadmap";
import { ProjectTeam } from "@/components/ProjectTeam";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Nav } from "@/components/sections/Nav";
import { Tokenomics } from "@/components/sections/Tokenomics";
import { TokenUtility } from "@/components/sections/TokenUtility";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Nav />
      <Hero />
      <div className="section-divider" />
      <Features />
      <section className="features" id="team" aria-labelledby="project-team-title">
        <div className="section-header">
          <h2 id="project-team-title">Project Team &amp; Supporting Entity</h2>
          <p>Company formation details provided by the project owner.</p>
        </div>
        <ProjectTeam />
      </section>
      <div className="section-divider" />
      <TokenUtility />
      <div className="section-divider" />
      <Tokenomics />
      <div className="section-divider" />
      <section className="roadmap" id="roadmap">
        <div className="roadmap-inner">
          <div className="section-header reveal">
            <h2>Project Status &amp; Roadmap</h2>
            <p>Current token infrastructure and proposed future utilities. Future features have no confirmed launch dates.</p>
          </div>
          <Roadmap />
        </div>
      </section>
      <div className="section-divider" />
      <Footer />
    </div>
  );
}
