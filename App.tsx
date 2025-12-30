import React, { useState } from 'react';
import { 
  Smartphone, 
  Battery, 
  Monitor, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  CheckCircle, 
  ArrowRight,
  Droplets, 
  Cpu, 
  Settings, 
  ChevronDown, 
  Laptop, 
  Tablet,
  Facebook,
  Instagram,
  Hammer
} from 'lucide-react';
import { SERVICES, REVIEWS, COMPANY_NAME, ADDRESS, PHONE_NUMBER, PORTFOLIO_ITEMS } from './constants';
import { AppleLogo, AndroidLogo, GoogleLogo, SamsungLogo, IWatchIcon } from './components/BrandIcons';
import ChatWidget from './components/ChatWidget';
import StatsChart from './components/StatsChart';
import Header from './components/Header';
import RevealOnScroll from './components/RevealOnScroll';
import BookingSection from './components/BookingSection';
import DeviceModels from './components/DeviceModels';

// --- Constants & Helpers ---

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

const ServiceCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  popular?: boolean 
}> = ({ title, description, icon, popular }) => (
  <div className={`relative group bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border ${popular ? 'border-red-200 shadow-md' : 'border-gray-100'} flex flex-col h-full`}>
    {popular && (
      <span className="absolute -top-3 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
        Popular
      </span>
    )}
    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-4 group-hover:scale-110 transition-transform">
      <div className="group-hover:animate-bounce">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{description}</p>
    
    <div className="flex items-center gap-1.5 mb-4 mt-auto">
       <CheckCircle size={14} className="text-green-500" />
       <span className="text-xs font-medium text-gray-500">90-day warranty included</span>
    </div>

    <div className="flex items-center justify-between border-t border-gray-50 pt-4 w-full">
      <span className="text-red-600 font-bold text-sm">Contact for Pricing</span>
    </div>
  </div>
);

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="flex gap-4 group p-4 -mx-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl border border-transparent hover:border-red-50 cursor-default">
    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white group-hover:rotate-6 shadow-sm">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-gray-900 text-lg group-hover:text-red-600 transition-colors">{title}</h4>
      <p className="text-gray-600 text-sm mt-1 leading-relaxed">{text}</p>
    </div>
  </div>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white mb-4 transition-all duration-300 hover:shadow-md last:mb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors"
      >
        <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-red-600' : 'text-gray-900'}`}>
          {question}
        </span>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-red-600' : 'text-gray-400'}`}>
           <ChevronDown size={20} />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2">
            {answer}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone size={24} />;
      case 'Battery': return <Battery size={24} />;
      case 'Monitor': return <Monitor size={24} />;
      case 'Droplets': return <Droplets size={24} />;
      case 'Cpu': return <Cpu size={24} />;
      default: return <Settings size={24} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-red-100 selection:text-red-900 flex flex-col">
      
      {/* Header Component */}
      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white scroll-mt-24">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold border border-purple-200">
                <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                #1 ranked in Bangalore with same-day repair for iPhone Screen, Back Glass and Battery replacement.
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
                Bring Your Device <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                  Back to Life
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Precision diagnostics and expert restoration for smartphones and laptops. We utilize premium OEM-grade components for rapid turnaround, secured by our comprehensive 90-day warranty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="px-8 py-4 bg-red-600 text-white rounded-full font-bold shadow-lg shadow-red-200 hover:bg-red-700 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  View Services <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold hover:border-gray-400 transition-all flex items-center justify-center"
                >
                  Book a Repair
                </button>
              </div>
              
              <div className="flex items-center gap-8 pt-4">
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
              <div className="absolute inset-0 bg-gradient-to-tr from-red-100 to-blue-50 rounded-3xl transform rotate-3 scale-95 -z-10"></div>
              {/* Updated Image to Professional Technician Context */}
              <img 
                src="https://images.unsplash.com/photo-1597872253308-59714ebc0faa?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional technician repairing mobile phone screen with microscope and soldering iron" 
                className="rounded-3xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <p className="font-bold text-gray-900">Device Ready</p>
                    </div>
                  </div>
                  <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-full"></div>
                  </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Supported Models Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Models We Repair</h2>
                <p className="text-gray-600 text-lg">Select your device category to see detailed repair services</p>
            </div>
            
            <DeviceModels />
          </div>
        </RevealOnScroll>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-24">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Premium Repair Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We specialize in fixing the issues that matter most. From shattered screens to dying batteries, we handle it all with precision.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service) => (
                <ServiceCard 
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={getIcon(service.iconName)}
                  popular={service.popular}
                />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 scroll-mt-24">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Recent Work</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See the quality of our repairs firsthand. We take pride in restoring devices to their factory condition.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PORTFOLIO_ITEMS.map((item) => (
                <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg bg-white">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-red-400 text-xs font-bold uppercase tracking-wider mb-1">{item.category}</span>
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                      <p className="text-gray-300 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Why Us / Stats Section */}
      <section id="why-us" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Red Apple?</h2>
              <div className="space-y-8">
                <FeatureItem 
                  icon={<Clock size={24} />}
                  title="Same Day Repair"
                  text="Most screen and battery replacements are completed within 45 minutes while you wait."
                />
                <FeatureItem 
                  icon={<ShieldCheck size={24} />}
                  title="90-Day Warranty"
                  text="We stand by our work. If the part fails due to a defect, we replace it for free."
                />
                <FeatureItem 
                  icon={<Hammer size={24} />}
                  title="Expert Technicians"
                  text="Our team is certified to handle complex board-level repairs and micro-soldering."
                />
                <FeatureItem 
                  icon={<MapPin size={24} />}
                  title="Convenient Location"
                  text={`Located in the heart of the city at ${ADDRESS}. Easy parking available.`}
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <StatsChart />

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">Book Online & Save ₹500</h3>
                  <p className="text-gray-300 mb-6">Schedule your repair ahead of time to skip the line and get a discount.</p>
                  <button 
                    onClick={() => scrollToSection('booking')}
                    className="bg-white text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-10 translate-y-10">
                  <Smartphone size={200} />
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-24 border-t border-gray-100">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Book Your Repair</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select your issue and book an appointment in seconds. We'll get your device fixed today.
            </p>
          </div>
          <BookingSection />
        </RevealOnScroll>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <RevealOnScroll>
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

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 scroll-mt-24">
        <RevealOnScroll>
          <div className="max-w-5xl mx-auto mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">We're here to help. Reach out to us for quotes, appointments, or just to say hello.</p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
              {/* Info Side */}
              <div className="bg-gray-900 text-white p-10 md:p-12 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-red-600 rounded-full opacity-20 blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
                  
                  <div className="relative z-10 space-y-8">
                    <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 text-red-500">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-200 mb-1">Our Location</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{ADDRESS}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 text-red-500">
                            <Phone size={20} />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-200 mb-1">Phone Number</p>
                            <p className="text-gray-400 text-sm">{PHONE_NUMBER}</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 text-red-500">
                            <Facebook size={20} />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-200 mb-1">Social Media</p>
                            <div className="flex gap-4 mt-1">
                                <a href="https://www.facebook.com/share/17ySmY8wrh/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                                    <Facebook size={20} />
                                </a>
                                <a href="https://www.facebook.com/share/17ySmY8wrh/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                  </div>

                  <div className="relative z-10 mt-12">
                      <a href="https://wa.me/8660663776" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors group">
                          <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                          </div>
                          <span className="absolute left-full ml-4 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                              Chat on WhatsApp
                          </span>
                      </a>
                  </div>
              </div>

              {/* Map/Image Side */}
              <div className="bg-gray-100 md:w-3/5 h-[400px] md:h-auto min-h-[400px]">
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
        </RevealOnScroll>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-4">{COMPANY_NAME}</h2>
              <p className="text-gray-400 text-sm mt-2">© 2024 {COMPANY_NAME}. All rights reserved.</p>
              <p className="text-gray-500 text-xs mt-1 max-w-xs">{ADDRESS}</p>
              <p className="text-gray-500 text-xs mt-4 max-w-md leading-relaxed">
                {COMPANY_NAME} is an independent service provider for Apple and Android products. All Apple and Android product names, logos, and images are trademarks of Apple Inc and Android. We are not affiliated with or endorsed by Apple Inc and Android.
              </p>
            </div>
            <div className="flex gap-8 text-gray-400 text-sm">
              {['Home', 'Services', 'Portfolio', 'Why Us', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="hover:text-white transition-colors uppercase tracking-wider"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Widget */}
      <ChatWidget />
    </div>
  );
}