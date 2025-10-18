import { Button } from "@/components/ui/button";
import { Play, Zap, Shield, Leaf } from "lucide-react";
import heroRickshaw from "@/assets/toto2.png";

const ErickshawHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#F0F0F0] via-[#00BCD4]/10 to-[#1C1F4A]/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#00BCD4]/10 rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/2 right-20 w-24 h-24 bg-[#FF6F00]/15 rotate-45 animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-16 h-16 bg-[#1C1F4A]/20 rounded-full animate-ping"
          style={{ animationDuration: "4s" }}
        ></div>

        {/* Road lines animation */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
          <div className="absolute bottom-8 w-full">
            <div className="flex space-x-8 animate-pulse">
              <div className="w-16 h-1 bg-[#121212] rounded-full"></div>
              <div className="w-16 h-1 bg-[#121212] rounded-full"></div>
              <div className="w-16 h-1 bg-[#121212] rounded-full"></div>
              <div className="w-16 h-1 bg-[#121212] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-[#FF6F00] font-semibold">
              <Zap className="w-5 h-5" />
              <span className="text-sm uppercase tracking-wide">
                Electric Mobility
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-[#121212]">
              SUSTAINABLE
              <br />
              <span className="text-[#00BCD4]">TRANSPORTATION</span>
            </h1>

            <p className="text-xl text-[#1C1F4A]/80 max-w-lg leading-relaxed">
              Experience eco-friendly urban mobility with our advanced electric
              rickshaws. Built for comfort, efficiency, and environmental
              responsibility.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[#FF6F00] hover:bg-[#FF6F00]/90 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              EXPLORE MODELS
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#00BCD4] text-[#00BCD4] hover:bg-[#00BCD4] hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              WATCH DEMO
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#00BCD4]/20 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#00BCD4]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Leaf className="w-6 h-6 text-[#00BCD4]" />
              </div>
              <div className="text-2xl font-bold text-[#121212]">100%</div>
              <div className="text-sm text-[#1C1F4A]/70">Eco-Friendly</div>
            </div>

            <div className="text-center p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#FF6F00]/20 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#FF6F00]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-[#FF6F00]" />
              </div>
              <div className="text-2xl font-bold text-[#121212]">80km</div>
              <div className="text-sm text-[#1C1F4A]/70">Range</div>
            </div>

            <div className="text-center p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#1C1F4A]/20 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#1C1F4A]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-[#1C1F4A]" />
              </div>
              <div className="text-2xl font-bold text-[#121212]">5★</div>
              <div className="text-sm text-[#1C1F4A]/70">Safety Rating</div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          {/* Gradient backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00BCD4]/20 via-transparent to-[#FF6F00]/10 rounded-[3rem] blur-3xl transform rotate-6"></div>

          {/* Floating elements around rickshaw */}
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#00BCD4]/20 rounded-full animate-pulse"></div>
          <div
            className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#FF6F00]/15 rounded-full animate-bounce"
            style={{ animationDuration: "4s" }}
          ></div>

          {/* Main rickshaw image */}
          <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
            <img
              src={heroRickshaw}
              alt="Electric Rickshaw - Sustainable Urban Transport"
              className="w-full h-auto max-w-2xl mx-auto drop-shadow-2xl"
            />

            {/* Floating info cards */}
            <div className="absolute top-1/4 -left-8 bg-white rounded-2xl p-4 shadow-xl animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[#00BCD4] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-[#121212]">
                  Zero Emissions
                </span>
              </div>
            </div>

            <div
              className="absolute bottom-1/4 -right-8 bg-white rounded-2xl p-4 shadow-xl animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[#FF6F00] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-[#121212]">
                  Fast Charging
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ErickshawHeroSection;
