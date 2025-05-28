
import React from 'react';

const Objectives = () => {
  return (
    <section id="objectives" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">This Year's Goals</h2>
          <div className="w-24 h-1 bg-coral mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
                alt="Amplify coastal businesses" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Amplify (Paza)</h3>
              <p className="text-gray-600">
                Allow SMEs driving coastal economies to showcase and amplify their work. A pitch deck for startups to access investors and seed fund.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
                alt="Empower youth" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Empower (Inua)</h3>
              <p className="text-gray-600">
                Situate youth at the center of change and improved livelihoods. Empower youth with new skills and connect them with opportunities.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
                alt="Connect stakeholders" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Connect (Unganisha)</h3>
              <p className="text-gray-600">
                Connect coastal businesses to consumers. Enable collaboration between public and private sector in driving coastal economies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
