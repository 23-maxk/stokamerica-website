"use client";

const features = [
  "Licensed & Fully Insured",
  "Free Roof Inspection",
  "Insurance Claim Assistance",
  "10-Year Workmanship Warranty",
  "GAF Certified Contractor",
  "Same-Day Emergency Response",
  "Transparent Pricing",
  "Local Mississippi Company",
  "Post-Job Cleanup Guarantee",
  "Financing Available",
];

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0090C0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const competitors = [
  { name: "Stok America", highlight: true, checks: [true, true, true, true, true, true, true, true, true, true] },
  { name: "National Chains", highlight: false, checks: [true, false, false, false, false, false, false, false, false, true] },
  { name: "Unlicensed Contractors", highlight: false, checks: [false, false, false, false, false, false, false, false, false, false] },
];

export default function Comparison() {
  return (
    <section
      style={{
        background: "#080F1E",
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p
            style={{
              color: "#0090C0",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontSize: "0.8rem",
              marginBottom: "0.75rem",
            }}
          >
            Why Choose Us
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Stok America vs. The Competition
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
            Not all roofing contractors are created equal. See why homeowners across Mississippi trust Stok America over national chains and unlicensed contractors.
          </p>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: 0,
              minWidth: "600px",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    padding: "1rem 1.5rem",
                    textAlign: "left",
                    color: "rgba(255,255,255,0.4)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  Feature
                </th>
                {competitors.map((c, i) => (
                  <th
                    key={i}
                    style={{
                      padding: "1rem 1.5rem",
                      textAlign: "center",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      borderBottom: c.highlight
                        ? "2px solid #0090C0"
                        : "1px solid rgba(255,255,255,0.08)",
                      background: c.highlight
                        ? "rgba(0,144,192,0.08)"
                        : "transparent",
                      color: c.highlight ? "#0090C0" : "rgba(255,255,255,0.4)",
                      borderRadius: i === 1 ? "12px 12px 0 0" : "0",
                    }}
                  >
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, fi) => (
                <tr key={fi}>
                  <td
                    style={{
                      padding: "1rem 1.5rem",
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "0.95rem",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      fontWeight: 500,
                    }}
                  >
                    {feature}
                  </td>
                  {competitors.map((c, ci) => (
                    <td
                      key={ci}
                      style={{
                        padding: "1rem 1.5rem",
                        textAlign: "center",
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                        background: c.highlight
                          ? "rgba(0,144,192,0.05)"
                          : "transparent",
                      }}
                    >
                      {c.checks[fi] ? <CheckIcon /> : <XIcon />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom note */}
        <div
          style={{
            marginTop: "2.5rem",
            textAlign: "center",
            color: "rgba(255,255,255,0.4)",
            fontSize: "0.85rem",
          }}
        >
          * Based on verified customer reviews and public contractor records in Mississippi.
        </div>
      </div>
    </section>
  );
}
