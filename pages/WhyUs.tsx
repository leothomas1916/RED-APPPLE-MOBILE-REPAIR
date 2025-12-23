import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  ShieldCheck, 
  Hammer, 
  MapPin, 
  Smartphone 
} from 'lucide-react';
import StatsChart from '../components/StatsChart';
import { ADDRESS } from '../constants';

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="flex gap-4 group p-4 -mx-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl border border-transparent hover:border-red-50 cursor-default">
    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white group-hover:rotate-6 shadow-sm">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-gray-900 text-lg group-hover:text-red-600 transition-colors">{title}</h4>
      <p className="text-gray-600 text-sm mt-1 leading-relaxed">{text}</p>
    </div>
  </div>
);

export default function WhyUs() {
  return (
    <div className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Red Apple?</h2>
          <div className="space-y-8">
            <FeatureItem 
              icon={<Clock size={24} />}
              title="Same Day Repair"
              text="Most screen and battery replacements are completed within 45 minutes while you wait."
            />
            <FeatureItem 
              icon={<ShieldCheck size={24} />}
              title="90-Day Warranty"
              text="We stand by our work. If the part fails due to a defect, we replace it for free."
            />
            <FeatureItem 
              icon={<Hammer size={24} />}
              title="Expert Technicians"
              text="Our team is certified to handle complex board-level repairs and micro-soldering."
            />
            <FeatureItem 
              icon={<MapPin size={24} />}
              title="Convenient Location"
              text={`Located in the heart of the city at ${ADDRESS}. Easy parking available.`}
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-6">
          <StatsChart />

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Book Online & Save ₹500</h3>
              <p className="text-gray-300 mb-6">Schedule your repair ahead of time to skip the line and get a discount.</p>
              <Link 
                to="/contact"
                className="inline-block bg-white text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Book Now
              </Link>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-10 translate-y-10">
              <Smartphone size={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}