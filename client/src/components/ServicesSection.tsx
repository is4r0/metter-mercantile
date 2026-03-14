/**
 * DESIGN PHILOSOPHY: Appalachian Folk Revival
 * Three service cards on a warm muted background. Sage green icons, Playfair headings.
 * Cards lift on hover with warm shadow. Diamond divider above section.
 */

import { Scissors, ShoppingBag, Truck } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Expert Quilting",
    description:
      "Our knowledgeable team doesn't just sell fabric — we live the craft. We offer on-site quilting services and love helping beginners and experts alike find their perfect project.",
    accent: "On-Site Craftsmanship",
  },
  {
    icon: ShoppingBag,
    title: "The Mercantile",
    description:
      "Explore a huge selection of 'neat things.' From vintage finds to everyday essentials, our booths are constantly updated with curated used goods across multiple rooms.",
    accent: "Treasure Hunt Experience",
  },
  {
    icon: Truck,
    title: "Local Delivery",
    description:
      "Can't get it home? Ask us about our same-day delivery options for local residents. We want every piece you love to find its way to you.",
    accent: "Same-Day Available",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 relative"
      style={{ background: "oklch(0.93 0.015 85)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label fade-up">What We Offer</p>
          <div className="diamond-divider fade-up delay-100 max-w-xs mx-auto">
            <span />
          </div>
          <h2
            className="fade-up delay-200"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "oklch(0.22 0.01 60)",
            }}
          >
            Our Services
          </h2>
          <p
            className="mt-3 max-w-xl mx-auto fade-up delay-300"
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "oklch(0.45 0.02 60)",
              lineHeight: 1.7,
            }}
          >
            From handcrafted quilts to hidden treasures, we offer a one-of-a-kind
            experience that keeps our neighbors coming back.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`warm-card p-8 fade-up delay-${(i + 1) * 100}`}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center mb-5"
                  style={{
                    background: "oklch(0.82 0.05 148 / 0.25)",
                    border: "1px solid oklch(0.82 0.05 148 / 0.4)",
                  }}
                >
                  <Icon
                    size={22}
                    style={{ color: "oklch(0.55 0.07 148)" }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Accent label */}
                <p
                  className="text-xs uppercase tracking-widest font-semibold mb-2"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    color: "oklch(0.55 0.07 148)",
                  }}
                >
                  {service.accent}
                </p>

                {/* Title */}
                <h3
                  className="text-xl font-bold mb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "oklch(0.22 0.01 60)",
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    color: "oklch(0.45 0.02 60)",
                    lineHeight: 1.75,
                    fontSize: "0.95rem",
                  }}
                >
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="mt-6 h-0.5 w-12"
                  style={{ background: "oklch(0.55 0.07 148)" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
