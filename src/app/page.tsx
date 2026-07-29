"use client";

import Link from "next/link";
import { useRevealOnScroll } from "@/hooks/use-reveal";
import { Hero } from "@/components/Hero";
import { WorkList } from "@/components/WorkList";
import { ContactSection, SiteFooter } from "@/components/SiteFooter";
import { featuredProjects, experiences, services, stats, profile } from "@/data/portfolio";

export default function Home() {
  useRevealOnScroll();
  return (
    <>
      <Hero />

      <section id="about" className="about-section">
        <h2 className="section-title reveal-up">
          About <span>Me</span>
        </h2>
        <div className="about-content">
          <div className="about-text reveal-up delay-1">
            Hi, I'm <b>{profile.name}</b>. I'm a passionate junior frontend developer based in{" "}
            <b>Johannesburg</b>, dedicated to turning complex problems into beautiful, intuitive
            interface designs.
            <br />
            <br />
            When I'm not coding, you'll find me exploring new web technologies, contributing to
            open-source, or obsessing over web animations and performance optimization.
          </div>
          <div className="about-stats">
            {stats.map((s) => (
              <div key={s.label} className="stat-item reveal-up delay-2">
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
            <Link href="/about" className="text-link on-dark reveal-up delay-3">
              Read the full story →
            </Link>
          </div>
        </div>
      </section>

      <section id="work" className="section">
        <div className="section-head">
          <h2 className="section-title reveal-up">
            Selected <span>Work</span>
          </h2>
          <Link href="/work" className="text-link reveal-up delay-1">
            View all projects →
          </Link>
        </div>
        <WorkList items={featuredProjects} />
      </section>

      <section id="services" className="section">
        <div className="section-head">
          <h2 className="section-title reveal-up">
            My <span>Services</span>
          </h2>
          <Link href="/services" className="text-link reveal-up delay-1">
            How I work →
          </Link>
        </div>
        <div className="services-list">
          {services.map((s, i) => (
            <div key={s.slug} className={`service-item reveal-up${i ? ` delay-${i}` : ""}`}>
              <span className="service-name">{s.name}</span>
              <span className="service-desc">{s.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-head">
          <h2 className="section-title reveal-up">
            My <span>Experience</span>
          </h2>
          <Link href="/experience" className="text-link reveal-up delay-1">
            Full timeline →
          </Link>
        </div>
        <div className="experience-list">
          {experiences.slice(0, 2).map((e, i) => (
            <div key={e.role} className={`exp-item reveal-up${i ? ` delay-${i}` : ""}`}>
              <span className="exp-year">{e.year}</span>
              <div className="exp-details">
                <span className="exp-role">{e.role}</span>
                <span className="exp-company">{e.company}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </>
  );
}
