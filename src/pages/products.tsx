import React from "react";
import Navigation from "@/components/Navigation";
import ProductsSection from "@/components/Products";

const ProductsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation Bar */}
      <Navigation />

      {/* Main Content */}
      <main className="pt-28">
        {" "}
        {/* Add padding to avoid overlap with sticky navbar */}
        <ProductsSection />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} RIJI EV. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductsPage;
