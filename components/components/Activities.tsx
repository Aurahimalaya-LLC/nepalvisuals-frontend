import React from "react";

const Activities = () => {
  const activities = [
    {
      name: "Everest Region",
      trips: 12,
      description: "Home to the world's highest peak and legendary Sherpa culture.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRhAgmyafMtZInsKcZjC6PERny9fQkTYXnQc2xe3Dn2hSTQ2D2bEPyiLHkfuqDOIamvdyHiV6lOBJgYm_mzEkiQeGcxj6XcjWqapph7IcKty8Mcbs7CdDGengbgwALm5rAVVQmydirCKo5JLlaeh-L3z0AJYecOSmxkI8TpR7pMITU12XLou8iXgEwQe7_3NbQK8rZDzw39TV_j5JnhmpBQ55T2U0LJGQROBZEKe8IxNVO4-xOcOfSMr99VgNtWGMAriy0J_zOV2il"
    },
    {
      name: "Annapurna Region", 
      trips: 8,
      description: "Diverse terrain ranging from subtropical forests to high-altitude deserts.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwWW3lEJ9YYM6nDdQ_clegxQ7nPWH-Trbv40arFyiafhUfI8TSQG1BbV5qC8CVnbZTdocnjJPmXxOW8gwfFA04Byy5vrMjRBD8rXQCFOAKi77ATkMO6rJbEN7truIDQj484smO4H2WPG9dNRmsDO33DoBkSP7HikkIFWIqYm89TDPRD-g9CAIz4zoCF_ixKAl_E7arOVyQ36V-Nl3tdG9w0ZAfFYMJZsq7qHFyh6AeiRd81D4QcIIVtWzZjZmBGyoIMmZ020UPJGo5"
    },
    {
      name: "Manaslu Region",
      trips: 5,
      description: "Experience the unspoiled beauty around the Spirit Mountain.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5MvfLhFzFM4I4GsHXx4-NVj58cLSQIVtfK7M37DQio0H8CPBdPCtvfWnnGcKSm4cCxax8DU8ngEWgHK-zekNkQZr-T4rsRU149T3vhS4xP4Fzu1IZzryaddXmwKMulICERdE4MqDNDZ6tbdffDsvn6E_GWEUogvFPQ3MT8iaOiVlCmkrWlb1SkSXylmy4ax0twHtDND9YifM2DQorAsSmHEmOLxTMcclbE5u8wOpaTOW1JUPbuQ1LdQXYDxAL3GaeYT_4lhNq51RO"
    },
    {
      name: "Langtang Region",
      trips: 6,
      description: "The closest Himalayan region to Kathmandu with rich Tamang heritage.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRhAgmyafMtZInsKcZjC6PERny9fQkTYXnQc2xe3Dn2hSTQ2D2bEPyiLHkfuqDOIamvdyHiV6lOBJgYm_mzEkiQeGcxj6XcjWqapph7IcKty8Mcbs7CdDGengbgwALm5rAVVQmydirCKo5JLlaeh-L3z0AJYecOSmxkI8TpR7pMITU12XLou8iXgEwQe7_3NbQK8rZDzw39TV_j5JnhmpBQ55T2U0LJGQROBZEKe8IxNVO4-xOcOfSMr99VgNtWGMAriy0J_zOV2il"
    },
    {
      name: "Mustang Region",
      trips: 4,
      description: "A mystical kingdom beyond the Himalayas with Tibetan culture.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHDDD37GPZ8Y4aP8F9LH7kcCUcrCjFvRT59fyRYWIrgm_hr7tviGULidA31aCXCs0LkDX56_l6SUqC8drx23v9ElkfCuR9jajUEAjyeeWXcA0EOjbow4RqDcsm7lpDTQpZ9ey3cVZCCLVdbBAphjieqv5U3hPMtaFZ0hrxSuas7VRx1_-l5L2Gd5mdMS6xO95EPCXLkfWmjr7-9HiFUJ9OfgncfzPn-OnMivnI0bJ1xto2pGVKzzH2nqGXABqktYkL1nwpO_W0GAg4"
    }
  ];

  return (
    <section className="mb-24">
      {/* Reviews Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-16 px-4">
        <div className="flex items-center gap-3 bg-surface-dark/50 px-6 py-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
          <img
            alt="Google"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZoSW711GcC0L-qFp1xD0ICQZkWgc05UJKyL5x8wTJyi-6M_2At1ZbvDedMQ-BOx7VnweMs5auZjvARvuJJIUHqayO1O2DRt_iDbJ1BPD9uLgT1ZEXVwivob68jcqQY_yB-parfwecVvehbq1J74RvZn8evuM0FePO5yfiZgX1Bd3PxhazS-0qYOznOeTKBV4atsdfTAMNGUFqOe__-mBQ2C1S6Ai7yq30iE5_ih9w9TULpy4-6M-38VJzn13tEC1advI1hxZJyGJE"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-white font-bold text-lg">4.9</span>
              <div className="flex text-[#F4B400]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm fill-current">star</span>
                ))}
              </div>
            </div>
            <span className="text-xs text-text-secondary">Based on 450+ reviews</span>
          </div>
        </div>
        
        <div className="w-px h-12 bg-white/10 hidden md:block"></div>
        
        <div className="flex items-center gap-3 bg-surface-dark/50 px-6 py-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-green-500 text-3xl">star</span>
            <span className="font-bold text-xl text-white">Trustpilot</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-white font-bold text-lg">4.8</span>
              <div className="flex text-green-500">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm fill-current">star</span>
                ))}
                <span className="material-symbols-outlined text-sm fill-current">star_half</span>
              </div>
            </div>
            <span className="text-xs text-text-secondary">Based on 320+ reviews</span>
          </div>
        </div>
      </div>

      {/* Activities Header */}
      <div className="flex items-end justify-between mb-10 px-2">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Activities</h2>
          <p className="text-text-secondary">Explore diverse landscapes and find your perfect trail.</p>
        </div>
        <div className="hidden md:flex gap-2">
          <button className="h-10 w-10 rounded-full border border-white/10 hover:border-primary hover:text-primary text-white flex items-center justify-center transition-all bg-surface-dark">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="h-10 w-10 rounded-full border border-white/10 hover:border-primary hover:text-primary text-white flex items-center justify-center transition-all bg-surface-dark">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Scrollable Activities */}
      <div className="flex overflow-x-auto gap-6 pb-6 no-scrollbar snap-x snap-mandatory">
        {activities.map((activity, index) => (
          <div key={index} className="min-w-[280px] md:min-w-[320px] snap-center group cursor-pointer">
            <div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90"></div>
              <img
                alt={activity.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={activity.image}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-1">{activity.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-primary font-bold text-lg">{activity.trips}</span>
                  <span className="text-gray-300 text-sm font-medium">Unique Trips</span>
                </div>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <p className="text-xs text-gray-300 mb-3 line-clamp-2">{activity.description}</p>
                  <span className="inline-flex items-center text-primary text-sm font-bold">
                    Explore region <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;