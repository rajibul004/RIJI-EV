import BikeCard from "./BikeCard";

const BikeShopSection = () => {
  const bikes = [
    {
      name: "SCOTT GENIUS 940",
      price: "$4,450",
      rating: 5,
      image: "/placeholder.svg",
      category: "SCOTT"
    },
    {
      name: "ROCKY MOUNTAIN",
      price: "$6,600",
      rating: 4,
      image: "/placeholder.svg",
      category: "ROCKY MOUNTAIN"
    },
    {
      name: "CUBE STEREO",
      price: "$3,200",
      rating: 5,
      image: "/placeholder.svg",
      category: "CUBE"
    },
    {
      name: "MERIDA ONE-SIXTY",
      price: "$5,500",
      rating: 4,
      image: "/placeholder.svg",
      category: "MERIDA"
    },
    {
      name: "YT TUES",
      price: "$8,300",
      rating: 5,
      image: "/placeholder.svg",
      category: "YT TUES"
    },
    {
      name: "TREK FUEL EX",
      price: "$4,800",
      rating: 4,
      image: "/placeholder.svg",
      category: "TREK"
    },
    {
      name: "ORBEA OCCAM",
      price: "$3,900",
      rating: 5,
      image: "/placeholder.svg",
      category: "ORBEA"
    },
    {
      name: "MONDRAKER CRAFTY",
      price: "$7,200",
      rating: 5,
      image: "/placeholder.svg",
      category: "MONDRAKER"
    }
  ];

  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            BEST BIKE SHOP
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our premium collection of mountain bikes from the world's leading brands
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