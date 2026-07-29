"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/portfolio";

/**
 * Work list with the mouse-following preview image, matching the original site.
 */
export function WorkList({ items }: { items: Project[] }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let smoothX = -999;
    let smoothY = -999;
    const mouse = { x: -999, y: -999 };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (smoothX === -999) {
        smoothX = mouse.x;
        smoothY = mouse.y;
      }
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const loop = () => {
      if (smoothX !== -999) {
        smoothX += (mouse.x - smoothX) * 0.15;
        smoothY += (mouse.y - smoothY) * 0.15;
        wrapper.style.left = `${smoothX}px`;
        wrapper.style.top = `${smoothY}px`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div className="work-list">
        {items.map((project, i) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className={`work-row reveal-up${i > 0 ? ` delay-${Math.min(i, 3)}` : ""}`}
            onMouseEnter={() => setActiveSlug(project.slug)}
            onMouseLeave={() => setActiveSlug(null)}
          >
            <h3 className="work-title">{project.title}</h3>
            <span className="work-role">{project.role}</span>
          </Link>
        ))}
      </div>

      <div
        ref={wrapperRef}
        className={`cursor-img-wrapper${activeSlug ? " visible" : ""}`}
        aria-hidden="true"
      >
        {items.map((project) => (
          <img
            key={project.slug}
            src={typeof project.image === "string" ? project.image : project.image?.src}
            alt=""
            loading="lazy"
            width={1200}
            height={800}
            className={`cursor-img${activeSlug === project.slug ? " active" : ""}`}
          />
        ))}
      </div>
    </>
  );
}
