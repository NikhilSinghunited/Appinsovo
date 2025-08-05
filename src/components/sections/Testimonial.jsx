'use client';

import React from 'react';
import Image from 'next/image'
const testimonials = [
  {
    name: 'ARPIT NARVEKAR',
    image: '/table_tennis.png', // update with your path
    quote:
      'A step in the right direction, a much needed platform with a lot of transparency and great expertise to get our children ready to become the next big Athletes and sports person.',
  },
  {
    name: 'SANDEEP PATIL',
    image: '/table_tennis.png',
    quote:
      'There was a need for such a platform that helps my child grow physically and makes him mentally strong.',
  },
  {
    name: 'TAMRIKA TYAGI',
    image: '/table_tennis.png',
    quote:
      'Gamehunt Academy has taken away the worry of our child’s security when he goes for his training outside school, very reliable and trustworthy.',
  },
];

export default function Testimonials() {
  return (

    <div className="flex flex-col lg:flex-row">
      {/* Left Content */}
      <div className="w-full flex flex-col  gap-2 items-center   lg:w-[30%] text-center justify-center">
        <h2 className="text-3xl md:text-3xl font-bold text-black  ">
          What our customer <br /> are saying
        </h2>
        <div className="flex items-center justify-center">
          <Image 
            src="/quete_red.png"
            alt="Quote Icon"
            width={80}
            height={80}
            className='w-10 h-10 bg-contain bg-no-repeat bg-center'
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
              className="w-full h-auto md:w-[350px] md:h-[350px] mt-20 bg-white rounded-lg shadow-lg p-6 text-center flex flex-col justify-between items-center "
            >
              {/* Avatar */}
              <div className="w-14 h-14 p-3 mx-auto rounded-full overflow-hidden mb-4 border border-gray-300">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Name */}
              <h4 className="font-bold text-base text-gray-800 mb-2 uppercase">
                {item.name}
              </h4>

              {/* Quote Icon */}
              <div className="text-red-500 text-xl mb-1 leading-none">“</div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.quote}
              </p>
              <div className="text-red-500 text-xl mb-1 leading-none">”</div>
            </div>
          ))}
        </div>
      </div>

    </div>

  );
}
