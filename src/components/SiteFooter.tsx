import { profile, socials } from "@/data/portfolio";
import { CtaButton } from "./CtaButton";

export function ContactSection({
  title = (
    <>
      Let's build
      <br />
      something.
    </>
  ),
}: {
  title?: React.ReactNode;
}) {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title reveal-up">{title}</h2>
        <a
          href={`mailto:${profile.email}`}
          style={{ textDecoration: "none" }}
          className="reveal-up delay-1"
        >
          <CtaButton label="Get in touch" />
        </a>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-divider reveal-up" />
      <div className="footer-content reveal-up delay-1">
        <div className="footer-block">
          <span className="footer-label">Version</span>
          <span className="footer-text">2026 © Edition</span>
        </div>
        <div className="footer-block">
          <span className="footer-label">Local Time</span>
          <span className="footer-text">{profile.location}</span>
        </div>
        <div className="footer-block socials-block">
          <span className="footer-label">Socials</span>
          <div className="socials-list">
            {socials.map((s) => (
              <a key={s.label} href={s.href}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
