/**
 * DESIGN PHILOSOPHY: Appalachian Folk Revival
 * Warm, handcrafted, tactile — like walking through rooms of a real Southern mercantile.
 * Colors: Aged cream (#FAF6EF), sage green (#6B8F71), warm walnut (#8B6347), deep charcoal (#3D3530).
 * Typography: Playfair Display (display) + Lato (body) + Dancing Script (accent).
 * Layout: Asymmetric editorial — each section has its own personality.
 */

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import QuiltingSection from "@/components/QuiltingSection";
import MercantileSection from "@/components/MercantileSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VisitSection from "@/components/VisitSection";
import Footer from "@/components/Footer";

export default function Home() {
  // Intersection Observer for fade-up animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.97 0.018 85)" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <QuiltingSection />
      <MercantileSection />
      <TestimonialsSection />
      <VisitSection />
      <Footer />
    </div>
  );
}
