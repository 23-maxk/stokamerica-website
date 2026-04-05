"use client";

const photos = [
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", alt: "Completed roof replacement" },
  { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80", alt: "Metal roofing installation" },
  { src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80", alt: "Storm damage repair" },
  { src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80", alt: "Residential roofing project" },
  { src: "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600&q=80", alt: "Shingle roof installation" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", alt: "Beautiful finished home" },
];

export default function Gallery() {
  return (
    <section id="gallery" style={{
      background: "#080F1E",
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
          }}>OUR WORK</p>
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            color: "#ffffff",
            margin: "0 0 1rem",
          }}>Projects We're Proud Of</h2>
          <p style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "1.05rem",
            maxWidth: "600px",
            margin: "0 auto",
          }}>Every roof tells a story. Here's a look at some of our recent work across the region.</p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "1rem",
        }}>
          {photos.map((photo, i) => (
            <div key={i} style={{
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
              aspectRatio: "4/3",
              background: "#0D1829",
            }}>
              <img
                src={photo.src}
                alt={photo.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.4s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
