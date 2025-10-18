import React, { useState } from "react";
import {
  ChevronRight,
  Battery,
  Zap,
  Shield,
  Award,
  Star,
  ArrowRight,
  Truck,
  ShoppingCart,
  Users,
} from "lucide-react";

const ProductsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const categories = [
    { id: "all", label: "All Products", icon: ShoppingCart },
    { id: "rickshaw", label: "E-Rickshaw", icon: Truck },
    { id: "cart", label: "E-Cart", icon: Users },
    { id: "accessories", label: "Accessories", icon: Battery },
  ];

  const products = [
    {
      id: 1,
      name: "RIJI Premium E-Rickshaw",
      category: "rickshaw",
      price: "₹2,45,000",
      originalPrice: "₹2,65,000",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
      features: ["60V Battery", "80km Range", "Digital Display", "LED Lights"],
      description:
        "Premium quality e-rickshaw with advanced features and superior performance.",
      discount: "8% OFF",
    },
    {
      id: 2,
      name: "RIJI Cargo E-Cart",
      category: "cart",
      price: "₹1,85,000",
      originalPrice: "₹2,00,000",
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500",
      rating: 4.6,
      reviews: 89,
      badge: "New Launch",
      features: [
        "48V Battery",
        "60km Range",
        "Heavy Load Capacity",
        "Durable Body",
      ],
      description:
        "Perfect for cargo transportation with excellent load capacity.",
      discount: "7% OFF",
    },
    {
      id: 3,
      name: "RIJI Deluxe E-Rickshaw",
      category: "rickshaw",
      price: "₹2,75,000",
      originalPrice: "₹3,00,000",
      image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=500",
      rating: 4.9,
      reviews: 156,
      badge: "Premium",
      features: [
        "72V Battery",
        "100km Range",
        "Smart Dashboard",
        "USB Charging",
      ],
      description: "Deluxe model with premium features and extended range.",
      discount: "8% OFF",
    },
    {
      id: 4,
      name: "RIJI Battery Pack 60V",
      category: "accessories",
      price: "₹18,500",
      originalPrice: "₹22,000",
      image:
        "https://images.unsplash.com/photo-1609592806562-98bfbec3dbf5?w=500",
      rating: 4.7,
      reviews: 203,
      badge: "Top Rated",
      features: [
        "Lithium Ion",
        "2 Year Warranty",
        "Fast Charging",
        "Weather Resistant",
      ],
      description: "High-performance battery pack with long-lasting power.",
      discount: "16% OFF",
    },
    {
      id: 5,
      name: "RIJI Smart E-Cart",
      category: "cart",
      price: "₹2,15,000",
      originalPrice: "₹2,35,000",
      image:
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=500",
      rating: 4.5,
      reviews: 67,
      badge: "Featured",
      features: ["Smart Controls", "70km Range", "GPS Tracking", "Mobile App"],
      description:
        "Smart e-cart with advanced technology and tracking features.",
      discount: "9% OFF",
    },
    {
      id: 6,
      name: "RIJI Charger Kit Pro",
      category: "accessories",
      price: "₹3,500",
      originalPrice: "₹4,200",
      image:
        "https://images.unsplash.com/photo-1585709465202-a113d80df263?w=500",
      rating: 4.4,
      reviews: 145,
      badge: "Essential",
      features: ["Fast Charging", "Auto Cut-off", "LED Indicators", "Portable"],
      description: "Professional grade charger with safety features.",
      discount: "17% OFF",
    },
  ];

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.category === activeFilter);

  const ProductCard = ({ product, index }) => {
    const isHovered = hoveredProduct === product.id;

    return (
      <div
        className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
        onMouseEnter={() => setHoveredProduct(product.id)}
        onMouseLeave={() => setHoveredProduct(null)}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              product.badge === "Best Seller"
                ? "bg-gradient-to-r from-orange-400 to-red-500 text-white"
                : product.badge === "New Launch"
                ? "bg-gradient-to-r from-green-400 to-emerald-500 text-white"
                : product.badge === "Premium"
                ? "bg-gradient-to-r from-purple-400 to-indigo-500 text-white"
                : product.badge === "Top Rated"
                ? "bg-gradient-to-r from-blue-400 to-cyan-500 text-white"
                : product.badge === "Featured"
                ? "bg-gradient-to-r from-pink-400 to-rose-500 text-white"
                : "bg-gradient-to-r from-gray-400 to-gray-500 text-white"
            }`}
          >
            {product.badge}
          </span>
        </div>

        {/* Discount Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
            {product.discount}
          </span>
        </div>

        {/* Product Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Hover Actions */}
          <div
            className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
              isHovered
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg">
              View Details
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-600">
              {product.rating} ({product.reviews})
            </span>
          </div>

          {/* Product Name */}
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Features */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {product.features.slice(0, 2).map((feature, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
                >
                  {feature}
                </span>
              ))}
              {product.features.length > 2 && (
                <span className="text-green-600 text-xs font-medium">
                  +{product.features.length - 2} more
                </span>
              )}
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-2xl font-bold text-green-600">
                {product.price}
              </span>
              <span className="text-sm text-gray-400 line-through ml-2">
                {product.originalPrice}
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
            Get Quote
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap size={16} />
            Our Products
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Explore Our
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Electric Vehicles
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of eco-friendly electric vehicles designed for
            sustainable transportation solutions across India
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 shadow-md hover:shadow-lg"
                }`}
              >
                <Icon size={18} />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">500+</div>
              <div className="text-green-100">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">50+</div>
              <div className="text-green-100">Product Models</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">3+</div>
              <div className="text-green-100">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">98%</div>
              <div className="text-green-100">Customer Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to Go Electric?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our experts to find the perfect electric vehicle solution
            for your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              Contact Sales Team
              <ChevronRight size={20} />
            </button>
            <button className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
