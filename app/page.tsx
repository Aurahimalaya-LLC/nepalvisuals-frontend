
import Activities from "@/components/components/Activities";
import ContactSection from "@/components/components/ContactSection";
import FAQSection from "@/components/components/FAQSection";
import FeaturedDestinations from "@/components/components/FeaturedDestinations";
import Footer from "@/components/components/Footer";
import Hero from "@/components/components/Hero";
import MapSection from "@/components/components/MapSection";
import Navbar from "@/components/components/Navbar";
import PopularPackages from "@/components/components/PopularPackages";
import StoriesFromTrail from "@/components/components/StoriesFromTrail";
import Sustainability from "@/components/components/Sustainability";
import TrustedPartners from "@/components/components/TrustedPartners";
import UpcomingDepartures from "@/components/components/UpcomingDepartures";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full">
      <Navbar />
      <Hero />
      <main className="flex-grow pt-12 pb-16 px-4 md:px-8 lg:px-16 container mx-auto max-w-7xl relative z-20 ">
        {/* <ContactSection />
        <FAQSection />
        <MapSection /> */}
        <Activities />
        <FeaturedDestinations />
        <PopularPackages />
        <UpcomingDepartures />
        <Sustainability />
        {/* <FAQSection /> */}
        <StoriesFromTrail />
        <TrustedPartners />
        {/* <ContactSection /> */}
      </main>
      <Footer />
    </div>
  );
}
