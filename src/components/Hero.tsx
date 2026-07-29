"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { profile } from "@/data/portfolio";
import { CtaButton } from "./CtaButton";

const BASE_IMG =
  "https://soft-zoom-63098134.figma.site/_assets/v11/5c9f982199fde1d9b85a20e5396f0fa7bacaf9a3.png?w=2560";
const REVEAL_IMG =
  "https://soft-zoom-63098134.figma.site/_assets/v11/6be2165e31648955b4e071f4cf2a50bc572b9bfd.png?w=1536";
const SPOTLIGHT_R = 260;

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const imgLayer = revealRef.current;
    if (!canvas || !imgLayer) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: -999, y: -999 };
    const smooth = { x: -999, y: -999 };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const loop = () => {
      smooth.x += (mouse.x - smooth.x) * 0.1;
      smooth.y += (mouse.y - smooth.y) * 0.1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const grad = ctx.createRadialGradient(
        smooth.x,
        smooth.y,
        0,
        smooth.x,
        smooth.y,
        SPOTLIGHT_R,
      );
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.4, "rgba(255,255,255,1)");
      grad.addColorStop(0.6, "rgba(255,255,255,0.75)");
      grad.addColorStop(0.75, "rgba(255,255,255,0.4)");
      grad.addColorStop(0.88, "rgba(255,255,255,0.12)");
      grad.addColorStop(1, "rgba(255,255,255,0)");

      ctx.beginPath();
      ctx.arc(smooth.x, smooth.y, SPOTLIGHT_R, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      const dataUrl = canvas.toDataURL();
      imgLayer.style.webkitMaskImage = `url(${dataUrl})`;
      imgLayer.style.maskImage = `url(${dataUrl})`;
      imgLayer.style.webkitMaskSize = "100% 100%";
      imgLayer.style.maskSize = "100% 100%";

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  const words = profile.headline.split(" ");

  return (
    <main className="hero">
      <div className="hero-big-text creator-text-animate">
        <h2>{profile.brand}</h2>
      </div>

      <div
        className="hero-base-img hero-image-animate"
        style={{ backgroundImage: `url('${BASE_IMG}')` }}
      />

      <canvas id="reveal-canvas" ref={canvasRef} />
      <div
        className="hero-reveal-img"
        ref={revealRef}
        style={{ backgroundImage: `url('${REVEAL_IMG}')` }}
      />

      <div className="hero-content">
        <div className="hero-content-inner">
          <h1 className="hero-headline">
            {words.map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="word-reveal"
                style={{ animationDelay: `${1 + i * 0.05}s` }}
              >
                {word}
              </span>
            ))}
          </h1>
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <CtaButton label="Start a project now" className="cta-animate" />
          </Link>
        </div>
      </div>
    </main>
  );
}
