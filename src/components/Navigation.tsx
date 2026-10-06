import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, ChevronRight } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom";

import logo from "@/assets/logo.png";
import "../index.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  /* =========================================================
     SCROLL EFFECT
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     CLOSE MOBILE MENU WHEN ROUTE CHANGES
  ========================================================= */

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  /* =========================================================
     NAVIGATION ITEMS
  ========================================================= */

  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Products",
      href: "/products",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <nav
      className={`
        sticky top-0 z-50
        w-full
        bg-[#F8F7F3]/95
        backdrop-blur-xl
        transition-all duration-300
        ${
          isScrolled
            ? "border-b border-[#D8D1C4] shadow-[0_8px_30px_rgba(30,25,15,0.06)]"
            : "border-b border-[#E9E5DD]"
        }
      `}
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            MAIN NAVBAR
        ===================================================== */}

        <div
          className={`
            flex items-center justify-between
            transition-all duration-300
            ${isScrolled ? "h-[70px]" : "h-[82px]"}
          `}
        >
          {/* ===================================================
              LOGO
          =================================================== */}

          <Link to="/" className="group flex items-center gap-3">
            <div
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-[#DDD6C9]
                bg-white
                transition-all duration-300
                group-hover:border-[#B08A4A]
                group-hover:shadow-[0_4px_16px_rgba(176,138,74,0.12)]
              "
            >
              <img
                src={logo}
                alt="RIJI EV"
                className="
                  h-8 w-8
                  object-contain
                  transition-transform duration-300
                  group-hover:scale-105
                "
              />
            </div>

            <div className="leading-none">
              <div
                className="
                  text-[17px]
                  font-bold
                  tracking-[0.13em]
                  text-[#171717]
                "
              >
                RIJI EV
              </div>

              <div
                className="
                  mt-1.5
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#9A9489]
                "
              >
                Electric Mobility
              </div>
            </div>
          </Link>

          {/* ===================================================
              DESKTOP NAVIGATION
          =================================================== */}

          <div className="hidden md:block">
            <div
              className="
                flex items-center
                gap-1
                rounded-full
                border border-[#E2DDD4]
                bg-white/70
                p-1
                shadow-[0_2px_12px_rgba(30,25,15,0.03)]
              "
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === "/"}
                  className={({ isActive }) =>
                    `
                    relative
                    rounded-full
                    px-5
                    py-2.5
                    text-[12px]
                    font-semibold
                    tracking-[0.01em]
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? `
                          bg-[#181818]
                          text-white
                          shadow-[0_4px_14px_rgba(0,0,0,0.10)]
                        `
                        : `
                          text-[#68635B]
                          hover:bg-[#F4F1EA]
                          hover:text-[#171717]
                        `
                    }
                    `
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ===================================================
              DESKTOP CTA
          =================================================== */}

          <div className="hidden lg:flex items-center">
            <Link
              to="/dealership"
              className="
                group
                flex items-center gap-2
                rounded-full
                bg-[#181818]
                py-2.5
                pl-5
                pr-2.5
                text-[11px]
                font-semibold
                tracking-[0.02em]
                text-white
                transition-all duration-300
                hover:bg-[#B08A4A]
                hover:shadow-[0_8px_24px_rgba(176,138,74,0.20)]
              "
            >
              <span>Join Our Dealership</span>
              <span
                className="
                  flex h-7 w-7
                  items-center justify-center
                  rounded-full
                  bg-white/10
                  transition-all duration-300
                  group-hover:bg-white/20
                  group-hover:translate-x-0.5
                "
              >
                <ArrowUpRight size={14} strokeWidth={1.8} />
              </span>
            </Link>
          </div>

          {/* ===================================================
              MOBILE MENU BUTTON
          =================================================== */}

          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="
              flex md:hidden
              h-10 w-10
              items-center justify-center
              rounded-full
              border border-[#DCD6CA]
              bg-white
              text-[#24211D]
              transition-all duration-300
              hover:border-[#B08A4A]
              hover:text-[#B08A4A]
            "
          >
            {isMenuOpen ? (
              <X size={19} strokeWidth={1.8} />
            ) : (
              <Menu size={19} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`
          overflow-hidden
          border-t border-[#E8E3DA]
          bg-[#F8F7F3]
          transition-all duration-300
          md:hidden
          ${isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="mx-auto max-w-[1500px] px-5 py-5 sm:px-8">
          {/* MOBILE NAVIGATION */}

          <div className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                className={({ isActive }) =>
                  `
                  group
                  flex items-center justify-between
                  rounded-xl
                  px-4 py-3.5
                  text-[14px]
                  font-semibold
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-[#181818] text-white"
                      : "text-[#5F5A52] hover:bg-white hover:text-[#171717]"
                  }
                  `
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>

                    <ChevronRight
                      size={16}
                      className={`
                        transition-all duration-200
                        ${
                          isActive
                            ? "text-[#B08A4A]"
                            : "text-[#B0AAA0] group-hover:translate-x-1"
                        }
                      `}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* MOBILE CTA */}

          <Link
            to="/contact"
            className="
              group
              mt-4
              flex items-center justify-between
              rounded-xl
              bg-[#181818]
              px-5 py-3.5
              text-[13px]
              font-semibold
              text-white
              transition-all duration-300
              hover:bg-[#B08A4A]
            "
          >
            <span>Book a Ride</span>

            <ArrowUpRight
              size={17}
              className="
                transition-transform duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
