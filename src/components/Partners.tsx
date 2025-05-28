
import React from 'react';
import { Handshake } from 'lucide-react';

const Partners = () => {
  const partners = Array.from({ length: 8 }, (_, index) => index + 1);

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
          <div className="w-24 h-1 bg-leaf mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Pwani Innovation Week is made possible through the collaboration and support of various organizations committed to fostering innovation and development in the coastal region.
          </p>
        </div>
        
        {/* Continuous carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of partners */}
            {partners.map((index) => (
              <div key={`first-${index}`} className="flex-shrink-0 w-64 mx-4">
                <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-40 card-hover">
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <Handshake className="h-12 w-12 mb-2" />
                    <div className="text-sm font-medium">Partner {index}</div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((index) => (
              <div key={`second-${index}`} className="flex-shrink-0 w-64 mx-4">
                <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-40 card-hover">
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <Handshake className="h-12 w-12 mb-2" />
                    <div className="text-sm font-medium">Partner {index}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Become a Partner</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join us in shaping the innovation landscape in coastal Kenya. Partner with Pwani Innovation Week 2025 and help us foster creativity, entrepreneurship, and sustainable development.
          </p>
          <button className="bg-leaf hover:bg-leaf-dark text-white py-3 px-8 rounded-md font-semibold transition-colors duration-300">
            Partnership Opportunities
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;
