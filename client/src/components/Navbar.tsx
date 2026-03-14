/**
 * DESIGN PHILOSOPHY: Appalachian Folk Revival
 * Sticky navbar with warm cream background, Playfair Display logo, sage green accents.
 * Thin bottom border with warm walnut tone. Nav links underline from left on hover.
 */

import { useState, useEffect } from "react";
import { Menu, X, Scissors } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Quilting", href: "#quilting" },
    { label: "Mercantile", href: "#mercantile" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Visit Us", href: "#visit" },
  ];

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "oklch(0.97 0.018 85 / 0.97)"
          : "oklch(0.97 0.018 85 / 0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: scrolled
          ? "1px solid oklch(0.87 0.025 75)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 16px oklch(0.52 0.08 55 / 0.08)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2 group"
          >
            <div
              className="w-8 h-8 flex items-center justify-center rounded-sm"
              style={{ background: "oklch(0.55 0.07 148)" }}
            >
              <Scissors size={16} style={{ color: "oklch(0.97 0.018 85)" }} strokeWidth={1.5} />
            </div>
            <div>
              <div
                className="text-lg font-bold leading-none"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.01 60)" }}
              >
                Metter Mercantile
              </div>
              <div
                className="text-xs leading-none mt-0.5"
                style={{ fontFamily: "'Lato', sans-serif", color: "oklch(0.55 0.07 148)", letterSpacing: "0.12em" }}
              >
                METTER, GEORGIA
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="relative text-sm font-semibold group"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  color: "oklch(0.38 0.015 60)",
                  letterSpacing: "0.06em",
                  background: "none",
                  border: "none",
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: "oklch(0.55 0.07 148)" }}
                />
              </button>
            ))}
            <a
              href="tel:9126853985"
              className="btn-primary text-xs"
              style={{ padding: "0.5rem 1.25rem" }}
            >
              (912) 685-3985
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: "oklch(0.22 0.01 60)", background: "none", border: "none" }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "oklch(0.97 0.018 85)",
            borderColor: "oklch(0.87 0.025 75)",
          }}
        >
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-left py-3 px-2 text-sm font-semibold border-b"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  color: "oklch(0.38 0.015 60)",
                  letterSpacing: "0.06em",
                  borderColor: "oklch(0.93 0.015 85)",
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid oklch(0.93 0.015 85)",
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:9126853985"
              className="btn-primary text-center mt-3"
            >
              Call Us: (912) 685-3985
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
