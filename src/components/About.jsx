function About() {
  const stats = [
    { number: "1+", label: "Years Professional Experience" },
    { number: "2", label: "Mobile Platforms (Android & Familiarity in iOS)" },
    { number: "5+", label: "Certifications Earned" },
    { number: "∞", label: "Curiosity for New Tech" },
  ];

  return (
    <section id="about" className="py-32 px-16 border-t border-white/10">
      <p className="text-violet-400 text-xs uppercase tracking-widest mb-4">01 — about</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
        <div>
          <h2
            style={{ fontFamily: "Syne, sans-serif" }}
            className="text-5xl font-bold tracking-tight leading-tight mb-8"
          >
            Building things
            <br />
            that actually work.
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            I'm a{" "}
            <span className="text-white font-medium">Software Engineer</span>{" "}
            with a passion for translating concepts into real-world solutions. I
            graduated with a B.S. in Information Technology from Jose Rizal
            University in 2024.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            My current work at{" "}
            <span className="text-white font-medium">
              MinibeaMitsumi Philippines
            </span>{" "}
            involves developing mobile apps for Android and iOS — including
            specialized{" "}
            <span className="text-white font-medium">BLE/IoT applications</span>{" "}
            — while collaborating across Philippine and Japanese engineering
            teams in a Scrum environment.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            I'm continuously expanding into{" "}
            <span className="text-white font-medium">DevOps</span>, cloud
            infrastructure, and full-stack development. Always learning. Always
            shipping.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors"
            >
              <div
                style={{ fontFamily: "Syne, sans-serif" }}
                className="text-4xl font-black text-violet-400 leading-none mb-2"
              >
                {stat.number}
              </div>
              <div className="text-xs text-gray-400 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
