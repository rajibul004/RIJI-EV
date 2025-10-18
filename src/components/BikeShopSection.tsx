import BikeCard from "./BikeCard";

const BikeShopSection = () => {
  const bikes = [
    {
      name: "ZoomX Electric Scooty",
      price: "₹65,000",
      originalPrice: "₹72,000",
      rating: 4,
      image: "/assets/Scooter.png",
      category: "E-scooty",
    },
    {
      name: "Toto Smart E-Rickshaw",
      price: "₹95,000",
      rating: 5,
      image: "/images/rickshaw1.png",
      category: "E-rickshaw",
    },
    {
      name: "Flash Scooty X1",
      price: "₹58,000",
      originalPrice: "₹62,000",
      rating: 3,
      image: "/images/scooty2.png",
      category: "E-scooty",
    },
    {
      name: "Toto Max Pro",
      price: "₹1,15,000",
      rating: 5,
      image: "/assets/toto2.png",
      category: "E-rickshaw",
    },
  ];

  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            BEST BIKE SHOP
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our premium collection of mountain bikes from the world's
            leading brands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bikes.map((bike, index) => (
            <BikeCard key={index} {...bike} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-electric-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-electric-blue-dark transition-colors">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default BikeShopSection;
