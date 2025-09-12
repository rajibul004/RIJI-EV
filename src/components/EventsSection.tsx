import EventCard from "./EventCard";

const EventsSection = () => {
  const events = [
    {
      title: "ADIPISCING ET, ID ODIO",
      date: "April 18, 2024",
      location: "Mountain Valley",
      image: "/placeholder.svg",
      description: "Join us for an exciting mountain biking adventure through scenic trails."
    },
    {
      title: "SED QUISQUE NULLA VEL",
      date: "May 25, 2024", 
      location: "Forest Trail",
      image: "/placeholder.svg",
      description: "Experience the thrill of forest trail riding with expert guides."
    },
    {
      title: "METUS PULVINAR VOLUTPAT",
      date: "June 15, 2024",
      location: "Rocky Mountains",
      image: "/placeholder.svg",
      description: "Challenge yourself on advanced mountain terrain with professional support."
    },
    {
      title: "NIBH SIT ET EGESTAS",
      date: "July 8, 2024",
      location: "Desert Trail",
      image: "/placeholder.svg", 
      description: "Explore unique desert landscapes on specialized e-bike tours."
    }
  ];

  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-foreground">
            UPCOMING EVENTS
          </h2>
          <button className="bg-electric-blue text-white px-6 py-2 rounded-lg font-semibold hover:bg-electric-blue-dark transition-colors">
            VIEW ALL
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;