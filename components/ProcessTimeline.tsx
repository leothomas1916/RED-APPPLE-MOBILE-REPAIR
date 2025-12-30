import React from 'react';
import { ClipboardList, Search, Wrench, CheckCircle, Smile } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList size={24} />,
    title: "Check-in",
    desc: "We receive your device and log the issues."
  },
  {
    icon: <Search size={24} />,
    title: "Diagnostic",
    desc: "Free detailed inspection to find the root cause."
  },
  {
    icon: <Wrench size={24} />,
    title: "Expert Repair",
    desc: "Precision fix using high-quality parts."
  },
  {
    icon: <CheckCircle size={24} />,
    title: "Quality Check",
    desc: "Rigorous testing to ensure 100% functionality."
  },
  {
    icon: <Smile size={24} />,
    title: "Ready!",
    desc: "Pick up your device, good as new."
  }
];

const ProcessTimeline: React.FC = () => {
  return (
    <div className="relative">
      {/* Connecting Line (Desktop) */}
      <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-100 -z-10">
        <div className="h-full bg-gradient-to-r from-red-600 to-red-100 w-3/4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center text-gray-400 shadow-sm mb-4 transition-all duration-500 group-hover:border-red-100 group-hover:scale-110 group-hover:text-red-600 z-10 relative">
               {step.icon}
               <div className="absolute top-0 right-0 w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">
                 {index + 1}
               </div>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[150px]">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
