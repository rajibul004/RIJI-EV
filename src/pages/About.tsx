import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
  Compass,
  Sparkles,
} from "lucide-react";

import Navigation from "../components/Navigation";

// Use your own company/team/workspace image here.
// Replace these paths with your actual assets.
import companyImage from "../assets/company.jpg";
import teamImage from "../assets/company.jpg";

const values = [
  {
    icon: Target,
    title: "Purpose",
    text: "We build with a clear understanding of the problem we want to solve and the people we want to serve.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We stay curious, experiment with new ideas and continuously look for better ways to create value.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "We believe long-term businesses are built through honesty, accountability and trust.",
  },
  {
    icon: Users,
    title: "People",
    text: "Our people are at the heart of the company. We value ownership, collaboration and continuous learning.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    text: "We believe meaningful growth comes from building strong relationships with customers, partners and communities.",
  },
  {
    icon: Compass,
    title: "Long-term thinking",
    text: "We focus beyond short-term opportunities and work toward building businesses that can grow sustainably.",
  },
];

const principles = [
  "Start with the real problem",
  "Build with purpose",
  "Learn continuously",
  "Take ownership",
  "Create long-term value",
];

export default function About() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navigation />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#f5f7fa]">
        <div className="mx-auto grid min-h-[650px] max-w-[1450px] items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:py-24">
          {/* LEFT */}
          <div className="relative z-10">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#0165F6]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                About the company
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-7xl xl:text-[82px]">
              Building businesses
              <span className="block text-[#0165F6]">for what comes next.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              RIJIYA PVT. LTD. is focused on building businesses and solutions
              around emerging opportunities, changing customer needs and the
              future of everyday life.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#company"
                className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#0165F6]"
              >
                Discover RIJIYA
                <ArrowRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#culture"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium text-slate-600 transition hover:text-slate-950"
              >
                Our culture
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute -right-10 top-10 h-72 w-72 rounded-full bg-[#0165F6]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] bg-white">
              <img
                src={companyImage}
                alt="RIJIYA PVT. LTD."
                className="h-[500px] w-full object-cover"
              />
            </div>

            {/* Small company label */}
            <div className="absolute bottom-6 left-6 rounded-2xl bg-white px-5 py-4 shadow-lg">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Company
              </p>

              <p className="mt-1 text-sm font-semibold">RIJIYA PVT. LTD.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPANY INTRODUCTION
      ========================================================= */}
      <section id="company" className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1250px]">
          <div className="grid gap-14 lg:grid-cols-[0.45fr_1.55fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0165F6]">
                Who we are
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                RIJIYA is a company built around ideas, people and
                opportunities.
              </h2>

              <div className="mt-9 max-w-4xl space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
                <p>
                  RIJIYA PVT. LTD. is focused on identifying meaningful
                  opportunities and turning them into businesses that can create
                  lasting value.
                </p>

                <p>
                  We believe companies should evolve with the world around them.
                  Customer expectations change, technology changes and
                  industries change. Our role is to understand those changes and
                  build with them.
                </p>

                <p>
                  Rather than limiting ourselves to one category, we aim to
                  develop businesses with a clear purpose, strong foundations
                  and the ability to grow over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION
      ========================================================= */}
      <section className="bg-slate-950 px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0165F6]">
                <Target size={25} />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Our Mission
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Create businesses that solve real problems and create meaningful
                value.
              </h2>

              <p className="mt-8 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
                Our mission is to build purposeful businesses by combining
                entrepreneurial thinking, technology, strong execution and a
                deep understanding of the people we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VISION
      ========================================================= */}
      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1250px]">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0165F6]">
                Our Vision
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Build a company prepared for the opportunities of tomorrow.
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                We want RIJIYA to grow into an organisation capable of creating
                businesses across meaningful and evolving sectors — while
                remaining grounded in people, responsibility and long-term
                thinking.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#f5f7fa] p-8 sm:p-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#0165F6] shadow-sm">
                <Compass size={25} />
              </div>

              <p className="mt-10 text-2xl font-semibold tracking-[-0.025em]">
                Think beyond today.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                We look at changing markets, emerging technologies and evolving
                customer behaviour to identify where we can create meaningful
                businesses.
              </p>

              <div className="mt-10 h-px bg-slate-200" />

              <p className="mt-8 text-2xl font-semibold tracking-[-0.025em]">
                Build for the long term.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Sustainable growth comes from strong foundations, responsible
                decisions and continuously improving what we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR CULTURE
      ========================================================= */}
      <section
        id="culture"
        className="bg-[#f5f7fa] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1300px]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0165F6]">
              Our culture
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              A culture of
              <span className="block text-slate-400">
                ownership and curiosity.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600">
              We want people to think independently, take responsibility for
              their work and remain curious about how things can be improved.
            </p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-[1.5rem] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 sm:p-10"
                >
                  <Icon
                    size={27}
                    strokeWidth={1.5}
                    className="text-[#0165F6]"
                  />

                  <h3 className="mt-12 text-xl font-semibold tracking-[-0.02em]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW WE WORK
      ========================================================= */}
      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1250px]">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0165F6]">
                How we work
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
                Ideas are only the beginning.
              </h2>

              <p className="mt-7 text-base leading-8 text-slate-600">
                We believe good ideas become meaningful only through disciplined
                execution, learning and continuous improvement.
              </p>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {principles.map((principle, index) => (
                <div key={principle} className="flex items-center gap-7 py-7">
                  <span className="text-sm font-medium text-[#0165F6]">
                    0{index + 1}
                  </span>

                  <p className="text-xl font-medium tracking-[-0.02em] sm:text-2xl">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PEOPLE
      ========================================================= */}
      <section className="bg-slate-950 px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1350px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          {/* Image */}
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={teamImage}
              alt="RIJIYA team"
              loading="lazy"
              className="h-[500px] w-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4b91ff]">
              Our people
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Great companies are built by people.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              We want to create an environment where people can take ownership,
              share ideas, challenge assumptions and grow together.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
              Different perspectives make stronger businesses. Collaboration is
              therefore not just part of how we work — it is part of how we
              build.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR ECOSYSTEM
      ========================================================= */}
      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1300px]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0165F6]">
              Our ecosystem
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Building beyond
              <span className="block text-slate-400">a single business.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600">
              RIJIYA is being built as a company capable of developing
              businesses around meaningful opportunities. RIJI EV represents our
              focus on the growing electric mobility space.
            </p>
          </div>

          {/* RIJI EV */}
          <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#f5f7fa]">
            <div className="grid items-center lg:grid-cols-[0.8fr_1.2fr]">
              <div className="p-8 sm:p-12 lg:p-16">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  A RIJIYA venture
                </p>

                <h3 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
                  RIJI EV
                </h3>

                <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
                  Our electric mobility initiative focused on creating practical
                  solutions for the evolving transportation needs of India.
                </p>

                <a
                  href="/products"
                  className="group mt-8 inline-flex items-center gap-3 text-sm font-medium"
                >
                  Explore RIJI EV
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>

              <div className="flex min-h-[380px] items-center justify-center bg-white">
                <img
                  src={companyImage}
                  alt="RIJI EV"
                  loading="lazy"
                  className="h-full max-h-[430px] w-full object-contain p-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMMITMENT
      ========================================================= */}
      <section className="border-y border-slate-200 bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1100px] text-center">
          <Sparkles
            size={30}
            strokeWidth={1.5}
            className="mx-auto text-[#0165F6]"
          />

          <h2 className="mt-7 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Building with responsibility.
            <span className="block text-slate-400">Growing with purpose.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Our ambition is not simply to grow. It is to build businesses,
            relationships and an organisation that can create meaningful value
            over the long term.
          </p>
        </div>
      </section>

      {/* =========================================================
          FUTURE
      ========================================================= */}
      <section className="bg-[#0165F6] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1250px]">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            Looking ahead
          </p>

          <div className="mt-6 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              The future is not something we wait for.
              <span className="block text-white/50">
                It is something we build.
              </span>
            </h2>

            <a
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
            >
              Connect with us
              <ArrowUpRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER BRAND STATEMENT
      ========================================================= */}
      <section className="bg-slate-950 px-6 py-16 text-white sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1250px] flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-2xl font-semibold tracking-[-0.03em]">
              RIJIYA PVT. LTD.
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Building businesses for what comes next.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white"
          >
            Get in touch
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>
    </div>
  );
}
