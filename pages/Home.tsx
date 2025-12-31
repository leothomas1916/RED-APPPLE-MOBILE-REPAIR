import React from 'react';
import { 
  ArrowRight, 
  CheckCircle 
} from 'lucide-react';
import { REVIEWS } from '../constants';
import RevealOnScroll from '../components/RevealOnScroll';
import RepairStatusTracker from '../components/RepairStatusTracker';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ProcessTimeline from '../components/ProcessTimeline';
import DeviceModels from '../components/DeviceModels';

export default function Home() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
         {/* Decorative Background Elements */}
         <div className="absolute top-20 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <RevealOnScroll>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold border border-purple-200">
                <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                #1 ranked in Bangalore with same-day repair for iPhone Screen, Back Glass and Battery replacement.
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 tracking-tight">
                Bring Your Device <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                  Back to Life
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Precision diagnostics and expert restoration for smartphones and laptops. We utilize premium OEM-grade components for rapid turnaround, secured by our comprehensive 90-day warranty.
              </p>
              
              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#services"
                  onClick={(e) => handleScroll(e, 'services')}
                  className="px-8 py-4 bg-red-600 text-white rounded-full font-bold shadow-lg shadow-red-200 hover:bg-red-700 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  View Services <ArrowRight size={20} />
                </a>
                <a 
                  href="#booking"
                  onClick={(e) => handleScroll(e, 'booking')}
                  className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold hover:border-gray-400 transition-all flex items-center justify-center hover:bg-gray-50"
                >
                  Book Repair
                </a>
              </div>
              
              <div className="flex items-center gap-8 pt-4 border-t border-gray-100 w-fit pr-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://picsum.photos/40/40?random=${i}`} alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-yellow-400 mb-1">★★★★★</div>
                  <p className="text-gray-500"><span className="font-bold text-gray-900">6500+</span> devices fixed</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Floating Status Tracker */}
              <div className="absolute -top-10 -right-4 z-20 transform rotate-2 hidden xl:block hover:rotate-0 transition-transform duration-300">
                  <RepairStatusTracker />
              </div>

              {/* Main Hero Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2070" 
                    alt="Professional technician repairing mobile device with precision tools" 
                    className="w-full object-cover h-[400px] lg:h-[600px] transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                          <CheckCircle size={24} />
                      </div>
                      <div>
                          <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Current Status</p>
                          <p className="font-bold text-gray-900">Technicians Online</p>
                      </div>
                  </div>
              </div>

              {/* Mobile View of Tracker */}
              <div className="xl:hidden mt-8">
                  <RepairStatusTracker />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Repair Process Timeline Section (Unique Idea) */}
      <section className="py-20 bg-white border-b border-gray-50">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">How We Fix It</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Transparent, fast, and reliable. Track your device's journey from broken to brand new.
                </p>
             </div>
             <ProcessTimeline />
          </div>
        </RevealOnScroll>
      </section>

      {/* Before & After Interactive Section (Unique Idea) */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <RevealOnScroll>
                      <div>
                          <h2 className="text-4xl font-bold mb-6">See the Difference</h2>
                          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                              Don't just take our word for it. Slide to see how we restore devices to their original glory using OEM-grade parts and precision tools.
                          </p>
                          
                          <div className="space-y-6">
                              <div className="flex items-start gap-4">
                                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-lg">1</div>
                                  <div>
                                      <h4 className="font-bold text-xl mb-1">Precision Laser Removal</h4>
                                      <p className="text-gray-400">We use advanced lasers to remove broken back glass without opening the phone.</p>
                                  </div>
                              </div>
                              <div className="flex items-start gap-4">
                                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-lg">2</div>
                                  <div>
                                      <h4 className="font-bold text-xl mb-1">True Tone Retention</h4>
                                      <p className="text-gray-400">We transfer your screen's original data so you don't lose FaceID or True Tone features.</p>
                                  </div>
                              </div>
                          </div>

                          <a href="#portfolio" className="inline-block mt-10 text-white font-bold border-b-2 border-red-600 pb-1 hover:text-red-500 transition-colors">
                              View Full Portfolio
                          </a>
                      </div>
                  </RevealOnScroll>

                  <RevealOnScroll className="delay-200">
                      <div className="relative">
                          {/* Decorative dots */}
                          <div className="absolute -top-10 -right-10 grid grid-cols-5 gap-2 opacity-20">
                              {[...Array(25)].map((_,i) => <div key={i} className="w-2 h-2 bg-red-500 rounded-full"></div>)}
                          </div>
                          
                          <BeforeAfterSlider 
                            beforeImage="https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&q=80&w=1000"
                            afterImage="https://images.unsplash.com/photo-1512054502232-10a0a035d672?auto=format&fit=crop&q=80&w=1000"
                            alt="iPhone Screen Repair"
                          />
                          <p className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
                              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                              Drag slider to compare
                          </p>
                      </div>
                  </RevealOnScroll>
              </div>
          </div>
      </section>

      {/* Supported Models Section - REPLACED WITH DETAILED LIST */}
      <section className="py-16 bg-white border-b border-gray-100">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Devices We Repair</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                   Select your device type to see the full list of supported models and services.
                </p>
            </div>
            
            <DeviceModels />
          </div>
        </RevealOnScroll>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {REVIEWS.map((review) => (
                <div key={review.id} className="bg-gray-50 p-6 rounded-2xl">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(review.rating)].map((_, i) => <span key={i}>★</span>)}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                        {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-900">{review.name}</p>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}