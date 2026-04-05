"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Does my insurance cover roof replacement?",
    a: "In most storm damage cases, yes. Our team works directly with insurance adjusters to document damage, file your claim, and maximize your payout. We handle the paperwork so you don't have to.",
  },
  {
    q: "How long does a roof replacement take?",
    a: "Most residential roofs are completed in 1–2 days. Larger or more complex roofs may take up to 3 days. We work efficiently to minimize disruption to your home and daily routine.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Mississippi and surrounding states including Alabama, Tennessee, and Louisiana. Contact us to confirm service availability in your specific area.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. We offer flexible financing options so you can get the roof you need without waiting. Ask about our 0% interest plans during your free inspection.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. Stok America is fully licensed, bonded, and carries both general liability and workers' compensation insurance. You're protected from start to finish.",
  },
  {
    q: "What warranties do you offer?",
    a: "We provide a lifetime workmanship warranty backed by Stok America, plus manufacturer material warranties up to 50 years depending on the shingle line selected.",
  },
  {
    q: "How do I know if my roof has storm damage?",
    a: "Common signs include missing or curling shingles, granules in gutters, dents on vents or flashing, and interior leaks. Our free inspection will catch damage that's not visible from the ground.",
  },
  {
    q: "What is the process after I call you?",
    a: "We schedule a free inspection within 24 hours, document all damage, help you file your insurance claim if applicable, then schedule and complete installation once approved.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        background: "#080F1E",
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
            Got Questions?
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", maxWidth: "560px", margin: "0 auto" }}>
            Everything you need to know about working with Stok America.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: open === i ? "#0d1a2e" : "#0d1a2e",
                border: `1px solid ${open === i ? "#0090C0" : "rgba(255,255,255,0.08)"}`,
                borderRadius: "10px",
                overflow: "hidden",
                transition: "border-color 0.2s",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1.25rem 1.5rem",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "1rem",
                }}
              >
                <span
                  style={{
                    color: open === i ? "#0090C0" : "#ffffff",
                    fontWeight: 600,
                    fontSize: "1rem",
                    transition: "color 0.2s",
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    color: "#0090C0",
                    fontSize: "1.4rem",
                    fontWeight: 300,
                    flexShrink: 0,
                    transform: open === i ? "rotate(45deg)" : "rotate(0)",
                    transition: "transform 0.2s",
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div
                  style={{
                    padding: "0 1.5rem 1.25rem",
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    paddingTop: "1rem",
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
