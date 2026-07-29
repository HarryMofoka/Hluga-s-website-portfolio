"use client";

import Link from "next/link";
import { useRevealOnScroll } from "@/hooks/use-reveal";
import { ContactSection, SiteFooter } from "@/components/SiteFooter";
import { WorkList } from "@/components/WorkList";
import { projects, featuredProjects } from "@/data/portfolio";

export default function WorkPage() {
  useRevealOnScroll();
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      <section className="section page-top">
        <span className="eyebrow reveal-up">Selected projects, 2024 — 2026</span>
        <h1 className="section-title reveal-up">
          The <span>Work</span>
        </h1>
        <p className="section-lead reveal-up delay-1">
          Eight projects built for South African businesses, community initiatives and my own
          studio. Every one of them was measured on the same things: how fast it loads on a
          mid-range phone, how well it works when the signal drops, and whether anyone can use it
          with a keyboard.
        </p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <h2 className="block-title reveal-up" style={{ marginBottom: 32 }}>
          Featured
        </h2>
        <WorkList items={featuredProjects} />
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <h2 className="block-title reveal-up" style={{ marginBottom: 40 }}>
          More projects
        </h2>
        <div className="work-grid">
          {rest.map((project, i) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className={`work-card reveal-up${i ? ` delay-${Math.min(i, 3)}` : ""}`}
            >
              <div className="work-card-media">
                <img
                  src={typeof project.image === "string" ? project.image : project.image?.src}
                  alt={`${project.title} interface`}
                  loading="lazy"
                  width={1200}
                  height={800}
                />
              </div>
              <h3>{project.title}</h3>
              <span className="work-card-meta">
                {project.role} — {project.year}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <ContactSection
        title={
          <>
            Want work
            <br />
            like this?
          </>
        }
      />
      <SiteFooter />
    </>
  );
}
