"use client";

export default function BigCTA() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0090C0 0%, #005f80 100%)",
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(0,0,0,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(0,0,0,0.15) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontSize: "0.8rem",
            marginBottom: "1rem",
          }}
        >
          Limited Availability — Book Now
        </p>

        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            marginBottom: "1.5rem",
          }}
        >
          Storm Damage? We&apos;ll Handle Everything
        </h2>

        <p
          style={{
            fontSize: "1.15rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "2.5rem",
            lineHeight: 1.7,
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
          }}
        >
          From free inspection to final installation, Stok America manages your entire roofing project — including your insurance claim. No stress, no surprises.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="tel:+16018675309"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "#D83030",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1.05rem",
              padding: "1rem 2.2rem",
              borderRadius: "8px",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(216,48,48,0.5)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17.46z" />
            </svg>
            Call for Free Inspection
          </a>

          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1.05rem",
              padding: "1rem 2.2rem",
              borderRadius: "8px",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            Get a Free Quote
          </a>
        </div>

        {/* Trust strip */}
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "3rem",
            color: "rgba(255,255,255,0.7)",
            fontSize: "0.85rem",
            fontWeight: 600,
          }}
        >
          {["No Cost Until Job is Done", "Licensed & Insured", "GAF Certified", "Response Within 24 Hours"].map((t) => (
            <span key={t} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <span style={{ color: "rgba(255,255,255,0.9)" }}>✓</span> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
