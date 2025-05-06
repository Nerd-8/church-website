import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, MapPin, Users, ChevronRight } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  registrationLink: string;
  category: string;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  title,
  date,
  time,
  location,
  description,
  registrationLink,
  category
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-church-gold text-church-blue px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-4">{title}</h3>
        
        <div className="space-y-2 text-gray-600 mb-4">
          <div className="flex items-center">
            <Calendar size={18} className="mr-2 text-church-purple" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={18} className="mr-2 text-church-purple" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <MapPin size={18} className="mr-2 text-church-purple" />
            <span>{location}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-6">{description}</p>

        <a
          href={registrationLink}
          className="btn btn-primary w-full flex items-center justify-center"
        >
          Register Now
          <ChevronRight size={16} className="ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

const EventsPage: React.FC = () => {
  const events = [
    {
      image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg",
      title: "Revival Night: Spiritual Awakening",
      date: "June 24-26, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Main Sanctuary",
      description: "Join us for three powerful nights of revival as we seek God's presence and experience spiritual renewal.",
      registrationLink: "#",
      category: "Special Service"
    },
    {
      image: "https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg",
      title: "Youth Conference: Ignite Your Purpose",
      date: "July 8-10, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Youth Center",
      description: "A dynamic conference designed to help young people discover and pursue their God-given purpose.",
      registrationLink: "#",
      category: "Youth"
    },
    {
      image: "https://images.pexels.com/photos/7845031/pexels-photo-7845031.jpeg",
      title: "Women's Retreat: Daughters of the King",
      date: "July 15-17, 2024",
      time: "All Day Event",
      location: "Elementaita Country Lodge",
      description: "A refreshing retreat for women to experience spiritual renewal and sisterly fellowship.",
      registrationLink: "#",
      category: "Women"
    },
    {
      image: "https://images.pexels.com/photos/8467978/pexels-photo-8467978.jpeg",
      title: "Men's Business Forum",
      date: "July 22, 2024",
      time: "8:00 AM - 2:00 PM",
      location: "Conference Hall",
      description: "A networking event for Christian businessmen to share insights and build connections.",
      registrationLink: "#",
      category: "Men"
    },
    {
      image: "https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg",
      title: "Children's Bible Camp",
      date: "August 1-3, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Children's Church",
      description: "A fun-filled camp where children learn biblical principles through activities and games.",
      registrationLink: "#",
      category: "Children"
    },
    {
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
      title: "Worship Night",
      date: "August 10, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Main Sanctuary",
      description: "An evening of powerful worship and praise in God's presence.",
      registrationLink: "#",
      category: "Worship"
    }
  ];

  const categories = ["All", "Special Service", "Youth", "Women", "Men", "Children", "Worship"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Events - Prevailing Word Church Ruiru</title>
        <meta name="description" content="Join us for upcoming events at Prevailing Word Church Ruiru. From conferences to retreats, there's something for everyone in the family of God." />
      </Helmet>

      <PageBanner
        title="Upcoming Events"
        subtitle="Join Us for Life-Changing Experiences"
        scriptureText="Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another."
        scriptureReference="Hebrews 10:25"
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  category === "All"
                    ? "bg-church-blue text-white"
                    : "bg-white text-gray-600 hover:bg-church-blue hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard
                key={index}
                {...event}
              />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn btn-primary">
              Load More Events
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default EventsPage;