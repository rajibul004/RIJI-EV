import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-transparent backdrop-blur-2xl text-gray px-8 sticky top-0 z-50 border-b border-white/10 shadow-2xl shadow-black/80">
      {/* Ambient glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100/20 via-transparent to-gray-100/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-gray-400/30 to-transparent blur-sm"></div>

      <div className="relative max-w-5xl mx-auto flex items-center justify-between py-2">
        {/* Logo with floating animation */}
        <div className="flex items-center group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 via-slate-500 to-gray-700 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
            <div className="relative w-14 h-14 flex items-center justify-center rounded-2xl backdrop-blur-xl group-hover:scale-105 transition-all duration-500">
              <div className="relative flex items-center justify-center rounded-2xl bg-gradient-to-br backdrop-blur-xl group-hover:scale-105 transition-all duration-500">
                <img
                  src={logo}
                  alt="RIJI Logo"
                  className="w-12 h-12 object-contain shadow-inner transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
          <div className="ml-4 hidden sm:block">
            <div className="text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-slate-300 bg-clip-text text-transparent">
              RIJI
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {["HOME", "PRODUCTS", "ABOUT", "CONTACT"].map((item, index) => (
            <a
              key={item}
              href={item === "HOME" ? "#" : `/${item.toLowerCase()}`}
              className="relative text-gray-800 hover:text-gray transition-all duration-500 group font-medium tracking-widest text-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10">{item}</span>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -mx-6 -my-3 blur-sm"></div>

              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -mx-6 -my-3 border border-white/10 backdrop-blur-sm"></div>

              {/* Animated underline */}
              <div className="absolute -bottom-3 left-0 right-0 h-px">
                <div className="w-0 h-full bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-700 rounded-full shadow-lg shadow-white/50"></div>
              </div>

              {/* Floating dots */}
              <div className="absolute -top-1 -right-1 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
            </a>
          ))}
        </div>

        {/* Mobile menu button with premium styling */}
        <button
          className="md:hidden relative group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-slate-700 rounded-xl blur opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
          <div className="relative text-gray-800 hover:text-gray hover:bg-white/10 border border-white/20 rounded-xl p-3 backdrop-blur-xl transition-all duration-300 hover:scale-105 group-hover:border-white/30">
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </div>
        </button>
      </div>

      {/* Mobile Menu with premium animations */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 backdrop-blur-2xl bg-gradient-to-b from-slate-950/80 via-gray-950/90 to-black/95 relative overflow-hidden">
          {/* Background texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

          <div className="relative flex flex-col space-y-2 py-6">
            {["HOME", "PRODUCTS", "ABOUT", "CONTACT"].map((item, index) => (
              <a
                key={item}
                href={item === "HOME" ? "#" : `/${item.toLowerCase()}`}
                className="relative text-gray-800 hover:text-gray transition-all duration-500 group font-medium tracking-widest text-sm mx-4 overflow-hidden"
                style={{
                  animation: `slideIn 0.5s ease-out forwards`,
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                  transform: "translateX(-20px)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left"></div>
                <div className="relative px-8 py-4 rounded-2xl border border-transparent group-hover:border-white/20 backdrop-blur-sm transition-all duration-500 group-hover:shadow-lg group-hover:shadow-white/10">
                  <span className="relative z-10">{item}</span>
                  {/* Floating particle effect */}
                  <div className="absolute top-1/2 right-4 w-1 h-1 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
