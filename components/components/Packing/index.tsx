import React from 'react';

const PackingList = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-8 mt-7 mb-7">
        <h2 className="text-3xl font-bold text-white">What to Pack</h2>
        <button className="text-sm font-bold text-white bg-primary hover:bg-primary-dark px-4 py-2.5 rounded-full transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-lg">download</span>
          Printable Checklist
        </button>
      </div>
      <div className="bg-surface-dark border border-white/5 rounded-3xl p-6 md:p-8">
        <p className="text-text-secondary mb-8 leading-relaxed">
          Packing for Everest Base Camp requires careful planning. We recommend
          layering your clothing to adjust to changing temperatures. Remember to
          keep your pack weight reasonable!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          <div>
            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                checkroom
              </span>
              Clothing & Footwear
            </h4>
            <ul className="space-y-3">
              {[
                  "Waterproof hiking boots (broken in)",
                  "Down jacket (rated to -10°C/14°F)",
                  "Thermal base layers (top and bottom)",
                  "Fleece jacket or pullover",
                  "Waterproof & windproof jacket/trousers",
                  "Wool trekking socks (4-5 pairs)"
              ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                backpack
              </span>
              Gear & Equipment
            </h4>
            <ul className="space-y-3">
              {[
                  "Daypack (30-40 liters) with rain cover",
                  "Sleeping bag (rated to -15°C/5°F)",
                  "Trekking poles (adjustable)",
                  "Headlamp with extra batteries",
                  "Sunglasses (UV protection)",
                  "Refillable water bottles or bladder"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 bg-primary/5 -mx-6 md:-mx-8 px-6 md:px-8 -mb-6 md:-mb-8 rounded-b-3xl">
          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-primary text-2xl mt-1">
              info
            </span>
            <div>
              <h5 className="text-white font-bold mb-1">Important Note</h5>
              <p className="text-sm text-text-secondary leading-relaxed pb-6">
                Some gear like down jackets and sleeping bags can be rented in
                Kathmandu at reasonable prices. Our guide will assist you with
                rentals during the briefing day. Weight limit for the Lukla flight
                is 15kg (33lbs) total per person.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackingList;
