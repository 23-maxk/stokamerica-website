import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block bg-red-900/30 border border-red-700/50 text-red-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              About StokAmerica
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Built on Trust,
              <span className="block text-[#5B8FA8]">Driven by Results</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              StokAmerica was founded on a simple principle: deliver outstanding quality with complete integrity. We believe every customer deserves the best — and we back that belief with every project we undertake.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              From humble beginnings to serving hundreds of satisfied clients across America, our team brings unmatched expertise and dedication to every job. We are more than a service company — we are your long-term partner.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "10+", label: "Years in Business" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "50+", label: "Expert Team Members" },
              ].map((stat, i) => (
                <div key={i} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-2xl font-extrabold text-red-400">{stat.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <a href="#leads" className="inline-block bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all transform hover:scale-105 shadow-xl">
              Work With Us
            </a>
          </div>
          {/* Right - Logo + accents */}
          <div className="relative flex items-center justify-center">
            <div className="relative bg-gray-800 rounded-3xl p-12 border border-gray-700 shadow-2xl w-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#5B8FA8]/10 rounded-full blur-2xl"></div>
              <Image
                src="/stokamerica-logo.png"
                alt="StokAmerica"
                width={400}
                height={200}
                className="w-full h-auto relative z-10"
              />
              <div className="mt-8 grid grid-cols-3 gap-4 relative z-10">
                {["Licensed", "Insured", "Certified"].map((badge, i) => (
                  <div key={i} className="flex flex-col items-center bg-gray-900 rounded-xl py-3 border border-gray-700">
                    <span className="text-2xl mb-1">{["✅","🛡️","🏆"][i]}</span>
                    <span className="text-gray-300 text-xs font-semibold">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
