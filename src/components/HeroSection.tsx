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
          {/* ===== TEXT SECTION ===== */}
          <div className="max-w-xl space-y-6">
            {/* Badge Box */}
            <div
              className="inline-flex items-center px-5 py-2 rounded-full 
    bg-cyan-500/15 backdrop-blur border border-cyan-400/30"
            >
              <span className="text-sm font-semibold tracking-widest uppercase text-cyan-300">
                Eco-Charge Series
              </span>
            </div>

            {/* Heading Box */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                Smart Electric
              </h1>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold 
      text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400"
              >
                Mobility for Everyday India
              </h2>
            </div>

            {/* Description Box */}
            <div
              className="rounded-2xl bg-white/10 backdrop-blur 
    border border-white/20 px-6 py-4"
            >
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Designed for{" "}
                <span className="text-white font-semibold">efficiency</span>,{" "}
                <span className="text-white font-semibold">reliability</span>,
                and{" "}
                <span className="text-white font-semibold">
                  low running cost
                </span>
                , RIJI EV e-rickshaws help drivers{" "}
                <span className="text-cyan-300 font-semibold">earn more</span>{" "}
                while contributing to a{" "}
                <span className="text-cyan-300 font-semibold">
                  cleaner future
                </span>
                .
              </p>
            </div>

            {/* Supporting Info Box */}
            <div
              className="rounded-xl bg-black/30 backdrop-blur 
    border border-white/10 px-5 py-3"
            >
              <p className="text-sm text-gray-300">
                Built with durable materials, smart electric systems, and
                dependable after-sales support.
              </p>
            </div>

            {/* Feature Boxes */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="feature-box">⚡ Zero Tailpipe Emissions</div>
              <div className="feature-box">🔋 Up to 100 km per Charge</div>
              <div className="feature-box">🛠 Low Maintenance Design</div>
              <div className="feature-box">💰 Higher Daily Earnings</div>
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
          <div className="absolute -right-6 top-1/2 -translate-y-1/2">
            <div className="relative w-32 h-32 rounded-full border border-cyan-400/40 flex items-center justify-center backdrop-blur">
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-30" />
              <button className="text-sm font-semibold text-cyan-300 hover:text-white transition">
                Book a<br />
                Test Drive
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ================= NOISE OVERLAY ================= */}
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.035%22/%3E%3C/svg%3E')]" />
    </section>
  );
};

export default HeroLanding;
