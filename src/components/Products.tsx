import { useMemo, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  MessageCircle,
  Zap,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../components/ProductsData";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "918617616397";

type FilterType = "all" | "scooty" | "toto";

const filters: { label: string; value: FilterType }[] = [
  { label: "All vehicles", value: "all" },
  { label: "E-Scooters", value: "scooty" },
  { label: "E-Rickshaws", value: "toto" },
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") return products;

    return products.filter((product) => {
      const category = product.category.toLowerCase();

      if (activeFilter === "scooty") {
        return category.includes("scoot") || category.includes("scooter");
      }

      return (
        category.includes("toto") ||
        category.includes("rickshaw") ||
        category.includes("e-rickshaw")
      );
    });
  }, [activeFilter]);

  const getWhatsAppLink = (productName: string) => {
    const message = `Hello RIJI EV, I am interested in ${productName}. Please share more details.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFD] text-[#101828]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200/80">
        <div className="pointer-events-none absolute -right-40 -top-36 h-[360px] w-[360px] rounded-full bg-blue-200/30 blur-[90px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-56 w-56 rounded-full bg-sky-100/50 blur-[70px]" />

        <div className="relative mx-auto max-w-[1440px] px-5 pb-6 pt-24 sm:px-8 sm:pb-8 sm:pt-28 lg:px-14 lg:pb-8 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 shadow-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                <Zap size={11} fill="currentColor" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600">
                Discover RIJI Electric
              </span>
            </div>

            <div className="grid items-end gap-5 lg:grid-cols-[1fr_auto]">
              <div>
                <h1 className="max-w-4xl text-[clamp(2.7rem,6.5vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.075em]">
                  Find your
                  <br />
                  <span className="bg-gradient-to-r from-[#0165F6] via-[#2483FA] to-[#57B7F7] bg-clip-text text-transparent">
                    electric drive.
                  </span>
                </h1>

                <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500 sm:text-base">
                  Explore the RIJI EV collection. Find a vehicle that fits your
                  everyday journeys and your way of moving forward.
                </p>
              </div>

              <div className="flex items-center gap-3 lg:pb-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-white text-blue-600 shadow-sm">
                  <Sparkles size={19} />
                </div>
                <div>
                  <p className="text-xl font-semibold tracking-tight">
                    {String(products.length).padStart(2, "0")}
                  </p>
                  <p className="text-xs text-slate-500">Vehicles to explore</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATALOG */}
      <section className="mx-auto max-w-[1440px] px-5 py-6 sm:px-8 sm:py-8 lg:px-14 lg:py-8">
        <div className="mb-5 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
              The collection
            </p>
            <h2 className="text-2xl font-semibold tracking-[-0.045em] sm:text-3xl">
              Explore our vehicles
            </h2>
            <p className="mt-1.5 text-sm text-slate-500">
              Find the right vehicle for your journey.
            </p>
          </div>

          <div
            className="flex w-fit max-w-full flex-wrap gap-1 rounded-xl border border-slate-200/80 bg-white p-1 shadow-sm"
            aria-label="Filter vehicles"
          >
            {filters.map((filter) => {
              const active = activeFilter === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  aria-pressed={active}
                  className={`rounded-lg px-3 py-2 text-[11px] font-semibold transition-all duration-200 sm:px-4 ${
                    active
                      ? "bg-[#101828] text-white shadow-sm"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-5"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              whatsappLink={getWhatsAppLink(product.name)}
            />
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
              <Zap size={21} />
            </div>
            <h3 className="mt-4 text-lg font-semibold">No vehicles found</h3>
            <p className="mt-1.5 text-sm text-slate-500">
              Try another category to explore our collection.
            </p>
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View all vehicles
            </button>
          </div>
        )}
      </section>

      {/* DEALERSHIP CTA */}
      <section className="mx-auto max-w-[1440px] px-5 pb-8 sm:px-8 sm:pb-10 lg:px-14 lg:pb-10">
        <div className="relative overflow-hidden rounded-2xl bg-[#091629] px-6 py-7 text-white sm:px-10 sm:py-9 lg:px-12 lg:py-10">
          <div className="pointer-events-none absolute -right-16 -top-28 h-72 w-72 rounded-full border border-white/[0.07]" />
          <div className="pointer-events-none absolute -right-2 -top-16 h-44 w-44 rounded-full border border-white/[0.07]" />
          <div className="pointer-events-none absolute -right-10 bottom-[-120px] h-64 w-64 rounded-full bg-blue-600/20 blur-[65px]" />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <div className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
                <Zap size={13} />
                Join the journey
              </div>
              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">
                Grow with
                <br className="sm:hidden" /> RIJI EV.
              </h2>
              <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                Interested in bringing RIJI EV to your market? Explore
                dealership opportunities with our team.
              </p>
            </div>

            <Link
              to="/dealership"
              className="group inline-flex min-h-11 w-fit shrink-0 items-center gap-3 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[#101828] transition-all duration-300 hover:bg-blue-50"
            >
              Become a dealer
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* PRODUCT CARD */

