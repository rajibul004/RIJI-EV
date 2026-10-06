import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

import scooter from "@/assets/Glossy Yellow Electric Scooter.png";

const HeroLanding: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-[#F5F1E8] text-[#171717]">
      {/* =====================================================
          ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* soft spotlight */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            right-[3%]
            top-[8%]
            h-[680px]
            w-[680px]
            rounded-full
            bg-[#E9C95F]/20
            blur-[110px]
            lg:h-[760px]
            lg:w-[760px]
          "
        />

        {/* outer orbital ring */}

        <motion.div
          initial={{ opacity: 0, rotate: -18, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{
            duration: 1.4,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            -right-[180px]
            top-[2%]
            h-[760px]
            w-[760px]
            rounded-full
            border-[48px]
            border-[#B88A43]/10
            lg:h-[850px]
            lg:w-[850px]
          "
        />

        {/* inner orbital ring */}

        <div
          className="
            absolute
            right-[0]
            top-[17%]
            h-[560px]
            w-[560px]
            rounded-full
            border
            border-[#B88A43]/20
            lg:h-[620px]
            lg:w-[620px]
          "
        />

        {/* fine grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            [background-image:linear-gradient(#171717_1px,transparent_1px),linear-gradient(90deg,#171717_1px,transparent_1px)]
            [background-size:90px_90px]
          "
        />

        {/* bottom light */}

        <div
          className="
            absolute
            -bottom-[240px]
            -left-[150px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-white
            blur-[100px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[calc(100vh-72px)]
          max-w-[1550px]
          grid-cols-1
          lg:grid-cols-[0.82fr_1.18fr]
        "
      >
        {/* =================================================
            LEFT — BRAND MESSAGE
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            z-20
            flex
            items-center
            px-6
            py-16
            sm:px-10
            lg:px-14
            xl:px-20
          "
        >
          <div className="w-full max-w-[560px]">
            {/* eyebrow */}

            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-[#B4883E]" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.32em]
                  text-[#987031]
                "
              >
                RIJI ELECTRIC
              </span>

              <span className="h-1 w-1 rounded-full bg-[#B4883E]" />

              <span className="text-[9px] uppercase tracking-[0.2em] text-[#9A958B]">
                01
              </span>
            </div>

            {/* =================================================
                MAIN TYPOGRAPHY
            ================================================== */}

            <h1
              className="
                text-[64px]
                font-medium
                leading-[0.82]
                tracking-[-0.075em]
                sm:text-[78px]
                lg:text-[88px]
                xl:text-[106px]
              "
            >
              Move
              <br />
              <span className="relative inline-block text-[#B4883E]">
                beyond.
                {/* underline accent */}
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "72%" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    absolute
                    -bottom-2
                    left-1
                    h-[2px]
                    bg-[#B4883E]
                  "
                />
              </span>
            </h1>

            {/* supporting copy */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              className="
                mt-8
                max-w-[430px]
                text-[15px]
                leading-7
                text-[#706B62]
                sm:text-base
              "
            >
              Electric mobility designed around everyday India. Refined comfort,
              effortless performance and a smarter way to move.
            </motion.p>

            {/* =================================================
                CTA
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.6,
              }}
              className="mt-8 flex items-center gap-5"
            >
              <Link
                to="/products"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  rounded-full
                  bg-[#171717]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_18px_40px_rgba(0,0,0,0.14)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#B4883E]
                  hover:shadow-[0_20px_50px_rgba(180,136,62,0.22)]
                "
              >
                Explore vehicles
                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                  "
                >
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>

              <Link
                to="/about"
                className="
                  group
                  hidden
                  items-center
                  gap-2
                  text-xs
                  font-semibold
                  text-[#666158]
                  sm:flex
                "
              >
                Discover RIJI
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>

            {/* =================================================
                BRAND BENEFITS
            ================================================== */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.85,
              }}
              className="
                mt-11
                grid
                max-w-[500px]
                grid-cols-3
                border-t
                border-[#D5CCBC]
                pt-5
              "
            >
              {/* item */}

              <div className="pr-4">
                <BatteryCharging
                  size={18}
                  strokeWidth={1.5}
                  className="text-[#AD813A]"
                />

                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#36332E]">
                  Electric
                </p>

                <p className="mt-1 text-[10px] leading-4 text-[#8B867D]">
                  Efficient mobility
                </p>
              </div>

              {/* item */}

              <div className="border-l border-[#D5CCBC] px-4">
                <Sparkles
                  size={18}
                  strokeWidth={1.5}
                  className="text-[#AD813A]"
                />

                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#36332E]">
                  Refined
                </p>

                <p className="mt-1 text-[10px] leading-4 text-[#8B867D]">
                  Comfort first
                </p>
              </div>

              {/* item */}

              <div className="border-l border-[#D5CCBC] pl-4">
                <ShieldCheck
                  size={18}
                  strokeWidth={1.5}
                  className="text-[#AD813A]"
                />

                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#36332E]">
                  Reliable
                </p>

                <p className="mt-1 text-[10px] leading-4 text-[#8B867D]">
                  Made for India
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* =================================================
            RIGHT — PRODUCT STAGE
        ================================================== */}

        <div
          className="
            relative
            flex
            min-h-[560px]
            items-center
            justify-center
            lg:min-h-[calc(100vh-72px)]
          "
        >
          {/* =================================================
              ROTATING ORBIT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, rotate: -25 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{
              duration: 1.4,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              absolute
              right-[4%]
              top-[10%]
              h-[650px]
              w-[650px]
              rounded-full
              border-[2px]
              border-dashed
              border-[#B4883E]/20
              lg:h-[720px]
              lg:w-[720px]
            "
          />

          {/* orbit marker */}

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
            className="
              absolute
              right-[7%]
              top-[28%]
              z-20
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-[#B4883E]
              shadow-[0_0_25px_rgba(180,136,62,0.4)]
            "
          >
            <span className="h-2 w-2 rounded-full bg-white" />
          </motion.div>

          {/* =================================================
              PRODUCT GLOW
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              absolute
              right-[7%]
              top-[20%]
              h-[500px]
              w-[500px]
              rounded-full
              bg-[#F1D45F]/20
              blur-[80px]
              lg:h-[620px]
              lg:w-[620px]
            "
          />

          {/* =================================================
              HUGE WATERMARK
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              right-[5%]
              top-[7%]
              select-none
              text-[220px]
              font-black
              leading-none
              tracking-[-0.14em]
              text-[#D0BA91]/20
              sm:text-[270px]
              lg:text-[330px]
            "
          >
            R
          </div>

          {/* =================================================
              FLOOR
          ================================================== */}

          <div
            className="
              absolute
              bottom-[8%]
              left-[5%]
              right-[2%]
              h-px
              bg-[#C8BCA9]
            "
          />

          {/* =================================================
              SHADOW
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0.6,
            }}
            animate={{
              opacity: 0.3,
              scaleX: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.7,
            }}
            className="
              absolute
              bottom-[7%]
              right-[6%]
              h-8
              w-[65%]
              rounded-full
              bg-black
              blur-2xl
            "
          />

          {/* =================================================
              SCOOTER
          ================================================== */}

          <motion.img
            src={scooter}
            alt="RIJI EV electric scooter"
            initial={{
              opacity: 0,
              x: 90,
              scale: 0.86,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.25,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              scale: 1.015,
            }}
            className="
              relative
              z-10
              h-[460px]
              w-auto
              max-w-[95%]
              object-contain
              drop-shadow-[0_35px_35px_rgba(0,0,0,0.18)]
              sm:h-[560px]
              lg:h-[650px]
              xl:h-[720px]
            "
          />

          {/* =================================================
              FLOATING SPEC PILL
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1,
            }}
            className="
              absolute
              left-[4%]
              top-[26%]
              z-20
              hidden
              lg:block
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
                rounded-full
                border
                border-[#C5A15E]/30
                bg-[#FAF7EF]/80
                px-4
                py-2.5
                shadow-[0_15px_35px_rgba(0,0,0,0.08)]
                backdrop-blur-md
              "
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EDE0C5]">
                <Zap size={13} className="text-[#A77B38]" />
              </div>

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#987031]">
                  Electric
                </p>

                <p className="mt-0.5 text-[10px] font-semibold text-[#38342D]">
                  Built for everyday
                </p>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              PRODUCT SIGNATURE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 1.05,
              duration: 0.6,
            }}
            className="
              absolute
              bottom-[14%]
              right-[6%]
              z-20
              hidden
              lg:block
            "
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-[#B58A43]" />

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#9A7337]">
                  RIJI EV
                </p>

                <p className="mt-1 text-xs font-semibold text-[#38342D]">
                  Designed for everyday journeys
                </p>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              VERTICAL LABEL
          ================================================== */}

          <div
            className="
              absolute
              bottom-[22%]
              right-3
              hidden
              rotate-90
              text-[8px]
              font-bold
              uppercase
              tracking-[0.35em]
              text-[#9A7337]/60
              lg:block
            "
          >
            ELECTRIC MOBILITY / RIJI
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.4,
        }}
        className="
          absolute
          bottom-5
          left-1/2
          z-30
          hidden
          -translate-x-1/2
          items-center
          gap-3
          lg:flex
        "
      >
        <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#8D867B]">
          Discover RIJI
        </span>

        <span className="h-px w-12 bg-[#C6B9A5]" />

        <ArrowRight size={11} className="text-[#9B753C]" />
      </motion.div>
    </section>
  );
};

export default HeroLanding;
