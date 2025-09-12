import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              GET THE LATEST NEWS &
              <br />
              <span className="text-electric-blue">AMAZING OFFERS</span>
            </h2>
            
            <p className="text-muted-foreground text-lg">
              Subscribe to our newsletter and stay updated with the latest bike releases,
              exclusive deals, and cycling tips from our experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button 
                className="bg-electric-blue hover:bg-electric-blue-dark text-white px-8"
              >
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-transparent rounded-full blur-3xl"></div>
            <img 
              src="/placeholder.svg" 
              alt="Electric Mountain Bike" 
              className="relative z-10 w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;