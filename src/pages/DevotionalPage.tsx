import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Book, Calendar } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';

const DevotionalPage: React.FC = () => {
  const devotionals = [
    {
      date: 'March 20, 2024',
      title: 'Walking in Divine Favor',
      scripture: 'Psalm 5:12',
      scriptureText: 'Surely, LORD, you bless the righteous; you surround them with your favor as with a shield.',
      content: 'Today we explore the concept of divine favor and how it manifests in our daily lives as believers...'
    },
    {
      date: 'March 19, 2024',
      title: 'The Power of Prayer',
      scripture: 'James 5:16',
      scriptureText: 'The prayer of a righteous person is powerful and effective.',
      content: 'Understanding the transformative power of prayer in our spiritual journey...'
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
        <title>Daily Devotional - Prevailing Word Church Ruiru</title>
        <meta 
          name="description" 
          content="Daily spiritual nourishment from Prevailing Word Church Ruiru. Join us in our daily devotionals for inspiration and biblical wisdom." 
        />
      </Helmet>

      <PageBanner
        title="Daily Devotional"
        subtitle="Daily Spiritual Nourishment for Your Faith Journey"
        scriptureText="Your word is a lamp for my feet, a light on my path."
        scriptureReference="Psalm 119:105"
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {devotionals.map((devotional, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md p-8 mb-8"
              >
                <div className="flex items-center text-church-purple mb-4">
                  <Calendar size={20} className="mr-2" />
                  <span>{devotional.date}</span>
                </div>

                <h2 className="text-2xl font-serif font-bold text-church-blue mb-4">
                  {devotional.title}
                </h2>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-church-gold mb-6">
                  <div className="flex items-start mb-2">
                    <Book size={20} className="text-church-purple mr-2 mt-1" />
                    <p className="text-gray-700 italic">
                      "{devotional.scriptureText}"
                    </p>
                  </div>
                  <p className="text-church-purple text-right">
                    — {devotional.scripture}
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {devotional.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default DevotionalPage;