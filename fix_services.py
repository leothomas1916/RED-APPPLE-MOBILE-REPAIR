import re

with open('pages/Services.tsx', 'r') as f:
    code = f.read()

replacement = """      </section>

      {/* Doorstep Warning */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto bg-red-50 rounded-2xl p-6 sm:p-8 border border-red-100 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900 mb-1">We Do Not Offer Doorstep Repairs</h3>
                <p className="text-sm text-gray-700 leading-relaxed max-w-3xl">
                  Micro-soldering, OCA lamination, and laser glass removal require <strong>heavy anti-static lab equipment</strong> that cannot be carried in a backpack. Doorstep repairs often result in dust contamination and missing thermal seals.
                </p>
                <div className="mt-3 flex items-center gap-2 text-sm font-bold text-emerald-700 bg-emerald-100/50 w-fit px-3 py-1.5 rounded-lg border border-emerald-200">
                  <MapPin size={16} />
                  We offer secure Pickup & Drop within a 10KM radius
                </div>
              </div>
            </div>
            <Link to="/booking" className="whitespace-nowrap bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold shadow-sm transition-colors text-sm flex-shrink-0">
              Book Pickup or Drop-in
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      {/* Main Services Section */}"""

code = code.replace('      </section>\n\n      {/* Main Services Section */}', replacement)

if "import { Link } from 'react-router-dom';" not in code:
    code = code.replace("import React, { useState } from 'react';", "import React, { useState } from 'react';\nimport { Link } from 'react-router-dom';")

with open('pages/Services.tsx', 'w') as f:
    f.write(code)
