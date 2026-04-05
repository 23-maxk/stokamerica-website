"use client";

const services = [
  {
    icon: "🏠",
    title: "Roof Replacement",
    description: "Complete tear-off and replacement with premium materials. We handle shingles, metal, tile, and flat roofing systems for any home or building.",
  },
  {
    icon: "🔧",
    title: "Roof Repair",
    description: "Fast, reliable repairs for leaks, storm damage, missing shingles, and more. We stop the damage before it spreads.",
  },
  {
    icon: "🌧️",
    title: "Storm Damage",
    description: "Hail and wind damage specialists. We document everything, work directly with your insurance company, and restore your roof fast.",
  },
  {
    icon: "🏢",
    title: "Commercial Roofing",
    description: "TPO, EPDM, modified bitumen, and built-up roofing for commercial and industrial properties. Minimal disruption to your operations.",
  },
  {
    icon: "💧",
    title: "Gutters & Drainage",
    description: "Full gutter installation, replacement, and cleaning. Proper drainage protects your foundation and extends roof life.",
  },
  {
    icon: "🛡️",
    title: "Roof Inspection",
    description: "Comprehensive roof inspections with detailed reports. Perfect for pre-purchase, insurance claims, or annual maintenance.",
  },
];

export default function Services() {
  return (
    <section id="services" style={{
      background: "#050A14",
      padding: "5rem 1.5rem",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{
            display: "inline-block",
            background: "rgba(0,144,192,0.15)",
            border: "1px solid rgba(0,144,192,0.4)",
            borderRadius: "999px",
            padding: "0.4rem 1.2rem",
            fontSize: "0.8rem",
            color: "#0090C0",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "1rem",
          }}>
            What We Do
          </div>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: 800,
            color: "#ffffff",
            margin: 0,
          }}>
            Our <span style={{ color: "#0090C0" }}>Services</span>
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "1.1rem",
            marginTop: "1rem",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}>
            From emergency repairs to full replacements, Stok America has you covered.
          </p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}>
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                background: "#0D1526",
                border: "1px solid rgba(0,144,192,0.2)",
                borderRadius: "12px",
                padding: "2rem",
                transition: "border-color 0.3s, transform 0.3s",
                cursor: "default",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,144,192,0.6)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,144,192,0.2)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{
                width: "52px",
                height: "52px",
                background: "rgba(0,144,192,0.15)",
                border: "1px solid rgba(0,144,192,0.4)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.2rem",
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0090C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {service.title === "Roof Replacement" && <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>}
                  {service.title === "Roof Repair" && <><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></>}
                  {service.title === "Storm Damage" && <><line x1="19" y1="4" x2="13" y2="10"/><polyline points="12 2 2 7 12 12 22 7 12 2"/><line x1="2" y1="17" x2="22" y2="17"/><line x1="6" y1="21" x2="18" y2="21"/></>}
                  {service.title === "Commercial Roofing" && <><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></>}
                  {service.title === "Gutters & Drainage" && <><path d="M12 2v6m0 0C8 8 4 12 4 16h16c0-4-4-8-8-8zm-6 14h12"/></>}
                  {service.title === "Roof Inspection" && <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>}
                </svg>
              </div>
              <h3 style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "0.75rem",
              }}>
                {service.title}
              </h3>
              <p style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.95rem",
                lineHeight: 1.6,
                margin: 0,
              }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
