const QualitySection = () => {
  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              WE MAKE THE BEST E-BIKES WITH 
              PROVIDING BEST QUALITY & TOP 
              FEATURES. ALSO WE PROVIDE BEST 
              AFTER SALES SERVICE
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-electric-blue rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Quality Materials</h3>
                  <p className="text-muted-foreground">Premium aluminum frames and carbon fiber components</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-electric-blue rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Advanced Technology</h3>
                  <p className="text-muted-foreground">Latest e-bike technology with smart features</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-electric-blue rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">24/7 Support</h3>
                  <p className="text-muted-foreground">Comprehensive after-sales service and support</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-electric-blue mb-2">NO.1</div>
              <div className="text-sm text-muted-foreground">Best E-bike Brand</div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-electric-blue mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-electric-blue mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Satisfied Customers</div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-electric-blue mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Awards Won</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;