import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Calendar, Clock, User } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

interface SermonCardProps {
  image: string;
  title: string;
  preacher: string;
  date: string;
  duration: string;
  videoUrl: string;
  delay?: number;
}

const SermonCard: React.FC<SermonCardProps> = ({ 
  image, 
  title, 
  preacher, 
  date, 
  duration, 
  videoUrl,
  delay = 0 
}) => {
  return (
    <motion.div 
      className="card overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-90 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <a 
            href={videoUrl} 
            target="_blank" 
            rel="noreferrer"
            className="bg-church-blue text-white p-3 rounded-full hover:bg-church-gold transition-colors duration-300"
            aria-label="Play sermon"
          >
            <Play size={24} />
          </a>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-serif font-bold mb-3 text-church-blue">
          {title}
        </h3>
        
        <div className="flex flex-col space-y-2 text-gray-600 text-sm mb-4">
          <div className="flex items-center">
            <User size={16} className="mr-2" />
            <span>{preacher}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2" />
            <span>{duration}</span>
          </div>
        </div>
        
        <Link 
          to="/sermons" 
          className="mt-auto inline-block text-church-blue font-medium hover:text-church-purple transition-colors duration-300"
        >
          Watch Sermon →
        </Link>
      </div>
    </motion.div>
  );
};

const LatestSermons: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sermons = [
    {
      image: "/bishop2.JPG",
      title: "The Value Of A Sacrifice",
      preacher: "Bishop Dr. Robert Njiru",
      date: "Dec 11, 2022",
      duration: "37 minutes",
      videoUrl: "https://youtu.be/e3ornIyIeq8?si=KFW4wHL_dsf7-94H"
    },
    {
      image: "/bishop1.JPG",
      title: "Look At The Man In The Middle",
      preacher: "Bishop Dr. Robert Njiru",
      date: "April 26, 2025",
      duration: "22 minutes",
      videoUrl: "https://www.youtube.com/live/zUviqB12MeA?si=t_xgppEN5GyYWn8R"
    },
    {
      image: "/bishop3.JPG",
      title: "Our God Of A Second Chance",
      preacher: "Bishop Dr. Robert Njiru",
      date: "May 3, 2025",
      duration: "30 minutes",
      videoUrl: "https://www.youtube.com/live/N-G7CiG9Oeo?si=JlvO9I9HRFTA9849"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Latest Sermons" 
          subtitle="Be transformed by the renewing of your mind through God's Word"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon, index) => (
            <SermonCard 
              key={index}
              image={sermon.image}
              title={sermon.title}
              preacher={sermon.preacher}
              date={sermon.date}
              duration={sermon.duration}
              videoUrl={sermon.videoUrl}
              delay={index * 0.2}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/sermons" className="btn btn-primary">
            Browse All Sermons
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestSermons;