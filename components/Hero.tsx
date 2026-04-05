"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #050A14 0%, #081525 50%, #050A14 100%)",
      }}
    >
      {/* Background image overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.18,
        }}
      />

      {/* Blue glow effects */}
      <div style={{
        position: "absolute",
        top: "20%",
        right: "-10%",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,144,192,0.15) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%",
        left: "-10%",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(216,48,48,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "8rem 1.5rem 4rem", width: "100%" }}>
        <div style={{ maxWidth: "750px" }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(0,144,192,0.15)",
            border: "1px solid rgba(0,144,192,0.4)",
            borderRadius: "100px",
            padding: "0.4rem 1rem",
            marginBottom: "1.5rem",
          }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#0090C0", boxShadow: "0 0 8px #0090C0" }} />
            <span style={{ color: "#0090C0", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Texas&apos; Most Trusted Roofers
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#FFFFFF",
            marginBottom: "1.5rem",
            letterSpacing: "-0.02em",
          }}>
            Premium Roofing &amp;{" "}
            <span style={{
              background: "linear-gradient(90deg, #0090C0, #00C4FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Construction
            </span>
            {" "}You Can Trust
          </h1>

          {/* Subheadline */}
          <p style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "#94A3B8",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
            maxWidth: "580px",
          }}>
            Stok America delivers exceptional roofing, siding, gutters, and storm damage restoration across Texas. Licensed, insured, and backed by our lifetime workmanship warranty.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "linear-gradient(135deg, #0090C0 0%, #006E94 100%)",
                color: "white",
                padding: "1rem 2rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1rem",
                boxShadow: "0 4px 25px rgba(0,144,192,0.4)",
                transition: "all 0.3s",
              }}
            >
              Get Free Estimate
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a
              href="tel:+15555555555"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white",
                padding: "1rem 2rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1rem",
                backdropFilter: "blur(10px)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0090C0" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              Call Now
            </a>
          </div>

          {/* Trust indicators */}
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {[
              { icon: "✓", text: "Licensed & Insured" },
              { icon: "✓", text: "Free Inspections" },
              { icon: "✓", text: "Insurance Specialists" },
            ].map((item) => (
              <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <span style={{ color: "#0090C0", fontWeight: 700 }}>{item.icon}</span>
                <span style={{ color: "#CBD5E1", fontSize: "0.9rem", fontWeight: 500 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.4rem",
        opacity: 0.5,
      }}>
        <span style={{ color: "#94A3B8", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #0090C0, transparent)" }} />
      </div>
    </section>
  );
}
