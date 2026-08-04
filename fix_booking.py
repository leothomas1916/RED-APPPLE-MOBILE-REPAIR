import re

with open('pages/Booking.tsx', 'r') as f:
    code = f.read()

replacement = """        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Book Your Repair</h2>
          <p className="text-lg text-gray-600">
            Select your issue and book an appointment in seconds. 
            <span className="block mt-2 font-bold text-red-600">Please note: We do NOT offer doorstep repair. All repairs are done in our anti-static lab. We offer pickup and drop within 10KM.</span>
          </p>
        </div>"""

code = code.replace('<div className="max-w-4xl mx-auto text-center mb-16">\n          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Book Your Repair</h2>\n          <p className="text-lg text-gray-600">\n            Select your issue and book an appointment in seconds. We\'ll get your device fixed today.\n          </p>\n        </div>', replacement)

with open('pages/Booking.tsx', 'w') as f:
    f.write(code)
