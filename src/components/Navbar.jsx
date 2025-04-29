"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";  
import useCartStore from "@/store/useCartStore";  
import Image from "next/image";  

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Search", path: "/search" },
    { name: "Workout Programs", path: "/WorkoutPrograms" },
    { name: "Trainers", path: "/Trainers" },
    { name: "About Us", path: "/AboutPage" },
  ];

  const { cartItems } = useCartStore();

  return (
    <header className="bg-black text-white sticky top-0 z-50 w-full">
      <nav className="flex items-center justify-between w-full px-4 md:px-8 py-4">
        <div className="flex items-center">
          <Link href="/" className="flex flex-col items-start space-y-1">
            <Image 
              src="/logo.png" 
              alt="FitSphere Logo" 
              className="h-10 w-auto" 
              width={40} 
              height={40} 
              priority 
            />
            <span className="text-xl font-bold text-white">FitSphere</span>
          </Link>
        </div>

        <div className="flex items-center space-x-8">
          <ul className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`pb-1 ${
                    pathname === link.path
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "hover:text-orange-400 hover:border-b-2 hover:border-orange-400 border-transparent"
                  } transition-all duration-200`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative">
            <Link href="/cart" className="z-10">
              <IoCartOutline size={24} className="cursor-pointer" />
            </Link>
            {cartItems.length > 0 && (
              <span className="absolute -top-4 -right-4 bg-red-500 text-white text-xs rounded-full px-2 py-1 z-20">
                {cartItems.length}
              </span>
            )}
          </div>

          <div className="hidden md:block">
            <Link href="/join">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded">
                Join Now
              </button>
            </Link>
            <Link href="/signup">
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded ml-4">
                Sign Up
              </button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-black text-white px-4 pb-4">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`pb-1 ${
                    pathname === link.path
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "hover:text-orange-400 hover:border-b-2 hover:border-orange-400 border-transparent"
                  } transition-all duration-200`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/join" onClick={() => setMenuOpen(false)}>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded w-full">
                  Join Now
                </button>
              </Link>
            </li>
            <li>
              <Link href="/signup" onClick={() => setMenuOpen(false)}>
                <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded w-full">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
