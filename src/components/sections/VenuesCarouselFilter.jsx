"use client"
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

export const sportsVenue = [
  {
    id: 1,
    name: 'Justplay sports club',
    category: 'Cricket',
    location: 'Sector 21, Noida',
    distance: '3 kms',
    rating: 4.7,
    votes: 164,
    image: '/court-trufs.png',
  },
  {
    id: 2,
    name: 'Grand Arena Sports County',
    category: 'Football',
    location: 'Sector 21, Noida',
    distance: '5 kms',
    rating: 4.7,
    votes: 164,
    image: '/tabele_tennis.png',
  },
  {
    id: 3,
    name: 'Justplay sports club',
    category: 'Badminton',
    location: 'Sector 21, Noida',
    distance: '4 kms',
    rating: 4.7,
    votes: 164,
    image: '/table_tennis.png',
  },
  {
    id: 4,
    name: 'Aqua World',
    category: 'Swimming',
    location: 'Sector 18, Noida',
    distance: '6 kms',
    rating: 4.6,
    votes: 98,
    image: '/swimming.png',
  },
  {
    id: 5,
    name: 'Tennis Pro Arena',
    category: 'Lawn Tennis',
    location: 'Sector 23, Noida',
    distance: '7 kms',
    rating: 4.8,
    votes: 201,
    image: '/lawntennis.png',
  },
];

const categories = ['All', ...new Set(sportsVenue.map(item => item.category))];

const useVisibleCards = () => {
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1536) setVisibleCards(5); // 2xl
      else if (width >= 1280) setVisibleCards(4); // xl
      else if (width >= 1024) setVisibleCards(3); // lg
      else if (width >= 768) setVisibleCards(2); // md
      else setVisibleCards(1); // sm
    };

    handleResize(); // Set initially
    window.addEventListener('resize', handleResize); // On resize

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return visibleCards;
};

const VenueCarousel = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = useVisibleCards();

  const filteredVenues =
    selectedCategory === 'All'
      ? sportsVenue
      : sportsVenue.filter(v => v.category === selectedCategory);

  const maxIndex = Math.max(0, filteredVenues.length - visibleCards);
  const cardWidth = 280; // px
  const gap = 16; // px
  const translateX = (cardWidth + gap) * currentIndex;

  const handleNext = () => {
    if (currentIndex < maxIndex) setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  return (
    <div className="px-4 md:px-8 py-6 max-w-screen-2xl mx-auto">
        <h1 className='text-center font-bold text-2xl mb-4'>Venues Near Me</h1>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === category
                ? 'bg-blue-600 text-white border-blue-600'
                : 'text-gray-800 bg-white border-gray-300'
            } hover:bg-blue-500 hover:text-white transition`}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentIndex(0);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${translateX}px)`,
            width: (cardWidth + gap) * filteredVenues.length,
          }}
        >
          {filteredVenues.map(venue => (
            <div
              key={venue.id}
              className="min-w-[280px] mr-4 bg-white rounded-lg shadow-md"
            >
              <Image
                src={venue.image}
                alt={venue.name}
                width={280}
                height={180}
                className="h-20 w-full object-contain rounded-t-lg"
              />
              <div className="p-3">
                <h3 className="text-lg font-semibold">{venue.name}</h3>
                <p className="text-sm text-gray-500">{venue.category}</p>
                <p className="text-sm text-gray-600">{venue.location}</p>
                <p className="text-sm text-gray-600">{venue.distance}</p>
                <div className="flex items-center mt-1">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{venue.rating}</span>
                  <span className="text-sm text-gray-400 ml-1">
                    ({venue.votes})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
          >
            ◀
          </button>
        
        
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
          >
            ▶
          </button>
        
      </div>
    </div>
  );
};

export default VenueCarousel;
