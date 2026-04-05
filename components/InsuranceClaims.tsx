"use client";

const steps = [
  {
    num: "01",
    title: "Free Roof Inspection",
    desc: "We come out and perform a thorough roof and property inspection at no cost to you — identifying all storm-related damage that qualifies for an insurance claim.",
  },
  {
    num: "02",
    title: "File Your Claim",
    desc: "We guide you through filing your claim with your insurance company and help you understand your policy so you get every dollar you're entitled to.",
  },
  {
    num: "03",
    title: "Meet With the Adjuster",
    desc: "Our team meets your insurance adjuster on-site to make sure no damage is overlooked. We advocate for you so nothing gets missed in the inspection.",
  },
  {
    num: "04",
    title: "Approve & Schedule",
    desc: "Once your claim is approved, we schedule your project at a time that works for you. We handle permits, materials, and logistics — you just wait for the results.",
  },
  {
    num: "05",
    title: "Expert Installation",
    desc: "Our certified crew completes the full installation using premium materials. Every job is inspected before we consider it done.",
  },
  {
    num: "06",
    title: "Final Walkthrough",
    desc: "We walk the property with you, explain everything that was done, and hand over your warranty documentation. Your satisfaction is required before we leave.",
  },
];

export default function InsuranceClaims() {
  return (
    <section
      id="insurance"
      style={{
        background: "#050A14",
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
              padding: "0.35rem 1rem",
              borderRadius: "999px",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Insurance Claims
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#ffffff",
              margin: "0 0 1rem",
              lineHeight: 1.2,
            }}
          >
            We Handle the Insurance Process — <span style={{ color: "#0090C0" }}>Start to Finish</span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "1.1rem",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Most homeowners leave money on the table after storm damage. Our team
            knows exactly what insurance companies look for — and how to make sure
            you get a full, fair settlement.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                background: "#0D1829",
                border: "1px solid rgba(0,144,192,0.15)",
                borderRadius: "12px",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "16px",
                  fontSize: "4rem",
                  fontWeight: 900,
                  color: "rgba(0,144,192,0.06)",
                  lineHeight: 1,
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {step.num}
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: "rgba(0,144,192,0.15)",
                  color: "#0090C0",
                  fontWeight: 800,
                  fontSize: "0.9rem",
                  marginBottom: "1rem",
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  margin: "0 0 0.75rem",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: "3rem",
            background: "linear-gradient(135deg, rgba(0,144,192,0.12), rgba(216,48,48,0.08))",
            border: "1px solid rgba(0,144,192,0.2)",
            borderRadius: "16px",
            padding: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <h3
              style={{
                color: "#ffffff",
                fontWeight: 800,
                fontSize: "1.4rem",
                margin: "0 0 0.5rem",
              }}
            >
              Storm damage? Don&apos;t wait.
            </h3>
            <p style={{ color: "rgba(255,255,255,0.6)", margin: 0, fontSize: "0.95rem" }}>
              Insurance claims have deadlines. Call us today for a free inspection.
            </p>
          </div>
          <a
            href="tel:+16013364265"
            style={{
              background: "#D83030",
              color: "#ffffff",
              padding: "0.85rem 2rem",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
              display: "inline-block",
            }}
          >
            Call (601) 336-4265
          </a>
        </div>
      </div>
    </section>
  );
}
