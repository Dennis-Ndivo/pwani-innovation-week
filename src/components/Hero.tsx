
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-orange-100/50 to-white overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse-bg"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse-bg"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text">Pwani Innovation</span>
                <span className="block text-[#F97316] mt-2">Week 2025</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-medium text-gray-700 mt-6">
                The Pwani We Desire: Youth, Culture, Peace and Innovation in the Decade of Action.
              </p>
              
              <p className="text-lg md:text-xl text-[#F97316] font-medium mt-4">
                14th - 18th October 2025 • Mombasa, Kenya
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a 
                href="#tickets" 
                className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-md text-lg font-semibold flex items-center gap-2 transition-colors duration-300"
              >
                Register Now <ArrowRight size={20} />
              </a>
              
              <a 
                href="#about" 
                className="border-2 border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
            
            <div ref={ref} className="pt-8 border-t border-orange-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className={`text-center transition-all duration-700 ${inView ? 'animate-count-up' : 'opacity-0'}`}>
                  <p className="text-4xl font-bold text-[#F97316]">3,000+</p>
                  <p className="text-gray-600 font-medium">Delegates</p>
                </div>
                
                <div className={`text-center transition-all duration-700 delay-300 ${inView ? 'animate-count-up' : 'opacity-0'}`}>
                  <p className="text-4xl font-bold text-[#F97316]">5</p>
                  <p className="text-gray-600 font-medium">Days</p>
                </div>
                
                <div className={`text-center transition-all duration-700 delay-500 ${inView ? 'animate-count-up' : 'opacity-0'}`}>
                  <p className="text-4xl font-bold text-[#F97316]">12+</p>
                  <p className="text-gray-600 font-medium">Sessions</p>
                </div>
                
                <div className={`text-center transition-all duration-700 delay-700 ${inView ? 'animate-count-up' : 'opacity-0'}`}>
                  <p className="text-4xl font-bold text-[#F97316]">50+</p>
                  <p className="text-gray-600 font-medium">Speakers</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-orange-100/30 rounded-2xl animate-pulse blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="People collaborating at innovation event" 
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
