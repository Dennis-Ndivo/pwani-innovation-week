
import React from 'react';
import {useInView} from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="pb-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Pwani Innovation Week</h2>
          <div className="w-24 h-1 bg-ocean mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed">
              Pwani Innovation Week is a consolidated effort by Swahilipot Hub Foundation and its partners to help create a widespread culture of innovation and stimulate the innovation ecosystem in the Coastal (Pwani) region of eastern Africa.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              The event brings together innovators, entrepreneurs, investors, policymakers, and other stakeholders to showcase innovations, share knowledge, and build partnerships that can drive sustainable development in the region.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              Through a series of workshops, panels, exhibitions, and networking sessions, Pwani Innovation Week aims to inspire the next generation of innovators and provide them with the tools, resources, and connections they need to succeed.
            </p>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" 
                alt="Innovation concept with lightbulb" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Tech innovation" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Circuit board innovation" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Programming innovation" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
            <div className="text-coral text-3xl font-bold mb-2">Hackathons</div>
            <p className="text-gray-700">
              Bringing together developers, designers, and innovators to solve real-world challenges facing coastal communities.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
            <div className="text-ocean text-3xl font-bold mb-2">Panel Sessions</div>
            <p className="text-gray-700">
              Engaging discussions featuring industry experts, policymakers, and thought leaders on key innovation topics.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
            <div className="text-purple text-3xl font-bold mb-2">Plenary Sessions</div>
            <p className="text-gray-700">
              In-depth conversations and presentations on innovation trends, challenges, and opportunities in the region.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
            <div className="text-leaf text-3xl font-bold mb-2">Networking</div>
            <p className="text-gray-700">
              Creating connections between innovators, investors, and support organizations to foster collaboration.
            </p>
          </div>
        </div>

        <div className="text-center my-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pwani Innovation Week in Numbers</h2>
          <div className="w-24 h-1 bg-ocean mx-auto"></div>
        </div>

        <div ref={ref} className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
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
    </section>
  );
};

export default About;
