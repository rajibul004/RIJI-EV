import React, { useState } from "react";
import { ChevronRight, Battery, Zap, Gauge, Clock } from "lucide-react";

const ProductsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Products" },
    { id: "scooty", label: "Electric Scooties" },
    { id: "toto", label: "Toto Vehicles" },
  ];

  const products = [
    {
      id: 1,
      name: "RijiVolt",
      category: "scooty",
      categoryLabel: "Electric Scooty",
      price: 89999,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
      description:
        "Perfect for city commuting, the RijiVolt offers exceptional range and performance in a sleek design.",
      specs: [
        { label: "Battery", value: "2.5 kWh", icon: Battery },
        { label: "Range", value: "120 km", icon: Zap },
        { label: "Top Speed", value: "60 km/h", icon: Gauge },
        { label: "Charging", value: "4 hrs", icon: Clock },
      ],
      features: [
        "Digital instrument cluster",
        "LED headlights and taillights",
        "Keyless start",
        "Regenerative braking",
        "Three riding modes: Eco, City, Sport",
        "Mobile app connectivity",
        "USB charging port",
      ],
      colors: ["#FF6B35", "#3B82F6", "#1F2937"],
    },
    {
      id: 2,
      name: "RijiMax",
      category: "scooty",
      categoryLabel: "Electric Scooty",
      price: 109999,
      image:
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=500",
      description:
        "Our premium electric scooter with extended range, superior comfort, and advanced features.",
      specs: [
        { label: "Battery", value: "3.5 kWh", icon: Battery },
        { label: "Range", value: "170 km", icon: Zap },
        { label: "Top Speed", value: "80 km/h", icon: Gauge },
        { label: "Charging", value: "3.5 hrs", icon: Clock },
      ],
      features: [
        "Large 7-inch touchscreen display",
        "GPS navigation",
        "Bluetooth connectivity",
        "Premium sound system",
        "Heated grips",
        "Cruise control",
        "Advanced safety features",
        "Reverse mode",
        "Dual USB charging ports",
      ],
      colors: ["#10B981", "#F59E0B", "#8B5CF6"],
    },
    {
      id: 3,
      name: "RijiToto",
      category: "toto",
      categoryLabel: "Toto Vehicle",
      price: 159999,
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500",
      description:
        "The ultimate electric toto vehicle designed for commercial transport with exceptional load capacity.",
      specs: [
        { label: "Battery", value: "4 kWh", icon: Battery },
        { label: "Range", value: "130 km", icon: Zap },
        { label: "Top Speed", value: "45 km/h", icon: Gauge },
        { label: "Charging", value: "5 hrs", icon: Clock },
      ],
      features: [
        "Passenger capacity: up to 4",
        "Cargo capacity: 250kg",
        "Reinforced chassis",
        "Weather protection canopy",
        "Commercial-grade battery",
        "Easy-access design",
        "Low maintenance drivetrain",
        "Heavy-duty suspension",
      ],
      colors: ["#EF4444", "#06B6D4", "#6366F1"],
    },
  ];

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Filters */}
      <section className="px-6 py-4 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 text-sm font-medium transition-all ${
                activeFilter === category.id
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="mb-12 pb-12 border-b border-gray-200 last:border-b-0"
            >
              {/* Category */}
              <p className="text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">
                {product.categoryLabel}
              </p>

              {/* Product Name */}
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {product.name}
              </h2>

              {/* Description */}
              <p className="text-gray-700 text-sm mb-6 max-w-2xl">
                {product.description}
              </p>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* Image */}
                <div className="lg:col-span-1">
                  <div className="w-full h-64 bg-gray-100 rounded overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Specs and Features */}
                <div className="lg:col-span-2">
                  {/* Specs */}
                  <div className="grid grid-cols-4 gap-4 mb-8 pb-8 border-b border-gray-200">
                    {product.specs.map((spec, idx) => {
                      const Icon = spec.icon;
                      return (
                        <div key={idx} className="text-center">
                          <Icon className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                          <p className="text-xs text-gray-600 mb-1">
                            {spec.label}
                          </p>
                          <p className="text-lg font-bold text-gray-900">
                            {spec.value}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wide">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <p key={idx} className="text-sm text-gray-700">
                          {feature}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Colors and CTA */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                {/* Colors */}
                <div>
                  <h3 className="text-xs font-bold text-gray-900 mb-3 uppercase tracking-wide">
                    Available Colors
                  </h3>
                  <div className="flex gap-3">
                    {product.colors.map((color, idx) => (
                      <button
                        key={idx}
                        className="w-9 h-9 rounded-full border-2 border-gray-300 hover:border-gray-900"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="text-right">
                  <p className="text-xs text-gray-600 mb-1">Starting at</p>
                  <p className="text-2xl font-bold text-gray-900 mb-3">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>
                  <button className="bg-gray-900 text-white px-6 py-2 rounded text-sm font-medium hover:bg-gray-800 flex items-center gap-2 ml-auto">
                    Book Now
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="bg-gray-50 border-t border-gray-200 px-6 py-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Go Electric?
          </h2>
          <p className="text-sm text-gray-700 max-w-2xl mx-auto mb-6">
            Join thousands of customers benefiting from our eco-friendly
            electric vehicles. Get expert guidance on choosing the perfect
            solution for your needs.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-gray-900 text-white px-6 py-2 rounded text-sm font-medium hover:bg-gray-800 flex items-center gap-2">
              Contact Sales Team
              <ChevronRight size={16} />
            </button>
            <button className="border-2 border-gray-900 text-gray-900 px-6 py-2 rounded text-sm font-medium hover:bg-gray-900 hover:text-white">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
