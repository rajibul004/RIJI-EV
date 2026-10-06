// src/App.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import ProductsPage from "./pages/ProductsView";
import ProductDetails from "./components/ProductDetails";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Dealership from "./pages/Dealership";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Index />} />

        {/* Products */}
        <Route path="/products" element={<ProductsPage />} />

        {/* Product Details */}
        <Route path="/products/:id" element={<ProductDetails />} />

        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/dealership" element={<Dealership />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
