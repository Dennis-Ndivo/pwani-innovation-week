
import React from 'react';
import { Globe, Cloud, Heart, Gavel } from 'lucide-react';

const ThematicAreas = () => {
  return (
    <section id="themes" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Thematic Areas</h2>
          <div className="w-24 h-1 bg-purple mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-8 transition-transform duration-300 hover:translate-y-[-5px]">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-ocean/20 rounded-lg">
                <Globe className="text-ocean h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Emerging Tech and Innovation</h3>
            </div>
            <p className="text-gray-700">
              This thematic area will focus on inspiring the exploration and adoption of cutting-edge technologies for coastal resilience, resource management, and disaster preparedness. From AI and machine learning to blockchain and IoT, discover how innovative technologies can address unique challenges faced by coastal communities.
            </p>
          </div>
          
          <div className="bg-green-50 rounded-xl p-8 transition-transform duration-300 hover:translate-y-[-5px]">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-leaf/20 rounded-lg">
                <Cloud className="text-leaf h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Climate Action</h3>
            </div>
            <p className="text-gray-700">
              This thematic area will focus on leveraging innovative approaches and adaptive strategies for mitigating the impacts of climate change on coastal communities. From sustainable fishing practices and renewable energy solutions to waste management and conservation efforts, explore how innovation can create a more sustainable future for coastal regions.
            </p>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-8 transition-transform duration-300 hover:translate-y-[-5px]">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-purple/20 rounded-lg">
                <Heart className="text-purple h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Peace, Inclusivity and Equity</h3>
            </div>
            <p className="text-gray-700">
              This track will focus on building strategies for resilience that can foster social cohesion and collaboration among diverse stakeholders, contributing to peace and inclusivity in coastal areas. Learn about initiatives that promote equitable access to resources, opportunities, and representation for all community members.
            </p>
          </div>
          
          <div className="bg-orange-50 rounded-xl p-8 transition-transform duration-300 hover:translate-y-[-5px]">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-coral/20 rounded-lg">
                <Gavel className="text-coral h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Participatory Governance</h3>
            </div>
            <p className="text-gray-700">
              This track will focus on initiatives that promote citizen science, community-based monitoring, and co-management approaches that empower locals to actively participate in the governance and management of resources and infrastructure. Discover how inclusive decision-making processes can lead to more effective and sustainable development outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThematicAreas;
