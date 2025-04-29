import React from 'react';
import Image from 'next/image';

const facilities = [
  {
    title: "Personal Training Zone",
    description: "Members can work one-on-one without distractions.",
    image: "/aiden.jpg",
  },
  {
    title: "State-of-the-Art Equipment",
    description: "Top-tier machines and free weights for strength training, cardio, and endurance workouts.",
    image: "/equipment.jpg",
  },
  {
    title: "Kids Zone",
    description: "Safe, fun spaces where children play while parents workout.",
    image: "/kids-zone.jpg",
  },
  {
    title: "Recovery Lounge",
    description: "Relax and rejuvenate after intense workouts with our premium recovery options.",
    image: "/recovery-lounge.jpg",
  },
  {
    title: "Group Fitness Studio",
    description: "Join dynamic group classes like Zumba, HIIT, and Yoga led by expert instructors in a vibrant atmosphere.",
    image: "/group-fitness.jpg",
  }
];

const FacilityHighlights = () => {
  return (
    <section className="py-12 px-4 md:px-16 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Facility Highlights</h2>

       
        <div className="flex overflow-x-auto space-x-6 pb-4 no-scrollbar">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="min-w-[280px] max-w-[280px] bg-gray-800 rounded-lg overflow-hidden shadow-md flex-shrink-0"
            >
              <div className="relative w-full h-48">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                <p className="text-gray-400 text-sm">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FacilityHighlights;
