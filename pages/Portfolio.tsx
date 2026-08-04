import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import RevealOnScroll from '../components/RevealOnScroll';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { Sparkles, X, Wrench, ShieldCheck, Clock, ExternalLink, CheckCircle } from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalItem, setActiveModalItem] = useState<typeof PORTFOLIO_ITEMS[0] | null>(null);

  const categories = [
    { id: 'all', label: 'All Repairs' },
    { id: 'iPhone', label: 'iPhone Glass & Screen' },
    { id: 'Samsung', label: 'Samsung Curved OLED' },
    { id: 'Motherboard', label: 'Micro-Soldering' },
    { id: 'MacBook', label: 'MacBook & iPad' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-red-600 bg-red-100 px-3 py-1 rounded-full border border-red-200">
              Cleanroom Quality Showcase
            </span>
            <h2 className="text-3xl font-black text-gray-900 sm:text-4xl mt-2 mb-3">Our Precision Repairs Portfolio</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Real device restorations executed at our Halasuru technical laboratory. Click any project to view before & after details.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 border ${
                  selectedCategory === cat.id
                    ? 'bg-red-600 text-white border-red-600 shadow-md shadow-red-200'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-red-300 hover:bg-red-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setActiveModalItem(item)}
                className="group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl bg-white border border-gray-200/80 cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md w-fit mb-2 shadow-sm">
                      {item.category}
                    </span>
                    <h3 className="text-white font-extrabold text-base group-hover:text-red-400 transition-colors">{item.title}</h3>
                    <p className="text-gray-300 text-xs mt-1 line-clamp-2">{item.description}</p>
                    
                    <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-emerald-400 pt-2 border-t border-gray-800">
                      <span className="flex items-center gap-1">
                        <Sparkles size={13} />
                        Click to Inspect
                      </span>
                      <span className="text-gray-400">View Specs →</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* Interactive Detail Modal / Lightbox */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-200 relative max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gray-950 text-white p-6 relative">
              <button 
                onClick={() => setActiveModalItem(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-800 hover:bg-red-600 text-white flex items-center justify-center transition-colors border border-gray-700"
              >
                <X size={18} />
              </button>

              <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md">
                {activeModalItem.category} Case Study
              </span>
              <h3 className="text-2xl font-black text-white mt-2">{activeModalItem.title}</h3>
              <p className="text-xs text-gray-400 mt-1">Completed at Red Apple Technical Lab, Halasuru</p>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Before After Interactive Slider */}
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&q=80&w=1000"
                afterImage={activeModalItem.image}
                alt={activeModalItem.title}
                badgeTitle={`${activeModalItem.title} • 100% Functionality Tested`}
              />

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">Diagnostic & Work Performed</h4>
                  <p className="text-xs text-gray-600 leading-relaxed bg-gray-50 p-3.5 rounded-2xl border border-gray-100">
                    {activeModalItem.description}. Complete system diagnostics passed including touch digitizer, display True Tone serial transfer, and wireless charging coil alignment.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="text-[10px] font-bold text-gray-400 block uppercase">Equipment Used</span>
                    <span className="font-extrabold text-gray-800 mt-0.5 block">TBK Laser 958B & Vacuum OCA Separator</span>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="text-[10px] font-bold text-gray-400 block uppercase">Turnaround Time</span>
                    <span className="font-extrabold text-emerald-600 mt-0.5 flex items-center gap-1">
                      <Clock size={13} />
                      Completed in 45 Minutes
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                    <ShieldCheck size={16} className="text-emerald-500" />
                    Backed by 90-Day Free Lab Warranty
                  </span>
                  
                  <Link to="/booking"onClick={() => setActiveModalItem(null)}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors shadow-sm"
                  >
                    Book Similar Repair
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
