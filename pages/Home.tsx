import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Star, 
  Wrench, 
  Lock, 
  Check, 
  X, 
  Phone, 
  MapPin, 
  Sparkles, 
  Cpu, 
  DollarSign,
  Smartphone,
  Laptop,
  Tablet,
  Watch,
  Battery
} from 'lucide-react';
import { REVIEWS, PHONE_NUMBER, RATING_VAL, REVIEW_COUNT_STR, LANDMARK } from '../constants';
import RevealOnScroll from '../components/RevealOnScroll';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ProcessTimeline from '../components/ProcessTimeline';
import DeviceModels from '../components/DeviceModels';
import AIDiagnosticTool from '../components/AIDiagnosticTool';

// Quick Estimator Data
const ESTIMATOR_BRANDS = [
  { id: 'iphone', name: 'iPhone', icon: Smartphone },
  { id: 'samsung', name: 'Samsung', icon: Smartphone },
  { id: 'macbook', name: 'MacBook', icon: Laptop },
  { id: 'ipad', name: 'iPad / Tablet', icon: Tablet },
  { id: 'watch', name: 'Apple Watch', icon: Watch },
];

const ESTIMATOR_ISSUES: Record<string, Array<{
  id: string;
  name: string;
  estPrice: string;
  authPrice: string;
  estTime: string;
  warranty: string;
}>> = {
  iphone: [
    { id: 'screen', name: 'Shattered OLED Screen / Display', estPrice: '₹2,800 - ₹8,500', authPrice: '₹18,000+', estTime: '30 - 45 Mins', warranty: '90 Days' },
    { id: 'laser', name: 'TBK Laser Back Glass Restoration', estPrice: '₹1,900 - ₹3,500', authPrice: '₹24,000+', estTime: '2 - 3 Hours', warranty: '90 Days' },
    { id: 'battery', name: 'OEM Battery Health Replacement', estPrice: '₹1,490 - ₹2,900', authPrice: '₹7,500+', estTime: '20 - 30 Mins', warranty: '6 Months' },
    { id: 'board', name: 'Motherboard Micro-soldering / Water Fix', estPrice: '₹2,500 - ₹5,500', authPrice: 'Device Scrap', estTime: 'Same Day', warranty: '90 Days' },
  ],
  samsung: [
    { id: 'curved', name: 'Curved AMOLED Display Separation', estPrice: '₹3,500 - ₹9,500', authPrice: '₹21,000+', estTime: '1 - 2 Hours', warranty: '90 Days' },
    { id: 'battery', name: 'Original Samsung Battery Swap', estPrice: '₹1,290 - ₹2,400', authPrice: '₹5,000+', estTime: '30 Mins', warranty: '6 Months' },
    { id: 'charging', name: 'Type-C Charging Port & Mic Fix', estPrice: '₹890 - ₹1,800', authPrice: '₹6,000+', estTime: '30 Mins', warranty: '90 Days' },
  ],
  macbook: [
    { id: 'screen', name: 'Retina Display Panel Assembly', estPrice: '₹7,500 - ₹18,000', authPrice: '₹42,000+', estTime: '2 - 4 Hours', warranty: '90 Days' },
    { id: 'board', name: 'Logic Board Liquid Damage Repair', estPrice: '₹4,500 - ₹9,500', authPrice: '₹55,000+', estTime: '24 Hours', warranty: '6 Months' },
    { id: 'keyboard', name: 'Keyboard & Battery Top Case Swap', estPrice: '₹3,800 - ₹7,500', authPrice: '₹22,000+', estTime: '2 Hours', warranty: '90 Days' },
  ],
  ipad: [
    { id: 'glass', name: 'Touch Digitizer / Front Glass Fix', estPrice: '₹1,900 - ₹4,500', authPrice: '₹16,000+', estTime: '1 - 2 Hours', warranty: '90 Days' },
    { id: 'battery', name: 'High-Capacity iPad Battery Swap', estPrice: '₹2,200 - ₹3,800', authPrice: '₹10,000+', estTime: '1 Hour', warranty: '6 Months' },
  ],
  watch: [
    { id: 'screen', name: 'OLED Glass Lamination', estPrice: '₹2,200 - ₹4,800', authPrice: '₹18,000+', estTime: '2 Hours', warranty: '90 Days' },
    { id: 'battery', name: 'Apple Watch Battery Replacement', estPrice: '₹1,490 - ₹2,500', authPrice: '₹8,000+', estTime: '45 Mins', warranty: '6 Months' },
  ]
};

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState('iphone');
  const [selectedIssueIndex, setSelectedIssueIndex] = useState(0);

  const currentIssues = ESTIMATOR_ISSUES[selectedBrand] || ESTIMATOR_ISSUES['iphone'];
  const activeIssue = currentIssues[selectedIssueIndex] || currentIssues[0];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-gray-900 to-gray-950 text-white relative overflow-hidden">
        {/* Glow Blobs */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <RevealOnScroll>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-500/15 text-red-400 rounded-full text-xs font-black tracking-wide border border-red-500/30">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                <span>BANGALORE'S PREMIER DEVICE REPAIR LAB • HALASURU</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-none tracking-tight">
                Bring Your Device <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-400">
                  Back to Factory Glory
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Level 4 Motherboard Micro-soldering, Curved OLED Glass Separation & Laser Glass Restoration. Save up to <span className="text-emerald-400 font-bold">50% vs Authorized Centers</span> with instant 30-minute turnarounds & 90-day warranty.
              </p>

              {/* Trust Pill Tags */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs">
                <span className="bg-gray-800/80 border border-gray-700/80 px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-gray-200 font-bold">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  Zero-Password Privacy
                </span>
                <span className="bg-gray-800/80 border border-gray-700/80 px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-gray-200 font-bold">
                  <Clock size={14} className="text-amber-400" />
                  30-Min Fast Track
                </span>
                <span className="bg-gray-800/80 border border-gray-700/80 px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-gray-200 font-bold">
                  <Star size={14} className="text-amber-400 fill-amber-400" />
                  {RATING_VAL} Stars ({REVIEW_COUNT_STR})
                </span>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
                <Link to="/booking"className="px-7 py-3.5 bg-red-600 text-white rounded-2xl font-black shadow-xl shadow-red-600/30 hover:bg-red-700 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 text-sm"
                >
                  <span>Book Instant Repair</span>
                  <ArrowRight size={18} />
                </Link>

                <a 
                  href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
                  className="px-7 py-3.5 bg-gray-800 text-white border border-gray-700 rounded-2xl font-bold hover:bg-gray-700 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Phone size={18} className="text-emerald-400" />
                  <span>Call Tech: {PHONE_NUMBER}</span>
                </a>
              </div>

              {/* Verified Customer Count */}
              <div className="pt-4 border-t border-gray-800/80 flex items-center justify-center lg:justify-start gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <img 
                      key={i} 
                      src={`https://images.unsplash.com/photo-${1534528741775 + i * 1000}?auto=format&fit=crop&q=80&w=100&h=100`} 
                      alt="Customer" 
                      className="w-8 h-8 rounded-full border-2 border-gray-900 object-cover" 
                    />
                  ))}
                </div>
                <div className="text-xs text-left">
                  <div className="flex text-amber-400 text-xs font-bold gap-0.5">
                    ★★★★★
                  </div>
                  <p className="text-gray-400"><span className="font-bold text-white">8,500+</span> devices repaired in Bengaluru</p>
                </div>
              </div>
            </div>

            {/* Right Column: Halasuru Lab Direct Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-black p-6 sm:p-7 rounded-3xl border border-gray-800/90 shadow-2xl space-y-5">
                <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500 font-black">
                      🍎
                    </div>
                    <div>
                      <h3 className="font-black text-white text-base">Halasuru Tech Lab</h3>
                      <p className="text-[11px] text-gray-400 font-medium">Metro Pillar 125 • Old Airport Rd</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-950 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-800/80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Lab Open Now
                  </span>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-black uppercase tracking-wider text-gray-400">Master Lab Equipment & Tech Specs:</p>
                  
                  <div className="bg-gray-950/80 p-3.5 rounded-2xl border border-gray-800 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-red-950 text-red-400 flex items-center justify-center font-bold text-xs shrink-0 border border-red-800/50">
                      ⚡
                    </div>
                    <div>
                      <h4 className="font-extrabold text-xs text-white">TBK 958B Laser Glass Machine</h4>
                      <p className="text-[11px] text-gray-400 mt-0.5">Non-contact laser beam breaks shattered iPhone back glass adhesive without dismantling internal parts.</p>
                    </div>
                  </div>

                  <div className="bg-gray-950/80 p-3.5 rounded-2xl border border-gray-800 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-amber-950 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0 border border-amber-800/50">
                      🔋
                    </div>
                    <div>
                      <h4 className="font-extrabold text-xs text-white">OEM High-Density Battery Swap</h4>
                      <p className="text-[11px] text-gray-400 mt-0.5">20-minute battery replacement with BMS health data programming to eliminate warning popups.</p>
                    </div>
                  </div>

                  <div className="bg-gray-950/80 p-3.5 rounded-2xl border border-gray-800 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 border border-emerald-800/50">
                      📱
                    </div>
                    <div>
                      <h4 className="font-extrabold text-xs text-white">Cleanroom Vacuum OCA Lamination</h4>
                      <p className="text-[11px] text-gray-400 mt-0.5">Original display glass separation retaining True Tone, 120Hz refresh rate, and 3D Touch response.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-800/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-gray-300 font-bold">
                    <ShieldCheck size={16} className="text-emerald-400" />
                    <span>90-Day Free Lab Warranty</span>
                  </div>
                  <a 
                    href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
                    className="text-xs font-black bg-red-600 hover:bg-red-700 text-white px-3.5 py-2 rounded-xl transition-colors flex items-center gap-1.5 shadow-md shadow-red-600/30"
                  >
                    <Phone size={13} />
                    <span>Consult Tech</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Gemini AI Smart Diagnostic Section */}
      <section className="py-6 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <AIDiagnosticTool />
          </RevealOnScroll>
        </div>
      </section>

      {/* Interactive Quick Price & Turnaround Estimator */}
      <section className="py-12 bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-gray-100 pb-4">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100">
                    Instant Cost & Turnaround Calculator
                  </span>
                  <h2 className="text-2xl font-black text-gray-900 mt-2">Select Your Device & Issue</h2>
                </div>
                <p className="text-xs text-gray-500 max-w-sm">
                  Transparent upfront estimate. No hidden diagnostic fees. Free device health analysis at our Halasuru lab.
                </p>
              </div>

              {/* Brand Selector */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-6">
                {ESTIMATOR_BRANDS.map((brand) => {
                  const IconComp = brand.icon;
                  const isSelected = selectedBrand === brand.id;
                  return (
                    <button
                      key={brand.id}
                      onClick={() => {
                        setSelectedBrand(brand.id);
                        setSelectedIssueIndex(0);
                      }}
                      className={`p-3 rounded-2xl border transition-all flex items-center justify-center gap-2 font-bold text-xs ${
                        isSelected 
                          ? 'bg-red-600 text-white border-red-600 shadow-md shadow-red-500/20' 
                          : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <IconComp size={16} />
                      <span>{brand.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Issue Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-500 uppercase tracking-wider block">Common Repair Issues:</label>
                  {currentIssues.map((issue, idx) => (
                    <button
                      key={issue.id}
                      onClick={() => setSelectedIssueIndex(idx)}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                        selectedIssueIndex === idx 
                          ? 'bg-red-50/80 border-red-500/80 shadow-sm text-gray-900 font-bold' 
                          : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-xs">{issue.name}</span>
                      <span className={`text-xs font-black px-2.5 py-1 rounded-lg ${
                        selectedIssueIndex === idx ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {issue.estPrice}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Estimate Result Display */}
                <div className="bg-gray-950 text-white p-6 rounded-2xl border border-gray-800 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex justify-between items-center border-b border-gray-800 pb-3 mb-3">
                      <div>
                        <p className="text-[10px] text-red-400 font-bold uppercase tracking-wider">Estimated Lab Cost</p>
                        <h3 className="text-3xl font-black text-white">{activeIssue.estPrice}</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-gray-400 uppercase font-semibold">Authorized Center Price</p>
                        <p className="text-sm font-bold text-gray-500 line-through">{activeIssue.authPrice}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                      <div className="bg-gray-900 p-2.5 rounded-xl border border-gray-800">
                        <span className="text-gray-400 block text-[10px]">Turnaround Time</span>
                        <span className="font-bold text-amber-400 flex items-center gap-1 mt-0.5">
                          <Clock size={13} />
                          {activeIssue.estTime}
                        </span>
                      </div>
                      <div className="bg-gray-900 p-2.5 rounded-xl border border-gray-800">
                        <span className="text-gray-400 block text-[10px]">Warranty Included</span>
                        <span className="font-bold text-emerald-400 flex items-center gap-1 mt-0.5">
                          <ShieldCheck size={13} />
                          {activeIssue.warranty}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Link to="/booking"className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold text-center text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-600/30"
                  >
                    <span>Book Repair For {activeIssue.estPrice}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Google Maps Flagship iPhone Repairs Spotlight */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-slate-950 text-white border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-red-400 bg-red-950 px-3.5 py-1.5 rounded-full border border-red-800/80 inline-flex items-center gap-1.5">
                <Sparkles size={13} className="text-amber-400" />
                Google Maps Most Popular iPhone Repairs
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mt-3 text-white">
                Our 3 Core iPhone Specializations
              </h2>
              <p className="text-gray-300 text-sm mt-2">
                Restoring shattered glass, worn batteries, and broken screens with lab-grade precision equipment at Halasuru Metro Pillar 125.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Feature 1: Laser Back Glass */}
              <div className="bg-gray-900/90 rounded-3xl p-6 border border-gray-800 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:shadow-red-950/40">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-red-600/20 text-red-400 rounded-2xl flex items-center justify-center border border-red-500/30 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <Zap size={24} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-red-950 text-red-400 px-2.5 py-1 rounded-lg border border-red-800/60">
                      ⚡ TBK Laser Tech
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-white group-hover:text-red-400 transition-colors">
                      iPhone Back Glass Laser Restoration
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      Utilizing our non-invasive <strong className="text-gray-200">TBK 958B Laser machine</strong> to disintegrate broken back glass glue without opening your device.
                    </p>
                  </div>

                  <ul className="space-y-2 text-xs text-gray-300 border-t border-gray-800 pt-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                      <span>Phone remains factory sealed (No opening needed)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                      <span>MagSafe wireless charging & coil preserved</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                      <span>Save up to ₹18,000 vs full body swap</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-gray-400 block">Turnaround</span>
                    <span className="font-extrabold text-amber-400">45 - 60 Mins</span>
                  </div>
                  <Link to="/booking"className="bg-red-600/80 hover:bg-red-600 text-white font-bold px-3.5 py-2 rounded-xl transition-colors"
                  >
                    Book Backglass
                  </Link>
                </div>
              </div>

              {/* Feature 2: OEM Battery Swap */}
              <div className="bg-gray-900/90 rounded-3xl p-6 border border-gray-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:shadow-amber-950/40">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center border border-amber-500/30 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                      <Battery size={24} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-amber-950 text-amber-400 px-2.5 py-1 rounded-lg border border-amber-800/60">
                      🔋 100% Health Swap
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors">
                      iPhone OEM High-Capacity Battery
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      Instant swap using original high-density battery cells with <strong className="text-gray-200">EEPROM / BMS flex cable programming</strong> to eliminate battery warning popups.
                    </p>
                  </div>

                  <ul className="space-y-2 text-xs text-gray-300 border-t border-gray-800 pt-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                      <span>Restores 100% battery capacity & health</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                      <span>EEPROM programmer battery data transfer</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                      <span>Overheat & short-circuit protection IC</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-gray-400 block">Turnaround</span>
                    <span className="font-extrabold text-amber-400">20 - 30 Mins</span>
                  </div>
                  <Link to="/booking"className="bg-amber-500 hover:bg-amber-400 text-black font-extrabold px-3.5 py-2 rounded-xl transition-colors"
                  >
                    Book Battery
                  </Link>
                </div>
              </div>

              {/* Feature 3: OEM Display & Lamination */}
              <div className="bg-gray-900/90 rounded-3xl p-6 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:shadow-emerald-950/40">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                      <Smartphone size={24} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-950 text-emerald-400 px-2.5 py-1 rounded-lg border border-emerald-800/60">
                      📱 True Tone & 120Hz
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-white group-hover:text-emerald-400 transition-colors">
                      iPhone OEM Display & Glass Lamination
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      Cleanroom <strong className="text-gray-200">Vacuum OCA lamination</strong> & OEM display assembly with serial programmer data transfer to retain True Tone and 120Hz ProMotion.
                    </p>
                  </div>

                  <ul className="space-y-2 text-xs text-gray-300 border-t border-gray-800 pt-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                      <span>True Tone & ambient light sensor cloning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                      <span>Dust-free OCA vacuum glass bonding</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                      <span>Free 9H Tempered Glass shield included</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-gray-400 block">Turnaround</span>
                    <span className="font-extrabold text-amber-400">30 - 45 Mins</span>
                  </div>
                  <Link to="/booking"className="bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold px-3.5 py-2 rounded-xl transition-colors"
                  >
                    Book Screen
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

            {/* The Truth About Doorstep Repairs */}
      <section className="py-16 bg-red-50/50 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-red-100 shadow-xl shadow-red-900/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <ShieldCheck size={160} />
              </div>
              <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <span className="text-xs font-black uppercase tracking-widest text-red-600 bg-red-100 px-3 py-1 rounded-full border border-red-200 inline-block">
                    Service Standard Warning
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
                    Why We Do Not Recommend <span className="text-red-600">Doorstep Repairs</span>
                  </h2>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    Many aggregators offer "doorstep service," but true micro-electronics repair requires a sterile environment. You simply cannot safely rebuild a modern smartphone on a coffee table.
                  </p>
                  
                  <ul className="space-y-3 mt-4 text-sm text-gray-600">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">✕</div>
                      <p><strong>Dust Contamination:</strong> OCA lamination and internal exposure require cleanroom environments to prevent dust under the screen.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">✕</div>
                      <p><strong>Missing Equipment:</strong> TBK lasers, vacuum laminators, and EEPROM programmers weigh over 40kg and cannot be carried in a backpack.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">✕</div>
                      <p><strong>Rushed Jobs:</strong> Doorstep agents are pressured to finish quickly, often skipping crucial thermal pasting and water-seal adhesives.</p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 text-white space-y-6 shadow-2xl relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border-4 border-white shadow-sm">
                    Our Solution
                  </div>
                  <h3 className="text-xl font-black text-center mt-2">Professional Lab Repair <br/><span className="text-emerald-400">& Secure Pickup/Drop</span></h3>
                  <p className="text-sm text-gray-300 text-center leading-relaxed">
                    Get the highest standard of repair in our Halasuru anti-static lab. Can't visit us? We offer on-demand device pickup and drop within a 10KM radius.
                  </p>
                  
                  <div className="space-y-3 pt-2">
                    <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700/50 flex items-center gap-3">
                      <ShieldCheck size={20} className="text-emerald-400" />
                      <span className="text-xs font-bold text-gray-200">Anti-Static Lab Environment</span>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700/50 flex items-center gap-3">
                      <MapPin size={20} className="text-emerald-400" />
                      <span className="text-xs font-bold text-gray-200">On-Demand Pickup/Drop (Within 10KM)</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-center">
                    <Link to="/booking" className="bg-white hover:bg-gray-100 text-black px-6 py-2.5 rounded-xl font-black text-xs transition-colors flex items-center justify-center gap-2 shadow-lg w-full">
                      Book Lab Repair or Pickup
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Comparison Table Section ("Why Red Apple Beats Others") */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100">
                Direct Comparison
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3">
                Why Customers Choose Red Apple Mobile Repair
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Save time, save thousands of rupees, and preserve your personal data without compromise.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-gray-500">Service Factor</th>
                    <th className="p-4 text-sm font-black text-red-600 bg-red-50/80 rounded-t-2xl border-t border-x border-red-100 text-center">
                      🍎 Red Apple Repair Lab
                    </th>
                    <th className="p-4 text-xs font-bold text-gray-600 text-center">Authorized Service Center</th>
                    <th className="p-4 text-xs font-bold text-gray-600 text-center">Local Unorganized Shop</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                  <tr>
                    <td className="p-4 font-bold text-gray-900">Repair Cost</td>
                    <td className="p-4 font-black text-emerald-700 bg-red-50/50 border-x border-red-100 text-center">
                      40% – 50% Cheaper (OEM Parts)
                    </td>
                    <td className="p-4 text-gray-500 text-center">Extremely Expensive</td>
                    <td className="p-4 text-gray-500 text-center">Cheap (Duplicate Parts)</td>
                  </tr>

                  <tr>
                    <td className="p-4 font-bold text-gray-900">Turnaround Speed</td>
                    <td className="p-4 font-black text-gray-900 bg-red-50/50 border-x border-red-100 text-center flex items-center justify-center gap-1 text-emerald-600">
                      <Zap size={15} />
                      30 Mins – 2 Hours (Same-Day)
                    </td>
                    <td className="p-4 text-gray-500 text-center">7 to 14 Days Wait</td>
                    <td className="p-4 text-gray-500 text-center">Unpredictable (1-3 days)</td>
                  </tr>

                  <tr>
                    <td className="p-4 font-bold text-gray-900">Data Privacy & Passwords</td>
                    <td className="p-4 font-black text-gray-900 bg-red-50/50 border-x border-red-100 text-center">
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-100 px-2.5 py-0.5 rounded-full">
                        <Lock size={12} />
                        Zero Passwords Needed
                      </span>
                    </td>
                    <td className="p-4 text-gray-500 text-center">Mandatory Wipe & Format</td>
                    <td className="p-4 text-gray-500 text-center">Asks for unlock PIN</td>
                  </tr>

                  <tr>
                    <td className="p-4 font-bold text-gray-900">Micro-Soldering Ability</td>
                    <td className="p-4 font-black text-gray-900 bg-red-50/50 border-x border-red-100 text-center flex items-center justify-center gap-1 text-red-600">
                      <Cpu size={15} />
                      Level 4 Chip Micro-repair
                    </td>
                    <td className="p-4 text-gray-500 text-center">No (Replaces Full Board)</td>
                    <td className="p-4 text-gray-500 text-center">No Micro-soldering gear</td>
                  </tr>

                  <tr>
                    <td className="p-4 font-bold text-gray-900">Warranty Coverage</td>
                    <td className="p-4 font-black text-emerald-700 bg-red-50/50 border-x border-red-100 text-center rounded-b-2xl border-b">
                      90 Days Free Hassle-Free
                    </td>
                    <td className="p-4 text-gray-500 text-center">90 Days (if paid full)</td>
                    <td className="p-4 text-gray-500 text-center">7 Days or None</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Repair Process Timeline Section */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
                <span className="text-xs font-black uppercase tracking-widest text-red-600 bg-red-100 px-3 py-1 rounded-full border border-red-200">
                  Transparent Workflow
                </span>
                <h2 className="text-3xl font-black text-gray-900 mt-2 sm:text-4xl">How We Restore Your Device</h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto mt-1">
                  Transparent, fast, and reliable. Watch your device's transformation step by step.
                </p>
             </div>
             <ProcessTimeline />
          </div>
        </RevealOnScroll>
      </section>

      {/* Before & After Interactive Restoration Section */}
      <section className="py-20 bg-gray-950 text-white overflow-hidden border-b border-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <RevealOnScroll>
                      <div className="space-y-6">
                          <span className="text-xs font-black uppercase tracking-widest text-red-400 bg-red-950 px-3 py-1 rounded-full border border-red-800">
                            Master Craftsmanship
                          </span>
                          <h2 className="text-3xl sm:text-4xl font-black">Inspect Before & After Quality</h2>
                          <p className="text-gray-400 text-base leading-relaxed">
                              Slide to verify how our cleanroom technicians restore shattered glass panels and damaged displays back to flawless OEM condition.
                          </p>
                          
                          <div className="space-y-4">
                              <div className="flex items-start gap-3 bg-gray-900 p-3.5 rounded-2xl border border-gray-800">
                                  <div className="w-8 h-8 rounded-xl bg-red-600 flex items-center justify-center font-extrabold text-sm text-white flex-shrink-0">1</div>
                                  <div>
                                      <h4 className="font-bold text-sm text-white">TBK 958B Laser Glass Demolition</h4>
                                      <p className="text-xs text-gray-400">Pulverizes back glass adhesive without dismantling delicate internal battery coils.</p>
                                  </div>
                              </div>
                              <div className="flex items-start gap-3 bg-gray-900 p-3.5 rounded-2xl border border-gray-800">
                                  <div className="w-8 h-8 rounded-xl bg-red-600 flex items-center justify-center font-extrabold text-sm text-white flex-shrink-0">2</div>
                                  <div>
                                      <h4 className="font-bold text-sm text-white">True Tone & EEPROM Data Transfer</h4>
                                      <p className="text-xs text-gray-400">Original display serials are cloned to maintain True Tone display & ambient sensors.</p>
                                  </div>
                              </div>
                          </div>

                          <Link to="/portfolio"className="inline-flex items-center gap-2 text-white font-bold border-b-2 border-red-500 pb-1 hover:text-red-400 transition-colors text-sm"
                          >
                            <span>View Full Restoration Gallery</span>
                            <ArrowRight size={16} />
                          </Link>
                      </div>
                  </RevealOnScroll>

                  <RevealOnScroll className="delay-200">
                      <div className="relative">
                          <BeforeAfterSlider 
                            beforeImage="https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&q=80&w=1000"
                            afterImage="https://images.unsplash.com/photo-1512054502232-10a0a035d672?auto=format&fit=crop&q=80&w=1000"
                            alt="iPhone Screen Repair"
                            badgeTitle="iPhone 14 Pro Max • Shattered Display Separation"
                          />
                      </div>
                  </RevealOnScroll>
              </div>
          </div>
      </section>

      {/* Supported Device Models Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
                <span className="text-xs font-black uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100">
                  Comprehensive Device Matrix
                </span>
                <h2 className="text-3xl font-black text-gray-900 mt-2">Device Models We Repair Daily</h2>
                <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-1">
                   Search or filter your phone, tablet, or laptop model for estimated turnarounds.
                </p>
            </div>
            
            <DeviceModels />
          </div>
        </RevealOnScroll>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-red-600 bg-red-100 px-3 py-1 rounded-full border border-red-200">
                Google Verified Reviews
              </span>
              <h2 className="text-3xl font-black text-gray-900 mt-2">What Our Customers Say</h2>
              <p className="text-xs text-gray-500 mt-1">Rated {RATING_VAL} Stars on Google Maps with {REVIEW_COUNT_STR}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {REVIEWS.map((review) => (
                <div key={review.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400 gap-0.5 text-sm">
                      {[...Array(review.rating)].map((_, i) => <span key={i}>★</span>)}
                    </div>
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                      Verified Customer
                    </span>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm mb-6 leading-relaxed italic">"{review.text}"</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 bg-red-100 text-red-600 font-black rounded-full flex items-center justify-center text-xs">
                          {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-xs text-gray-900">{review.name}</p>
                        <p className="text-[10px] text-gray-400">{review.date}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400">Google Review</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}
