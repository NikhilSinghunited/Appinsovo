"use client"
import { useState } from 'react';
import Card from '../ui/Card';
import Carousel from '../ui/Carousel';

const SPORTS = [
  { id: 'cricket', name: 'Cricket', icon: '/assets/img/cricket_ball_icon.png' },
  { id: 'football', name: 'Football', icon: '/assets/img/Footall.png' },
  { id: 'basketball', name: 'Basketball', icon: '/assets/img/Basketball.png' },
  { id: 'table_tennis', name: 'Table Tennis', icon: '/assets/img/table_tennis.png' },
  { id: 'badminton', name: 'Badminton', icon: '/assets/img/badminton.png' },
];

const TRAINING_DATA = [
  {
    id: 1,
    image: 'https://gamehunt-data.s3.amazonaws.com/3fe6a755-8f7c-4be1-a75b-5dda9540292a.JPG',
    title: 'Gamehunt Football Academy',
    subtitle: 'football',
    creator: {
      image: 'https://gamehunt-data.s3.amazonaws.com/IMG-8455.jpg',
      name: 'Prasad Bhosale'
    },
    location: 'Kandivali, Kandivali West, Mumbai, Maharashtra, India',
    distance: '1032.13Km'
  },
  // More items...
];

export default function TrainingSection() {
  const [activeSport, setActiveSport] = useState(SPORTS[0].id);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Training by Professionals</h3>
        
        <div className="flex justify-center mb-8 border-b border-gray-300">
          {SPORTS.map(sport => (
            <button
              key={sport.id}
              className={`flex flex-col items-center px-4 py-2 ${
                activeSport === sport.id 
                  ? 'border-b-2 border-theme text-theme' 
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveSport(sport.id)}
            >
              <img src={sport.icon} alt={sport.name} className="h-8 w-8 mb-1" />
              <span className="text-sm capitalize">{sport.name}</span>
            </button>
          ))}
        </div>
        
        <div className="mb-8">
          <Carousel>
            {TRAINING_DATA.map(item => (
              <div key={item.id} className="px-2">
                <Card {...item} />
              </div>
            ))}
          </Carousel>
        </div>
        
        <div className="text-center">
          <a href="#" className="text-theme font-bold hover:underline">
            View All
          </a>
        </div>
      </div>
    </section>
  );
}