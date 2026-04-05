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
  {
    name: "Sol Hummel",
    location: "Waynesboro, MS",
    rating: 5,
    text: "StokAmerica was fantastic! Exceeded all my expectations at a reasonable cost. Highly recommended. Not the lowest or highest estimate I got, but they had great reviews. I had read and heard lots of horror stories about roofing jobs gone bad so I wanted a reliable company and StokAmerica did not disappoint.\n\nMy existing roof was a second layer put on over 25 years ago and it was starting to show its age. The underlying plywood was soft in many spots and there were some small leaks in the garage during heavy rainstorms.\n\nWhen Lane came by to check out the roof we had a long talk about what needed to be done and how much it would cost. The price he quoted was not the lowest bid but still reasonable and I was more concerned about workmanship than saving a few dollars. There was no hard sell and I really had a good feeling about StokAmerica. One thing that really impressed me was that Lane did not ask for any money up front even though he had to cover the cost of the materials. He trusted me to pay the entire cost when the job was done, which I did.\n\nThe crew arrived exactly on time, 7:30 AM. A crew of 6 men were able to finish the job in one day (almost 12 hours) and Lane was there supervising for almost the entire time. The first thing they did was drape a fine net around the entire house to protect everything on the ground. The cleanup was perfect — they swept the entire grounds with large magnets to pick up any stray nails.\n\nA perfect job; can't ask for more than that and I will certainly recommend StokAmerica to anyone who needs a new roof. Thank you Lane and crew for an outstanding job.",
  },
  {
    name: "Austin Pickens",
    location: "Waynesboro, MS",
    rating: 5,
    text: "Lane came out himself and did an inspection/quote for me, and gave me great service. Didn't try to force me into any decisions and heard me out and gave me multiple options to choose from.",
  },
  {
    name: "Karen Williams Cochran",
    location: "Waynesboro, MS",
    rating: 5,
    text: "Outstanding Service and Superior Workmanship from Start to Finish!\n\nI recently had a full roof replacement by StokAmerica, and I couldn't be happier with the entire experience. From the initial consultation to the final inspection, they were exceptional in every aspect.\n\nProfessionalism & Communication: Lane Stokley was incredibly knowledgeable. He provided a detailed, itemized quote and clearly explained all our options for materials and warranties without any sales pressure. Communication was prompt and thorough throughout the entire process.\n\nQuality Workmanship: The crew worked tirelessly. They paid meticulous attention to detail, ensuring proper installation of the new architectural shingles, underlayment, and ridge vents. The final product looks fantastic and gives me peace of mind heading into storm season.\n\nEfficiency & Cleanup: I was bracing for a messy job, but the team was a stickler for cleanliness. They carefully protected my landscaping and thoroughly cleaned up all debris, even using a magnet to pick up stray nails from the yard. You wouldn't even know major construction had just happened.\n\nValue: While they were not the absolute cheapest quote I received, the value provided in terms of quality materials, warranty, and professionalism was unbeatable. I truly feel I made the right choice.\n\nI highly recommend StokAmerica to anyone in need of roofing services. They are an honest, dependable, and reliable company that delivers on its promises!",
  },
  {
    name: "Hanna Walker",
    location: "Waynesboro, MS",
    rating: 5,
    text: "I had an excellent experience with StokAmerica roofing company. From start to finish, they were honest, reliable, and incredibly hard-working. They took the time to explain everything clearly, offered the cheapest pricing around with no surprises, and showed real pride in their workmanship. The crew arrived on time, worked efficiently, and made sure everything was cleaned up before they left.\n\nIt's not often you find a company that combines integrity with such strong work ethic. I highly recommend them to anyone in need of roofing services!",
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
