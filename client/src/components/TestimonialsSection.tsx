/**
 * DESIGN PHILOSOPHY: Appalachian Folk Revival
 * Staggered testimonial cards on cream background. Large opening quote marks.
 * Dancing Script for the quote text, Playfair for attribution.
 * Warm walnut accent on active/featured card.
 */

import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I love just floating from each room in a continual bliss... The ladies are so easy to talk to and very knowledgeable about quilting.",
    author: "Amy S.",
    role: "Local Customer",
    featured: true,
  },
  {
    quote:
      "Awesome staff... it's huge and full of neat things. You can't go wrong.",
    author: "Amy B.",
    role: "Local Neighbor",
    featured: false,
  },
  {
    quote:
      "Always have some good stuff in the store. Go by and see them!",
    author: "Timothy H.",
    role: "Regular Visitor",
    featured: false,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 relative"
      style={{
        background: "oklch(0.97 0.018 85)",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='20' cy='20' r='1' fill='%23a0714f' opacity='0.12'/%3E%3C/svg%3E")`,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label fade-up">Community Voices</p>
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
            What Our Neighbors Are Saying
          </h2>
          <p
            className="mt-3 max-w-lg mx-auto fade-up delay-300"
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "oklch(0.45 0.02 60)",
              lineHeight: 1.7,
            }}
          >
            Don't take our word for it — hear from the community that keeps
            coming back.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className={`p-8 fade-up delay-${(i + 1) * 100} relative`}
              style={{
                background: t.featured
                  ? "oklch(0.52 0.08 55)"
                  : "oklch(0.99 0.01 85)",
                border: t.featured
                  ? "none"
                  : "1px solid oklch(0.87 0.025 75)",
                boxShadow: t.featured
                  ? "0 8px 32px oklch(0.52 0.08 55 / 0.3)"
                  : "0 2px 12px oklch(0.52 0.08 55 / 0.06)",
                transform: t.featured ? "translateY(-8px)" : "none",
              }}
            >
              {/* Large quote mark */}
              <div
                className="text-7xl leading-none mb-2 select-none"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: t.featured
                    ? "oklch(0.97 0.018 85 / 0.2)"
                    : "oklch(0.55 0.07 148 / 0.2)",
                  lineHeight: 0.8,
                }}
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={13}
                    fill={t.featured ? "oklch(0.97 0.018 85)" : "oklch(0.82 0.14 75)"}
                    style={{
                      color: t.featured
                        ? "oklch(0.97 0.018 85)"
                        : "oklch(0.82 0.14 75)",
                    }}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="text-base leading-relaxed mb-6"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontStyle: "italic",
                  color: t.featured
                    ? "oklch(0.97 0.018 85 / 0.92)"
                    : "oklch(0.38 0.015 60)",
                  lineHeight: 1.75,
                }}
              >
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 flex items-center justify-center text-sm font-bold"
                  style={{
                    background: t.featured
                      ? "oklch(0.97 0.018 85 / 0.2)"
                      : "oklch(0.82 0.05 148 / 0.25)",
                    color: t.featured
                      ? "oklch(0.97 0.018 85)"
                      : "oklch(0.55 0.07 148)",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {t.author[0]}
                </div>
                <div>
                  <div
                    className="text-sm font-bold"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: t.featured
                        ? "oklch(0.97 0.018 85)"
                        : "oklch(0.22 0.01 60)",
                    }}
                  >
                    {t.author}
                  </div>
                  <div
                    className="text-xs"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: t.featured
                        ? "oklch(0.97 0.018 85 / 0.65)"
                        : "oklch(0.55 0.07 148)",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12 fade-up delay-400">
          <p
            className="script-accent text-xl"
            style={{ color: "oklch(0.52 0.08 55)" }}
          >
            Come see for yourself — we'd love to meet you.
          </p>
        </div>
      </div>
    </section>
  );
}
