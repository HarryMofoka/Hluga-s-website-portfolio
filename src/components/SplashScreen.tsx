"use client";

import { usePathname } from "next/navigation";

export function SplashScreen() {
  const pathname = usePathname();
  const boxes = [0, 1, 2, 3, 4];

  return (
    <div key={pathname} className="splash" aria-hidden="true">
      <div className="splash-row splash-row-top">
        {boxes.map((i) => (
          <div key={`t-${i}`} className="splash-box" />
        ))}
      </div>
      <div className="splash-row splash-row-bottom">
        {boxes.map((i) => (
          <div key={`b-${i}`} className="splash-box" />
        ))}
      </div>
    </div>
  );
}
