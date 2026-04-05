export default function FinalCTA() {
  return (
    <section
      id="leads"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #050A14 0%, #0D1E35 50%, #050A14 100%)" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,144,192,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Animated border top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #0090C0, transparent)" }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold mb-8" style={{ borderColor: "var(--stok-blue)", color: "var(--stok-blue)", background: "rgba(0,144,192,0.08)" }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--stok-blue)" }} />
          Limited Availability — Book Your Free Inspection
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Ready to Protect{" "}
          <span className="text-gradient">Your Property?</span>
        </h2>

        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of satisfied homeowners across the Gulf Coast. Get your free, no-obligation
          roof inspection and estimate today — we come to you.
        </p>

        {/* Contact Form */}
        <div
          className="rounded-2xl p-8 sm:p-10 border"
          style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">Get Your Free Estimate</h3>
          <p className="text-slate-400 mb-8 text-sm">We respond within 1 business hour.</p>

          <form
            action="https://formspree.io/f/xpwzenkd"
            method="POST"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">First Name</label>
              <input
                type="text"
                name="firstName"
                required
                placeholder="John"
                className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 border focus:outline-none focus:ring-2 transition-all"
                style={{
                  background: "var(--bg-secondary)",
                  borderColor: "var(--border)",
                  // @ts-ignore
                  "--tw-ring-color": "var(--stok-blue)",
                }}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Last Name</label>
              <input
                type="text"
                name="lastName"
                required
                placeholder="Smith"
                className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 border focus:outline-none focus:ring-2 transition-all"
                style={{
                  background: "var(--bg-secondary)",
                  borderColor: "var(--border)",
                }}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="(555) 000-0000"
                className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 border focus:outline-none focus:ring-2 transition-all"
                style={{
                  background: "var(--bg-secondary)",
                  borderColor: "var(--border)",
                }}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@email.com"
                className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 border focus:outline-none focus:ring-2 transition-all"
                style={{
                  background: "var(--bg-secondary)",
                  borderColor: "var(--border)",
                }}
              />
            </div>

            <div className="flex flex-col gap-1 sm:col-span-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Service Needed</label>
              <select
                name="service"
                className="w-full px-4 py-3 rounded-xl text-white border focus:outline-none focus:ring-2 transition-all"
                style={{
                  background: "var(--bg-secondary)",
                  borderColor: "var(--border)",
                  color: "white",
                }}
              >
                <option value="">Select a service...</option>
                <option value="roof-replacement">Roof Replacement</option>
                <option value="roof-repair">Roof Repair</option>
                <option value="storm-damage">Storm Damage Claim</option>
                <option value="gutters">Gutters &amp; Drainage</option>
                <option value="siding">Siding</option>
                <option value="windows">Windows &amp; Doors</option>
                <option value="commercial">Commercial Roofing</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-1 sm:col-span-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Message (Optional)</label>
              <textarea
                name="message"
                rows={3}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 border focus:outline-none focus:ring-2 transition-all resize-none"
                style={{
                  background: "var(--bg-secondary)",
                  borderColor: "var(--border)",
                }}
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full py-4 px-8 rounded-xl font-bold text-lg text-white transition-all duration-300 animate-pulse-glow hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg, var(--stok-blue) 0%, var(--stok-blue-dark) 100%)" }}
              >
                Get My Free Estimate →
              </button>
              <p className="text-slate-500 text-xs mt-3 text-center">
                No spam. No obligation. 100% free. We respect your privacy.
              </p>
            </div>
          </form>
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {[
            { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", label: "Licensed & Insured" },
            { icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3", label: "Best Price Guarantee" },
            { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Same-Day Response" },
            { icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z", label: "5-Star Rated" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-slate-400 text-sm">
              <svg className="w-5 h-5 flex-shrink-0" style={{ color: "var(--stok-blue)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
              </svg>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
