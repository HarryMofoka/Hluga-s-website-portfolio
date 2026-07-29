"use client";

import Link from "next/link";
import { useRevealOnScroll } from "@/hooks/use-reveal";
import { ContactSection, SiteFooter } from "@/components/SiteFooter";
import { services, processSteps } from "@/data/portfolio";

export default function ServicesPage() {
  useRevealOnScroll();
  return (
    <>
      <section className="section page-top">
        <span className="eyebrow reveal-up">What I do</span>
        <h1 className="section-title reveal-up">
          My <span>Services</span>
        </h1>
        <p className="section-lead reveal-up delay-1">
          Three things, done properly. I build front ends that stay fast on real devices,
          implement designs so they match the file at every breakpoint, and add motion only where
          it makes the interface easier to understand.
        </p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        {services.map((service, i) => (
          <div key={service.slug} className={`service-block reveal-up${i ? " delay-1" : ""}`}>
            <div className="service-block-head">
              <span className="eyebrow">0{i + 1}</span>
              <h2 className="block-title">{service.name}</h2>
            </div>
            <div className="service-block-body">
              <p>{service.intro}</p>
              <ul className="check-list">
                {service.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="tag-list">
                {service.tools.map((tool) => (
                  <span key={tool} className="tag">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="dark-panel reveal-up">
        <span className="eyebrow">How a project runs</span>
        <h2 className="block-title on-dark" style={{ marginBottom: 40 }}>
          A predictable process
        </h2>
        <div className="grid-3">
          {processSteps.map((step) => (
            <div key={step.num} className="info-card on-dark">
              <span className="step-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="grid-2">
          <div className="prose-block reveal-up">
            <h2 className="block-title">Ways to work together</h2>
            <p>
              Most projects run as a fixed-scope build with a quoted price and a delivery date.
              For longer engagements I also work on a retainer, which suits teams shipping
              continuously and wanting a dependable frontend pair of hands each week.
            </p>
            <p>
              Smaller pieces — a performance rescue, an accessibility audit, or implementing a
              single complex screen — are quoted as one-off sprints.
            </p>
          </div>
          <div className="prose-block reveal-up delay-1">
            <h2 className="block-title">What you always get</h2>
            <ul className="check-list">
              <li>A preview URL updated every week of the build</li>
              <li>Performance and accessibility checks before sign-off</li>
              <li>Clean, typed, documented code your team can inherit</li>
              <li>Direct contact with me, not an account manager</li>
            </ul>
            <Link href="/work" className="text-link">
              See the work this produces →
            </Link>
          </div>
        </div>
      </section>

      <ContactSection
        title={
          <>
            Have a
            <br />
            project?
          </>
        }
      />
      <SiteFooter />
    </>
  );
}
