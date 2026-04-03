const services = [
  {
    icon: "🏠",
    title: "Roofing & Installation",
    description: "Expert roofing solutions using premium materials. From new installations to full replacements, we deliver lasting protection for your home.",
  },
  {
    icon: "🔧",
    title: "Repairs & Maintenance",
    description: "Fast, reliable repairs that stand the test of time. Our skilled team handles everything from minor fixes to major structural repairs.",
  },
  {
    icon: "🛡️",
    title: "Inspections & Assessments",
    description: "Comprehensive property inspections to identify issues before they become costly problems. Protect your investment with our expert assessments.",
  },
  {
    icon: "⭐",
    title: "Premium Upgrades",
    description: "Elevate your property value with premium upgrades and modern solutions tailored to your specific needs and budget.",
  },
  {
    icon: "📋",
    title: "Insurance Claims Assistance",
    description: "We work directly with your insurance company to maximize your claim and ensure you get the coverage you deserve.",
  },
  {
    icon: "🤝",
    title: "Commercial Services",
    description: "Full-scale commercial property services for businesses of all sizes. Reliable, professional, and built to last.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-red-900/30 border border-red-700/50 text-red-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Our <span className="text-[#5B8FA8]">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional services delivered with integrity and craftsmanship. We handle every project with the care and precision your property deserves.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-[#5B8FA8]/50 hover:bg-gray-800/80 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#5B8FA8] transition-colors">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.description}</p>
              <div className="mt-6">
                <a href="#leads" className="text-red-400 font-semibold hover:text-red-300 transition-colors flex items-center gap-1">
                  Get a Quote <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
