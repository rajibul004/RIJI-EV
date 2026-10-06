import React, { useState } from "react";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";

import { enquirySchema, EnquiryPayload } from "@/validation/enquirySchema";

const SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryPayload>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const [popup, setPopup] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  /* =========================================================
     HANDLE INPUT
  ========================================================= */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  /* =========================================================
     FIELD VALIDATION
  ========================================================= */

  const handleBlur = (field: keyof EnquiryPayload) => {
    const parsed = enquirySchema.safeParse(formData);

    if (!parsed.success) {
      const error = parsed.error.errors.find((err) => err.path[0] === field);

      setErrors((prev) => ({
        ...prev,
        [field]: error?.message || "",
      }));
    }
  };

  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = enquirySchema.safeParse(formData);

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};

      parsed.error.errors.forEach((err) => {
        const field = String(err.path[0]);

        if (!fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });

      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      if (!SHEET_URL) {
        throw new Error("Google Sheet URL is not configured.");
      }

      const response = await fetch(SHEET_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit enquiry.");
      }

      setPopup({
        type: "success",
        message:
          "Thank you for contacting RIJI EV. Our team will get back to you shortly.",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);

      setPopup({
        type: "error",
        message:
          "We couldn't send your enquiry right now. Please try again later.",
      });
    } finally {
      setLoading(false);

      setTimeout(() => {
        setPopup(null);
      }, 4000);
    }
  };

  /* =========================================================
     INPUT STYLE
  ========================================================= */

  const inputClass = (field: string) =>
    `
    w-full
    bg-transparent
    border-b
    ${
      errors[field]
        ? "border-red-500"
        : "border-slate-300 focus:border-[#0165F6]"
    }
    px-0
    py-2.5
    text-sm
    text-slate-950
    placeholder:text-slate-400
    outline-none
    transition-colors
    duration-200
  `;

  return (
    <>
      {/* =====================================================
          FORM
      ===================================================== */}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ---------------------------------------------------
            NAME + EMAIL
        --------------------------------------------------- */}

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500"
            >
              Full name
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Your name"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={() => handleBlur("fullName")}
              disabled={loading}
              autoComplete="name"
              className={inputClass("fullName")}
            />

            {errors.fullName && (
              <p className="mt-2 text-xs text-red-500">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500"
            >
              Email address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur("email")}
              disabled={loading}
              autoComplete="email"
              className={inputClass("email")}
            />

            {errors.email && (
              <p className="mt-2 text-xs text-red-500">{errors.email}</p>
            )}
          </div>
        </div>

        {/* ---------------------------------------------------
            PHONE + ENQUIRY TYPE
        --------------------------------------------------- */}

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500"
            >
              Phone number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={handleChange}
              onBlur={() => handleBlur("phone")}
              disabled={loading}
              autoComplete="tel"
              className={inputClass("phone")}
            />

            {errors.phone && (
              <p className="mt-2 text-xs text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Enquiry */}
          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500"
            >
              Enquiry type
            </label>

            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={() => handleBlur("subject")}
              disabled={loading}
              className={`
    w-full
    border-b
    ${
      errors.subject
        ? "border-red-500"
        : "border-slate-300 focus:border-[#0165F6]"
    }
    bg-transparent
    px-0
    py-2.5
    text-sm
    text-slate-950
    outline-none
    transition-colors
    duration-200
  `}
            >
              <option value="">Select an enquiry</option>

              <option value="test-drive">Test Drive</option>

              <option value="purchase">Vehicle Purchase</option>

              <option value="support">Service & Support</option>

              <option value="spare-parts">Spare Parts</option>

              <option value="feedback">General Feedback</option>

              <option value="general">Other</option>
            </select>

            {errors.subject && (
              <p className="mt-2 text-xs text-red-500">{errors.subject}</p>
            )}
          </div>
        </div>

        {/* ---------------------------------------------------
            MESSAGE
        --------------------------------------------------- */}

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500"
          >
            Your message
          </label>

          <textarea
            id="message"
            name="message"
            rows={2}
            placeholder="Tell us what you'd like to know..."
            value={formData.message}
            onChange={handleChange}
            onBlur={() => handleBlur("message")}
            disabled={loading}
            className={`
              w-full
              resize-none
              border-b
              ${
                errors.message
                  ? "border-red-500"
                  : "border-slate-300 focus:border-[#0165F6]"
              }
              bg-transparent
              px-0
           py-2.5
text-sm
leading-6
              text-slate-950
              placeholder:text-slate-400
              outline-none
              transition-colors
              duration-200
            `}
          />

          {errors.message && (
            <p className="mt-2 text-xs text-red-500">{errors.message}</p>
          )}
        </div>

        {/* ---------------------------------------------------
            SUBMIT
        --------------------------------------------------- */}

        <div className="flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-sm text-xs leading-5 text-slate-400">
            By submitting this form, you are sharing your details with the RIJI
            EV team so we can respond to your enquiry.
          </p>

          <button
            type="submit"
            disabled={loading}
            className="
              group
              inline-flex
              shrink-0
              items-center
              justify-center
              gap-3
              rounded-full
              bg-slate-950
             px-6
py-3
text-xs
              font-medium
              text-white
              transition-all
              duration-200
              hover:bg-[#0165F6]
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {loading ? (
              <>
                <Loader2 size={17} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send enquiry
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </>
            )}
          </button>
        </div>
      </form>

      {/* =====================================================
          SUCCESS / ERROR POPUP
      ===================================================== */}

      {popup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 px-5 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-2xl">
            {/* Icon */}
            <div
              className={`
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                ${
                  popup.type === "success"
                    ? "bg-blue-50 text-[#0165F6]"
                    : "bg-red-50 text-red-500"
                }
              `}
            >
              {popup.type === "success" ? (
                <Check size={25} strokeWidth={2} />
              ) : (
                <span className="text-xl font-semibold">!</span>
              )}
            </div>

            {/* Title */}
            <h3 className="mt-6 text-center text-2xl font-semibold tracking-[-0.025em] text-slate-950">
              {popup.type === "success"
                ? "Thank you."
                : "Something went wrong."}
            </h3>

            {/* Message */}
            <p className="mt-3 text-center text-sm leading-7 text-slate-500">
              {popup.message}
            </p>

            {/* Button */}
            <button
              type="button"
              onClick={() => setPopup(null)}
              className="
                mt-7
                w-full
                rounded-full
                bg-slate-950
                py-3.5
                text-sm
                font-medium
                text-white
                transition
                hover:bg-[#0165F6]
              "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
