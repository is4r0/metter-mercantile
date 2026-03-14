/**
 * DESIGN PHILOSOPHY: Appalachian Folk Revival
 * Warm charcoal background with cream text. Info cards for address, hours, phone.
 * Map embed placeholder. Accessibility and delivery callouts.
 */

import { MapPin, Phone, Clock, Truck, Accessibility } from "lucide-react";

const infoCards = [
  {
    icon: MapPin,
    title: "Find Us",
    lines: ["21 N Kennedy St", "Metter, Georgia 30439"],
    action: {
      label: "Get Directions",
      href: "https://maps.google.com/?q=21+N+Kennedy+St+Metter+GA+30439",
    },
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["(912) 685-3985", "We love to chat!"],
    action: { label: "Call Now", href: "tel:9126853985" },
  },
  {
    icon: Clock,
    title: "Hours",
    lines: ["Tuesday – Saturday", "Opens at 10:00 AM"],
    action: null,
  },
];

export default function VisitSection() {
  return (
    <section
      id="visit"
      className="py-20 md:py-28"
      style={{ background: "oklch(0.93 0.015 85)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label fade-up">Come See Us</p>
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
            Plan Your Visit to Metter
          </h2>
          <p
            className="mt-3 max-w-lg mx-auto fade-up delay-300"
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "oklch(0.45 0.02 60)",
              lineHeight: 1.7,
            }}
          >
            We're right in the heart of Metter, Georgia — easy to find, hard to
            leave.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Info cards */}
          <div className="space-y-5">
            {infoCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`warm-card p-6 flex items-start gap-5 fade-up delay-${(i + 1) * 100}`}
                >
                  <div
                    className="w-11 h-11 flex-shrink-0 flex items-center justify-center"
                    style={{
                      background: "oklch(0.55 0.07 148 / 0.15)",
                      border: "1px solid oklch(0.55 0.07 148 / 0.3)",
                    }}
                  >
                    <Icon
                      size={20}
                      style={{ color: "oklch(0.55 0.07 148)" }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-base font-bold mb-1"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "oklch(0.22 0.01 60)",
                      }}
                    >
                      {card.title}
                    </h3>
                    {card.lines.map((line) => (
                      <p
                        key={line}
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          color: "oklch(0.45 0.02 60)",
                          fontSize: "0.95rem",
                        }}
                      >
                        {line}
                      </p>
                    ))}
                    {card.action && (
                      <a
                        href={card.action.href}
                        className="inline-block mt-3 text-xs font-bold uppercase tracking-widest"
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          color: "oklch(0.55 0.07 148)",
                          textDecoration: "none",
                          borderBottom: "1px solid oklch(0.55 0.07 148 / 0.4)",
                          paddingBottom: "1px",
                        }}
                        target={card.action.href.startsWith("http") ? "_blank" : undefined}
                        rel={card.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {card.action.label} →
                      </a>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Accessibility & Delivery badges */}
            <div className="grid grid-cols-2 gap-4 fade-up delay-400">
              <div
                className="p-4 flex items-center gap-3"
                style={{
                  background: "oklch(0.82 0.05 148 / 0.18)",
                  border: "1px solid oklch(0.82 0.05 148 / 0.35)",
                }}
              >
                <Accessibility size={20} style={{ color: "oklch(0.55 0.07 148)" }} strokeWidth={1.5} />
                <div>
                  <div
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ fontFamily: "'Lato', sans-serif", color: "oklch(0.38 0.015 60)" }}
                  >
                    Wheelchair
                  </div>
                  <div
                    className="text-xs"
                    style={{ fontFamily: "'Lato', sans-serif", color: "oklch(0.55 0.07 148)" }}
                  >
                    Fully accessible
                  </div>
                </div>
              </div>
              <div
                className="p-4 flex items-center gap-3"
                style={{
                  background: "oklch(0.82 0.05 148 / 0.18)",
                  border: "1px solid oklch(0.82 0.05 148 / 0.35)",
                }}
              >
                <Truck size={20} style={{ color: "oklch(0.55 0.07 148)" }} strokeWidth={1.5} />
                <div>
                  <div
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ fontFamily: "'Lato', sans-serif", color: "oklch(0.38 0.015 60)" }}
                  >
                    Delivery
                  </div>
                  <div
                    className="text-xs"
                    style={{ fontFamily: "'Lato', sans-serif", color: "oklch(0.55 0.07 148)" }}
                  >
                    Same-day local
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="fade-up delay-300">
            <div
              className="overflow-hidden"
              style={{
                boxShadow: "0 8px 32px oklch(0.22 0.01 60 / 0.12)",
                border: "1px solid oklch(0.87 0.025 75)",
              }}
            >
              <iframe
                title="Metter Mercantile Location"
                src="https://maps.google.com/maps?q=21+N+Kennedy+St,+Metter,+GA+30439&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="380"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* CTA below map */}
            <div
              className="mt-6 p-6 text-center"
              style={{
                background: "oklch(0.22 0.01 60)",
              }}
            >
              <p
                className="script-accent text-xl mb-3"
                style={{ color: "oklch(0.82 0.05 148)" }}
              >
                We can't wait to see you!
              </p>
              <p
                className="text-sm mb-4"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  color: "oklch(0.72 0.01 85)",
                }}
              >
                Stop by Tuesday through Saturday, starting at 10 AM.
              </p>
              <a href="tel:9126853985" className="btn-primary">
                Call (912) 685-3985
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
