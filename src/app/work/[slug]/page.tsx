"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useRevealOnScroll } from "@/hooks/use-reveal";
import { ContactSection, SiteFooter } from "@/components/SiteFooter";
import { getProject, projects } from "@/data/portfolio";

export default function ProjectPage() {
  useRevealOnScroll();
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const project = getProject(slug);

  if (!project) {
    return (
      <>
        <section className="section page-top" style={{ minHeight: "70vh" }}>
          <h1 className="section-title">
            No such <span>project</span>
          </h1>
          <Link href="/work" className="text-link">
            Back to all work →
          </Link>
        </section>
        <SiteFooter />
      </>
    );
  }

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="section page-top" style={{ paddingBottom: 0 }}>
        <Link href="/work" className="text-link reveal-up" style={{ marginBottom: 32 }}>
          ← All work
        </Link>
        <h1 className="section-title reveal-up" style={{ marginTop: 32, marginBottom: 32 }}>
          {project.title}
        </h1>
        <p className="section-lead reveal-up delay-1">{project.summary}</p>

        <div className="case-hero reveal-up delay-2">
          <img
            src={typeof project.image === "string" ? project.image : project.image?.src}
            alt={`${project.title} interface`}
            width={1200}
            height={800}
          />
        </div>

        <div className="case-meta reveal-up">
          <div className="case-meta-item">
            <span className="case-meta-label">Client</span>
            <span className="case-meta-value">{project.client}</span>
          </div>
          <div className="case-meta-item">
            <span className="case-meta-label">Year</span>
            <span className="case-meta-value">{project.year}</span>
          </div>
          <div className="case-meta-item">
            <span className="case-meta-label">Duration</span>
            <span className="case-meta-value">{project.duration}</span>
          </div>
          <div className="case-meta-item">
            <span className="case-meta-label">Role</span>
            <span className="case-meta-value">{project.role}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid-2">
          <div className="prose-block reveal-up">
            <h2 className="block-title">The problem</h2>
            <p>{project.problem}</p>
          </div>
          <div className="prose-block reveal-up delay-1">
            <h2 className="block-title">The approach</h2>
            <p>{project.approach}</p>
          </div>
        </div>

        <div style={{ marginTop: 60 }} className="reveal-up delay-2">
          <h2 className="block-title" style={{ marginBottom: 24 }}>
            What I built
          </h2>
          <ul className="check-list">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: 60 }} className="reveal-up delay-3">
          <span className="eyebrow">Stack</span>
          <div className="tag-list">
            {project.stack.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-panel reveal-up">
        <h2 className="block-title on-dark">The outcome</h2>
        <p style={{ marginTop: 20, maxWidth: 820 }}>{project.outcome}</p>
        <div className="metric-row">
          {project.metrics.map((m) => (
            <div key={m.label} className="metric">
              <span className="metric-num">{m.num}</span>
              <span className="metric-label">{m.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <span className="eyebrow reveal-up">Next project</span>
        <Link
          href={`/work/${next.slug}`}
          className="work-row reveal-up"
          style={{ borderTop: "1px solid var(--hl-line)" }}
        >
          <h2 className="work-title">{next.title}</h2>
          <span className="work-role">{next.role}</span>
        </Link>
      </section>

      <ContactSection
        title={
          <>
            Start
            <br />
            something.
          </>
        }
      />
      <SiteFooter />
    </>
  );
}
