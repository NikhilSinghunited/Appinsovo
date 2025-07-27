'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const statsData = [
  { image: '/Countusers.png', label: 'Users', value: 2500 },
  { image: '/Countvenues.png', label: 'Venues', value: 489 },
  { image: '/Countcoaches.png', label: 'Coaches', value: 412 },
];

const StatsSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const sectionRef = useRef(null);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    statsData.forEach((stat, i) => {
      const step = Math.ceil(stat.value / steps);
      let current = 0;

      const counter = setInterval(() => {
        current += step;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(counter);
        }

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = current;
          return newCounts;
        });
      }, interval);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-cover bg-center py-12 text-white"
      style={{ backgroundImage: "url('/statsbg.png')" }}
    >
      <div className="w-[50%] mx-auto flex flex-col md:flex-row items-center justify-center gap-16 px-4 py-10">
        {statsData.map((stat, idx) => (
          <div key={idx} className="flex flex-row items-center justify-center gap-4 text-center">
            <Image
              src={stat.image}
              width={50}
              height={50}
              alt={stat.label}
              className="mb-2"
            />
            <div className="text-3xl font-bold mb-1">{counts[idx]}</div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;