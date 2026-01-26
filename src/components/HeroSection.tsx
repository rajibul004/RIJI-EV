import { motion } from "framer-motion";
import erickshaw from "@/assets/e-rickshaw.png";

const HeroLanding = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* ================= BACKGROUND BLUR IMAGE ================= */}
      <div className="absolute inset-0 -z-30">
        <img
          src={erickshaw}
          alt=""
          className="w-full h-full object-cover blur-3xl scale-125 opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-cyan-900/30 to-black/70" />
      </div>

      {/* ================= AI GLOW ORBS ================= */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-20 left-20 w-[420px] h-[420px] bg-cyan-400/40 blur-[160px] rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-32 w-[520px] h-[520px] bg-blue-500/40 blur-[180px] rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10"
        >
          <div className="max-w-xl space-y-7">
            {/* Badge */}
            <div
              className="inline-flex items-center px-5 py-2 rounded-full
      bg-black/60 backdrop-blur
      border border-cyan-400/40
      shadow-[0_0_25px_rgba(34,211,238,0.35)]"
            >
              <span className="text-sm font-semibold tracking-widest uppercase text-cyan-300">
                Eco-Charge Series
              </span>
            </div>

            {/* Headings */}
            <div className="space-y-3">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl
        font-extrabold text-white leading-tight
        drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
              >
                Smart Electric
              </h1>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl
        font-extrabold
        bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400
        bg-clip-text text-transparent
        drop-shadow-[0_6px_20px_rgba(0,0,0,0.9)]"
              >
                Mobility for Everyday India
              </h2>
            </div>

            {/* Description Card */}
            <div
              className="relative rounded-2xl p-6
      bg-black/65 backdrop-blur-md
      border border-white/15
      shadow-[0_25px_70px_rgba(0,0,0,0.75)]"
            >
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed">
                Designed for{" "}
                <span className="font-semibold text-cyan-300">efficiency</span>,{" "}
                <span className="font-semibold text-sky-300">reliability</span>,
                and{" "}
                <span className="font-semibold text-indigo-300">
                  low running cost
                </span>
                . RIJI EV e-rickshaws help drivers{" "}
                <span className="font-semibold text-cyan-300">earn more</span>{" "}
                while supporting a{" "}
                <span className="font-semibold text-sky-300">
                  cleaner future
                </span>
                .
              </p>
            </div>

            {/* Supporting Info */}
            <div
              className="rounded-xl px-5 py-4
      bg-black/55 backdrop-blur
      border border-white/10"
            >
              <p className="text-sm text-slate-200">
                Built with durable materials, smart electric systems, and
                dependable after-sales support across India.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                "⚡ Zero Tailpipe Emissions",
                "🔋 Up to 100 km per Charge",
                "🛠 Low Maintenance Design",
                "💰 Higher Daily Earnings",
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg px-4 py-3 text-sm
          text-white
          bg-black/50 backdrop-blur
          border border-white/15
          hover:border-cyan-400
          hover:shadow-[0_0_18px_rgba(34,211,238,0.4)]
          transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT PRODUCT ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          {/* ===== CIRCULAR AI BACKGROUND (KEY CHANGE) ===== */}
          <div className="absolute w-[520px] h-[520px] lg:w-[620px] lg:h-[620px] rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl" />

          {/* Inner glow ring */}
          <div className="absolute w-[420px] h-[420px] lg:w-[520px] lg:h-[520px] rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 blur-2xl" />

          <motion.img
            src={erickshaw}
            alt="RIJI EV Electric Rickshaw"
            className="
    relative z-10
    w-[700px]
    sm:w-[820px]
    md:w-[950px]
    lg:w-[1100px]
    xl:w-[1300px]
    2xl:w-[1500px]
    max-w-none
    drop-shadow-[0_60px_120px_rgba(0,0,0,0.8)]
  "
            animate={{ y: [0, -22, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />

          {/* CTA RING */}
          {/* ================= BOOK NOW CTA ================= */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
      relative px-10 py-4 rounded-full
      bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500
      text-white font-semibold tracking-wide
      shadow-[0_20px_60px_rgba(59,130,246,0.6)]
      border border-white/20
    "
            >
              Book a Test Drive
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* ================= NOISE OVERLAY ================= */}
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.035%22/%3E%3C/svg%3E')]" />
    </section>
  );
};

export default HeroLanding;
