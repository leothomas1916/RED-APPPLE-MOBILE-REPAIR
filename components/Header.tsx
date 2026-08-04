import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Menu, X, MapPin, Star, ShieldCheck, Clock } from 'lucide-react';
import { PHONE_NUMBER, COMPANY_NAME, LANDMARK, RATING_VAL, REVIEW_COUNT_STR } from '../constants';
import RedAppleLogo from './RedAppleLogo';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  mobileMenuOpen, 
  setMobileMenuOpen
}) => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Booking', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-40 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-gray-950 text-gray-200 text-xs py-2 px-4 border-b border-gray-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[12px]">
            <span className="flex items-center gap-1.5 font-medium text-gray-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <MapPin size={13} className="text-red-500" />
              {LANDMARK}
            </span>
            <span className="text-gray-600">|</span>
            <span className="flex items-center gap-1 text-amber-400 font-bold">
              <Star size={13} fill="#FBBF24" color="#FBBF24" />
              {RATING_VAL} <span className="text-gray-400 font-normal">({REVIEW_COUNT_STR})</span>
            </span>
            <span className="text-gray-600">|</span>
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck size={13} />
              Zero-Password Data Privacy Mode
            </span>
          </div>
          <div className="flex items-center gap-4 text-[12px]">
            <span className="flex items-center gap-1 text-gray-400">
              <Clock size={13} className="text-red-400" />
              Open Daily: 9 AM - 9 PM
            </span>
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
              className="text-white font-bold hover:text-red-400 transition-colors flex items-center gap-1 bg-red-600/20 px-2.5 py-0.5 rounded-full border border-red-500/30"
            >
              <Phone size={11} className="text-red-400" />
              +91 {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 gap-2 sm:gap-4">
            {/* Logo Section */}
            <Link 
              to="/" 
              className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center group-hover:bg-red-600 transition-all duration-300 group-hover:scale-105 shadow-sm">
                <RedAppleLogo className="w-5 h-5 sm:w-6 sm:h-6 transition-colors group-hover:text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-black text-gray-900 tracking-tight group-hover:text-red-600 transition-colors leading-none">
                  {COMPANY_NAME}
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-0.5">
                  Halasuru • Bengaluru
                </span>
              </div>
            </Link>

            {/* Desktop Navigation (Visible on lg: 1024px+) */}
            <nav className="hidden lg:flex items-center gap-1 bg-gray-100/80 p-1.5 rounded-full border border-gray-200/70 shadow-inner">
              {navItems.map((item) => (
                <NavLink 
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => `text-[11px] xl:text-xs uppercase tracking-wider font-extrabold px-3.5 py-1.5 xl:px-4 xl:py-2 rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md shadow-red-500/30' 
                      : 'text-gray-700 hover:text-red-600 hover:bg-white/80'
                  }`}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Action Buttons (Desktop lg: 1024px+) */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a 
                href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} 
                className="flex items-center gap-2 font-bold text-gray-800 hover:text-red-600 transition-colors text-xs xl:text-sm bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-xl border border-gray-200 shadow-xs"
              >
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                  <Phone size={12} />
                </div>
                <span>{PHONE_NUMBER}</span>
              </a>
              <Link 
                to="/booking"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-xl font-bold transition-all shadow-md shadow-red-500/20 text-xs sm:text-sm transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-1.5"
              >
                <span>Book Repair</span>
                <span className="bg-red-800 text-red-100 text-[10px] font-black px-1.5 py-0.5 rounded">FAST</span>
              </Link>
            </div>

            {/* Tablet & Mobile Right Action Bar (< lg) */}
            <div className="flex lg:hidden items-center gap-2 shrink-0">
              <a 
                href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
                className="flex items-center gap-1.5 bg-red-50 text-red-700 font-bold text-xs px-2.5 py-2 rounded-xl border border-red-200 hover:bg-red-100 transition-colors"
              >
                <Phone size={13} className="text-red-600" />
                <span className="hidden sm:inline">Call Tech</span>
              </a>
              <Link 
                to="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-red-600 text-white font-bold text-xs px-3 py-2 rounded-xl shadow-xs hover:bg-red-700 transition-colors"
              >
                Book
              </Link>
              <button 
                className="text-gray-800 p-2 hover:bg-gray-100 rounded-xl transition-colors border border-gray-200 flex items-center justify-center ml-1"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Attaches smoothly right below header using top-full) */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-2xl overflow-hidden transition-all duration-300 ease-in-out z-40 ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-4 flex flex-col gap-2 bg-gray-50/90 backdrop-blur-md">
          {navItems.map((item) => (
            <NavLink 
              key={item.name}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `text-left font-bold py-3 px-4 rounded-xl text-sm transition-colors ${
                 isActive ? 'bg-red-600 text-white shadow-md' : 'text-gray-800 hover:bg-white bg-white/80 border border-gray-200/60'
              }`}
            >
              {item.name}
            </NavLink>
          ))}
          <hr className="my-1 border-gray-200" />
          <Link 
            to="/booking"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-red-600 text-white text-center font-bold py-3 px-4 rounded-xl shadow-md active:scale-95 transition-transform w-full text-xs sm:text-sm flex items-center justify-center gap-2"
          >
            <span>Book Instant Repair (Save 50% vs Authorized)</span>
          </Link>
          <a 
            href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
            className="flex items-center justify-center gap-2 text-gray-900 font-bold py-2.5 px-4 hover:bg-white bg-white rounded-xl border border-gray-300 shadow-xs text-xs sm:text-sm"
          >
            <Phone size={16} className="text-red-600" />
            <span>Call Technicians: {PHONE_NUMBER}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
