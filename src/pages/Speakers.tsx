import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Globe, Briefcase, Users } from 'lucide-react';

const Speakers = () => {
  const categories = ['All', 'Keynote Speakers', 'Panel Experts', 'Workshop Leaders'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const audienceTypes = [
    {
      title: 'Youth',
      description: 'The essential cog in the PIW machine as partners and not mere beneficiaries. The event is youth-driven and interventions are geared towards building a resilient and youthful workforce.',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      stats: '60% of participants'
    },
    {
      title: 'Public & Private Sector',
      description: 'The vital enablers and investors of a re-imagined Pwani. Providing a platform for collaboration, knowledge sharing, and identifying strategic investment opportunities.',
      icon: Briefcase,
      color: 'from-green-500 to-green-600',
      stats: '25% of participants'
    },
    {
      title: 'Community Leaders',
      description: 'Coastal communities as stewards of natural resources. With deliberate discussions on aquaculture, cultural tourism and agriculture to unlock new economic pathways.',
      icon: Globe,
      color: 'from-orange-500 to-orange-600',
      stats: '15% of participants'
    }
  ];

  return (
      <div className="min-h-screen">
        <Navbar />

        <div className="pt-20 bg-gradient-to-br from-purple-50 via-purple-100/50 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-blue-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          <div className="section-container py-20 relative z-10">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                Apply to <span className="gradient-text">Speak</span>
              </h1>
              <div className="w-24 h-1 bg-[#F97316] mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Inspiring leaders, innovators, and changemakers driving coastal transformation
              </p>
              <Link
                  to="/speaking/apply"
                  className="bg-[#F97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-block"
              >
                Apply to Speak
              </Link>
            </div>
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">The Audience</h2>
              <div className="w-24 h-1 bg-[#F97316] mx-auto mb-6"></div>
              <p className="text-xl text-gray-700">Meet the diverse stakeholders driving coastal transformation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {audienceTypes.map((type, index) => (
                  <div
                      key={index}
                      className="text-center bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                      style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${type.color} rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}>
                      <type.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{type.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{type.description}</p>
                    <div className="inline-block bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {type.stats}
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 border-b">
          <div className="section-container">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                  <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                          selectedCategory === category
                              ? 'bg-[#F97316] text-white shadow-lg'
                              : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                      }`}
                  >
                    {category}
                  </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Speakers Coming Soon
            </h2>
            <p className="text-xl text-gray-700 max-w-xl mx-auto">
              We’re curating an amazing lineup of speakers. Stay tuned!
            </p>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Speak at PIW 2025?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join our community of thought leaders and share your expertise with coastal innovators and changemakers.
            </p>
            <Link
                to="/speaking/apply"
                className="bg-white text-[#F97316] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-block"
            >
              Apply to Speak
            </Link>
          </div>
        </section>

        <Footer />
      </div>
  );
};

export default Speakers;