import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MinistriesPage from './pages/MinistriesPage';
import SermonsPage from './pages/SermonsPage';
import LivestreamPage from './pages/LivestreamPage';
import EventsPage from './pages/EventsPage';
import GivingPage from './pages/GivingPage';
import PrayerRequestsPage from './pages/PrayerRequestsPage';
import GalleryPage from './pages/GalleryPage';
import DevotionalPage from './pages/DevotionalPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="ministries" element={<MinistriesPage />} />
          <Route path="sermons" element={<SermonsPage />} />
          <Route path="livestream" element={<LivestreamPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="giving" element={<GivingPage />} />
          <Route path="prayer" element={<PrayerRequestsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="devotional" element={<DevotionalPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;