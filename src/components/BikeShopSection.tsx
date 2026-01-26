import { products } from "./ProductsData";
import { Link } from "react-router-dom";

const BikeShopSection = () => {
  return (
    <section
      className="relative py-24 overflow-hidden
      bg-gradient-to-br from-slate-50 via-cyan-50 to-white"
    >
      {/* ===== AI GLOW BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-[380px] h-[380px] bg-cyan-400/25 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-20 w-[420px] h-[420px] bg-emerald-400/25 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* ===== SECTION HEADER ===== */}
        <div className="text-center mb-16">
          <span
            className="inline-block mb-4 px-5 py-2 rounded-full
            bg-white/70 backdrop-blur
            border border-cyan-200
            text-cyan-700 text-sm font-semibold"
          >
            Our Collection
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            Our Electric Vehicles
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our premium range of smart electric scooters and
            high-performance toto vehicles designed for India.
          </p>
        </div>

        {/* ===== PRODUCTS GRID ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-3xl
              bg-white/70 backdrop-blur-xl
              border border-white/60
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              hover:shadow-[0_30px_90px_rgba(34,211,238,0.25)]
              transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 rounded-t-3xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-6
                  transition-transform duration-300 group-hover:scale-105"
                />

                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100
                  bg-gradient-to-t from-cyan-500/10 to-transparent transition"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-500 mb-3">{product.category}</p>

                <div className="flex items-center justify-between">
                  <span className="text-emerald-600 font-extrabold text-lg">
                    ₹{product.price}
                  </span>

                  <button
                    className="px-4 py-2 rounded-lg text-sm font-semibold
                    bg-gradient-to-r from-cyan-500 to-emerald-500
                    text-white shadow
                    hover:shadow-lg transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== CTA ===== */}
        <div className="text-center mt-16">
          <Link
            to="/products"
            className="px-10 py-4 rounded-full text-base font-bold text-white
    bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500
    shadow-[0_20px_60px_rgba(16,185,129,0.5)]
    hover:shadow-[0_30px_90px_rgba(16,185,129,0.7)]
    hover:scale-105 transition"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BikeShopSection;
