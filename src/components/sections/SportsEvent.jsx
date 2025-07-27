"use client";

import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";

const offers = [
  "/sportoffer1.jpg",
  "/sportoffer2.jpg",
  "/sportoffer3.jpg",
  "/sportoffer1.jpg",
];

const events = [
  "/events/event1.png",
  "/events/event2.png",
  "/events/event3.png",
  "/events/event4.png",
];

const SportEvent = () => {
  const [activeTab, setActiveTab] = useState("offers");
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = activeTab === "offers" ? offers : events;
  console.log(data);

  // Group images in pairs of 2
  const groupedData = [];
  for (let i = 0; i < data.length; i += 2) {
    groupedData.push(data.slice(i, i + 2));
  }

  const handleNext = () => {
    if (currentIndex < groupedData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div
      className="w-full  bg-center py-10 relative top-8"
      style={{
        backgroundImage: "url('/eventbg.png')",
      }}
    >
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Offers and Sport Events
        </h2>
        <div className="flex justify-center mt-4 space-x-6 text-lg font-semibold">
          <button
            onClick={() => {
              setActiveTab("offers");
              setCurrentIndex(0);
            }}
            className={classNames("px-2 border-b-2", {
              "border-red-500 text-red-600": activeTab === "offers",
              "border-transparent text-gray-500": activeTab !== "offers",
            })}
          >
            Offers
          </button>
          <button
            onClick={() => {
              setActiveTab("events");
              setCurrentIndex(0);
            }}
            className={classNames("px-2 border-b-2", {
              "border-red-500 text-red-600": activeTab === "events",
              "border-transparent text-gray-500": activeTab !== "events",
            })}
          >
            Events
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden max-w-[1200px] mx-auto px-4">
        {/* Carousel Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {groupedData.map((group, groupIdx) => (
            <div key={groupIdx} className="min-w-full flex justify-center gap-6">
              {group.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt="Slide"
                  width={550}
                  height={350}
                  className="object-contain rounded-lg"
                />
              ))}
            </div>
          ))}
        </div>

        {/* Prev/Next Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 -translate-y-1/2 left-2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
          disabled={currentIndex === 0}
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 -translate-y-1/2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
          disabled={currentIndex === groupedData.length - 1}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default SportEvent;
