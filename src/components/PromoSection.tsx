import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/* ================= Animations ================= */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const glowPulse: Variants = {
  animate: {
    opacity: [0.4, 0.8, 0.4],
    scale: [1, 1.05, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/* ================= Section ================= */
const PromoSection = () => {
  return (
    <section className="relative overflow-hidden py-28 bg-dark-surface text-dark-surface-foreground">
      {/* ===== AI Glow Background ===== */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          variants={glowPulse}
          animate="animate"
          className="absolute top-[-120px] left-[-120px]
          w-[420px] h-[420px] rounded-full
          bg-electric-blue/30 blur-[160px]"
        />
        <motion.div
          variants={glowPulse}
          animate="animate"
          className="absolute bottom-[-120px] right-[-120px]
          w-[520px] h-[520px] rounded-full
          bg-cyan-400/30 blur-[180px]"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 text-center"
      >
        <motion.div
          variants={fadeUp}
          className="max-w-3xl mx-auto
          rounded-3xl p-12
          bg-white/5 backdrop-blur-2xl
          border border-white/15
          shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
        >
          {/* Eyebrow */}
          <motion.span
            variants={fadeUp}
            className="inline-block mb-4 px-5 py-2 rounded-full
            bg-electric-blue/10 border border-electric-blue/30
            text-electric-blue text-xs tracking-widest uppercase font-semibold"
          >
            Limited Time Offer
          </motion.span>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            Grab Exciting Deals &
            <br />
            <span
              className="bg-gradient-to-r from-electric-blue via-cyan-400 to-blue-500
              bg-clip-text text-transparent"
            >
              Special Promos Today
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-gray-300 text-lg leading-relaxed"
          >
            Limited-time offers on our premium electric vehicle lineup. Upgrade
            your ride, save more every day, and experience the future of
            sustainable mobility.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="mt-10"
          >
            <Button
              size="lg"
              className="px-14 py-7 text-lg font-bold text-white
              rounded-full
              bg-gradient-to-r from-electric-blue via-cyan-500 to-blue-600
              shadow-[0_25px_80px_rgba(56,189,248,0.6)]
              hover:shadow-[0_35px_110px_rgba(56,189,248,0.9)]
              transition-all"
            >
              Shop Deals Now
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PromoSection;
