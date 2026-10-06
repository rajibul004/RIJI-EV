import React from "react";
import {
  IndianRupee,
  Wrench,
  Leaf,
  Zap,
  ArrowUpRight,
  Check,
  Gauge,
} from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    number: "01",
    title: "Lower running cost",
    description: "Spend less on everyday mobility.",
    icon: IndianRupee,
  },
  {
    number: "02",
    title: "Simpler maintenance",
    description: "Fewer mechanical components to maintain.",
    icon: Wrench,
  },
  {
    number: "03",
    title: "Cleaner movement",
    description: "Quiet driving with zero tailpipe emissions.",
    icon: Leaf,
  },
  {
    number: "04",
    title: "Made for daily life",
    description: "Practical mobility for everyday India.",
    icon: Zap,
  },
];

const comparisons = [
  {
    label: "Running cost",
    description: "Everyday cost of mobility",
    ev: "Lower",
    petrol: "Higher",
    advantage: "78%",
  },
  {
    label: "Maintenance",
    description: "Mechanical complexity",
    ev: "Lower",
    petrol: "Higher",
    advantage: "68%",
  },
  {
    label: "Tailpipe emissions",
    description: "While driving",
    ev: "Zero",
    petrol: "Higher",
    advantage: "95%",
  },
  {
    label: "Energy efficiency",
    description: "Energy used to move",
    ev: "Higher",
    petrol: "Lower",
    advantage: "84%",
  },
];

