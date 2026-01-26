import { Button } from "@/components/ui/button";
import {
  Leaf,
  Zap,
  DollarSign,
  Award,
  Battery,
  Shield,
  ArrowRight,
  Clock,
} from "lucide-react";

const EVPromotionalSection = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "Eco-Friendly",
      desc: "Zero emissions and 100% environment friendly operation for a greener tomorrow.",
    },
    {
      icon: DollarSign,
      title: "Cost Efficient",
      desc: "Save up to 90% on fuel costs with minimal maintenance requirements.",
    },
    {
      icon: Zap,
      title: "Powerful Performance",
      desc: "Instant torque delivery with smooth and silent operation on all terrains.",
    },
    {
      icon: Shield,
      title: "Safe & Reliable",
      desc: "Advanced safety features with proven durability and long-lasting performance.",
    },
  ];

  const features = [
    { icon: Battery, text: "Long Range Battery" },
    { icon: Clock, text: "Fast Charging" },
    { icon: Award, text: "5 Year Warranty" },
    { icon: Shield, text: "Premium Build Quality" },
  ];

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center
      bg-gradient-to-br from-[#0b0f14] via-[#0f172a] to-black"
    >
      {/* ================= AI GLOW BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-24 w-[420px] h-[420px] bg-cyan-500/30 blur-[160px] rounded-full" />
        <div className="absolute bottom-24 right-32 w-[520px] h-[520px] bg-amber-500/25 blur-[180px] rounded-full" />
      </div>

      {/* ================= NOISE OVERLAY ================= */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]
        bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]"
      />

      <div className="max-w-7xl mx-auto px-6 py-10 relative z-10 w-full">
        {/* ================= HERO HEADER ================= */}
        <div className="text-center mb-10">
          <span
            className="inline-block px-6 py-2 mb-5 rounded-full
            bg-black/60 backdrop-blur
            border border-cyan-400/40
            text-cyan-300 text-sm font-semibold tracking-widest uppercase
            shadow-[0_0_25px_rgba(34,211,238,0.4)]"
          >
            Special Offer
          </span>

          <h1
            className="text-4xl lg:text-6xl font-extrabold tracking-tight
            text-transparent bg-clip-text
            bg-gradient-to-r from-white via-amber-200 to-amber-400
            drop-shadow-[0_12px_40px_rgba(0,0,0,0.9)]"
          >
            The Future of Transportation
          </h1>

          <h2
            className="mt-4 text-2xl lg:text-4xl font-semibold
            text-transparent bg-clip-text
            bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400"
          >
            Why Choose Electric Vehicles?
          </h2>

          <p className="mt-6 text-base lg:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Experience{" "}
            <span className="text-cyan-300 font-semibold">power</span>,
            <span className="text-amber-300 font-semibold"> savings</span>, and
            a<span className="text-sky-300 font-semibold"> cleaner future</span>
            with next-generation electric mobility.
          </p>
        </div>

        {/* ================= BENEFITS ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="bg-black/55 backdrop-blur-xl
              border border-white/10 rounded-2xl p-6
              shadow-[0_30px_80px_rgba(0,0,0,0.8)]
              hover:shadow-[0_40px_120px_rgba(34,211,238,0.25)]
              hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className="w-14 h-14 rounded-full
                  bg-gradient-to-br from-cyan-400 to-amber-500
                  shadow-[0_0_30px_rgba(56,189,248,0.6)]
                  flex items-center justify-center mb-4"
                >
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= PROMO BANNER ================= */}
        <div
          className="relative rounded-2xl p-6
          bg-black/65 backdrop-blur-2xl
          border border-white/15
          shadow-[0_40px_120px_rgba(0,0,0,0.9)]"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Features */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2
                  bg-white/5 border border-white/10 rounded-full
                  text-slate-100 backdrop-blur
                  hover:border-cyan-400/50 transition"
                >
                  <feature.icon className="w-4 h-4 text-cyan-300" />
                  <span className="text-xs font-semibold">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="relative px-10 py-6 text-base font-bold text-white
                bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500
                rounded-full
                shadow-[0_20px_60px_rgba(56,189,248,0.6)]
                hover:shadow-[0_30px_90px_rgba(56,189,248,0.9)]
                hover:scale-105 transition"
              >
                Book Test Ride
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-10 py-6 text-base font-bold
                border border-white/30 text-white
                bg-transparent hover:bg-white/10 rounded-full"
              >
                View Catalogue
              </Button>
            </div>
          </div>

          {/* Offer */}
          <div className="mt-6 pt-5 border-t border-white/10 text-center">
            <div className="flex items-center justify-center gap-2 text-amber-300">
              <Award className="w-5 h-5" />
              <span className="font-semibold">
                Limited Time Offer: Save up to ₹50,000 + 20% Discount
              </span>
              <Award className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Footer ornament */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          <Leaf className="w-5 h-5 text-cyan-300" />
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default EVPromotionalSection;
