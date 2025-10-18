import EventCard from "./EventCard";

const EventsSection = () => {
  const events = [
    {
      title: "Safety",
      icon: (
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-gray-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
          </svg>
        </div>
      ),
      description:
        "From robust braking systems to sturdy construction, every aspect of our design ensures riders can confidently enjoy their journey.",
    },
    {
      title: "Fuel Cost",
      icon: (
        <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-4 relative">
          <svg
            className="w-6 h-6 text-green-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
          </svg>
          <div className="absolute -top-1 -right-1">
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7,2V13H10V22L17,10H13L17,2H7Z" />
            </svg>
          </div>
          <div className="absolute top-6 right-2">
            <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
            <div className="w-1 h-1 bg-yellow-400 rounded-full mt-1"></div>
          </div>
        </div>
      ),
      description:
        "Thanks to electric power, our products provide a welcome relief to all seeking an economical & sustainable transportation solution.",
    },
    {
      title: "Environment",
      icon: (
        <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-4 relative">
          <svg
            className="w-10 h-10 text-green-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <rect x="2" y="6" width="20" height="14" rx="2" />
            <path d="M6 6V2" />
            <path d="M18 6V2" />
            <path d="M2 12h20" />
            <path d="M6 12v6" />
            <path d="M10 12v6" />
            <path d="M14 12v6" />
            <path d="M18 12v6" />
          </svg>
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <svg
              className="w-6 h-6 text-green-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
        </div>
      ),
      description:
        "Reducing reliance on fossil fuels, improves air quality and benefits the environment. It's a positive step towards a greener future.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">WHY CHOOSE US</h2>
          <div className="flex space-x-2">
            <button
              type="button"
              aria-label="Previous slide"
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next slide"
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col">
                {event.icon}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {event.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
