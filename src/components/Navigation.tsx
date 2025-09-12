import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-dark-surface text-dark-surface-foreground py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold">MODE</div>
          <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-electric-blue transition-colors">Home</a>
          <a href="#" className="hover:text-electric-blue transition-colors">Shop</a>
          <a href="#" className="hover:text-electric-blue transition-colors">About</a>
          <a href="#" className="hover:text-electric-blue transition-colors">Contact</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-dark-surface-foreground hover:text-electric-blue">
            Sign In
          </Button>
          <Button size="sm" className="bg-electric-blue hover:bg-electric-blue-dark">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;