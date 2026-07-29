"use client";

import Link from "next/link";
import { useRevealOnScroll } from "@/hooks/use-reveal";
import { ContactSection, SiteFooter } from "@/components/SiteFooter";
import { experiences, skills } from "@/data/portfolio";

export default function ExperiencePage() {
  useRevealOnScroll();
  return (
    <>
      <section className="section page-top">
        <span className="eyebrow reveal-up">2022 — present</span>
        <h1 className="section-title reveal-up">
          My <span>Experience</span>
        </h1>
        <p className="section-lead reveal-up delay-1">
          Four years from first line of code to running the frontend practice at my own studio.
          Here is what happened in between.
        </p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="experience-list" style={{ marginTop: 0 }}>
          {experiences.map((exp, i) => (
            <div key={exp.role} className={`exp-item reveal-up${i ? " delay-1" : ""}`}>
              <span className="exp-year">{exp.year}</span>
              <div className="exp-details">
                <span className="exp-role">{exp.role}</span>
                <span className="exp-company">{exp.company}</span>
                <p className="exp-summary">{exp.summary}</p>
                <ul className="check-list" style={{ marginTop: 16 }}>
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="dark-panel reveal-up">
        <span className="eyebrow">Education</span>
        <h2 className="block-title on-dark">Sedibeng TVET College, 2022 — 2025</h2>
        <p style={{ marginTop: 20, maxWidth: 820 }}>
          A three-year qualification in information technology covering programming fundamentals,
          databases, networking and systems support. My final-year project was the first version
          of this portfolio — a static site with hand-written animation that convinced me frontend
          was the specialisation worth committing to.
        </p>
        <div className="metric-row">
          <div className="metric">
            <span className="metric-num">2025</span>
            <span className="metric-label">Graduated</span>
          </div>
          <div className="metric">
            <span className="metric-num">3 yrs</span>
            <span className="metric-label">Full-time study</span>
          </div>
          <div className="metric">
            <span className="metric-num">IT</span>
            <span className="metric-label">Field of study</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title reveal-up">
          Skills <span>today</span>
        </h2>
        <div className="grid-2">
          {skills.map((group, i) => (
            <div key={group.group} className={`reveal-up${i ? " delay-1" : ""}`}>
              <span className="eyebrow">{group.group}</span>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 60 }} className="reveal-up delay-2">
          <Link href="/work" className="text-link">
            See what I've built with them →
          </Link>
        </div>
      </section>

      <ContactSection
        title={
          <>
            Hiring or
            <br />
            building?
          </>
        }
      />
      <SiteFooter />
    </>
  );
}
