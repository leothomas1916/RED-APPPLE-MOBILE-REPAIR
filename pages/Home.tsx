import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Smartphone, 
  Tablet, 
  Laptop 
} from 'lucide-react';
import { REVIEWS } from '../constants';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
              Now offering same-day screen repairs
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Bring Your Device <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Back to Life
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Expert repair services for iPhones, Androids, and Laptops. fast turnaround, OEM quality parts, and a 90-day warranty on all fixes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services"
                className="px-8 py-4 bg-red-600 text-white rounded-full font-bold shadow-lg shadow-red-200 hover:bg-red-700 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                View Services <ArrowRight size={20} />
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold hover:border-gray-400 transition-all flex items-center justify-center"
              >
                Get a Quote
              </Link>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://picsum.photos/40/40?random=${i}`} alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-yellow-400 mb-1">★★★★★</div>
                <p className="text-gray-500"><span className="font-bold text-gray-900">1,000+</span> devices fixed</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-red-100 to-blue-50 rounded-3xl transform rotate-3 scale-95 -z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1597424214711-2051b72a0888?auto=format&fit=crop&q=80&w=1000" 
               alt="Professional technician repairing mobile phone" 
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
      </section>

      {/* Supported Models Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Devices We Repair</h2>
              <p className="text-gray-500 text-sm mt-1">Specialized service for all major brands</p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { name: 'Apple iPhone', Icon: Smartphone },
                { name: 'Samsung', Icon: Smartphone },
                { name: 'OnePlus', Icon: Smartphone },
                { name: 'Oppo / Vivo', Icon: Smartphone },
                { name: 'iPad', Icon: Tablet },
                { name: 'MacBook', Icon: Laptop },
                { name: 'Windows Laptop', Icon: Laptop },
                { name: 'Android Tablet', Icon: Tablet },
              ].map((brand, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-red-50 hover:shadow-md transition-all border border-gray-100 group cursor-default">
                    <div className="text-gray-400 group-hover:text-red-600 transition-colors mb-3">
                      <brand.Icon size={32} />
                    </div>
                    <span className="font-bold text-gray-800">{brand.name}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
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
      </section>
    </div>
  );
}