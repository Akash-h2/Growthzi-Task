"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";  

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] w-full bg-black flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="Background"
        layout="fill" 
        objectFit="cover" 
        className="absolute inset-0 opacity-70"
        priority 
      />

     
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>

     
      <div className="absolute inset-y-0 left-0 w-2/3 md:w-1/2 bg-gradient-to-r from-black/80 via-black/50 to-transparent backdrop-blur-sm"></div>

     
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between h-full">

       
        <div className="text-orange-500 max-w-2xl text-left">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            Your Journey to Better<br className="hidden md:block" /> Health Starts Here.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base md:text-lg text-gray-300 mb-8 max-w-md"
          >
            Discover tailored workout plans and expert guidance to help you achieve your fitness goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link href="/join">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </motion.div>
        </div>

       
        <div className="hidden md:block w-1/2"></div>

      </div>
    </section>
  );
};

export default HeroSection;
