"use client";

const testimonials = [
  {
    name: "Marcus T.",
    location: "Houston, TX",
    rating: 5,
    text: "Stok America replaced our entire roof after a hailstorm and handled the insurance claim from start to finish. Couldn't have asked for a smoother process. The crew was professional, fast, and left the yard cleaner than they found it.",
  },
  {
    name: "Jennifer R.",
    location: "San Antonio, TX",
    rating: 5,
    text: "I had three other contractors ghost me after the storm. Stok America showed up on time, gave me a straight quote, and had my roof done in two days. Outstanding quality and great communication the whole time.",
  },
  {
    name: "Carlos M.",
    location: "Dallas, TX",
    rating: 5,
    text: "They worked directly with my insurance company and got us a full replacement approved. The workmanship is excellent — my roof looks brand new. Highly recommend Stok America to anyone dealing with storm damage.",
  },
  {
    name: "Lisa W.",
    location: "Austin, TX",
    rating: 5,
    text: "From the initial inspection to the final walkthrough, everything was professional and transparent. They even found damage my insurance adjuster missed. Got us more coverage. These guys are in your corner.",
  },
  {
    name: "David K.",
    location: "Katy, TX",
    rating: 5,
    text: "Best roofing experience I've ever had. Fair pricing, lifetime workmanship warranty, and they use top-tier materials. My neighbors are already asking for their number.",
  },
  {
    name: "Sandra B.",
    location: "Pearland, TX",
    rating: 5,
    text: "Stok America did our commercial building and three of our employees' homes. Every single job was done right. This is a company you can trust with your biggest investment.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "3px", marginBottom: "1rem" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FFD700">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" style={{
      background: "#050A14",
      padding: "5rem 1.5rem",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{
            color: "#0090C0",
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}>WHAT HOMEOWNERS SAY</p>
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            color: "#ffffff",
            margin: "0 0 1rem",
          }}>Trusted by Hundreds of Families</h2>
          <p style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "1.05rem",
            maxWidth: "600px",
            margin: "0 auto",
          }}>Real reviews from real homeowners. We let our work speak for itself.</p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "1.5rem",
        }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: "#0D1829",
              border: "1px solid rgba(0,144,192,0.15)",
              borderRadius: "12px",
              padding: "1.75rem",
            }}>
              <StarRating count={t.rating} />
              <p style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
                fontStyle: "italic",
              }}>&ldquo;{t.text}&rdquo;</p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #0090C0, #005f80)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "1rem",
                  flexShrink: 0,
                }}>{t.name.charAt(0)}</div>
                <div>
                  <p style={{ color: "#ffffff", fontWeight: 700, margin: 0, fontSize: "0.95rem" }}>{t.name}</p>
                  <p style={{ color: "rgba(255,255,255,0.45)", margin: 0, fontSize: "0.8rem" }}>{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
