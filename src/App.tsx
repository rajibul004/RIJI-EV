import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Index from "./pages/Index";
import ProductsPage from "./pages/ProductsView";
import ProductDetails from "./components/ProductDetails";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Dealership from "./pages/Dealership";
import NotFound from "./pages/NotFound";
import QuickActions from "./components/QuickActions";
import ProductEnquiry from "./pages/ProductEnquiry";

function AppContent() {
  const location = useLocation();
  const hideQuickActions = location.pathname === "/product-enquiry";

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/dealership" element={<Dealership />} />
        <Route path="/product-enquiry" element={<ProductEnquiry />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!hideQuickActions && <QuickActions />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
