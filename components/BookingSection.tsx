import React, { useState } from 'react';
import { 
  Smartphone, 
  Battery, 
  Droplets, 
  Monitor, 
  Camera, 
  Speaker, 
  Wifi, 
  Cpu, 
  ArrowRight,
  Calendar,
  User,
  Phone
} from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

const REPAIR_ISSUES = [
  { id: 'screen', label: 'Screen Replacement', icon: Smartphone },
  { id: 'battery', label: 'Battery Issue', icon: Battery },
  { id: 'water', label: 'Water Damage', icon: Droplets },
  { id: 'backglass', label: 'Back Glass', icon: Monitor },
  { id: 'camera', label: 'Camera Lens', icon: Camera },
  { id: 'speaker', label: 'Speaker / Mic', icon: Speaker },
  { id: 'network', label: 'Signal / WiFi', icon: Wifi },
  { id: 'other', label: 'Other Issue', icon: Cpu },
];

const BookingSection: React.FC = () => {
  const [selectedIssue, setSelectedIssue] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    model: '',
    date: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const issueLabel = REPAIR_ISSUES.find(i => i.id === selectedIssue)?.label || 'General Inquiry';
    const message = `*New Booking Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Device:* ${formData.model}%0A*Issue:* ${issueLabel}%0A*Preferred Date:* ${formData.date}`;
    
    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER.replace(/\D/g,'')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
        
        {/* Left Side: Issue Selection */}
        <div className="lg:w-1/2 p-8 md:p-12 bg-gray-50">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">1. What's the problem?</h3>
          <p className="text-gray-500 mb-8">Select the issue you are facing with your device.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
            {REPAIR_ISSUES.map((issue) => (
              <button
                key={issue.id}
                type="button"
                onClick={() => setSelectedIssue(issue.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-300 ${
                  selectedIssue === issue.id 
                    ? 'border-red-600 bg-red-50 text-red-700 shadow-md transform scale-105' 
                    : 'border-white bg-white text-gray-600 hover:border-red-100 hover:shadow-sm'
                }`}
              >
                <issue.icon 
                  size={28} 
                  className={`mb-3 ${selectedIssue === issue.id ? 'text-red-600' : 'text-gray-400'}`} 
                />
                <span className="text-xs font-bold text-center">{issue.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Details Form */}
        <div className="lg:w-1/2 p-8 md:p-12 bg-white relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-bl-full opacity-50 pointer-events-none"></div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-2">2. Your Details</h3>
          <p className="text-gray-500 mb-8">Fill in your info to schedule your repair.</p>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="98765 43210"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Device Model</label>
                <div className="relative">
                  <Smartphone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    required
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleInputChange}
                    placeholder="e.g. iPhone 13 Pro"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-gray-600"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-red-700 hover:shadow-red-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 mt-4"
            >
              Book Appointment <ArrowRight size={20} />
            </button>
            
            <p className="text-xs text-center text-gray-400 mt-4">
              Clicking book will open WhatsApp with your details pre-filled.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;