import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaTwitter, FaPhone } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] rounded-t-4xl text-gray-300 px-6 md:px-16 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start gap-6">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <img src="/Footer.png" alt="FitSphere" className="h-12 ml-6" />
            <span className="text-2xl font-bold">FitSphere</span>
          </div>

          {/* Address */}
          <p className="text-sm text-center md:text-left">
            123 Fitness Avenue, Wellness City,<br />
            HealthState, 56789
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-xl mt-2">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-orange-500 cursor-pointer transition" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-orange-500 cursor-pointer transition" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-orange-500 cursor-pointer transition" />
            </a>
          </div>
        </div>

       
        <div className="hidden md:block w-px bg-gray-500"></div>

        {/* Useful Links */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h3 className="font-semibold text-white mb-2">Useful Links</h3>
          <a href="#" className="hover:text-orange-500 transition">Home</a>
          <a href="#" className="hover:text-orange-500 transition">Privacy Policy</a>
          <a href="#" className="hover:text-orange-500 transition">Terms of Service</a>
          <a href="#" className="hover:text-orange-500 transition">FAQs</a>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <Link href="/contact">
            <h3 className="font-semibold text-white mb-2">Contact Us</h3>
          </Link>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <HiOutlineMail className="text-lg" />
            <a href="mailto:support@fitnesswebsite.com" className="hover:text-orange-500">
              support@fitnesswebsite.com
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <FaPhone className="text-lg" />
            <a href="tel:+1800FITNOW" className="hover:text-orange-500">
              +1-800-FIT-NOW
            </a>
          </div>
        </div>

      </div>

     
      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-xs">
        Copyright © 2024 All rights reserved | This template is made by ****
      </div>
    </footer>
  );
}
