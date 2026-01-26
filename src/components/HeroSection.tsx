import { motion } from "framer-motion";
import erickshaw from "@/assets/e-rickshaw.png";

const HeroLanding = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 -z-30">
        <img
          src={erickshaw}
          alt=""
          className="w-full h-full object-cover blur-3xl scale-125 opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-cyan-900/40 to-black/90" />
      </div>

      {/* ================= AI GLOW ================= */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-10 left-10 w-[260px] sm:w-[420px] h-[260px] sm:h-[420px] bg-cyan-400/30 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[300px] sm:w-[520px] h-[300px] sm:h-[520px] bg-blue-500/30 blur-[180px] rounded-full" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10"
        >
          <div className="max-w-xl space-y-6">
            {/* Badge */}
            <div className="inline-flex px-5 py-2 rounded-full bg-black/60 backdrop-blur border border-cyan-400/40 shadow-[0_0_25px_rgba(34,211,238,0.35)]">
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-cyan-300">
                Eco-Charge Series
              </span>
            </div>

            {/* Headings */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Smart Electric
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                Mobility for Everyday India
              </h2>
            </div>

            {/* Description */}
            <div className="rounded-2xl p-5 sm:p-6 bg-black/60 backdrop-blur-md border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
              <p className="text-sm sm:text-lg text-slate-200 leading-relaxed">
                Designed for{" "}
                <span className="text-cyan-300 font-semibold">efficiency</span>,{" "}
                <span className="text-sky-300 font-semibold">reliability</span>{" "}
                and{" "}
                <span className="text-indigo-300 font-semibold">
                  low running cost
                </span>
                . Help drivers{" "}
                <span className="text-cyan-300 font-semibold">earn more</span>{" "}
                while supporting a{" "}
                <span className="text-sky-300 font-semibold">
                  cleaner future
                </span>
                .
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "⚡ Zero Tailpipe Emissions",
                "🔋 Up to 100 km / Charge",
                "🛠 Low Maintenance",
                "💰 Higher Daily Earnings",
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg px-4 py-3 text-sm text-white bg-black/50 backdrop-blur border border-white/15"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex flex-col items-center"
        >
          {/* Glass Ring */}
          <div className="absolute w-[260px] sm:w-[420px] lg:w-[520px] h-[260px] sm:h-[420px] lg:h-[520px] rounded-full bg-white/10 backdrop-blur-2xl border border-white/20" />

          {/* Vehicle */}
          <motion.img
            src={erickshaw}
            alt="RIJI EV"
            className="
              relative z-10
              w-[280px]
              sm:w-[420px]
              md:w-[560px]
              lg:w-[720px]
              xl:w-[860px]
              drop-shadow-[0_50px_100px_rgba(0,0,0,0.8)]
            "
            animate={{ y: [0, -16, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Noise */}
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.035%22/%3E%3C/svg%3E')]" />
    </section>
  );
};

export default HeroLanding;
