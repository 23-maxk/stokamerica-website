"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Insurance", href: "#insurance" },
  { label: "Warranty", href: "#warranty" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(5, 10, 20, 0.97)"
          : "rgba(5, 10, 20, 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(0,144,192,0.2)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(0,144,192,0.15)" : "none",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>
          {/* Logo */}
          <Link href="#" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
            <Image src="/stokamerica-logo.png" alt="Stok America" width={44} height={44} style={{ objectFit: "contain" }} />
            <span style={{ color: "white", fontWeight: 700, fontSize: "1.2rem", letterSpacing: "-0.01em" }}>
              STOK <span style={{ color: "#0090C0" }}>AMERICA</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: "#CBD5E1",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  transition: "color 0.2s",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0090C0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#CBD5E1")}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+15555555555"
              style={{
                background: "linear-gradient(135deg, #0090C0, #006E94)",
                color: "white",
                padding: "0.6rem 1.4rem",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.9rem",
                boxShadow: "0 0 20px rgba(0,144,192,0.3)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 30px rgba(0,144,192,0.5)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 20px rgba(0,144,192,0.3)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Free Estimate
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "none",
              flexDirection: "column",
              gap: "5px",
              padding: "0.5rem",
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "24px",
                  height: "2px",
                  background: "#0090C0",
                  transition: "all 0.3s",
                  transform:
                    menuOpen && i === 0 ? "rotate(45deg) translate(5px, 5px)" :
                    menuOpen && i === 1 ? "scaleX(0)" :
                    menuOpen && i === 2 ? "rotate(-45deg) translate(5px, -5px)" :
                    "none",
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            style={{
              borderTop: "1px solid rgba(0,144,192,0.2)",
              padding: "1rem 0",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#CBD5E1",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 500,
                  padding: "0.5rem 0",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+15555555555"
              style={{
                background: "linear-gradient(135deg, #0090C0, #006E94)",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: 600,
                textAlign: "center",
                marginTop: "0.5rem",
              }}
            >
              Free Estimate
            </a>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
