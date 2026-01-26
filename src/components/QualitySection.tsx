import { Award, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/* ================= ANIMATIONS ================= */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.25 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const floatSlow: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/* ================= DATA ================= */
const features = [
  {
    icon: Sparkles,
    title: "Premium-Grade Construction",
    description:
      "High-strength chassis and reinforced body engineered for Indian road conditions.",
  },
  {
    icon: Award,
    title: "Intelligent EV Engineering",
    description:
      "Efficient motors, smart battery protection, and optimized power delivery.",
  },
  {
    icon: Clock,
    title: "Reliable Service & Support",
    description:
      "24/7 assistance with a growing nationwide service and spare network.",
  },
];

const stats = [
  { value: "NO.1", label: "Trusted E-Rickshaw Brand" },
  { value: "50+", label: "Years of Experience" },
  { value: "10K+", label: "Vehicles on Road" },
  { value: "8+", label: "Industry Awards" },
];

/* ================= SECTION ================= */
const QualitySectionSafe = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center
      bg-gradient-to-br from-sky-50 via-cyan-50 to-white"
    >
      {/* ===== AI GLOW BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-[-120px] left-[-120px]
          w-[420px] h-[420px] bg-cyan-400/30 blur-[160px] rounded-full"
        />
        <div
          className="absolute bottom-[-120px] right-[-80px]
          w-[480px] h-[480px] bg-blue-400/30 blur-[180px] rounded-full"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* ================= LEFT ================= */}
          <motion.div variants={fadeUp} className="max-w-xl space-y-6">
            <span
              className="inline-block px-5 py-2 rounded-full
              bg-white/70 backdrop-blur-xl
              border border-cyan-200/60
              text-cyan-700 text-xs tracking-widest uppercase font-semibold"
            >
              Why RIJI EV
            </span>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Classic Manufacturing
              <br />
              <span
                className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600
                bg-clip-text text-transparent"
              >
                Powered by Modern EV Innovation
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              RIJI EV combines decades of manufacturing expertise with modern
              electric vehicle technology to deliver safe, durable, and
              future-ready mobility solutions.
            </p>

            {/* ===== STATS ===== */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl p-5 text-center
                  bg-white/70 backdrop-blur-xl
                  border border-white/60
                  shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
                >
                  <div
                    className="text-2xl font-extrabold
                    bg-gradient-to-r from-cyan-600 to-blue-600
                    bg-clip-text text-transparent"
                  >
                    {s.value}
                  </div>
                  <p className="text-xs font-semibold text-gray-600 mt-1">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div className="grid gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                animate="animate"
                {...floatSlow}
                whileHover={{ scale: 1.04 }}
                className="rounded-3xl p-6
                bg-white/80 backdrop-blur-2xl
                border border-white/70
                shadow-[0_30px_80px_rgba(0,0,0,0.15)]"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl
                    bg-gradient-to-br from-cyan-600 to-blue-600
                    flex items-center justify-center text-white shrink-0
                    shadow-[0_10px_30px_rgba(59,130,246,0.5)]"
                  >
                    <f.icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {f.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default QualitySectionSafe;
