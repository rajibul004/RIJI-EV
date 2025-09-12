const Footer = () => {
  return (
    <footer className="bg-dark-surface text-dark-surface-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">MODE</div>
              <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
            </div>
            <p className="text-gray-400">
              Leading the future of electric biking with premium quality and innovative design.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">LOCATION</h3>
            <div className="space-y-2 text-gray-400">
              <p>123 Bike Street</p>
              <p>Mountain View, CA 94041</p>
              <p>United States</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">CALL US</h3>
            <div className="space-y-2 text-gray-400">
              <p>+1 (555) 123-4567</p>
              <p>Mon - Fri: 9AM - 6PM</p>
              <p>Sat - Sun: 10AM - 4PM</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">EMAIL</h3>
            <div className="space-y-2 text-gray-400">
              <p>info@modebikes.com</p>
              <p>support@modebikes.com</p>
              <p>sales@modebikes.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2024 MODE Bikes. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            WANT TO OUR LATEST E-BIKE WITH US
          </p>
          <button className="mt-4 bg-electric-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-electric-blue-dark transition-colors">
            JOIN NOW
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;