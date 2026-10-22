import { useEffect, useState } from "react";
import {
  Zap,
  Phone,
  MessageCircle,
  CalendarCheck,
  Store,
  X,
  ArrowUpRight,
} from "lucide-react";

const actions = [
  {
    label: "Call Sales",
    description: "Speak with our team",
    icon: Phone,
    href: "tel:+91YOURNUMBER",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    label: "WhatsApp",
    description: "Chat with RIJI EV",
    icon: MessageCircle,
    href: "https://wa.me/YOURNUMBER",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    label: "Book a Test Ride",
    description: "Feel the electric drive",
    icon: CalendarCheck,
    href: "/contact?enquiry=test-ride",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    label: "Become a Dealer",
    description: "Grow with our network",
    icon: Store,
    href: "/dealership",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

export default function QuickActions() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="fixed bottom-5 right-4 z-50 sm:bottom-7 sm:right-6">
      {/* Compact premium dock */}
      <div className="flex flex-col items-center gap-2 rounded-[22px] border border-white/10 bg-[#091323]/95 p-2 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
        {/* Animated power button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close quick actions" : "Open quick actions"}
          aria-expanded={open}
          aria-haspopup="dialog"
          className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-[15px] bg-[#0165F6] text-white shadow-[0_0_18px_rgba(1,101,246,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(1,101,246,0.55)] active:scale-90"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:animate-[shimmer_1s_ease-in-out]" />
          <span
            className={`relative transition-transform duration-300 ${
              open ? "rotate-90" : "rotate-0"
            }`}
          >
            {open ? <X size={18} /> : <Zap size={19} fill="currentColor" />}
          </span>
        </button>

        <span className="h-px w-5 bg-white/10" />

        {/* Always-accessible icon rail */}
        {actions.map(
          ({ label, description, icon: Icon, href, color, bg }, index) => (
            <div
              key={label}
              className="group relative"
              style={{ animationDelay: `${index * 45}ms` }}
            >
              <span className="pointer-events-none absolute right-[49px] top-1/2 z-30 hidden -translate-y-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-[#101B2D] px-3 py-2 text-[11px] text-white shadow-xl group-hover:block">
                <span className="block font-semibold">{label}</span>
                <span className="mt-0.5 block text-[10px] text-slate-400">
                  {description}
                </span>
              </span>

              <a
                href={href}
                aria-label={label}
                title={label}
                className={`flex h-9 w-9 items-center justify-center rounded-[13px] ${bg} ${color} transition-all duration-200 hover:scale-110 hover:rounded-xl hover:shadow-md active:scale-90`}
              >
                <Icon size={17} strokeWidth={1.9} />
              </a>
            </div>
          ),
        )}

        <span className="mb-0.5 flex items-center justify-center">
          <span className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.8)]" />
        </span>
      </div>

      {/* Compact animated contact card */}
      <div
        role="dialog"
        aria-label="RIJI EV quick actions"
        aria-hidden={!open}
        className={`absolute bottom-0 right-[62px] w-[min(270px,calc(100vw-100px))] origin-bottom-right overflow-hidden rounded-[20px] border border-slate-200/80 bg-white shadow-[0_18px_55px_-15px_rgba(15,23,42,0.3)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open
            ? "visible translate-x-0 scale-100 opacity-100"
            : "invisible translate-x-2 scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative overflow-hidden bg-gradient-to-br from-[#07111F] to-[#0D3470] px-4 py-3.5 text-white">
          <div className="absolute -right-5 -top-8 h-20 w-20 rounded-full border border-white/10" />
          <div className="relative flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#0165F6] shadow-lg shadow-blue-950/30">
              <Zap size={17} fill="currentColor" />
            </span>
            <div>
              <p className="text-[9px] font-bold tracking-[0.2em] text-blue-200">
                RIJI EV
              </p>
              <h3 className="mt-0.5 text-sm font-semibold tracking-tight">
                Let’s connect.
              </h3>
            </div>
          </div>
        </div>

        <div className="p-1.5">
          {actions.map(
            ({ label, description, icon: Icon, href, color, bg }, index) => (
              <a
                key={label}
                href={href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${index * 35}ms` : "0ms" }}
                className={`group flex items-center gap-2.5 rounded-xl px-2.5 py-2 transition-all duration-200 hover:bg-slate-50 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[11px] ${bg} ${color}`}
                >
                  <Icon size={16} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] font-semibold text-slate-900">
                    {label}
                  </span>
                  <span className="mt-0.5 block text-[10px] text-slate-500">
                    {description}
                  </span>
                </span>
                <ArrowUpRight
                  size={14}
                  className="shrink-0 text-slate-300 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
                />
              </a>
            ),
          )}
        </div>

        <div className="border-t border-slate-100 px-3 py-2 text-center text-[9px] tracking-[0.12em] text-slate-400">
          ELECTRIC MOBILITY · RIJI EV
        </div>
      </div>
    </div>
  );
}
