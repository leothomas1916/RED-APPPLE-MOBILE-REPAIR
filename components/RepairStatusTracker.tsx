import React, { useState } from 'react';
import { Search, Package, CheckCircle, Clock, AlertCircle, Wrench, ShieldCheck, UserCheck } from 'lucide-react';

const DEMO_TICKETS: Record<string, {
  device: string;
  service: string;
  status: string;
  technician: string;
  readyTime: string;
  progress: number;
  stage: string;
  notes: string;
  warranty: string;
}> = {
  '#8832': {
    device: 'iPhone 15 Pro Max',
    service: 'TBK Laser Back Glass & MagSafe Coil Repair',
    status: 'Final Cleanroom Inspection',
    technician: 'Master Tech Rajesh V.',
    readyTime: 'Today, 4:30 PM',
    progress: 90,
    stage: 'Stage 4 of 5 • Quality Assurance',
    notes: 'Laser pulse completed. Original MagSafe wireless charging coil aligned & tested 100%.',
    warranty: '90-Day Coverage Active'
  },
  '#9104': {
    device: 'Samsung Galaxy S23 Ultra',
    service: 'Dynamic AMOLED 2X Curved Glass Lamination',
    status: 'Vacuum OCA Bubble Removal',
    technician: 'Tech S. Kumar',
    readyTime: 'Today, 6:00 PM',
    progress: 65,
    stage: 'Stage 3 of 5 • Screen Lamination',
    notes: 'Original 120Hz LTPO OLED panel separated cleanly. High-viscosity OCA glue curing.',
    warranty: '90-Day Screen Warranty'
  },
  '#9450': {
    device: 'MacBook Pro M2 16"',
    service: 'Logic Board Micro-Soldering (Power IC Replacement)',
    status: 'BGA Chip Reballing Complete',
    technician: 'Lead Engineer Anand',
    readyTime: 'Tomorrow, 11:30 AM',
    progress: 45,
    stage: 'Stage 2 of 5 • Circuit Repair',
    notes: '3.3V power line short circuit resolved. Power management IC replaced with OEM chip.',
    warranty: '6-Month Board Warranty'
  }
};

