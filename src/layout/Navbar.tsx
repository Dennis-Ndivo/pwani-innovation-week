import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className="static top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/piw_logo.png" 
              alt="Pwani Innovation Week 2025" 
              className="h-12 w-auto md:h-14" 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex">
            <ScrollArea className="w-full whitespace-nowrap rounded-md">
              <div className="flex items-center space-x-8">
                <Link
                  to="/"
                  className="text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300 border-b-2 border-transparent hover:border-[#F97316]"
                >
                  Home
                </Link>
                
                <Link
                  to="/about"
                  className="text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300 border-b-2 border-transparent hover:border-[#F97316]"
                >
                  About
                </Link>

                <Link
                  to="/schedule"
                  className="text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300 border-b-2 border-transparent hover:border-[#F97316]"
                >
                  Schedule
                </Link>
                
                <Link
                  to="/speakers"
                  className="text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300 border-b-2 border-transparent hover:border-[#F97316]"
                >
                  Speakers
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300 border-b-2 border-transparent hover:border-[#F97316] focus:outline-none">
                    Experiences <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white shadow-lg border rounded-md z-50 min-w-[200px]">
                    <DropdownMenuItem>
                      <Link
                        to="/hackathon"
                        className="block w-full text-gray-800 hover:text-[#F97316] py-2 px-3"
                      >
                        Hackathon
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to="/plenary-sessions"
                        className="block w-full text-gray-800 hover:text-[#F97316] py-2 px-3"
                      >
                        Plenary Sessions
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to="/workshops"
                        className="block w-full text-gray-800 hover:text-[#F97316] py-2 px-3"
                      >
                        Workshops
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to="/panel-discussions"
                        className="block w-full text-gray-800 hover:text-[#F97316] py-2 px-3"
                      >
                        Panel Discussions
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to="/networking-events"
                        className="block w-full text-gray-800 hover:text-[#F97316] py-2 px-3"
                      >
                        Networking Events
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to="/exhibitions"
                        className="block w-full text-gray-800 hover:text-[#F97316] py-2 px-3"
                      >
                        Exhibitions
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300 border-b-2 border-transparent hover:border-[#F97316] focus:outline-none">
                    Engage <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white shadow-lg border rounded-md z-50 min-w-[200px]">
                    <DropdownMenuItem>
                      <Link
                        to="/speaking/apply"
                        className="block w-full text-gray-800 hover:text-[#F97316] py-2 px-3"
                      >
                        Apply to Speak
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to="/vendors"
                        className="block w-full text-gray-800 hover:text-[#F97316] py-2 px-3"
                      >
                        Vendor Application
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to="/exhibitors"
                        className="block w-full text-gray-800 hover:text-[#F97316] py-2 px-3"
                      >
                        Exhibitor Application
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to="/contact"
                        className="block w-full text-gray-800 hover:text-[#F97316] py-2 px-3"
                      >
                        Contact / Inquiries
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300 border-b-2 border-transparent hover:border-[#F97316] focus:outline-none">
                    Past Events <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white shadow-lg border rounded-md z-50 min-w-[200px]">
                    <DropdownMenuItem>
                      <Link
                        to="/piw-2023"
                        className="block w-full text-gray-800 hover:text-[#F97316] py-2 px-3"
                      >
                        PIW 2023
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to="/piw-2024"
                        className="block w-full text-gray-800 hover:text-[#F97316] py-2 px-3"
                      >
                        PIW 2024
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link
                  to="/tickets"
                  className="bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Get Tickets
                </Link>
              </div>
            </ScrollArea>
          </div>

          {/* Mobile Nav Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-[#F97316] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 lg:hidden">
          <div className="absolute top-0 left-0 right-0 bg-white shadow-lg rounded-b-xl animate-slideDown max-h-screen overflow-y-auto">
            <div className="flex flex-col px-6 pt-6 pb-8 space-y-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-gray-800 hover:text-[#F97316] transition-colors py-2 border-b border-gray-100"
              >
                Home
              </Link>
              
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-gray-800 hover:text-[#F97316] transition-colors py-2 border-b border-gray-100"
              >
                About
              </Link>

              <Link
                to="/schedule"
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-gray-800 hover:text-[#F97316] transition-colors py-2 border-b border-gray-100"
              >
                Schedule
              </Link>
              
              <Link
                to="/speakers"
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-gray-800 hover:text-[#F97316] transition-colors py-2 border-b border-gray-100"
              >
                Speakers
              </Link>

              <div className="py-2 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-500 mb-3">Experiences</p>
                <div className="flex flex-col space-y-2 pl-4">
                  <Link
                    to="/hackathon"
                    onClick={() => setIsOpen(false)}
                    className="text-base text-gray-700 hover:text-[#F97316] transition-colors py-1"
                  >
                    Hackathon
                  </Link>
                  <Link
                    to="/plenary-sessions"
                    onClick={() => setIsOpen(false)}
                    className="text-base text-gray-700 hover:text-[#F97316] transition-colors py-1"
                  >
                    Plenary Sessions
                  </Link>
                  <Link
                    to="/workshops"
                    onClick={() => setIsOpen(false)}
                    className="text-base text-gray-700 hover:text-[#F97316] transition-colors py-1"
                  >
                    Workshops
                  </Link>
                  <Link
                    to="/panel-discussions"
                    onClick={() => setIsOpen(false)}
                    className="text-base text-gray-700 hover:text-[#F97316] transition-colors py-1"
                  >
                    Panel Discussions
                  </Link>
                  <Link
                    to="/networking-events"
                    onClick={() => setIsOpen(false)}
                    className="text-base text-gray-700 hover:text-[#F97316] transition-colors py-1"
                  >
                    Networking Events
                  </Link>
                  <Link
                    to="/exhibitions"
                    onClick={() => setIsOpen(false)}
                    className="text-base text-gray-700 hover:text-[#F97316] transition-colors py-1"
                  >
                    Exhibitions
                  </Link>
                </div>
              </div>

              <div className="py-2 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-500 mb-3">Engage</p>
                <div className="flex flex-col space-y-2 pl-4">
                  <Link
                    to="/speaking/apply"
                    onClick={() => setIsOpen(false)}
                    className="text-base text-gray-700 hover:text-[#F97316] transition-colors py-1"
                  >
                    Apply to Speak
                  </Link>
                  <Link
                    to="/vendors"
                    onClick={() => setIsOpen(false)}
                    className="text-base text-gray-700 hover:text-[#F97316] transition-colors py-1"
                  >
                    Vendor Application
                  </Link>
                  <Link
                    to="/exhibitors"
                    onClick={() => setIsOpen(false)}
                    className="text-base text-gray-700 hover:text-[#F97316] transition-colors py-1"
                  >
                    Exhibitor Application
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="text-base text-gray-700 hover:text-[#F97316] transition-colors py-1"
                  >
                    Contact / Inquiries
                  </Link>
                </div>
              </div>

              <div className="py-2 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-500 mb-3">Past Events</p>
                <div className="flex flex-col space-y-2 pl-4">
                  <Link
                    to="/piw-2023"
                    onClick={() => setIsOpen(false)}
                    className="text-base text-gray-700 hover:text-[#F97316] transition-colors py-1"
                  >
                    PIW 2023
                  </Link>
                  <Link
                    to="/piw-2024"
                    onClick={() => setIsOpen(false)}
                    className="text-base text-gray-700 hover:text-[#F97316] transition-colors py-1"
                  >
                    PIW 2024
                  </Link>
                </div>
              </div>

              <Link
                to="/tickets"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300 mt-4"
              >
                Get Tickets
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Animation for mobile menu */}
      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;