import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { X } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Worship', 'Events', 'Outreach', 'Youth', 'Children'];

  const images: GalleryImage[] = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
      title: "Sunday Worship Service",
      category: "Worship"
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      title: "Youth Conference 2024",
      category: "Youth"
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/8467705/pexels-photo-8467705.jpeg",
      title: "Children's Bible Camp",
      category: "Children"
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/7319283/pexels-photo-7319283.jpeg",
      title: "Community Outreach",
      category: "Outreach"
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/7319171/pexels-photo-7319171.jpeg",
      title: "Easter Celebration",
      category: "Events"
    },
    {
      id: 6,
      url: "https://images.pexels.com/photos/8467978/pexels-photo-8467978.jpeg",
      title: "Men's Fellowship",
      category: "Events"
    },
    {
      id: 7,
      url: "https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg",
      title: "Sunday School",
      category: "Children"
    },
    {
      id: 8,
      url: "https://images.pexels.com/photos/7319446/pexels-photo-7319446.jpeg",
      title: "Worship Night",
      category: "Worship"
    },
    {
      id: 9,
      url: "https://images.pexels.com/photos/8467713/pexels-photo-8467713.jpeg",
      title: "Food Drive",
      category: "Outreach"
    }
  ];

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(image => image.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Gallery - Prevailing Word Church Ruiru</title>
        <meta name="description" content="Browse through our gallery of memorable moments at Prevailing Word Church Ruiru. See how God is moving in our church and community." />
      </Helmet>

      <PageBanner
        title="Gallery"
        subtitle="Capturing Moments of Faith, Fellowship, and Service"
        scriptureText="I will remember the deeds of the LORD; yes, I will remember your miracles of long ago."
        scriptureReference="Psalm 77:11"
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-church-blue text-white'
                    : 'bg-white text-gray-600 hover:bg-church-blue hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                    {image.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn btn-primary">
              Load More Images
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-church-gold transition-colors"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default GalleryPage;