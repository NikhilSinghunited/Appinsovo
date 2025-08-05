'use client';

import React, { useEffect, useState } from 'react';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';


const videoData = [
  "https://www.youtube.com/embed/VIDEO_ID1",
  "https://www.youtube.com/embed/VIDEO_ID2",
  "https://www.youtube.com/embed/VIDEO_ID3",
  "https://www.youtube.com/embed/VIDEO_ID4",
  "https://www.youtube.com/embed/VIDEO_ID5",
];

export default function OnlineSession() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Update slides per view based on screen size
  const updateSlidesPerView = () => {
    const width = window.innerWidth;
    if (width < 640) setSlidesPerView(1);       // sm
    else if (width < 768) setSlidesPerView(2);  // md
    else if (width < 1024) setSlidesPerView(2); // lg
    else setSlidesPerView(3);                   // xl
  };

  useEffect(() => {
    updateSlidesPerView(); // initial check
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const totalSlides = videoData.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, totalSlides - slidesPerView)
    );
  };

  return (
    <div className="w-full py-8 px-4">
      <h2 className="text-center text-2xl font-semibold mb-4">Online Session</h2>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${(100 / slidesPerView) * currentIndex}%)`,
            width: `${(100 / slidesPerView) * totalSlides}%`,
          }}
        >
          {videoData.map((src, idx) => (
            <div
              key={idx}
              className="p-2"
              style={{ width: `${100 / totalSlides}%` }}
            >
              <div className="w-full aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={src}
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-red-500 rounded-full shadow p-2 z-10"
          disabled={currentIndex === 0}
        >
          <MdOutlineArrowBackIos color="red" />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 border border-gray-400 bg-white text-red-500 rounded-full shadow p-2 z-10"
          disabled={currentIndex >= totalSlides - slidesPerView}
        >
          <MdOutlineArrowForwardIos color="red" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-1">
        {Array.from({ length: totalSlides - slidesPerView + 1 }).map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-2 rounded-full ${
              idx === currentIndex ? 'bg-red-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
