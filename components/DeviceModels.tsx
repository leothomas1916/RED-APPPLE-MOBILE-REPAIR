import React, { useState } from 'react';
import { Smartphone, Tablet, Laptop, Watch, ChevronDown, Check, ShieldCheck, Zap, Droplets } from 'lucide-react';

const COMMON_REPAIRS = [
  'Screen Replacement (Original/OEM)',
  'Battery Replacement',
  'Back Glass Replacement (Laser)',
  'Water Damage Repair',
  'Charging Port Issue',
  'Camera Lens & Module',
  'FaceID / TouchID Repair',
  'Motherboard / Logic Board Fix'
];

const MODELS = {
  iphone: [
    { 
      name: 'iPhone 17 Series (17, Air, Pro, Pro Max)', 
      details: 'Latest generation repairs including advanced display calibration and titanium frame refurbishment.',
      repairs: [...COMMON_REPAIRS] 
    },
    { 
      name: 'iPhone 16 Series (16, Plus, Pro, Pro Max)', 
      details: 'Expert capture button repair, thermal management system service, and ceramic shield replacement.',
      repairs: [...COMMON_REPAIRS] 
    },
    { 
      name: 'iPhone 15 Series (15, Plus, Pro, Pro Max)', 
      details: 'Specialized laser back glass removal and USB-C port repairs available.',
      repairs: [...COMMON_REPAIRS] 
    },
    { 
      name: 'iPhone 14 Series (14, Plus, Pro, Pro Max)', 
      details: 'Expert handling of ceramic shield screens and back glass.',
      repairs: [...COMMON_REPAIRS] 
    },
    { 
      name: 'iPhone 13 Series (13, Mini, Pro, Pro Max)', 
      details: 'True Tone programming and battery health restoration.',
      repairs: [...COMMON_REPAIRS, 'Green Screen Display Fix'] 
    },
    { 
      name: 'iPhone 12 Series (12, Mini, Pro, Pro Max)', 
      details: 'OLED display replacement and 5G antenna repairs.',
      repairs: [...COMMON_REPAIRS] 
    },
    { 
      name: 'iPhone 11 Series (11, Pro, Pro Max)', 
      details: 'LCD/OLED replacement and face ID sensor calibration.',
      repairs: [...COMMON_REPAIRS] 
    },
    { 
      name: 'iPhone X / XS / XR / XS Max', 
      details: 'Back glass laser replacement and battery service.',
      repairs: [...COMMON_REPAIRS] 
    },
    { 
      name: 'iPhone 8 / 8 Plus / SE (2020/2022)', 
      details: 'Home button repair and classic retina display service.',
      repairs: ['Screen Replacement', 'Battery Replacement', 'Back Glass', 'Charging Port', 'Home Button', 'Water Damage', 'Earpiece Speaker'] 
    },
    { 
      name: 'iPhone 7 / 7 Plus & Older', 
      details: 'Budget-friendly repairs for older models to keep them running.',
      repairs: ['Screen Replacement', 'Battery Replacement', 'Charging Port', 'Audio IC (Loop Disease)', 'Camera', 'Buttons'] 
    },
  ],
  ipad: [
    { 
      name: 'iPad Pro (M4 / M2 / M1 Models)', 
      details: '11-inch and 12.9-inch Liquid Retina XDR display repairs.',
      repairs: ['Screen Replacement', 'Battery Replacement', 'Charging Port', 'Body Bend Correction', 'FaceID Repair'] 
    },
    { 
      name: 'iPad Air (Gen 4 / 5)', 
      details: 'Laminated display replacement and TouchID power button repair.',
      repairs: ['Screen Replacement', 'Battery Replacement', 'Charging Port', 'Logic Board Repair'] 
    },
    { 
      name: 'iPad Mini (Gen 6)', 
      details: 'Compact screen replacement and USB-C port service.',
      repairs: ['Screen Replacement', 'Battery Replacement', 'Volume Buttons', 'Water Damage'] 
    },
    { 
      name: 'iPad (Gen 9 / 10)', 
      details: 'Digitizer (Glass) and LCD replacement services.',
      repairs: ['Glass/Touch Replacement', 'LCD Replacement', 'Battery Replacement', 'Home Button', 'Charging Port'] 
    },
  ],
  macbook: [
    { 
      name: 'MacBook Pro (M1 / M2 / M3 Silicon)', 
      details: 'Screen assembly replacement and logic board component repair.',
      repairs: ['Screen Assembly', 'Battery Replacement', 'Keyboard', 'Trackpad', 'Water Damage Chemical Wash', 'Logic Board Micro-soldering'] 
    },
    { 
      name: 'MacBook Air (M1 / M2 Silicon)', 
      details: 'Thin bezel screen repair and battery service.',
      repairs: ['Screen Assembly', 'Battery Replacement', 'Trackpad', 'Liquid Damage Repair', 'Charging Port'] 
    },
    { 
      name: 'MacBook Pro (Intel 2016-2020)', 
      details: 'Flexgate repair, keyboard replacement, and thermal paste application.',
      repairs: ['Screen Assembly', 'Battery Replacement', 'Keyboard (Butterfly/Scissor)', 'Flexgate Repair', 'SSD Issues'] 
    },
    { 
      name: 'MacBook Air (Intel 2015-2020)', 
      details: 'Battery service and screen replacement.',
      repairs: ['Screen Assembly', 'Battery Replacement', 'Charging Port', 'Water Damage'] 
    },
  ],
  watch: [
    { 
      name: 'Apple Watch Ultra 1 / 2', 
      details: 'Sapphire crystal screen and titanium body buffing.',
      repairs: ['Screen Replacement', 'Battery Replacement', 'Back Sensor Glass', 'Digital Crown'] 
    },
    { 
      name: 'Apple Watch Series 7 / 8 / 9', 
      details: 'Edge-to-edge glass replacement without removing display assembly.',
      repairs: ['Glass Replacement', 'Touch & LCD', 'Battery Replacement', 'Back Glass', 'Water Damage'] 
    },
    { 
      name: 'Apple Watch Series 4 / 5 / 6 / SE', 
      details: 'Glass-only replacement to retain original OLED panel.',
      repairs: ['Glass Replacement', 'Battery Replacement', 'Force Touch Sensor', 'Back Glass'] 
    },
  ],
  android: [
    { 
      name: 'Samsung Galaxy S Series (S24 / S23 / S22)', 
      details: 'Dynamic AMOLED 2X screen replacement, back glass laser removal, and motherboard repairs.',
      repairs: ['Screen Replacement', 'Back Glass', 'Battery', 'Charging Port', 'Camera Lens', 'Water Damage'] 
    },
    { 
      name: 'Samsung Z Fold Series', 
      details: 'Specialized hinge repair, inner folding screen replacement, and screen protector installation.',
      repairs: ['Inner Foldable Screen', 'Outer Screen', 'Hinge Repair', 'Battery', 'Back Glass', 'Film Replacement'] 
    },
    { 
      name: 'Samsung Z Flip Series', 
      details: 'Expert hinge alignment, inner folding screen replacement, and original screen protector installation.',
      repairs: ['Inner Foldable Screen', 'Cover Screen', 'Hinge Mechanism', 'Battery', 'Back Glass', 'Protector Film'] 
    },
    {
      name: 'Samsung Galaxy A / M / F Series',
      details: 'Original LCD/OLED replacement and charging port repairs for mid-range models.',
      repairs: ['Screen Replacement', 'Battery Replacement', 'Charging Port', 'Microphone/Speaker', 'Liquid Damage']
    },
    { 
      name: 'Google Pixel 9 / 8 / 7 / 6 Series', 
      details: 'Original OLED panel replacement, camera bar glass repair, and fingerprint sensor calibration.',
      repairs: ['Screen Replacement', 'Back Glass', 'Battery', 'Charging Port', 'Fingerprint Calibration', 'Camera Glass'] 
    },
    { 
      name: 'OnePlus Flagship (12 / 11 / 10 / 9)', 
      details: 'Curved display glass replacement, green line display fix, and warp charge port repair.',
      repairs: ['Screen Replacement', 'Back Glass', 'Battery', 'Alert Slider', 'Motherboard Repair', 'Green Line Fix'] 
    },
    {
      name: 'OnePlus Nord Series',
      details: 'Affordable screen and battery replacements for all Nord models.',
      repairs: ['Screen Replacement', 'Battery Replacement', 'Charging Port', 'Back Panel', 'Software Flash']
    },
    {
      name: 'Xiaomi / Redmi / POCO',
      details: 'CPU reballing (dead boot fix), screen replacement, and custom ROM support.',
      repairs: ['Screen Replacement', 'Battery', 'CPU Reballing', 'Dead Boot Repair', 'Charging Port', 'Camera']
    },
    {
      name: 'Realme / Oppo / Vivo',
      details: 'Original AMOLED display fitting and VOOC/SuperVOOC charging port repairs.',
      repairs: ['Screen Replacement', 'Battery', 'Water Damage', 'Charging Port', 'Software Unlock', 'Camera']
    },
    { 
      name: 'Nothing Phone (1 / 2 / 2a)', 
      details: 'Transparent back glass replacement and glyph interface repair.',
      repairs: ['Screen Replacement', 'Back Glass', 'Glyph Lights', 'Battery', 'Charging Port'] 
    },
    {
      name: 'Motorola Edge / G Series',
      details: 'Stock Android software recovery and hardware repairs.',
      repairs: ['Screen Replacement', 'Battery', 'Charging Port', 'Speaker', 'Water Damage']
    }
  ]
};

