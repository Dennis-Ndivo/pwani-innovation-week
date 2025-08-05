import React, {useState} from 'react';
import {Calendar, Clock, Filter, MapPin, Users} from 'lucide-react';

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState('Day 1');
  const [selectedTrack, setSelectedTrack] = useState('All');

  const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];
  const tracks = ['All', 'Sustainable Coastal Economies', 'Digital Transformation', 'Youth Agency'];

  const scheduleData = {
    'Day 1': [
      {
        time: '9:00 AM - 10:00 AM',
        title: 'Opening Ceremony & Welcome Address',
        speaker: 'Hon. Cabinet Secretary',
        location: 'Main Auditorium',
        track: 'General',
        description: 'Official opening of Pwani Innovation Week 2025',
        attendees: '2000+'
      },
      {
        time: '10:30 AM - 12:00 PM',
        title: 'Keynote: Youth as Catalysts for Coastal Transformation',
        speaker: 'Dr. Amina Hassan',
        location: 'Main Auditorium',
        track: 'Youth Agency',
        description: 'Understanding the role of youth in driving coastal innovation',
        attendees: '1500+'
      },
      {
        time: '2:00 PM - 3:30 PM',
        title: 'Panel: Blue Economy Opportunities',
        speaker: 'Industry Leaders Panel',
        location: 'Conference Hall A',
        track: 'Sustainable Coastal Economies',
        description: 'Exploring sustainable marine resource utilization',
        attendees: '800+'
      }
    ],
    'Day 2': [
      {
        time: '9:00 AM - 10:30 AM',
        title: 'Digital Innovation in Coastal Communities',
        speaker: 'Tech Entrepreneurs',
        location: 'Innovation Hub',
        track: 'Digital Transformation',
        description: 'How technology is transforming coastal livelihoods',
        attendees: '600+'
      },
      {
        time: '11:00 AM - 12:30 PM',
        title: 'Aquaculture Innovation Workshop',
        speaker: 'Marine Biologists',
        location: 'Workshop Room 1',
        track: 'Sustainable Coastal Economies',
        description: 'Hands-on session on modern fish farming techniques',
        attendees: '200+'
      }
    ],
    'Day 3': [
      {
        time: '9:00 AM - 10:30 AM',
        title: 'Youth Leadership in Climate Action',
        speaker: 'Climate Activists',
        location: 'Main Auditorium',
        track: 'Youth Agency',
        description: 'Youth-led initiatives for environmental sustainability',
        attendees: '1200+'
      }
    ],
    'Day 4': [
      {
        time: '9:00 AM - 12:00 PM',
        title: 'Innovation Showcase & Pitch Competition',
        speaker: 'Startup Founders',
        location: 'Exhibition Hall',
        track: 'Digital Transformation',
        description: 'Young entrepreneurs pitch their coastal solutions',
        attendees: '1000+'
      }
    ],
    'Day 5': [
      {
        time: '9:00 AM - 11:00 AM',
        title: 'Closing Ceremony & Way Forward',
        speaker: 'PIW Organizing Committee',
        location: 'Main Auditorium',
        track: 'General',
        description: 'Reflecting on the week and planning ahead',
        attendees: '2000+'
      }
    ]
  };

  const getTrackColor = (track) => {
    const colors = {
      'General': 'from-gray-500 to-gray-600',
      'Youth Agency': 'from-blue-500 to-blue-600',
      'Sustainable Coastal Economies': 'from-green-500 to-green-600',
      'Digital Transformation': 'from-purple-500 to-purple-600'
    };
    return colors[track] || 'from-orange-500 to-orange-600';
  };

  const filteredSessions = selectedTrack === 'All'
    ? scheduleData[selectedDay] || []
    : (scheduleData[selectedDay] || []).filter(session => session.track === selectedTrack);

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-br from-blue-50 via-blue-100/50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-purple-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="section-container py-20 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Event <span className="gradient-text">Schedule</span>
            </h1>
            <div className="w-24 h-1 bg-[#F97316] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Five days of innovation, collaboration, and transformation • October 27-31, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Schedule Navigation */}
      <section className="py-12 bg-white border-b">
        <div className="section-container">
          {/* Day Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {days.map((day, index) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedDay === day
                    ? 'bg-[#F97316] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4"/>
                  {day}
                  <span className="text-sm opacity-75">Oct {27 + index}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Track Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {tracks.map((track) => (
              <button
                key={track}
                onClick={() => setSelectedTrack(track)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedTrack === track
                    ? 'bg-blue-500 text-white'
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                }`}
              >
                <Filter className="w-3 h-3 inline mr-1"/>
                {track}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {selectedDay} Schedule
              </h2>
              <p className="text-gray-600">
                {filteredSessions.length} session{filteredSessions.length !== 1 ? 's' : ''} planned
              </p>
            </div>

            <div className="space-y-6">
              {filteredSessions.map((session, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in"
                  style={{animationDelay: `${index * 150}ms`}}
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getTrackColor(session.track)}`}>
                            {session.track}
                          </div>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Users className="w-4 h-4 mr-1"/>
                            {session.attendees}
                          </div>
                        </div>

                        <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                          {session.title}
                        </h3>

                        <p className="text-gray-600 mb-4">
                          {session.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-4 h-4 mr-2 text-[#F97316]"/>
                            {session.time}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-4 h-4 mr-2 text-[#F97316]"/>
                            {session.location}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Users className="w-4 h-4 mr-2 text-[#F97316]"/>
                            {session.speaker}
                          </div>
                        </div>
                      </div>

                      <div className="lg:ml-6">
                        {/* <button className="bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300 hover:scale-105">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </button> */}
                      </div>
                    </div>
                  </div>

                  <div className={`h-2 bg-gradient-to-r ${getTrackColor(session.track)}`}></div>
                </div>
              ))}
            </div>

            {filteredSessions.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-12 h-12 text-gray-400"/>
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No sessions found</h3>
                <p className="text-gray-500">Try selecting a different day or track filter.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Register now to secure your spot at Pwani Innovation Week 2025 and be part of the coastal transformation.
          </p>
          <button
            className="bg-white text-[#F97316] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Register Now
          </button>
        </div>
      </section>

    </div>
  );
};

export default Schedule;
