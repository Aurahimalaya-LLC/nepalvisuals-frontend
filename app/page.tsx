import Activities from "@/components/Activities";
import FAQSection from "@/components/FAQSection";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/NewsLetter";
import PopularPackages from "@/components/PopularPackages";
import StoriesFromTrail from "@/components/StoriesFromTrail";
import Sustainability from "@/components/Sustainability";
import TrustedPartners from "@/components/TrustedPartners";
import UpcomingDepartures from "@/components/UpcomingDepartures";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full">
      <Navbar />
      <Hero />
      <main className="flex-grow pt-12 pb-16 px-4 md:px-8 lg:px-16 container mx-auto max-w-7xl relative z-20 ">
        <Activities />
        <FeaturedDestinations />
        <PopularPackages />
        <UpcomingDepartures />
        <Sustainability />
        <StoriesFromTrail />
        <TrustedPartners />
        <FAQSection />
        <Newsletter />
      </main>
    </div>
  );
}
