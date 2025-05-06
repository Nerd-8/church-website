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
      image: "https://images.pexels.com/photos/8107197/pexels-photo-8107197.jpeg",
      title: "The Power of God's Prevailing Word",
      preacher: "Bishop Dr. Robert Njiru",
      date: "June 12, 2024",
      duration: "48 minutes",
      description: "Discover how God's Word can transform your life and bring breakthrough in every area.",
      videoUrl: "https://youtube.com/watch?v=example1"
    },
    {
      image: "https://images.pexels.com/photos/2774578/pexels-photo-2774578.jpeg",
      title: "Walking in Divine Favor",
      preacher: "Rev. Leah Njiru",
      date: "June 5, 2024",
      duration: "42 minutes",
      description: "Learn how to position yourself for God's favor and walk in His blessings.",
      videoUrl: "https://youtube.com/watch?v=example2"
    },
    {
      image: "https://images.pexels.com/photos/1487956/pexels-photo-1487956.jpeg",
      title: "Activating Your Faith",
      preacher: "Bishop Dr. Robert Njiru",
      date: "May 29, 2024",
      duration: "51 minutes",
      description: "Understanding how to activate and exercise your faith for supernatural results.",
      videoUrl: "https://youtube.com/watch?v=example3"
    },
    {
      image: "https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg",
      title: "The Power of Prayer and Fasting",
      preacher: "Rev. Leah Njiru",
      date: "May 22, 2024",
      duration: "45 minutes",
      description: "Exploring the spiritual disciplines of prayer and fasting for breakthrough.",
      videoUrl: "https://youtube.com/watch?v=example4"
    },
    {
      image: "https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg",
      title: "Living in God's Purpose",
      preacher: "Bishop Dr. Robert Njiru",
      date: "May 15, 2024",
      duration: "47 minutes",
      description: "Discovering and walking in God's divine purpose for your life.",
      videoUrl: "https://youtube.com/watch?v=example5"
    },
    {
      image: "https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg",
      title: "The Power of Unity",
      preacher: "Rev. Leah Njiru",
      date: "May 8, 2024",
      duration: "44 minutes",
      description: "Understanding the strength and blessing that comes through unity in the body of Christ.",
      videoUrl: "https://youtube.com/watch?v=example6"
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
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search sermons..."
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-blue focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

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

          <div className="mt-12 text-center">
            <button className="btn btn-primary">
              Load More Sermons
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default SermonsPage;