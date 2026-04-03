import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-950 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#5B8FA8]/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#5B8FA8]/10 rounded-full blur-3xl"></div>
      </div>
      {/* Red stripe accent - patriotic */}
      <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-b from-red-600 via-red-500 to-red-700"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 bg-red-900/30 border border-red-700/50 text-red-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Serving America with Pride
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Your Trusted Partner for
            <span className="block text-[#5B8FA8]"> Home Services</span>
            <span className="block text-red-500">& Business Growth</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            StokAmerica delivers exceptional quality and results-driven solutions. We bring expertise, integrity, and American craftsmanship to every project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#leads"
              className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-red-700 transition-all transform hover:scale-105 shadow-2xl text-center"
            >
              Get Your Free Quote →
            </a>
            <a
              href="#services"
              className="border-2 border-[#5B8FA8] text-[#5B8FA8] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#5B8FA8]/10 transition-all text-center"
            >
              Explore Services
            </a>
          </div>
          <div className="flex items-center gap-6 mt-12 pt-8 border-t border-gray-800">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">500+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">10+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">100%</div>
              <div className="text-sm text-gray-400">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
