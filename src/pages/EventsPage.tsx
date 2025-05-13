import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Enhanced PageBanner with video background
const PageBanner: React.FC<{
  title: string;
  subtitle: string;
  scriptureText: string;
  scriptureReference: string;
  backgroundImage?: string;
  backgroundVideo?: string; // Added support for video
}> = ({ title, subtitle, scriptureText, scriptureReference, backgroundImage, backgroundVideo }) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative h-[70vh] flex items-center justify-center text-white"
    >
      {backgroundVideo ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={backgroundVideo}
          autoPlay
          loop
          muted
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      )}
      <div className="bg-black/50 absolute inset-0"></div>
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">{title}</h1>
        <p className="text-lg mb-2">{subtitle}</p>
        <blockquote className="italic text-sm">
          “{scriptureText}”<br />
          <span className="text-church-gold font-semibold">{scriptureReference}</span>
        </blockquote>
      </div>
    </motion.section>
  );
};

const ScrollingPhotos: React.FC<{ photos: string[] }> = ({ photos }) => {
  return (
    <div className="overflow-hidden bg-gray-50 py-10">
      <motion.div
        className="flex space-x-4"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Scrolling Photo ${index + 1}`}
            className="h-48 w-auto rounded-lg shadow-md"
          />
        ))}
      </motion.div>
    </div>
  );
};

const EventsPage: React.FC = () => {
  const photos = [
    '/18TH WORSHIP NIGHT.jpg',
    '/24TH APRIL DCS.jpg',
    '/Jersey Sunday.jpg',
    '/youth service.jpg',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Helmet>
        <title>Events - Prevailing Word Church Ruiru</title>
        <meta
          name="description"
          content="Join us for upcoming events at Prevailing Word Church Ruiru. From conferences to retreats, there's something for everyone in the family of God."
        />
      </Helmet>

      <PageBanner
        title="Upcoming Events"
        subtitle="Join Us for Life-Changing Experiences"
        scriptureText="Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another."
        scriptureReference="Hebrews 10:25"
        backgroundVideo="/Recap3.MP4" // Replace with your video path
      />

      <motion.section
        className="py-20 bg-gray-50"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          {/* Scrolling Photos */}
          <ScrollingPhotos photos={photos} />
        </div>
      </motion.section>
    </motion.div>
  );
};

export default EventsPage;