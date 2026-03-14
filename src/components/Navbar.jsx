function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-5 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-md">
      <a href="#hero" className="font-bold text-lg tracking-tight">
        LJ<span className="text-violet-400">.</span>
      </a>

      <ul className="flex gap-10 list-none">
        {["About", "Skills", "Experience", "Projects", "Contact"].map(
          (item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            </li>
          ),
        )}
      </ul>
      <a
        href="mailto:corcega48@gmail.com"
        className="text-xs tracking-wider text-violet-400 border border-violet-400 px-5 py-2 rounded hover:bg-vielot-400 hover:text-white transition-all"
      >
        say_hello()
      </a>
    </nav>
  );
}
export default Navbar;
