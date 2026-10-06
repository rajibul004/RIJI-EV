import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import QualitySection from "@/components/QualitySection";
import BikeShopSection from "@/components/BikeShopSection";
import EventsSection from "@/components/EventsSection";
import PromoSection from "@/components/PromoSection";
import WhyRijiEVSection from "@/components/WhyRijiEV";
import Footer from "@/components/Footer";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  // ✅ THEN SHOW LANDING PAGE
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <QualitySection />
      <WhyRijiEVSection />
      <BikeShopSection />

      <EventsSection />
      <PromoSection />
      <Footer />
    </div>
  );
};

export default Index;
