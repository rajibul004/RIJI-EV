import React from "react";
import {
  Layers,
  Users,
  Zap,
  Star,
  Award,
  TrendingUp,
  Check,
  ArrowRight,
  Calendar,
  MapPin,
  Phone,
} from "lucide-react";
import Navigation from "@/components/Navigation";

// Type definitions
interface StatsCardProps {
  number: string;
  label: string;
  description: string;
}

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
}

interface AchievementCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const stats = [
    {
      number: "10K+",
      label: "SATISFIED CUSTOMERS",
      description: "Happy riders across India",
    },
    {
      number: "98%",
      label: "CUSTOMER SATISFACTION",
      description: "Quality & service rating",
    },
    {
      number: "50+",
      label: "SERVICE CENTERS",
      description: "Nationwide support network",
    },
    {
      number: "2016",
      label: "ESTABLISHED",
      description: "Years of innovation",
    },
  ];

  const values = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "INNOVATION",
      description:
        "Continuously pushing boundaries in electric vehicle technology with cutting-edge research and development.",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "SUSTAINABILITY",
      description:
        "Committed to reducing environmental impact through clean mobility solutions and eco-friendly practices.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "CUSTOMER-FIRST",
      description:
        "Putting customer needs at the center of everything we do, from design to after-sales service.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "QUALITY",
      description:
        "Uncompromising excellence in materials, manufacturing processes, and customer experience.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "ACCESSIBILITY",
      description:
        "Making electric mobility affordable and accessible for everyone, regardless of economic background.",
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "INTEGRITY",
      description:
        "Operating with transparency, honesty, and ethical conduct in all business relationships.",
    },
  ];

  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Best EV Startup 2019",
      description: "Recognized for innovation in electric mobility",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "10,000+ Happy Customers",
      description: "Growing community of satisfied riders",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "50+ Cities Coverage",
      description: "Expanding across major Indian cities",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Zero Emissions Goal",
      description: "Contributing to cleaner air in urban areas",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section - Introduction */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-center bg-cover opacity-40"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
              ABOUT
              <br />
              <span className="text-blue-500">RIJI EV</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              <strong>Founded in 2016</strong>, Rijiya Pvt. Ltd. is India's
              leading electric vehicle manufacturer, specializing in sustainable
              and affordable electric mobility solutions.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We design, manufacture, and service premium electric bikes and
              scooters that combine cutting-edge technology with Indian road
              conditions, making clean transportation accessible to everyone.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center gap-3 group">
              EXPLORE OUR STORY
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=2070&auto=format&fit=crop"
                alt="Riji Electric Bike"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Company Stats */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-8">
              OUR <span className="text-blue-500">MISSION</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl text-gray-300 mb-6 leading-relaxed font-medium">
                "To accelerate India's transition to sustainable mobility by
                developing affordable, reliable, and high-performance electric
                vehicles that meet the diverse needs of Indian consumers while
                reducing environmental impact."
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                We exist to provide clean, efficient, and accessible
                transportation solutions that contribute to a healthier planet
                while empowering individuals with reliable mobility options for
                their daily lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-8">
              OUR <span className="text-blue-500">VISION</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl text-gray-300 mb-6 leading-relaxed font-medium">
                "To become India's most trusted electric vehicle brand,
                recognized globally for innovation, quality, and
                customer-centric solutions."
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                We envision an India where electric mobility is the preferred
                choice for all, contributing to cleaner air, reduced noise
                pollution, and decreased dependency on fossil fuels. By 2030, we
                aim to have transformed urban transportation across major Indian
                cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-8">
              OUR <span className="text-blue-500">VALUES</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do at Riji EV
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1621360241143-5cc408eeb9b7?q=80&w=2574&auto=format&fit=crop"
              alt="Riji EV Story"
              className="w-full h-96 object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6">
              <div className="flex items-center gap-2 text-blue-400 mb-2">
                <Calendar className="h-5 w-5" />
                <span className="text-sm font-semibold">EST. 2016</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                THE JOURNEY BEGINS
              </h3>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black mb-6">
              OUR <span className="text-blue-500">STORY</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              <strong>The inspiration:</strong> Our founder, Rijaul Haque
              Mondal, experienced firsthand the challenges of daily commuting in
              urban India – traffic congestion, air pollution, and rising fuel
              costs. He envisioned a future where electric vehicles would
              transform mobility while improving environmental quality.
            </p>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              <strong>The beginning:</strong> After two years of intensive
              research and development, we unveiled our first prototype at the
              National Mobility Exhibition in 2018. The overwhelming positive
              response confirmed that India was ready for an EV revolution.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              <strong>Today:</strong> We've grown from a small startup to a
              recognized brand, serving thousands of customers across India with
              our innovative electric vehicles and comprehensive support
              network.
            </p>

            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">8+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">15+</div>
                <div className="text-sm text-gray-400">Models Launched</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">100+</div>
                <div className="text-sm text-gray-400">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-8">
              MEET OUR <span className="text-blue-500">LEADERSHIP</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The visionary leaders driving Riji EV's innovation and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TeamMember
              name="Rijaul Haque Mondal"
              position="FOUNDER & CEO"
              bio="Automotive engineer with 20+ years of experience. Visionary leader passionate about sustainable mobility solutions for India. Previously worked with leading automotive manufacturers before founding Riji EV."
              imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
            />
            <TeamMember
              name="PRIYA MEHTA"
              position="CHIEF TECHNOLOGY OFFICER"
              bio="Former lead engineer at global EV manufacturers with expertise in battery technology and electric drivetrains. Holds multiple patents in electric vehicle systems and leads our R&D initiatives."
              imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
            />
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-8">
              OUR <span className="text-blue-500">ACHIEVEMENTS</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Milestones that mark our journey towards sustainable mobility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} {...achievement} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black mb-8">
            READY TO <span className="text-black">GO ELECTRIC?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have made the switch to
            sustainable mobility. Explore our range of electric vehicles or
            visit our nearest service center for a test ride.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center gap-3 group">
              EXPLORE PRODUCTS
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center gap-3 group">
              <Phone className="h-5 w-5" />
              CONTACT US
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Stats Card Component
const StatsCard: React.FC<StatsCardProps> = ({
  number,
  label,
  description,
}) => (
  <div className="text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
    <div className="text-4xl font-black text-blue-500 mb-2">{number}</div>
    <div className="text-sm font-bold text-white mb-2 tracking-wide">
      {label}
    </div>
    <div className="text-xs text-gray-400">{description}</div>
  </div>
);

// Value Card Component
const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group">
    <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4 tracking-wide">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

// Team Member Component
const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  position,
  bio,
  imageUrl,
}) => (
  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm overflow-hidden group hover:border-blue-500/50 transition-all duration-300">
    <div className="h-64 overflow-hidden">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-1 tracking-wide">{name}</h3>
      <p className="text-blue-400 font-semibold mb-3 text-sm tracking-wide">
        {position}
      </p>
      <p className="text-gray-400 text-sm leading-relaxed">{bio}</p>
    </div>
  </div>
);

// Achievement Card Component
const AchievementCard: React.FC<AchievementCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group">
    <div className="text-blue-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-2 tracking-wide">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

export default About;
