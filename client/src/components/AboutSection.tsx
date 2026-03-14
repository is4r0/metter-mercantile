/**
 * DESIGN PHILOSOPHY: Appalachian Folk Revival
 * Split layout: large image on left, editorial text on right.
 * Linen texture background, diamond divider, Dancing Script pull-quote.
 */

const ABOUT_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663438547596/fTDDyYUexpBKDGpNie4VXv/about-section-MYJJND8rYjkzSAVR9rwKeC.webp";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28"
      style={{
        background: "oklch(0.97 0.018 85)",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23f5f0e8'/%3E%3Crect x='0' y='0' width='1' height='1' fill='%23e0d8c8' opacity='0.35'/%3E%3Crect x='2' y='2' width='1' height='1' fill='%23e0d8c8' opacity='0.35'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image — left, slightly offset */}
          <div className="relative fade-up">
            <div
              className="absolute -top-4 -left-4 w-full h-full border-2 hidden md:block"
              style={{ borderColor: "oklch(0.82 0.05 148 / 0.4)" }}
            />
            <img
              src={ABOUT_IMAGE}
              alt="Friendly staff helping a customer at Metter Mercantile"
              className="w-full object-cover relative z-10"
              style={{
                aspectRatio: "4/3",
                boxShadow: "0 8px 40px oklch(0.22 0.01 60 / 0.15)",
              }}
            />
            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -right-5 z-20 px-5 py-4 text-center hidden md:block"
              style={{
                background: "oklch(0.55 0.07 148)",
                color: "oklch(0.97 0.018 85)",
                boxShadow: "0 4px 20px oklch(0.55 0.07 148 / 0.35)",
              }}
            >
              <div
                className="text-3xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                5★
              </div>
              <div
                className="text-xs uppercase tracking-widest mt-0.5"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Rated
              </div>
            </div>
          </div>

          {/* Text — right */}
          <div>
            <p className="section-label fade-up">Our Story</p>

            <div className="diamond-divider fade-up delay-100">
              <span />
            </div>

            <h2
              className="mb-6 fade-up delay-200"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "oklch(0.22 0.01 60)",
              }}
            >
              A Place of{" "}
              <em style={{ color: "oklch(0.52 0.08 55)" }}>Continual Bliss</em>
            </h2>

            <blockquote
              className="script-accent text-xl mb-6 leading-relaxed fade-up delay-300"
              style={{ borderLeft: "3px solid oklch(0.82 0.05 148)", paddingLeft: "1.25rem" }}
            >
              "Step into a world of continual bliss."
            </blockquote>

            <p
              className="text-base leading-relaxed mb-6 fade-up delay-300"
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "oklch(0.38 0.015 60)",
                lineHeight: 1.8,
              }}
            >
              At Metter Mercantile, we've filled our massive historic space with
              more than just items — we've filled it with inspiration. Whether
              you're wandering through our curated booths of unique used goods or
              seeking expert advice for your next quilting project, you'll find a
              warm smile and a helping hand waiting for you.
            </p>

            <p
              className="text-base leading-relaxed mb-8 fade-up delay-400"
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "oklch(0.38 0.015 60)",
                lineHeight: 1.8,
              }}
            >
              Nestled in the heart of Metter, Georgia, our historic building is
              home to a beloved quilting corner and a treasure-filled mercantile
              — all under one roof, all waiting to be discovered.
            </p>

            <div className="flex flex-wrap gap-6 fade-up delay-500">
              <div>
                <div
                  className="text-3xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.52 0.08 55)" }}
                >
                  5.0
                </div>
                <div
                  className="text-xs uppercase tracking-widest"
                  style={{ fontFamily: "'Lato', sans-serif", color: "oklch(0.55 0.07 148)" }}
                >
                  Star Rating
                </div>
              </div>
              <div
                className="w-px self-stretch"
                style={{ background: "oklch(0.87 0.025 75)" }}
              />
              <div>
                <div
                  className="text-3xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.52 0.08 55)" }}
                >
                  Tue–Sat
                </div>
                <div
                  className="text-xs uppercase tracking-widest"
                  style={{ fontFamily: "'Lato', sans-serif", color: "oklch(0.55 0.07 148)" }}
                >
                  Open from 10 AM
                </div>
              </div>
              <div
                className="w-px self-stretch"
                style={{ background: "oklch(0.87 0.025 75)" }}
              />
              <div>
                <div
                  className="text-3xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.52 0.08 55)" }}
                >
                  ♿
                </div>
                <div
                  className="text-xs uppercase tracking-widest"
                  style={{ fontFamily: "'Lato', sans-serif", color: "oklch(0.55 0.07 148)" }}
                >
                  Accessible
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
