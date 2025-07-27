"use client";
import { useState } from "react";
import { FaBars, FaChevronDown, FaUser } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <div className="flex flex-col items-center">
            <Image
              src="/logo.png"
              alt="Game Hunt Logo"
              width={40}
              height={40}
              priority
            />
            <span className="text-red-600 text-xs font-bold">GAMEHUNT</span>
          </div>
        </div>

        {/* Middle: Location Input & Links */}
        <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
          <form className="relative w-full max-w-xs">
            <img src='/address.png' className=''/>
            <input
              type="text"
              placeholder="Current Location"
              className="w-full border-b border-gray-300 pl-2 pr-6 py-1 text-sm focus:outline-none focus:border-red-500"
              defaultValue="Agra, Uttar Pradesh"
            />
            <img
              src="/my_location_regular_icon.png"
              alt="My Location"
              className="absolute right-1 top-2 h-4 w-4 cursor-pointer"
            />
          </form>

          <a
            href="#"
            className="text-sm font-medium hover:text-red-600 transition"
          >
            Gamehunt academy
          </a>

          <a
            href="#"
            className="text-sm font-medium flex items-center gap-1 hover:text-red-600 transition"
          >
            Partner <FaChevronDown className="text-xs" />
          </a>
        </div>

        {/* Right: Login / Signup & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:flex bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition">
            Login / Sign up
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <FaBars className="text-xl text-red-600" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-4 shadow-inner">
          <form className="relative">
            <input
              type="text"
              placeholder="Current Location"
              className="w-full border-b border-gray-300 pl-2 pr-6 py-1 text-sm focus:outline-none focus:border-red-500"
              defaultValue="Agra, Uttar Pradesh"
            />
            <img
              src="/assets/img/my_location_regular_icon.png"
              alt="My Location"
              className="absolute right-1 top-2 h-4 w-4 cursor-pointer"
            />
          </form>

          <a href="#" className="block text-sm font-medium hover:text-red-600">
            Gamehunt academy
          </a>

          <a
            href="#"
            className="block text-sm font-medium flex items-center gap-1 hover:text-red-600"
          >
            Partner <FaChevronDown className="text-xs" />
          </a>

          <button className="w-full bg-red-600 text-white py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition">
            Login / Sign up
          </button>
        </div>
      )}
    </nav>
  );
}
