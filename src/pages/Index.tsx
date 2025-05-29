
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
// import Objectives from '@/components/Objectives';
import ThematicAreas from '@/components/ThematicAreas';
import Tickets from '@/components/Tickets';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      {/* <Objectives /> */}
      <ThematicAreas />
      {/* <Tickets /> */}
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
