import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, MapPin, Mail } from 'lucide-react';

// Enhanced PageBanner with image + animation
const PageBanner: React.FC<{
  title: string;
  subtitle: string;
  scriptureText: string;
  scriptureReference: string;
  backgroundImage?: string;
}> = ({ title, subtitle, scriptureText, scriptureReference, backgroundImage }) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative h-[70vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-black/50 absolute inset-0"></div>
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">{title}</h1>
        <p className="text-lg mb-2">{subtitle}</p>
        <blockquote className="italic text-sm">
          “{scriptureText}”<br />
          <span className="text-church-gold font-semibold">{scriptureReference}</span>
        </blockquote>
      </div>
    </motion.section>
  );
};

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  title,
  date,
  time,
  location,
  description
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transform transition-transform duration-500 hover:scale-105"
    >
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="relative"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </motion.div>

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

        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex items-center text-church-blue font-medium text-sm">
          <Mail size={16} className="mr-2" />
          <span>Contact for inquiries: info@prevailingwordchurch.org</span>
        </div>
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
      description: "Join us for three powerful nights of revival as we seek God's presence and experience spiritual renewal."
    }
    // Add more general events here if needed.
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Helmet>
        <title>Events - Prevailing Word Church Ruiru</title>
        <meta
          name="description"
          content="Join us for upcoming events at Prevailing Word Church Ruiru. From conferences to retreats, there's something for everyone in the family of God."
        />
      </Helmet>

      <PageBanner
        title="Upcoming Events"
        subtitle="Join Us for Life-Changing Experiences"
        scriptureText="Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another."
        scriptureReference="Hebrews 10:25"
        backgroundImage="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg"
      />

      <motion.section
        className="py-20 bg-gray-50"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default EventsPage;
