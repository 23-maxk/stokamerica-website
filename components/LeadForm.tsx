"use client"
import { useState } from "react"

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", message: ""
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="leads" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - CTA text */}
          <div className="pt-4">
            <span className="inline-block bg-red-900/30 border border-red-700/50 text-red-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Free Consultation
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ready to Get
              <span className="block text-[#5B8FA8]">Started Today?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Fill out the form and one of our experts will reach out within 24 hours. No obligation, no pressure — just honest advice and a free quote.
            </p>
            <div className="space-y-5">
              {[
                { icon: "📞", title: "Quick Response", desc: "We call you back within 24 hours" },
                { icon: "💰", title: "Free Estimate", desc: "No hidden fees, transparent pricing" },
                { icon: "🏆", title: "Expert Team", desc: "Certified professionals on every job" },
                { icon: "✅", title: "Guaranteed Work", desc: "100% satisfaction guaranteed" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <div className="text-white font-semibold">{item.title}</div>
                    <div className="text-gray-400 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right - Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
                <p className="text-gray-300">We received your request and will contact you within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[#5B8FA8] underline hover:text-[#7AAFC8]"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-bold text-white mb-6">Get Your Free Quote</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-1.5">Full Name *</label>
                    <input
                      required type="text" placeholder="John Smith"
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#5B8FA8] transition-colors placeholder-gray-600"
                      value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-1.5">Phone Number *</label>
                    <input
                      required type="tel" placeholder="(555) 000-0000"
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#5B8FA8] transition-colors placeholder-gray-600"
                      value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-1.5">Email Address *</label>
                  <input
                    required type="email" placeholder="john@example.com"
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#5B8FA8] transition-colors placeholder-gray-600"
                    value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-1.5">Service Needed</label>
                  <select
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#5B8FA8] transition-colors"
                    value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Select a service...</option>
                    <option>Roofing & Installation</option>
                    <option>Repairs & Maintenance</option>
                    <option>Inspections & Assessments</option>
                    <option>Premium Upgrades</option>
                    <option>Insurance Claims Assistance</option>
                    <option>Commercial Services</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    rows={4} placeholder="Tell us about your project..."
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#5B8FA8] transition-colors placeholder-gray-600 resize-none"
                    value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all transform hover:scale-[1.02] shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Sending...
                    </span>
                  ) : "Send My Free Quote Request →"}
                </button>
                <p className="text-gray-500 text-xs text-center">🔒 Your information is 100% secure and never shared.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
