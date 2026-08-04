import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { 
  Smartphone, 
  Battery, 
  Monitor, 
  Cpu, 
  Watch, 
  HardDrive, 
  SearchCheck, 
  Settings,
  CheckCircle,
  Clock,
  ShieldCheck,
  MapPin,
  ExternalLink,
  Star,
  Sparkles,
  Phone,
  ArrowRight,
  Lock
} from 'lucide-react';
import { 
  SERVICES, 
  GOOGLE_MAPS_SHARE_URL, 
  RATING_VAL, 
  REVIEW_COUNT_STR, 
  ADDRESS, 
  LANDMARK, 
  PHONE_NUMBER, 
  OPENING_HOURS_STR,
  GEO_DATA 
} from '../constants';
import { RepairService } from '../types';
import RevealOnScroll from '../components/RevealOnScroll';
import AIDiagnosticTool from '../components/AIDiagnosticTool';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Repairs' },
    { id: 'motherboard', label: 'Motherboard & Micro-Soldering' },
    { id: 'display', label: 'Curved & OEM Displays' },
    { id: 'glass', label: 'Laser Back Glass' },
    { id: 'battery', label: 'Batteries & Charging' },
    { id: 'apple-watch', label: 'Apple Watch & iPad' },
    { id: 'data', label: 'Data Recovery & Privacy' }
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter(service => service.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu size={26} />;
      case 'Smartphone': return <Smartphone size={26} />;
      case 'Monitor': return <Monitor size={26} />;
      case 'Battery': return <Battery size={26} />;
      case 'Watch': return <Watch size={26} />;
      case 'HardDrive': return <HardDrive size={26} />;
      case 'SearchCheck': return <SearchCheck size={26} />;
      default: return <Settings size={26} />;
    }
  };

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 min-h-screen">
      {/* Google Maps Business Verified Banner */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-gray-800">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-500/20 text-red-300 rounded-full text-xs font-bold border border-red-500/30 uppercase tracking-wider">
                  <Sparkles size={14} className="text-red-400" />
                  Official Google Maps Listed Repair Center
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Expert Mobile & Laptop Repairs in <span className="text-red-500">Halasuru, Bengaluru</span>
                </h1>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Specializing in Level 4 Motherboard Micro-soldering, Curved Edge OLED Displays, TBK Laser Back Glass Removal, and Vacuum OCA Lamination. Trusted with 40-50% savings over authorized centers.
                </p>

                {/* Rating & Location Pills */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a 
                    href={GOOGLE_MAPS_SHARE_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors border border-white/15"
                  >
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="#FBBF24" color="#FBBF24" />
                      ))}
                    </div>
                    <span className="font-bold">{RATING_VAL}</span>
                    <span className="text-gray-300 text-xs">({REVIEW_COUNT_STR})</span>
                  </a>

                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-medium text-gray-200 border border-white/10">
                    <MapPin size={16} className="text-red-400" />
                    <span>{LANDMARK}</span>
                  </div>

                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-medium text-gray-200 border border-white/10">
                    <Clock size={16} className="text-green-400" />
                    <span>{OPENING_HOURS_STR}</span>
                  </div>
                </div>
              </div>

              {/* Maps Direct CTA */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto flex-shrink-0">
                <a
                  href={GOOGLE_MAPS_SHARE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-bold shadow-lg shadow-red-900/40 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm"
                >
                  <MapPin size={18} />
                  Open in Google Maps
                  <ExternalLink size={16} />
                </a>

                <a
                  href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Phone size={18} className="text-red-400" />
                  Call {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Doorstep Warning */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto bg-red-50 rounded-2xl p-6 sm:p-8 border border-red-100 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900 mb-1">We Do Not Offer Doorstep Repairs</h3>
                <p className="text-sm text-gray-700 leading-relaxed max-w-3xl">
                  Micro-soldering, OCA lamination, and laser glass removal require <strong>heavy anti-static lab equipment</strong> that cannot be carried in a backpack. Doorstep repairs often result in dust contamination and missing thermal seals.
                </p>
                <div className="mt-3 flex items-center gap-2 text-sm font-bold text-emerald-700 bg-emerald-100/50 w-fit px-3 py-1.5 rounded-lg border border-emerald-200">
                  <MapPin size={16} />
                  We offer secure Pickup & Drop within a 10KM radius
                </div>
              </div>
            </div>
            <Link to="/booking" className="whitespace-nowrap bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold shadow-sm transition-colors text-sm flex-shrink-0">
              Book Pickup or Drop-in
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      {/* Gemini AI Smart Diagnostic */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-6">
        <RevealOnScroll>
          <AIDiagnosticTool />
        </RevealOnScroll>
      </section>

      {/* Main Services Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-3 tracking-tight">
              Our Specialized Repair Services
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Utilizing state-of-the-art diagnostic machinery, TBK lasers, and clean-room OCA lamination for factory-perfect results.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 border ${
                  selectedCategory === cat.id
                    ? 'bg-red-600 text-white border-red-600 shadow-md shadow-red-200 scale-105'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-red-300 hover:bg-red-50/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service: RepairService) => (
              <div 
                key={service.id}
                className={`group bg-white rounded-3xl p-7 transition-all duration-300 hover:shadow-2xl border ${
                  service.popular ? 'border-red-200 shadow-lg relative' : 'border-gray-200 shadow-sm'
                } flex flex-col h-full`}
              >
                {service.popular && (
                  <span className="absolute -top-3.5 right-6 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                    ★ Most Requested
                  </span>
                )}

                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-lg border border-gray-200">
                    {service.technicalTag}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-2.5 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Technical Features */}
                <div className="space-y-2 mb-6 bg-gray-50/80 p-4 rounded-2xl border border-gray-100">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Service Highlights</p>
                  {service.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                      <CheckCircle size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Badges & Warranty */}
                <div className="mt-auto space-y-3 pt-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-gray-600 border-t border-gray-100 pt-4">
                    <span className="flex items-center gap-1.5 text-red-600 font-bold">
                      <Clock size={14} />
                      {service.turnaroundTime}
                    </span>
                    <span className="flex items-center gap-1 text-green-700 bg-green-50 px-2.5 py-0.5 rounded-md border border-green-200 font-bold">
                      <ShieldCheck size={14} />
                      {service.warranty}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Link to="/booking"onClick={(e) => handleScroll(e, 'booking')}
                      className="w-full py-2.5 bg-gray-900 hover:bg-red-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1 transition-all shadow-sm"
                    >
                      Book Repair
                      <ArrowRight size={14} />
                    </Link>
                    <a
                      href={GOOGLE_MAPS_SHARE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 rounded-xl font-bold text-xs flex items-center justify-center gap-1 transition-all"
                    >
                      Google Maps
                      <ExternalLink size={12} className="text-gray-500" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* Trust & Data Privacy Guarantees */}
      <section className="mt-20 py-16 bg-white border-y border-gray-200 px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-3">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mx-auto">
                <ShieldCheck size={28} />
              </div>
              <h4 className="font-bold text-gray-900 text-lg">6-Month Warranty</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Complete coverage on parts & workmanship. Hassle-free free replacement if any defect arises.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-3">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto">
                <Lock size={28} />
              </div>
              <h4 className="font-bold text-gray-900 text-lg">Zero-Password Privacy</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                We test hardware using diagnostic maintenance mode. No need to share lock passwords or expose personal data.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-3">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mx-auto">
                <Cpu size={28} />
              </div>
              <h4 className="font-bold text-gray-900 text-lg">Level 4 Master Techs</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Micro-soldering lab equipped for BGA chip reballing, Audio IC fixes, and liquid damage board resurrection.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-3">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mx-auto">
                <Clock size={28} />
              </div>
              <h4 className="font-bold text-gray-900 text-lg">30-Min Fast Track</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Most iPhone screen, glass, and battery replacements completed in under 45 minutes while you wait.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Google Maps GEO Data & Service Reach Section */}
      <section className="mt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="grid lg:grid-cols-12">
              {/* Info Column */}
              <div className="lg:col-span-5 p-8 sm:p-10 space-y-6 flex flex-col justify-between bg-gray-900 text-white">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs font-bold border border-red-500/30">
                    <MapPin size={14} />
                    Local SEO & GEO Landmark
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Visit Our Service Center in Halasuru
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Conveniently located on Metro Road right next to Halasuru Metro Station at Pillar 125. Serving all surrounding localities in Bengaluru.
                  </p>

                  <div className="space-y-3 pt-2 text-sm text-gray-300">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-red-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-white">Address & Landmark</p>
                        <p className="text-xs text-gray-400">{ADDRESS}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock size={18} className="text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-white">Store Hours</p>
                        <p className="text-xs text-gray-400">{OPENING_HOURS_STR}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-white">Direct Phone / WhatsApp</p>
                        <p className="text-xs text-gray-400">+91 {PHONE_NUMBER}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nearby Areas Tags */}
                <div className="pt-6 border-t border-gray-800">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Primary Service Areas in Bengaluru
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {GEO_DATA.nearbyAreas.map((area, i) => (
                      <span key={i} className="text-[11px] bg-gray-800 text-gray-300 px-2.5 py-1 rounded-lg border border-gray-700">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Google Map Frame */}
              <div className="lg:col-span-7 h-[400px] lg:h-auto min-h-[380px] relative bg-gray-100">
                <iframe
                  title="Red Apple Mobile Repair Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.953360798727!2d77.6222756!3d12.9748349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17abf5978f99%3A0xf9ade41a529ebc08!2sRED%20APPLE%20MOBILE%20REPAIR!5e0!3m2!1sen!2sin!4v1767109446646!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}
