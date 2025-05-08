import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Play, Calendar, Clock, User, Search } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import SectionTitle from '../components/common/SectionTitle';

interface SermonCardProps {
  image: string;
  title: string;
  preacher: string;
  date: string;
  duration: string;
  description: string;
  videoUrl: string;
}

const SermonCard: React.FC<SermonCardProps> = ({
  image,
  title,
  preacher,
  date,
  duration,
  description,
  videoUrl
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
        <a
          href={videoUrl}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
        >
          <div className="bg-church-blue text-white p-4 rounded-full">
            <Play size={24} />
          </div>
        </a>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2">{title}</h3>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <User size={16} className="mr-1" />
            {preacher}
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            {duration}
          </div>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        <a
          href={videoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-church-blue hover:text-church-purple transition-colors"
        >
          Watch Sermon
          <Play size={16} className="ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

const SermonsPage: React.FC = () => {
  const sermons = [
    {
      image: "./public/bishop2.JPG",
      title: "The Value Of A Sacrifice",
      preacher: "Bishop Dr. Robert Njiru",
      date: "Dec 11, 2022",
      duration: "37 minutes",
      description: ".",
      videoUrl: "https://youtu.be/e3ornIyIeq8?si=KFW4wHL_dsf7-94H"
    },
    {
      image: "./public/bishop1.JPG",
      title: "Look At The Man In The Middle",
      preacher: "Bishop Dr. Robert Njiru",
      date: "April 26, 2025",
      duration: "22 minutes",
      description: ".",
      videoUrl: "https://www.youtube.com/live/zUviqB12MeA?si=t_xgppEN5GyYWn8R"
    },
    {
      image: "./public/bishop3.JPG",
      title: "Our God Of A Second Chance",
      preacher: "Bishop Dr. Robert Njiru",
      date: "May 3, 2025",
      duration: "30 minutes",
      description: ".",
      videoUrl: "https://www.youtube.com/live/N-G7CiG9Oeo?si=JlvO9I9HRFTA9849"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Sermons - Prevailing Word Church Ruiru</title>
        <meta name="description" content="Watch and listen to powerful sermons from Prevailing Word Church Ruiru. Be transformed by the Word of God through our anointed messages." />
      </Helmet>

      <PageBanner
        title="Sermons"
        subtitle="Be transformed by the renewing of your mind through God's Word"
        scriptureText="So faith comes from hearing, and hearing through the word of Christ."
        scriptureReference="Romans 10:17"
      />

      <section className="py-20 bg-gray-50">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.map((sermon, index) => (
              <SermonCard
                key={index}
                image={sermon.image}
                title={sermon.title}
                preacher={sermon.preacher}
                date={sermon.date}
                duration={sermon.duration}
                description={sermon.description}
                videoUrl={sermon.videoUrl}
              />
            ))}
        </div>
      </section>
    </motion.div>
  );
};

export default SermonsPage;