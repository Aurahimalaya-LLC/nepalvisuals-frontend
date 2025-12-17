import React from 'react';

const SimilarAdventures = () => {
  return (
    <section className="py-16 bg-surface-darker border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Similar Adventures
          </h2>
          <a
            href="#"
            className="text-sm font-bold text-primary hover:text-white transition-colors"
          >
            View all treks
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
                name: "Annapurna Circuit",
                days: "18 Days",
                price: "$1,150",
                rating: 4.7,
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwWW3lEJ9YYM6nDdQ_clegxQ7nPWH-Trbv40arFyiafhUfI8TSQG1BbV5qC8CVnbZTdocnjJPmXxOW8gwfFA04Byy5vrMjRBD8rXQCFOAKi77ATkMO6rJbEN7truIDQj484smO4H2WPG9dNRmsDO33DoBkSP7HikkIFWIqYm89TDPRD-g9CAIz4zoCF_ixKAl_E7arOVyQ36V-Nl3tdG9w0ZAfFYMJZsq7qHFyh6AeiRd81D4QcIIVtWzZjZmBGyoIMmZ020UPJGo5"
            },
            {
                name: "Manaslu Circuit",
                days: "14 Days",
                price: "$1,350",
                rating: 4.8,
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5MvfLhFzFM4I4GsHXx4-NVj58cLSQIVtfK7M37DQio0H8CPBdPCtvfWnnGcKSm4cCxax8DU8ngEWgHK-zekNkQZr-T4rsRU149T3vhS4xP4Fzu1IZzryaddXmwKMulICERdE4MqDNDZ6tbdffDsvn6E_GWEUogvFPQ3MT8iaOiVlCmkrWlb1SkSXylmy4ax0twHtDND9YifM2DQorAsSmHEmOLxTMcclbE5u8wOpaTOW1JUPbuQ1LdQXYDxAL3GaeYT_4lhNq51RO"
            },
            {
                name: "Langtang Valley",
                days: "10 Days",
                price: "$850",
                rating: 4.5,
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRhAgmyafMtZInsKcZjC6PERny9fQkTYXnQc2xe3Dn2hSTQ2D2bEPyiLHkfuqDOIamvdyHiV6lOBJgYm_mzEkiQeGcxj6XcjWqapph7IcKty8Mcbs7CdDGengbgwALm5rAVVQmydirCKo5JLlaeh-L3z0AJYecOSmxkI8TpR7pMITU12XLou8iXgEwQe7_3NbQK8rZDzw39TV_j5JnhmpBQ55T2U0LJGQROBZEKe8IxNVO4-xOcOfSMr99VgNtWGMAriy0J_zOV2il"
            }
          ].map((trek, i) => (
            <div key={i} className="group relative flex flex-col gap-4 p-3 bg-surface-dark rounded-[2rem] border border-white/5 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
              <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden">
                <div className="absolute top-4 right-4 z-10 bg-secondary/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10 shadow-md">
                  {trek.days}
                </div>
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={trek.img}
                  alt={trek.name}
                />
              </div>
              <div className="px-3 pb-3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">
                    {trek.name}
                  </h3>
                  <div className="flex items-center gap-1 text-primary">
                    <span className="material-symbols-outlined text-[16px] fill-current">
                      star
                    </span>
                    <span className="text-sm font-bold text-white">{trek.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-lg font-bold text-white">{trek.price}</p>
                  <button className="h-8 w-8 rounded-full bg-white/5 hover:bg-primary text-white flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarAdventures;
