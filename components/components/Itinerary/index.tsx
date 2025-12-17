import React from 'react';
// import { ItineraryItem } from '../../types';

const itineraryData = [
  {
    day: "Day 1",
    title: "Arrival in Kathmandu",
    content: "Welcome to Nepal! Our representative will meet you at Tribhuvan International Airport and transfer you to your hotel. Evening welcome dinner with a briefing about the trek.",
    color: 'primary'
  },
  {
    day: "Day 2",
    title: "Flight to Lukla & Trek to Phakding",
    content: "A thrilling 30-minute flight to Lukla (2,860m), one of the world's most scenic airstrips. Begin your trek descending to the Dudh Koshi River and continue to Phakding (2,610m).",
    stats: {
      duration: "3-4 hours trek",
      ascent: "Ascent: 200m"
    },
    color: 'secondary'
  },
  {
    day: "Day 3",
    title: "Trek to Namche Bazaar",
    content: "Enter Sagarmatha National Park. Cross the famous Hillary Suspension Bridge and climb steeply to Namche Bazaar (3,440m), the bustling Sherpa capital with your first glimpse of Everest.",
    stats: {
      duration: "5-6 hours trek",
      ascent: "Ascent: 800m"
    },
    color: 'secondary'
  },
  {
    day: "Day 4",
    title: "Acclimatization Day",
    content: "Rest day to adjust to the altitude. Optional hike to Everest View Hotel for panoramic views of Everest, Lhotse, and Ama Dablam. Visit the Sherpa Culture Museum.",
    color: 'white'
  }
];

const Itinerary: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 mt-7">
        Itinerary
        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
          14 Days
        </span>
      </h2>
      <div className="relative pl-8 border-l-2 border-white/10 space-y-6">
        {itineraryData.map((item, index) => (
          <details key={index} className="relative group" open={index === 0}>
            <summary className="cursor-pointer list-none flex flex-col outline-none">
              <div
                className={`absolute -left-[39px] top-1 h-5 w-5 rounded-full bg-background-dark border-4 group-hover:scale-125 transition-transform z-10 ${
                  item.color === 'primary' ? 'border-primary' : 
                  item.color === 'secondary' ? 'border-secondary' : 'border-white/20'
                }`}
              ></div>
              <div className="flex items-center justify-between mb-2">
                <h3 className={`text-xl font-bold text-white transition-colors ${
                    item.color === 'primary' ? 'group-hover:text-primary' :
                    item.color === 'secondary' ? 'group-hover:text-secondary' : 'group-hover:text-primary'
                }`}>
                  {item.day}: {item.title}
                </h3>
                <span className="expand-icon material-symbols-outlined text-text-secondary transition-transform duration-300">
                  expand_more
                </span>
              </div>
            </summary>
            <div className="pt-2 pb-6 text-text-secondary leading-relaxed border-b border-white/5">
              <p>{item.content}</p>
              {item.stats && (
                <div className="flex gap-4 mt-4">
                  <span className="text-xs font-bold text-gray-400 bg-white/5 px-2 py-1 rounded">
                    {item.stats.duration}
                  </span>
                  <span className="text-xs font-bold text-gray-400 bg-white/5 px-2 py-1 rounded">
                    {item.stats.ascent}
                  </span>
                </div>
              )}
            </div>
          </details>
        ))}

        <div className="relative group mt-8">
          <div className="absolute -left-[39px] top-0 h-5 w-5 rounded-full bg-background-dark border-4 border-white/10"></div>
          <button className="text-primary font-bold flex items-center gap-2 hover:underline">
            Show full itinerary (Days 5-14)
            <span className="material-symbols-outlined text-sm">
              expand_more
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
