import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter,
  Cross
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-church-blue text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
             <img 
              src="/CHURCH LOGO.png" 
              alt="Church Logo" 
              className="h-20 w-20" 
            />
              <h3 className="text-xl font-serif font-bold text-white">Prevailing Word Church</h3>
            </div>
            <p className="mb-4 text-gray-300">
            We exist to bring people to Christ, nurture them to know God, provide a caring atmosphere for all, mentor and train for service then send them to do the work of God.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqa2VNbWVQVllzM3VDMjNlUXdockpaaTFTVzlvZ3xBQ3Jtc0tseTltcC1WME9FYzNnSTk2ZlNWZGQ0dlA4dzlGazY0T005MlhzMnJCTUpZUHJONDY2TjkyVFRoTWJ0TXdqaDFXMXVCVkcyZ055X2o1OUxXQ19SYmlnOHlsbkVyZE1lRWFYX3ZwV0s4LXRCM3dGbUxoaw&q=https%3A%2F%2Fweb.facebook.com%2FPWCRUIRU%2F%3F_rdc%3D1%26_rdr" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-church-gold">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/prevailingwordchurch_kenya?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-church-gold">
                <Instagram size={20} />
              </a>
              <a href="http://www.youtube.com/@PrevailingWordChurchKenya" target="_blank" rel="noreferrer" aria-label="YouTube" className="text-gray-300 hover:text-church-gold">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4 text-church-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-church-gold transition-colors">About Us</Link></li>
              <li><Link to="/sermons" className="text-gray-300 hover:text-church-gold transition-colors">Sermons</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-church-gold transition-colors">Events</Link></li>
              <li><Link to="/ministries" className="text-gray-300 hover:text-church-gold transition-colors">Ministries</Link></li>
              <li><Link to="/giving" className="text-gray-300 hover:text-church-gold transition-colors">Give Online</Link></li>
              <li><Link to="/prayer" className="text-gray-300 hover:text-church-gold transition-colors">Prayer Requests</Link></li>
            </ul>
          </div>
          
          {/* Service Times */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4 text-church-gold">Service Times</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Sunday Services</p>
                  <p className="text-gray-300">7:30 AM - 9:00 AM - 1st Service</p>
                  <p className="text-gray-300">9:00 AM - 10:30 AM - Youth Explosion Service</p>
                  <p className="text-gray-300">11:00 AM - 1:30 PM - Main Service</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Monday Thanksgiving Prayers</p>
                  <p className="text-gray-300">5:30 PM - 7:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Thursday Overflow Hour</p>
                  <p className="text-gray-300">5:30 PM - 7:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4 text-church-gold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">Off Kiambu RD opp Medilife Hospital, Ruiru, Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-gray-300">+254 726 169 429</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-gray-300">prevailingwordchurch254@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Prevailing Word Church Ruiru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;