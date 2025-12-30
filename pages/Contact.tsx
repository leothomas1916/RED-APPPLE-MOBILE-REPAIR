import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ChevronDown,
  Facebook,
  Instagram 
} from 'lucide-react';
import { ADDRESS, PHONE_NUMBER } from '../constants';
import RevealOnScroll from '../components/RevealOnScroll';

const FAQS = [
  {
    question: "How long does a typical repair take?",
    answer: "Most common repairs, such as iPhone screen or battery replacements, are completed within 30 to 45 minutes. More complex issues like water damage or motherboard repairs may take 24-48 hours."
  },
  {
    question: "Do you provide a warranty on repairs?",
    answer: "Absolutely! We offer a comprehensive 90-day warranty on all our repairs. This covers any defects in the parts we used or the workmanship. Physical damage or liquid damage occurring after the repair is not covered."
  },
  {
    question: "Will I lose my data during the repair?",
    answer: "In the vast majority of cases, your data remains safe. We do not wipe your device during standard repairs like screens or batteries. However, we always strongly recommend backing up your device before bringing it in, just to be safe."
  },
  {
    question: "Do you repair Android devices or just Apple?",
    answer: "While we specialize in Apple products, our expert technicians are fully trained to repair Samsung Galaxy, Google Pixel, OnePlus, and other major Android brands. We also service iPads, MacBooks, and Windows laptops."
  },
  {
    question: "Do I need to make an appointment?",
    answer: "Walk-ins are always welcome! However, we recommend booking an appointment online to ensure the fastest service and to guarantee that the specific part for your device is reserved for you."
  }
];

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-4 flex items-center justify-between text-left focus:outline-none group hover:bg-gray-50 transition-colors rounded-lg"
      >
        <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-red-600' : 'text-gray-800 group-hover:text-red-600'}`}>
          {question}
        </span>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} text-gray-400 group-hover:text-red-600`}>
           <ChevronDown size={20} />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 leading-relaxed px-4 pb-5 pt-1">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="flex flex-col md:flex-row">
                <div className="bg-gray-900 text-white p-10 md:w-2/5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <MapPin className="text-red-500 flex-shrink-0" />
                        <p className="text-gray-300 text-sm">{ADDRESS}</p>
                      </div>
                      <div className="flex gap-4">
                        <Phone className="text-red-500 flex-shrink-0" />
                        <p className="text-gray-300 text-sm">{PHONE_NUMBER}</p>
                      </div>

                      <div className="flex gap-4 items-center">
                        <Facebook className="text-red-500 flex-shrink-0" />
                        <div className="flex gap-4 text-sm">
                            <a href="https://www.facebook.com/share/17ySmY8wrh/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
                              Facebook
                            </a>
                            <a href="https://www.facebook.com/share/17ySmY8wrh/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors font-medium">
                              Instagram
                            </a>
                        </div>
                      </div>

                      <a href="https://wa.me/8660663776" target="_blank" rel="noopener noreferrer" className="flex gap-4 items-center group cursor-pointer">
                        <div className="text-green-500 transition-transform transform group-hover:scale-110">
                          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="w-6 h-6">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                          <span className="absolute left-full ml-4 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
              Chat on WhatsApp
           </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-3/5 bg-gray-100 min-h-[400px]">
                   <iframe 
                     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.953360798727!2d77.6222756!3d12.9748349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17abf5978f99%3A0xf9ade41a529ebc08!2sRED%20APPLE%20MOBILE%20REPAIR!5e0!3m2!1sen!2sin!4v1767109446646!5m2!1sen!2sin" 
                     width="100%" 
                     height="100%" 
                     style={{border:0}} 
                     allowFullScreen 
                     loading="lazy" 
                     referrerPolicy="no-referrer-when-downgrade"
                     className="w-full h-full object-cover grayscale-0 hover:grayscale-0 transition-all duration-500"
                   ></iframe>
                </div>
              </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* FAQ Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Got questions? We've got answers. Here is everything you need to know about our repair process.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 md:p-6">
            {FAQS.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}