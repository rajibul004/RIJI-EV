import React, { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import headlightImage from "../assets/features/headlight.jpg";
import bootspaceImage from "../assets/features/bootspace.jpg";
import suspensionImage from "../assets/features/suspension.jpg";
import displayImage from "../assets/features/display.jpg";
import batteryImage from "../assets/features/battery.jpg";
import tyreImage from "../assets/features/tyre.jpg";

interface Feature {
  id: number;
  title: string;
  label: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    id: 1,
    label: "01",
    title: "LED Headlight",
    description:
      "Bright, efficient illumination designed to give you greater confidence on every journey.",
    image: headlightImage,
  },
  {
    id: 2,
    label: "02",
    title: "Generous Boot Space",
    description:
      "Thoughtfully designed storage that makes everyday errands and longer journeys easier.",
    image: bootspaceImage,
  },
  {
    id: 3,
    label: "03",
    title: "Comfort Suspension",
    description:
      "A balanced suspension setup designed to keep everyday rides composed and comfortable.",
    image: suspensionImage,
  },
  {
    id: 4,
    label: "04",
    title: "Smart Display",
    description:
      "Important ride information stays clear and easy to read at a glance.",
    image: displayImage,
  },
  {
    id: 5,
    label: "05",
    title: "Long-Range Battery",
    description:
      "Reliable energy designed around the demands of everyday electric mobility.",
    image: batteryImage,
  },
  {
    id: 6,
    label: "06",
    title: "Road-Ready Tyres",
    description:
      "Confident road contact and dependable grip for everyday conditions.",
    image: tyreImage,
  },
];

const ProductCoreFeatures: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const amount = sliderRef.current.clientWidth * 0.72;

    sliderRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="overflow-hidden bg-[#F7F7F5] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#B08A4A]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9A8152]">
                Built around you
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.045em] text-[#151515] sm:text-5xl lg:text-6xl">
              Features that make
              <br />
              <span className="text-[#B08A4A]">every ride better.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#77746D] sm:text-base">
              Every detail has a purpose — from the way you see the road to the
              way you carry what matters.
            </p>
          </div>

          {/* DESKTOP CONTROLS */}

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous features"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#D8D6D0]
                bg-white
                text-[#55524C]
                transition-all
                duration-200
                hover:border-[#B08A4A]
                hover:bg-[#B08A4A]
                hover:text-white
              "
            >
              <ArrowLeft size={17} />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next features"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#D8D6D0]
                bg-white
                text-[#55524C]
                transition-all
                duration-200
                hover:border-[#B08A4A]
                hover:bg-[#B08A4A]
                hover:text-white
              "
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        {/* =====================================================
            FEATURE SLIDER
        ====================================================== */}

        <div
          ref={sliderRef}
          className="
            mt-12
            flex
            snap-x
            snap-mandatory
            gap-5
            overflow-x-auto
            scroll-smooth
            pb-5
            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {features.map((feature) => (
            <article
              key={feature.id}
              className="
                group
                relative
                min-w-[82%]
                snap-start
                overflow-hidden
                rounded-[1.5rem]
                bg-white
                sm:min-w-[58%]
                lg:min-w-[38%]
                xl:min-w-[31%]
              "
            >
              {/* IMAGE */}

              <div className="relative aspect-[4/4.5] overflow-hidden bg-[#EDECE8]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  loading="lazy"
                  decoding="async"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.04]
                  "
                />

                {/* image overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                {/* NUMBER */}

                <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/10 text-[10px] font-semibold text-white backdrop-blur-sm">
                  {feature.label}
                </div>

                {/* FEATURE TITLE ON IMAGE */}

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/65">
                    Core feature
                  </p>

                  <h3 className="mt-1 text-2xl font-medium tracking-[-0.03em] text-white sm:text-3xl">
                    {feature.title}
                  </h3>
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-6 sm:p-7">
                <p className="text-sm leading-6 text-[#77746D]">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9A958A]">
                    RIJI EV
                  </span>

                  <button
                    type="button"
                    className="
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-semibold
                      text-[#151515]
                      transition-colors
                      duration-200
                      hover:text-[#B08A4A]
                    "
                  >
                    Explore
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================================
            MOBILE HINT
        ====================================================== */}

        <div className="mt-3 flex items-center justify-between lg:hidden">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#A09D96]">
            Swipe to explore
          </p>

          <div className="flex gap-1">
            <span className="h-1 w-6 rounded-full bg-[#B08A4A]" />
            <span className="h-1 w-1 rounded-full bg-[#D6D2C9]" />
            <span className="h-1 w-1 rounded-full bg-[#D6D2C9]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCoreFeatures;
