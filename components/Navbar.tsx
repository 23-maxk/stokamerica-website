"use client"
import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-2">
          <div className="flex items-center">
            <Image src="/stokamerica-logo.png" alt="StokAmerica Logo" width={160} height={56} className="h-14 w-auto" priority />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-red-400 font-medium transition-colors">Services</a>
            <a href="#about" className="text-gray-300 hover:text-red-400 font-medium transition-colors">About</a>
            <a href="#contact" className="text-gray-300 hover:text-red-400 font-medium transition-colors">Contact</a>
            <a href="#leads" className="bg-red-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg">
              Get Free Quote
            </a>
          </div>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 space-y-3">
            <a href="#services" className="block text-gray-300 hover:text-red-400 font-medium py-1">Services</a>
            <a href="#about" className="block text-gray-300 hover:text-red-400 font-medium py-1">About</a>
            <a href="#contact" className="block text-gray-300 hover:text-red-400 font-medium py-1">Contact</a>
            <a href="#leads" className="block bg-red-600 text-white px-5 py-2.5 rounded-full font-semibold text-center mt-2">Get Free Quote</a>
          </div>
        )}
      </div>
    </nav>
  )
}
