import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 md:px-16 py-5">
        <a href="#hero" className="font-bold text-lg tracking-tight">
          LJ<span className="text-violet-400">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
            <li key={item}>
                <a
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:corcega48@gmail.com"
          className="hidden md:block text-xs tracking-wider text-violet-400 border border-violet-400 px-5 py-2 rounded hover:bg-violet-400 hover:text-white transition-all"
        >
          say_hello()
        </a>

        {/* Hamburger */}
        <button className="md:hidden text-white text-xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="mailto:corcega48@gmail.com"
            className="text-xs tracking-wider text-violet-400 border border-violet-400 px-5 py-2 rounded text-center"
          >
            say_hello()
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;