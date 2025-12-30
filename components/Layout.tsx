import React, { useState } from 'react';
import { Phone, Menu, X, Facebook, Instagram, MapPin, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, COMPANY_NAME, ADDRESS } from '../constants';
import ChatWidget from './ChatWidget';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      // Offset for fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-red-100 selection:text-red-900 flex flex-col">
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <span className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">{COMPANY_NAME}</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm uppercase tracking-wide font-medium text-gray-600 hover:text-red-600 transition-colors"
                >
                  {item.name}
                </a>
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
              <a 
                href="#booking"
                onClick={(e) => handleNavClick(e, '#booking')}
                className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-gray-300/50 text-sm"
              >
                Book Repair
              </a>
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
              <a 
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-left text-gray-800 font-medium py-2 px-4 hover:bg-gray-50 rounded-lg text-lg"
              >
                {item.name}
              </a>
            ))}
             <a 
                href="#booking"
                onClick={(e) => handleNavClick(e, '#booking')}
                className="bg-red-600 text-white text-center font-bold py-3 px-4 rounded-lg shadow-md mx-4 mt-4"
              >
                Book a Repair
             </a>
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
      <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Col 1: Brand & Address */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{COMPANY_NAME}</h2>
                <p className="text-gray-400 text-sm">Expert repair services for all your premium devices.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-gray-400 text-sm group">
                  <MapPin size={18} className="mt-1 flex-shrink-0 group-hover:text-red-500 transition-colors" />
                  <p className="max-w-xs">{ADDRESS}</p>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm group">
                  <Phone size={18} className="flex-shrink-0 group-hover:text-red-500 transition-colors" />
                  <a href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} className="hover:text-white transition-colors">{PHONE_NUMBER}</a>
                </div>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      onClick={(e) => handleNavClick(e, item.href)} 
                      className="hover:text-red-500 hover:pl-1 transition-all"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-red-500 hover:pl-1 transition-all">iPhone Screen Repair</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-red-500 hover:pl-1 transition-all">Battery Replacement</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-red-500 hover:pl-1 transition-all">Water Damage Fix</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-red-500 hover:pl-1 transition-all">MacBook Repair</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-red-500 hover:pl-1 transition-all">iPad Service</a></li>
              </ul>
            </div>

            {/* Col 4: Connect */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Connect With Us</h3>
              <div className="flex gap-4 mb-6">
                <a 
                  href="https://www.facebook.com/share/17ySmY8wrh/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors text-white group"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/8660663776" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors text-white group"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://www.facebook.com/share/17ySmY8wrh/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors text-white group"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
              <p className="text-gray-500 text-sm">
                Follow us for updates and repair tips.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
            </p>
            <p className="text-gray-600 text-[10px] max-w-xl">
              {COMPANY_NAME} is an independent service provider. All product names, logos, and brands are property of their respective owners. Apple, iPhone, and iPad are trademarks of Apple Inc. Android is a trademark of Google LLC.
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