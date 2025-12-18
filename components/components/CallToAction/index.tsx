import React from "react";
import { IconBase } from "react-icons";

const CallToAction = () => {
  return (
    <section className="md:py-20">
      <div className="bg-gradient-to-r from-surface-dark to-surface-darker rounded-[2.5rem] p-8 md:p-12 border border-white/5 relative overflow-hidden shadow-2xl">
        {/* Decorative Blurs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not sure where to start?
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Our expert team of Sherpas and travel consultants can help you
              find the perfect region and itinerary based on your experience,
              time, and budget.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6">
              {["Custom Itineraries", "Expert Advice", "24/7 Support"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-white font-medium"
                  >
                    <IconBase name="check_circle" className="text-primary" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto min-w-[220px]">
            <button className="px-8 py-4 rounded-full bg-white text-surface-darker font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0">
              Talk to an Expert
            </button>
            <button className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-bold text-lg hover:bg-white/5 transition-colors">
              Download Nepal Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
