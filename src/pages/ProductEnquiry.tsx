import { useState, type FormEvent } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  BatteryCharging,
  CheckCircle2,
  Leaf,
  LoaderCircle,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  UserRound,
  Zap,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { products } from "../components/ProductsData";
import performanceImage from "../assets/performance.png";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ;
const SUPPORT_PHONE = import.meta.env.VITE_SUPPORT_PHONE || "8617616397";

type EnquiryForm = {
  name: string;
  phone: string;
  city: string;
};

export default function ProductEnquiry() {
  const location = useLocation();
  const productId = location.state?.productId;

  const selectedProduct = products.find(
    (product) => String(product.id) === String(productId),
  );

  const [form, setForm] = useState<EnquiryForm>({
    name: "",
    phone: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!selectedProduct) return <Navigate to="/products" replace />;

  const vehicleName = selectedProduct.name;
  const rawPrice = selectedProduct.price;

  const formattedPrice =
    typeof rawPrice === "number"
      ? `₹ ${rawPrice.toLocaleString("en-IN")}`
      : rawPrice
        ? String(rawPrice).startsWith("₹")
          ? String(rawPrice)
          : `₹ ${rawPrice}`
        : "Contact for price";

  const updateField = (field: keyof EnquiryForm, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));
    setError("");
    setSuccess(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    const name = form.name.trim();
    const phone = form.phone.trim();
    const city = form.city.trim();

    if (name.length < 2) {
      setError("Please enter your full name.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("Enter a valid 10-digit Indian mobile number.");
      return;
    }
    if (city.length < 2) {
      setError("Please enter your city or town.");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError(
        "Enquiry service is not configured. Please call or WhatsApp us.",
      );
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          customer_name: name,
          customer_phone: phone,
          customer_city: city,
          vehicle_name: vehicleName,
          vehicle_price: formattedPrice,
          customer_message: `Product enquiry for ${vehicleName}. Please contact me with details and offers.`,
        },
        { publicKey },
      );

      setSuccess(true);
      setForm({ name: "", phone: "", city: "" });
    } catch (err) {
      console.error("EmailJS enquiry error:", err);
      setError(
        "Unable to send your enquiry. Please try again or contact us directly.",
      );
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello RIJI EV! I am interested in ${vehicleName} (${formattedPrice}). Please share more details.`,
  );

  const phoneLink = `tel:${SUPPORT_PHONE.replace(/[^\d+]/g, "")}`;
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-white text-[#0b1f43] lg:h-dvh lg:overflow-hidden">
      {/* Compact header */}
      <header className="flex h-14 items-center justify-between border-b border-slate-100 px-4 sm:px-6 lg:px-8">
        <Link
          to="/products"
          className="flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold transition hover:border-[#0165F6] hover:text-[#0165F6]"
        >
          <ArrowLeft size={14} />
          Products
        </Link>

        <Link to="/" aria-label="RIJI EV home" className="leading-none">
          <span className="text-2xl font-black tracking-tight">
            RIJI <span className="text-[#0165F6]">EV.</span>
          </span>
          <span className="mt-1 block text-[8px] font-bold tracking-[0.3em] text-slate-500">
            ELECTRIC MOBILITY
          </span>
        </Link>
      </header>

      {/* Full viewport layout on desktop */}
      <section className="grid lg:h-[calc(100dvh-56px)] lg:min-h-0 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Compact image and brand section */}
        <div className="relative flex min-h-[390px] flex-col overflow-hidden lg:min-h-0">
          <img
            src={performanceImage}
            alt="RIJI EV electric mobility"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#071b3d]/75 via-[#071b3d]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071b3d]/70 via-transparent to-[#071b3d]/10" />

          <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-7 sm:px-9 lg:justify-end lg:px-8 lg:pb-7 xl:px-10">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/90 sm:text-xs">
              Cleaner today. Brighter tomorrow.
            </p>

            <h1 className="text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-4xl xl:text-5xl">
              Ride
              <span className="block text-[#57a0ff]">Electric.</span>
              <span className="block">Live Better.</span>
            </h1>

            <p className="mt-3 max-w-xs text-sm leading-5 text-white/90 sm:text-base">
              Smart. Efficient. Sustainable.
              <span className="block">Mobility for a brighter tomorrow.</span>
            </p>

            <div className="mt-6 grid max-w-md grid-cols-3 gap-2">
              <div className="border-l border-white/70 pl-2.5">
                <Zap size={18} className="mb-1.5 text-white" />
                <p className="text-xs font-bold text-white sm:text-sm">
                  Performance
                </p>
                <p className="mt-0.5 text-[10px] text-white/75">
                  Everyday rides
                </p>
              </div>

              <div className="border-l border-white/70 pl-2.5">
                <BatteryCharging size={18} className="mb-1.5 text-white" />
                <p className="text-xs font-bold text-white sm:text-sm">
                  Electric
                </p>
                <p className="mt-0.5 text-[10px] text-white/75">
                  Modern mobility
                </p>
              </div>

              <div className="border-l border-white/70 pl-2.5">
                <Leaf size={18} className="mb-1.5 text-white" />
                <p className="text-xs font-bold text-white sm:text-sm">
                  Eco friendly
                </p>
                <p className="mt-0.5 text-[10px] text-white/75">
                  Cleaner future
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Compact enquiry panel */}
        <div className="flex items-center justify-center bg-[#f8faff] px-6 py-8 sm:px-10 sm:py-8 lg:min-h-0 lg:px-10 lg:py-4 xl:px-14 xl:py-6">
          <div className="w-full max-w-[520px]">
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#0165F6]">
                Personal enquiry
              </span>
              <span className="flex items-center gap-1 text-[10px] text-slate-500 sm:text-xs">
                <ShieldCheck size={14} className="text-[#0165F6]" />
                Secure enquiry
              </span>
            </div>
            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              Let’s <span className="text-[#0165F6]">Connect.</span>
            </h2>
            <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm">
              Get offers and details about your selected vehicle.
            </p>
            {/* Selected product */}
            <div className="mt-4 flex items-center justify-between gap-4 rounded-xl bg-[#eaf3ff] px-5 py-4">
              <div className="min-w-0">
                <p className="text-[10px] text-slate-500">Selected vehicle</p>
                <p className="mt-0.5 truncate text-sm font-bold text-[#102750]">
                  {vehicleName}
                </p>
              </div>
              <p className="shrink-0 text-base font-black text-[#0165F6] sm:text-lg">
                {formattedPrice}
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-3 space-y-2">
              <label className="flex min-h-[60px] items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 transition focus-within:border-[#0165F6] focus-within:ring-2 focus-within:ring-blue-100">
                <UserRound size={18} className="shrink-0 text-[#164c96]" />
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-semibold text-slate-600">
                    Full name *
                  </span>
                  <input
                    type="text"
                    name="customer_name"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={80}
                    value={form.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                    placeholder="Enter your full name"
                    className="mt-0.5 w-full bg-transparent text-xs outline-none placeholder:text-slate-400 sm:text-sm"
                  />
                </span>
              </label>

              <label className="flex min-h-[50px] items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 transition focus-within:border-[#0165F6] focus-within:ring-2 focus-within:ring-blue-100">
                <Phone size={18} className="shrink-0 text-[#164c96]" />
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-semibold text-slate-600">
                    Mobile number *
                  </span>
                  <span className="mt-0.5 flex items-center gap-2">
                    <span className="text-xs text-slate-500">+91</span>
                    <input
                      type="tel"
                      name="customer_phone"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      required
                      maxLength={10}
                      value={form.phone}
                      onChange={(event) =>
                        updateField(
                          "phone",
                          event.target.value.replace(/\D/g, "").slice(0, 10),
                        )
                      }
                      placeholder="10-digit mobile number"
                      className="min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-slate-400 sm:text-sm"
                    />
                  </span>
                </span>
              </label>

              <label className="flex min-h-[50px] items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 transition focus-within:border-[#0165F6] focus-within:ring-2 focus-within:ring-blue-100">
                <MapPin size={18} className="shrink-0 text-[#164c96]" />
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-semibold text-slate-600">
                    City or town *
                  </span>
                  <input
                    type="text"
                    name="customer_city"
                    autoComplete="address-level2"
                    required
                    minLength={2}
                    maxLength={80}
                    value={form.city}
                    onChange={(event) =>
                      updateField("city", event.target.value)
                    }
                    placeholder="Enter your city or town"
                    className="mt-0.5 w-full bg-transparent text-xs outline-none placeholder:text-slate-400 sm:text-sm"
                  />
                </span>
              </label>

              {error && (
                <p
                  role="alert"
                  className="rounded-md bg-red-50 px-3 py-1.5 text-xs text-red-700"
                >
                  {error}
                </p>
              )}

              {success && (
                <p
                  role="status"
                  className="flex items-center gap-1.5 rounded-md bg-green-50 px-3 py-1.5 text-xs text-green-700"
                >
                  <CheckCircle2 size={15} />
                  Enquiry sent successfully! We’ll contact you soon.
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex min-h-[56px] w-full items-center justify-center gap-2 rounded-xl bg-[#0165F6] px-5 py-3 text-base font-bold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <LoaderCircle size={17} className="animate-spin" />
                    Sending enquiry...
                  </>
                ) : (
                  <>
                    <MessageCircle size={17} />
                    Request a Callback
                  </>
                )}
              </button>
            </form>
            <div className="my-3 flex items-center gap-2">
              <span className="h-px flex-1 bg-slate-200" />
              <span className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                Or contact directly
              </span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={phoneLink}
                className="flex min-h-[42px] items-center justify-center gap-1.5 rounded-lg border border-[#0165F6] bg-white px-2 text-xs font-bold text-[#0165F6] transition hover:bg-blue-50 sm:text-sm"
              >
                <Phone size={16} />
                Call Us
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[42px] items-center justify-center gap-1.5 rounded-lg border border-emerald-300 bg-white px-2 text-xs font-bold text-emerald-700 transition hover:bg-emerald-50 sm:text-sm"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
            </div>
            <p className="mt-2.5 flex items-center justify-center gap-1.5 text-center text-[9px] text-slate-400">
              <ShieldCheck size={13} />
              Your details are used to respond to your enquiry.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
