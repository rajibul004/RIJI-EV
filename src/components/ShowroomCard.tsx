import React from "react";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

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
    <div
      className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border ${
        featured ? "ring-2 ring-blue-500 relative" : "border-gray-100"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Flagship Store
          </span>
        </div>
      )}

      <h3 className="text-xl font-bold text-gray-900 mb-2">{city}</h3>

      <p className="flex gap-2 text-sm text-gray-600 mb-2">
        <MapPin size={16} className="text-blue-500 mt-1" />
        {address}
      </p>

      <p className="flex gap-2 text-sm text-gray-600 mb-2">
        <Phone size={16} className="text-green-500" />
        {phone}
      </p>

      <p className="flex gap-2 text-sm text-gray-600 mb-4">
        <Clock size={16} className="text-orange-500" />
        {timing}
      </p>

      {/* ✅ GET DIRECTIONS */}
      <a
        href={mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-sm font-semibold hover:scale-105 transition"
      >
        Get Directions <ArrowRight size={14} />
      </a>
    </div>
  );
};

export default ShowroomCard;
