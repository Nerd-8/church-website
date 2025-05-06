import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  light = false,
  align = 'center' 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
  };

  const getAlignment = () => {
    switch(align) {
      case 'left': return 'text-left mx-0';
      case 'right': return 'text-right ml-auto';
      default: return 'text-center mx-auto';
    }
  };

  return (
    <div 
      ref={ref} 
      className={`max-w-4xl ${getAlignment()} mb-12`}
    >
      <motion.h2 
        className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold ${
          light ? 'text-white' : 'text-church-blue'
        }`}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={titleVariants}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className={`mt-4 text-lg sm:text-xl ${
            light ? 'text-gray-200' : 'text-church-purple'
          }`}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={subtitleVariants}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;