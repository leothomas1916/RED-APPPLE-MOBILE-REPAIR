import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import RevealOnScroll from '../components/RevealOnScroll';

export default function Portfolio() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Recent Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the quality of our repairs firsthand. We take pride in restoring devices to their factory condition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_ITEMS.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-red-400 text-xs font-bold uppercase tracking-wider mb-1">{item.category}</span>
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-300 text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}