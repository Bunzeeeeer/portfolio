function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 px-6 md:px-16 relative overflow-hidden"
    >
      {/* Glow effects */}
      <div className="absolute w-96 h-96 rounded-full bg-violet-500/10 blur-3xl -left-20 top-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute w-72 h-72 rounded-full bg-teal-500/8 blur-3xl right-10 top-20 pointer-events-none" />

      <div className="relative z-10">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-px bg-violet-400" />
          <span className="text-violet-400 text-xs uppercase tracking-widest">
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 style={{ fontFamily: 'Syne, sans-serif' }}
        className="font-syne text-7xl font-black leading-none tracking-tight mb-6">
          Lance Joshua
          <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px rgba(240,240,248,0.3)" }}
          >
            Corcega.
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-gray-400 text-base max-w-xl mb-10 leading-relaxed">
          Software Engineer specializing in{" "}
          <em className="text-teal-400 not-italic font-medium">
            mobile development
          </em>{" "}
          (Android & iOS), web frontends, and IoT applications. Based in
          Batangas, Philippines.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-16">
          <a
            href="#projects"
            className="text-sm bg-violet-500 text-white px-8 py-3 rounded hover:opacity-80 transition-all"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="text-sm border border-white/20 text-gray-400 px-8 py-3 rounded hover:border-white/50 hover:text-white transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 text-xs text-gray-500 tracking-wider">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />{" "}
          Currently @ MinibeaMitsumi Philippines Inc. — Junior Software Engineer
        </div>
      </div>
    </section>
  );
}

export default Hero;