const WhyChooseUsWithChart = () => {
  return (
    <section className="relative overflow-hidden bg-[#F2EEE6] py-9 sm:py-10 lg:py-12">
      {/* Background shapes */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[360px] w-[360px] rounded-full border border-[#B5945A]/20" />

      <div className="pointer-events-none absolute -right-16 -top-16 h-[230px] w-[230px] rounded-full bg-[#D9C8A8]/15" />

      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        {/* HEADER */}
        <div className="grid gap-5 lg:grid-cols-[1fr_340px] lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#B18C51]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A37D42]">
                The RIJI advantage
              </span>
            </div>

            <h2 className="text-[40px] font-medium leading-[0.92] tracking-[-0.055em] text-[#171717] sm:text-[50px] lg:text-[64px]">
              A smarter way
              <br />
              <span className="text-[#A98246]">to move.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-5 text-[#777168]">
            Lower running costs, simpler maintenance and efficient electric
            technology for everyday Indian mobility.
          </p>
        </div>

        {/* BENEFITS */}
        <div className="mt-7 grid overflow-hidden rounded-[18px] border border-[#D7D0C3] bg-[#F8F5EF] sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.number}
                className={`
                  group
                  p-4
                  transition-colors
                  duration-300
                  hover:bg-[#171717]
                  ${
                    index < 3
                      ? "border-b border-[#D7D0C3] lg:border-b-0 lg:border-r"
                      : ""
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#B18C51]">
                    {benefit.number}
                  </span>

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ECE5D8] text-[#8D6D3D] transition-colors group-hover:bg-[#B18C51] group-hover:text-white">
                    <Icon size={13} strokeWidth={1.7} />
                  </div>
                </div>

                <h3 className="mt-5 text-sm font-semibold text-[#171717] transition-colors group-hover:text-white">
                  {benefit.title}
                </h3>

                <p className="mt-1 text-[11px] leading-4 text-[#827A70] transition-colors group-hover:text-white/45">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* MAIN COMPARISON */}
        <div className="relative mt-7 overflow-hidden rounded-[24px] bg-[#171717]">
          {/* Decorative shapes */}
          <div className="pointer-events-none absolute -right-28 -top-28 h-[330px] w-[330px] rounded-full border border-[#C5A56C]/20" />

          <div className="pointer-events-none absolute -right-10 -top-10 h-[210px] w-[210px] rounded-full bg-[#C5A56C]/10" />

          <div className="relative grid lg:grid-cols-[0.78fr_1.22fr]">
            {/* LEFT */}
            <div className="flex flex-col justify-between border-b border-white/10 p-6 sm:p-7 lg:border-b-0 lg:border-r lg:p-8">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#C5A56C]/40">
                    <Gauge size={12} className="text-[#C5A56C]" />
                  </div>

                  <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#C5A56C]">
                    Ownership intelligence
                  </span>
                </div>

                <h3 className="mt-6 text-[32px] font-medium leading-[0.96] tracking-[-0.045em] text-white sm:text-[38px]">
                  What changes
                  <br />
                  when you
                  <br />
                  <span className="text-[#C5A56C]">go electric?</span>
                </h3>

                <p className="mt-4 max-w-sm text-xs leading-5 text-white/45">
                  Change the economics and experience of everyday travel.
                </p>
              </div>

              <Link
                to="/products"
                className="group mt-7 inline-flex w-fit items-center gap-2 text-xs font-semibold text-white"
              >
                Discover RIJI EV
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C5A56C] text-[#171717] transition-transform group-hover:translate-x-1">
                  <ArrowUpRight size={13} />
                </span>
              </Link>
            </div>

            {/* RIGHT */}
            <div className="p-6 sm:p-7 lg:p-8">
              <div className="flex items-end justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#C5A56C]">
                    Live comparison
                  </p>

                  <h3 className="mt-1 text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                    EV vs Petrol
                  </h3>
                </div>

                <div className="hidden items-center gap-2 sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C5A56C]" />

                  <span className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                    RIJI EV
                  </span>
                </div>
              </div>

              <div>
                {comparisons.map((item) => (
                  <ComparisonRow
                    key={item.label}
                    label={item.label}
                    description={item.description}
                    ev={item.ev}
                    petrol={item.petrol}
                    advantage={item.advantage}
                  />
                ))}
              </div>

              <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-4">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C5A56C]/10">
                  <Check size={11} className="text-[#C5A56C]" />
                </span>

                <span className="text-[10px] text-white/35">
                  Built for everyday ownership.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SMALL STATS */}
        <div className="mt-5 grid grid-cols-2 overflow-hidden rounded-[18px] border border-[#D7D0C3] bg-[#F8F5EF] sm:grid-cols-4">
          <Stat value="01" label="Electric" text="Powertrain" />
          <Stat value="02" label="Lower" text="Ownership complexity" />
          <Stat value="03" label="Cleaner" text="Everyday movement" />
          <Stat value="04" label="Ready" text="For daily India" />
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   COMPARISON ROW
========================================================= */

type ComparisonRowProps = {
  label: string;
  description: string;
  ev: string;
  petrol: string;
  advantage: string;
};

const ComparisonRow = ({
  label,
  description,
  ev,
  petrol,
  advantage,
}: ComparisonRowProps) => {
  return (
    <div className="group border-b border-white/10 py-3.5 last:border-b-0">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h4 className="text-xs font-semibold text-white">{label}</h4>

          <p className="mt-0.5 text-[10px] text-white/25">{description}</p>
        </div>

        <span className="rounded-full border border-[#C5A56C]/25 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.15em] text-[#C5A56C]">
          EV
        </span>
      </div>

      <div className="mt-2.5">
        <div className="h-[4px] overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#92703D] to-[#D5B878] transition-all duration-700 group-hover:brightness-110"
            style={{ width: advantage }}
          />
        </div>

        <div className="mt-1.5 flex justify-between">
          <span className="text-[9px] font-medium text-[#C5A56C]">
            RIJI EV · {ev}
          </span>

          <span className="text-[9px] text-white/20">Petrol · {petrol}</span>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   STAT
========================================================= */

type StatProps = {
  value: string;
  label: string;
  text: string;
};

const Stat = ({ value, label, text }: StatProps) => {
  return (
    <div className="group p-4 transition-colors duration-300 hover:bg-[#171717] sm:border-r sm:border-[#D7D0C3] sm:last:border-r-0">
      <span className="text-[9px] font-bold tracking-[0.2em] text-[#B18C51]">
        {value}
      </span>

      <h4 className="mt-2 text-xs font-semibold text-[#171717] transition-colors group-hover:text-white">
        {label}
      </h4>

      <p className="mt-0.5 text-[10px] text-[#81796E] transition-colors group-hover:text-white/35">
        {text}
      </p>
    </div>
  );
};

export default WhyChooseUsWithChart;
