import React, { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { products } from "./ProductsData";

const BikeShopSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const moveSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector(
      "[data-product-card]",
    ) as HTMLElement | null;

    if (!card) return;

    const gap = 48;
    const cardWidth = card.offsetWidth;

    sliderRef.current.scrollBy({
      left: direction === "right" ? cardWidth + gap : -(cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#F7F5F0] py-10 sm:py-12 lg:py-14">
      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Soft champagne glow */}
        <div
          className="
            absolute
            -right-40
            top-[-150px]
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#D6B879]/10
            blur-[120px]
          "
        />

        {/* Soft white glow */}
        <div
          className="
            absolute
            -left-40
            bottom-[-180px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-white
            blur-[120px]
          "
        />

        {/* Very subtle texture */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(#222_1px,transparent_1px),linear-gradient(90deg,#222_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />
      </div>
      {/* =====================================================
          MAIN
      ====================================================== */}
      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* =================================================
            HEADER
        ================================================== */}

        <div className="px-6 sm:px-10 lg:px-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            {/* LEFT */}
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="h-px w-9 bg-[#B18A4A]" />
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.28em]
                    text-[#9B7740]
                  "
                >
                  RIJI EV
                </span>
              </div>

              <h2
                className="
                  max-w-2xl
                  text-4xl
                  font-medium
                  leading-[0.95]
                  tracking-[-0.055em]
                  text-[#151515]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Meet the
                <br />
                <span className="text-[#B18A4A]">RIJI portfolio.</span>
              </h2>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-sm
                  leading-6
                  text-[#77736B]
                  sm:text-base
                "
              >
                Electric vehicles designed around everyday journeys, practical
                needs and modern Indian mobility.
              </p>
            </div>
            {/* CONTROLS */}
            <div className="flex items-center gap-3">
              <Link
                to="/products"
                className="
                  group
                  mr-3
                  hidden
                  items-center
                  gap-2
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#4A4640]
                  transition-colors
                  hover:text-[#A47B39]
                  sm:flex
                "
              >
                View all vehicles
                <ArrowUpRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>

              <button
                type="button"
                onClick={() => moveSlider("left")}
                aria-label="Previous vehicles"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D8D1C4]
                  bg-white
                  text-[#34312D]
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-[#B18A4A]
                  hover:bg-[#B18A4A]
                  hover:text-white
                "
              >
                <ArrowLeft size={16} strokeWidth={1.8} />
              </button>

              <button
                type="button"
                onClick={() => moveSlider("right")}
                aria-label="Next vehicles"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#171717]
                  text-white
                  shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                  transition-all
                  duration-300
                  hover:bg-[#B18A4A]
                "
              >
                <ArrowRight size={16} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>

        {/* =================================================
    PREMIUM PORTFOLIO CAROUSEL
================================================= */}
        <div className="relative mt-7 w-full">
          {/* LEFT FADE */}
          <div
            className="
      pointer-events-none
      absolute
      left-0
      top-0
      z-20
      h-full
      w-[12vw]
      bg-gradient-to-r
      from-[#F7F5F0]
      via-[#F7F5F0]/80
      to-transparent
    "
          />
          {/* RIGHT FADE */}
          <div
            className="
      pointer-events-none
      absolute
      right-0
      top-0
      z-20
      h-full
      w-[12vw]
      bg-gradient-to-l
      from-[#F7F5F0]
      via-[#F7F5F0]/80
      to-transparent
    "
          />
          <div
            ref={sliderRef}
            className="
      flex
      w-full
      snap-x
      snap-mandatory
      gap-8
      overflow-x-auto
      scroll-smooth

      px-[12vw]

      sm:gap-10
      sm:px-[10vw]

      lg:gap-12
      lg:px-[8vw]
    "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {products.map((product, index) => (
              <PortfolioProduct
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   PORTFOLIO CARD
========================================================= */
const PortfolioProduct = ({
  product,
  index,
}: {
  product: any;
  index: number;
}) => {
  return (
    <article
      data-product-card
      className="
        group
        min-w-[82%]
        snap-center

        sm:min-w-[42vw]

        lg:min-w-[30vw]
        lg:max-w-[30vw]

        xl:min-w-[28vw]
        xl:max-w-[28vw]
      "
    >
      {/* =========================================
          IMAGE
      ========================================== */}

      <div
        className="
          relative
          flex
          h-[220px]
          items-center
          justify-center
          overflow-hidden

         sm:h-[235px]
lg:h-[250px]
xl:h-[270px]
        "
      >
        {/* product */}

        <img
          src={product.image}
          alt={product.name}
          className="
            relative
            z-10
            h-[110%]
            w-[110%]
            object-contain

            transition-transform
            duration-700
            ease-out

            group-hover:scale-[1.045]
          "
        />
      </div>

      {/* =========================================
          PRODUCT DETAILS
      ========================================== */}

      <div className="mt-2 text-center">
        {/* number */}
        <p
          className="
            text-[8px]
            font-semibold
            uppercase
            tracking-[0.3em]
            text-[#B08A4A]
          "
        >
          0{index + 1} · RIJI EV
        </p>
        {/* name */}
        <h3
          className="
            mt-2
            text-[22px]
            font-semibold
            tracking-[-0.035em]
            text-[#171717]
          "
        >
          {product.name}
        </h3>
        {/* category */}
        <p
          className="
            mt-1
            text-[10px]
            text-[#8A867E]
          "
        >
          {product.category}
        </p>
        {/* price */}
        <div className="mt-4">
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-[#99938A]
            "
          >
            Starting from
          </p>

          <p
            className="
              mt-1
              text-[19px]
              font-semibold
              tracking-[-0.02em]
              text-[#191919]
            "
          >
            ₹{product.price}
          </p>
        </div>
        {/* =====================================
            BUTTONS
        ====================================== */}
        <div className="mx-auto mt-3 flex max-w-[260px] gap-2">
          <Link
            to={`/products/${product.id}`}
            className="
              flex
              h-10
              flex-1
              items-center
              justify-center
              rounded-full
              bg-[#181818]
              text-[10px]
              font-semibold
              text-white

              transition-all
              duration-300

              hover:bg-[#B08A4A]
            "
          >
            Explore
          </Link>

          <Link
            to={`/contact?vehicle=${product.id}`}
            className="
              flex
              h-10
              flex-1
              items-center
              justify-center
              rounded-full
              border
              border-[#D3CDC2]
              bg-white
              text-[10px]
              font-semibold
              text-[#25231F]

              transition-all
              duration-300

              hover:border-[#B08A4A]
              hover:text-[#B08A4A]
            "
          >
            Book Now
          </Link>
        </div>
      </div>
    </article>
  );
};

/* =========================================================
   SMALL ARROW
========================================================= */

const ArrowRightIcon = () => {
  return (
    <ArrowRight
      size={14}
      className="
        transition-transform
        duration-300
        group-hover/button:translate-x-1
      "
    />
  );
};

export default BikeShopSection;
