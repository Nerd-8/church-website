import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Clock } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  time: string;
  location: string;
  delay?: number;
}

const EventCard: React.FC<EventCardProps> = ({ 
  image, 
  title, 
  date, 
  time, 
  location,
  delay = 0
}) => {
  return (
    <motion.div 
      className="card overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-3 text-church-blue">
          {title}
        </h3>
        
        <div className="flex flex-col space-y-2 text-gray-600 text-sm mb-4">
          <div className="flex items-center">
            <Calendar size={16} className="mr-2 text-church-purple" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2 text-church-purple" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="mr-2 text-church-purple" />
            <span>{location}</span>
          </div>
        </div>
        
        <Link 
          to="/events" 
          className="btn btn-outline btn-sm"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
};

const EventsHighlight: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    /*{
      image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg",
      title: "Revival Night: Spiritual Awakening",
      date: "June 24-26, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Main Sanctuary"
    },*/
    {
      image: "https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg",
      title: "Youth Dinner",
      date: "June 6, 2025",
      time: "From 9:00 PM",
      location: "Next Gen Hall"
    },
    /*{
      image: "https://images.pexels.com/photos/7845031/pexels-photo-7845031.jpeg",
      title: "Women's Retreat: Daughters of the King",
      date: "July 15-17, 2024",
      time: "All Day Event",
      location: "Elementaita Country Lodge"
    }*/
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Upcoming Events" 
          subtitle="Join us at our next events and grow in fellowship"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard 
              key={index}
              image={event.image}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              delay={index * 0.2}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/events" className="btn btn-primary">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsHighlight;