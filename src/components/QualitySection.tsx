import React from "react";
import rijiVehicle from "@/assets/scooter.png";

type RijiEvAboutProps = {
  cta?: {
    label: string;
    href: string;
  };
};

const RijiEvAbout: React.FC<RijiEvAboutProps> = ({
  cta = {
    label: "Explore Vehicles",
    href: "#vehicles",
  },
}) => {
  return (
    <section className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-10">
        {/* HEADER */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
              R
            </div>

            <div>
              <div className="text-lg font-bold tracking-[0.18em] text-slate-950">
                RIJI EV
              </div>

              <div className="text-[9px] font-medium uppercase tracking-[0.25em] text-slate-400">
                Electric Mobility
              </div>
            </div>
          </div>

          <a
            href={cta.href}
            className="hidden rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-blue-200 hover:text-blue-600 sm:block"
          >
            {cta.label}
          </a>
        </header>

        {/* MAIN */}
        <main className="grid flex-1 items-center gap-12 py-10 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          {/* IMAGE */}
          <div className="flex items-center justify-center lg:justify-start">
            <img
              src={rijiVehicle}
              alt="RIJI EV electric vehicle"
              className="w-full max-w-[620px] object-contain"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          {/* CONTENT */}
          <div className="max-w-xl">
            {/* EYEBROW */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                About RIJI EV
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-6xl">
              Electric mobility.
              <br />
              <span className="text-blue-600">Built for India.</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-500 sm:text-lg">
              RIJI EV is focused on building smart, reliable and accessible
              electric vehicles designed for the needs of everyday Indian
              mobility.
            </p>

            {/* FEATURES */}
            <div className="mt-8 space-y-5">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <span className="mt-1 text-xs font-semibold text-blue-600">
                  01
                </span>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Practical Vehicle Design
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Modern electric vehicles designed for everyday Indian roads.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <span className="mt-1 text-xs font-semibold text-blue-600">
                  02
                </span>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Efficient EV Technology
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Efficient technology focused on practical real-world
                    mobility.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <span className="mt-1 text-xs font-semibold text-blue-600">
                  03
                </span>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Customer First
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Reliable support throughout the ownership journey.
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#vehicles"
                className="rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
              >
                Explore Vehicles
              </a>

              <a
                href="#contact"
                className="rounded-full px-7 py-3.5 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600"
              >
                Contact Us →
              </a>
            </div>
          </div>
        </main>

        {/* BOTTOM */}
        <footer className="flex items-center justify-between border-t border-slate-100 py-5 text-xs text-slate-400">
          <span>Electric mobility for everyday India.</span>

          <span className="hidden sm:block">
            Smart technology · Practical design
          </span>
        </footer>
      </div>
    </section>
  );
};

export default RijiEvAbout;
