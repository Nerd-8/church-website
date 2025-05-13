import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ReactPlayer from 'react-player';
import { Calendar, Clock, Share2 } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';

const LivestreamPage: React.FC = () => {
  const upcomingServices = [
    {
      day: "Sunday",
      time: "11:00 AM - 1:30 PM",
      name: "Main Service"
    },
    {
      day: "Monday",
      time: "5:30 PM - 7:00 PM",
      name: "Thanksgiving Prayers"
    },
    {
      day: "Thursday",
      time: "5:30 PM - 7:00 PM",
      name: "Overflow Hour(DCS)"
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
        <title>Live Stream - Prevailing Word Church Ruiru</title>
        <meta
          name="description"
          content="Join our live worship services at Prevailing Word Church Ruiru. Experience powerful worship and the Word of God from anywhere in the world."
        />
      </Helmet>

      {/* Hero Section with Video Background */}
      <motion.section
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[70vh] flex items-center justify-center text-white"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Recap.MP4" // Replace with your video file path
          autoPlay
          loop
          muted
        />
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative z-10 text-center max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Live Stream</h1>
          <p className="text-lg mb-2">Join Us Live for Worship and the Word</p>
          <blockquote className="italic text-sm">
            “For where two or three gather in my name, there am I with them.”<br />
            <span className="text-church-gold font-semibold">Matthew 18:20</span>
          </blockquote>
        </div>
      </motion.section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="aspect-w-16 aspect-h-9">
                <ReactPlayer
                  url="https://www.youtube.com/live/riuuKLMpwq4?si=oFl1tpUnV_QM80Dv"
                  width="100%"
                  height="100%"
                  controls
                  playing
                  config={{
                    youtube: {
                      playerVars: { showinfo: 1 }
                    }
                  }}
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <h2 className="text-2xl font-serif font-bold text-church-blue">
                    Sunday Service Live Stream
                  </h2>

                  <button className="flex items-center text-church-purple hover:text-church-blue transition-colors">
                    <Share2 size={20} className="mr-2" />
                    Share
                  </button>
                </div>

                <p className="text-gray-600 mb-4">
                  Welcome to our live stream! If you're joining us online, we're glad you're here.
                  Feel free to participate in worship and share your prayer requests in the chat.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Upcoming Services */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-serif font-bold text-church-blue mb-6">
                  Upcoming Services
                </h3>

                <div className="space-y-4">
                  {upcomingServices.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-shrink-0">
                        <Calendar size={24} className="text-church-purple" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{service.name}</h4>
                        <p className="text-gray-600">{service.day}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Clock size={14} className="mr-1" />
                          {service.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connect With Us */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-serif font-bold text-church-blue mb-6">
                  Connect With Us
                </h3>

                <div className="space-y-4">
                  <p className="text-gray-600">
                    We'd love to connect with you! Here's how you can get involved:
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-church-gold rounded-full mr-2"></span>
                      Subscribe to our YouTube channel for notifications
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-church-gold rounded-full mr-2"></span>
                      Follow us on social media for updates
                    </li>
                  </ul>

                  <div className="mt-6">
                    <a
                      href="https://youtube.com/@prevailingwordchurchkenya?si=ogTysdbnT8h64lCi" // Replace with your actual YouTube channel URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full">
                          Subscribe Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default LivestreamPage;