import React from "react";

const RealStories = () => {
  return (
 <section className="mb-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 tracking-tight leading-tight">
              Real Stories. Real Treks. <br />
              <span className="text-primary">Real Nepal.</span>
            </h2>
            <div className="bg-surface-dark p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden shadow-2xl shadow-black/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none"></div>
              <div className="relative z-10 space-y-8 text-lg md:text-xl text-text-secondary leading-relaxed font-medium">
                <p>
                  <span className="text-white font-bold">Nepal Visuals</span> was born from a simple idea - to share the raw beauty of Nepal with the world. What began as a passion for storytelling through visuals has now grown into a mission to offer authentic Himalayan trekking experiences, rooted in trust, transparency, and heart.
                </p>
                <p>
                  We officially launched in <span className="text-white font-bold">early 2024</span>, and while we’re new as a travel company, we’re not new to the mountains. This year alone, we’ve already guided <span className="text-primary font-bold">three incredible travelers</span> to Everest Base Camp — each one returned home with unforgettable memories and friendships.
                </p>
                <p>
                  We’ve also secured <span className="text-white font-bold">four group bookings</span> for this coming autumn season. They trusted us, and we delivered — with heart, hustle, and Himalayan hospitality.
                </p>
              </div>
              <div className="mt-10 pt-8 border-t border-white/5 flex justify-center">
                <a className="inline-flex items-center gap-2 text-primary hover:text-white font-bold transition-colors group" href="#">
                  Read our full story here
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>
  );
};

export default RealStories;
