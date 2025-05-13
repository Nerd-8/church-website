import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/public/Recap3.mp4" // Put your video in `public/media/` or adjust path accordingly
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Foreground Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="animate-float mb-6 text-church-gold text-xl sm:text-2xl font-serif"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Welcome to
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Prevailing Word Church Ruiru
          </motion.h1>
          
          <motion.div 
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p className="mb-6">A Vibrant Church Of Thousands</p>
            <div className="mx-auto max-w-2xl bg-black bg-opacity-30 p-6 rounded-lg border-l-4 border-church-blue">
              <p className="text-white italic">"So mightily grew the word of God and prevailed."</p>
              <p className="text-church-gold text-right mt-2">— Acts 19:20</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Link to="/about" className="btn btn-primary">
              About Our Church
            </Link>
            <Link to="/livestream" className="btn btn-secondary">
              Join Live Worship
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;