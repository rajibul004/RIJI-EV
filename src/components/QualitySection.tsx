import { Award, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Sparkles,
    title: "Premium-Grade Construction",
    description:
      "High-strength aluminum chassis and reinforced body panels built for Indian road conditions.",
  },
  {
    icon: Award,
    title: "Intelligent EV Engineering",
    description:
      "Efficient motors, smart battery protection, and optimized power delivery for maximum range.",
  },
  {
    icon: Clock,
    title: "Reliable Service & Support",
    description:
      "24/7 customer assistance backed by a growing nationwide service network.",
  },
];

const stats = [
  { value: "NO.1", label: "Trusted E-Rickshaw Brand" },
  { value: "50+", label: "Years Experience" },
  { value: "10K+", label: "Vehicles on Road" },
  { value: "8+", label: "Industry Awards" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const QualitySectionSafe = () => {
  return (
    <section
      className="relative h-screen overflow-hidden flex items-center
      bg-gradient-to-br from-cyan-50 via-sky-50 to-white"
    >
      {/* ================= SOFT 3D GLOW (LIGHT) ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-[360px] h-[360px] bg-cyan-400/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-20 w-[420px] h-[420px] bg-blue-400/30 blur-[140px] rounded-full" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 w-full"
      >
        {/* ================= GRID LAYOUT ================= */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div variants={fadeUp} className="max-w-xl">
            <span
              className="inline-block mb-4 px-5 py-2 rounded-full
              bg-white/70 backdrop-blur border border-cyan-200
              text-cyan-700 text-sm font-semibold"
            >
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
              RIJI EV blends decades of manufacturing expertise with modern
              electric vehicle technology to deliver durable, efficient, and
              trusted e-rickshaws across India.
            </p>

            {/* ================= STATS ================= */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/70 backdrop-blur
                  border border-white/50 px-4 py-4 text-center shadow-sm"
                >
                  <div
                    className="text-2xl font-extrabold
                    bg-gradient-to-r from-cyan-600 to-blue-600
                    bg-clip-text text-transparent"
                  >
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-gray-600">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ================= RIGHT FEATURES ================= */}
          <div className="grid gap-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-white/75 backdrop-blur
                border border-white/60 p-6
                shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl
                    bg-gradient-to-br from-cyan-600 to-blue-600
                    flex items-center justify-center text-white shrink-0"
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
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default QualitySectionSafe;
