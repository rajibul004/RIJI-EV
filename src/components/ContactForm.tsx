import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { enquirySchema, EnquiryPayload } from "@/validation/enquirySchema";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const ContactForm = () => {
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ MOVED OUT — THIS IS THE FIX
  const handleBlur = (field: keyof EnquiryPayload) => {
    const parsed = enquirySchema.safeParse(formData);

    if (!parsed.success) {
      const error = parsed.error.errors.find((err) => err.path[0] === field);

      setErrors((prev) => ({
        ...prev,
        [field]: error?.message || "",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = enquirySchema.safeParse(formData);

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.errors.forEach((err) => {
        fieldErrors[String(err.path[0])] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setPopup({
        type: "success",
        message:
          "Thank you for your message! Our team will contact you shortly.",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch {
      setPopup({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setPopup(null), 3000);
    }
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <input
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          onBlur={() => handleBlur("fullName")}
          disabled={loading}
          className="w-full px-4 py-3 rounded-xl border"
        />
        {errors.fullName && (
          <p className="text-xs text-red-500">{errors.fullName}</p>
        )}

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => handleBlur("email")}
          disabled={loading}
          className="w-full px-4 py-3 rounded-xl border"
        />
        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}

        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          onBlur={() => handleBlur("phone")}
          disabled={loading}
          className="w-full px-4 py-3 rounded-xl border"
        />
        {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}

        <label htmlFor="subject" className="sr-only">
          Enquiry Subject
        </label>

        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          onBlur={() => handleBlur("subject")}
          disabled={loading}
          className="w-full px-4 py-3 rounded-xl border bg-white"
        >
          <option value="">Select Subject</option>
          <option value="test-drive">Test Drive</option>
          <option value="purchase">Purchase</option>
          <option value="support">Support</option>
          <option value="Dealership Enquiry">Dealership Enquiry</option>
        </select>

        <textarea
          name="message"
          rows={4}
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          onBlur={() => handleBlur("message")}
          disabled={loading}
          className="w-full px-4 py-3 rounded-xl border"
        />
        {errors.message && (
          <p className="text-xs text-red-500">{errors.message}</p>
        )}

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold"
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>

      <AnimatePresence>
        {popup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={`bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-2xl border ${
                popup.type === "success" ? "border-green-500" : "border-red-500"
              }`}
            >
              <h3 className="text-xl font-bold mb-2">
                {popup.type === "success" ? "Thank You 🎉" : "Error ❌"}
              </h3>

              <p className="text-gray-700 mb-6">{popup.message}</p>

              <button
                onClick={() => setPopup(null)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold"
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactForm;
