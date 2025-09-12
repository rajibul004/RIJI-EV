import { Button } from "@/components/ui/button";
import heroBike from "@/assets/hero-bike.jpg";

const HeroSection = () => {
  return (
    <section className="bg-dark-surface text-dark-surface-foreground min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              RIDING IS
              <br />
              <span className="text-electric-blue">OUR PASSION</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-md">
              A lightweight and durable bike with advanced
              engineering and innovative technologies
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-electric-blue hover:bg-electric-blue-dark text-white px-8 py-6 text-lg font-semibold"
            >
              SHOP NOW
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white px-8 py-6 text-lg font-semibold"
            >
              WATCH VIDEO
            </Button>
          </div>
          
          <div className="flex items-center space-x-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-electric-blue">15K</div>
              <div className="text-sm text-gray-400">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-electric-blue">4.9</div>
              <div className="text-sm text-gray-400">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-electric-blue">250+</div>
              <div className="text-sm text-gray-400">Bike Models</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-transparent rounded-full blur-3xl"></div>
          <img 
            src={heroBike} 
            alt="Premium Electric Mountain Bike" 
            className="relative z-10 w-full h-auto max-w-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;