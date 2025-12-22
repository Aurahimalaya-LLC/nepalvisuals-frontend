"use client";

import Overview from "@/components/Overview";
import RouteMap from "@/components/RouteMap";
import Itinerary from "@/components/Itinerary";
import AvailableDates from "@/components/AvailableDates";
import PackingList from "@/components/Packing";
import FAQSection from "@/components/FAQSection";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import SimilarAdventures from "@/components/SimilarAdventure";
import Navbar from "@/components/Navbar";
import TrekHero from "@/components/TrekHero";
import BookingWidget from "@/components/BookingWidget";

export default function Regions() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased overflow-x-hidden">
      <Navbar />
      <TrekHero />
      <main className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl pt-16 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-15 md:space-y-24">
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
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              <BookingWidget />

              <div className="bg-surface-dark rounded-3xl border border-white/5 p-6">
                <h3 className="text-lg font-bold text-white mb-4">
                  What's Included
                </h3>
                <ul className="space-y-3">
                  {[
                    "Airport transfers by private vehicle",
                    "Kathmandu to Lukla flights",
                    "Experienced English speaking guide",
                    "Sagarmatha National Park entry permit",
                    "Medical kit & Oximeter",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <span className="material-symbols-outlined text-green-500 text-lg mt-0.5">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-4 text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                  View full inclusions list
                  <span className="material-symbols-outlined text-sm">
                    open_in_new
                  </span>
                </button>
              </div>

              <div className="bg-gradient-to-br from-secondary to-surface-dark rounded-3xl border border-white/5 p-6 text-center">
                <span className="material-symbols-outlined text-4xl text-white mb-3">
                  support_agent
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  Need Help?
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  Talk to an expert who has been there.
                </p>
                <button className="w-full py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl flex items-center justify-center gap-2 mb-3 shadow-lg shadow-[#25D366]/20">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </button>
                <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/10 transition-colors text-sm">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
