import { Battery, Zap, Gauge, Clock } from "lucide-react";

import RijiVoltImg from "@/assets/products/e-rickshaw.png";
import RijiMaxImg from "@/assets/products/Scooter1.png";
import RijiTotoImg from "@/assets/products/toto2.png";

export const products = [
  {
    id: 1,
    name: "RijiVolt",
    category: "toto",
    categoryLabel: "Electric Vehicle",
    price: 89999,
    image: RijiVoltImg,
    specs: [
      { label: "Battery", value: "2.5 kWh", Icon: Battery },
      { label: "Range", value: "120 km", Icon: Zap },
      { label: "Top Speed", value: "60 km/h", Icon: Gauge },
      { label: "Charging", value: "4 hrs", Icon: Clock },
    ],
    features: [
      {
        title: "Performance",
        items: ["110–120 km range", "Eco / Drive / Speed modes"],
      },
      {
        title: "Comfort",
        items: ["43mm front & rear suspension", "Durable body"],
      },
      {
        title: "Technology",
        items: ["LCD meter", "Music system", "USB charging"],
      },
      {
        title: "Safety",
        items: ["Sensor lock", "Handle lock", "LED lighting"],
      },
    ],
    colors: ["#FF6B35", "#3B82F6", "#1F2937"],
  },

  {
    id: 2,
    name: "RijiMax",
    category: "scooty",
    categoryLabel: "Electric Scooty",
    price: 109999,
    image: RijiMaxImg,
    specs: [
      { label: "Battery", value: "3.5 kWh", Icon: Battery },
      { label: "Range", value: "170 km", Icon: Zap },
      { label: "Top Speed", value: "80 km/h", Icon: Gauge },
      { label: "Charging", value: "3.5 hrs", Icon: Clock },
    ],
    features: [
      {
        title: "Performance",
        items: ["170 km long range", "High-speed motor (80 km/h)"],
      },
      {
        title: "Comfort",
        items: ["Ergonomic seating", "Smooth suspension setup"],
      },
      {
        title: "Technology",
        items: ["Large 7-inch digital display", "Premium sound system"],
      },
      {
        title: "Premium Features",
        items: ["Heated grips", "Enhanced riding experience"],
      },
    ],
    colors: ["#10B981", "#F59E0B", "#8B5CF6"],
  },

  {
    id: 3,
    name: "RijiToto",
    category: "toto",
    categoryLabel: "Toto Vehicle",
    price: 159999,
    image: RijiTotoImg,
    specs: [
      { label: "Battery", value: "4 kWh", Icon: Battery },
      { label: "Range", value: "130 km", Icon: Zap },
      { label: "Top Speed", value: "45 km/h", Icon: Gauge },
      { label: "Charging", value: "5 hrs", Icon: Clock },
    ],
    features: [
      {
        title: "Capacity & Utility",
        items: ["Passenger capacity: up to 4", "Cargo capacity: 250 kg"],
      },
      {
        title: "Build Quality",
        items: ["Reinforced chassis", "Heavy-duty body structure"],
      },
      {
        title: "Comfort",
        items: ["Stable suspension system", "Smooth city ride"],
      },
      {
        title: "Safety",
        items: ["Strong braking system", "LED lighting for visibility"],
      },
    ],
    colors: ["#EF4444", "#06B6D4", "#6366F1"],
  },
];
