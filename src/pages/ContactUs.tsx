import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import ShowroomCard from "@/components/ShowroomCard";
import Footer from "@/components/Footer";

/* ---------------- Color Map ---------------- */
const colorMap = {
  blue: { bg: "bg-blue-50", icon: "bg-blue-500" },
  green: { bg: "bg-green-50", icon: "bg-green-500" },
  purple: { bg: "bg-purple-50", icon: "bg-purple-500" },
  orange: { bg: "bg-orange-50", icon: "bg-orange-500" },
};

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team for inquiries, feedback, or test rides.
          </p>
        </div>
      </div>

      {/* Info + Form */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <InfoCard
              icon={<MapPin />}
              title="Our Location"
              text={[
                "Fancy Market 2nd Floor, Tinkonia Bus Stand,",
                "Bardhaman, West Bengal, 713101",
              ]}
              color="blue"
            />
            <InfoCard
              icon={<Phone />}
              title="Call Us"
              text={["+91 98765 43210", "+91 98765 43211"]}
              color="green"
            />
            <InfoCard
              icon={<Mail />}
              title="Email Us"
              text={["info@rijiyaev.com", "support@rijiyaev.com"]}
              color="purple"
            />
            <InfoCard
              icon={<Clock />}
              title="Working Hours"
              text={[
                "Mon–Fri: 9:00 AM – 6:00 PM",
                "Sat: 10:00 AM – 4:00 PM",
                "Sunday: Closed",
              ]}
              color="orange"
            />
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Showrooms */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ShowroomCard
            city="Kolkata"
            address="Park Street, Kolkata"
            phone="+91 98765 43210"
            timing="10 AM - 7 PM"
            mapLink="#"
            featured
          />
          <ShowroomCard
            city="Delhi"
            address="Connaught Place, Delhi"
            phone="+91 98765 43211"
            timing="10 AM - 7 PM"
            mapLink="#"
          />
          <ShowroomCard
            city="Mumbai"
            address="Bandra West, Mumbai"
            phone="+91 98765 43212"
            timing="10 AM - 7 PM"
            mapLink="#"
          />
        </div>
      </section>
      {/* Google Map – Live Directions */}
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-12">
      <h3 className="text-3xl font-bold text-gray-900 mb-4">
        Find Us on the Map
      </h3>
      <p className="text-lg text-gray-600">
        Located in the heart of Bardhaman, West Bengal
      </p>
    </div>

    <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d460.9435572801327!2d87.86890564769762!3d23.245332565237003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f849c3d042e55d%3A0x8cb19836a8ea999b!2sFancy%20Market%2C%20Grand%20Trunk%20Rd%2C%20Khosbagan%2C%20Bardhaman%2C%20West%20Bengal%20713101!5e0!3m2!1sen!2sin!4v1748845458644!5m2!1sen!2sin"
        width="100%"
        height="420"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="RIJI EV – Bardhaman Location"
        className="grayscale hover:grayscale-0 transition-all duration-500"
      />
    </div>
  </div>
</section>


      {/* ✅ Footer INSIDE */}
      <Footer />
    </div>
  );
};

export default Contact;

/* -------- InfoCard -------- */
const InfoCard = ({
  icon,
  title,
  text,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  text: string[];
  color: keyof typeof colorMap;
}) => {
  const styles = colorMap[color];
  return (
    <div className={`p-4 rounded-2xl border ${styles.bg}`}>
      <h3 className="text-lg font-semibold flex items-center gap-3">
        <div className={`p-2 rounded-lg text-white ${styles.icon}`}>{icon}</div>
        {title}
      </h3>
      <div className="ml-11 text-gray-700">
        {text.map((t, i) => (
          <p key={i}>{t}</p>
        ))}
      </div>
    </div>
  );
};
