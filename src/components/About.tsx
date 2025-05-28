
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Pwani Innovation Week 2025</h2>
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

              Pwani Innovation Week (PIW) is a Pwani-led and youth-driven
              annual convening that has become a
              point of convergence for youth,
              entrepreneurs, investors, creatives,
              and changemakers to co-create
              localized solutions for sustainable
              growth in Kenya’s coast.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              Borrowing from the last edition
              powered by the theme “The Pwani We
              Desire: Youth, Culture, Peace and
              Innovation in the Decade of Action”, this
              year’s event, informed by youth agency,
              innovation & Sustainability of Coastal
              Economies will be re-imagining Pwani
              within and beyond the SDG goals and
              Kenya Vision 2030. It will also set a
              more localized mood by focusing on
              homegrown SMEs and untapped
              opportunities across all coastal
              economies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              This year’s edition also approaches
              Pwani more deliberately, position
              coastal cultures as catalysts for
              growth. With Kenya’s Blue Economy
              agenda gaining traction, PIW 2025
              will align with national efforts to
              harness marine and coastal resources
              sustainably.

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

        <div className="text-center my-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How to engage during PIW 2025</h2>
          <div className="w-24 h-1 bg-ocean mx-auto"></div>
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

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
            <div className="text-coral text-3xl font-bold mb-2">Exhibitions</div>
            <p className="text-gray-700">
              Mashinani entrepreneurs and partners
              exhibit and amplify their work, reaching
              various audiences across the week.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
            <div className="text-ocean text-3xl font-bold mb-2">Impact-led Sessions</div>
            <p className="text-gray-700">
              Well-curated daily sessions facilitated and
              driven by leaders across multiple industries
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
            <div className="text-purple text-3xl font-bold mb-2">Utamaduni</div>
            <p className="text-gray-700">
              Enjoy a touch of coastal cultures at the
              Utamaduni village, and get a feel of what it
              means to be Pwani.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
            <div className="text-leaf text-3xl font-bold mb-2">Fun and Entertainment</div>
            <p className="text-gray-700">
              To complement the transformative
              conversations and insightful keynote
              addresses, the Creative Arts Department at
              Swahilipot Hub Foundation will enhance the
              week with engaging entertainment, leading
              up to the special Pwani Gat Talent evening
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
            <div className="text-coral text-3xl font-bold mb-2">Hackathons</div>
            <p className="text-gray-700">
              Driving digital transformations by providing
              digital solutions to local problems.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
            <div className="text-ocean text-3xl font-bold mb-2">Keynote Addresses</div>
            <p className="text-gray-700">
              Engaging keynotes by renowned players
              across different sectors in public and private
              service at the head of transformative change
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
            <div className="text-purple text-3xl font-bold mb-2">Field Tours</div>
            <p className="text-gray-700">
              Diverting from the norm, this year’s edition
              will include field tours, driven by young tour
              guides trained at Swahilipot Hub
              Foundation’s Mombasa Tourism Innovation
              Lab. Tours will also include innovation and
              tech hubs as well.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
            <div className="text-leaf text-3xl font-bold mb-2">Pre-event Engagements</div>
            <p className="text-gray-700">
              To ensure an inclusive and impactful Pwani
              Innovation Week, pre-event conversations
              will be held across the Pwani region to
              engage partners, understand needs, and
              gather insights.
            </p>
          </div>
        </div>

        <div className="text-center my-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pwani Innovation Week 2024 in Numbers</h2>
          <div className="w-24 h-1 bg-ocean mx-auto"></div>
        </div>

        <div ref={ref} className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className={`text-center transition-all duration-700 ${inView ? 'animate-count-up' : 'opacity-0'}`}>
            <p className="text-4xl font-bold text-[#F97316]">2,000</p>
            <p className="text-gray-600 font-medium">Participants</p>
          </div>

          <div className={`text-center transition-all duration-700 delay-300 ${inView ? 'animate-count-up' : 'opacity-0'}`}>
            <p className="text-4xl font-bold text-[#F97316]">10</p>
            <p className="text-gray-600 font-medium">Plenary Sessions</p>
          </div>

          <div className={`text-center transition-all duration-700 delay-500 ${inView ? 'animate-count-up' : 'opacity-0'}`}>
            <p className="text-4xl font-bold text-[#F97316]">28</p>
            <p className="text-gray-600 font-medium">Keynote Speakers</p>
          </div>

          <div className={`text-center transition-all duration-700 delay-700 ${inView ? 'animate-count-up' : 'opacity-0'}`}>
            <p className="text-4xl font-bold text-[#F97316]">6</p>
            <p className="text-gray-600 font-medium">Breakout Sessions</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
