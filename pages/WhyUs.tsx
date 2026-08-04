import { Link } from 'react-router-dom';
import React from 'react';
import { 
  Clock, 
  ShieldCheck, 
  Wrench, 
  MapPin, 
  Lock, 
  Cpu, 
  Sparkles, 
  ArrowRight,
  CheckCircle,
  Phone
} from 'lucide-react';
import StatsChart from '../components/StatsChart';
import { ADDRESS, LANDMARK, PHONE_NUMBER } from '../constants';
import RevealOnScroll from '../components/RevealOnScroll';

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; text: string; badge?: string }> = ({ icon, title, text, badge }) => (
  <div className="flex gap-4 group p-5 bg-white rounded-2xl shadow-sm border border-gray-200/80 hover:border-red-300 hover:shadow-xl transition-all duration-300">
    <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white shadow-sm">
      {icon}
    </div>
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <h4 className="font-extrabold text-gray-900 text-base group-hover:text-red-600 transition-colors">{title}</h4>
        {badge && (
          <span className="text-[10px] font-black uppercase tracking-wider bg-red-100 text-red-700 px-2 py-0.5 rounded-md">
            {badge}
          </span>
        )}
      </div>
      <p className="text-gray-600 text-xs leading-relaxed">{text}</p>
    </div>
  </div>
);

export default function WhyUs() {
  return (
    <div className="py-20 bg-gray-50/50 px-4 sm:px-6 lg:px-8 min-h-screen">
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-3 mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-red-600 bg-red-100 px-3 py-1 rounded-full border border-red-200">
                Bengaluru's Most Trusted Lab
              </span>
              <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">Why Choose Red Apple Repair?</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Combining precision German/Japanese equipment, certified Level 4 technicians, and upfront transparent pricing to fix devices that other shops turn down.
              </p>
            </div>

            <div className="space-y-4">
              <FeatureItem 
                icon={<Clock size={22} />}
                title="30-Minute Fast Track Service"
                text="Most screen, glass, and battery replacements are completed in 30-45 minutes while you wait comfortably."
                badge="Express Turnaround"
              />
              <FeatureItem 
                icon={<ShieldCheck size={22} />}
                title="90-Day Free Lab Warranty"
                text="Hassle-free coverage on parts and workmanship. Zero questions asked if a manufacturing defect occurs."
                badge="100% Guaranteed"
              />
              <FeatureItem 
                icon={<Lock size={22} />}
                title="Zero Password Privacy Guarantee"
                text="We test hardware utilizing diagnostic hardware modes. You never need to hand over unlock passwords or compromise personal data."
                badge="Strict Privacy"
              />
              <FeatureItem 
                icon={<Cpu size={22} />}
                title="Level 4 Micro-Soldering Experts"
                text="Certified cleanroom technicians equipped with JBC micro-soldering stations for complex BGA reballing & liquid damage board fixes."
                badge="Chip Level"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <StatsChart />

            <div className="bg-gradient-to-r from-gray-950 via-gray-900 to-black rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl border border-gray-800 space-y-4">
              <div className="relative z-10 space-y-3">
                <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  Special Online Booking Perk
                </span>
                <h3 className="text-2xl font-black text-white">Book Online & Save ₹500 On Repairs</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Reserve your technician slot online to skip the queue at Halasuru Metro station, receive priority OEM parts staging, and get ₹500 off your total bill.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Link to="/booking"className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-black text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-600/30"
                  >
                    <span>Reserve Priority Slot Now</span>
                    <ArrowRight size={14} />
                  </Link>

                  <a 
                    href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
                    className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-2 border border-gray-700"
                  >
                    <Phone size={14} className="text-emerald-400" />
                    <span>Call Tech directly</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
