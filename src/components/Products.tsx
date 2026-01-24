import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { products as allProducts } from "../components/ProductsData";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/* -------------------- Animations -------------------- */
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
    },
  },
};

/* -------------------- Specs Item -------------------- */
const SpecItem = ({ label, value, Icon }: any) => {
  if (!Icon) return null;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.06 }}
      className="text-center bg-gray-50 rounded-xl py-3"
    >
      <Icon className="w-6 h-6 mx-auto mb-1 text-emerald-600" />
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-semibold text-gray-900 text-sm">{value}</p>
    </motion.div>
  );
};

/* -------------------- Product Card -------------------- */
const ProductCard = ({ product, index }: any) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`flex flex-col lg:flex-row gap-6 items-center border border-gray-200 rounded-3xl p-6 bg-white shadow-md hover:shadow-xl ${
        index % 2 !== 0 ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.5 }}
        className="lg:w-1/2 w-full overflow-hidden rounded-2xl"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[360px] object-cover"
        />
      </motion.div>

      {/* Info */}
      <div className="lg:w-1/2 space-y-4">
        <motion.div variants={itemVariants}>
          <p className="text-xs font-semibold uppercase text-gray-500">
            {product.categoryLabel}
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            {product.name}
          </h2>
        </motion.div>

        {/* Specs */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3 border-t"
        >
          {product.specs.map((spec: any, i: number) => (
            <SpecItem key={i} {...spec} />
          ))}
        </motion.div>

        {/* Features */}
        <motion.div variants={itemVariants}>
          <h3 className="text-sm font-bold uppercase mb-2">
            Key Features
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {product.features.map((f: string, i: number) => (
              <p key={i} className="text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-600 rounded-full" />
                {f}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Colors */}
        <motion.div variants={itemVariants}>
          <h3 className="text-sm font-bold uppercase mb-2 text-gray-800">
            Available Colors
          </h3>

          <div className="flex items-center gap-3">
            {product.colors.map((color: string, idx: number) => (
              <motion.span
                key={idx}
                onClick={() => setSelectedColor(color)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-7 h-7 rounded-full cursor-pointer border transition
                  ${
                    selectedColor === color
                      ? "ring-2 ring-emerald-600 ring-offset-2"
                      : "border-gray-300"
                  }`}
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </motion.div>

        {/* Price + WhatsApp */}
        <motion.div
          variants={itemVariants}
          className="flex justify-between items-center pt-4 border-t"
        >
          <div>
            <p className="text-xs text-gray-600">Starting at</p>
            <p className="text-2xl font-bold">
              ₹{product.price.toLocaleString("en-IN")}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-green-700 transition"
            onClick={() =>
              window.open(
                `https://wa.me/919876543210?text=${encodeURIComponent(
                  `Hi RIJI EV! I'm interested in the ${product.name} in ${selectedColor} color. Please share price, availability and test ride details.`
                )}`,
                "_blank"
              )
            }
          >
            WhatsApp <ChevronRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

/* -------------------- Products Page -------------------- */
const ProductsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts =
    activeFilter === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Filters */}
      <section className="border-b bg-white py-4">
        <div className="flex justify-center gap-3">
          {["all", "scooty", "toto"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === cat
                  ? "bg-emerald-600 text-white"
                  : "border bg-white hover:bg-emerald-50"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="px-6 py-10">
        <div className="max-w-7xl mx-auto space-y-16">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
