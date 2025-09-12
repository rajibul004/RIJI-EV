import { Button } from "@/components/ui/button";
import adventureBikers from "@/assets/adventure-bikers.jpg";

const TechnologySection = () => {
  return (
    <section className="bg-dark-surface text-dark-surface-foreground py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={adventureBikers} 
              alt="Mountain bikers on adventure trail" 
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-surface/80 to-transparent rounded-lg"></div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              UNLEASH THE POWER OF 
              <span className="text-electric-blue"> BEST TECHNOLOGY</span> WITH 
              SCOTT E-BIKES
            </h2>
            
            <p className="text-gray-300 text-lg">
              Experience the future of cycling with our cutting-edge electric bikes. 
              Designed for performance, built for adventure, and engineered to exceed 
              your expectations on every ride.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                <span>Advanced battery technology with 100+ mile range</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                <span>Smart motor system with multiple assist modes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                <span>Integrated GPS and smartphone connectivity</span>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-electric-blue hover:bg-electric-blue-dark text-white px-8 py-6 text-lg font-semibold"
            >
              EXPLORE TECHNOLOGY
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;