import WhyTrek from "@/components/components/WhyTrek";
import AdventureType from "@/components/components/AdventureType";
import FeaturedDestinations from "@/components/components/FeaturedDestinations";
import CallToAction from "@/components/components/CallToAction";
import Overview from "@/components/components/Overview";
import RouteMap from "@/components/components/RouteMap";
import Itinerary from "@/components/components/Itinerary";
import AvailableDates from "@/components/components/AvailableDates";
import PackingList from "@/components/components/Packing";
import FAQSection from "@/components/components/FAQSection";
import Gallery from "@/components/components/Gallery";
import Reviews from "@/components/components/Reviews";
import SimilarAdventures from "@/components/components/SimilarAdventure";

export default function Regions() {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased overflow-x-hidden">

      {/* <Hero /> */}
      <main className="flex-grow pt-24 pb-16 px-4 md:px-8 lg:px-16 container mx-auto max-w-7xl">
        <Overview />
        <RouteMap />
        <Itinerary />
        <AvailableDates />
        <PackingList />
        <FAQSection />
        <Gallery />
        <Reviews />
        <SimilarAdventures />
       {/* <WhyTrek />
       <AdventureType /> */}
     
      </main>
  
    </div>
  );
}