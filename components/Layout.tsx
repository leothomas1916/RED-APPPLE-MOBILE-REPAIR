import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { PHONE_NUMBER, COMPANY_NAME, ADDRESS } from '../constants';
import ChatWidget from './ChatWidget';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-red-100 selection:text-red-900 flex flex-col">
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 cursor-pointer group">
              <span className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">{COMPANY_NAME}</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm uppercase tracking-wide font-medium transition-colors ${
                    location.pathname === item.path ? 'text-red-600 font-bold' : 'text-gray-600 hover:text-red-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button & Phone */}
            <div className="hidden md:flex items-center gap-6">
              <a 
                href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} 
                className="flex items-center gap-2 font-bold text-gray-800 hover:text-red-600 transition-colors"
              >
                <Phone size={18} className="text-red-600" />
                <span>{PHONE_NUMBER}</span>
              </a>
              <Link 
                to="/book"
                className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-gray-300/50 text-sm"
              >
                Book Repair
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col gap-4 shadow-xl h-screen">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className="text-left text-gray-800 font-medium py-2 px-4 hover:bg-gray-50 rounded-lg text-lg"
              >
                {item.name}
              </Link>
            ))}
             <Link 
                to="/book"
                className="bg-red-600 text-white text-center font-bold py-3 px-4 rounded-lg shadow-md mx-4 mt-4"
              >
                Book a Repair
             </Link>
             <a 
              href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
              className="flex items-center justify-center gap-3 text-gray-800 font-medium py-3 px-4 hover:bg-gray-50 rounded-lg border-t border-gray-100 mt-2"
            >
              <Phone size={20} className="text-red-600" />
              <span>Call {PHONE_NUMBER}</span>
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-4">{COMPANY_NAME}</h2>
              <p className="text-gray-400 text-sm mt-2">© 2024 {COMPANY_NAME}. All rights reserved.</p>
              <p className="text-gray-500 text-xs mt-1 max-w-xs">{ADDRESS}</p>
            </div>
            <div className="flex gap-8 text-gray-400 text-sm">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <Link to="/why-us" className="hover:text-white transition-colors">Why Us</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
             <p className="text-gray-500 text-xs text-center md:text-left leading-relaxed max-w-4xl">
               Red Apple Mobile Repair is an independent service provider for Apple products and other android brands. All Apple And Android product names, logos, and images are trademarks of Apple Inc And other Android Brands. We are not affiliated with or endorsed by Apple Inc And Android Brands.
             </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8660663776"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" className="w-8 h-8">
           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="absolute left-full ml-4 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
            Chat on WhatsApp
         </span>
      </a>

      {/* Floating Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Layout;