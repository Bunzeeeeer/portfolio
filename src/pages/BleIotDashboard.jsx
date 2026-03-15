import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BleIotDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sadiotFeatures = [
    {
      icon: "📱",
      title: "Hands-free Unlocking",
      desc: "Automatically unlocks via BLE when your smartphone is detected within 5-10 meters range.",
    },
    {
      icon: "🔒",
      title: "Auto Lock",
      desc: "Automatically locks the door after a set time, ensuring your home is always secure.",
    },
    {
      icon: "🔑",
      title: "Digital Key Sharing",
      desc: "Share digital keys with family members or guests directly through the app.",
    },
    {
      icon: "📍",
      title: "GPS Detection",
      desc: "Uses GPS to detect when you are approaching home for seamless hands-free entry.",
    },
    {
      icon: "📋",
      title: "Lock/Unlock History",
      desc: "View a complete history of all lock and unlock events for security monitoring.",
    },
    {
      icon: "⌚",
      title: "Apple Watch Support",
      desc: "Control your lock directly from your Apple Watch for added convenience.",
    },
    {
      icon: "🔐",
      title: "OSOTO — Fingerprint Feature",
      desc: "Implemented new fingerprint authentication feature for the lock. Currently in development — not yet released in market.",
      badge: "Coming to Market Soon",
    },
  ];

  const sadiotTechStack = [
    "Java",
    "Android SDK",
    "Bluetooth Low Energy (BLE)",
    "MVVM Architecture",
    "Git",
    "Scrum/Agile",
  ];

  return (
    <div className="bg-[#0a0a0f] min-h-screen text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 md:px-16 py-5">
          <button
            onClick={() => navigate("/")}
            className="font-bold text-lg tracking-tight"
          >
            LJ<span className="text-violet-400">.</span>
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
          >
            ← Back to Portfolio
          </button>
        </div>
      </nav>

      {/* Page Header */}
      <section className="pt-32 pb-16 px-6 md:px-16 border-b border-white/10 relative overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-violet-500/10 blur-3xl -left-20 top-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="relative z-10 max-w-5xl">
          <p className="text-violet-400 text-xs uppercase tracking-widest mb-4">
            BLE IoT Dashboard
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div>
              <h1
                style={{ fontFamily: "Syne, sans-serif" }}
                className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-6"
              >
                IoT Projects
                <br />
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px rgba(240,240,248,0.3)" }}
                >
                  via BLE.
                </span>
              </h1>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                A collection of IoT projects built using Bluetooth Low Energy
                technology. These are real-world applications developed
                professionally and personally, showcasing hands-on experience
                with BLE device integration.
              </p>
            </div>

            {/* Right - App Preview Image */}
            <div className="flex items-center justify-center">
              <img
                src="/images/Sadiot-Lock-App-Preview.jpg"
                alt="Sadiot Lock App Preview"
                className="w-full max-w-sm rounded-2xl object-cover shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======================== */}
      {/* PROJECT 1 — SADIOT LOCK */}
      {/* ======================== */}
      <section className="py-16 px-6 md:px-16 border-b border-white/10">
        <div className="max-w-4xl">
          {/* Project Label */}
          <div className="flex items-center gap-4 mb-8">
            <img
              src="/images/Sadiot-Lock-Logo.png"
              alt="Sadiot Lock Logo"
              className="w-10 h-10 rounded-xl object-contain bg-white p-1"
            />
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest">
                Project 01
              </p>
              <h2
                style={{ fontFamily: "Syne, sans-serif" }}
                className="text-2xl md:text-3xl font-black tracking-tight"
              >
                SADIOT LOCK
              </h2>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-2xl">
            A smart lock product by{" "}
            <span className="text-white font-medium">
              MinebeaMitsumi Philippines Inc.
            </span>{" "}
            that allows users to lock and unlock their doors via smartphone
            using Bluetooth Low Energy (BLE) technology. Available on the
            Japanese market.
          </p>

          <a
            href="https://sadiot.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs bg-white/5 border border-white/10 px-4 py-2 rounded hover:border-white/30 transition-colors mb-10"
          >
            🌐 Official Website
          </a>

          {/* Product Video */}
          <div className="rounded-2xl overflow-hidden border border-white/10 mb-10 max-w-sm">
            <video
              src="/images/Sadiot-Lock.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full object-cover"
            />
          </div>

          {/* My Role */}
          <p className="text-violet-400 text-xs uppercase tracking-widest mb-4">
            My Role
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <div className="text-2xl mb-3">🐛</div>
              <h3
                style={{ fontFamily: "Syne, sans-serif" }}
                className="font-bold mb-2"
              >
                Bug Fixing
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Identified and resolved various bugs across different issues to
                ensure stable app performance and improved user experience.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <div className="text-2xl mb-3">🔧</div>
              <h3
                style={{ fontFamily: "Syne, sans-serif" }}
                className="font-bold mb-2"
              >
                Maintenance
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Performed ongoing maintenance and improvements to the Android
                codebase, ensuring compatibility and performance.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors border-t-2 border-t-violet-400">
              <div className="text-2xl mb-3">✨</div>
              <h3
                style={{ fontFamily: "Syne, sans-serif" }}
                className="font-bold mb-2"
              >
                OSOTO Feature
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                One of the authors of the OSOTO fingerprint authentication
                feature. Currently in development — not yet released in market.
              </p>
              <span className="text-xs bg-violet-500/10 text-violet-300 border border-violet-500/20 px-2 py-1 rounded mt-3 inline-block">
                Coming to Market Soon
              </span>
            </div>
          </div>

          {/* Tech Stack */}
          <p className="text-violet-400 text-xs uppercase tracking-widest mb-4">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {sadiotTechStack.map((tech) => (
              <span
                key={tech}
                className="text-sm bg-white/5 border border-white/10 text-gray-300 px-4 py-2 rounded-lg hover:border-violet-400/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}
          <p className="text-violet-400 text-xs uppercase tracking-widest mb-4">
            Product Features
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sadiotFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors"
              >
                <div className="text-2xl mb-3">{feature.icon}</div>
                <h3
                  style={{ fontFamily: "Syne, sans-serif" }}
                  className="font-bold mb-2 flex items-center gap-2 flex-wrap"
                >
                  {feature.title}
                  {feature.badge && (
                    <span className="text-xs bg-violet-500/10 text-violet-300 border border-violet-500/20 px-2 py-0.5 rounded">
                      {feature.badge}
                    </span>
                  )}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More projects coming soon */}
      <section className="py-16 px-6 md:px-16 border-b border-white/10">
        <div className="max-w-4xl">
          <div className="bg-white/5 border border-dashed border-white/10 rounded-lg p-10 text-center">
            <p className="text-3xl mb-4">📡</p>
            <h3
              style={{ fontFamily: "Syne, sans-serif" }}
              className="text-xl font-bold mb-2"
            >
              More IoT Projects Coming Soon
            </h3>
            <p className="text-gray-400 text-sm">
              Planning to build more BLE & IoT projects when I get my devices.
              Check back soon!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-xs text-white/20 tracking-wider">
          © 2026 Lance Joshua Corcega. Designed & coded with intention.
        </p>
        <button
          onClick={() => navigate("/")}
          className="text-xs text-violet-400 hover:text-violet-300 transition-colors tracking-wider uppercase"
        >
          ← Back to Portfolio
        </button>
      </footer>
    </div>
  );
}

export default BleIotDashboard;