const RepairStatusTracker: React.FC = () => {
  const [ticketId, setTicketId] = useState('#8832');
  const [status, setStatus] = useState<'idle' | 'loading' | 'found' | 'error'>('found');
  const [result, setResult] = useState<any>(DEMO_TICKETS['#8832']);

  const queryTicket = (query: string) => {
    const key = query.trim().toUpperCase();
    const formattedKey = key.startsWith('#') ? key : `#${key}`;
    setTicketId(formattedKey);
    setStatus('loading');

    setTimeout(() => {
      if (DEMO_TICKETS[formattedKey]) {
        setStatus('found');
        setResult(DEMO_TICKETS[formattedKey]);
      } else if (key.length >= 3) {
        setStatus('found');
        setResult({
          device: 'iPhone 13 / 14 Series',
          service: 'OEM Screen & Battery Restoration',
          status: 'In Diagnostic Bay 2',
          technician: 'Red Apple Lab Tech',
          readyTime: 'In ~35 minutes',
          progress: 50,
          stage: 'Stage 2 of 5 • Active Repair',
          notes: 'Device diagnostics clear. Installing OEM-grade display with True Tone programming.',
          warranty: '90-Day Parts & Workmanship'
        });
      } else {
        setStatus('error');
      }
    }, 600);
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketId) return;
    queryTicket(ticketId);
  };

  return (
    <div className="bg-white/95 backdrop-blur-xl p-6 md:p-7 rounded-3xl shadow-2xl border border-gray-200/80 max-w-md w-full mx-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500"></div>
      
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-red-600 bg-red-50 px-2.5 py-1 rounded-full border border-red-100 inline-block mb-1">
            Real-Time Lab Tracker
          </span>
          <h3 className="text-lg font-black text-gray-900 flex items-center gap-2">
            <Package className="text-red-600" size={20} />
            Live Device Service Status
          </h3>
        </div>
        <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-bold px-2.5 py-1 rounded-full border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Lab Active
        </div>
      </div>

      <form onSubmit={handleTrack} className="relative mb-3">
        <input 
          type="text" 
          placeholder="Enter Ticket ID (#8832)" 
          className="w-full bg-gray-50 border border-gray-300 rounded-2xl px-4 py-3 pl-11 pr-12 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all font-mono uppercase text-sm font-bold text-gray-900 placeholder-gray-400"
          value={ticketId}
          onChange={(e) => setTicketId(e.target.value)}
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <button 
          type="submit"
          className="absolute right-2 top-1.5 bottom-1.5 bg-red-600 text-white px-3.5 rounded-xl font-bold hover:bg-red-700 transition-colors text-xs flex items-center gap-1 shadow-md shadow-red-500/20"
        >
          Track
        </button>
      </form>

      {/* Demo Quick Chips */}
      <div className="flex items-center gap-1.5 mb-4">
        <span className="text-[11px] font-bold text-gray-400">Try demo ticket:</span>
        {Object.keys(DEMO_TICKETS).map((id) => (
          <button
            key={id}
            onClick={() => queryTicket(id)}
            className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-lg border transition-all ${
              ticketId.toUpperCase() === id 
                ? 'bg-red-600 text-white border-red-600 shadow-sm' 
                : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-red-300 hover:bg-red-50'
            }`}
          >
            {id}
          </button>
        ))}
      </div>

      {status === 'loading' && (
        <div className="mt-4 flex flex-col items-center justify-center py-6 bg-gray-50 rounded-2xl border border-gray-100">
          <div className="w-7 h-7 border-3 border-red-200 border-t-red-600 rounded-full animate-spin"></div>
          <p className="text-xs text-gray-500 mt-2 font-medium">Querying Halasuru Service Lab Database...</p>
        </div>
      )}

      {status === 'found' && result && (
        <div className="bg-gray-900 text-white rounded-2xl p-4 border border-gray-800 shadow-inner space-y-3.5">
          <div className="flex justify-between items-start border-b border-gray-800 pb-2.5">
            <div>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{ticketId}</span>
              <h4 className="font-extrabold text-white text-sm leading-snug">{result.device}</h4>
              <p className="text-[11px] text-red-400 font-medium">{result.service}</p>
            </div>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider flex-shrink-0">
              {result.stage}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-gray-800/80 p-2.5 rounded-xl border border-gray-700/60">
              <span className="text-[10px] text-gray-400 block font-semibold">Assigned Specialist</span>
              <div className="flex items-center gap-1.5 font-bold text-gray-200 mt-0.5">
                <UserCheck size={13} className="text-amber-400" />
                <span className="truncate">{result.technician}</span>
              </div>
            </div>

            <div className="bg-gray-800/80 p-2.5 rounded-xl border border-gray-700/60">
              <span className="text-[10px] text-gray-400 block font-semibold">Ready For Pickup</span>
              <div className="flex items-center gap-1.5 font-bold text-emerald-400 mt-0.5">
                <Clock size={13} />
                <span>{result.readyTime}</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between text-[11px] font-bold">
              <span className="text-gray-300 flex items-center gap-1">
                <Wrench size={12} className="text-red-400" />
                {result.status}
              </span>
              <span className="text-amber-400 font-mono">{result.progress}%</span>
            </div>
            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden p-0.5 border border-gray-700">
              <div 
                className="bg-gradient-to-r from-red-500 to-amber-400 h-full rounded-full transition-all duration-700" 
                style={{ width: `${result.progress}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-black/40 p-2.5 rounded-xl border border-gray-800 text-[11px] text-gray-300 italic">
            "{result.notes}"
          </div>

          <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1 border-t border-gray-800">
            <span className="flex items-center gap-1 text-emerald-400 font-bold">
              <ShieldCheck size={12} />
              {result.warranty}
            </span>
            <a 
              href="https://wa.me/8660663776" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 underline font-bold"
            >
              Ask Tech on WhatsApp →
            </a>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 rounded-2xl p-4 border border-red-200 flex items-center gap-3 text-red-800 text-xs">
          <AlertCircle size={20} className="flex-shrink-0 text-red-600" />
          <div>
            <p className="font-bold">Ticket number not recognized</p>
            <p className="text-[11px] text-red-600">Try clicking demo tickets #8832, #9104, or #9450 above, or call us at 8660663776.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RepairStatusTracker;

