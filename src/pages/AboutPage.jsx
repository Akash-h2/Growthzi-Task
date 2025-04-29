import React from 'react';
import WhoWeAre from '@/components/about/WhoWeAre';
import FacilityHighlights from '@/components/about/FacilityHighlights';

import HeroSection from '@/components/about/HeroSection';
import WhatMakesUsDifferent from '@/components/about/WhatMakeUsDifferent';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const AboutPage = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-black text-white">
      
      <HeroSection/>
     

     
      <WhoWeAre/>

     
      <FacilityHighlights />

      
      <WhatMakesUsDifferent/>

    </div>
    <Footer/>
    </>
  );
};

export default AboutPage;
