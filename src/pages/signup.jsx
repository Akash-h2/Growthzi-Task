import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Image from 'next/image'; 

export default function Signup() {
  const [showOtpModal, setShowOtpModal] = useState(false);

  const handleGenerateOtp = (e) => {
    e.preventDefault();
    setShowOtpModal(true);
  };

  return (
   <>
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* Left Side */}
      <div className="flex-1 bg-black flex flex-col justify-center md:justify-start p-6 relative">
        
      
        <div className="absolute top-6 left-6 flex flex-col items-start">
          <Image src="/logo.png" alt="Logo" width={40} height={40} className="mb-1" />
          <h1 className="text-white text-lg font-semibold">Fitsphere</h1>
        </div>

        {/* Center Content */}
        <div className="w-full max-w-md mx-auto mt-20 md:mt-32">
          
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-orange-500 text-center mb-2">
            Create an Account
          </h2>
          <p className="text-gray-400 text-center mb-6 text-sm md:text-base">
            Enter your personal details to create your account
          </p>

          {/* Form */}
          <form onSubmit={handleGenerateOtp} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="text"
              placeholder="Mobile number"
              className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition-all text-white py-3 rounded-md font-semibold"
            >
              Generate OTP
            </button>
          </form>

        
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-600"></div>
            <span className="mx-3 text-gray-400 text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-600"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-md">
              <Image src="/google-icon.png" alt="Google" width={20} height={20} />
              <span className="text-white text-sm">Google</span>
            </button>
            <button className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-md">
              <Image src="/facebook-icon.png" alt="Facebook" width={24} height={24} />
              <span className="text-white text-sm">Facebook</span>
            </button>
          </div>

          {/* Login link */}
          <p className="text-center text-gray-400 text-sm mt-6">
            Already have an account?{' '}
            <a href="/login" className="inline-block border border-orange-500 px-2 py-1 rounded-md text-orange-500 hover:text-white transition-all text-sm font-semibold">
              Login
            </a>
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:block flex-1">
        <Image
          src="/images/gym.png"
          alt="Gym"
          className="h-full w-full object-cover"
          width={800} 
          height={800} 
        />
      </div>

    
      {showOtpModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-transparent bg-opacity-70 backdrop-blur-lg flex justify-center items-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-black rounded-xl p-8 w-80 mx-4 text-center"
          >
            <h2 className="text-xl md:text-2xl text-white font-bold mb-4">
              Just One Step Away!
            </h2>
            <p className="text-gray-400 text-sm mb-6">Enter the OTP to verify your account</p>

           
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(4)].map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 rounded-md text-center text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  onChange={(e) => {
                    const nextInput = e.target.nextElementSibling;
                    if (e.target.value && nextInput) {
                      nextInput.focus();
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Backspace' && !e.target.value) {
                      const prevInput = e.target.previousElementSibling;
                      if (prevInput) {
                        prevInput.focus();
                      }
                    }
                  }}
                />
              ))}
            </div>

           
            <p className="text-gray-500 text-xs mb-4">
              Didn't get the code?{' '}
              <button className="text-orange-500 hover:underline text-sm">
                Resend code
              </button>
            </p>

            
            <button className="w-full bg-orange-500 hover:bg-orange-600 transition-all text-white py-2 rounded-md font-semibold">
              Submit
            </button>
          </motion.div>
        </motion.div>
      )}

    </div>
   </>
  );
}
