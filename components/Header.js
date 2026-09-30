"use client";
import { useEffect, useState } from "react";

const links = [
  ["About", "#about"],
  ["What I do", "#services"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
];

export default function Header({ resume }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl px-3 py-2 transition-all sm:px-4 ${
          scrolled ? "glass shadow-2xl shadow-black/40" : "border border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 font-semibold text-white">
          <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-cyan to-violet font-mono text-sm font-bold text-void">
            DP
          </span>
          <span className="hidden sm:inline">Devkumar Patel</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={resume} target="_blank" rel="noopener" className="hidden rounded-xl border border-white/10 px-3.5 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan/60 hover:text-white sm:inline-block">
            Resume
          </a>
          <a href="#contact" className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-void transition hover:bg-cyan">
            Contact
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 text-slate-300 md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-2 md:hidden">
          <ul className="grid gap-1">
            {[...links, ["Resume (PDF)", resume]].map(([label, href]) => (
              <li key={href}>
                <a onClick={() => setOpen(false)} href={href} className="block rounded-lg px-3 py-2.5 font-medium text-slate-200 hover:bg-white/5">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
