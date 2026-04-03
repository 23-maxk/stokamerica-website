import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "StokAmerica | Professional Home Services & Business Solutions",
  description: "StokAmerica delivers premium professional services including roofing, repairs, inspections, and more. Get your free quote today.",
  keywords: "StokAmerica, roofing, home services, repairs, inspections, lead generation, free quote",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "StokAmerica | Professional Home Services",
    description: "Premium professional services with integrity and craftsmanship. Get your free quote today.",
    url: "https://www.stokamerica.com",
    siteName: "StokAmerica",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StokAmerica | Professional Home Services",
    description: "Premium professional services. Get your free quote today.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
