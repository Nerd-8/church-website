import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Cross } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleDropdown = (menu: string) => {
    if (dropdownOpen === menu) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(menu);
    }
  };

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Ministries', path: '/ministries' },
    { 
      name: 'Media', 
      children: [
        { name: 'Sermons', path: '/sermons' },
        { name: 'Livestream', path: '/livestream' },
        { name: 'Gallery', path: '/gallery' }
      ]
    },
    { name: 'Events', path: '/events' },
    { name: 'Devotional', path: '/devotional' },
    { name: 'Give', path: '/giving' },
    { name: 'Prayer', path: '/prayer' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-church-blue shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
        <Link to="/" className="flex items-center space-x-2">
          <img 
           src="./public/logo.png" 
           alt="Church Logo" 
           className="h-20 w-20" 
         />
         <span className="text-xl font-Lobster font-bold text-white">PWC-RUIRU</span>
       </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              !link.children ? (
                <NavLink 
                  key={index}
                  to={link.path}
                  className={({ isActive }) => 
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  {link.name}
                </NavLink>
              ) : (
                <div key={index} className="relative group">
                  <button 
                    className="nav-link flex items-center"
                    onClick={() => toggleDropdown(link.name)}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden transform origin-top scale-0 group-hover:scale-100 transition-transform duration-200">
                    {link.children.map((child, childIndex) => (
                      <NavLink
                        key={childIndex}
                        to={child.path}
                        className={({ isActive }) => 
                          `block px-4 py-2 text-sm text-gray-700 hover:bg-church-blue hover:text-white ${isActive ? 'bg-church-blue-light text-white' : ''}`
                        }
                      >
                        {child.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-church-blue`}>
        <div className="px-2 pt-2 pb-4 space-y-1">
          {navLinks.map((link, index) => (
            !link.children ? (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md ${isActive ? 'bg-church-blue-dark text-church-gold' : 'text-gray-100 hover:bg-church-blue-light'}`
                }
              >
                {link.name}
              </NavLink>
            ) : (
              <div key={index}>
                <button
                  className="w-full text-left px-3 py-2 rounded-md text-gray-100 hover:bg-church-blue-light flex justify-between items-center"
                  onClick={() => toggleDropdown(link.name)}
                >
                  {link.name}
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen === link.name ? 'rotate-180' : ''}`} />
                </button>
                
                {dropdownOpen === link.name && (
                  <div className="pl-4 space-y-1 mt-1">
                    {link.children.map((child, childIndex) => (
                      <NavLink
                        key={childIndex}
                        to={child.path}
                        className={({ isActive }) => 
                          `block px-3 py-2 rounded-md ${isActive ? 'bg-church-blue-dark text-church-gold' : 'text-gray-200 hover:bg-church-blue-light'}`
                        }
                      >
                        {child.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            )
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;