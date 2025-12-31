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
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-40 border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <span className="text-2xl font-extrabold text-gray-900 group-hover:text-red-600 transition-colors tracking-tight">
                {COMPANY_NAME}
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 items-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-semibold uppercase tracking-wide text-gray-600 hover:text-red-600 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* CTA Button & Phone */}
            <div className="hidden md:flex items-center gap-6">
              <a 
                href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} 
                className="flex items-center gap-2 font-bold text-gray-800 hover:text-red-600 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                  <Phone size={16} />
                </div>
                <span className="text-sm">{PHONE_NUMBER}</span>
              </a>
              <a 
                href="#booking"
                onClick={(e) => handleNavClick(e, '#booking')}
                className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-red-600 transition-all shadow-lg hover:shadow-red-200 text-sm transform hover:-translate-y-0.5"
              >
                Book Repair
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-left text-gray-800 font-semibold text-lg py-3 px-4 hover:bg-gray-50 hover:text-red-600 rounded-lg transition-colors border-b border-gray-50 last:border-0"
              >
                {item.name}
              </a>
            ))}
             <a 
                href="#booking"
                onClick={(e) => handleNavClick(e, '#booking')}
                className="bg-red-600 text-white text-center font-bold py-3.5 px-4 rounded-xl shadow-md active:scale-95 transition-transform mt-4 block"
              >
                Book a Repair
             </a>
             <a 
              href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
              className="flex items-center justify-center gap-2 text-gray-700 font-semibold py-3 px-4 hover:bg-gray-50 rounded-xl border border-gray-200 mt-2"
            >
              <Phone size={18} className="text-red-600" />
              <span>Call {PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Col 1: Brand & Address */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-extrabold text-white mb-3 tracking-tight">{COMPANY_NAME}</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Bangalore's premium repair service. We bring life back to your devices with OEM-grade parts and expert care.
                </p>
              </div>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 text-gray-400 text-sm group">
                  <div className="mt-1 w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                     <MapPin size={12} />
                  </div>
                  <p className="leading-relaxed hover:text-gray-300 transition-colors">{ADDRESS}</p>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm group">
                  <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                     <Phone size={12} />
                  </div>
                  <a href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} className="hover:text-white transition-colors font-medium">{PHONE_NUMBER}</a>
                </div>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 border-b-2 border-red-600 inline-block pb-1">Quick Navigation</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      onClick={(e) => handleNavClick(e, item.href)} 
                      className="hover:text-red-500 hover:pl-2 transition-all flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-700 rounded-full"></span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 border-b-2 border-red-600 inline-block pb-1">Our Services</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-red-500 hover:pl-2 transition-all block">iPhone Screen Repair</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-red-500 hover:pl-2 transition-all block">Battery Replacement</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-red-500 hover:pl-2 transition-all block">Water Damage Fix</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-red-500 hover:pl-2 transition-all block">MacBook Repair</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-red-500 hover:pl-2 transition-all block">iPad Service</a></li>
              </ul>
            </div>

            {/* Col 4: Connect */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 border-b-2 border-red-600 inline-block pb-1">Connect With Us</h3>
              <p className="text-gray-400 text-sm mb-6">
                Follow our journey and get the latest updates on social media.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/share/17ySmY8wrh/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 p-3 rounded-xl hover:bg-[#1877F2] transition-all text-white group hover:scale-110 shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://wa.me/8660663776" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 p-3 rounded-xl hover:bg-[#25D366] transition-all text-white group hover:scale-110 shadow-lg"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} />
                </a>
                <a 
                  href="https://www.facebook.com/share/17ySmY8wrh/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 p-3 rounded-xl hover:bg-[#E4405F] transition-all text-white group hover:scale-110 shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-gray-500 text-sm font-medium">
              &copy; {new Date().getFullYear()} <span className="text-white">{COMPANY_NAME}</span>. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs max-w-lg leading-relaxed">
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
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 rounded-full shadow-2xl transition-all transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center group border-2 border-white"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="w-7 h-7">
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