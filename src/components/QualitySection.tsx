import { Award, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Sparkles,
    title: "Premium-Grade Construction",
    description:
      "Built using high-strength aluminum chassis and reinforced body panels for long-lasting performance on Indian roads.",
  },
  {
    icon: Award,
    title: "Intelligent EV Engineering",
    description:
      "Advanced motor efficiency, smart battery protection, and optimized power delivery for maximum range.",
  },
  {
    icon: Clock,
    title: "Reliable Service & Support",
    description:
      "24/7 customer assistance with a growing nationwide service and spare network.",
  },
];

const stats = [
  { value: "NO.1", label: "Trusted E-Rickshaw Brand" },
  { value: "50+", label: "Years of Manufacturing Experience" },
  { value: "10K+", label: "Vehicles on Road" },
  { value: "8+", label: "Industry Recognitions" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const QualitySectionSafe = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* ================= 3D GLOW BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-cyan-400/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] right-[-150px] w-[500px] h-[500px] bg-blue-500/40 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-120px] left-[20%] w-[420px] h-[420px] bg-indigo-500/30 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-xl" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6"
      >
        {/* ================= HEADER ================= */}
        <motion.div variants={fadeUp} className="max-w-3xl mb-16">
          <span className="inline-block mb-4 px-5 py-2 rounded-full bg-white/60 backdrop-blur border border-white/40 text-cyan-700 text-sm font-semibold">
            Why RIJI EV
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Classic Manufacturing
            <br />
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Powered by Modern EV Innovation
            </span>
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            RIJI EV combines decades of manufacturing expertise with modern
            electric vehicle technology to deliver safe, durable, and efficient
            e-rickshaws trusted by thousands of customers.
          </p>
        </motion.div>

        {/* ================= VALUE PROPOSITION (NEW TEXT SECTION) ================= */}
        <motion.div variants={fadeUp} className="mb-16 max-w-4xl text-gray-700">
          <p className="text-lg leading-relaxed">
            From precision-engineered components to rigorous quality checks,
            every RIJI EV vehicle is designed to minimize downtime, reduce
            maintenance costs, and maximize driver comfort. Our commitment goes
            beyond manufacturing — we build long-term partnerships with our
            customers.
          </p>
        </motion.div>

        {/* ================= FEATURES ================= */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white/60 backdrop-blur-xl border border-white/40 p-7 shadow-sm hover:shadow-xl transition"
            >
              <div className="w-12 h-12 mb-5 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center text-white">
                <f.icon className="w-6 h-6" />
              </div>

              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {f.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= STATS ================= */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/40 p-10 text-center"
        >
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-gray-600">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default QualitySectionSafe;
