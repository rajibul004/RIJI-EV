import { ArrowUpRight, Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative isolate overflow-hidden bg-[#07111f] text-white">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-10 h-[26rem] w-[26rem] rounded-full bg-sky-500/15 blur-[110px]" />
        <div className="absolute -right-32 top-1/3 h-[30rem] w-[30rem] rounded-full bg-blue-600/20 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:52px_52px]" />
      </div>

      {/* CTA */}

      <section className="px-4 py-4 sm:px-8 lg:px-12">
        <div className="group relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/15 bg-white/[0.07] px-5 py-4 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:px-8 sm:py-5 lg:px-10">
          {/* Glass shapes */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full border border-white/20 bg-sky-300/[0.06] transition-transform duration-700 group-hover:scale-110 sm:h-48 sm:w-48"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-20 top-4 h-12 w-12 rotate-45 rounded-xl border border-cyan-200/20 bg-cyan-300/[0.06] backdrop-blur-md sm:right-40"
          />

          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />

          <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Text content */}
            <div className="min-w-0">
              <div className="mb-1.5 inline-flex items-center gap-2 rounded-full border border-cyan-100/20 bg-cyan-200/[0.08] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-100">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                RIJI EV · Electric mobility
              </div>

              <h2 className="text-xl font-medium leading-tight tracking-[-0.04em] text-white sm:text-2xl lg:text-3xl">
                Ready to move{" "}
                <span className="bg-gradient-to-r from-cyan-200 to-blue-400 bg-clip-text text-transparent">
                  differently?
                </span>
              </h2>

              <p className="mt-1 text-xs leading-5 text-slate-300/80 sm:text-sm">
                Discover practical electric mobility designed for everyday
                India.
              </p>
            </div>

            {/* Right-aligned button */}
            <div className="relative z-10 flex shrink-0 sm:justify-end">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white px-4 py-2.5 text-xs font-semibold text-[#07111f] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-100 sm:px-5 sm:text-sm"
              >
                Explore Vehicles
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main footer */}

      <section className="relative isolate overflow-hidden px-4 pb-6 sm:px-8 lg:px-12">
        {/* Ambient animated lights */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-10 h-64 w-64 animate-pulse rounded-full bg-cyan-500/10 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 animate-pulse rounded-full bg-blue-600/15 blur-[110px] [animation-delay:1.5s]"
        />

        <div className="group/footer relative mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/60 px-6 py-8 shadow-[0_20px_80px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:px-9 sm:py-10 lg:px-12">
          {/* Animated gradient border effect */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent transition-all duration-700 group-hover/footer:via-blue-300"
          />

          {/* Decorative orbit rings */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border border-cyan-300/[0.12] transition-transform duration-1000 group-hover/footer:rotate-45"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-16 h-48 w-48 rounded-full border border-blue-300/[0.15] transition-transform duration-1000 group-hover/footer:-rotate-12"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-16 top-12 h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_25px_rgba(103,232,249,0.9)] animate-pulse"
          />

          <div className="relative z-10 grid gap-9 border-b border-white/10 pb-8 md:grid-cols-[1.5fr_0.8fr_1fr] lg:gap-16">
            {/* Brand */}
            <div className="group/brand">
              <Link
                to="/"
                onClick={scrollToTop}
                className="inline-flex items-center gap-3"
              >
                <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200/20 bg-gradient-to-br from-white/10 to-cyan-300/[0.04] shadow-[0_0_25px_rgba(34,211,238,0.08)] transition-all duration-500 group-hover/brand:rotate-[-6deg] group-hover/brand:border-cyan-200/50 group-hover/brand:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                  <img
                    src="/logo.png"
                    alt="RIJI EV logo"
                    className="h-8 w-8 object-contain transition-transform duration-500 group-hover/brand:scale-110"
                  />
                </span>

                <span className="text-2xl font-semibold tracking-[-0.055em] text-white transition-colors duration-300 group-hover/brand:text-cyan-50">
                  RIJI <span className="text-sky-300">EV</span>
                </span>
              </Link>

              <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300/70">
                Electric mobility built for real journeys, real roads and
                everyday India.
              </p>

              <div className="mt-5 border-l-2 border-cyan-300/40 pl-3 transition-colors duration-300 hover:border-cyan-200">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-300">
                  RIJIYA PVT. LTD.
                </p>
                <p className="mt-2 max-w-sm text-xs leading-5 text-slate-400/80">
                  Building practical electric mobility solutions for a cleaner,
                  smarter and more sustainable India.
                </p>
              </div>

              <div className="mt-5 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-slate-500">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.8)]" />
                Moving towards a smarter future
              </div>
            </div>

            {/* Explore */}
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-200">
                Explore
              </p>

              <div className="space-y-3.5">
                {[
                  { label: "Products", to: "/products" },
                  { label: "About RIJI", to: "/about" },
                  { label: "Dealership", to: "/dealership" },
                  { label: "Contact", to: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="group/link flex w-fit items-center gap-2 text-sm text-slate-300/70 transition-all duration-300 hover:translate-x-1 hover:text-cyan-100"
                  >
                    <span className="h-1 w-1 rounded-full bg-cyan-300/0 transition-all duration-300 group-hover/link:bg-cyan-300 group-hover/link:shadow-[0_0_8px_rgba(103,232,249,0.8)]" />
                    {item.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:opacity-100"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-200">
                Connect
              </p>

              <div className="space-y-3.5 text-sm text-slate-300/70">
                <a
                  href="mailto:rijiev@gmail.com"
                  className="block w-fit transition-colors duration-300 hover:text-cyan-100"
                >
                  rijiev@gmail.com
                </a>
                <a
                  href="tel:+918617616397"
                  className="block w-fit transition-colors duration-300 hover:text-cyan-100"
                >
                  +91 86176 16397
                </a>
                <p className="max-w-xs leading-5 transition-colors duration-300 hover:text-slate-200">
                  Bardhaman, West Bengal
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="relative z-10 flex flex-col gap-5 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-400/60">
              © {new Date().getFullYear()} RIJI EV. All rights reserved.
            </p>

            <div className="flex items-center gap-2">
              {[
                { label: "Instagram", href: "#", Icon: Instagram },
                { label: "Facebook", href: "#", Icon: Facebook },
                { label: "YouTube", href: "#", Icon: Youtube },
              ].map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group/social flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/50 hover:bg-cyan-200/10 hover:text-cyan-100 hover:shadow-[0_0_20px_rgba(34,211,238,0.12)]"
                >
                  <Icon
                    size={15}
                    className="transition-transform duration-300 group-hover/social:scale-110"
                  />
                </a>
              ))}

              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white text-lg text-[#07111f] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-100 hover:shadow-[0_0_25px_rgba(103,232,249,0.25)]"
              >
                ↑
              </button>
            </div>
          </div>

          {/* Moving light beam */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-px w-1/3 bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent opacity-60 transition-all duration-1000 group-hover/footer:translate-x-[200%]"
          />
        </div>
      </section>

      {/* Subtle bottom glow */}
      <div
        aria-hidden="true"
        className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-sky-300/50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-36 w-2/3 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[80px]"
      />
    </footer>
  );
};

export default Footer;
