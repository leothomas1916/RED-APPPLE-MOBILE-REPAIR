import React from 'react';
import { 
  Smartphone, 
  Battery, 
  Monitor, 
  Droplets, 
  Cpu, 
  Settings,
  CheckCircle 
} from 'lucide-react';
import { SERVICES } from '../constants';
import RevealOnScroll from '../components/RevealOnScroll';

const ServiceCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  popular?: boolean 
}> = ({ title, description, icon, popular }) => (
  <div className={`relative group bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border ${popular ? 'border-red-200 shadow-md' : 'border-gray-100'} flex flex-col h-full`}>
    {popular && (
      <span className="absolute -top-3 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
        Popular
      </span>
    )}
    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-4 group-hover:scale-110 transition-transform">
      <div className="group-hover:animate-bounce">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{description}</p>
    
    <div className="flex items-center gap-1.5 mb-4 mt-auto">
       <CheckCircle size={14} className="text-green-500" />
       <span className="text-xs font-medium text-gray-500">90-day warranty included</span>
    </div>

    <div className="flex items-center justify-between border-t border-gray-50 pt-4 w-full">
      <span className="text-red-600 font-bold text-sm">Contact for Pricing</span>
    </div>
  </div>
);

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone size={24} />;
      case 'Battery': return <Battery size={24} />;
      case 'Monitor': return <Monitor size={24} />;
      case 'Droplets': return <Droplets size={24} />;
      case 'Cpu': return <Cpu size={24} />;
      default: return <Settings size={24} />;
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Premium Repair Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize in fixing the issues that matter most. From shattered screens to dying batteries, we handle it all with precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                icon={getIcon(service.iconName)}
                popular={service.popular}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}