import { Battery, Zap, Gauge, Clock } from "lucide-react";

export const products = [
  {
    id: 1,
    name: "RijiVolt",
    category: "scooty",
    categoryLabel: "Electric Scooty",
    price: 89999,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
    specs: [
      { label: "Battery", value: "2.5 kWh", Icon: Battery },
      { label: "Range", value: "120 km", Icon: Zap },
      { label: "Top Speed", value: "60 km/h", Icon: Gauge },
      { label: "Charging", value: "4 hrs", Icon: Clock },
    ],
    features: [
      "Digital instrument cluster",
      "LED headlights and taillights",
      "Keyless start",
    ],
    colors: ["#FF6B35", "#3B82F6", "#1F2937"],
  },
  {
    id: 2,
    name: "RijiMax",
    category: "scooty",
    categoryLabel: "Electric Scooty",
    price: 109999,
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=500",
    specs: [
      { label: "Battery", value: "3.5 kWh", Icon: Battery },
      { label: "Range", value: "170 km", Icon: Zap },
      { label: "Top Speed", value: "80 km/h", Icon: Gauge },
      { label: "Charging", value: "3.5 hrs", Icon: Clock },
    ],
    features: ["Large 7-inch display", "Premium sound system", "Heated grips"],
    colors: ["#10B981", "#F59E0B", "#8B5CF6"],
  },
  {
    id: 3,
    name: "RijiToto",
    category: "toto",
    categoryLabel: "Toto Vehicle",
    price: 159999,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500",
    specs: [
      { label: "Battery", value: "4 kWh", Icon: Battery },
      { label: "Range", value: "130 km", Icon: Zap },
      { label: "Top Speed", value: "45 km/h", Icon: Gauge },
      { label: "Charging", value: "5 hrs", Icon: Clock },
    ],
    features: [
      "Passenger capacity: up to 4",
      "Cargo capacity: 250kg",
      "Reinforced chassis",
    ],
    colors: ["#EF4444", "#06B6D4", "#6366F1"],
  },
];
