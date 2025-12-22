import WhyTrek from "@/components/WhyTrek";
import AdventureType from "@/components/AdventureType";
import FeaturedAdventures from "@/components/FeaturedAdventure";
import CallToAction from "@/components/CallToAction";
import Navbar from "@/components/Navbar";
import RegionHero from "@/components/RegionHero";

export default function Regions() {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased overflow-x-hidden">
      <Navbar />
      <RegionHero />
      <main className="flex-grow pt-0 md:pt-24 pb-16 px-4 md:px-8 lg:px-16 container mx-auto max-w-7xl">
        <WhyTrek />
        <AdventureType />
        <FeaturedAdventures />
        <CallToAction />
      </main>
    </div>
  );
}
