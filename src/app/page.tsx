"use client";

import Link from "next/link";
import { useRevealOnScroll } from "@/hooks/use-reveal";
import { Hero } from "@/components/Hero";
import { WorkList } from "@/components/WorkList";
import { ContactSection, SiteFooter } from "@/components/SiteFooter";
import { useCMS } from "@/context/CMSContext";

export default function Home() {
  useRevealOnScroll();
  const { config } = useCMS();

  const { profile, projects, services, experiences, stats, sections } = config;

  const sectionMap = sections?.reduce((acc, s) => {
    acc[s.id] = s;
    return acc;
  }, {} as Record<string, typeof sections[0]>) || {};

  const heroSec = sectionMap["hero"];
  const aboutSec = sectionMap["about"];
  const workSec = sectionMap["work"];
  const servicesSec = sectionMap["services"];
  const expSec = sectionMap["experience"];
  const contactSec = sectionMap["contact"];

  const featuredProjects = projects?.filter((p) => p.featured) || [];

  return (
    <>
      {(!heroSec || heroSec.enabled !== false) && <Hero />}

      {(!aboutSec || aboutSec.enabled !== false) && (
        <section id="about" className="about-section">
          <h2 className="section-title reveal-up">
            {aboutSec?.title || "About"} <span>{aboutSec?.subtitle || "Me"}</span>
          </h2>
          <div className="about-content">
            <div className="about-text reveal-up delay-1">
              {profile.bio || `Hi, I'm ${profile.name}. I'm a frontend developer based in ${profile.location}.`}
            </div>
            <div className="about-stats">
              {stats?.map((s) => (
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
      )}

      {(!workSec || workSec.enabled !== false) && (
        <section id="work" className="section">
          <div className="section-head">
            <h2 className="section-title reveal-up">
              {workSec?.title || "Selected"} <span>{workSec?.subtitle || "Work"}</span>
            </h2>
            <Link href="/work" className="text-link reveal-up delay-1">
              View all projects →
            </Link>
          </div>
          <WorkList items={featuredProjects as any} />
        </section>
      )}

      {(!servicesSec || servicesSec.enabled !== false) && (
        <section id="services" className="section">
          <div className="section-head">
            <h2 className="section-title reveal-up">
              {servicesSec?.title || "My"} <span>{servicesSec?.subtitle || "Services"}</span>
            </h2>
            <Link href="/services" className="text-link reveal-up delay-1">
              How I work →
            </Link>
          </div>
          <div className="services-list">
            {services?.map((s, i) => (
              <div key={s.slug + i} className={`service-item reveal-up${i ? ` delay-${i}` : ""}`}>
                <span className="service-name">{s.name}</span>
                <span className="service-desc">{s.desc}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {(!expSec || expSec.enabled !== false) && (
        <section id="experience" className="section">
          <div className="section-head">
            <h2 className="section-title reveal-up">
              {expSec?.title || "My"} <span>{expSec?.subtitle || "Experience"}</span>
            </h2>
            <Link href="/experience" className="text-link reveal-up delay-1">
              Full timeline →
            </Link>
          </div>
          <div className="experience-list">
            {experiences?.slice(0, 2).map((e, i) => (
              <div key={e.role + i} className={`exp-item reveal-up${i ? ` delay-${i}` : ""}`}>
                <span className="exp-year">{e.year}</span>
                <div className="exp-details">
                  <span className="exp-role">{e.role}</span>
                  <span className="exp-company">{e.company}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {(!contactSec || contactSec.enabled !== false) && (
        <>
          <ContactSection />
          <SiteFooter />
        </>
      )}
    </>
  );
}
