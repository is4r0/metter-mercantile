/**
 * DESIGN PHILOSOPHY: Appalachian Folk Revival
 * Right-heavy layout: large quilting corner image on right, editorial text on left.
 * Quilt detail image as a floating inset. Warm cream background.
 */

const QUILTING_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663438547596/fTDDyYUexpBKDGpNie4VXv/quilting-corner-dijcJHkdmLeqJNi9cSvKhc.webp";
const QUILT_DETAIL_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663438547596/fTDDyYUexpBKDGpNie4VXv/quilt-detail-JBwVC3SEi7AqiBpWYrr4rp.webp";

const features = [
  "Custom quilts made on-site to your specifications",
  "Expert guidance for beginners and seasoned quilters",
  "Wide selection of premium fabrics in every color and pattern",
  "Friendly staff who live and breathe the craft",
];

export default function QuiltingSection() {
  return (
    <section
      id="quilting"
      className="py-20 md:py-28"
      style={{ background: "oklch(0.97 0.018 85)" }}
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text — left */}
          <div>
            <p className="section-label fade-up">The Quilting Corner</p>
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
              Where Every Stitch
              <br />
              <em style={{ color: "oklch(0.52 0.08 55)" }}>Tells a Story</em>
            </h2>

            <p
              className="text-base leading-relaxed mb-6 fade-up delay-300"
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "oklch(0.38 0.015 60)",
                lineHeight: 1.8,
              }}
            >
              Our knowledgeable team doesn't just sell fabric — we live the
              craft. Whether you're a first-time quilter or a seasoned artisan,
              our staff brings warmth, expertise, and genuine passion to every
              conversation.
            </p>

            <ul className="space-y-3 mb-8 fade-up delay-400">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center"
                    style={{
                      background: "oklch(0.55 0.07 148)",
                      transform: "rotate(45deg)",
                    }}
                  >
                    <div
                      className="w-2 h-2"
                      style={{
                        background: "oklch(0.97 0.018 85)",
                        transform: "rotate(45deg)",
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: "oklch(0.38 0.015 60)",
                      lineHeight: 1.6,
                    }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <blockquote
              className="fade-up delay-500 p-5"
              style={{
                background: "oklch(0.93 0.015 85)",
                borderLeft: "3px solid oklch(0.55 0.07 148)",
              }}
            >
              <p
                className="script-accent text-xl leading-relaxed"
                style={{ color: "oklch(0.52 0.08 55)" }}
              >
                "The ladies are so easy to talk to and very knowledgeable about
                quilting."
              </p>
              <footer
                className="mt-2 text-sm"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  color: "oklch(0.45 0.02 60)",
                  fontStyle: "normal",
                }}
              >
                — Amy S., local customer
              </footer>
            </blockquote>
          </div>

          {/* Images — right, stacked with overlap */}
          <div className="relative fade-up delay-200">
            {/* Main image */}
            <img
              src={QUILTING_IMAGE}
              alt="The quilting corner at Metter Mercantile with fabric bolts and a work table"
              className="w-full object-cover"
              style={{
                aspectRatio: "4/3",
                boxShadow: "0 8px 40px oklch(0.22 0.01 60 / 0.15)",
              }}
            />
            {/* Floating detail inset */}
            <div
              className="absolute -bottom-8 -left-8 w-40 h-40 hidden md:block"
              style={{
                boxShadow: "0 4px 20px oklch(0.22 0.01 60 / 0.2)",
                border: "4px solid oklch(0.97 0.018 85)",
              }}
            >
              <img
                src={QUILT_DETAIL_IMAGE}
                alt="Close-up detail of handmade quilt stitching"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
