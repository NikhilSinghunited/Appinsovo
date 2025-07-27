import Image from "next/image";

import Hero from "@/components/sections/HeroSection"
import VenuesCarousel from "@/components/sections/VenuesCarouselFilter";
import SportEvent from "@/components/sections/SportsEvent";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import OnlineSession from "@/components/sections/OnlineSession";
import Testimonials from "@/components/sections/Testimonial";
import StatsSection from "@/components/sections/StatsSection";
export default function Home() {
  return (
    <>
      <Hero />
      <VenuesCarousel />
      <SportEvent />
      <WhyChooseUs />
      <OnlineSession />
      <Testimonials />
      <StatsSection/>
    </>

  );
}
