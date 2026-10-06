import React, { useEffect, useState } from "react";
import bootspaceImage from "../assets/bootspace.png";
import comfortImage from "../assets/comfort.png";
import technologyImage from "../assets/technology.png";
import performanceImage from "../assets/performance.png";

type Feature = {
  id: string;
  number: string;
  title: string;
  description: string;
  points: string[];
  image: string;
};

const features: Feature[] = [
  {
    id: "practicality",
    number: "01",
    title: "Practicality",
    description:
      "Designed around the way you actually move every day, with useful space and thoughtful everyday details.",
    points: ["Storage", "Passenger space", "Everyday utility"],
    image: bootspaceImage,
  },
  {
    id: "comfort",
    number: "02",
    title: "Comfort",
    description:
      "A composed ride with comfortable seating and suspension designed for everyday journeys.",
    points: ["Comfortable seating", "Suspension", "Ride experience"],
    image: comfortImage,
  },
  {
    id: "technology",
    number: "03",
    title: "Technology",
    description:
      "Useful technology that keeps the driving experience simple, connected and intuitive.",
    points: ["Digital display", "Smart controls", "Useful technology"],
    image: technologyImage,
  },
  {
    id: "performance",
    number: "04",
    title: "Electric Performance",
    description:
      "Efficient electric performance designed to make everyday mobility smoother and more practical.",
    points: ["Electric motor", "Battery", "Efficient mobility"],
    image: performanceImage,
  },
];

const WhyRijiEV: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const activeFeature = features[activeIndex];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      },
    );

    const section = document.getElementById("why-riji");

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-riji"
      className="overflow-hidden bg-[#F7F7F5] px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* ------------------------------------------------ */}
        {/* HEADER */}
        {/* ------------------------------------------------ */}

        <div
          className={`max-w-3xl transform transition-all duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#B08A4A]">
            Why RIJI EV
          </p>

          <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.055em] text-[#151515] sm:text-5xl lg:text-7xl">
            Built around
            <br />
            <span className="text-[#B08A4A]">everyday mobility.</span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-[#77746D] sm:text-base">
            Everything you need for everyday journeys, thoughtfully designed
            around practicality, comfort, technology and electric performance.
          </p>
        </div>

        {/* ------------------------------------------------ */}
        {/* MAIN FEATURE */}
        {/* ------------------------------------------------ */}

        <div
          className={`mt-10 transform transition-all delay-150 duration-700 ease-out lg:mt-12 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative h-[500px] overflow-hidden rounded-[1.75rem] bg-[#ECEBE7] sm:h-[520px] lg:h-[560px]">
            {/* IMAGE */}
            <div className="absolute inset-0 lg:left-[40%]">
              {features.map((feature, index) => (
                <img
                  key={feature.id}
                  src={feature.image}
                  alt={feature.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                    activeIndex === index
                      ? "scale-100 opacity-100"
                      : "scale-[1.05] opacity-0"
                  }`}
                />
              ))}

              {/* subtle image overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ECEBE7] via-transparent to-transparent lg:block" />
            </div>
            {/* CONTENT */}
            <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8 lg:w-[48%] lg:p-10">
              <div>
                {/* NUMBER */}
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-[#B08A4A]">
                    {activeFeature.number}
                  </span>

                  <div className="h-px w-12 bg-[#CFCBC2]" />
                </div>

                {/* TITLE */}
                <div
                  key={activeFeature.id}
                  className="animate-feature-text mt-10"
                >
                  <h3 className="max-w-md text-4xl font-medium leading-[0.95] tracking-[-0.045em] text-[#151515] sm:text-5xl lg:text-6xl">
                    {activeFeature.title}
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-6 text-[#68655F] sm:text-base">
                    {activeFeature.description}
                  </p>

                  {/* POINTS */}
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                    {activeFeature.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2 text-xs font-medium text-[#55524C]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#B08A4A]" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* BOTTOM */}
              <div className="mt-6">
                {/* PROGRESS */}
                <div className="mb-5 flex items-center gap-2">
                  {features.map((feature, index) => (
                    <button
                      key={feature.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`View ${feature.title}`}
                      className="group h-1 flex-1 overflow-hidden rounded-full bg-[#D8D5CE]"
                    >
                      <span
                        className={`block h-full origin-left rounded-full bg-[#B08A4A] transition-transform duration-500 ${
                          activeIndex === index ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                {/* FEATURE NAV */}
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {features.map((feature, index) => (
                    <button
                      key={feature.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`group shrink-0 rounded-full px-4 py-2.5 text-xs font-medium transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-[#151515] text-white"
                          : "bg-white/70 text-[#77746D] hover:bg-white hover:text-[#151515]"
                      }`}
                    >
                      <span className="mr-2 text-[10px] opacity-50">
                        {feature.number}
                      </span>

                      {feature.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* IMAGE NUMBER */}
            <div className="absolute right-7 top-7 z-10 hidden rounded-full bg-white/80 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#77746D] backdrop-blur-sm lg:block">
              RIJI EV
            </div>
          </div>
        </div>

        {/* ------------------------------------------------ */}
        {/* BOTTOM STATEMENT */}
        {/* ------------------------------------------------ */}

        <div
          className={`mt-10 flex flex-col justify-between gap-6 border-t border-[#DDDCD7] pt-7 transition-all delay-300 duration-700 sm:flex-row sm:items-center ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="max-w-lg text-sm leading-6 text-[#77746D]">
            From the way you sit to the way you move, every detail should
            contribute to a better everyday journey.
          </p>

          <a
            href="/products"
            className="group flex w-fit items-center gap-3 text-sm font-medium text-[#151515]"
          >
            Explore our vehicles
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D5D2CA] transition-all duration-300 group-hover:border-[#B08A4A] group-hover:bg-[#B08A4A] group-hover:text-white">
              →
            </span>
          </a>
        </div>
      </div>

      {/* ------------------------------------------------ */}
      {/* LOCAL ANIMATION */}
      {/* ------------------------------------------------ */}

      <style>{`
        @keyframes featureText {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-feature-text {
          animation: featureText 450ms ease-out both;
        }

        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default WhyRijiEV;
