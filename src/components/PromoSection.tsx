import { Button } from "@/components/ui/button";

const PromoSection = () => {
  return (
    <section className="bg-dark-surface text-dark-surface-foreground py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-5xl font-bold">
            GRAB EXCITING DEALS &
            <br />
            <span className="text-electric-blue">SPECIAL PROMOS TODAY.</span>
            <br />
            DON'T MISS OUT!
          </h2>
          
          <p className="text-gray-300 text-lg">
            Limited time offers on our premium e-bike collection. Get the best deals
            and experience the future of cycling today.
          </p>
          
          <Button 
            size="lg" 
            className="bg-electric-blue hover:bg-electric-blue-dark text-white px-12 py-6 text-lg font-semibold"
          >
            SHOP DEALS NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;