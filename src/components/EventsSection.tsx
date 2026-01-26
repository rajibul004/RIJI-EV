import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/* ===================== ANIMATION VARIANTS ===================== */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1], // ✅ correct
    },
  },
};

const floating: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: [0.4, 0, 0.2, 1], // ✅ TS-safe easeInOut
    },
  },
};

/* ===================== METRIC BAR ===================== */
const MetricBar = ({ label, ev, petrol, evLabel, petrolLabel, delay = 0 }) => {
  return (
    <motion.div variants={fadeUp} className="space-y-3">
      {/* Header */}
      <div className="flex justify-between items-center">
        <p className="text-sm font-semibold text-white">{label}</p>
        <span className="text-xs font-bold text-emerald-400 tracking-wide">
          EV ADVANTAGE
        </span>
      </div>

      {/* Bar Track */}
      <div className="relative h-6 rounded-full bg-white/15 backdrop-blur overflow-hidden">
        {/* Petrol */}
        <motion.div
          initial={{ width: 0, opacity: 0.35 }}
          whileInView={{ width: `${petrol}%` }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="absolute inset-y-0 left-0
          bg-gradient-to-r from-red-500 to-orange-400"
        />

        {/* EV */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${ev}%` }}
          transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
          animate={{
            boxShadow: [
              "0 0 18px rgba(16,185,129,0.4)",
              "0 0 42px rgba(16,185,129,0.8)",
              "0 0 18px rgba(16,185,129,0.4)",
            ],
          }}
          className="absolute inset-y-0 left-0
          bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400"
        />
      </div>

      {/* Labels */}
      <div className="flex justify-between text-xs">
        <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300">
          EV: {evLabel}
        </span>
        <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300">
          Petrol: {petrolLabel}
        </span>
      </div>
    </motion.div>
  );
};

/* ===================== MAIN SECTION ===================== */
const WhyChooseUsWithChart = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black/75" />

      {/* AI Glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-24 left-24 w-[420px] h-[420px]
          bg-emerald-400/30 blur-[160px] rounded-full"
        />
        <div
          className="absolute bottom-24 right-24 w-[520px] h-[520px]
          bg-cyan-400/30 blur-[180px] rounded-full"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* ================= LEFT ================= */}
        <motion.div className="text-white space-y-8">
          <motion.span
            variants={fadeUp}
            className="inline-block px-5 py-2 rounded-full
            bg-white/10 backdrop-blur
            border border-white/20
            text-xs tracking-widest uppercase text-emerald-400"
          >
            Why Choose Us
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-extrabold leading-tight"
          >
            Built for India.
            <br />
            <span
              className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400
              bg-clip-text text-transparent"
            >
              Engineered for the Future.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-200 leading-relaxed max-w-xl"
          >
            RIJI EV vehicles are designed for real Indian roads, real daily
            usage, and real savings. Modern EV technology meets durable
            engineering.
          </motion.p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl">
            {[
              [
                "⚡",
                "Ultra-Low Running Cost",
                "Save up to 80% on fuel expenses.",
              ],
              ["🛠", "Minimal Maintenance", "Fewer parts, longer lifespan."],
              ["🌱", "Zero Emissions", "Cleaner, quieter rides."],
              ["💰", "Higher ROI", "Perfect for personal & commercial use."],
            ].map(([icon, title, desc], i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                {...floating}
                className="rounded-2xl p-5
                bg-white/10 backdrop-blur-xl
                border border-white/20
                shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              >
                <div className="text-2xl mb-2">{icon}</div>
                <h4 className="font-semibold text-white mb-1">{title}</h4>
                <p className="text-sm text-gray-300">{desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            className="text-lg font-semibold text-emerald-400"
          >
            Switch once. Save every day.
          </motion.p>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          variants={fadeUp}
          className="rounded-3xl p-10
          bg-white/10 backdrop-blur-2xl
          border border-white/20
          shadow-[0_40px_120px_rgba(0,0,0,0.5)]"
        >
          <h3 className="text-2xl font-extrabold text-white mb-8 text-center">
            EV vs Petrol — Live Comparison
          </h3>

          <div className="space-y-10">
            <MetricBar
              label="Running Cost (per km)"
              ev={20}
              petrol={85}
              evLabel="₹1 / km"
              petrolLabel="₹6–8 / km"
              delay={0}
            />
            <MetricBar
              label="Maintenance Cost"
              ev={25}
              petrol={75}
              evLabel="Very Low"
              petrolLabel="High"
              delay={0.2}
            />
            <MetricBar
              label="Environmental Impact"
              ev={15}
              petrol={90}
              evLabel="Zero Emission"
              petrolLabel="High Pollution"
              delay={0.4}
            />
            <MetricBar
              label="Energy Efficiency"
              ev={85}
              petrol={40}
              evLabel="High Efficiency"
              petrolLabel="Low Efficiency"
              delay={0.6}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUsWithChart;
