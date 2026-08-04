const fs = require('fs');

let code = fs.readFileSync('pages/Home.tsx', 'utf8');

const replacement = `      </section>

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
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">✕</div>
                      <p><strong>Dust Contamination:</strong> OCA lamination and internal exposure require cleanroom environments to prevent dust under the screen.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">✕</div>
                      <p><strong>Missing Equipment:</strong> TBK lasers, vacuum laminators, and EEPROM programmers weigh over 40kg and cannot be carried in a backpack.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">✕</div>
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

      {/* Comparison Table Section ("Why Red Apple Beats Others") */}`;

code = code.replace(
  `      {/* Comparison Table Section ("Why Red Apple Beats Others") */}`,
  replacement
);

fs.writeFileSync('pages/Home.tsx', code);
