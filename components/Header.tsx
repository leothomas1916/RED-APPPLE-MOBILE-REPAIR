import React from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { PHONE_NUMBER, COMPANY_NAME } from '../constants';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  activeSection, 
  scrollToSection 
}) => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Why Us', id: 'why-us' },
    { name: 'Booking', id: 'booking' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-40 border-b border-gray-100 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <a 
            href="#home" 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <span className="text-2xl font-extrabold text-gray-900 tracking-tight group-hover:text-red-600 transition-colors">
              {COMPANY_NAME}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-sm uppercase tracking-wide font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                  activeSection === item.id ? 'text-red-600 font-bold' : 'text-gray-600 hover:text-red-600'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} 
              className="flex items-center gap-2 font-bold text-gray-800 hover:text-red-600 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                <Phone size={16} />
              </div>
              <span>{PHONE_NUMBER}</span>
            </a>
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-gray-300/50 text-sm transform hover:-translate-y-0.5"
            >
              Book Repair
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`text-left font-medium py-3 px-4 rounded-xl text-lg transition-colors ${
                 activeSection === item.id ? 'bg-red-50 text-red-600' : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              {item.name}
            </a>
          ))}
           <hr className="my-2 border-gray-100" />
           <button 
              onClick={() => scrollToSection('booking')}
              className="bg-red-600 text-white text-center font-bold py-3 px-4 rounded-xl shadow-md active:scale-95 transition-transform w-full"
            >
              Book a Repair
           </button>
           <a 
            href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
            className="flex items-center justify-center gap-3 text-gray-800 font-medium py-3 px-4 hover:bg-gray-50 rounded-xl border border-gray-100 mt-2"
          >
            <Phone size={20} className="text-red-600" />
            <span>Call {PHONE_NUMBER}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;