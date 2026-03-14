/**
 * DESIGN PHILOSOPHY: Appalachian Folk Revival
 * Full-bleed image with overlaid editorial text on the right.
 * Dark overlay on image, cream text. Asymmetric composition.
 */

const MERCANTILE_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663438547596/fTDDyYUexpBKDGpNie4VXv/mercantile-interior-YegpGQBYdg73RUd84jKVHq.webp";

const highlights = [
  { label: "Multiple Rooms", desc: "Wander through a huge, ever-changing layout" },
  { label: "Curated Booths", desc: "Unique used goods and vintage finds" },
  { label: "Constantly Updated", desc: "New items added regularly — always something new" },
  { label: "Local Finds", desc: "Treasures sourced from the heart of Georgia" },
];

export default function MercantileSection() {
  return (
    <section
      id="mercantile"
      className="py-20 md:py-28"
      style={{ background: "oklch(0.93 0.015 85)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label fade-up">The Mercantile Experience</p>
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
            A Treasure Hunt Awaits
          </h2>
        </div>

        {/* Main content: image + text side by side */}
        <div className="grid md:grid-cols-5 gap-0 overflow-hidden" style={{ boxShadow: "0 8px 40px oklch(0.22 0.01 60 / 0.12)" }}>
          {/* Image — takes 3 of 5 columns */}
          <div className="md:col-span-3 relative fade-up">
            <img
              src={MERCANTILE_IMAGE}
              alt="The interior of Metter Mercantile with antiques and unique finds"
              className="w-full h-full object-cover"
              style={{ minHeight: "400px" }}
            />
            {/* Overlay for readability */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, transparent 60%, oklch(0.22 0.01 60 / 0.4) 100%)",
              }}
            />
          </div>

          {/* Text panel — takes 2 of 5 columns */}
          <div
            className="md:col-span-2 flex flex-col justify-center p-8 lg:p-12 fade-up delay-200"
            style={{ background: "oklch(0.22 0.01 60)" }}
          >
            <p
              className="script-accent text-2xl mb-4"
              style={{ color: "oklch(0.82 0.05 148)" }}
            >
              "It's huge and full of neat things."
            </p>
            <p
              className="text-sm mb-8"
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "oklch(0.72 0.01 85)",
                lineHeight: 1.7,
              }}
            >
              — Amy B., local neighbor
            </p>

            <p
              className="text-base leading-relaxed mb-8"
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "oklch(0.82 0.01 85)",
                lineHeight: 1.8,
              }}
            >
              Step inside and lose yourself in our massive historic space. With
              multiple rooms and curated booths, every visit reveals something
              new to discover.
            </p>

            <div className="space-y-4">
              {highlights.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-start gap-3 fade-up delay-${(i + 2) * 100}`}
                >
                  <div
                    className="w-1.5 h-1.5 mt-2 flex-shrink-0"
                    style={{
                      background: "oklch(0.55 0.07 148)",
                      transform: "rotate(45deg)",
                    }}
                  />
                  <div>
                    <div
                      className="text-sm font-bold"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        color: "oklch(0.97 0.018 85)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-xs"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        color: "oklch(0.65 0.01 85)",
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const el = document.querySelector("#visit");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 btn-outline"
              style={{
                color: "oklch(0.82 0.05 148)",
                borderColor: "oklch(0.82 0.05 148)",
                alignSelf: "flex-start",
              }}
            >
              Plan Your Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
