import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
}

const EventCard = ({
  title,
  date,
  location,
  image,
  description,
}: EventCardProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-product hover:shadow-xl transition-all duration-300">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button
          variant="outline"
          className="w-full border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white"
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
