"use client";

import Link from "next/link";
import { useRevealOnScroll } from "@/hooks/use-reveal";
import { ContactSection, SiteFooter } from "@/components/SiteFooter";
import { profile, skills, stats } from "@/data/portfolio";

export default function AboutPage() {
  useRevealOnScroll();
  return (
    <>
      <section className="section page-top">
        <span className="eyebrow reveal-up">About me</span>
        <h1 className="section-title reveal-up">
          {profile.name.split(" ")[0]} <span>{profile.name.split(" ")[1]}</span>
        </h1>
        <p className="section-lead reveal-up delay-1">
          I'm a passionate junior frontend developer based in Johannesburg, dedicated to turning
          complex problems into beautiful, intuitive interface designs.
        </p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="grid-2">
          <div className="prose-block reveal-up">
            <h2 className="block-title">How I got here</h2>
            <p>
              I started where a lot of South African developers start: on a shared machine, with
              limited data, teaching myself HTML and CSS because I wanted to change how something
              on a screen looked. That curiosity carried me through Sedibeng TVET College, where I
              graduated in 2025 with a grounding in programming, databases and networking — and a
              clear sense that the web was where I wanted to work.
            </p>
            <p>
              While studying I took on freelance contracts, mostly rescuing slow template sites
              for local businesses. Those jobs taught me the thing I still design around: in South
              Africa, your user is probably on a mid-range Android phone, on a patchy connection,
              paying for every megabyte. A site that only feels fast on office fibre isn't fast.
            </p>
            <p>
              In July 2025 I co-founded <b>{profile.company}</b>, a Johannesburg studio building
              web products for small and mid-sized businesses. I lead the frontend side of every
              project: architecture, implementation, performance and the client conversations that
              shape all three.
            </p>
          </div>
          <div className="prose-block reveal-up delay-1">
            <h2 className="block-title">How I work</h2>
            <p>
              I treat performance and accessibility as requirements, not polish. Every build gets
              a performance budget agreed up front and a keyboard-and-screen-reader pass before
              sign-off. If a feature can't hit the budget, we decide that together rather than
              discovering it after launch.
            </p>
            <p>
              I like motion, but only the purposeful kind. An animation should tell you what
              changed, where you came from, or that something worked. Anything else is noise — and
              anyone who has asked their system to reduce motion gets an experience that's just as
              complete.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new web technologies, contributing to
              open-source, or obsessing over web animations and performance optimization.
            </p>
          </div>
        </div>
      </section>

      <section className="dark-panel reveal-up">
        <span className="eyebrow">The essentials</span>
        <h2 className="block-title on-dark" style={{ marginBottom: 40 }}>
          At a glance
        </h2>
        <div className="grid-3">
          {stats.map((s) => (
            <div key={s.label} className="info-card on-dark">
              <span className="step-num">{s.num}</span>
              <h3>{s.label}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title reveal-up">
          What I <span>use</span>
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
          <Link href="/experience" className="text-link">
            See the full timeline →
          </Link>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="grid-3">
          <div className="info-card reveal-up">
            <h3>Open source</h3>
            <p>
              Documentation, accessibility and small performance patches to the UI and animation
              libraries I use daily.
            </p>
          </div>
          <div className="info-card reveal-up delay-1">
            <h3>Web animation</h3>
            <p>
              Canvas masks, scroll choreography and transition systems — usually rebuilt from
              scratch to understand exactly how they work.
            </p>
          </div>
          <div className="info-card reveal-up delay-2">
            <h3>Performance</h3>
            <p>
              Chasing bytes and frames. Most of my weekends involve a Lighthouse trace I can't
              leave alone.
            </p>
          </div>
        </div>
      </section>

      <ContactSection
        title={
          <>
            Let's work
            <br />
            together.
          </>
        }
      />
      <SiteFooter />
    </>
  );
}