function ProductCard({
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
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.07, 0.21),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex min-w-0 flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_55px_-28px_rgba(15,23,42,0.22)]"
    >
      {/* IMAGE AREA */}
      <div className="relative flex h-[260px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5F8FD] via-[#EDF3FC] to-[#F8FAFD] sm:h-[285px]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/30 blur-3xl transition duration-500 group-hover:bg-blue-300/40" />

        <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-3 py-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-600">
            {product.categoryLabel}
          </span>
        </div>

        <span className="absolute bottom-3 right-5 select-none text-6xl font-semibold tracking-[-0.08em] text-slate-300/40">
          {String(index + 1).padStart(2, "0")}
        </span>

        <motion.img
          src={product.image}
          alt={product.name}
          loading={index > 1 ? "lazy" : "eager"}
          className="relative z-[1] max-h-[220px] w-[84%] object-contain transition-transform duration-700 ease-out group-hover:scale-[1.055] sm:max-h-[245px]"
        />

        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#E9F0FA]/50 to-transparent" />
      </div>

      {/* PRODUCT DETAILS */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600">
              RIJI ELECTRIC
            </p>
            <h3 className="break-words text-2xl font-semibold leading-tight tracking-[-0.055em] text-slate-900 sm:text-[27px]">
              {product.name}
            </h3>
          </div>

          <Link
            to={`/products/${product.id}`}
            aria-label={`Explore ${product.name}`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <p className="mt-3 text-xs leading-6 text-slate-500 sm:text-sm">
          {product.categoryLabel} designed for practical everyday mobility.
        </p>

        <div className="mt-5 border-t border-slate-100 pt-4">
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Starting price
          </p>
          <p className="mt-1 text-2xl font-semibold tracking-[-0.045em] text-slate-900">
            <span className="mr-0.5 text-lg font-medium text-slate-500">₹</span>
            {product.price.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="mt-5 grid grid-cols-[1fr_auto] gap-2">
          <Link
            to={`/products/${product.id}`}
            className="group/explore inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#101828] px-3 text-xs font-semibold text-white transition-colors duration-300 hover:bg-blue-600"
          >
            Explore vehicle
            <ChevronRight
              size={15}
              className="transition-transform group-hover/explore:translate-x-0.5"
            />
          </Link>
          <Link
            to="/product-enquiry"
            state={{ productId: String(product.id) }}
            aria-label={`Enquire about ${product.name}`}
            className="group relative inline-flex h-16 w-16 items-center justify-center rounded-full border border-blue-300/70 bg-gradient-to-br from-blue-400 via-[#0165F6] to-blue-800 text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            <span className="absolute inset-1 rounded-full border border-white/30" />

            <span className="relative flex flex-col items-center gap-1">
              <MessageCircle size={19} />
              <span className="text-[7px] font-bold uppercase tracking-wider">
                Let's talk
              </span>
            </span>

            <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-[#091629]">
              <ArrowUpRight size={11} />
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/* FILTER BUTTON — retained as a reusable option */

function FilterButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 ${
        active
          ? "bg-[#101828] text-white"
          : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
      }`}
    >
      {children}
    </button>
  );
}
