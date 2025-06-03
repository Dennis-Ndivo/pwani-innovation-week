import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 shadow-md backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 bg-[#F97316] rounded-md p-1">
              <img
                src="public/piw_logo.png"
                alt="/piw_logo.png"
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <ScrollArea className="w-full whitespace-nowrap rounded-md">
              <div className="flex items-center space-x-8">
                <Link to="/" className="text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300">
                  Home
                </Link>
                <Link to="/about" className="text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300">
                  About
                </Link>
                <Link to="/schedule" className="text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300">
                  Schedule
                </Link>
                <Link to="/speakers" className="text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300">
                  Speakers
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300">
                    Past Events
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white shadow-lg border rounded-md z-50">
                    <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer">
                      <Link to="/piw-2023" className="block w-full text-gray-800 hover:text-[#F97316]">PIW 2023</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer">
                      <Link to="/piw-2024" className="block w-full text-gray-800 hover:text-[#F97316]">PIW 2024</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link
                  to="/engage"
                  className="text-base font-medium text-white bg-[#F97316] hover:bg-[#ea580c] transition-colors duration-300 px-4 py-2 rounded-md shadow"
                >
                  Engage
                </Link>
              </div>
            </ScrollArea>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-[#F97316] hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#F97316] hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#F97316] hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/schedule"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#F97316] hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Schedule
            </Link>
            <Link
              to="/speakers"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#F97316] hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Speakers
            </Link>
            <Link
              to="/engage"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 bg-[#F97316] hover:text-white hover:bg-[#ea580c] transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Engage
            </Link>
            <Link
              to="/piw-2023"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#F97316] hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              PIW 2023
            </Link>
            <Link
              to="/piw-2024"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#F97316] hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              PIW 2024
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
