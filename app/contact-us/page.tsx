import Activities from "@/components/Activities";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MapSection from "@/components/MapSection";
import Navbar from "@/components/Navbar";

export default function ContactUs() {
  return (
    <div className="relative flex flex-col min-h-screen w-full">
      <Navbar />
      <Hero />
      {/* <Hero /> */}
      <main className="flex-grow pt-12 pb-16 px-4 md:px-8 lg:px-16 container mx-auto max-w-7xl relative z-20 ">
        <ContactSection />
        <FAQSection />
        <MapSection />
      </main>
    </div>
  );
}
