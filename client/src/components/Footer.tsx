/**
 * DESIGN PHILOSOPHY: Appalachian Folk Revival
 * Deep charcoal footer with cream text. Logo repeated, quick links, contact info.
 * Thin sage green top border. Script accent tagline.
 */

import { Scissors, MapPin, Phone, Clock, Heart } from "lucide-react";

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "oklch(0.18 0.01 60)",
        borderTop: "3px solid oklch(0.55 0.07 148)",
      }}
    >
      <div className="container py-14">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 flex items-center justify-center"
                style={{ background: "oklch(0.55 0.07 148)" }}
              >
                <Scissors size={16} style={{ color: "oklch(0.97 0.018 85)" }} strokeWidth={1.5} />
              </div>
              <div
                className="text-lg font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "oklch(0.97 0.018 85)",
                }}
              >
                Metter Mercantile
              </div>
            </div>
            <p
              className="script-accent text-lg mb-4"
              style={{ color: "oklch(0.82 0.05 148)" }}
            >
              Stitching Traditions &amp; Finding Treasures
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "oklch(0.62 0.01 85)",
                lineHeight: 1.7,
              }}
            >
              A boutique quilt shop and antique mercantile in the heart of
              Metter, Georgia. 5-star rated and community loved.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-xs uppercase tracking-widest font-bold mb-5"
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "oklch(0.55 0.07 148)",
              }}
            >
              Explore
            </h4>
            <ul className="space-y-2">
              {[
                { label: "About the Shop", href: "#about" },
                { label: "Quilting Corner", href: "#quilting" },
                { label: "The Mercantile", href: "#mercantile" },
                { label: "Customer Reviews", href: "#testimonials" },
                { label: "Visit Us", href: "#visit" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm hover:text-white transition-colors"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: "oklch(0.62 0.01 85)",
                      background: "none",
                      border: "none",
                      padding: 0,
                      textAlign: "left",
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4
              className="text-xs uppercase tracking-widest font-bold mb-5"
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "oklch(0.55 0.07 148)",
              }}
            >
              Contact &amp; Hours
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} style={{ color: "oklch(0.55 0.07 148)", flexShrink: 0, marginTop: "2px" }} strokeWidth={1.5} />
                <span
                  className="text-sm"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    color: "oklch(0.62 0.01 85)",
                    lineHeight: 1.6,
                  }}
                >
                  21 N Kennedy St<br />
                  Metter, GA 30439
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} style={{ color: "oklch(0.55 0.07 148)", flexShrink: 0 }} strokeWidth={1.5} />
                <a
                  href="tel:9126853985"
                  className="text-sm hover:text-white transition-colors"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    color: "oklch(0.62 0.01 85)",
                    textDecoration: "none",
                  }}
                >
                  (912) 685-3985
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} style={{ color: "oklch(0.55 0.07 148)", flexShrink: 0, marginTop: "2px" }} strokeWidth={1.5} />
                <span
                  className="text-sm"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    color: "oklch(0.62 0.01 85)",
                    lineHeight: 1.6,
                  }}
                >
                  Tuesday – Saturday<br />
                  Opens at 10:00 AM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid oklch(0.97 0.018 85 / 0.08)" }}
        >
          <p
            className="text-xs"
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "oklch(0.45 0.01 85)",
            }}
          >
            © {new Date().getFullYear()} Metter Mercantile. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs uppercase tracking-widest font-semibold"
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "oklch(0.55 0.07 148)",
              background: "none",
              border: "none",
            }}
          >
            ↑ Back to Top
          </button>
          <p
            className="text-xs flex items-center gap-1"
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "oklch(0.45 0.01 85)",
            }}
          >
            Made with{" "}
            <Heart size={11} fill="oklch(0.55 0.07 148)" style={{ color: "oklch(0.55 0.07 148)" }} />{" "}
            in Metter, Georgia
          </p>
        </div>
      </div>
    </footer>
  );
}
