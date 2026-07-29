import { useEffect } from "react";

/**
 * Adds the `active` class to every `.reveal-up` element as it scrolls into view.
 * Re-runs whenever `key` changes so newly mounted routes get observed.
 */
export function useRevealOnScroll(key?: string) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal-up"));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // data attribute (not className) so React hydration never conflicts
            entry.target.setAttribute("data-revealed", "");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);
}
