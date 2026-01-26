import React from "react";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ShowroomCardProps {
  city: string;
  address: string;
  phone: string;
  timing: string;
  mapLink: string;
  featured?: boolean;
}

const ShowroomCard: React.FC<ShowroomCardProps> = ({
  city,
  address,
  phone,
  timing,
  mapLink,
  featured = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="relative group"
    >
      {/* ===== Glow Layer ===== */}
      <div
        className={`absolute inset-0 rounded-3xl blur-2xl opacity-0
        group-hover:opacity-100 transition duration-500
        ${
          featured
            ? "bg-gradient-to-r from-blue-500/40 to-purple-500/40"
            : "bg-gradient-to-r from-cyan-400/30 to-blue-400/30"
        }`}
      />

      {/* ===== Card ===== */}
      <div
        className={`relative rounded-3xl p-6
        bg-white/70 backdrop-blur-xl
        border border-white/60
        shadow-[0_30px_80px_rgba(0,0,0,0.15)]
        transition
        ${featured ? "ring-2 ring-blue-500/60" : ""}`}
      >
        {/* ===== Flagship Badge ===== */}
        {featured && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <motion.span
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="px-5 py-1.5 rounded-full text-xs font-bold tracking-widest
              bg-gradient-to-r from-blue-600 to-purple-600
              text-white shadow-lg"
            >
              FLAGSHIP STORE
            </motion.span>
          </div>
        )}

        {/* ===== City ===== */}
        <h3 className="text-xl font-extrabold text-gray-900 mb-3">{city}</h3>

        {/* ===== Details ===== */}
        <div className="space-y-3 text-sm text-gray-700">
          <p className="flex gap-2 items-start">
            <MapPin className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
            <span>{address}</span>
          </p>

          <p className="flex gap-2 items-center">
            <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{phone}</span>
          </p>

          <p className="flex gap-2 items-center">
            <Clock className="w-4 h-4 text-orange-500 shrink-0" />
            <span>{timing}</span>
          </p>
        </div>

        {/* ===== CTA ===== */}
        <motion.a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-5 inline-flex items-center gap-2 px-5 py-2.5
          rounded-full text-sm font-semibold text-white
          bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600
          shadow-[0_15px_50px_rgba(59,130,246,0.5)]
          hover:shadow-[0_25px_80px_rgba(59,130,246,0.8)]
          transition"
        >
          Get Directions
          <ArrowRight size={14} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ShowroomCard;
