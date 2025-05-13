import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Clock, Users, HelpingHand as PrayingHands } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';

const PrayerRequestsPage: React.FC = () => {
  const prayerTimes = [
    {
      icon: <Clock size={24} className="text-church-purple" />,
      title: "Morning Glory",
      time: "6:00 AM - 7:00 AM",
      days: "Monday to Friday",
      description: "Start your day in God's presence with powerful morning prayers and declarations."
    },
    {
      icon: <Users size={24} className="text-church-purple" />,
      title: "Intercessory Prayer",
      time: "5:30 PM - 7:00 PM",
      days: "Every Monday",
      description: "Join our dedicated team of intercessors as we stand in the gap for others."
    },
    {
      icon: <PrayingHands size={24} className="text-church-purple" />,
      title: "Prayer & Fasting",
      time: "6:00 AM - 6:00 PM",
      days: "Every First 3 Days of The Month",
      description: "Commanding every month through the power of prayer and fasting"
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
        <title>Prayer Requests - Prevailing Word Church Ruiru</title>
        <meta
          name="description"
          content="Learn about prayer times and opportunities to connect with Prevailing Word Church Ruiru."
        />
      </Helmet>

      <PageBanner
        title="Prayer Requests"
        subtitle="Let Us Stand Together in Faith"
        scriptureText="Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours."
        scriptureReference="Mark 11:24"
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Prayer Times & Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-serif font-bold text-church-blue mb-6">
                  Prayer Times
                </h2>

                <div className="space-y-6">
                  {prayerTimes.map((prayer, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg">
                      <div className="flex-shrink-0">{prayer.icon}</div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{prayer.title}</h3>
                        <p className="text-gray-600">{prayer.time}</p>
                        <p className="text-gray-500 text-sm mb-2">{prayer.days}</p>
                        <p className="text-gray-600 text-sm">{prayer.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-church-blue text-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-serif font-bold mb-4">Emergency Prayer</h2>
                <p className="mb-4">
                  For urgent prayer needs and someone to talk to, please contact our prayer line:
                </p>
                <p className="text-2xl font-bold text-church-gold">
                      <a href="tel:+254726169429" className="hover:underline">+254 726 169 429</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PrayerRequestsPage;