
import Activities from "@/components/components/Activities";
import FAQSection from "@/components/components/FAQSection";
import FeaturedDestinations from "@/components/components/FeaturedDestinations";
import Newsletter from "@/components/components/NewsLetter";
import PopularPackages from "@/components/components/PopularPackages";
import StoriesFromTrail from "@/components/components/StoriesFromTrail";
import Sustainability from "@/components/components/Sustainability";
import TrustedPartners from "@/components/components/TrustedPartners";
import UpcomingDepartures from "@/components/components/UpcomingDepartures";


export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full">
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
