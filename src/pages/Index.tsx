import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import QualitySection from "@/components/QualitySection";
import TechnologySection from "@/components/TechnologySection";
import BikeShopSection from "@/components/BikeShopSection";
import EventsSection from "@/components/EventsSection";
import PromoSection from "@/components/PromoSection";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500); // splash duration (ms)

    return () => clearTimeout(timer);
  }, []);

  // ✅ SHOW SPLASH FIRST
  if (showSplash) {
    return <SplashScreen />;
  }

  // ✅ THEN SHOW LANDING PAGE
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <QualitySection />
      <TechnologySection />
      <BikeShopSection />
      <EventsSection />
      <PromoSection />
      <Footer />
    </div>
  );
};

export default Index;
