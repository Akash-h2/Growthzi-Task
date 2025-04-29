import React from 'react';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import useCartStore from "@/store/useCartStore"; 
import Image from 'next/image'; 
const ProgramDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const programDetails = {
    id: slug ? slug.replaceAll("-", " ") : "loading", 
    title: slug ? slug.replaceAll("-", " ") : "Loading...",
    days: [
      { title: "First Day", workout: "Full Body + Core", description: "Do bodyweight moves like squats, pushups, lunges, and burpees. Add some core workouts: sit-ups, planks, crunches. Build core stability and work every muscle." },
      { title: "Second Day", workout: "Upper Body + Cardio", description: "Focus on upper body: push-ups, rows, and bands. Cardio session: 20 mins jog, jump rope." },
      { title: "Third Day", workout: "Lower Body", description: "Work your legs: squats, deadlifts, lunges, box jumps. Add some HIIT at the end for burn." },
      { title: "Fourth Day", workout: "Cardio + Abs", description: "Mix treadmill sprints and abs: crunches, planks, flutter kicks." },
      { title: "Fifth Day", workout: "Core & Conditioning", description: "Strengthen core + HIIT circuits. Dumbbell lifts + kettlebell swings." },
    ],
    priceWithoutDiet: "120$",
    priceWithDiet: "220$",
  };

 
  const addToCart = useCartStore((state) => state.addToCart);

 
  const handleAddToCart = () => {
    addToCart({
      id: programDetails.id,
      title: programDetails.title,
      priceWithoutDiet: programDetails.priceWithoutDiet,
      priceWithDiet: programDetails.priceWithDiet,
    });
    alert(`${programDetails.title} added to the cart!`);
  };

  return (
    <>
      <Navbar />

      <div className="relative min-h-screen bg-black text-white overflow-hidden">

        <div className="absolute inset-0 z-0">
          <Image
            src="/backbone.jpg"
            alt="Background"
            layout="fill"
            className="object-cover opacity-40"
            priority
          />
        </div>

       
        <div className="relative z-10 p-6">
          <h1 className="text-3xl md:text-4xl font-bold">Workout Programs</h1>
        </div>

      
        <div className="relative z-10 max-w-5xl mx-auto p-8 mt-4 border-2 border-white border-opacity-30 rounded-lg backdrop-blur-sm">
          {/* Card Top Bar */}
          <div className="py-4 px-6 mb-6 border-b border-white border-opacity-30">
            <h2 className="text-2xl md:text-3xl font-bold text-center">{programDetails.title}</h2>
          </div>

          {/* Workout Days */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {programDetails.days.map((day, index) => (
              <div key={index} className="p-6 border-white border-opacity-20 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2">{day.title}</h3>
                <p className="text-orange-400 font-semibold">{day.workout}</p>
                <p className="text-gray-300 text-sm mt-2">{day.description}</p>
              </div>
            ))}
          </div>

         
          <div className="border-t border-white border-opacity-30 my-8"></div>

        
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Buy Full 4 Week Workout Program</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-6">
              <div>
                <p className="text-2xl font-bold">{programDetails.priceWithoutDiet}</p>
                <p className="text-gray-300 text-sm">without diet plan</p>
              </div>
              <div>
                <p className="text-2xl font-bold">{programDetails.priceWithDiet}</p>
                <p className="text-gray-300 text-sm">with diet plan</p>
              </div>
            </div>

           
            <button
              onClick={handleAddToCart}
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-3 rounded-full text-lg mb-4 mr-5 "
            >
              Add to Cart
            </button>
            

            
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-3 rounded-full text-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProgramDetails;
