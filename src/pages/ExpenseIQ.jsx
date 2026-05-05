import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ExpenseIQ() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const myRoles = [
    {
      icon: "🧠",
      title: "Solo Architect",
      desc: "Designed and architected the entire app from scratch — modular multi-module structure, MVVM layers, and reactive data flow.",
      highlight: false,
    },
    {
      icon: "⚙️",
      title: "Full-Stack Android",
      desc: "Built every layer: Room database, RxJava2 reactive streams, Firebase Auth, ViewModel lifecycle management, and Material UI.",
      highlight: false,
    },
    {
      icon: "🚀",
      title: "CI/CD & Code Quality",
      desc: "Set up the full GitHub Actions pipeline with SonarCloud static analysis, quality gates, and a PR-only branch workflow.",
      highlight: true,
      badge: "Personal Project",
    },
  ];

  const techStack = [
    "Java",
    "MVVM Architecture",
    "RxJava2 + RxAndroid",
    "Room (SQLite)",
    "Firebase Auth",
    "MPAndroidChart",
    "Material Design 3",
    "GitHub Actions",
    "SonarCloud",
    "Gradle",
  ];

  const features = [
    {
      icon: "🏠",
      title: "Command Center Home",
      desc: "Financial health score (0–100), logging streak tracker, smart budget alerts at 80% and 100% thresholds, and a weekly spending bar chart.",
    },
    {
      icon: "🔐",
      title: "Firebase Authentication",
      desc: "Email & password login with per-user data isolation. Each user only sees their own expenses, categories, and budgets.",
    },
    {
      icon: "📊",
      title: "Dashboard",
      desc: "Monthly spending hero card, category overview grid with pastel color coding, budget progress bars, and recent expenses list.",
    },
    {
      icon: "💸",
      title: "Expense Management",
      desc: "Full CRUD for expenses with category assignment, emoji icons, date picker, and optional note support.",
    },
    {
      icon: "🗂️",
      title: "Category Management",
      desc: "Custom categories with emoji icon picker and hex color picker with live preview. Ships with 6 seed categories on first launch.",
    },
    {
      icon: "💰",
      title: "Budget Management",
      desc: "Per-category monthly budgets with full CRUD, month/year picker, and health color coding (green / yellow / red).",
    },
    {
      icon: "📈",
      title: "Charts & Analytics",
      desc: "Pie chart for all-time category breakdown, cubic bezier line chart for daily spending, and bar chart for monthly comparisons.",
    },
    {
      icon: "🏛️",
      title: "Clean Architecture",
      desc: "Modular multi-module project: core-data, core-domain, core-ui, and 5 feature modules — each fully decoupled.",
      badge: "Architecture Highlight",
    },
  ];

  const modules = [
    { name: "app", desc: "Shell, MainActivity, BottomNav", color: "violet" },
    { name: "core-data", desc: "Room DB, DAOs, Repositories", color: "teal" },
    { name: "core-domain", desc: "Models, Repository Interfaces", color: "teal" },
    { name: "core-ui", desc: "Theme, BaseActivity, Drawables", color: "teal" },
    { name: "feature-auth", desc: "Login, Register, Firebase", color: "coral" },
    { name: "feature-dashboard", desc: "Dashboard Screen", color: "coral" },
    { name: "feature-expense", desc: "Expense + Category CRUD", color: "coral" },
    { name: "feature-budget", desc: "Budget CRUD", color: "coral" },
    { name: "feature-charts", desc: "Analytics & Charts", color: "coral" },
  ];

  const moduleColors = {
    violet: "bg-violet-500/10 text-violet-300 border border-violet-500/20",
    teal: "bg-teal-500/10 text-teal-300 border border-teal-500/20",
    coral: "bg-red-500/10 text-red-300 border border-red-500/20",
  };

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
        <div className="absolute w-72 h-72 rounded-full bg-teal-500/8 blur-3xl right-10 top-20 pointer-events-none" />
        <div className="relative z-10 max-w-5xl">
          <p className="text-violet-400 text-xs uppercase tracking-widest mb-4">
            Android App
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div>
              <h1
                style={{ fontFamily: "Syne, sans-serif" }}
                className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-6"
              >
                Smart Expense
                <br />
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px rgba(240,240,248,0.3)" }}
                >
                  Tracking.
                </span>
              </h1>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                A modular, production-ready Android expense tracker built with
                Java, MVVM, RxJava2, Room, and Firebase Authentication.
                Designed to demonstrate clean architecture and real-world
                engineering practices.
              </p>
            </div>

            {/* Right - App Preview Placeholder */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 aspect-9/16 flex flex-col items-center justify-center gap-3 text-white/20">
                <span className="text-5xl">💰</span>
                <p className="text-xs uppercase tracking-widest">Screenshots Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT — EXPENSEIQ */}
      <section className="py-16 px-6 md:px-16 border-b border-white/10">
        <div className="max-w-4xl">

          {/* Project Label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-xl">
              💰
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest">
                Android App
              </p>
              <h2
                style={{ fontFamily: "Syne, sans-serif" }}
                className="text-2xl md:text-3xl font-black tracking-tight"
              >
                EXPENSEIQ
              </h2>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-2xl">
            A personal portfolio project built to demonstrate clean Android
            architecture, modular design, and production-grade code quality
            practices. Features Firebase Authentication for secure multi-user
            support, real-time budget tracking, and spending analytics with
            charts.
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="https://github.com/Bunzeeeeer/ExpenseIQ"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs bg-white/5 border border-white/10 px-4 py-2 rounded hover:border-white/30 transition-colors"
            >
              🐙 GitHub Repository
            </a>
          </div>

          {/* Screenshot Placeholder */}
          <div className="rounded-2xl border border-dashed border-white/10 bg-white/5 p-10 text-center mb-10 max-w-2xl">
            <p className="text-3xl mb-3">📸</p>
            <p className="text-white/20 text-xs uppercase tracking-widest">
              App screenshots coming soon
            </p>
          </div>

          {/* My Role */}
          <p className="text-violet-400 text-xs uppercase tracking-widest mb-4">
            My Role
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {myRoles.map((role) => (
              <div
                key={role.title}
                className={`bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors ${
                  role.highlight ? "border-t-2 border-t-violet-400" : ""
                }`}
              >
                <div className="text-2xl mb-3">{role.icon}</div>
                <h3
                  style={{ fontFamily: "Syne, sans-serif" }}
                  className="font-bold mb-2"
                >
                  {role.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {role.desc}
                </p>
                {role.badge && (
                  <span className="text-xs bg-violet-500/10 text-violet-300 border border-violet-500/20 px-2 py-1 rounded mt-3 inline-block">
                    {role.badge}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <p className="text-violet-400 text-xs uppercase tracking-widest mb-4">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-sm bg-white/5 border border-white/10 text-gray-300 px-4 py-2 rounded-lg hover:border-violet-400/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Module Structure */}
          <p className="text-violet-400 text-xs uppercase tracking-widest mb-4">
            Module Structure
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {modules.map((mod) => (
              <div
                key={mod.name}
                className={`text-xs px-3 py-2 rounded-lg border flex flex-col gap-0.5 ${moduleColors[mod.color]}`}
              >
                <span className="font-bold font-mono">{mod.name}</span>
                <span className="opacity-60">{mod.desc}</span>
              </div>
            ))}
          </div>

          {/* Features */}
          <p className="text-violet-400 text-xs uppercase tracking-widest mb-4">
            App Features
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature) => (
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
            <p className="text-3xl mb-4">🚀</p>
            <h3
              style={{ fontFamily: "Syne, sans-serif" }}
              className="text-xl font-bold mb-2"
            >
              More Projects Coming Soon
            </h3>
            <p className="text-gray-400 text-sm">
              Full-stack web app and iOS app are in the pipeline. Check back soon!
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

export default ExpenseIQ;