
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Globe, Briefcase, Users, LinkedinIcon, TwitterIcon, Mail } from 'lucide-react';

const Speakers = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Keynote Speakers', 'Panel Experts', 'Workshop Leaders'];

  const speakers = [
    {
      name: 'Dr. Amina Hassan',
      title: 'Minister of Blue Economy',
      category: 'Keynote Speakers',
      // image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face',
      bio: 'Leading Kenya\'s blue economy initiatives with over 15 years of experience in marine conservation and coastal development.',
      expertise: ['Blue Economy', 'Policy Development', 'Marine Conservation'],
      achievements: '20+ years in marine policy',
      company: 'Ministry of Blue Economy'
    },
    {
      name: 'James Mwangi',
      title: 'Tech Entrepreneur & Investor',
      category: 'Keynote Speakers',
      // image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Serial entrepreneur who has built multiple successful tech companies focused on solving African challenges.',
      expertise: ['Digital Innovation', 'Startup Ecosystem', 'Investment'],
      achievements: 'Founded 3 successful startups',
      company: 'Coastal Ventures'
    },
    {
      name: 'Fatuma Said',
      title: 'Youth Activist & Social Entrepreneur',
      category: 'Panel Experts',
      // image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      bio: 'Championing youth empowerment and climate action across East Africa through innovative community programs.',
      expertise: ['Youth Empowerment', 'Climate Action', 'Community Development'],
      achievements: 'UNESCO Youth Ambassador',
      company: 'Youth for Change Foundation'
    },
    {
      name: 'Prof. David Kimani',
      title: 'Marine Scientist & Researcher',
      category: 'Workshop Leaders',
      // image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Leading researcher in sustainable aquaculture and marine ecosystem restoration with 25+ years experience.',
      expertise: ['Aquaculture', 'Marine Biology', 'Sustainability'],
      achievements: '100+ research publications',
      company: 'Kenya Marine Institute'
    },
    {
      name: 'Sarah Ochieng',
      title: 'Digital Marketing Strategist',
      category: 'Workshop Leaders',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop&crop=face',
      bio: 'Helping coastal businesses leverage digital platforms to reach global markets and scale their operations.',
      expertise: ['Digital Marketing', 'E-commerce', 'Business Strategy'],
      achievements: 'Scaled 50+ coastal businesses',
      company: 'Digital Coast Agency'
    },
    {
      name: 'Mohamed Ali',
      title: 'Cultural Tourism Expert',
      category: 'Panel Experts',
      // image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop&crop=face',
      bio: 'Preserving and promoting coastal cultures while creating sustainable tourism opportunities for local communities.',
      expertise: ['Cultural Tourism', 'Heritage Preservation', 'Community Tourism'],
      achievements: '15+ cultural sites developed',
      company: 'Coastal Heritage Foundation'
    }
  ];

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

  const filteredSpeakers = selectedCategory === 'All' 
    ? speakers 
    : speakers.filter(speaker => speaker.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-br from-purple-50 via-purple-100/50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-blue-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="section-container py-20 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Meet Our <span className="gradient-text">Speakers</span>
            </h1>
            <div className="w-24 h-1 bg-[#F97316] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Inspiring leaders, innovators, and changemakers driving coastal transformation
            </p>
          </div>
        </div>
      </div>

      {/* Audience Types */}
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

      {/* Speaker Categories Filter */}
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

      {/* Speakers Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              {selectedCategory === 'All' ? 'All Speakers' : selectedCategory}
            </h2>
            <p className="text-xl text-gray-700">
              {filteredSpeakers.length} speaker{filteredSpeakers.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpeakers.map((speaker, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                      <LinkedinIcon className="w-4 h-4" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                      <TwitterIcon className="w-4 h-4" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {speaker.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{speaker.name}</h3>
                  <p className="text-[#F97316] font-semibold mb-2">{speaker.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{speaker.company}</p>
                  
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">{speaker.bio}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="w-4 h-4 mr-2 text-[#F97316]" />
                      {speaker.achievements}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {speaker.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Speak at PIW 2025?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our community of thought leaders and share your expertise with coastal innovators and changemakers.
          </p>
          <button className="bg-white text-[#F97316] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Apply to Speak
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Speakers;
