'use client';
import Image from 'next/image';

const features = [
  {
    icon: '/whychoose_icon1.png',
    title: 'Sports Venues At Fingertips',
    desc: 'Heard anything better than a selection of sports venues that work with your schedule?',
  },
  {
    icon: '/whychoose_icon2.png',
    title: 'Assertive Coaching Camps For Persistence.',
    desc: 'It may be difficult to locate quality coaching academies in your area. As a result,',
  },
  {
    icon: '/whychoose_icon3.png',
    title: 'The GAMEHUNT ACADEMY',
    desc: 'The GameHunt Academy is a one-stop shop for schools and students seeking sports and life skills.',
  },
  {
    icon: '/whychoose_icon4.png',
    title: 'Events & Tournaments',
    desc: 'The Gamehunt is dedicated to providing numerous opportunities for young athletes to compete.',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="w-full py-12 md:py-16 bg-cover bg-center text-white"
      style={{ backgroundImage: `url('/whychoosebg.png')` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={60}
                height={60}
                className="object-contain"
              />
              <h3 className="text-base md:text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm md:text-sm text-white/90 max-w-[220px]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
