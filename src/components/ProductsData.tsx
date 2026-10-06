import {
  Battery,
  Zap,
  Gauge,
  Clock,
  ShieldCheck,
  Armchair,
  Monitor,
  Package,
  Lightbulb,
  CircleDot,
  Weight,
  Ruler,
} from "lucide-react";

import RijiVoltImg from "@/assets/products/e-rickshaw.png";
import RijiMaxImg from "@/assets/Glossy Yellow Electric Scooter.png";
import RijiTotoImg from "@/assets/products/toto2.png";

// Optional feature images
// Add these files when you have the actual images.
// import RijiVoltStorage from "@/assets/products/volt-storage.png";
// import RijiVoltComfort from "@/assets/products/volt-comfort.png";
// import RijiVoltTechnology from "@/assets/products/volt-display.png";
// import RijiVoltPerformance from "@/assets/products/volt-performance.png";

export const products = [
  {
    id: 1,

    // =====================================================
    // BASIC INFORMATION
    // =====================================================

    name: "RijiVolt",
    slug: "rijivolt",

    category: "toto",
    categoryLabel: "Electric Vehicle",

    price: 89999,

    image: RijiVoltImg,

    description:
      "A practical electric vehicle designed for everyday mobility, combining useful range, comfortable operation and essential onboard features.",

    shortDescription:
      "Practical electric mobility designed for everyday journeys.",

    tagline: "Electric mobility made for everyday use.",

    // =====================================================
    // KEY SPECIFICATIONS
    // =====================================================

    specs: [
      {
        label: "Battery",
        value: "2.5 kWh",
        Icon: Battery,
      },
      {
        label: "Range",
        value: "120 km",
        Icon: Zap,
      },
      {
        label: "Top Speed",
        value: "60 km/h",
        Icon: Gauge,
      },
      {
        label: "Charging",
        value: "4 hrs",
        Icon: Clock,
      },
    ],

    // =====================================================
    // PERFORMANCE
    // =====================================================

    performance: {
      topSpeed: "60 km/h",
      range: "120 km",
      motor: "—",
      motorPower: "—",
      ridingModes: ["Eco", "Drive", "Speed"],
    },

    // =====================================================
    // BATTERY & CHARGING
    // =====================================================

    battery: {
      capacity: "2.5 kWh",
      type: "—",
      voltage: "—",
      chargingTime: "4 hrs",
      chargingType: "—",
      removable: "—",
    },

    // =====================================================
    // DIMENSIONS
    // =====================================================

    dimensions: {
      length: "—",
      width: "—",
      height: "—",
      wheelbase: "—",
      groundClearance: "—",
      kerbWeight: "—",
    },

    // =====================================================
    // CAPACITY
    // =====================================================

    capacity: {
      seatingCapacity: "—",
      passengerCapacity: "—",
      loadCapacity: "—",
      storageCapacity: "—",
    },

    // =====================================================
    // COMFORT
    // =====================================================

    comfort: {
      seating: "Comfortable seating",
      suspension: "43mm front & rear suspension",
      ridingPosition: "—",
      footboard: "—",
    },

    // =====================================================
    // TECHNOLOGY
    // =====================================================

    technology: {
      display: "LCD meter",
      musicSystem: "Music system",
      usbCharging: "USB charging",
      connectivity: "—",
      smartFeatures: "—",
    },

    // =====================================================
    // SAFETY
    // =====================================================

    safety: {
      sensorLock: "Sensor lock",
      handleLock: "Handle lock",
      lighting: "LED lighting",
      brakes: "—",
      reverseMode: "—",
      parkingSystem: "—",
    },

    // =====================================================
    // WHEELS & TYRES
    // =====================================================

    wheels: {
      frontTyre: "—",
      rearTyre: "—",
      tyreType: "—",
      wheelSize: "—",
    },

    // =====================================================
    // FEATURES
    // =====================================================

    features: [
      {
        title: "Performance",
        icon: Zap,
        items: ["110–120 km range", "Eco / Drive / Speed modes"],
      },

      {
        title: "Comfort",
        icon: Armchair,
        items: ["43mm front & rear suspension", "Durable body"],
      },

      {
        title: "Technology",
        icon: Monitor,
        items: ["LCD meter", "Music system", "USB charging"],
      },

      {
        title: "Safety",
        icon: ShieldCheck,
        items: ["Sensor lock", "Handle lock", "LED lighting"],
      },
    ],

    // =====================================================
    // CORE FEATURE HIGHLIGHTS
    // =====================================================

    coreFeatures: [
      {
        title: "Practical Storage",
        description: "Useful storage designed around everyday requirements.",
        image: null,
      },

      {
        title: "Comfortable Ride",
        description: "Suspension and seating designed for everyday journeys.",
        image: null,
      },

      {
        title: "Useful Technology",
        description: "Essential onboard technology for a simpler ride.",
        image: null,
      },

      {
        title: "Electric Performance",
        description: "Electric mobility designed for practical everyday use.",
        image: null,
      },
    ],

    // =====================================================
    // COLORS
    // =====================================================

    colors: [
      {
        name: "Orange",
        value: "#FF6B35",
      },
      {
        name: "Blue",
        value: "#3B82F6",
      },
      {
        name: "Graphite",
        value: "#1F2937",
      },
    ],

    // =====================================================
    // OWNERSHIP
    // =====================================================

    ownership: {
      warranty: "—",
      serviceInterval: "—",
      roadsideAssistance: "—",
    },
  },

  // =======================================================
  // RIJIMAX
  // =======================================================

  {
    id: 2,

    name: "RijiMax",
    slug: "rijimax",

    category: "scooty",
    categoryLabel: "Electric Scooty",

    price: 109999,

    image: RijiMaxImg,

    description:
      "A premium electric scooty focused on longer everyday journeys, comfortable riding and useful technology.",

    shortDescription:
      "Long-range electric mobility with a premium everyday experience.",

    tagline: "Go further. Ride smarter.",

    // =====================================================
    // KEY SPECIFICATIONS
    // =====================================================

    specs: [
      {
        label: "Battery",
        value: "3.5 kWh",
        Icon: Battery,
      },
      {
        label: "Range",
        value: "170 km",
        Icon: Zap,
      },
      {
        label: "Top Speed",
        value: "80 km/h",
        Icon: Gauge,
      },
      {
        label: "Charging",
        value: "3.5 hrs",
        Icon: Clock,
      },
    ],

    // =====================================================
    // PERFORMANCE
    // =====================================================

    performance: {
      topSpeed: "80 km/h",
      range: "170 km",
      motor: "—",
      motorPower: "—",
      ridingModes: ["—"],
    },

    // =====================================================
    // BATTERY
    // =====================================================

    battery: {
      capacity: "3.5 kWh",
      type: "—",
      voltage: "—",
      chargingTime: "3.5 hrs",
      chargingType: "—",
      removable: "—",
    },

    // =====================================================
    // DIMENSIONS
    // =====================================================

    dimensions: {
      length: "—",
      width: "—",
      height: "—",
      wheelbase: "—",
      groundClearance: "—",
      kerbWeight: "—",
    },

    // =====================================================
    // CAPACITY
    // =====================================================

    capacity: {
      seatingCapacity: "—",
      passengerCapacity: "—",
      loadCapacity: "—",
      storageCapacity: "—",
    },

    // =====================================================
    // COMFORT
    // =====================================================

    comfort: {
      seating: "Ergonomic seating",
      suspension: "Smooth suspension setup",
      ridingPosition: "—",
      footboard: "—",
    },

    // =====================================================
    // TECHNOLOGY
    // =====================================================

    technology: {
      display: "Large 7-inch digital display",
      musicSystem: "Premium sound system",
      usbCharging: "—",
      connectivity: "—",
      smartFeatures: "—",
    },

    // =====================================================
    // SAFETY
    // =====================================================

    safety: {
      sensorLock: "—",
      handleLock: "—",
      lighting: "—",
      brakes: "—",
      reverseMode: "—",
      parkingSystem: "—",
    },

    // =====================================================
    // WHEELS
    // =====================================================

    wheels: {
      frontTyre: "—",
      rearTyre: "—",
      tyreType: "—",
      wheelSize: "—",
    },

    // =====================================================
    // FEATURES
    // =====================================================

    features: [
      {
        title: "Performance",
        icon: Zap,
        items: ["170 km long range", "High-speed motor (80 km/h)"],
      },

      {
        title: "Comfort",
        icon: Armchair,
        items: ["Ergonomic seating", "Smooth suspension setup"],
      },

      {
        title: "Technology",
        icon: Monitor,
        items: ["Large 7-inch digital display", "Premium sound system"],
      },

      {
        title: "Premium Features",
        icon: ShieldCheck,
        items: ["Heated grips", "Enhanced riding experience"],
      },
    ],

    // =====================================================
    // CORE FEATURES
    // =====================================================

    coreFeatures: [
      {
        title: "Long Range",
        description:
          "Designed for longer everyday journeys with a 170 km claimed range.",
        image: null,
      },

      {
        title: "Comfortable Seating",
        description:
          "Ergonomic seating designed for a comfortable riding position.",
        image: null,
      },

      {
        title: "Digital Technology",
        description:
          "A large digital display puts useful riding information within view.",
        image: null,
      },

      {
        title: "Electric Performance",
        description:
          "High-speed electric mobility with a claimed top speed of 80 km/h.",
        image: null,
      },
    ],

    // =====================================================
    // COLORS
    // =====================================================

    colors: [
      {
        name: "Green",
        value: "#10B981",
      },
      {
        name: "Amber",
        value: "#F59E0B",
      },
      {
        name: "Purple",
        value: "#8B5CF6",
      },
    ],

    // =====================================================
    // OWNERSHIP
    // =====================================================

    ownership: {
      warranty: "—",
      serviceInterval: "—",
      roadsideAssistance: "—",
    },
  },

  // =======================================================
  // RIJITOTO
  // =======================================================

  {
    id: 3,

    name: "RijiToto",
    slug: "rijitoto",

    category: "toto",
    categoryLabel: "Toto Vehicle",

    price: 159999,

    image: RijiTotoImg,

    description:
      "A practical electric toto designed around passenger mobility, useful carrying capacity and everyday commercial use.",

    shortDescription:
      "Practical electric passenger mobility built for everyday use.",

    tagline: "Move more. Move electric.",

    // =====================================================
    // KEY SPECIFICATIONS
    // =====================================================

    specs: [
      {
        label: "Battery",
        value: "4 kWh",
        Icon: Battery,
      },
      {
        label: "Range",
        value: "130 km",
        Icon: Zap,
      },
      {
        label: "Top Speed",
        value: "45 km/h",
        Icon: Gauge,
      },
      {
        label: "Charging",
        value: "5 hrs",
        Icon: Clock,
      },
    ],

    // =====================================================
    // PERFORMANCE
    // =====================================================

    performance: {
      topSpeed: "45 km/h",
      range: "130 km",
      motor: "—",
      motorPower: "—",
      ridingModes: ["—"],
    },

    // =====================================================
    // BATTERY
    // =====================================================

    battery: {
      capacity: "4 kWh",
      type: "—",
      voltage: "—",
      chargingTime: "5 hrs",
      chargingType: "—",
      removable: "—",
    },

    // =====================================================
    // DIMENSIONS
    // =====================================================

    dimensions: {
      length: "—",
      width: "—",
      height: "—",
      wheelbase: "—",
      groundClearance: "—",
      kerbWeight: "—",
    },

    // =====================================================
    // CAPACITY
    // =====================================================

    capacity: {
      seatingCapacity: "Up to 4 passengers",
      passengerCapacity: "Up to 4",
      loadCapacity: "250 kg",
      storageCapacity: "—",
    },

    // =====================================================
    // COMFORT
    // =====================================================

    comfort: {
      seating: "Passenger-focused seating",
      suspension: "Stable suspension system",
      ridingPosition: "—",
      footboard: "—",
    },

    // =====================================================
    // TECHNOLOGY
    // =====================================================

    technology: {
      display: "—",
      musicSystem: "—",
      usbCharging: "—",
      connectivity: "—",
      smartFeatures: "—",
    },

    // =====================================================
    // SAFETY
    // =====================================================

    safety: {
      sensorLock: "—",
      handleLock: "—",
      lighting: "LED lighting",
      brakes: "Strong braking system",
      reverseMode: "—",
      parkingSystem: "—",
    },

    // =====================================================
    // WHEELS
    // =====================================================

    wheels: {
      frontTyre: "—",
      rearTyre: "—",
      tyreType: "—",
      wheelSize: "—",
    },

    // =====================================================
    // FEATURES
    // =====================================================

    features: [
      {
        title: "Capacity & Utility",
        icon: Package,
        items: ["Passenger capacity: up to 4", "Cargo capacity: 250 kg"],
      },

      {
        title: "Build Quality",
        icon: ShieldCheck,
        items: ["Reinforced chassis", "Heavy-duty body structure"],
      },

      {
        title: "Comfort",
        icon: Armchair,
        items: ["Stable suspension system", "Smooth city ride"],
      },

      {
        title: "Safety",
        icon: ShieldCheck,
        items: ["Strong braking system", "LED lighting for visibility"],
      },
    ],

    // =====================================================
    // CORE FEATURES
    // =====================================================

    coreFeatures: [
      {
        title: "Passenger Space",
        description: "Designed to accommodate up to four passengers.",
        image: null,
      },

      {
        title: "Load Capacity",
        description: "Built around practical everyday carrying requirements.",
        image: null,
      },

      {
        title: "Heavy-Duty Build",
        description: "Reinforced chassis and body structure for everyday use.",
        image: null,
      },

      {
        title: "Electric Performance",
        description:
          "Electric mobility with a claimed 130 km range and 45 km/h top speed.",
        image: null,
      },
    ],

    // =====================================================
    // COLORS
    // =====================================================

    colors: [
      {
        name: "Red",
        value: "#EF4444",
      },
      {
        name: "Cyan",
        value: "#06B6D4",
      },
      {
        name: "Indigo",
        value: "#6366F1",
      },
    ],

    // =====================================================
    // OWNERSHIP
    // =====================================================

    ownership: {
      warranty: "—",
      serviceInterval: "—",
      roadsideAssistance: "—",
    },
  },
];
