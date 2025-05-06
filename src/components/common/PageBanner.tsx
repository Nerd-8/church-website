import React from 'react';
import { motion } from 'framer-motion';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  scriptureText?: string;
  scriptureReference?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = 'bg-worship', 
  scriptureText,
  scriptureReference
}) => {
  return (
    <div className={`relative ${backgroundImage} bg-cover bg-center py-32 md:py-48`}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="relative container mx-auto px-4 z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-xl text-gray-200 mb-6">
              {subtitle}
            </p>
          )}
          
          {scriptureText && (
            <div className="mt-8 max-w-2xl mx-auto bg-black bg-opacity-30 p-6 rounded-lg border-l-4 border-church-gold">
              <p className="text-white italic text-lg md:text-xl mb-2">"{scriptureText}"</p>
              {scriptureReference && (
                <p className="text-church-gold text-right">— {scriptureReference}</p>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PageBanner;