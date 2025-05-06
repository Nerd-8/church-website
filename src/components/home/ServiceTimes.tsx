import React from 'react';
import { Clock, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceTimes: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    {
      day: 'FIRST SERVICE',
      time: '7:00 AM - 9:00 AM',
      name: 'English Service',
      icon: <Clock className="w-8 h-8 text-church-gold" />
    },
    {
      day: 'YOUTH EXPLOSION SERVICE',
      time: '9:00 AM - 10:30 AM',
      name: 'Base ya vijana wote',
      icon: <Clock className="w-8 h-8 text-church-gold" />
    },
    {
      day: 'MAIN SERVICE',
      time: '11:00 AM - 1:30 PM',
      name: 'Swahili Service',
      icon: <Clock className="w-8 h-8 text-church-gold" />
    }
  ];

  return (
    <section className="py-16 bg-church-blue-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-church-gold mb-4">
              Join Us This Sunday
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We invite you to become a part of the vibrant church of thousands where you experience the presence of God and the power of His Word.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-church-blue p-6 rounded-lg shadow-lg text-center transition-transform duration-300 hover:transform hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-church-gold mb-2">
                  {service.day}
                </h3>
                <p className="text-gray-300 mb-1">{service.name}</p>
                <p className="text-white font-semibold">{service.time}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center space-x-2 btn btn-secondary"
              variants={itemVariants}
            >
              <MapPin size={18} />
              <span>Get Directions</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceTimes;