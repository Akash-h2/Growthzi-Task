import Image from "next/image";
import React from "react";

const FindProgramSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Find the Perfect Program for You
        </h2>
        <p className="text-gray-400">
          From beginner to advanced, we've got you covered.
        </p>
      </div>

     
      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-black rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
          <div className="relative w-full h-56">
            <Image
              src="/yoga.jpg" 
              alt="Yoga & Flexibility"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy" 
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">Yoga & Flexibility</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-black rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
          <div className="relative w-full h-56">
            <Image
              src="/expert-trainers.jpg" 
              alt="Expert Trainers"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy" 
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">Expert Trainers</h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-black rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
          <div className="relative w-full h-56">
            <Image
              src="/fat-loss.jpg" 
              alt="Fat Loss"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">Fat Loss</h3>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default FindProgramSection;
