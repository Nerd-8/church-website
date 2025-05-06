import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Send, HelpingHand as PrayingHands, Users, Clock } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';

const PrayerRequestsPage: React.FC = () => {
  const prayerTimes = [
    {
      icon: <Clock size={24} className="text-church-purple" />,
      title: "Morning Prayer",
      time: "6:00 AM - 7:00 AM",
      days: "Monday to Friday"
    },
    {
      icon: <Users size={24} className="text-church-purple" />,
      title: "Intercessory Prayer",
      time: "2:00 PM - 3:00 PM",
      days: "Wednesday & Friday"
    },
    {
      icon: <PrayingHands size={24} className="text-church-purple" />,
      title: "Prayer & Fasting",
      time: "6:00 PM - 8:00 PM",
      days: "First Friday of Every Month"
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
        <meta name="description" content="Submit your prayer requests to Prevailing Word Church Ruiru. Our prayer team is committed to standing with you in faith for your breakthrough." />
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
            {/* Prayer Request Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-serif font-bold text-church-blue mb-6">
                Submit Your Prayer Request
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="prayer-type" className="block text-gray-700 mb-2">
                    Type of Prayer Request
                  </label>
                  <select id="prayer-type" className="input-field">
                    <option value="healing">Physical Healing</option>
                    <option value="financial">Financial Breakthrough</option>
                    <option value="family">Family Issues</option>
                    <option value="guidance">Divine Guidance</option>
                    <option value="deliverance">Deliverance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="request" className="block text-gray-700 mb-2">
                    Your Prayer Request
                  </label>
                  <textarea
                    id="request"
                    rows={5}
                    className="input-field"
                    placeholder="Share your prayer request..."
                    required
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="confidential"
                    className="mt-1"
                  />
                  <label htmlFor="confidential" className="ml-2 text-gray-600">
                    Keep my request confidential
                  </label>
                </div>

                <button type="submit" className="btn btn-primary w-full flex items-center justify-center">
                  <Send size={18} className="mr-2" />
                  Submit Prayer Request
                </button>
              </form>
            </div>

            {/* Prayer Times & Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-serif font-bold text-church-blue mb-6">
                  Prayer Times
                </h2>
                
                <div className="space-y-6">
                  {prayerTimes.map((prayer, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {prayer.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          {prayer.title}
                        </h3>
                        <p className="text-gray-600">{prayer.time}</p>
                        <p className="text-gray-500 text-sm">{prayer.days}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-serif font-bold text-church-blue mb-6">
                  Prayer Support
                </h2>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Our prayer team is committed to standing with you in faith. Here's what you can expect:
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-church-gold rounded-full mr-2"></span>
                      Immediate prayer support from our team
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-church-gold rounded-full mr-2"></span>
                      Confidential handling of your request
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-church-gold rounded-full mr-2"></span>
                      Follow-up support if needed
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-church-gold rounded-full mr-2"></span>
                      Connection with a prayer partner
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-church-blue text-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-serif font-bold mb-4">
                  Emergency Prayer
                </h2>
                <p className="mb-4">
                  For urgent prayer needs, please contact our 24/7 prayer line:
                </p>
                <p className="text-2xl font-bold text-church-gold">
                  +254 123 456 789
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