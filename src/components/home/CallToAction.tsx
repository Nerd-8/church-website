import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HelpingHand as PrayingHands, Heart, ChevronRight } from 'lucide-react';

const CallToAction: React.FC = () => {
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

  return (
    <section 
      className="py-20 bg-church-purple text-white bg-prayer bg-cover bg-center relative"
      ref={ref}
    >
      <div className="absolute inset-0 bg-church-purple bg-opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6"
            variants={itemVariants}
          >
            Experience God's Presence
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl mb-10 text-gray-200"
            variants={itemVariants}
          >
            Whether you're seeking prayer, looking to give, or want to join us in worship, we're here for you.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={itemVariants}
          >
            <div className="bg-white bg-opacity-10 p-8 rounded-lg border border-white border-opacity-20 text-center hover:bg-opacity-20 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <PrayingHands className="w-12 h-12 text-church-gold" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Submit Prayer Request</h3>
              <p className="text-gray-200 mb-6">
                We believe in the power of prayer. Share your prayer needs with our prayer team.
              </p>
              <Link 
                to="/prayer" 
                className="inline-flex items-center text-church-gold hover:text-white transition-colors duration-300"
              >
                <span className="mr-1">Request Prayer</span>
                <ChevronRight size={16} />
              </Link>
            </div>
            
            <div className="bg-white bg-opacity-10 p-8 rounded-lg border border-white border-opacity-20 text-center hover:bg-opacity-20 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Heart className="w-12 h-12 text-church-gold" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Give Online</h3>
              <p className="text-gray-200 mb-6">
                Support the ministry and help us reach more people with the love of Christ.
              </p>
              <Link 
                to="/giving" 
                className="inline-flex items-center text-church-gold hover:text-white transition-colors duration-300"
              >
                <span className="mr-1">Give Now</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12"
            variants={itemVariants}
          >
            <Link to="/contact" className="btn btn-secondary">
              Contact Us Today
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;