import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Users, Book, Heart,HandHeart, MoveUpRight } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import SectionTitle from '../components/common/SectionTitle';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Book size={40} className="text-church-purple" />,
      title: "Preach The Word",
      description: "We are committed to teaching the uncompromised Word of God, which is our foundation for faith and practice."
    },
    {
      icon: <Users size={40} className="text-church-purple" />,
      title: "Prayer",
      description: "prayer is the lifeline of our church, and we believe in the power of prayer to change lives and circumstances."
    },
    {
      icon: <Heart size={40} className="text-church-purple" />,
      title: "Caring",
      description: "We demonstrate God's love through practical acts of kindness and service to our community."
    },
    {
      icon: <HandHeart size={40} className="text-church-purple" />,
      title: "Evangelism",
      description: "We embrace the great commission to share the Gospel and make disciples of all nations."
    },
    {
      icon: <MoveUpRight size={40} className="text-church-purple" />,
      title: "Praise and Worship",
      description: "spirit-filled worship is at the heart of our church, creating an atmosphere for God's presence to dwell."
    },

  ];

  const leadership = [
    {
      name: "Bishop Dr. Robert & Rev Leah Njiru",
      role: "Preciding Ministers",
      image: "/Bishop-and-Rev.JPG",
      bio: "Bishop Dr. Robert Njiru and Rev.Leah Njiru are the founding pastors of Prevailing Word Church Ruiru."
    },
    {
      name: "Rev Calistus & Pst. Jackline Akou",
      role: "Revered",
      image: "/Rev-calistus&wife.JPG",
      bio: "Rev Calistus and pst Jackline akou ..."
    },
    {
      name: "Rev. Eliazer & Pst. Joyce Njogu",
      role: "Admin",
      image: "/Rev-Njogu&wife.JPG",
      bio: "Rev Eliazer and pst Joyce ..."
    },

  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>About Us - Prevailing Word Church Ruiru</title>
        <meta name="description" content="Learn about Prevailing Word Church Ruiru, our vision, mission, and the leadership of Bishop Dr. Robert Njiru & Rev. Leah Njiru" />
      </Helmet>

      <PageBanner
        title="About Us"
        subtitle="Our Vision, Mission, and Journey of Faith"
        scriptureText="For where two or three gather in my name, there am I with them."
        scriptureReference="Matthew 18:20"
      />

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-serif font-bold text-church-blue mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be a vibrant church of thousands. <br></br>
                         #1BRING1
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-serif font-bold text-church-blue mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                We Exist To;<br></br>- Bring people to Christ<br></br>- Nurture them to Know God.<br></br>- Provide a caring atmosphere for all.<br></br>- Mentor them for service.<br></br>- Send them to do the work of God.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that guide our ministry and service"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Story"
            subtitle="Our journey of faith, growth, and impact"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              <p className="text-gray-700 mb-6">
                

              </p>
              
              <p className="text-gray-700 mb-6">
                coming soon...
              </p>
              
              <p className="text-gray-700">
                
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Leadership"
            subtitle="Meet the shepherds God has placed over His flock"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-82 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-church-blue mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-church-purple font-medium mb-4">{leader.role}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;