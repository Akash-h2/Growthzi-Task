import React from 'react';
import Image from 'next/image';

const WhoWeAre = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24">
        
        {/* Left Image */}
        <div className="w-full md:w-5/12">
          <Image
            src="/who-we-are.jpg"
            alt="Who We Are"
            className="rounded-xl object-cover"
            width={500}  
            height={300} 
            priority
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-6/12">
          <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            We're a passionate team of certified trainers, wellness coaches, and fitness enthusiasts dedicated to making health accessible and enjoyable.
            From beginners taking their first steps into fitness to athletes leveling up their performance, we offer personalized support to help every member reach their goals.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;
