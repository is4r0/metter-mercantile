/**
 * DESIGN PHILOSOPHY: Appalachian Folk Revival
 * Full-bleed hero with the storefront image. Off-center text overlay on dark-tinted left side.
 * Playfair Display headline, Dancing Script sub-accent, warm cream text.
 * Parallax-style background attachment on desktop.
 */

import { useEffect, useState } from "react";
import { ChevronDown, Star } from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663438547596/fTDDyYUexpBKDGpNie4VXv/hero-banner-UMkR42ueFLtLKWjjr8DkU9.webp";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "5rem" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundAttachment: "fixed",
        }}
      />

      {/* Gradient overlay — dark on left, lighter on right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, oklch(0.12 0.02 55 / 0.88) 0%, oklch(0.12 0.02 55 / 0.72) 45%, oklch(0.12 0.02 55 / 0.3) 100%)",
        }}
      />
      {/* Subtle quilt-diamond pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          {/* Stars badge */}
          <div
            className={`flex items-center gap-2 mb-6 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill="oklch(0.82 0.14 75)"
                  style={{ color: "oklch(0.82 0.14 75)" }}
                />
              ))}
            </div>
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "oklch(0.82 0.14 75)", fontFamily: "'Lato', sans-serif" }}
            >
              5-Star Destination
            </span>
          </div>

          {/* Script accent */}
          <div
            className={`script-accent text-2xl mb-2 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0.2s", color: "oklch(0.82 0.05 148)" }}
          >
            Welcome to
          </div>

          {/* Main headline */}
          <h1
            className={`mb-4 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "oklch(0.97 0.018 85)",
              transitionDelay: "0.3s",
            }}
          >
            Stitching Traditions
            <br />
            <em style={{ color: "oklch(0.82 0.05 148)" }}>&amp; Finding Treasures</em>
          </h1>

          {/* Sub-headline */}
          <p
            className={`text-lg mb-8 leading-relaxed transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "oklch(0.88 0.01 85)",
              maxWidth: "480px",
              transitionDelay: "0.4s",
            }}
          >
            A 5-star destination for handcrafted quilts, expert advice, and a
            curated marketplace of unique goods in Metter, Georgia.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0.5s" }}
          >
            <button
              onClick={() => {
                const el = document.querySelector("#quilting");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary"
            >
              Explore Quilting
            </button>
            <button
              onClick={() => {
                const el = document.querySelector("#visit");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline"
              style={{ color: "oklch(0.97 0.018 85)", borderColor: "oklch(0.97 0.018 85 / 0.6)" }}
            >
              Plan Your Visit
            </button>
          </div>

          {/* Location pill */}
          <div
            className={`flex items-center gap-2 mt-10 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0.6s" }}
          >
            <div
              className="w-px h-8"
              style={{ background: "oklch(0.82 0.05 148)" }}
            />
            <div>
              <div
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: "oklch(0.82 0.05 148)", fontFamily: "'Lato', sans-serif" }}
              >
                21 N Kennedy St
              </div>
              <div
                className="text-sm"
                style={{ color: "oklch(0.78 0.01 85)", fontFamily: "'Lato', sans-serif" }}
              >
                Metter, Georgia 30439
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce"
        style={{ background: "none", border: "none", color: "oklch(0.88 0.01 85)" }}
      >
        <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "'Lato', sans-serif" }}>
          Discover
        </span>
        <ChevronDown size={20} />
      </button>
    </section>
  );
}
