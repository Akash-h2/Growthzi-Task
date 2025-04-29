import React from 'react';
import { FaDumbbell, FaUserTie, FaClock, FaUsers } from 'react-icons/fa';

const features = [
  {
    icon: <FaDumbbell className="text-4xl mb-4" />,
    title: "Tailored Programs",
    description: "No one-size-fits-all approach—our plans are built around you.",
  },
  {
    icon: <FaUserTie className="text-4xl mb-4" />,
    title: "Expert Trainers",
    description: "Certified professionals who care about your progress and safety.",
  },
  {
    icon: <FaClock className="text-4xl mb-4" />,
    title: "Flexible Access",
    description: "Train anytime, anywhere with our on-demand and live coaching options.",
  },
  {
    icon: <FaUsers className="text-4xl mb-4" />,
    title: "Supportive Community",
    description: "Join a group of like-minded individuals who cheer each other on.",
  },
];

const WhatMakesUsDifferent = () => {
  return (
    <section className="py-12 px-4 md:px-16 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Makes Us Different</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
