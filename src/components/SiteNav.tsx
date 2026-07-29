"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { ArrowIcon } from "./CtaButton";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="logo-wrapper">
        <div className="inner">
          <Link href="/" aria-label="Home">
            <img
              src="https://framerusercontent.com/images/VMcS7YYTM5PXfXvlHc9u3hSCMM.svg"
              alt=""
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>

      <div className="burger-wrapper">
        <div className="inner">
          <button
            type="button"
            className={`burger-btn${open ? " open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </div>

      <div className={`menu-panel${open ? " open" : ""}`}>
        <nav>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="menu-contact">
          <a href={`mailto:${profile.email}`} className="menu-email">
            {profile.email}
          </a>
          <div className="menu-socials">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">CodePen</a>
          </div>
        </div>
        <div style={{ marginTop: 32 }}>
          <Link href="/contact" className="menu-cta-btn" onClick={() => setOpen(false)}>
            <span className="menu-cta-bg" />
            <span className="menu-cta-text">Let's talk</span>
            <span className="menu-cta-circle">
              <ArrowIcon size={14} />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
