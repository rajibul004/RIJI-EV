import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import "../index.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = ["Home", "Products", "About", "Contact"];

  return (
    <nav className="sticky top-0 z-50">
      {/* ================= AI GLOW + NOISE BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Glow Orbs (synced with hero via CSS vars) */}
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />

        {/* Glass base */}
        <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-2xl" />

        {/* Noise overlay */}
        <div className="noise-layer" />
      </div>

      {/* ================= NAV BAR ================= */}
      <div
        className={`transition-all duration-500 ${
          isScrolled
            ? "border-b border-white/30 shadow-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--glow-primary)] to-[var(--glow-secondary)] blur-lg opacity-0 group-hover:opacity-100 transition" />
              <img
                src={logo}
                alt="Riji EV official logo"
                className="w-10 h-10 relative z-10 object-contain"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[var(--glow-primary)] to-[var(--glow-secondary)] bg-clip-text text-transparent">
              Riji EV
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative text-sm font-medium text-gray-800 dark:text-gray-200 group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-[var(--glow-primary)] to-[var(--glow-secondary)] group-hover:w-full transition-all" />
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-white/30"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`md:hidden transition-all duration-700 overflow-hidden ${
          isMenuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="bg-white/80 dark:bg-black/80 backdrop-blur-2xl border-t border-white/30 py-6 space-y-4 text-center">
          {navItems.map((item, i) => (
            <li
              key={item}
              className="animate-fadeIn"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <a
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="font-semibold text-gray-800 dark:text-gray-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
