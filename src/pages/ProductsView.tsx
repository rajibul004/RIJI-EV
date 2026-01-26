import Navigation from "../components/Navigation";
import ProductsSection from "../components/Products";
import Footer from "../components/Footer";
const ProductsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation Bar */}
      <Navigation />
      {/* Main Content */}
      <main className="pt-4">
        <ProductsSection />
      </main>
      <Footer /> {/* Footer Component */}
    </div>
  );
};

export default ProductsPage;
