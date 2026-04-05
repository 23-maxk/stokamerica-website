"use client";

const testimonials = [
  {
    name: "Elena Miller",
    location: "Waynesboro, MS",
    rating: 5,
    text: "StokAmerica did a great job on our roof!! After coming out and looking over the damage, they immediately gave us an estimate later that evening. In less than a week of giving us the estimate, the crew came out and had our roof fixed for us! They also had a nice group of guys helping out! They even spent some time playing with my son in the yard and he loved every minute of it! Highly recommend StokAmerica for any of your roofing needs!! Thanks again for your great service! ☺️",
  },
  {
    name: "Beverly Paul-Cooper",
    location: "Waynesboro, MS",
    rating: 5,
    text: "Today we got a beautiful new roof courtesy of StokAmerica. They were super professional, diligent, and even took the time to explain the different aspects of our roof. Jaymin, one of the owners, has been wonderful to work along side and even spoke with our insurance company on the phone after noticing a considerable amount of hail damage. Their price point was flexible, honest, and it was an all around easy experience to go through. We have used them multiple times and plan to use them for all our roofing needs. We HIGHlY recommend this company. You won't be disappointed.",
  },
  {
    name: "Becky Pierce Shoemaker",
    location: "Waynesboro, MS",
    rating: 5,
    text: "Had these guys redo my shingles and not only did they do a great job but the price was great! Very nice people to work with.. definitely recommend!!",
  },
  {
    name: "Delane Brewer",
    location: "Waynesboro, MS",
    rating: 5,
    text: "Fast and courteous. I definitely recommend StokAmerica for all your roofing needs!!!",
  },
  {
    name: "Tia White",
    location: "Waynesboro, MS",
    rating: 5,
    text: "Me and my sister both used StokAmerica for our recent roofing needs. The service was great! They completed the work in ONE day. I definitely recommend them for all your roofing needs.",
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
