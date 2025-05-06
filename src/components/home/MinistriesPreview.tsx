import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Heart, UserPlus, HelpingHand as PrayingHands, Music, Baby, Globe } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

interface MinistryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const MinistryCard: React.FC<MinistryCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div 
      className="card p-6 hover:bg-church-blue hover:text-white group"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="mb-4 text-church-blue group-hover:text-church-gold transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-white transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 group-hover:text-gray-200 mb-4 transition-colors duration-300">
        {description}
      </p>
      <Link 
        to="/ministries" 
        className="inline-block text-church-blue font-medium group-hover:text-church-gold transition-colors duration-300"
      >
        Learn More →
      </Link>
    </motion.div>
  );
};

const MinistriesPreview: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const ministries = [
    {
      icon: <Users size={40} />,
      title: "Youth Ministry",
      description: "Empowering young people to discover their purpose and develop their faith journey."
    },
    {
      icon: <Heart size={40} />,
      title: "Daughters of The King (D.O.K)",
      description: "Creating a supportive community where women grow spiritually and form lasting friendships."
    },
    {
      icon: <UserPlus  size={40} />,
      title: "Prevailing Fathers",
      description: "Equipping men to lead with integrity, strength, and compassion in all areas of life."
    },
    {
      icon: <Baby size={40} />,
      title: "Teens and Children Ministry",
      description: "Nurturing the next generation with biblical foundations in a fun, engaging environment."
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Ministries" 
          subtitle="Discover the different ways you can connect, serve, and grow with us"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ministries.map((ministry, index) => (
            <MinistryCard 
              key={index}
              icon={ministry.icon}
              title={ministry.title}
              description={ministry.description}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/ministries" className="btn btn-primary">
            Explore All Ministries
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MinistriesPreview;