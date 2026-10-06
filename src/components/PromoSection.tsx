import { ArrowUpRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const PromoSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">
      {/* Subtle brand accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#0165F6]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          {/* LEFT — Marketing message */}
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <Tag size={16} className="text-[#4D8DFF]" />
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                RIJI EV Offers
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Make your next move
              <br />
              <span className="text-[#4D8DFF]">worth making.</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Discover current offers across the RIJI EV range and find the
              right electric vehicle for your everyday journey.
            </p>

            {/* CTA */}
            <div className="mt-9">
              <Button
                size="lg"
                className="
                  group
                  h-12
                  rounded-full
                  bg-white
                  px-7
                  text-sm
                  font-semibold
                  text-slate-950
                  shadow-none
                  transition-colors
                  hover:bg-[#0165F6]
                  hover:text-white
                "
              >
                Explore current offers
                <ArrowUpRight
                  size={17}
                  className="
                    ml-2
                    transition-transform
                    duration-200
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Button>
            </div>
          </div>

          {/* RIGHT — Supporting marketing panel */}
          <div className="w-full max-w-sm lg:justify-self-end">
            <div className="border-l border-white/15 pl-7">
              <p className="text-sm font-medium text-white">
                Built for everyday mobility.
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Practical electric mobility, backed by RIJI EV's growing
                ecosystem of products, service and support.
              </p>

              <div className="mt-7 h-px w-16 bg-[#0165F6]" />

              <p className="mt-5 text-xs uppercase tracking-[0.18em] text-slate-500">
                Electric mobility · Made for India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