const CATEGORIES = [
  { id: 'iphone', label: 'iPhone', icon: Smartphone },
  { id: 'ipad', label: 'iPad', icon: Tablet },
  { id: 'macbook', label: 'MacBook', icon: Laptop },
  { id: 'watch', label: 'Apple Watch', icon: Watch },
  { id: 'android', label: 'Android', icon: Smartphone },
];

const DeviceModels: React.FC = () => {
  const [activeTab, setActiveTab] = useState('iphone');
  const [openModel, setOpenModel] = useState<string | null>(null);

  const toggleModel = (name: string) => {
    setOpenModel(openModel === name ? null : name);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveTab(cat.id);
              setOpenModel(null);
            }}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
              activeTab === cat.id
                ? 'bg-gray-900 text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            <cat.icon size={18} />
            {cat.label}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
        {MODELS[activeTab as keyof typeof MODELS].map((model, idx) => (
          <div key={idx} className="border-b border-gray-100 last:border-0">
            <button
              onClick={() => toggleModel(model.name)}
              className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors text-left group"
            >
              <div className="flex items-center gap-4">
                <span className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-xs transition-colors flex-shrink-0 ${
                    openModel === model.name ? 'bg-red-600 text-white' : 'bg-red-50 text-red-600'
                }`}>
                    {idx + 1}
                </span>
                <div>
                  <span className={`font-bold text-lg transition-colors block ${openModel === model.name ? 'text-red-600' : 'text-gray-900'}`}>
                      {model.name}
                  </span>
                  {openModel !== model.name && (
                    <span className="text-xs text-gray-500 font-normal hidden sm:block">{model.details}</span>
                  )}
                </div>
              </div>
              <div className={`text-gray-400 transition-transform duration-300 ${openModel === model.name ? 'rotate-180 text-red-600' : ''}`}>
                <ChevronDown size={20} />
              </div>
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openModel === model.name ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-5 pt-0 bg-gray-50/50">
                    <p className="text-sm text-gray-600 mb-4 italic border-l-4 border-red-200 pl-3 py-1">
                      {model.details}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {model.repairs.map((repair, rIdx) => (
                            <div key={rIdx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-gray-100 shadow-sm hover:border-red-100 transition-colors">
                                {repair.includes('Water') ? (
                                  <Droplets size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                                ) : repair.includes('Battery') ? (
                                  <Zap size={16} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                                ) : (
                                  <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                                )}
                                <span className="text-sm font-medium text-gray-700 leading-tight">{repair}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-5 flex items-center gap-2 text-xs text-blue-800 bg-blue-50 p-3 rounded-lg border border-blue-100">
                        <ShieldCheck size={16} className="text-blue-600" />
                        <span className="font-semibold">All {model.name.split(' ')[0]} repairs include a 90-day warranty on parts and labor.</span>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceModels;