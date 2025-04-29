"use client";

import React, { useState } from "react";
import ProgramCard from "@/components/ProgramCard"; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WorkoutPrograms = () => {
  const [activeTag, setActiveTag] = useState("Weight Loss");

  const tags = ["Weight Loss", "Muscle Gain", "Flexibility", "Endurance"];

  const programs = {
    "Weight Loss": [
      {
        slug: "yoga-for-beginners",
        image: "/yoga-beginners.jpg",
        title: "Yoga For Beginners",
        trainer: "Emma Smith",
        duration: "4 weeks",
        description: "Learn foundational Yoga poses and improve flexibility.",
      },
      {
        slug: "body-shred-beginners",
        image: "/body-shred-beginners.jpg",
        title: "Body Shred - Beginners",
        trainer: "John Doe",
        duration: "6 weeks",
        description: "A full body workout plan to build strength and shred fat.",
      },
      {
        slug: "hiit-burn-intermediate",
        image: "/hiit-burn.jpg",
        title: "HIIT Burn - Intermediate",
        trainer: "Michael Lee",
        duration: "8 weeks",
        description: "Advanced Strength training to build muscle mass.",
      },
      {
        slug: "fat-loss",
        image: "/fat-loss.jpg",
        title: "Fat Loss",
        trainer: "Smith",
        duration: "4 weeks",
        description: "Fat loss workout program for intermediates.",
      },
      {
        slug: "body-shred-repeat",
        image: "/expert-trainers.jpg",
        title: "Body Shred - Beginners",
        trainer: "John Doe",
        duration: "6 weeks",
        description: "A full body workout plan to build strength and shred fat.",
      },
    ],
    "Muscle Gain": [
      {
        slug: "hiit-burn-advanced",
        image: "/hiit-burn.jpg",
        title: "HIIT Burn - Advanced",
        trainer: "Elly",
        duration: "12 weeks",
        description: "Advanced Strength training to build muscle mass.",
      },
      {
        slug: "body-shred-intermediate",
        image: "/body-shred-beginners.jpg",
        title: "Body Shred - Intermediate",
        trainer: "Mike",
        duration: "8 weeks",
        description: "An intermediate full body workout plan to build strength and shred fat.",
      },
    ],
    "Flexibility": [
      {
        slug: "yoga-intermediate",
        image: "/yoga-advanced.jpg",
        title: "Yoga - Intermediate",
        trainer: "Nikki",
        duration: "6 weeks",
        description: "Learn intermediate level Yoga poses and improve flexibility.",
      },
    ],
    "Endurance": [
      {
        slug: "hiit-burn-endurance",
        image: "/hiit-burn.jpg",
        title: "HIIT Burn - Intermediate",
        trainer: "Michael Lee",
        duration: "8 weeks",
        description: "Cardio and HIIT to boost endurance and stamina.",
      },
    ],
  };

  const recommendedPrograms = [
    {
      slug: "advanced-yoga-practice",
      image: "/yoga-advanced.jpg",
      title: "Advanced Yoga Practice",
      trainer: "Sophia Lee",
      duration: "8 weeks",
      description: "Deepen your yoga practice with advanced poses.",
    },
    {
      slug: "muscle-gain-advanced",
      image: "/muscle-advanced.jpg",
      title: "Muscle Gain - Advanced",
      trainer: "Liam Smith",
      duration: "12 weeks",
      description: "Take your muscle-building goals to the next level.",
    },
    {
      slug: "hiit-advanced",
      image: "/hiit-advanced.jpg",
      title: "HIIT - Advanced",
      trainer: "David Johnson",
      duration: "10 weeks",
      description: "An intense high-intensity workout program for fat loss.",
    },
  ];

  return (
    <>
    <Navbar/>
    
    <div className="bg-black min-h-screen text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Workout Programs</h1>
        <p className="text-gray-400 mb-6">Find the Perfect Workout for Your Goals</p>

       
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setActiveTag(tag)}
              className={`border px-3 py-1 text-sm rounded-full transition ${
                activeTag === tag
                  ? "border-orange-500 text-orange-400"
                  : "border-gray-600 text-gray-400 hover:border-orange-500 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        
        <h2 className="text-2xl font-bold mb-4">{activeTag}</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {programs[activeTag]?.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>

        
        <h2 className="text-2xl font-bold mb-4">Recommended Programs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {recommendedPrograms.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default WorkoutPrograms;
