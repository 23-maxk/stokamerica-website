import Image from "next/image"

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image src="/stokamerica-logo.png" alt="StokAmerica" width={180} height={64} className="h-14 w-auto mb-6" />
            <p className="text-gray-400 leading-relaxed max-w-sm">
              StokAmerica delivers premium professional services with integrity and craftsmanship. Your trusted partner for lasting results.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path fill="black" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {["Roofing & Installation","Repairs & Maintenance","Inspections & Assessments","Premium Upgrades","Insurance Claims","Commercial Services"].map((s, i) => (
                <li key={i}>
                  <a href="#services" className="text-gray-400 hover:text-red-400 transition-colors text-sm">{s}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5">📍</span>
                <span className="text-gray-400 text-sm">United States of America</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5">📞</span>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white text-sm transition-colors">(123) 456-7890</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5">✉️</span>
                <a href="mailto:info@stokamerica.com" className="text-gray-400 hover:text-white text-sm transition-colors">info@stokamerica.com</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5">🌐</span>
                <a href="https://www.stokamerica.com" className="text-gray-400 hover:text-white text-sm transition-colors">www.stokamerica.com</a>
              </li>
            </ul>
            <a href="#leads" className="inline-block mt-6 bg-red-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-red-700 transition-all">
              Get Free Quote
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} StokAmerica. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
