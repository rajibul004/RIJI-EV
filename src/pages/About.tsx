import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Lightbulb,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

import Navigation from "../components/Navigation";
import companyImage from "../assets/company.jpg";
import Footer from "../components/Footer";

const directors = [
  { name: "RIJAUL HAQUE MONDAL", initials: "RM", number: "01" },
  { name: "SAFINA BEGAM MONDAL", initials: "SM", number: "02" },
];

const values = [
  {
    number: "01",
    icon: Compass,
    title: "Purpose",
    text: "We build with a clear understanding of the problems we want to solve and the people we want to serve.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Innovation",
    text: "We stay curious, experiment with new ideas and look for better ways to create value.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Integrity",
    text: "We believe lasting businesses are built through honesty, accountability and trust.",
  },
  {
    number: "04",
    icon: Users,
    title: "People",
    text: "Our people are at the heart of the company. We value ownership, collaboration and continuous learning.",
  },
  {
    number: "05",
    icon: ArrowRight,
    title: "Partnership",
    text: "Meaningful growth comes from strong relationships with customers, partners and communities.",
  },
  {
    number: "06",
    icon: Compass,
    title: "Long-term thinking",
    text: "We look beyond short-term opportunities and work toward building businesses that can grow sustainably.",
  },
];

// Typography system: font-serif italic display headings, font-mono eyebrow labels,
// and clean sans-serif body copy for an editorial, premium brand-promotion feel.
export default function About() {
  return (
    <main className="bg-white text-[#101827]">
      <Navigation />

      {/* HERO */}
      <section className="relative isolate min-h-[560px] overflow-hidden bg-[#071326] text-white sm:min-h-[620px]">
        <img
          src={companyImage}
          alt="RIJI EV electric mobility"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071326]/95 via-[#071326]/70 to-[#071326]/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071326]/70 via-transparent to-transparent" />

        <div className="mx-auto flex min-h-[560px] max-w-[1320px] flex-col justify-end px-5 pb-10 pt-24 sm:min-h-[620px] sm:px-8 sm:pb-14 lg:px-12">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-blue-400" />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-blue-200 sm:text-xs">
              THE WORLD OF RIJI EV
            </span>
          </div>
          <div className="grid gap-7 lg:grid-cols-[1fr_340px] lg:items-end">
            <h1 className="max-w-4xl font-serif text-5xl font-medium italic leading-[0.94] tracking-[-0.055em] sm:text-7xl lg:text-[96px]">
              A new way
              <span className="block text-[#78adff]">to move.</span>
            </h1>
            <div className="max-w-sm lg:pb-2">
              <p className="text-sm leading-7 text-white/75 sm:text-base">
                We are a growing Indian company exploring opportunities,
                building relationships and looking towards what comes next.
              </p>
              <a
                href="#overview"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0165F6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Discover the RIJI story <ArrowDownRight size={17} />
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs text-white/85 backdrop-blur">
              Made for movement
            </span>
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs text-white/85 backdrop-blur">
              Ready for tomorrow
            </span>
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs text-white/85 backdrop-blur">
              Electric by vision
            </span>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-20 top-20 hidden h-64 w-64 rounded-full border border-white/15 lg:block" />
        <div className="pointer-events-none absolute -right-8 top-32 hidden h-40 w-40 rounded-full border border-blue-300/30 lg:block" />
      </section>

      {/* SIMPLE OVERVIEW */}
      <section
        id="overview"
        className="scroll-mt-20 px-5 py-12 sm:px-8 sm:py-16 lg:px-12"
      >
        <div className="mx-auto grid max-w-[1320px] gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[#edf3fc] p-6 sm:p-8">
            <span className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-[#0165F6]/10" />
            <span className="absolute right-8 top-8 h-12 w-12 rounded-full bg-[#0165F6]/15" />
            <p className="relative font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#0165F6]">
              THE BRAND / 01
            </p>
            <h2 className="relative mt-4 max-w-sm font-serif text-3xl font-medium italic leading-[1.08] tracking-tight sm:text-5xl">
              Meet the drive behind RIJI EV.
            </h2>
            <div className="relative mt-7 flex items-center gap-3 text-sm font-medium text-slate-600">
              <span className="h-2 w-2 rounded-full bg-[#0165F6]" />
              RIJIYA TRADING PRIVATE LIMITED
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-[1.75rem] border border-slate-200 p-6 sm:p-8">
            <p className="max-w-2xl font-serif text-xl leading-8 text-slate-700 sm:text-2xl sm:leading-10">
              RIJIYA TRADING PRIVATE LIMITED is an Indian company with a
              forward-looking outlook. Through RIJI EV, we introduce our
              electric-mobility initiative and invite people to explore our
              products and our journey.
            </p>
            <a
              href="/products"
              className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#0165F6] transition hover:gap-3"
            >
              Meet RIJI EV <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* OUR VISION */}
      <section className="px-5 pb-12 sm:px-8 sm:pb-16 lg:px-12">
        <div className="relative mx-auto grid max-w-[1320px] overflow-hidden rounded-[2rem] bg-[#071326] text-white lg:grid-cols-[1fr_0.9fr]">
          <div className="relative z-10 flex flex-col justify-center p-6 sm:p-9 lg:p-12">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-blue-300">
              THE VISION / 02
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl font-medium italic leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Imagine what’s next.
              <span className="block text-white/45">Move toward it.</span>
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
              We want to keep learning, respond thoughtfully to changing needs
              and create strong foundations for the future.
            </p>
          </div>
          <div className="relative min-h-[230px] overflow-hidden sm:min-h-[300px] lg:min-h-[360px]">
            <img
              src={companyImage}
              alt="A glimpse into the RIJI EV journey"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071326] via-[#071326]/20 to-transparent" />
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/25" />
            <div className="absolute right-5 top-5 h-40 w-40 rounded-full border border-blue-300/40" />
            <div className="absolute bottom-5 right-5 rounded-2xl bg-[#0165F6] p-4 sm:bottom-7 sm:right-7 sm:p-5">
              <Zap size={27} />
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em]">
                Charge your curiosity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR CULTURE */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#0165F6]">
                THE MINDSET / 03
              </p>
              <h2 className="mt-3 max-w-3xl font-serif text-3xl font-medium italic leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                A culture of ownership and curiosity.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500">
              We want people to think independently, take responsibility for
              their work and remain curious about how things can be improved.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article
                  key={value.number}
                  className="group relative min-h-[180px] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-[#f7faff] sm:p-6"
                >
                  <span className="absolute -right-7 -top-7 h-24 w-24 rounded-full bg-[#0165F6]/[0.06] transition group-hover:scale-125" />
                  <div className="relative flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.18em] text-slate-400">
                      {value.number}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-[#0165F6]">
                      <Icon size={20} strokeWidth={1.7} />
                    </span>
                  </div>
                  <h3 className="relative mt-7 text-lg font-semibold tracking-tight">
                    {value.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-6 text-slate-500">
                    {value.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR PEOPLE */}
      <section className="px-5 py-6 sm:px-8 sm:py-8 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] overflow-hidden rounded-[2rem] border border-slate-200 lg:grid-cols-[1fr_0.85fr]">
          <div className="relative min-h-[260px] overflow-hidden bg-[#dfe9f8] sm:min-h-[320px]">
            <img
              src={companyImage}
              alt="The people and ideas behind RIJIYA"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/65 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-[#071326]/30 px-4 py-2 text-xs font-medium text-white backdrop-blur">
              People · Ideas · Possibilities
            </span>
            <span className="absolute -right-8 -top-8 h-36 w-36 rounded-full border-[16px] border-white/25" />
          </div>
          <div className="flex flex-col justify-center bg-[#f6f8fc] p-6 sm:p-9 lg:p-10">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#0165F6]">
              THE PEOPLE / 04
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium italic leading-[1.08] tracking-tight sm:text-5xl">
              A brand moves forward when people move together.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              We value collaboration, respect and an open exchange of ideas.
              Different perspectives help us learn, adapt and approach new
              challenges with a broader view.
            </p>
            <a
              href="#leadership"
              className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#0165F6] hover:gap-3"
            >
              Meet our directors <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* OUR ECOSYSTEM / RIJI EV */}
      <section className="px-5 py-6 sm:px-8 sm:py-8 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#0165F6]">
                THE RIJI EV EXPERIENCE / 05
              </p>
              <h2 className="mt-3 max-w-3xl font-serif text-3xl font-medium italic leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Meet your next possibility.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500">
              RIJI EV is the electric-mobility initiative featured on this
              website. Explore the vehicles and learn more about the range.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[2rem] bg-[#eaf1fc]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col items-start justify-center p-6 sm:p-9 lg:p-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#0165F6]">
                <Zap size={14} /> Electric by vision
              </span>
              <h2 className="mt-5 text-5xl font-semibold tracking-[-0.07em] sm:text-7xl">
                RIJI<span className="text-[#0165F6]"> EV</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                Discover RIJI EV, our electric-mobility initiative. Explore the
                range, view vehicle details and learn more about our direction.
              </p>
              <a
                href="/products"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#0165F6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Explore the lineup <ArrowRight size={17} />
              </a>
            </div>
            <div className="relative min-h-[240px] overflow-hidden bg-slate-200 sm:min-h-[320px] lg:min-h-[380px]">
              <img
                src={companyImage}
                alt="RIJI EV"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#eaf1fc]/30 via-transparent to-[#071326]/20" />
              <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full border-[18px] border-white/40" />
              <span className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-700">
                Your journey. Your direction.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* LOOKING AHEAD */}
      <section className="px-5 py-6 sm:px-8 sm:py-8 lg:px-12">
        <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[2rem] bg-[#071326] px-6 py-8 text-white sm:px-9 sm:py-10 lg:px-12 lg:py-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/15 sm:h-96 sm:w-96" />
          <div className="pointer-events-none absolute right-8 top-8 h-36 w-36 rounded-full border border-blue-300/25 sm:h-52 sm:w-52" />
          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-blue-300">
                LOOKING AHEAD / 06
              </p>
              <h2 className="mt-3 max-w-3xl font-serif text-4xl font-medium italic leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Build a company prepared for the opportunities of tomorrow.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
                We want RIJIYA to grow into an organisation capable of creating
                businesses across meaningful and evolving sectors — while
                remaining grounded in people, responsibility and long-term
                thinking.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <article className="rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0165F6]">
                  <Compass size={20} />
                </div>
                <h3 className="text-lg font-semibold">Think beyond today.</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  We look at changing markets, emerging technologies and
                  evolving customer behaviour to identify where we can create
                  meaningful businesses.
                </p>
              </article>
              <article className="rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0165F6]">
                  <ArrowUpRight size={20} />
                </div>
                <h3 className="text-lg font-semibold">
                  Build for the long term.
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Sustainable growth comes from strong foundations, responsible
                  decisions and continuously improving what we build.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="px-5 py-6 sm:px-8 sm:py-8 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#0165F6]">
                HOW WE WORK
              </p>
              <h2 className="mt-3 max-w-3xl font-serif text-3xl font-medium italic leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Ideas are only the beginning.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base lg:justify-self-end">
              We believe good ideas become meaningful only through disciplined
              execution, learning and continuous improvement.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Start with the real problem",
              "Build with purpose",
              "Learn continuously",
              "Take ownership",
              "Create long-term value",
            ].map((step, index) => (
              <article
                key={step}
                className="group relative min-h-[150px] overflow-hidden rounded-[1.4rem] bg-[#edf3fc] p-5 transition duration-300 hover:-translate-y-1 hover:bg-[#e2ecfb]"
              >
                <span className="absolute -right-5 -top-5 h-20 w-20 rounded-full border-[10px] border-[#0165F6]/10 transition group-hover:scale-110" />
                <p className="relative text-xs font-bold tracking-[0.2em] text-[#0165F6]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="relative mt-7 max-w-[190px] text-lg font-semibold leading-snug tracking-tight">
                  {step}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTORS */}
      <section
        id="leadership"
        className="scroll-mt-20 px-5 pb-12 pt-4 sm:px-8 sm:pb-16 lg:px-12"
      >
        <div className="mx-auto max-w-[1320px] rounded-[2rem] bg-[#f5f7fa] p-6 sm:p-9 lg:p-12">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#0165F6]">
                Leadership
              </p>
              <h2 className="mt-3 max-w-3xl font-serif text-3xl font-medium italic leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                The people behind the vision.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-500">
              Leadership guiding the journey behind RIJI EV.
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {directors.map((director) => (
              <article
                key={director.number}
                className="group relative flex items-center gap-4 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-5 sm:p-6"
              >
                <div className="relative flex h-[68px] w-[68px] shrink-0 items-center justify-center overflow-hidden rounded-[1.25rem] bg-[#071326] text-xl font-semibold tracking-tight text-white">
                  <span className="absolute -right-4 -top-4 h-12 w-12 rounded-full bg-[#0165F6]" />
                  <span className="relative">{director.initials}</span>
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0165F6]">
                    Director {director.number}
                  </p>
                  <h3 className="mt-1 break-words text-sm font-extrabold uppercase leading-snug tracking-[0.035em] sm:text-base">
                    {director.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Board of Directors
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="ml-auto shrink-0 text-slate-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#0165F6]"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPACT FOOTER */}

      <Footer />
    </main>
  );
}
