// src/pages/ProductDetails.tsx

import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  Battery,
  Gauge,
  Zap,
  Clock3,
  ShieldCheck,
  Armchair,
  Monitor,
  Package,
  Check,
  X,
} from "lucide-react";

import { products } from "../components/ProductsData";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();

  /*
   * IMPORTANT
   * URL params are strings.
   * Product IDs are numbers.
   */
  const product = products.find((item) => item.id === Number(id));

  const [selectedColor, setSelectedColor] = useState(0);

  const [activeFeature, setActiveFeature] = useState(0);
  const [isFeaturePaused, setIsFeaturePaused] = useState(false);
  /*
   * Touch / swipe state
   */
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [showAllSpecs, setShowAllSpecs] = useState(false);

  /*
   * Minimum swipe distance
   */
  const minSwipeDistance = 50;

  /*
   * Product not found
   */
  if (!product) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] text-[#111827]">
        <Navigation />

        <main className="flex min-h-[80vh] items-center justify-center px-6">
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2563EB]">
              RIJI EV
            </p>

            <h1 className="mt-4 text-4xl font-medium tracking-[-0.05em]">
              Vehicle not found
            </h1>

            <p className="mt-4 text-sm text-[#6B7280]">
              The vehicle you are looking for does not exist.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex h-12 items-center gap-3 rounded-full bg-[#111827] px-7 text-xs font-semibold text-white transition-colors duration-200 hover:bg-[#2563EB]"
            >
              <ArrowLeft size={14} />
              Back to vehicles
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  /*
   * Helper for the existing specs array
   */
  const getSpec = (label: string) => {
    return product.specs?.find((spec) => spec.label === label)?.value;
  };

  /*
   * Core features
   */
  const coreFeatures = product.coreFeatures || [];

  /*
   * Selected colour
   */
  const selectedColorData = product.colors?.[selectedColor];

  /*
   * Go to next feature
   */
  const nextFeature = () => {
    if (coreFeatures.length === 0) return;

    setActiveFeature((current) =>
      current === coreFeatures.length - 1 ? 0 : current + 1,
    );
  };

  /*
   * Go to previous feature
   */
  const previousFeature = () => {
    if (coreFeatures.length === 0) return;

    setActiveFeature((current) =>
      current === 0 ? coreFeatures.length - 1 : current - 1,
    );
  };

  /*
   * Touch start
   */
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  /*
   * Touch move
   */
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  /*
   * Touch end
   */
  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) {
      return;
    }

    const distance = touchStart - touchEnd;

    if (Math.abs(distance) < minSwipeDistance) {
      return;
    }

    if (distance > 0) {
      nextFeature();
    } else {
      previousFeature();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };
  React.useEffect(() => {
    if (coreFeatures.length <= 1 || isFeaturePaused) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveFeature((current) =>
        current === coreFeatures.length - 1 ? 0 : current + 1,
      );
    }, 4500);

    return () => window.clearInterval(interval);
  }, [coreFeatures.length, isFeaturePaused]);

  /*
   * Everyday feature highlights
   */
  const featureHighlights = [
    {
      title: "Practicality",
      text:
        product.capacity?.passengerCapacity ||
        "Designed around everyday mobility.",
      icon: <Package size={20} strokeWidth={1.5} />,
    },

    {
      title: "Comfort",
      text:
        product.comfort?.seating ||
        "Comfortable seating for everyday journeys.",
      icon: <Armchair size={20} strokeWidth={1.5} />,
    },

    {
      title: "Technology",
      text:
        product.technology?.display ||
        "Useful technology designed for the ride.",
      icon: <Monitor size={20} strokeWidth={1.5} />,
    },

    {
      title: "Safety",
      text: product.safety?.brakes || "Confidence-focused safety equipment.",
      icon: <ShieldCheck size={20} strokeWidth={1.5} />,
    },
  ];

  /*
   * Performance information
   */
  const performanceItems = [
    {
      label: "Top Speed",
      value: product.performance?.topSpeed || getSpec("Top Speed") || "—",
    },

    {
      label: "Range",
      value: product.performance?.range || getSpec("Range") || "—",
    },

    {
      label: "Motor",
      value: product.performance?.motor || "—",
    },

    {
      label: "Motor Power",
      value: product.performance?.motorPower || "—",
    },
  ];

  /*
   * Technical specifications
   */
  type TechnicalGroup = {
    title: string;
    items: [string, string | undefined | null][];
  };
  const technicalGroups = [
    {
      title: "Performance",

      items: [
        ["Top Speed", product.performance?.topSpeed],

        ["Range", product.performance?.range],

        ["Motor", product.performance?.motor],

        ["Motor Power", product.performance?.motorPower],

        ["Riding Modes", product.performance?.ridingModes],
      ],
    },

    {
      title: "Battery & Charging",

      items: [
        ["Battery Capacity", product.battery?.capacity],

        ["Battery Type", product.battery?.type],

        ["Voltage", product.battery?.voltage],

        ["Charging Time", product.battery?.chargingTime],

        ["Charging Type", product.battery?.chargingType],

        ["Removable", product.battery?.removable],
      ],
    },

    {
      title: "Dimensions",

      items: [
        ["Length", product.dimensions?.length],

        ["Width", product.dimensions?.width],

        ["Height", product.dimensions?.height],

        ["Wheelbase", product.dimensions?.wheelbase],

        ["Kerb Weight", product.dimensions?.kerbWeight],
      ],
    },

    {
      title: "Capacity",

      items: [
        ["Passenger Capacity", product.capacity?.passengerCapacity],

        ["Load Capacity", product.capacity?.loadCapacity],
        ["Storage", product.capacity?.storageCapacity],
      ],
    },

    {
      title: "Comfort",

      items: [
        ["Seating", product.comfort?.seating],

        ["Suspension", product.comfort?.suspension],
      ],
    },

    {
      title: "Technology",
      items: [
        ["Display", product.technology?.display],
        ["Music System", product.technology?.musicSystem],
        ["USB Charging", product.technology?.usbCharging],
        ["Connectivity", product.technology?.connectivity],
        ["Smart Features", product.technology?.smartFeatures],
      ],
    },

    {
      title: "Safety",

      items: [
        ["Sensor Lock", product.safety?.sensorLock],
        ["Handle Lock", product.safety?.handleLock],
        ["Lighting", product.safety?.lighting],
        ["Brakes", product.safety?.brakes],
        ["Reverse Mode", product.safety?.reverseMode],
        ["Parking System", product.safety?.parkingSystem],
      ],
    },

    {
      title: "Wheels & Tyres",

      items: [
        ["Front Tyre", product.wheels?.frontTyre],

        ["Rear Tyre", product.wheels?.rearTyre],

        ["Wheel Size", product.wheels?.wheelSize],
      ],
    },
  ];

  const visibleGroups = technicalGroups
    .map((group) => ({
      ...group,
      items: group.items.filter(
        ([, value]) => value !== undefined && value !== null && value !== "",
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="min-h-screen overflow-hidden bg-[#F8F9FA] text-[#111827]">
      {/* ========================================================= */}
      {/* NAVIGATION */}
      {/* ========================================================= */}

      <Navigation />

      <main>
        {/* ======================================================= */}
        {/* HERO */}
        {/* ======================================================= */}

        <section className="relative min-h-[calc(100svh-80px)] overflow-hidden bg-[#F8F9FA]">
          {/* Background number */}

          <div className="pointer-events-none absolute right-[-2vw] top-[8vh] select-none text-[10vw] font-semibold leading-none tracking-[-0.08em] text-[#E8ECF0]">
            {product.name}
          </div>

          {/* Top product navigation */}

          <div className="absolute left-0 right-0 top-0 z-20">
            <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6B7280] transition-colors duration-200 hover:text-[#111827]"
              >
                <ArrowLeft
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                All vehicles
              </Link>

              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#111827]">
                RIJI EV
              </span>

              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#9CA3AF]">
                {product.categoryLabel || product.category}
              </span>
            </div>
          </div>

          {/* Product image */}

          <div className="absolute inset-0 flex items-center justify-center pt-[5vh]">
            <img
              src={product.image}
              alt={product.name}
              fetchPriority="high"
              decoding="async"
              className="
                h-[50vh]
                w-[94vw]
                object-contain

                sm:h-[58vh]
                sm:w-[88vw]

                lg:h-[68vh]
                lg:w-[82vw]

                xl:h-[72vh]
                xl:w-[78vw]
              "
            />
          </div>

          {/* Bottom fade */}

          <div className="absolute inset-x-0 bottom-0 z-10 h-[48%] bg-gradient-to-t from-[#F8F9FA] via-[#F8F9FA]/85 to-transparent" />

          {/* Hero content */}

          <div className="absolute bottom-0 left-0 right-0 z-20">
            <div className="mx-auto max-w-[1600px] px-5 pb-8 sm:px-8 sm:pb-10 lg:px-12 lg:pb-12">
              <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
                {/* Name */}

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#2563EB]">
                    {product.categoryLabel || "Electric Mobility"}
                  </p>

                  <h1 className="mt-3 text-[clamp(3.8rem,9vw,8rem)] font-medium leading-[0.78] tracking-[-0.075em] text-[#111827]">
                    {product.name}
                  </h1>

                  {product.tagline && (
                    <p className="mt-5 max-w-xl text-sm leading-6 text-[#6B7280] sm:text-base">
                      {product.tagline}
                    </p>
                  )}

                  {/* Buttons */}

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <Link
                      to="/contact"
                      className="group inline-flex h-12 items-center gap-3 rounded-full bg-[#111827] px-7 text-xs font-semibold text-white transition-colors duration-200 hover:bg-[#2563EB]"
                    >
                      Book a Test Drive
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                        <ArrowRight size={13} />
                      </span>
                    </Link>

                    <Link
                      to="/contact"
                      className="inline-flex h-12 items-center rounded-full border border-[#D4D9DF] bg-white/80 px-7 text-xs font-semibold text-[#111827] transition-colors duration-200 hover:border-[#2563EB] hover:text-[#2563EB]"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>

                {/* Highlighted specifications */}

                <div className="grid grid-cols-2 border-t border-[#D5DAE0] sm:grid-cols-4 lg:border-t-0">
                  <HeroStat label="Range" value={getSpec("Range") || "—"} />

                  <HeroStat
                    label="Top Speed"
                    value={getSpec("Top Speed") || "—"}
                  />

                  <HeroStat label="Battery" value={getSpec("Battery") || "—"} />

                  <HeroStat
                    label="Charging"
                    value={getSpec("Charging") || "—"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================= */}
        {/* COLOUR SELECTOR */}
        {/* ======================================================= */}

        {product.colors?.length > 0 && (
          <section className="relative overflow-hidden bg-[#F3F5F7] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            {/* Background accents */}
            <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-200/20 blur-3xl" />

            <div className="relative mx-auto max-w-[1350px]">
              {/* Heading */}
              <div className="mb-10 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#2563EB]" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#2563EB]">
                    Personalise your ride
                  </p>
                </div>

                <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.055em] text-[#111827] sm:text-5xl lg:text-6xl">
                  Choose your
                  <br />
                  <span className="text-[#2563EB]">perfect colour.</span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-6 text-[#68707B] sm:text-base">
                  Select a colour that reflects your style and makes your{" "}
                  {product.name} truly yours.
                </p>
              </div>

              {/* Main Configurator */}
              <div className="grid overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_20px_70px_rgba(17,24,39,0.08)] lg:grid-cols-[1.45fr_0.75fr]">
                {/* VEHICLE AREA */}
                <div className="relative min-h-[430px] overflow-hidden bg-gradient-to-br from-[#F9FAFB] via-[#EEF1F4] to-[#E2E6EA] sm:min-h-[540px] lg:min-h-[620px]">
                  {/* Decorative circles */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80" />

                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[52%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-2xl" />

                  {/* Large background model name */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[18vw] font-bold leading-none tracking-[-0.09em] text-[#DDE2E7] sm:text-[13vw] lg:text-[9vw]">
                    {product.name}
                  </div>

                  {/* Vehicle */}
                  <div className="relative z-10 flex h-full min-h-[430px] items-center justify-center sm:min-h-[540px] lg:min-h-[620px]">
                    <img
                      src={product.image}
                      alt={`${product.name} ${selectedColorData?.name || ""}`}
                      className="w-[88%] max-w-[850px] object-contain drop-shadow-[0_30px_35px_rgba(0,0,0,0.14)] transition-transform duration-500 hover:scale-[1.025] sm:w-[82%] lg:w-[88%]"
                      loading="lazy"
                    />
                  </div>

                  {/* Bottom model badge */}
                  <div className="absolute bottom-5 left-5 z-20 sm:bottom-7 sm:left-7">
                    <div className="rounded-full border border-white/80 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md">
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#6B7280]">
                        RIJI EV
                      </p>
                    </div>
                  </div>
                </div>

                {/* CONFIGURATION PANEL */}
                <div className="flex flex-col justify-between bg-white p-7 sm:p-9 lg:p-11">
                  {/* Selected colour */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#9CA3AF]">
                          Selected finish
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#111827]">
                          {selectedColorData?.name || "Available colours"}
                        </h3>
                      </div>

                      {/* Selected colour preview */}
                      {selectedColorData && (
                        <div
                          className="h-11 w-11 rounded-full border-4 border-white shadow-[0_5px_20px_rgba(0,0,0,0.15)]"
                          style={{
                            backgroundColor: selectedColorData.value,
                          }}
                        />
                      )}
                    </div>

                    {/* Colour grid */}
                    <div className="mt-8 grid grid-cols-2 gap-3">
                      {product.colors.map((color, index) => {
                        const isSelected = selectedColor === index;

                        return (
                          <button
                            key={color.name}
                            type="button"
                            onClick={() => setSelectedColor(index)}
                            aria-label={`Select ${color.name}`}
                            className={`group relative flex items-center gap-3 rounded-2xl border p-3 text-left transition-all duration-200 ${
                              isSelected
                                ? "border-[#2563EB] bg-[#EFF6FF] shadow-[0_8px_25px_rgba(37,99,235,0.12)]"
                                : "border-[#E5E7EB] bg-white hover:border-[#CBD5E1] hover:bg-[#F8FAFC]"
                            }`}
                          >
                            {/* Colour */}
                            <span
                              className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${
                                isSelected
                                  ? "border-white shadow-[0_3px_12px_rgba(0,0,0,0.18)]"
                                  : "border-[#E5E7EB]"
                              }`}
                              style={{
                                backgroundColor: color.value,
                              }}
                            >
                              {isSelected && (
                                <Check
                                  size={15}
                                  strokeWidth={3}
                                  className={
                                    color.value.toLowerCase() === "#ffffff" ||
                                    color.value.toLowerCase() === "#f5f5f5"
                                      ? "text-[#111827]"
                                      : "text-white"
                                  }
                                />
                              )}
                            </span>

                            {/* Name */}
                            <div className="min-w-0">
                              <p
                                className={`truncate text-xs font-semibold ${
                                  isSelected
                                    ? "text-[#1D4ED8]"
                                    : "text-[#374151]"
                                }`}
                              >
                                {color.name}
                              </p>

                              <p className="mt-0.5 text-[9px] uppercase tracking-[0.12em] text-[#9CA3AF]">
                                Finish
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Price Card */}
                  <div className="mt-10 rounded-2xl bg-[#111827] p-6 text-white shadow-[0_15px_35px_rgba(17,24,39,0.18)]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                          Starting from
                        </p>

                        <p className="mt-2 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                          ₹{product.price.toLocaleString("en-IN")}
                        </p>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563EB]">
                        <span className="text-sm font-bold">₹</span>
                      </div>
                    </div>

                    <div className="mt-5 h-px bg-white/10" />

                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-xs text-white/55">{product.name}</p>

                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#60A5FA]">
                        Electric Mobility
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom colour indicator */}
              <div className="mt-6 flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF]">
                  Available finishes
                </p>

                <div className="flex items-center gap-2">
                  {product.colors.map((color, index) => (
                    <button
                      key={`dot-${color.name}`}
                      type="button"
                      onClick={() => setSelectedColor(index)}
                      aria-label={`Select ${color.name}`}
                      className={`h-3.5 w-3.5 rounded-full border transition-all ${
                        selectedColor === index
                          ? "scale-125 border-[#111827]"
                          : "border-white shadow-sm"
                      }`}
                      style={{
                        backgroundColor: color.value,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        {/* ======================================================= */}
        {/* INTRO */}
        {/* ======================================================= */}

        <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1200px] text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#2563EB]">
              Meet {product.name}
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-medium leading-[0.95] tracking-[-0.06em] text-[#111827] sm:text-5xl lg:text-6xl">
              {product.shortDescription ||
                "Designed around the way you move every day."}
            </h2>

            {product.description && (
              <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#6B7280] sm:text-base">
                {product.description}
              </p>
            )}
          </div>
        </section>

        {/* ======================================================= */}
        {/* PERFORMANCE */}
        {/* ======================================================= */}

        <section className="relative min-h-[85svh] overflow-hidden bg-[#111827] text-white">
          <div className="absolute inset-0">
            <img
              src={product.coreFeatures?.[0]?.image || product.image}
              alt={`${product.name} performance`}
              className="h-full w-full object-cover opacity-70"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/10" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
          </div>

          <div className="relative z-10 flex min-h-[85svh] items-end">
            <div className="mx-auto w-full max-w-[1600px] px-5 pb-12 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
              <div className="max-w-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#7EA7FF]">
                  Electric performance
                </p>

                <h2 className="mt-5 text-5xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                  Go further.
                  <br />
                  Go electric.
                </h2>

                <p className="mt-6 max-w-lg text-sm leading-7 text-white/65">
                  Performance engineered for everyday journeys, combining useful
                  range, responsive power and efficient electric mobility.
                </p>
              </div>

              {/* Performance stats */}

              <div className="mt-10 grid max-w-3xl grid-cols-2 border-t border-white/20 sm:grid-cols-4">
                {performanceItems.map((item) => (
                  <div
                    key={item.label}
                    className="border-r border-white/10 py-5 pr-5 last:border-r-0"
                  >
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40">
                      {item.label}
                    </p>

                    <p className="mt-2 text-lg font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================= */}
        {/* FEATURE CAROUSEL */}
        {/* ======================================================= */}

        {coreFeatures.length > 0 && (
          <section className="bg-[#F1F3F5] px-5 py-12 sm:px-8 sm:py-22 lg:px-6 lg:py-24">
            <div className="mx-auto max-w-[1150px]">
              <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                <div className="max-w-2xl">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#2563EB]">
                    Feature Carousel
                  </p>

                  <h2 className="mt-4 text-4xl font-medium leading-[0.92] tracking-[-0.06em] text-[#111827] sm:text-5xl lg:text-6xl">
                    Designed around
                    <br />
                    the way you move.
                  </h2>

                  <p className="mt-6 max-w-xl text-sm leading-7 text-[#6B7280] sm:text-base">
                    Explore the details that make {product.name}
                    practical, comfortable and enjoyable every day.
                  </p>
                </div>

                {/* DESKTOP CONTROLS */}

                <div className="hidden items-center gap-2 sm:flex">
                  <button
                    type="button"
                    onClick={previousFeature}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D5D9DE] bg-white text-[#111827] transition-all duration-200 hover:border-[#2563EB] hover:text-[#2563EB]"
                    aria-label="Previous feature"
                  >
                    <ArrowLeft size={17} />
                  </button>

                  <button
                    type="button"
                    onClick={nextFeature}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D5D9DE] bg-white text-[#111827] transition-all duration-200 hover:border-[#2563EB] hover:text-[#2563EB]"
                    aria-label="Next feature"
                  >
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>
              <div
                className="relative mt-8 overflow-hidden rounded-[1.5rem] bg-white shadow-[0_16px_40px_rgba(17,24,39,0.05)] touch-pan-y"
                onMouseEnter={() => setIsFeaturePaused(true)}
                onMouseLeave={() => setIsFeaturePaused(false)}
                onTouchStart={(e) => {
                  setIsFeaturePaused(true);
                  handleTouchStart(e);
                }}
                onTouchMove={handleTouchMove}
                onTouchEnd={(e) => {
                  handleTouchEnd();
                  setIsFeaturePaused(false);
                }}
              >
                {/* SLIDES */}

                <div
                  className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    transform: `translate3d(-${activeFeature * 100}%, 0, 0)`,
                  }}
                >
                  {coreFeatures.map((feature, index) => (
                    <article
                      key={`${feature.title}-${index}`}
                      className="min-w-full"
                    >
                      <div className="grid min-h-[440px] lg:grid-cols-[1.05fr_0.95fr]">
                        <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#E8EBEF] p-6 sm:min-h-[350px] lg:min-h-[440px] lg:p-8">
                          {/* Decorative circle */}

                          <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70" />

                          {/* Background number */}

                          <span className="absolute bottom-[-35px] left-[-10px] select-none text-[180px] font-semibold leading-none tracking-[-0.1em] text-[#DDE2E7]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          {/* Product / feature image */}

                          <div className="relative z-10 flex h-full w-full items-center justify-center">
                            {feature.image ? (
                              <img
                                src={feature.image}
                                alt={feature.title}
                                loading={index === 0 ? "eager" : "lazy"}
                                className="
                          max-h-[270px]
                         w-[110%]
  object-contain
  transition-transform
  duration-700
  sm:max-h-[370px]
  lg:max-h-[430px]
  lg:w-[105%]

                        "
                              />
                            ) : (
                              <img
                                src={product.image}
                                alt={feature.title}
                                loading="lazy"
                                className="
                         max-h-[330px]
  w-[110%]
  object-contain
  sm:max-h-[370px]
  lg:max-h-[430px]
  lg:w-[105%]
                        "
                              />
                            )}
                          </div>

                          {/* Image label */}

                          <div className="absolute bottom-6 left-6 z-20 sm:bottom-8 sm:left-8">
                            <span className="rounded-full bg-white/80 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#6B7280] backdrop-blur-sm">
                              RIJI EV
                            </span>
                          </div>
                        </div>
                        {/* ================================================= */}
                        {/* CONTENT AREA */}
                        {/* ================================================= */}
                        <div className="flex flex-col justify-between p-7 sm:p-8 lg:p-10">
                          {/* Top */}

                          <div>
                            <div className="flex items-center justify-between">
                              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#2563EB]">
                                Feature {String(index + 1).padStart(2, "0")}
                              </p>

                              <span className="text-[10px] font-semibold tracking-[0.18em] text-[#A0A7B0]">
                                {String(index + 1).padStart(2, "0")} /{" "}
                                {String(coreFeatures.length).padStart(2, "0")}
                              </span>
                            </div>

                            <h3 className="mt-4 max-w-sm text-3xl font-medium leading-[0.95] tracking-[-0.045em] text-[#111827] sm:text-4xl lg:text-5xl">
                              {feature.title}
                            </h3>

                            {feature.description && (
                              <p className="mt-4 max-w-sm text-sm leading-6 text-[#6B7280]">
                                {" "}
                                {feature.description}
                              </p>
                            )}

                            {/* ================================================= */}
                            {/* FEATURE DETAILS */}
                            {/* ================================================= */}

                            {feature.items && feature.items.length > 0 && (
                              <div className="mt-6 grid gap-2 sm:grid-cols-1">
                                {" "}
                                {feature.items.map((item: string) => (
                                  <div
                                    key={item}
                                    className="flex items-center gap-3 border-t border-[#E4E7EA] pt-4"
                                  >
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EEF3FF] text-[#2563EB]">
                                      <Check size={13} strokeWidth={2} />
                                    </span>

                                    <span className="text-sm font-medium text-[#374151]">
                                      {item}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* ================================================= */}
                          {/* BOTTOM */}
                          {/* ================================================= */}

                          <div className="mt-12">
                            {/* Progress */}

                            <div className="flex items-center justify-between">
                              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9CA3AF]">
                                Explore features
                              </span>

                              <span className="text-[10px] font-medium text-[#9CA3AF]">
                                Auto play
                              </span>
                            </div>

                            <div className="mt-4 h-[2px] w-full overflow-hidden bg-[#E5E7EB]">
                              <div
                                className="h-full bg-[#2563EB] transition-all duration-700"
                                style={{
                                  width: `${
                                    ((index + 1) / coreFeatures.length) * 100
                                  }%`,
                                }}
                              />
                            </div>

                            {/* Bottom controls */}

                            <div className="mt-6 flex items-center justify-between">
                              {/* Dots */}

                              <div className="flex items-center gap-2">
                                {coreFeatures.map((item, dotIndex) => (
                                  <button
                                    key={`${item.title}-dot`}
                                    type="button"
                                    onClick={() => setActiveFeature(dotIndex)}
                                    aria-label={`Show ${item.title}`}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                      activeFeature === dotIndex
                                        ? "w-9 bg-[#2563EB]"
                                        : "w-1.5 bg-[#CBD1D8]"
                                    }`}
                                  />
                                ))}
                              </div>

                              {/* Mobile controls */}

                              <div className="flex gap-2 sm:hidden">
                                <button
                                  type="button"
                                  onClick={previousFeature}
                                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D5D9DE] bg-white"
                                  aria-label="Previous feature"
                                >
                                  <ArrowLeft size={15} />
                                </button>

                                <button
                                  type="button"
                                  onClick={nextFeature}
                                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D5D9DE] bg-white"
                                  aria-label="Next feature"
                                >
                                  <ArrowRight size={15} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ======================================================= */}
        {/* EVERYDAY ADVANTAGE */}
        {/* ======================================================= */}

        <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              {/* Left */}

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#2563EB]">
                  The everyday advantage
                </p>

                <h2 className="mt-4 text-4xl font-medium leading-[0.92] tracking-[-0.06em] text-[#111827] sm:text-5xl">
                  Built around
                  <br />
                  the ride.
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-[#6B7280]">
                  Every part of {product.name} is designed to make everyday
                  electric mobility more useful, comfortable and dependable.
                </p>
              </div>

              {/* Features */}

              <div className="grid gap-x-10 sm:grid-cols-2">
                {featureHighlights.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="border-t border-[#DDE1E5] py-7"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF2F7] text-[#2563EB]">
                        {feature.icon}
                      </div>

                      <span className="text-[10px] font-semibold text-[#B0B6BE]">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-medium tracking-[-0.03em] text-[#111827]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {showAllSpecs && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111827]/60 px-4 py-6 backdrop-blur-sm"
            onClick={() => setShowAllSpecs(false)}
          >
            <div
              className="relative flex max-h-[92vh] w-full max-w-[1050px] flex-col overflow-hidden rounded-[2rem] bg-[#F7F9FC] shadow-[0_30px_100px_rgba(0,0,0,0.25)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* HEADER */}
              <div className="relative overflow-hidden border-b border-[#E3E7EB] bg-white px-6 py-6 sm:px-8 sm:py-7">
                {/* DECORATION */}
                <div className="absolute right-[-40px] top-[-70px] h-40 w-40 rounded-full bg-[#EAF1FF]" />

                <div className="absolute right-[80px] top-[-50px] h-20 w-20 rounded-full bg-[#F1EBFF]" />

                <div className="relative flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#2563EB]">
                      {product.name}
                    </p>

                    <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-[#111827] sm:text-4xl">
                      All specifications
                    </h2>

                    <p className="mt-2 text-sm text-[#737B85]">
                      Complete technical details.
                    </p>
                  </div>

                  {/* CLOSE BUTTON */}
                  <button
                    type="button"
                    onClick={() => setShowAllSpecs(false)}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F1F3F5] text-[#4B5563] transition-all duration-200 hover:bg-[#E5E7EB] hover:text-[#111827]"
                    aria-label="Close specifications"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* SPECIFICATIONS */}
              <div className="overflow-y-auto px-5 py-5 sm:px-7 sm:py-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  {technicalGroups.map((group, groupIndex) => {
                    const accentStyles = [
                      {
                        bg: "bg-[#EEF4FF]",
                        icon: "bg-[#2563EB]",
                        text: "text-[#2563EB]",
                      },
                      {
                        bg: "bg-[#ECFDF5]",
                        icon: "bg-[#10B981]",
                        text: "text-[#059669]",
                      },
                      {
                        bg: "bg-[#FFF7ED]",
                        icon: "bg-[#F59E0B]",
                        text: "text-[#D97706]",
                      },
                      {
                        bg: "bg-[#F5F3FF]",
                        icon: "bg-[#8B5CF6]",
                        text: "text-[#7C3AED]",
                      },
                    ][groupIndex % 4];
                    return (
                      <div
                        key={group.title}
                        className={`overflow-hidden rounded-[1.25rem] border border-white ${accentStyles.bg}`}
                      >
                        {/* CATEGORY HEADER */}
                        <div className="flex items-center justify-between px-5 py-5">
                          <div className="flex items-center gap-4">
                            <div
                              className={`flex h-10 w-10 items-center justify-center rounded-xl ${accentStyles.icon} text-xs font-bold text-white`}
                            >
                              {String(groupIndex + 1).padStart(2, "0")}
                            </div>
                            <div>
                              <p
                                className={`text-[9px] font-bold uppercase tracking-[0.18em] ${accentStyles.text}`}
                              >
                                Technical
                              </p>
                              <h3 className="mt-0.5 text-sm font-semibold text-[#171A1F]">
                                {group.title}
                              </h3>
                            </div>
                          </div>
                          <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#B0B6BE]">
                            Specs
                          </span>
                        </div>

                        {/* VALUES */}
                        <div className="mx-3 mb-3 overflow-hidden rounded-[0.9rem] bg-white">
                          {group.items.map(([label, value], index) => (
                            <div
                              key={label}
                              className={`flex items-center justify-between gap-5 px-4 py-3.5 ${
                                index !== group.items.length - 1
                                  ? "border-b border-[#EEF0F2]"
                                  : ""
                              }`}
                            >
                              <span className="text-[12px] text-[#737B85]">
                                {label}
                              </span>

                              <span className="text-right text-[12px] font-semibold text-[#20252B]">
                                {String(value) || "—"}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* FOOTER */}
              <div className="border-t border-[#E3E7EB] bg-white px-6 py-4 sm:px-8">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#9AA2AC]">
                    RIJI EV · Technical Information
                  </p>

                  <button
                    type="button"
                    onClick={() => setShowAllSpecs(false)}
                    className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2563EB] transition-colors hover:text-[#1D4ED8]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================= */}
        {/* FULL SPECIFICATIONS */}
        {/* ======================================================= */}

        <section className="bg-[#F4F6F8] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1100px]">
            {/* HEADER */}
            <div className="mb-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#2563EB]">
                Technical Details
              </p>

              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.055em] text-[#111827] sm:text-5xl">
                Everything important,
                <br />
                <span className="text-[#7B8490]">at a glance.</span>
              </h2>
            </div>

            {/* MAIN SPECIFICATIONS */}
            <div className="overflow-hidden rounded-[1.5rem] border border-[#DDE2E7] bg-white">
              {/* PRIMARY SPECS */}
              <div className="grid grid-cols-2 sm:grid-cols-4">
                <div className="border-b border-r border-[#E5E8EB] px-6 py-7 sm:border-b-0">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#9AA2AC]">
                    Range
                  </p>

                  <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#111827] sm:text-3xl">
                    {getSpec("Range") || "—"}
                  </p>
                </div>

                <div className="border-b border-[#E5E8EB] px-6 py-7 sm:border-b-0 sm:border-r">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#9AA2AC]">
                    Top Speed
                  </p>

                  <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#111827] sm:text-3xl">
                    {getSpec("Top Speed") || "—"}
                  </p>
                </div>

                <div className="border-r border-[#E5E8EB] px-6 py-7">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#9AA2AC]">
                    Battery
                  </p>

                  <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#111827] sm:text-3xl">
                    {getSpec("Battery") || "—"}
                  </p>
                </div>

                <div className="px-6 py-7">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#9AA2AC]">
                    Charging
                  </p>

                  <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#111827] sm:text-3xl">
                    {getSpec("Charging") || "—"}
                  </p>
                </div>
              </div>

              {/* SECONDARY SPECS */}
              <div className="grid grid-cols-2 border-t border-[#E5E8EB] sm:grid-cols-4">
                <div className="border-b border-r border-[#E5E8EB] px-6 py-5 sm:border-b-0">
                  <p className="text-[9px] uppercase tracking-[0.16em] text-[#A0A7B0]">
                    Motor
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#252A31]">
                    {product.performance?.motor || "—"}
                  </p>
                </div>

                <div className="border-b border-[#E5E8EB] px-6 py-5 sm:border-b-0 sm:border-r">
                  <p className="text-[9px] uppercase tracking-[0.16em] text-[#A0A7B0]">
                    Motor Power
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#252A31]">
                    {product.performance?.motorPower || "—"}
                  </p>
                </div>

                <div className="border-r border-[#E5E8EB] px-6 py-5">
                  <p className="text-[9px] uppercase tracking-[0.16em] text-[#A0A7B0]">
                    Capacity
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#252A31]">
                    {product.capacity?.passengerCapacity || "—"}
                  </p>
                </div>

                <div className="px-6 py-5">
                  <p className="text-[9px] uppercase tracking-[0.16em] text-[#A0A7B0]">
                    Weight
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#252A31]">
                    {product.dimensions?.kerbWeight || "—"}
                  </p>
                </div>
              </div>
            </div>

            {/* VIEW ALL BUTTON */}
            <div className="mt-5 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllSpecs(true)}
                className="group flex items-center gap-2 rounded-full border border-[#D5DAE0] bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#252A31] transition-all duration-200 hover:border-[#2563EB] hover:text-[#2563EB]"
              >
                View all specifications
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* ======================================================= */}
        {/* FINAL CTA */}
        {/* ======================================================= */}

        <section className="relative overflow-hidden bg-[#0B0F14] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          {/* Background details */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#2563EB]/15 blur-[110px]" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#3B82F6]/10 blur-[100px]" />

          <div className="relative mx-auto max-w-[1350px]">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#121821]">
              <div className="grid items-center lg:grid-cols-[1fr_0.75fr]">
                {/* LEFT */}
                <div className="px-7 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />

                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#7EA7FF]">
                      Experience {product.name}
                    </p>
                  </div>

                  <h2 className="mt-6 max-w-3xl text-5xl font-medium leading-[0.9] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
                    Ready for your
                    <br />
                    <span className="text-[#5B8FFF]">next journey?</span>
                  </h2>

                  <p className="mt-7 max-w-lg text-sm leading-7 text-white/50 sm:text-base">
                    Discover {product.name} in person. Book a test drive or
                    connect with the RIJI EV team to learn more.
                  </p>

                  {/* Buttons */}
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Link
                      to="/contact"
                      className="group inline-flex h-13 items-center justify-center gap-3 rounded-full bg-white px-7 text-xs font-semibold text-[#111827] transition-all duration-200 hover:bg-[#2563EB] hover:text-white"
                    >
                      Book a Test Drive
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#111827] text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:bg-white group-hover:text-[#2563EB]">
                        <ArrowRight size={13} />
                      </span>
                    </Link>

                    <Link
                      to="/products"
                      className="inline-flex h-13 items-center justify-center rounded-full border border-white/15 px-7 text-xs font-semibold text-white transition-all duration-200 hover:border-white/35 hover:bg-white/5"
                    >
                      Explore Vehicles
                    </Link>
                  </div>
                </div>

                {/* RIGHT VISUAL */}
                <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden border-t border-white/10 bg-[#0F141B] lg:min-h-[470px] lg:border-l lg:border-t-0">
                  {/* Large product name */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[18vw] font-bold leading-none tracking-[-0.1em] text-white/[0.025] lg:text-[9vw]">
                    {product.name}
                  </div>

                  {/* Ring */}
                  <div className="absolute h-[230px] w-[230px] rounded-full border border-white/[0.06] sm:h-[280px] sm:w-[280px]" />

                  <div className="absolute h-[170px] w-[170px] rounded-full border border-[#2563EB]/20 sm:h-[210px] sm:w-[210px]" />

                  {/* Vehicle */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="relative z-10 w-[82%] max-w-[470px] object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.4)]"
                    loading="lazy"
                  />

                  {/* Small label */}
                  <div className="absolute bottom-6 left-6 z-20">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/30">
                      RIJI EV
                    </p>

                    <p className="mt-1 text-xs font-medium text-white/60">
                      {product.name}
                    </p>
                  </div>

                  {/* Blue accent */}
                  <div className="absolute right-7 top-7 h-2 w-2 rounded-full bg-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
                </div>
              </div>
            </div>

            {/* Bottom statement */}
            <div className="mt-7 flex flex-col justify-between gap-3 px-2 sm:flex-row sm:items-center">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                Electric mobility by RIJI EV
              </p>

              <p className="text-xs text-white/30">
                Built for everyday journeys.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

/* ============================================================= */
/* HERO SPECIFICATION */
/* ============================================================= */

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-[100px] border-r border-[#D5DAE0] px-4 py-4 first:pl-0 last:border-r-0 sm:px-5 sm:py-2">
      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF]">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold text-[#252A31] sm:text-base">
        {value}
      </p>
    </div>
  );
}
