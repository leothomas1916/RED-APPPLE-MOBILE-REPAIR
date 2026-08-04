import React, { useState } from 'react';
import { Sparkles, Cpu, Clock, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, RefreshCw, Wrench, BrainCircuit } from 'lucide-react';
import { getAIDiagnosticEstimate, AIDiagnosticResult } from '../services/geminiService';
import { Link } from 'react-router-dom';

export default function AIDiagnosticTool() {
  const [brand, setBrand] = useState('Apple iPhone');
  const [modelName, setModelName] = useState('iPhone 14 Pro');
  const [issueDescription, setIssueDescription] = useState('Screen is cracked and flickers green, touch still works');
  const [symptoms, setSymptoms] = useState('Back glass intact, battery health 84%');
  const [highThinking, setHighThinking] = useState(true);
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIDiagnosticResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDiagnose = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!modelName.trim() || !issueDescription.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const res = await getAIDiagnosticEstimate({
        brand,
        modelName,
        issueDescription,
        symptoms,
        highThinking
      });
      setResult(res);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to analyze device issue. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-gray-800 relative overflow-hidden my-8">
      {/* Background glow effects */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-gray-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles size={14} className="text-red-400 animate-pulse" />
            <span>Gemini AI Smart Diagnostic Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Instant AI Device Diagnostic & Price Estimator
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-1 max-w-2xl">
            Describe your device issue and let our Gemini-powered technical intelligence analyze likely hardware root causes, repair levels, and estimated Halasuru lab pricing.
          </p>
        </div>

        <div className="hidden lg:flex items-center gap-3 bg-gray-900/80 border border-gray-800 p-3 rounded-2xl shrink-0">
          <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center">
            <BrainCircuit size={20} />
          </div>
          <div className="text-left">
            <span className="text-[11px] font-bold text-gray-400 block">AI Reasoning Engine</span>
            <span className="text-xs font-black text-purple-300">
              {highThinking ? 'gemini-3.1-pro-preview' : 'gemini-3.6-flash'}
            </span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Form Inputs */}
        <form onSubmit={handleDiagnose} className="lg:col-span-5 space-y-4 bg-gray-900/60 p-5 sm:p-6 rounded-2xl border border-gray-800">
          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
              Brand / Manufacturer
            </label>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full bg-gray-950 text-white text-xs sm:text-sm px-4 py-3 rounded-xl border border-gray-800 focus:outline-none focus:border-red-500 transition-colors"
            >
              <option value="Apple iPhone">Apple iPhone</option>
              <option value="Samsung">Samsung Galaxy</option>
              <option value="OnePlus">OnePlus</option>
              <option value="Google Pixel">Google Pixel</option>
              <option value="Apple MacBook">Apple MacBook</option>
              <option value="iPad">Apple iPad</option>
              <option value="Xiaomi / Poco">Xiaomi / Poco</option>
              <option value="Vivo / Oppo / Realme">Vivo / Oppo / Realme</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
              Exact Device Model *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. iPhone 14 Pro Max / S23 Ultra"
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
              className="w-full bg-gray-950 text-white text-xs sm:text-sm px-4 py-3 rounded-xl border border-gray-800 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
              Primary Issue / Fault *
            </label>
            <textarea
              required
              rows={3}
              placeholder="e.g. Dropped in water, screen flickering green lines, no sound from ear speaker..."
              value={issueDescription}
              onChange={(e) => setIssueDescription(e.target.value)}
              className="w-full bg-gray-950 text-white text-xs sm:text-sm p-3.5 rounded-xl border border-gray-800 focus:outline-none focus:border-red-500 transition-colors resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
              Additional Symptoms (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Phone gets hot near camera, charging port loose"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="w-full bg-gray-950 text-white text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-gray-800 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>

          {/* High Thinking Mode Toggle */}
          <div className="bg-purple-950/40 border border-purple-800/60 p-3.5 rounded-xl flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <BrainCircuit size={20} className="text-purple-400 shrink-0 animate-pulse" />
              <div>
                <span className="text-xs font-extrabold text-purple-200 block">High Thinking Reasoning</span>
                <span className="text-[10px] text-gray-300 block">Uses gemini-3.1-pro-preview with ThinkingLevel.HIGH for complex motherboard & hardware analysis</span>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer shrink-0">
              <input
                type="checkbox"
                checked={highThinking}
                onChange={(e) => setHighThinking(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-extrabold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 text-sm transform hover:-translate-y-0.5 active:scale-95 disabled:opacity-60"
          >
            {loading ? (
              <>
                <RefreshCw size={18} className="animate-spin text-white" />
                <span>Analyzing Technical Telemetry...</span>
              </>
            ) : (
              <>
                <Sparkles size={18} />
                <span>Run Gemini AI Diagnostic</span>
              </>
            )}
          </button>
        </form>

        {/* Results Panel */}
        <div className="lg:col-span-7 bg-gray-950/80 p-6 sm:p-7 rounded-2xl border border-gray-800 min-h-[380px] flex flex-col justify-between">
          {error && (
            <div className="bg-red-950/50 border border-red-800/80 p-4 rounded-xl text-red-300 text-xs flex items-start gap-2.5">
              <AlertTriangle size={18} className="shrink-0 text-red-400 mt-0.5" />
              <div>
                <span className="font-bold block">Diagnostic Request Note</span>
                <span>{error}</span>
              </div>
            </div>
          )}

          {!result && !loading && !error && (
            <div className="my-auto text-center py-12 px-4 space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center mx-auto">
                <Wrench size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-200">Ready for Technical Telemetry Analysis</h3>
              <p className="text-xs text-gray-400 max-w-md mx-auto">
                Enter your device details on the left and click "Run Gemini AI Diagnostic" to receive instant technical root-cause insights and estimated lab repair pricing.
              </p>
            </div>
          )}

          {loading && (
            <div className="my-auto text-center py-16 space-y-4">
              <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-sm font-extrabold text-red-400 animate-pulse">
                Evaluating Hardware Circuitry & OCA Glass Lamination Database...
              </p>
              <p className="text-xs text-gray-500">
                Generating technical breakdown for {brand} {modelName}
              </p>
            </div>
          )}

          {result && !loading && (
            <div className="space-y-6 animate-fade-in">
              {/* Top Banner Cost & Time */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-emerald-950/60 to-gray-900 border border-emerald-800/50 p-4 rounded-2xl">
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-emerald-400 block mb-1">
                    Estimated Lab Cost Range
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-300">
                    ₹{result.estimatedCostMinINR.toLocaleString('en-IN')} – ₹{result.estimatedCostMaxINR.toLocaleString('en-IN')}
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1 block">
                    Includes parts & 90-day lab warranty
                  </span>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-4 rounded-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-extrabold text-gray-400 block">
                      Turnaround Time
                    </span>
                    <span className="text-base font-black text-white">{result.estimatedTimeMinutes}</span>
                    <span className="text-[10px] text-gray-400 block">Same-day express service</span>
                  </div>
                </div>
              </div>

              {/* Repair Level & Diagnosis */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Technical Classification
                  </span>
                  <span className="bg-red-600/30 border border-red-500/40 text-red-300 text-xs font-black px-3 py-0.5 rounded-full">
                    {result.repairLevel}
                  </span>
                </div>

                <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
                  <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    Diagnostic Analysis & Root Cause
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {result.possibleDiagnosis}
                  </p>
                </div>
              </div>

              {/* Key Parts & Privacy */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-900/60 p-3.5 rounded-xl border border-gray-800">
                  <span className="text-[11px] font-bold text-gray-400 block mb-1.5 uppercase tracking-wider">
                    Required Parts & Equipment
                  </span>
                  <ul className="space-y-1">
                    {result.keyPartsNeeded.map((part, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                        <span>{part}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-950/30 border border-emerald-900/50 p-3.5 rounded-xl">
                  <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1 mb-1">
                    <ShieldCheck size={14} /> Zero-Password Mode
                  </span>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    {result.privacyAdvice}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-gray-800">
                <span className="text-xs text-gray-400 text-center sm:text-left">
                  Location: Halasuru Metro Pillar 125, Bengaluru
                </span>
                <Link
                  to="/booking"
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-2.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-xs"
                >
                  <span>Book Appointment for {modelName}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
