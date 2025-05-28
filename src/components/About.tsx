
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Pwani Innovation Week</h2>
          <div className="w-24 h-1 bg-ocean mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed">
              PIW is a Pwani-led and youth-driven annual convening that has become a point of convergence for youth, entrepreneurs, investors, creatives, and changemakers to co-create localized solutions for sustainable growth in Kenya's coast.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              The event, which is entering its 6th edition, has over the years transitioned to fit the entrepreneurial and innovation ecosystem of Pwani squarely. This has turned it into a much-awaited annual forum that addresses emerging needs of the region by advocating for synergy-led discourses.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              Building on the theme "Pwani Re-imagined: Youth Agency, Innovation & Sustainability of Coastal Economies", this year's event will be re-imagining Pwani within and beyond the SDG goals and Kenya Vision 2030, focusing on homegrown SMEs and untapped opportunities across all coastal economies.
            </p>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Innovation hackathon" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Panel discussions" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="Plenary sessions" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Networking events" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Hackathon" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <div className="text-coral text-3xl font-bold mb-2">Hackathons</div>
              <p className="text-gray-700">
                Driving digital transformations by providing digital solutions to local problems facing coastal communities.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Panel Sessions" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <div className="text-ocean text-3xl font-bold mb-2">Impact-led Sessions</div>
              <p className="text-gray-700">
                Well-curated daily sessions facilitated and driven by leaders across multiple industries.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="Plenary Sessions" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <div className="text-purple text-3xl font-bold mb-2">Keynote Addresses</div>
              <p className="text-gray-700">
                Engaging keynotes by renowned players across different sectors driving transformative change.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Networking" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <div className="text-leaf text-3xl font-bold mb-2">Utamaduni Village</div>
              <p className="text-gray-700">
                Enjoy a touch of coastal cultures at the Utamaduni village and experience what it means to be Pwani.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
