"use client";

const jobs = [
  {
    label: "Phillip Pittman — Garage Upgrade",
    folder: "phillip-pittman-garage-upgrade",
    photos: [
      "tg_Axel_15f55534_photo_AQAD6Q1rG-EwkUZ-.jpg",
      "tg_Axel_1f694a35_photo_AQAD0Q1rG-EwkUZ-.jpg",
      "tg_Axel_24a621e4_photo_AQADZw1rG-EwkUZ-.jpg",
      "tg_Axel_2d330029_photo_AQAD1w1rG-EwkUZ-.jpg",
      "tg_Axel_39688fa6_photo_AQAD1Q1rG-EwkUZ-.jpg",
      "tg_Axel_43ead26d_photo_AQAD0w1rG-EwkUZ-.jpg",
      "tg_Axel_4f255484_photo_AQADYg1rG-EwkUZ-.jpg",
      "tg_Axel_55ecbc1a_photo_AQAD5w1rG-EwkUZ-.jpg",
      "tg_Axel_6cd66951_photo_AQAD5A1rG-EwkUZ-.jpg",
      "tg_Axel_8fd66801_photo_AQADqw1rG-EwkUZ-.jpg",
      "tg_Axel_ce6c3860_photo_AQADaA1rG-EwkUZ-.jpg",
      "tg_Axel_ef5d45c7_photo_AQADYQ1rG-EwkUZ-.jpg",
      "tg_Axel_f295e14a_photo_AQAD4Q1rG-EwkUZ-.jpg",
    ],
  },
  {
    label: "Daniel Bishop — GAF Timberline HDZ",
    folder: "daniel-bishop-gaf-timberline-hdz",
    photos: [
      "tg_Axel_3d415c9d_photo_AQADcg1rG-EwkUZ-.jpg",
      "tg_Axel_423d6bc6_photo_AQADeA1rG-EwkUZ-.jpg",
      "tg_Axel_42727577_photo_AQADAQ5rG-EwkUZ-.jpg",
      "tg_Axel_4fb70d98_photo_AQAD7Q1rG-EwkUZ-.jpg",
      "tg_Axel_6ff3207b_photo_AQADbg1rG-EwkUZ-.jpg",
      "tg_Axel_c1235240_photo_AQADAg5rG-EwkUZ-.jpg",
      "tg_Axel_c4034d05_photo_AQAD9g1rG-EwkUZ-.jpg",
    ],
  },
];

const rootPhotos = [
  "tg_Axel_10f0e92b_photo_AQADug1rG-EwkUZ-.jpg",
  "tg_Axel_134afacc_photo_AQADTg1rG-EwkUZ-.jpg",
  "tg_Axel_34d97e8c_photo_AQADyg1rG-EwkUZ-.jpg",
  "tg_Axel_487619a2_photo_AQADww1rG-EwkUZ-.jpg",
  "tg_Axel_9a37f2ab_photo_AQADwQ1rG-EwkUZ-.jpg",
  "tg_Axel_b0e8397d_photo_AQADUA1rG-EwkUZ-.jpg",
  "tg_Axel_ec808344_photo_AQADzw1rG-EwkUZ-.jpg",
];

function PhotoGrid({ photos, basePath = "" }: { photos: string[]; basePath?: string }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "0.75rem",
    }}>
      {photos.map((filename, i) => (
        <div key={i} style={{
          borderRadius: "10px",
          overflow: "hidden",
          position: "relative",
          aspectRatio: "4/3",
          background: "#0D1829",
        }}>
          <img
            src={basePath ? `/gallery/${basePath}/${filename}` : `/gallery/${filename}`}
            alt={`Project photo ${i + 1}`}
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
  );
}

export default function Gallery() {
  return (
    <section id="gallery" style={{
      background: "#080F1E",
      padding: "5rem 1.5rem",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
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
          }}>Projects We&apos;re Proud Of</h2>
          <p style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "1.05rem",
            maxWidth: "600px",
            margin: "0 auto",
          }}>Every roof tells a story. Here&apos;s a look at some of our recent work across the region.</p>
        </div>

        {/* Named job sections */}
        {jobs.map((job, j) => (
          <div key={j} style={{ marginBottom: "3.5rem" }}>
            <div style={{ marginBottom: "1.25rem", paddingBottom: "0.75rem", borderBottom: "1px solid rgba(0,144,192,0.25)" }}>
              <h3 style={{
                color: "#ffffff",
                fontSize: "1.2rem",
                fontWeight: 700,
                margin: "0 0 0.25rem",
              }}>{job.label}</h3>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", margin: 0 }}>
                {job.photos.length} photos
              </p>
            </div>
            <PhotoGrid photos={job.photos} basePath={job.folder} />
          </div>
        ))}

        {/* General / unsorted photos */}
        {rootPhotos.length > 0 && (
          <div>
            <div style={{ marginBottom: "1.25rem", paddingBottom: "0.75rem", borderBottom: "1px solid rgba(0,144,192,0.25)" }}>
              <h3 style={{
                color: "#ffffff",
                fontSize: "1.2rem",
                fontWeight: 700,
                margin: "0 0 0.25rem",
              }}>Additional Work</h3>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", margin: 0 }}>
                {rootPhotos.length} photos
              </p>
            </div>
            <PhotoGrid photos={rootPhotos} />
          </div>
        )}

      </div>
    </section>
  );
}
