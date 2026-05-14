"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Members", href: "#members" },
  // { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-gray-900 transition-shadow ${scrolled ? "shadow-md" : "border-b border-gray-700"}`}>
      <nav className="max-w-site mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-lab-blue flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            HE
          </span>
          <span className="font-bold text-white text-sm leading-tight">
            Southern University of Science and Technology
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-2 text-gray-400 hover:text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-700 bg-gray-900">
          <ul className="max-w-site mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
