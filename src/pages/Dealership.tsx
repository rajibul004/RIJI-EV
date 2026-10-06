import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CarFront,
  Check,
  ChevronDown,
  Headphones,
  MapPin,
  Megaphone,
  ShieldCheck,
  Store,
  Users,
} from "lucide-react";

import Navigation from "../components/Navigation";

import dealershipHero from "../assets/dealership-hero.png";
import showroomImage from "../assets/riji-showroom.png";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

const Dealership = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [state, setState] = useState("");
  const [stateOpen, setStateOpen] = useState(false);
  const [stateSearch, setStateSearch] = useState("");

  const stateDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        stateDropdownRef.current &&
        !stateDropdownRef.current.contains(event.target as Node)
      ) {
        setStateOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredStates = indianStates.filter((item) =>
    item.toLowerCase().includes(stateSearch.toLowerCase()),
  );

  const benefits = [
    {
      icon: CarFront,
      title: "Electric Products",
      description:
        "Showcase RIJI EV vehicles designed for practical everyday mobility.",
    },
    {
      icon: Megaphone,
      title: "Brand Support",
      description:
        "Build your local presence with RIJI EV branding and marketing support.",
    },
    {
      icon: Headphones,
      title: "Dealer Support",
      description:
        "Get guidance throughout your dealership journey and daily operations.",
    },
    {
      icon: ShieldCheck,
      title: "Service Ecosystem",
      description:
        "Build lasting customer relationships with dependable after-sales support.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Tell us about you",
      description:
        "Share your business, location and your interest in RIJI EV.",
    },
    {
      number: "02",
      title: "Talk with our team",
      description:
        "Our team connects with you to understand your market and requirements.",
    },
    {
      number: "03",
      title: "Plan your dealership",
      description:
        "Discuss the dealership opportunity, products and operational requirements.",
    },
    {
      number: "04",
      title: "Start your journey",
      description:
        "Complete the onboarding process and begin building your local market.",
    },
  ];

  const faqs = [
    {
      question: "Who can apply for a RIJI EV dealership?",
      answer:
        "Existing automobile dealers, entrepreneurs, local business owners and other suitable business operators can enquire about becoming a RIJI EV dealer.",
    },
    {
      question: "Do I need an existing automobile business?",
      answer:
        "Not necessarily. You can tell us about your current business experience, location and plans through the dealership enquiry form. Our team can then discuss the opportunity with you.",
    },
    {
      question: "Which locations are available?",
      answer:
        "Availability depends on RIJI EV's current expansion plans and the market you want to serve. Share your city and state and the team can discuss the opportunity with you.",
    },
    {
      question: "What support does RIJI EV provide?",
      answer:
        "The dealership program can include product, brand, marketing, operational and service-related support. Specific support depends on the dealership arrangement.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const dealerData = {
      type: "dealer",

      fullName: formData.get("fullName")?.toString().trim() || "",

      businessName: formData.get("businessName")?.toString().trim() || "",

      phone: formData.get("phone")?.toString().trim() || "",

      email: formData.get("email")?.toString().trim() || "",

      city: formData.get("city")?.toString().trim() || "",

      state: formData.get("state")?.toString().trim() || "",

      message: formData.get("message")?.toString().trim() || "",
    };

    try {
      const response = await fetch(import.meta.env.VITE_GOOGLE_SHEET_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(dealerData),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Submission failed");
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error("Dealer enquiry error:", error);

      alert("Unable to submit your enquiry. Please try again.");
    }
  };

  return (
    <>
      <Navigation />

      <main className="bg-white text-slate-950">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#f7f9fc]">
          <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-[1600px] lg:grid-cols-[0.88fr_1.12fr]">
            {/* LEFT CONTENT */}

            <div className="flex items-center px-6 py-8 sm:px-10 lg:px-14 xl:px-20">
              <div className="max-w-xl">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-blue-600" />

                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-600">
                    RIJI EV Dealership
                  </span>
                </div>

                <h1 className="text-[48px] font-semibold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
                  Bring electric
                  <br />
                  mobility to
                  <br />
                  <span className="text-blue-600">your city.</span>
                </h1>

                <p className="mt-7 max-w-lg text-base leading-7 text-slate-500 sm:text-lg">
                  Partner with RIJI EV and build a local business around the
                  future of everyday mobility.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#dealer-enquiry"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Become a Dealer
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                      <ArrowUpRight size={14} />
                    </span>
                  </a>

                  <a
                    href="#why-riij"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-slate-300"
                  >
                    Why RIJI EV
                    <ArrowRight size={15} />
                  </a>
                </div>

                {/* Small trust strip */}

                <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-slate-200 pt-6">
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Electric
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Mobility focused
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Local
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Market opportunity
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Partnership
                    </p>
                    <p className="mt-1 text-xs text-slate-400">Built to grow</p>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO IMAGE */}

            <div className="relative min-h-[520px] lg:min-h-full">
              <img
                src={dealershipHero}
                alt="RIJI EV dealership"
                className="absolute inset-0 h-full w-full object-cover"
                fetchPriority="high"
                decoding="async"
              />

              {/* Very subtle image gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              {/* Image label */}

              <div className="absolute bottom-7 left-7 right-7 sm:bottom-10 sm:left-10">
                <div className="max-w-sm">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                    Your next business opportunity
                  </span>

                  <p className="mt-2 text-xl font-semibold leading-snug text-white">
                    Create a destination for electric mobility in your market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY BECOME A DEALER
        ===================================================== */}

        <section id="why-riij" className="scroll-mt-20 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  Why partner
                </span>

                <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
                  More than a
                  <br />
                  dealership.
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-slate-500">
                  Build a local customer experience around electric mobility,
                  backed by a growing product and support ecosystem.
                </p>
              </div>

              <div className="grid border-t border-slate-200 sm:grid-cols-2">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      key={benefit.title}
                      className={`group border-b border-slate-200 py-8 sm:px-7 ${
                        index % 2 === 0 ? "sm:border-r" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-blue-600">
                          0{index + 1}
                        </span>

                        <Icon
                          size={20}
                          strokeWidth={1.6}
                          className="text-slate-300 transition-colors group-hover:text-blue-600"
                        />
                      </div>

                      <h3 className="mt-8 text-lg font-semibold">
                        {benefit.title}
                      </h3>

                      <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MARKETING STATEMENT
        ===================================================== */}

        <section className="bg-blue-600 py-20 text-white lg:py-24">
          <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-100">
              The opportunity
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Your local market.
              <br />A new generation of mobility.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100">
              Bring customers closer to practical electric mobility through a
              professional RIJI EV dealership experience.
            </p>
          </div>
        </section>

        {/* =====================================================
            YOU BRING / RIJI BRINGS
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#f6f8fb] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            {/* SECTION HEADER */}
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-600">
                  <span className="h-px w-7 bg-blue-600" />
                  The partnership
                </span>

                <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
                  You know the market.
                  <br />
                  <span className="text-slate-400">We bring the platform.</span>
                </h2>
              </div>

              <p className="max-w-lg text-sm leading-7 text-slate-500 lg:justify-self-end">
                A dealership works best when local market understanding meets a
                focused electric mobility brand. You bring the connection to
                your customers. RIJI EV brings the products, brand and support
                ecosystem.
              </p>
            </div>

            {/* PARTNERSHIP CARD */}
            <div className="relative mt-14 overflow-hidden rounded-[32px] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              {/* TOP LABEL */}
              <div className="flex items-center justify-between border-b border-slate-100 px-7 py-5 sm:px-10">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-blue-600" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Dealer partnership
                  </span>
                </div>

                <span className="hidden text-xs text-slate-400 sm:block">
                  Built around your local market
                </span>
              </div>

              {/* TWO SIDES */}
              <div className="grid lg:grid-cols-2">
                {/* YOU BRING */}
                <div className="relative p-8 sm:p-12 lg:p-14">
                  {/* Number */}
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] font-bold tracking-[0.2em] text-blue-600">
                      01
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                      <Store size={20} strokeWidth={1.6} />
                    </div>
                  </div>

                  <p className="mt-10 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                    Your contribution
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                    You bring
                    <br />
                    <span className="text-slate-400">
                      the local connection.
                    </span>
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
                    Your understanding of the local market helps create a
                    dealership experience that feels relevant to the customers
                    in your city.
                  </p>

                  {/* LIST */}
                  <div className="mt-10 space-y-4">
                    {[
                      "Local market knowledge",
                      "Customer relationships",
                      "Business commitment",
                      "Local presence",
                    ].map((item) => (
                      <div key={item} className="group flex items-center gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 transition-colors group-hover:bg-blue-600">
                          <Check
                            size={14}
                            strokeWidth={2.2}
                            className="text-blue-600 group-hover:text-white"
                          />
                        </span>

                        <span className="text-sm font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom statement */}
                  <div className="mt-12 border-t border-slate-100 pt-6">
                    <p className="text-xs leading-5 text-slate-400">
                      Your local presence creates the foundation for customer
                      relationships.
                    </p>
                  </div>
                </div>

                {/* RIJI BRINGS */}
                <div className="relative overflow-hidden bg-slate-950 p-8 text-white sm:p-12 lg:p-14">
                  {/* Subtle background detail */}
                  <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

                  <div className="relative">
                    {/* Number + icon */}
                    <div className="flex items-start justify-between">
                      <span className="text-[11px] font-bold tracking-[0.2em] text-blue-400">
                        02
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600">
                        <Building2 size={20} strokeWidth={1.6} />
                      </div>
                    </div>

                    <p className="mt-10 text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                      RIJI EV contribution
                    </p>

                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                      We bring
                      <br />
                      <span className="text-white/40">
                        the electric ecosystem.
                      </span>
                    </h3>

                    <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
                      RIJI EV supports the dealership experience with products,
                      brand presence, guidance and a service ecosystem.
                    </p>

                    {/* LIST */}
                    <div className="mt-10 space-y-4">
                      {[
                        "Electric vehicle portfolio",
                        "Brand and marketing support",
                        "Dealer guidance",
                        "Service ecosystem",
                      ].map((item) => (
                        <div
                          key={item}
                          className="group flex items-center gap-4"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600">
                            <Check
                              size={14}
                              strokeWidth={2.2}
                              className="text-white"
                            />
                          </span>

                          <span className="text-sm font-medium text-white/80">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom statement */}
                    <div className="mt-12 border-t border-white/10 pt-6">
                      <p className="text-xs leading-5 text-white/35">
                        Product, brand and support come together to help build
                        the dealership experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM PARTNERSHIP STRIP */}
              <div className="border-t border-slate-100 bg-slate-50 px-7 py-6 sm:px-10">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Together, we create the local EV experience.
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Local knowledge + electric mobility
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-slate-300" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      RIJI EV
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SHOWROOM
        ===================================================== */}

        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
              {/* IMAGE */}

              <div className="relative overflow-hidden rounded-[28px] bg-slate-100">
                <img
                  src={showroomImage}
                  alt="RIJI EV showroom"
                  className="h-[500px] w-full object-cover sm:h-[600px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* TEXT */}

              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  Your dealership
                </span>

                <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
                  Turn your showroom
                  <br />
                  into an EV experience.
                </h2>

                <p className="mt-6 text-base leading-7 text-slate-500">
                  Create a professional destination where customers can discover
                  RIJI EV vehicles, ask questions, experience the products and
                  begin their electric journey.
                </p>

                <div className="mt-9 space-y-5 border-t border-slate-200 pt-7">
                  {[
                    [
                      "01",
                      "Vehicle display",
                      "Present your products professionally.",
                    ],
                    [
                      "02",
                      "Customer experience",
                      "Help customers understand their options.",
                    ],
                    [
                      "03",
                      "Test rides",
                      "Let customers experience electric mobility.",
                    ],
                    ["04", "Delivery", "Create a memorable ownership journey."],
                  ].map(([number, title, description]) => (
                    <div key={number} className="flex gap-5">
                      <span className="pt-1 text-xs font-bold text-blue-600">
                        {number}
                      </span>

                      <div>
                        <h3 className="text-sm font-semibold">{title}</h3>

                        <p className="mt-1 text-sm text-slate-500">
                          {description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section className="bg-[#f7f9fc] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
                Simple process
              </span>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                From interest to partnership.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-500">
                A simple process designed to make your first conversation with
                RIJI EV easy.
              </p>
            </div>

            <div className="mt-16 grid gap-0 overflow-hidden rounded-[28px] border border-slate-200 bg-white md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative p-7 sm:p-9 ${
                    index !== steps.length - 1
                      ? "border-b md:border-r lg:border-b-0"
                      : ""
                  } border-slate-200`}
                >
                  <span className="text-xs font-bold text-blue-600">
                    {step.number}
                  </span>

                  <h3 className="mt-8 text-lg font-semibold">{step.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHO CAN PARTNER
        ===================================================== */}

        <section className="py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  Who can partner
                </span>

                <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                  Know your market?
                  <br />
                  Let's talk.
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-slate-500">
                  If you understand your local customers and want to build a
                  business around electric mobility, we would like to hear from
                  you.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Existing automobile dealers",
                  "Entrepreneurs",
                  "Local business owners",
                  "Mobility businesses",
                  "EV-focused businesses",
                  "Business operators",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl bg-slate-50 px-5 py-5"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600">
                      <Check size={14} className="text-white" />
                    </span>

                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}

        {/* =====================================================
            ENQUIRY
        ===================================================== */}

        <section id="dealer-enquiry" className="scroll-mt-20 py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              {/* LEFT */}

              <div>
                {/* Eyebrow */}
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-blue-600" />

                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-600">
                    Become a dealer
                  </span>
                </div>

                {/* Heading */}
                <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
                  Bring RIJI EV
                  <br />
                  <span className="text-slate-400">to your market.</span>
                </h2>

                {/* Description */}
                <p className="mt-7 max-w-md text-base leading-7 text-slate-500">
                  Tell us about your business, your location and your plans. Our
                  team will review your enquiry and connect with you to discuss
                  the dealership opportunity.
                </p>

                {/* Information cards */}
                <div className="mt-12 max-w-lg space-y-3">
                  {/* Location */}
                  <div className="group flex items-center gap-5 rounded-2xl bg-slate-50 px-5 py-5 transition-colors hover:bg-slate-100">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                      <MapPin
                        size={19}
                        strokeWidth={1.7}
                        className="text-blue-600"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Tell us your location
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        City and state help us understand your local market.
                      </p>
                    </div>
                  </div>

                  {/* Conversation */}
                  <div className="group flex items-center gap-5 rounded-2xl bg-slate-50 px-5 py-5 transition-colors hover:bg-slate-100">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                      <Users
                        size={19}
                        strokeWidth={1.7}
                        className="text-blue-600"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Start a conversation
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        Our team will discuss the opportunity and next steps.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Small trust statement */}
                <div className="mt-10 flex items-center gap-4">
                  <div className="flex -space-x-1">
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    <span className="h-2 w-2 rounded-full bg-blue-200" />
                  </div>

                  <p className="text-xs font-medium text-slate-400">
                    Start with a simple enquiry
                  </p>
                </div>
              </div>

              {/* FORM */}

              <div className="rounded-[28px] bg-[#f7f9fc] p-5 sm:p-10">
                {submitted ? (
                  <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                    <div className="flex h-12 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                      <Check size={22} />
                    </div>

                    <h3 className="mt-4 text-2xl font-semibold">Thank you.</h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                      Your dealership enquiry has been received. The RIJI EV
                      team will contact you regarding the opportunity.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight">
                        Dealer enquiry
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">
                        Start with a few basic details.
                      </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs font-semibold text-slate-700">
                          Full Name *
                        </label>

                        <input
                          required
                          name="fullName"
                          type="text"
                          placeholder="Your name"
                          className="h-12 w-full border-b border-slate-300 bg-transparent px-0 text-sm outline-none placeholder:text-slate-400 focus:border-blue-600"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-semibold text-slate-700">
                          Business Name
                        </label>

                        <input
                          name="businessName"
                          type="text"
                          placeholder="Business name"
                          className="h-12 w-full border-b border-slate-300 bg-transparent px-0 text-sm outline-none placeholder:text-slate-400 focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs font-semibold text-slate-700">
                          Phone Number *
                        </label>

                        <input
                          required
                          name="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          className="h-12 w-full border-b border-slate-300 bg-transparent px-0 text-sm outline-none placeholder:text-slate-400 focus:border-blue-600"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-semibold text-slate-700">
                          Email
                        </label>

                        <input
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          className="h-12 w-full border-b border-slate-300 bg-transparent px-0 text-sm outline-none placeholder:text-slate-400 focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      {/* City */}
                      <div>
                        <label className="mb-2.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                          City <span className="text-blue-600">*</span>
                        </label>

                        <input
                          required
                          name="city"
                          type="text"
                          placeholder="Enter your city"
                          className="
        h-14 w-full
        rounded-xl
        border border-slate-200
        bg-slate-50/70
        px-4
        text-sm text-slate-900
        outline-none
        transition-all duration-200
        placeholder:text-slate-400
        hover:border-slate-300
        hover:bg-slate-50
        focus:border-blue-600
        focus:bg-white
        focus:ring-4
        focus:ring-blue-600/10
      "
                        />
                      </div>

                      {/* State */}
                      {/* State */}
                      <div ref={stateDropdownRef} className="relative">
                        <label className="mb-2.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                          State <span className="text-blue-600">*</span>
                        </label>

                        {/* Important: keeps FormData working */}
                        <input type="hidden" name="state" value={state} />

                        {/* Dropdown trigger */}
                        <button
                          type="button"
                          onClick={() => {
                            setStateOpen((prev) => !prev);
                            setStateSearch("");
                          }}
                          className={`
      flex h-14 w-full items-center justify-between
      rounded-xl border
      bg-slate-50/70
      px-4
      text-left text-sm
      transition-all duration-200
      ${
        stateOpen
          ? "border-blue-600 bg-white ring-4 ring-blue-600/10"
          : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
      }
    `}
                        >
                          <span
                            className={
                              state ? "text-slate-900" : "text-slate-400"
                            }
                          >
                            {state || "Select your state"}
                          </span>

                          <ChevronDown
                            size={18}
                            strokeWidth={1.8}
                            className={`
        shrink-0 text-slate-400
        transition-transform duration-200
        ${stateOpen ? "rotate-180 text-blue-600" : ""}
      `}
                          />
                        </button>

                        {/* Premium dropdown panel */}
                        {stateOpen && (
                          <div
                            className="
        absolute left-0 right-0 z-50 mt-2
        overflow-hidden
        rounded-2xl
        border border-slate-200
        bg-white
        shadow-[0_20px_60px_rgba(15,23,42,0.14)]
      "
                          >
                            {/* Search */}
                            <div className="border-b border-slate-100 p-3">
                              <div className="relative">
                                <svg
                                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <circle cx="11" cy="11" r="7" />
                                  <path d="m20 20-4-4" />
                                </svg>

                                <input
                                  type="text"
                                  value={stateSearch}
                                  onChange={(e) =>
                                    setStateSearch(e.target.value)
                                  }
                                  placeholder="Search state..."
                                  autoFocus
                                  className="
              h-11 w-full
              rounded-xl
              bg-slate-50
              pl-10 pr-3
              text-sm text-slate-800
              outline-none
              placeholder:text-slate-400
              focus:bg-slate-100
            "
                                />
                              </div>
                            </div>

                            {/* State list */}
                            <div className="max-h-64 overflow-y-auto p-2">
                              {filteredStates.length > 0 ? (
                                filteredStates.map((item) => {
                                  const selected = state === item;

                                  return (
                                    <button
                                      key={item}
                                      type="button"
                                      onClick={() => {
                                        setState(item);
                                        setStateOpen(false);
                                        setStateSearch("");
                                      }}
                                      className={`
                  flex w-full items-center justify-between
                  rounded-xl
                  px-3 py-3
                  text-left text-sm
                  transition-colors
                  ${
                    selected
                      ? "bg-blue-50 font-medium text-blue-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }
                `}
                                    >
                                      <span>{item}</span>

                                      {selected && (
                                        <Check
                                          size={17}
                                          strokeWidth={2}
                                          className="shrink-0 text-blue-600"
                                        />
                                      )}
                                    </button>
                                  );
                                })
                              ) : (
                                <div className="px-3 py-8 text-center text-sm text-slate-400">
                                  No state found
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-semibold text-slate-700">
                        Tell us about your business
                      </label>

                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell us about your business, experience or plans..."
                        className="w-full resize-none border-b border-slate-300 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-blue-600"
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      Submit Dealer Enquiry
                      <ArrowUpRight size={17} />
                    </button>

                    <p className="text-center text-[11px] leading-5 text-slate-400">
                      By submitting this form, you agree to be contacted by the
                      RIJI EV team regarding the dealership opportunity.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-slate-50 py-24 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <div className="text-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
                Frequently asked
              </span>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Questions, answered.
              </h2>
            </div>

            <div className="mt-12 overflow-hidden rounded-[24px] bg-white">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-slate-200 last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8"
                    >
                      <span className="text-sm font-semibold text-slate-900 sm:text-base">
                        {faq.question}
                      </span>

                      <ChevronDown
                        size={19}
                        className={`shrink-0 text-slate-400 transition-transform ${
                          isOpen ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 sm:px-8">
                        <p className="max-w-3xl text-sm leading-7 text-slate-500">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="relative overflow-hidden bg-slate-950 py-28 text-white lg:py-36">
          <div className="absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-400">
              Partner with RIJI EV
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              The next opportunity
              <br />
              could be
              <br />
              <span className="text-blue-500">your city.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/50">
              Start a conversation with RIJI EV and explore the possibility of
              bringing electric mobility to your market.
            </p>

            <a
              href="#dealer-enquiry"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Become a Dealer
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white">
                <ArrowUpRight size={15} />
              </span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dealership;
