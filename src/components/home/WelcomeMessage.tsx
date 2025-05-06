import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const WelcomeMessage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: "easeOut" 
      } 
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        delay: 0.2
      } 
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={ref} 
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageVariants}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="./public/bishop2.JPG" 
                alt="Bishop Dr. Robert Njiru & Rev. Leah Njiru" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-church-blue text-white p-4 rounded-lg shadow-lg hidden md:block">
              <p className="text-sm font-medium">Senior Pastor</p>
              <p className="text-lg font-serif">Bishop Dr.Robert Njiru</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-church-blue mb-6">
              Welcome to THE HOME OF LOVE
            </h2>
            
            <div className="md:hidden mb-6 bg-church-blue text-white p-4 rounded-lg shadow-lg inline-block">
              <p className="text-sm font-medium">Senior Pastor</p>
              <p className="text-lg font-serif">Bishop Dr. Robert Njiru</p>
            </div>
            
            <p className="text-gray-700 mb-4 text-lg">
              We are delighted that you have chosen to visit our website and learn more about Prevailing Word Church Ruiru. Our church is a place where people can meet Jesus, engage in life-giving community, and grow in their faith.
            </p>
            
            <p className="text-gray-700 mb-6 text-lg">
              Whether you're seeking to deepen your relationship with God, looking for a community to belong to, or simply curious about Christianity, we welcome you with open arms. Come as you are and experience God's unconditional love and transformative power.
            </p>
            
            <div className="mb-6 bg-gray-100 p-6 rounded-lg border-l-4 border-church-gold italic">
              <p className="text-gray-700">
                "For the word of God is living and active, sharper than any two-edged sword, piercing to the division of soul and of spirit, of joints and of marrow, and discerning the thoughts and intentions of the heart."
              </p>
              <p className="text-church-blue-dark text-right mt-2 font-medium">— Hebrews 4:12</p>
            </div>
            
            <Link to="/about" className="btn btn-primary">
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;