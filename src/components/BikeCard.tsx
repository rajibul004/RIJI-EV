import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface BikeCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
}

const BikeCard = ({
  name,
  price,
  originalPrice,
  image,
  category,
}: BikeCardProps) => {
  return (
    <div className="bg-card rounded-lg shadow-product p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="mb-4">
        <img src={image} alt={name} className="w-full h-48 object-contain" />
      </div>

      <div className="space-y-3">
        <div className="text-sm text-electric-blue font-medium uppercase">
          {category}
        </div>

        <h3 className="font-bold text-lg text-card-foreground">{name}</h3>

        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-electric-blue">{price}</span>
          {originalPrice && (
            <span className="text-lg text-muted-foreground line-through">
              {originalPrice}
            </span>
          )}
        </div>

        <Button className="w-full bg-electric-blue hover:bg-electric-blue-dark text-white">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default BikeCard;
