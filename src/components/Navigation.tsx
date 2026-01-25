import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

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

      {/* ================= STYLES ================= */}
      <style>{`
        /* HERO-SYNCED COLORS */
        :root {
          --glow-primary: #22d3ee;
          --glow-secondary: #3b82f6;
        }

        /* FLOATING GLOW ORBS */
        .glow-orb {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 9999px;
          filter: blur(120px);
          opacity: 0.45;
          animation: float 12s ease-in-out infinite;
        }
        .glow-orb-1 {
          background: var(--glow-primary);
          top: -120px;
          left: 20%;
        }
        .glow-orb-2 {
          background: var(--glow-secondary);
          top: -160px;
          right: 20%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%,100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(40px) scale(1.05); }
        }

        /* NOISE OVERLAY */
        .noise-layer {
          pointer-events: none;
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
