import React, { useState } from 'react';
import { Search, Package, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const RepairStatusTracker: React.FC = () => {
  const [ticketId, setTicketId] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'found' | 'error'>('idle');
  const [result, setResult] = useState<any>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketId) return;

    setStatus('loading');
    
    // Simulating an API call
    setTimeout(() => {
      if (ticketId.length > 3) {
        setStatus('found');
        setResult({
          device: 'iPhone 13 Pro',
          service: 'Screen Replacement',
          status: 'Quality Check Passed',
          readyTime: 'Today, 5:00 PM',
          progress: 80
        });
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 max-w-md w-full mx-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-orange-500"></div>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Package className="text-red-600" size={24} />
          Track Your Repair
        </h3>
        <p className="text-sm text-gray-500 mt-1">Enter your Ticket ID to see live updates.</p>
      </div>

      <form onSubmit={handleTrack} className="relative">
        <input 
          type="text" 
          placeholder="Enter Ticket ID (e.g., #8832)" 
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pl-11 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all font-mono uppercase"
          value={ticketId}
          onChange={(e) => setTicketId(e.target.value)}
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <button 
          type="submit"
          className="absolute right-2 top-2 bg-gray-900 text-white p-1.5 rounded-lg hover:bg-red-600 transition-colors"
        >
          <Search size={16} />
        </button>
      </form>

      {status === 'loading' && (
        <div className="mt-6 flex flex-col items-center justify-center py-4">
          <div className="w-8 h-8 border-4 border-red-200 border-t-red-600 rounded-full animate-spin"></div>
          <p className="text-xs text-gray-400 mt-2">Fetching details...</p>
        </div>
      )}

      {status === 'found' && result && (
        <div className="mt-6 bg-green-50 rounded-xl p-4 border border-green-100 animate-fade-in-up">
            <div className="flex justify-between items-start mb-3">
                <div>
                    <h4 className="font-bold text-gray-800 text-sm">{result.device}</h4>
                    <p className="text-xs text-gray-500">{result.service}</p>
                </div>
                <span className="bg-green-200 text-green-800 text-[10px] font-bold px-2 py-1 rounded uppercase">
                    Ready Soon
                </span>
            </div>
            
            <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-600 shadow-sm">
                    <CheckCircle size={20} />
                </div>
                <div>
                    <p className="text-sm font-bold text-gray-900">{result.status}</p>
                    <p className="text-xs text-gray-500">Est. Pickup: {result.readyTime}</p>
                </div>
            </div>

            <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                <div 
                    className="bg-green-500 h-full rounded-full transition-all duration-1000" 
                    style={{ width: `${result.progress}%` }}
                ></div>
            </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-6 bg-red-50 rounded-xl p-4 border border-red-100 flex items-center gap-3 text-red-700 animate-fade-in-up">
            <AlertCircle size={20} />
            <p className="text-sm">Ticket not found. Please try again.</p>
        </div>
      )}
    </div>
  );
};

export default RepairStatusTracker;
