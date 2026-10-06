import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { products } from "../components/ProductsData";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "918617616397";

type FilterType = "all" | "scooty" | "toto";

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") return products;

    return products.filter((product) => {
      const category = product.category.toLowerCase();

      if (activeFilter === "scooty") {
        return category.includes("scoot") || category.includes("scooter");
      }

      if (activeFilter === "toto") {
        return (
          category.includes("toto") ||
          category.includes("rickshaw") ||
          category.includes("e-rickshaw")
        );
      }

      return true;
    });
  }, [activeFilter]);

  const getWhatsAppLink = (productName: string) => {
    const message = `Hello RIJI EV, I am interested in ${productName}. Please share more details.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;
  };

  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#171717]">
      {/* =====================================================
          PAGE HEADER
      ===================================================== */}
      <section className="border-b border-[#D8D0C2]">
        <div className="mx-auto max-w-[1450px] px-6 pb-8 pt-28 sm:px-10 lg:px-16 lg:pb-10 lg:pt-36">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            {/* Heading */}
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-[#B08A4A]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8A8174]">
                  RIJI ELECTRIC
                </span>
              </div>

              <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Our vehicles.
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[#706B62] sm:text-base">
                Electric mobility designed for everyday India. Explore the RIJI
                range.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <FilterButton
                active={activeFilter === "all"}
                onClick={() => setActiveFilter("all")}
              >
                All vehicles
              </FilterButton>

              <FilterButton
                active={activeFilter === "scooty"}
                onClick={() => setActiveFilter("scooty")}
              >
                E-Scooters
              </FilterButton>

              <FilterButton
                active={activeFilter === "toto"}
                onClick={() => setActiveFilter("toto")}
              >
                E-Rickshaws
              </FilterButton>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT ROWS
      ===================================================== */}
      <section className="mx-auto max-w-[1450px] px-6 py-8 sm:px-10 lg:px-16 lg:py-12">
        <div className="space-y-5">
          {filteredProducts.map((product, index) => (
            <ProductRow
              key={product.id}
              product={product}
              index={index}
              whatsappLink={getWhatsAppLink(product.name)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="border border-[#D8D0C2] py-20 text-center">
            <p className="text-sm text-[#706B62]">
              No vehicles found in this category.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

/* =========================================================
   PRODUCT ROW
========================================================= */

function ProductRow({
  product,
  index,
  whatsappLink,
}: {
  product: (typeof products)[number];
  index: number;
  whatsappLink: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        overflow-hidden
        border
        border-[#D8D0C2]
        bg-[#F8F5EF]
        transition-colors
        duration-500
        hover:border-[#B9A98D]
      "
    >
      <div className="grid min-h-[390px] grid-cols-1 lg:grid-cols-[42%_58%]">
        {/* =================================================
            LEFT — PRODUCT INFORMATION
        ================================================= */}
        <div className="relative flex flex-col justify-between p-7 sm:p-9 lg:p-11">
          {/* Product number */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] tracking-[0.18em] text-[#9A9184]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9A9184]">
              {product.categoryLabel}
            </span>
          </div>

          {/* Main content */}
          <div className="my-12">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B08A4A]">
              RIJI ELECTRIC
            </p>

            <h2 className="font-serif text-4xl leading-none tracking-[-0.035em] sm:text-5xl lg:text-[58px]">
              {product.name}
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#706B62]">
              {product.categoryLabel} built for comfortable, practical everyday
              mobility.
            </p>

            <div className="mt-7">
              <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#91887A]">
                Starting from
              </span>

              <span className="mt-1 block text-xl font-medium tracking-[-0.02em]">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to={`/products/${product.id}`}
              className="
                inline-flex
                h-11
                items-center
                gap-3
                bg-[#171717]
                px-5
                text-xs
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white
                transition-all
                duration-300
                hover:bg-[#B08A4A]
              "
            >
              Explore
              <ArrowUpRight size={15} strokeWidth={1.8} />
            </Link>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                h-11
                items-center
                gap-3
                border
                border-[#CFC5B5]
                px-5
                text-xs
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#292722]
                transition-all
                duration-300
                hover:border-[#171717]
              "
            >
              Enquire
              <ArrowRight size={15} strokeWidth={1.8} />
            </a>
          </div>
        </div>

        {/* =================================================
            RIGHT — PRODUCT IMAGE
            ALL PRODUCTS STAY ON RIGHT
        ================================================= */}
        <div
          className="
            relative
            flex
            min-h-[300px]
            items-center
            justify-center
            overflow-hidden
            border-t
            border-[#D8D0C2]
            bg-[#F1ECE2]
            lg:min-h-[390px]
            lg:border-l
            lg:border-t-0
          "
        >
          {/* Small category label */}
          <div className="absolute right-6 top-6 z-10 sm:right-8 sm:top-8">
            <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#9A9184]">
              {product.category}
            </span>
          </div>

          {/* Image */}
          <motion.img
            src={product.image}
            alt={product.name}
            loading={index > 1 ? "lazy" : "eager"}
            className="
              relative
              z-[2]
              max-h-[270px]
              w-[82%]
              object-contain
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.04]
              sm:max-h-[310px]
              lg:max-h-[340px]
              lg:w-[78%]
            "
          />

          {/* Very subtle floor line */}
          <div
            className="
              absolute
              bottom-12
              left-[12%]
              right-[12%]
              h-px
              bg-[#D4CABB]
            "
          />

          {/* Product number */}
          <div className="absolute bottom-5 right-6 sm:right-8">
            <span className="font-serif text-5xl leading-none text-[#DED6C8] sm:text-6xl">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   FILTER BUTTON
========================================================= */

function FilterButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        h-10
        border
        px-4
        text-[10px]
        font-semibold
        uppercase
        tracking-[0.14em]
        transition-all
        duration-300
        ${
          active
            ? "border-[#171717] bg-[#171717] text-white"
            : "border-[#D8D0C2] bg-transparent text-[#6F695F] hover:border-[#AFA391] hover:text-[#171717]"
        }
      `}
    >
      {children}
    </button>
  );
}
