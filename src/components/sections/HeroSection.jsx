"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    image: "/UserHomeBanner.png", // <-- Replace with actual paths
    heading: "Power Kick to",
    subheading: "Get your goals...",
    caption: "Take your Invest Strategy to the next level",
  },
  {
    image: "/UserHomeBanner2.png",
    heading: "Train Hard to",
    subheading: "Win your match...",
    caption: "Boost your skills like a pro player",
  },
  {
    image: "/UserHomeBanner.png",
    heading: "Push Forward to",
    subheading: "Achieve greatness...",
    caption: "GameHunt makes it possible",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-[500px] relative">
            <Image
              src={slide.image}
              alt={slide.heading}
              layout="fill"
              objectFit="cover"
              quality={100}
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center pl-8 sm:pl-16 text-white">
              <div className="max-w-xl">
                <h2 className="text-2xl sm:text-4xl font-bold bg-white text-red-600 inline-block px-3 py-1">
                  {slide.heading}
                </h2>
                <h1 className="text-3xl sm:text-6xl font-extrabold bg-red-600 text-white inline-block px-4 py-2 mt-2">
                  {slide.subheading}
                </h1>
                <p className="mt-4 text-sm sm:text-base font-medium text-white tracking-wide">
                  {slide.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/60 rounded-full p-2"
        aria-label="Previous Slide"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/60 rounded-full p-2"
        aria-label="Next Slide"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
}
