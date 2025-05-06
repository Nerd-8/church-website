import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Users, Heart, UserPlus, HelpingHand, Music, Baby, Globe } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import SectionTitle from '../components/common/SectionTitle';

interface MinistryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const MinistryCard: React.FC<MinistryCardProps> = ({ icon, title, description, details }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="text-church-blue mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-serif font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-church-gold mr-2">•</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const MinistriesPage: React.FC = () => {
  const ministries = [
    {
      icon: <Users size={40} />,
      title: "Youth Ministry",
      description: "Empowering young people to discover their purpose and develop their faith journey.",
      details: [
        "Weekly youth services and Bible study",
        "Leadership development programs",
        "Youth camps and retreats",
        "Mentorship opportunities",
        "Community outreach projects"
      ]
    },
    {
      icon: <Heart size={40} />,
      title: "Women's Ministry",
      description: "Creating a supportive community where women grow spiritually and form lasting friendships.",
      details: [
        "Monthly women's fellowship",
        "Prayer and intercession groups",
        "Skills development workshops",
        "Annual women's conference",
        "Community service initiatives"
      ]
    },
    {
      icon: <UserPlus size={40} />,
      title: "Men's Fellowship",
      description: "Equipping men to lead with integrity, strength, and compassion in all areas of life.",
      details: [
        "Monthly men's breakfast meetings",
        "Leadership seminars",
        "Mentorship programs",
        "Family life workshops",
        "Business networking events"
      ]
    },
    {
      icon: <HelpingHand size={40} />,
      title: "Intercessory Team",
      description: "Dedicated to prayer, spiritual warfare, and standing in the gap for others.",
      details: [
        "Daily prayer sessions",
        "Weekly prayer and fasting",
        "Prayer chain ministry",
        "Prophetic intercession",
        "Prayer counseling"
      ]
    },
    {
      icon: <Music size={40} />,
      title: "Worship Team",
      description: "Leading the congregation in powerful worship experiences that honor God.",
      details: [
        "Choir practice sessions",
        "Musical instrument training",
        "Worship workshops",
        "Special music events",
        "Recording ministry"
      ]
    },
    {
      icon: <Baby size={40} />,
      title: "Children's Ministry",
      description: "Nurturing the next generation with biblical foundations in a fun, engaging environment.",
      details: [
        "Sunday school programs",
        "Vacation Bible School",
        "Children's choir",
        "Bible quiz competitions",
        "Holiday special events"
      ]
    },
    {
      icon: <Globe size={40} />,
      title: "Missions & Outreach",
      description: "Sharing God's love locally and globally through service, evangelism, and support.",
      details: [
        "Local evangelism programs",
        "Mission trips",
        "Community service projects",
        "Humanitarian aid initiatives",
        "Church planting support"
      ]
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
        <title>Ministries - Prevailing Word Church Ruiru</title>
        <meta name="description" content="Discover the various ministries at Prevailing Word Church Ruiru. Find your place to serve, grow, and connect with others in faith." />
      </Helmet>

      <PageBanner
        title="Our Ministries"
        subtitle="Find Your Place to Serve and Grow"
        scriptureText="Each of you should use whatever gift you have received to serve others, as faithful stewards of God's grace in its various forms."
        scriptureReference="1 Peter 4:10"
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Ministry Departments"
            subtitle="Discover the different ways you can connect, serve, and grow with us"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => (
              <MinistryCard
                key={index}
                icon={ministry.icon}
                title={ministry.title}
                description={ministry.description}
                details={ministry.details}
              />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default MinistriesPage;