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
  Phone,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';

const REPAIR_ISSUES = [
  { 
    id: 'screen', 
    label: 'Screen Replacement', 
    icon: Smartphone, 
    description: 'Fix cracked glass, dead pixels, or touch response issues.' 
  },
  { 
    id: 'battery', 
    label: 'Battery Issue', 
    icon: Battery, 
    description: 'For devices draining fast, not charging, or shutting down.' 
  },
  { 
    id: 'water', 
    label: 'Water Damage', 
    icon: Droplets, 
    description: 'Chemical cleaning for liquid contact and corrosion removal.' 
  },
  { 
    id: 'backglass', 
    label: 'Back Glass', 
    icon: Monitor, 
    description: 'Laser removal of shattered back glass panels.' 
  },
  { 
    id: 'camera', 
    label: 'Camera Lens', 
    icon: Camera, 
    description: 'Repair blurry photos, broken lenses, or focus issues.' 
  },
  { 
    id: 'speaker', 
    label: 'Speaker / Mic', 
    icon: Speaker, 
    description: 'Fix low volume, distorted sound, or microphone failure.' 
  },
  { 
    id: 'network', 
    label: 'Signal / WiFi', 
    icon: Wifi, 
    description: 'Solve weak signal, WiFi dropping, or Bluetooth connectivity.' 
  },
  { 
    id: 'other', 
    label: 'Other Issue', 
    icon: Cpu, 
    description: 'Motherboard diagnostics, button repair, or unknown errors.' 
  },
];

const BookingSection: React.FC = () => {
  const [selectedIssue, setSelectedIssue] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    model: '',
    date: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const issueLabel = REPAIR_ISSUES.find(i => i.id === selectedIssue)?.label || 'General Inquiry';
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
        const data = {
            name: formData.name,
            phone: formData.phone,
            model: formData.model,
            date: formData.date,
            issue: issueLabel,
            _subject: `New Repair Booking: ${formData.model} - ${issueLabel}`
        };
        
        // Fire and forget formspree for demo purposes
        fetch("https://formspree.io/f/xzdblzgo", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify(data)
        }).catch(err => console.log('Email API skipped or failed'));

        setStatus('success');
        setFormData({ name: '', phone: '', model: '', date: '' });
        setSelectedIssue('');
        
    } catch (error) {
        setStatus('error');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="rounded-3xl shadow-2xl border border-gray-100 flex flex-col lg:flex-row bg-white overflow-hidden">
        
        {/* Left Side: Issue Selection */}
        <div className="lg:w-1/2 p-8 md:p-12 bg-gray-50">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">1. What's the problem?</h3>
          <p className="text-gray-500 mb-8">Hover over an icon to see details.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
            {REPAIR_ISSUES.map((issue) => (
              <button
                key={issue.id}
                type="button"
                onClick={() => setSelectedIssue(issue.id)}
                className={`group relative flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-300 ${
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

                {/* Tooltip */}
                <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                    <div className="bg-gray-900 text-white text-xs p-3 rounded-xl shadow-xl text-center relative border border-gray-700">
                        {issue.description}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Details Form */}
        <div className="lg:w-1/2 p-8 md:p-12 bg-white relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-bl-full opacity-50 pointer-events-none"></div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-2">2. Your Details</h3>
          <p className="text-gray-500 mb-8">Fill in your info to schedule your repair.</p>

          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center h-64 text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                    <CheckCircle size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Booking Received!</h4>
                <p className="text-gray-600 mb-6">We have received your request. Our technician will call you shortly to confirm the appointment.</p>
                <button 
                    onClick={() => setStatus('idle')}
                    className="text-red-600 font-semibold hover:text-red-700 underline"
                >
                    Book another repair
                </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Your Name</label>
                  <div className="relative transition-all duration-300 focus-within:transform focus-within:-translate-y-1">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" size={20} />
                      <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      disabled={status === 'submitting'}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all disabled:opacity-50 text-gray-900 placeholder-gray-400 font-medium"
                      />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Phone Number</label>
                      <div className="relative transition-all duration-300 focus-within:transform focus-within:-translate-y-1">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" size={20} />
                      <input
                          required
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="98765 43210"
                          disabled={status === 'submitting'}
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all disabled:opacity-50 text-gray-900 placeholder-gray-400 font-medium"
                      />
                      </div>
                  </div>
                  
                  <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Device Model</label>
                      <div className="relative transition-all duration-300 focus-within:transform focus-within:-translate-y-1">
                      <Smartphone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" size={20} />
                      <input
                          required
                          type="text"
                          name="model"
                          value={formData.model}
                          onChange={handleInputChange}
                          placeholder="e.g. iPhone 13 Pro"
                          disabled={status === 'submitting'}
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all disabled:opacity-50 text-gray-900 placeholder-gray-400 font-medium"
                      />
                      </div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Preferred Date</label>
                  <div className="relative transition-all duration-300 focus-within:transform focus-within:-translate-y-1">
                      <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" size={20} />
                      <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      disabled={status === 'submitting'}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all text-gray-900 disabled:opacity-50 font-medium"
                      />
                  </div>
                </div>

                {status === 'error' && (
                    <div className="flex items-center gap-3 text-red-700 bg-red-50 p-4 rounded-2xl text-sm border border-red-100 animate-pulse">
                        <AlertCircle size={20} className="flex-shrink-0" />
                        <span>Something went wrong. Please try again or call us directly.</span>
                    </div>
                )}

                <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-red-200 hover:shadow-red-300 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 mt-6 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                >
                {status === 'submitting' ? (
                    <>
                        <Loader2 size={24} className="animate-spin" />
                        <span>Processing...</span>
                    </>
                ) : (
                    <>
                        <span>Book Appointment</span>
                        <ArrowRight size={20} />
                    </>
                )}
                </button>
                
                <p className="text-center text-xs text-gray-400 mt-4">
                  By booking, you agree to our service terms. No payment required now.
                </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingSection;