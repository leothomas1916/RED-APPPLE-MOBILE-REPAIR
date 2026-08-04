import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Facebook, Instagram, MapPin, MessageCircle, Star, ShieldCheck, Clock, Award } from 'lucide-react';
import { PHONE_NUMBER, COMPANY_NAME, ADDRESS, LANDMARK, RATING_VAL, REVIEW_COUNT_STR, INSTAGRAM_URL, FACEBOOK_URL, HASHTAG_PHONE, WHATSAPP_URL, PHONE_NUMBER_FORMATTED } from '../constants';
import ChatWidget from './ChatWidget';
import Header from './Header';
import RedAppleLogo from './RedAppleLogo';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-red-100 selection:text-red-900 flex flex-col">
      {/* Top Header */}
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Content */}
      <main className="flex-grow pt-20 sm:pt-28 lg:pt-32">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-white pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Col 1: Brand & Address */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500">
                  <RedAppleLogo className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-white tracking-tight">{COMPANY_NAME}</h2>
                  <p className="text-[10px] text-red-400 uppercase font-bold tracking-widest -mt-0.5">Verified Google Repair Lab</p>
                </div>
              </div>
              
              <p className="text-gray-400 text-xs leading-relaxed">
                Bangalore's trusted device restoration lab. Specializing in Level 4 Motherboard Micro-soldering, OLED display separation, and laser glass repair.
              </p>

              <div className="space-y-3 pt-1 text-xs">
                <div className="flex items-start gap-2.5 text-gray-300">
                  <MapPin size={15} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{ADDRESS}</p>
                </div>
                <div className="flex items-center gap-2.5 text-gray-300">
                  <Phone size={15} className="text-emerald-400 flex-shrink-0" />
                  <a href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} className="hover:text-white transition-colors font-bold">
                    {PHONE_NUMBER_FORMATTED}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-gray-300">
                  <Clock size={15} className="text-amber-400 flex-shrink-0" />
                  <span>Open 7 Days a Week: 9:00 AM – 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5 border-b-2 border-red-600 inline-block pb-1">Navigation</h3>
              <ul className="space-y-3 text-xs text-gray-400 font-medium">
                {[
                  { name: 'home', path: '/' },
                  { name: 'services', path: '/services' },
                  { name: 'portfolio', path: '/portfolio' },
                  { name: 'why us', path: '/why-us' },
                  { name: 'booking', path: '/booking' },
                  { name: 'contact', path: '/contact' }
                ].map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path} 
                      className="hover:text-red-400 hover:translate-x-1 transition-all flex items-center gap-2 capitalize text-left"
                    >
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5 border-b-2 border-red-600 inline-block pb-1">Specialized Repairs</h3>
              <ul className="space-y-3 text-xs text-gray-400 font-medium">
                <li><Link to="/services" className="hover:text-red-400 transition-colors block">iPhone Screen & OLED Lamination</Link></li>
                <li><Link to="/services" className="hover:text-red-400 transition-colors block">TBK Laser Back Glass Removal</Link></li>
                <li><Link to="/services" className="hover:text-red-400 transition-colors block">Samsung Curved OLED Repair</Link></li>
                <li><Link to="/services" className="hover:text-red-400 transition-colors block">Motherboard Micro-Soldering</Link></li>
                <li><Link to="/services" className="hover:text-red-400 transition-colors block">MacBook Liquid Damage Wash</Link></li>
                <li><Link to="/services" className="hover:text-red-400 transition-colors block">Apple Watch Glass Replacement</Link></li>
              </ul>
            </div>

            {/* Col 4: Trust & Guarantee */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5 border-b-2 border-red-600 inline-block pb-1">Trust Guarantees</h3>
              <div className="space-y-3 text-xs">
                <div className="bg-gray-900 p-3 rounded-xl border border-gray-800 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-xs">90-Day Free Warranty</p>
                    <p className="text-[11px] text-gray-400">100% parts & labor coverage</p>
                  </div>
                </div>

                <div className="bg-gray-900 p-3 rounded-xl border border-gray-800 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Star size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-xs">{RATING_VAL} Stars Rating</p>
                    <p className="text-[11px] text-gray-400">Verified on Google Maps ({REVIEW_COUNT_STR})</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2">
                  <a 
                    href={FACEBOOK_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gray-900 p-2.5 rounded-xl hover:bg-[#1877F2] transition-all text-white border border-gray-800 hover:border-transparent flex flex-col items-center justify-center gap-1 text-[10px] font-bold"
                    title="Follow us on Facebook"
                  >
                    <Facebook size={16} />
                    <span>Facebook</span>
                  </a>
                  <a 
                    href={INSTAGRAM_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gray-900 p-2.5 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-amber-500 transition-all text-white border border-gray-800 hover:border-transparent flex flex-col items-center justify-center gap-1 text-[10px] font-bold"
                    title="Follow us on Instagram"
                  >
                    <Instagram size={16} />
                    <span>Instagram</span>
                  </a>
                  <a 
                    href="https://wa.me/8660663776" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gray-900 p-2.5 rounded-xl hover:bg-[#25D366] transition-all text-white border border-gray-800 hover:border-transparent flex flex-col items-center justify-center gap-1 text-[10px] font-bold"
                    title="Chat on WhatsApp"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-500 text-xs font-medium">
              &copy; {new Date().getFullYear()} <span className="text-white font-bold">{COMPANY_NAME}</span>. Halasuru, Bengaluru. All rights reserved.
            </p>
            <p className="text-gray-600 text-[11px] max-w-lg leading-relaxed">
              {COMPANY_NAME} is an independent tech service facility. Brand names, logos, and trademarks (Apple, iPhone, Samsung, etc.) belong to their respective registered owners.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 rounded-full shadow-2xl transition-all transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center group border-2 border-white"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="w-7 h-7">
           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="absolute left-full ml-4 bg-gray-900 text-white text-xs font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block shadow-lg border border-gray-800">
          WhatsApp Direct
        </span>
      </a>

      {/* Floating Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Layout;