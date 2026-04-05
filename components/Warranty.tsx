"use client";

const warranties = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0090C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Manufacturer Material Warranty",
    duration: "Up to 50 Years",
    desc: "We install GAF and CertainTeed shingles that come with manufacturer warranties covering defects in materials for up to 50 years, giving you lasting peace of mind.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0090C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Workmanship Warranty",
    duration: "10 Years",
    desc: "Every roof we install is backed by our 10-year workmanship warranty. If any installation-related issue arises, we come back and fix it — no questions asked.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0090C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "GAF System Plus Warranty",
    duration: "Silver Pledge",
    desc: "As a GAF certified contractor, we offer the GAF System Plus warranty — the most comprehensive coverage in the roofing industry, including non-prorated coverage.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0090C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Transferable Coverage",
    duration: "Fully Transferable",
    desc: "Selling your home? Our warranties transfer to the new owner — adding real resale value and giving buyers confidence in the quality of their new roof.",
  },
];

export default function Warranty() {
  return (
    <section
      id="warranty"
      style={{
        background: "#080F1E",
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(0,144,192,0.12)",
              color: "#0090C0",
              border: "1px solid rgba(0,144,192,0.3)",
              borderRadius: "999px",
              padding: "0.35rem 1.1rem",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1.2rem",
            }}
          >
            Warranty Protection
          </span>
          <h2
            style={{
              color: "#ffffff",
              fontWeight: 900,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              margin: "0 0 1rem",
              lineHeight: 1.2,
            }}
          >
            We Stand Behind Every Roof
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.05rem",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Our warranty coverage is industry-leading because we believe a roof is one of the most important investments you'll make in your home or business.
          </p>
        </div>

        {/* Warranty Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {warranties.map((w, i) => (
            <div
              key={i}
              style={{
                background: "#0D1829",
                border: "1px solid rgba(0,144,192,0.15)",
                borderRadius: "16px",
                padding: "2rem",
                transition: "border-color 0.3s, transform 0.3s",
              }}
            >
              <div style={{ marginBottom: "1.2rem" }}>{w.icon}</div>
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(216,48,48,0.12)",
                  color: "#D83030",
                  border: "1px solid rgba(216,48,48,0.25)",
                  borderRadius: "999px",
                  padding: "0.2rem 0.8rem",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                {w.duration}
              </div>
              <h3
                style={{
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  margin: "0 0 0.75rem",
                }}
              >
                {w.title}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {w.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trust badge row */}
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
            padding: "2rem",
            background: "rgba(0,144,192,0.05)",
            borderRadius: "16px",
            border: "1px solid rgba(0,144,192,0.1)",
          }}
        >
          {[
            "GAF Certified Contractor",
            "Licensed & Insured",
            "BBB Accredited",
            "Local Mississippi Company",
          ].map((badge, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.9rem",
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#0090C0",
                  flexShrink: 0,
                }}
              />
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
