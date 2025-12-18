import Sustainability from "@/components/components/Sustainability";
import StoriesFromTrail from "@/components/components/StoriesFromTrail";
import TrustedPartners from "@/components/components/TrustedPartners";
import MissionValues from "@/components/components/MissionValues";
import RealStories from "@/components/components/RealStories";
import TeamMembers from "@/components/components/TeamMembers";
import Newsletter from "@/components/components/NewsLetter";
import Hero from "@/components/components/Hero";
import Navbar from "@/components/components/Navbar";

export default function AboutUs() {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased overflow-x-hidden">
      <Navbar />
      <Hero />

      <main className="flex-grow pt-24 pb-16 px-4 md:px-8 lg:px-16 container mx-auto max-w-7xl">
        <RealStories />
        <MissionValues />
        <TeamMembers />
        <Sustainability />
        <StoriesFromTrail />
        <TrustedPartners />
        <Newsletter />
      </main>
    </div>
  );
}
