"use client";

export default function VideoSection() {
  return (
    <section
      id="promo-video"
      style={{
        background: "#050A14",
        padding: "5rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{
            color: "#0090C0",
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}>SEE US IN ACTION</p>
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            color: "#ffffff",
            margin: "0 0 1rem",
          }}>Built Tough. Built to Last.</h2>
          <p style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "1.05rem",
            maxWidth: "600px",
            margin: "0 auto",
          }}>Watch how we deliver top-tier roofing and construction — every time.</p>
        </div>

        {/* Video container */}
        <div style={{
          position: "relative",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 0 60px rgba(0,144,192,0.2), 0 20px 60px rgba(0,0,0,0.6)",
          border: "1px solid rgba(0,144,192,0.2)",
          background: "#000",
          aspectRatio: "16/9",
        }}>
          <video
            controls
            playsInline
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover",
            }}
            poster="/stokamerica-logo-full.png"
          >
            <source src="/stokamerica-promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* CTA below video */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <a
            href="tel:+1-555-000-0000"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "linear-gradient(135deg, #0090C0, #006A8E)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1rem",
              padding: "0.9rem 2.2rem",
              borderRadius: "8px",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(0,144,192,0.4)",
            }}
          >
            Get Your Free Estimate Today
          </a>
        </div>
      </div>
    </section>
  );
}
