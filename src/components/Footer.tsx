import { ArrowUpRight, Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#F4EFE5] text-[#171717]">
      {/* =========================
          CTA
      ========================== */}
      <section className="px-5 pb-8 pt-10 sm:px-8 lg:px-12">
        <div className="group relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#171717] px-7 py-12 sm:px-12 sm:py-14 lg:px-20 lg:py-16">
          {/* Gold shape */}
          <div
            className="
              absolute
              -right-24
              -top-24
              h-72
              w-72
              rounded-full
              bg-[#C5A46D]/20
              blur-[2px]
              transition-transform
              duration-1000
              group-hover:scale-125
            "
          />

          {/* Gold ring */}
          <div
            className="
              absolute
              -bottom-28
              -right-8
              h-64
              w-64
              rounded-full
              border
              border-[#C5A46D]/30
              transition-transform
              duration-1000
              group-hover:rotate-45
            "
          />

          {/* Small accent */}
          <div className="absolute left-0 top-0 h-full w-1 bg-[#C5A46D]" />

          <div className="relative z-10 max-w-3xl">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C5A46D]">
              RIJI EV
            </p>

            <h2 className="max-w-2xl text-[42px] font-medium leading-[0.95] tracking-[-0.045em] text-white sm:text-[54px] lg:text-[68px]">
              Ready to move
              <br />
              <span className="text-[#C5A46D]">differently?</span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-6 text-white/60 sm:text-base">
              Discover practical electric mobility designed for everyday India.
            </p>

            <Link
              to="/products"
              className="
                mt-7
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#F4EFE5]
                px-6
                py-3
                text-sm
                font-semibold
                text-[#171717]
                transition-all
                duration-300
                hover:bg-[#C5A46D]
                hover:text-white
              "
            >
              Explore Vehicles
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          MAIN FOOTER
      ========================== */}
      <section className="bg-[#171717] px-6 py-10 text-white sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          {/* Top row */}
          <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.5fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <Link
                to="/"
                onClick={scrollToTop}
                className="inline-block text-2xl font-semibold tracking-[-0.04em]"
              >
                RIJI <span className="text-[#C5A46D]">EV</span>
              </Link>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">
                Electric mobility built for real journeys, real roads and
                everyday India.
              </p>

              <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-white/35">
                RIJIYA PVT. LTD.
              </p>
            </div>

            {/* Explore */}
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C5A46D]">
                Explore
              </p>

              <div className="space-y-3">
                <Link
                  to="/products"
                  className="group flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
                >
                  Products
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>

                <Link
                  to="/about"
                  className="group flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
                >
                  About RIJI
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>

                <Link
                  to="/dealership"
                  className="group flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
                >
                  Dealership
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="group flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
                >
                  Contact
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              </div>
            </div>

            {/* Connect */}
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C5A46D]">
                Connect
              </p>

              <div className="space-y-3 text-sm text-white/65">
                <a
                  href="mailto:rijiev@gmail.com"
                  className="block transition-colors hover:text-white"
                >
                  rijiev@gmail.com
                </a>

                <a
                  href="tel:+918617616397"
                  className="block transition-colors hover:text-white"
                >
                  +91 86176 16397
                </a>

                <p className="max-w-xs leading-5">
                  Bardhaman, West Bengal
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col gap-5 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/35">
              © {new Date().getFullYear()} RIJI EV. All rights reserved.
            </p>

            {/* Social */}
            <div className="flex items-center gap-2">
              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/55
                  transition-all
                  duration-300
                  hover:border-[#C5A46D]
                  hover:bg-[#C5A46D]
                  hover:text-[#171717]
                "
              >
                <Instagram size={15} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/55
                  transition-all
                  duration-300
                  hover:border-[#C5A46D]
                  hover:bg-[#C5A46D]
                  hover:text-[#171717]
                "
              >
                <Facebook size={15} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/55
                  transition-all
                  duration-300
                  hover:border-[#C5A46D]
                  hover:bg-[#C5A46D]
                  hover:text-[#171717]
                "
              >
                <Youtube size={15} />
              </a>

              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="
                  ml-2
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F4EFE5]
                  text-[#171717]
                  transition-all
                  duration-300
                  hover:bg-[#C5A46D]
                  hover:text-white
                "
              >
                ↑
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          BOTTOM GOLD LINE
      ========================== */}
      <div className="h-[3px] bg-[#C5A46D]" />
    </footer>
  );
};

export default Footer;
