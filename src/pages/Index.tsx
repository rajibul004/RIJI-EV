import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import QualitySection from "@/components/QualitySection";
import TechnologySection from "@/components/TechnologySection";
import BikeShopSection from "@/components/BikeShopSection";
import EventsSection from "@/components/EventsSection";
import PromoSection from "@/components/PromoSection";
import Footer from "@/components/Footer";

const Index = () => {
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
