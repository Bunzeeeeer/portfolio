function Contact() {
  return (
    <section id="contact" className="py-32 px-16 border-t border-white/10">
      <p className="text-violet-400 text-xs uppercase tracking-widest mb-4">
        05 — contact
      </p>

      <h2
        style={{ fontFamily: "Syne, sans-serif" }}
        className="text-5xl font-bold tracking-tight leading-tight mb-16"
      >
        Let's build
        <br />
        something together.
      </h2>

      <div className="grid grid-cols-2 gap-20 items-start">
        {/* Left */}
        <div>
          <a
            href="mailto:corcega48@gmail.com"
            style={{ fontFamily: "Syne, sans-serif" }}
            className="text-3xl font-bold text-violet-400 hover:opacity-70 transition-opacity block mb-8"
          >
            corcega48@gmail.com
          </a>

          <div className="flex flex-col gap-4">
            <a
              href="https://linkedin.com/in/lance-joshua-corcega"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <span className="w-8 h-8 border border-white/10 rounded flex items-center justify-center text-xs text-white/30">
              in </span> linkedin.com/in/lance-joshua-corcega
            </a>

            <a
              href="https://github.com/Bunzeeeeer"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <span className="w-8 h-8 border border-white/10 rounded flex items-center justify-center text-xs text-white/30">
              gh </span> github.com/Bunzeeeeer
            </a>

            <div className="flex items-center gap-3 text-sm text-gray-400">
              <span className="w-8 h-8 border border-white/10 rounded flex items-center justify-center text-xs text-white/30">
              📍 </span> Tanauan City, Batangas, Philippines
            </div>
          </div>
        </div>

        {/* Right */}
        <div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            I'm currently open to freelance projects, collaborations, and
            full-time opportunities. Whether you have a mobile app idea, need a
            frontend built, or want to geek out about IoT and BLE devices — I'm
            all ears.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            I respond quickly and love working with teams that care about
            building great software. Drop me an email and let's talk.
          </p>

          <a
            href="mailto:corcega48@gmail.com"
            className="text-sm bg-violet-500 text-white px-8 py-3 rounded hover:opacity-80 transition-all inline-block"
          >
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
