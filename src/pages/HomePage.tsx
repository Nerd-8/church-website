import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Hero from '../components/home/Hero';
import WelcomeMessage from '../components/home/WelcomeMessage';
import ServiceTimes from '../components/home/ServiceTimes';
import MinistriesPreview from '../components/home/MinistriesPreview';
import LatestSermons from '../components/home/LatestSermons';
import EventsHighlight from '../components/home/EventsHighlight';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Prevailing Word Church Ruiru - A Vibrant Church Of Thousands</title>
        <meta name="description" content="Welcome to Prevailing Word Church Ruiru - A vibrant, spirit-filled, and Christ-centered sanctuary led by Bishop Dr. Robert Njiru & Rev. Leah Njiru" />
      </Helmet>

      <Hero />
      <WelcomeMessage />
      <ServiceTimes />
      <MinistriesPreview />
      <LatestSermons />
      <EventsHighlight />
      <CallToAction />
    </motion.div>
  );
};

export default HomePage;