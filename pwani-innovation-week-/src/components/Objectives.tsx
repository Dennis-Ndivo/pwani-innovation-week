
import React from 'react';

const Objectives = () => {
  return (
    <section id="objectives" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Objectives of the Event</h2>
          <div className="w-24 h-1 bg-coral mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
                alt="Innovation landscape" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Showcase Untapped Innovation Potential</h3>
              <p className="text-gray-600">
                To showcase untapped innovation potential across Pwani by highlighting successful youth-led ventures and creative solutions to local challenges.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
                alt="Coastal ecosystem" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Cultivate Innovation Ecosystem</h3>
              <p className="text-gray-600">
                To cultivate a vibrant innovation ecosystem within Pwani by fostering youth participation, equipping them with relevant skills and knowledge, and creating an environment that retains their talent for regional development.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
                alt="Coastal region aerial view" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Leverage Unique Coastal Economies</h3>
              <p className="text-gray-600">
                To leverage the region's unique coastal economies (Blue, Green, Orange, Digital economies) and rich biodiversity to attract domestic and foreign investment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
