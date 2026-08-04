import React from 'react';
import BookingSection from '../components/BookingSection';
import RevealOnScroll from '../components/RevealOnScroll';

export default function Booking() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <RevealOnScroll>
                <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Book Your Repair</h2>
          <p className="text-lg text-gray-600">
            Select your issue and book an appointment in seconds. 
            <span className="block mt-2 font-bold text-red-600">Please note: We do NOT offer doorstep repair. All repairs are done in our anti-static lab. We offer pickup and drop within 10KM.</span>
          </p>
        </div>
        <BookingSection />
      </RevealOnScroll>
    </div>
  );
}