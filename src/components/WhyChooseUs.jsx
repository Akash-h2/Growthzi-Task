"use client";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">Why Choose Us ?</h2>
      </div>

      <div className="flex flex-col space-y-20">

       
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
         
          <div className="relative w-56 h-56 md:w-64 md:h-64 flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-orange-500 scale-110"></div>
            <div className="absolute -top-16 -left-12 md:-top-53 md:-left-35 w-64 h-64 md:w-128 md:h-128 scale-x-[-1]">
              <Image
                src="/why-1.png"
                alt="Workout Programs"
                fill
                className="object-contain rounded-full"
                loading="lazy"  
              />
            </div>
          </div>

          {/* Text Right */}
          <div className="text-left max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-orange-400">Workout Programs</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Get personalized fitness plans designed to suit your unique goals and fitness level.
              Whether you're a beginner or an experienced athlete, our tailored programs ensure progress at your own pace.
            </p>
          </div>
        </div>

     
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
         
          <div className="relative w-56 h-56 md:w-72 md:h-72 flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-orange-500 scale-110"></div>
            <div className="absolute -top-16 -left-8 md:-top-35 md:-left-6 w-72 h-72 md:w-90 md:h-120">
              <Image
                src="/why-2.png"
                alt="Expert Trainers"
                fill
                className="object-contain rounded-full"
                loading="lazy"  
              />
            </div>
          </div>

       
          <div className="text-left max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-orange-400">Expert Trainers</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our certified professionals provide expert guidance and support to help you achieve your fitness goals safely and effectively.
            </p>
          </div>
        </div>

      
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
          <div className="relative w-56 h-56 md:w-64 md:h-64 flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-orange-500 scale-110"></div>
            <div className="absolute -top-14 -left-10 md:-top-30 md:-left-25 w-64 h-64 md:w-110 md:h-110">
              <Image
                src="/why-3.png"
                alt="Flexible Plans"
                fill
                className="object-contain rounded-full"
                loading="lazy"  
              />
            </div>
          </div>

          {/* Text Right */}
          <div className="text-left max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-orange-400">Flexible Plans</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Choose from affordable subscription options that cater to your needs.
              Whether you prefer monthly, yearly, or pay-as-you-go plans, we have a solution that fits your lifestyle.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
