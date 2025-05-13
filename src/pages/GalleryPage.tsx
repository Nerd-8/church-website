import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/common/PageBanner';

interface GalleryCollection {
  id: number;
  title: string;
  googlePhotosLink: string; // Link to the Google Photos album
}

const GalleryPage: React.FC = () => {
  const collections: GalleryCollection[] = [
    {
      id: 1,
      title: "Sunday Worship Service",
      googlePhotosLink: "#", // Replace with actual Google Photos link
    },
    {
      id: 2,
      title: "Prevailers conference",
      googlePhotosLink: "#", // Replace with actual Google Photos link
    },
    {
      id: 3,
      title: "youth explosion service",
      googlePhotosLink: "#", // Replace with actual Google Photos link
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
        <title>Gallery - Prevailing Word Church Ruiru</title>
        <meta
          name="description"
          content="Browse through our gallery of memorable moments at Prevailing Word Church Ruiru. See how God is moving in our church and community."
        />
      </Helmet>

      <PageBanner
        title="Gallery"
        subtitle="Capturing Moments of Faith, Fellowship, and Service"
        scriptureText="I will remember the deeds of the LORD; yes, I will remember your miracles of long ago."
        scriptureReference="Psalm 77:11"
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Gallery Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative group cursor-pointer"
              >
                <a
                  href={collection.googlePhotosLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-church-blue underline"
                >
                  {collection.title}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default GalleryPage;