'use client';

import React from 'react';
import Image from 'next/image'
const testimonials = [
  {
    name: 'ARPIT NARVEKAR',
    image: '/avatars/avatar1.jpg', // update with your path
    quote:
      'A step in the right direction, a much needed platform with a lot of transparency and great expertise to get our children ready to become the next big Athletes and sports person.',
  },
  {
    name: 'SANDEEP PATIL',
    image: '/avatars/avatar2.jpg',
    quote:
      'There was a need for such a platform that helps my child grow physically and makes him mentally strong.',
  },
  {
    name: 'TAMRIKA TYAGI',
    image: '/avatars/avatar3.jpg',
    quote:
      'Gamehunt Academy has taken away the worry of our child’s security when he goes for his training outside school, very reliable and trustworthy.',
  },
];

export default function Testimonials() {
  return (

    <div className="flex flex-col lg:flex-row">
      {/* Left Content */}
      <div className="w-full flex flex-col  gap-2 items-center   lg:w-[40%] text-center mt-12 mb-10  lg:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black  ">
          What our customer <br /> are saying
        </h2>
        <div className=" leading-none select-none opacity-60">
          <Image 
            src="/quete_red.png"
            alt="Quote Icon"
            width={80}
            height={80}
          />
        </div>
      </div>

      {/* Right Testimonials */}
      <div
        style={{
          backgroundImage: "url('/testonomialbg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
        }}
        className="h-auto py-20 px-4"
      >
        <div className="w-full  py-10 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-full h-auto md:w-[300px] md:h-[300px] mt-20 bg-white rounded-lg shadow-lg p-6 text-center flex flex-col justify-between items-center "
            >
              {/* Avatar */}
              <div className="w-14 h-14 mx-auto rounded-full overflow-hidden mb-4 border border-gray-300">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h4 className="font-bold text-base text-gray-800 mb-2 uppercase">
                {item.name}
              </h4>

              {/* Quote Icon */}
              <div className="text-red-500 text-xl mb-2 leading-none">“</div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.quote}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>

  );
}
