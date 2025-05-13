import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Contact Us - Prevailing Word Church Ruiru</title>
        <meta name="description" content="Get in touch with Prevailing Word Church Ruiru. We'd love to hear from you and answer any questions you may have." />
      </Helmet>

      <PageBanner
        title="Contact Us"
        subtitle="We'd Love to Hear from You"
        scriptureText="How good and pleasant it is when God's people live together in unity!"
        scriptureReference="Psalm 133:1"
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-serif font-bold text-church-blue mb-6">Send Us a Message</h2>
              
              
                
                 <a
                   href="https://wa.me/254726169429?text=Hello%20Prevailing%20Word%20Church%2C%20I%20would%20like%20to%20get%20in%20touch."
                   target="_blank"
                   rel="noopener noreferrer"
                   className="btn btn-primary w-full flex items-center justify-center">
                    <MessageCircle size={18} className="mr-2" />
                        Send Message
                     </a>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-church-blue mb-6">Church Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-church-purple mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                      <p className="text-gray-600">Off Kiambu RD opp Medilife Hospital, Ruiru, Kenya</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-church-purple mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-gray-600">+254 726 169 429</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-church-purple mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-gray-600">prevailingwordchurch@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-church-purple mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-church-blue mb-6">Find Us</h2>
                <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.347084959787!2d36.95675185!3d-1.15423565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3fed4c7e0dc7%3A0xede8fa9e97d2b6df!2sRuiru!5e0!3m2!1sen!2ske!4v1647874269012!5m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Church Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
    
  );
};

export default ContactPage;