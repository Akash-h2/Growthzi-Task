import Image from "next/image";
import React from "react";

const OurExpertsSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-20 ">
     
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Experts Are Here to Help
        </h2>
      </div>

    
      <div className="grid md:grid-cols-2 gap-8">
       
        <div className="bg-black p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          {/* Top: Image + Name + Designation */}
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 relative mr-4">
              <Image
                src="/expert1.jpg" // apna image path lagana
                alt="Expert 1"
                fill
                className="rounded-full object-cover"
                loading="lazy" // Lazy load
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Michael T.</h3>
              <p className="text-gray-400 text-sm">Gym Trainer</p>
            </div>
          </div>

          {/* Divider Line */}
          <div className="border-t border-gray-600 my-4"></div>

          {/* Testimonial Text */}
          <p className="text-gray-300">
            Each trainer brings specialized expertise to help you succeed. From strength training and weight loss to yoga and endurance, our certified professionals provide personalized guidance tailored to your fitness goals.
          </p>
        </div>

       
        <div className="bg-black p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
         
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 relative mr-4">
              <Image
                src="/expert2.jpg"
                alt="Expert 2"
                fill
                className="rounded-full object-cover"
                loading="lazy" 
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Johnson</h3>
              <p className="text-gray-400 text-sm">Gym Trainer</p>
            </div>
          </div>

          
          <div className="border-t border-gray-600 my-4"></div>

         
          <p className="text-gray-300">
            Our trainers are certified experts in various fields, including strength training, weight management, yoga, and cardio. They are dedicated to helping you achieve your goals with personalized care and support.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurExpertsSection;
