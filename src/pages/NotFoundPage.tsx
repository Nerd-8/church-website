import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 flex items-center justify-center p-4"
    >
      <Helmet>
        <title>Page Not Found - Prevailing Word Church</title>
      </Helmet>

      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-serif font-bold text-church-blue-light">404</h1>
          <h2 className="text-2xl md:text-3xl font-serif text-church-blue mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic mb-2">
              "For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future."
            </p>
            <p className="text-church-blue-dark text-right">— Jeremiah 29:11</p>
          </div>
          
          <Link 
            to="/" 
            className="btn btn-primary inline-flex items-center"
          >
            <Home size={18} className="mr-2" />
            Return Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;