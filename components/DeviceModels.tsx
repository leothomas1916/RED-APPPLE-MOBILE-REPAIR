import React, { useState } from 'react';
import { Smartphone, Tablet, Laptop, Watch, ChevronDown, Check, ShieldCheck } from 'lucide-react';

const MODELS = {
  iphone: [
    { name: 'iPhone 17 Series', repairs: ['Screen Replacement', 'Back Glass (Laser)', 'Battery', 'Camera Lens', 'Charging Port', 'Face ID Repair'] },
    { name: 'iPhone 16 Series', repairs: ['Screen Replacement', 'Back Glass (Laser)', 'Battery', 'Camera Lens', 'Charging Port', 'Face ID Repair'] },
    { name: 'iPhone 15 / 15 Plus', repairs: ['Screen Replacement', 'Back Glass (Laser)', 'Battery', 'Camera Lens', 'Charging Port', 'Face ID Repair'] },
    { name: 'iPhone 15 Pro / 15 Pro Max', repairs: ['Screen Replacement', 'Back Glass (Laser)', 'Battery', 'Camera Lens', 'Charging Port', 'Face ID Repair'] },
    { name: 'iPhone 14 / 14 Plus', repairs: ['Screen Replacement', 'Back Glass (Laser)', 'Battery', 'Camera Lens', 'Charging Port', 'Audio IC'] },
    { name: 'iPhone 14 Pro / 14 Pro Max', repairs: ['Screen Replacement', 'Back Glass (Laser)', 'Battery', 'Camera Lens', 'Charging Port', 'Face ID Repair'] },
    { name: 'iPhone 13 / 13 Mini', repairs: ['Screen Replacement', 'Back Glass (Laser)', 'Battery', 'Camera Lens', 'Charging Port', 'Face ID Repair'] },
    { name: 'iPhone 13 Pro / 13 Pro Max', repairs: ['Screen Replacement', 'Back Glass (Laser)', 'Battery', 'Camera Lens', 'Charging Port', 'Face ID Repair'] },
    { name: 'iPhone 12 Series', repairs: ['Screen Replacement', 'Back Glass (Laser)', 'Battery', 'Camera Lens', 'Charging Port', 'Face ID Repair'] },
    { name: 'iPhone 11 Series', repairs: ['Screen Replacement', 'Back Glass (Laser)', 'Battery', 'Camera Lens', 'Charging Port', 'Face ID Repair'] },
    { name: 'iPhone X / XS / XR', repairs: ['Screen Replacement', 'Back Glass', 'Battery', 'Camera Lens', 'Charging Port', 'Face ID Repair'] },
    { name: 'iPhone 8 / 8 Plus / SE', repairs: ['Screen Replacement', 'Back Glass', 'Battery', 'Camera', 'Charging Port', 'Home Button'] },
  ],
  ipad: [
    { name: 'iPad Pro (M4/M2/M1)', repairs: ['Screen Replacement', 'Battery', 'Charging Port', 'Body Bend Correction'] },
    { name: 'iPad Air (Gen 4/5)', repairs: ['Screen Replacement', 'Battery', 'Charging Port', 'Power Button'] },
    { name: 'iPad Mini (Gen 6)', repairs: ['Screen Replacement', 'Battery', 'Charging Port', 'Volume Buttons'] },
    { name: 'iPad (Gen 9/10)', repairs: ['Screen (Touch/LCD)', 'Battery', 'Charging Port', 'Home Button'] },
  ],
  macbook: [
    { name: 'MacBook Pro M1/M2/M3', repairs: ['Screen Assembly', 'Battery Replacement', 'Keyboard', 'Trackpad', 'Water Damage Repair'] },
    { name: 'MacBook Air M1/M2', repairs: ['Screen Assembly', 'Battery Replacement', 'Keyboard', 'Trackpad', 'Logic Board Repair'] },
    { name: 'MacBook Pro (Intel)', repairs: ['Screen Assembly', 'Battery Replacement', 'Keyboard', 'Thermal Paste', 'SSD Upgrade'] },
  ],
  watch: [
    { name: 'Apple Watch Ultra 1/2', repairs: ['Screen Replacement', 'Battery', 'Back Glass'] },
    { name: 'Apple Watch Series 7/8/9', repairs: ['Screen Replacement', 'Battery', 'Back Glass'] },
    { name: 'Apple Watch Series 4/5/6', repairs: ['Screen Replacement', 'Battery', 'Back Glass'] },
    { name: 'Apple Watch SE', repairs: ['Screen Replacement', 'Battery', 'Back Glass'] },
  ],
  android: [
    { name: 'Samsung Galaxy S24 / S23 Series', repairs: ['Screen Replacement (Dynamic AMOLED)', 'Back Glass', 'Battery', 'Charging Port', 'Camera Lens'] },
    { name: 'Samsung Galaxy S22 / S21 Series', repairs: ['Screen Replacement', 'Back Glass', 'Battery', 'Charging Port', 'Motherboard Repair'] },
    { name: 'Samsung Z Fold 5/4 & Flip 5/4', repairs: ['Inner Foldable Screen', 'Outer Screen', 'Hinge Mechanism Repair', 'Battery', 'Back Glass'] },
    { name: 'Samsung Note 20 / 10 Series', repairs: ['Curved Screen Replacement', 'Back Glass', 'Battery', 'S-Pen Sensor', 'Charging Port'] },
    { name: 'Google Pixel 9 / 8 / 7 Series', repairs: ['OLED Screen Replacement', 'Back Glass', 'Battery', 'Camera Bar Glass', 'Charging Port'] },
    { name: 'Google Pixel 6 / 6 Pro / 6a', repairs: ['Screen Replacement', 'Fingerprint Calibration', 'Battery', 'Charging Port', 'Camera Glass'] },
    { name: 'OnePlus 12 / 11 / 10 Series', repairs: ['Curved Screen Replacement', 'Back Glass', 'Battery', 'Alert Slider', 'Warp Charging Port'] },
    { name: 'OnePlus Nord Series', repairs: ['Screen Replacement', 'Battery', 'Charging Port', 'Back Panel', 'Volume Buttons'] },
    { name: 'Nothing Phone (1 / 2 / 2a)', repairs: ['Screen Replacement', 'Glyph Light Repair', 'Transparent Back Glass', 'Battery'] },
    { name: 'Xiaomi / Redmi / POCO', repairs: ['Screen Replacement', 'Battery', 'Charging Port', 'Side Fingerprint', 'Bootloop/Software Fix'] },
    { name: 'Oppo / Vivo / Realme', repairs: ['AMOLED Screen Replacement', 'Battery', 'Charging Port', 'Water Damage', 'Speaker/Mic'] },
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
            onClick={() => setActiveTab(cat.id)}
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
                <span className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-xs transition-colors ${
                    openModel === model.name ? 'bg-red-600 text-white' : 'bg-red-50 text-red-600'
                }`}>
                    {idx + 1}
                </span>
                <span className={`font-bold text-lg transition-colors ${openModel === model.name ? 'text-red-600' : 'text-gray-900'}`}>
                    {model.name}
                </span>
              </div>
              <div className={`text-gray-400 transition-transform duration-300 ${openModel === model.name ? 'rotate-180 text-red-600' : ''}`}>
                <ChevronDown size={20} />
              </div>
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openModel === model.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-5 pt-0 bg-gray-50/30">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {model.repairs.map((repair, rIdx) => (
                            <div key={rIdx} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                                <Check size={16} className="text-green-500 flex-shrink-0" />
                                <span className="text-sm font-medium text-gray-700">{repair}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 bg-blue-50 p-3 rounded-lg border border-blue-100">
                        <ShieldCheck size={14} className="text-blue-600" />
                        <span>All {model.name} repairs come with a 90-day warranty.</span>
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