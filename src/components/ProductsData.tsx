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
  Circle,
  Weight,
  Ruler,
} from "lucide-react";

import RijiVoltImg from "@/assets/products/e-rickshaw.png";
import RijiTotoImg from "@/assets/products/toto2.png";
import rijiOlaProBlueFront from "../assets/products/riji-ola-pro-electric-scooter-blue-front-view.jpeg";
import rijiOlaProBlueSide from "../assets/products/riji-ola-pro-electric-scooter-blue-side-angle.jpeg";
import rijiOlaProYellowFront from "../assets/products/riji-ola-pro-electric-scooter-yellow-front-view.jpeg";
import rijiOlaProBlueThreeQuarter from "../assets/products/riji-ola-pro-electric-scooter-blue-three-quarter-view.jpeg";

const rijiOlaProImages = [
  {
    src: rijiOlaProBlueFront,
    alt: "RIJI OLA PRO electric scooter in blue, front view",
    color: "Blue",
  },
  {
    src: rijiOlaProBlueSide,
    alt: "RIJI OLA PRO blue electric scooter, side angle",
    color: "Blue",
  },
  {
    src: rijiOlaProYellowFront,
    alt: "RIJI OLA PRO electric scooter in yellow, front view",
    color: "Yellow",
  },
  {
    src: rijiOlaProBlueThreeQuarter,
    alt: "RIJI OLA PRO blue electric scooter, three-quarter view",
    color: "Blue",
  },
];

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

    name: "Riji Ola Pro",
    slug: "riji-ola-pro",

    category: "scooty",
    categoryLabel: "Electric Scooty",

    price: 78999, // Update with actual selling price
    image: rijiOlaProImages[0].src,
    images: rijiOlaProImages,

    description:
      "A practical electric scooty featuring a 1200W motor, alloy wheels, LED lighting, passenger footrests and spacious under-seat storage.",

    shortDescription:
      "Everyday electric mobility with practical features and comfortable utility.",

    tagline: "Ride smart. Move forward.",

    // =====================================================
    // KEY SPECIFICATIONS
    // =====================================================

    specs: [
      {
        label: "Motor Power",
        value: "1200 W",
        Icon: Zap,
      },
      {
        label: "Controller",
        value: "48V / 60V / 72V",
        Icon: Battery,
      },
      {
        label: "Tyres",
        value: "90/90-12",
        Icon: Gauge,
      },
      {
        label: "Lighting",
        value: "LED",
        Icon: Lightbulb,
      },
    ],

    // =====================================================
    // PERFORMANCE
    // =====================================================

    performance: {
      topSpeed: "—",
      range: "—",
      motor: "Electric Motor",
      motorPower: "1200 W",
      ridingModes: ["—"],
    },

    // =====================================================
    // BATTERY
    // =====================================================

    battery: {
      capacity: "—",
      type: "—",
      voltage: "48V / 60V / 72V controller support",
      chargingTime: "—",
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
      storageCapacity: "Large boot space",
    },

    // =====================================================
    // COMFORT
    // =====================================================

    comfort: {
      seating: "—",
      suspension: "—",
      ridingPosition: "—",
      footboard: "—",
      passengerFootrest: "Yes",
      bootSpace: "Large boot space",
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
      lighting: "LED headlight",
      brakes: "Front and rear disc brakes",
      reverseMode: "—",
      parkingSystem: "—",
    },

    // =====================================================
    // WHEELS
    // =====================================================

    wheels: {
      frontTyre: "90/90-12",
      rearTyre: "90/90-12",
      tyreType: "—",
      wheelSize: "12-inch",
      wheelType: "Alloy wheels",
    },

    // =====================================================
    // FEATURES
    // =====================================================

    features: [
      {
        title: "Performance",
        icon: Zap,
        items: ["1200W electric motor", "48V / 60V / 72V controller options"],
      },

      {
        title: "Comfort",
        icon: Armchair,
        items: ["Passenger footrests", "Large boot space"],
      },

      {
        title: "Lighting",
        icon: Lightbulb,
        items: ["LED headlight"],
      },

      {
        title: "Wheels & Tyres",
        icon: Circle,
        items: ["Alloy wheels", "90/90-12 front tyre", "90/90-12 rear tyre"],
      },
    ],

    // =====================================================
    // CORE FEATURES
    // =====================================================

    coreFeatures: [
      {
        title: "1200W Electric Motor",
        description:
          "Electric power designed for everyday commuting and practical urban mobility.",
        image: null,
      },

      {
        title: "Passenger Comfort",
        description:
          "Passenger footrests provide additional practicality for two-person riding.",
        image: null,
      },

      {
        title: "LED Lighting",
        description:
          "An LED headlight provides modern styling and front illumination.",
        image: null,
      },

      {
        title: "Spacious Boot",
        description:
          "Large boot space provides convenient storage for everyday essentials.",
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
