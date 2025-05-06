import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/common/PageBanner';

const AboutPage: React.FC = () => {
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
        subtitle="Our Vision & Mission"
        scriptureText="We exist to bring people to Christ, nurture them to know God, provide a caring atmosphere for all, mentor and train for service then send them to do the work of God."
        scriptureReference="A Vibrant Church Of thousands"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2>More Content Coming Soon</h2>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;