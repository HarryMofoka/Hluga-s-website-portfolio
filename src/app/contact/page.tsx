"use client";

import { useState, type FormEvent } from "react";
import { useRevealOnScroll } from "@/hooks/use-reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { CtaButton } from "@/components/CtaButton";
import { profile, socials, services } from "@/data/portfolio";

export default function ContactPage() {
  useRevealOnScroll();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.project}\n\n${form.message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      `New project enquiry from ${form.name || "the website"}`,
    )}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <section className="section page-top">
        <span className="eyebrow reveal-up">Contact</span>
        <h1 className="section-title reveal-up">
          Let's build <span>something.</span>
        </h1>
        <p className="section-lead reveal-up delay-1">
          Tell me what you're making and where it's stuck. I reply to every enquiry within two
          working days, usually with a few questions and a rough sense of scope.
        </p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="grid-2">
          <div className="prose-block reveal-up">
            <h2 className="block-title">Direct</h2>
            <a href={`mailto:${profile.email}`} className="text-link">
              {profile.email}
            </a>
            <p style={{ marginTop: 8 }}>
              Based in {profile.location}, working with clients across South Africa and remotely
              beyond it. Available for fixed-scope builds, retainers and short rescue sprints.
            </p>
            <div>
              <span className="eyebrow" style={{ marginTop: 24 }}>
                Elsewhere
              </span>
              <div className="tag-list">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} className="tag">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <span className="eyebrow" style={{ marginTop: 24 }}>
                Currently
              </span>
              <ul className="check-list">
                <li>Taking on new projects from next month</li>
                <li>Two retainer slots open for 2026</li>
                <li>Typical project start: 2 — 3 weeks from brief</li>
              </ul>
            </div>
          </div>

          <div className="reveal-up delay-1">
            <h2 className="block-title" style={{ marginBottom: 24 }}>
              Send a brief
            </h2>
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="field">
                <label htmlFor="project">Project type</label>
                <input
                  id="project"
                  list="service-options"
                  placeholder="Frontend Development"
                  value={form.project}
                  onChange={(e) => setForm({ ...form, project: e.target.value })}
                />
                <datalist id="service-options">
                  {services.map((s) => (
                    <option key={s.slug} value={s.name} />
                  ))}
                </datalist>
              </div>
              <div className="field">
                <label htmlFor="message">What are you building?</label>
                <textarea
                  id="message"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button type="submit" style={{ border: 0, background: "none", padding: 0 }}>
                <CtaButton label="Send enquiry" />
              </button>
              {sent && (
                <p className="form-status">
                  Your email client should have opened with the brief ready to send. If it didn't,
                  email {profile.email} directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
