import React from "react";

const FeaturedDestinations = () => {
  const destinations = [
    {
      name: "Everest Base Camp",
      duration: "14 Days",
      rating: 4.9,
      price: 1200,
      description: "Stand at the foot of the world's highest peak and experience Sherpa culture firsthand.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRhAgmyafMtZInsKcZjC6PERny9fQkTYXnQc2xe3Dn2hSTQ2D2bEPyiLHkfuqDOIamvdyHiV6lOBJgYm_mzEkiQeGcxj6XcjWqapph7IcKty8Mcbs7CdDGengbgwALm5rAVVQmydirCKo5JLlaeh-L3z0AJYecOSmxkI8TpR7pMITU12XLou8iXgEwQe7_3NbQK8rZDzw39TV_j5JnhmpBQ55T2U0LJGQROBZEKe8IxNVO4-xOcOfSMr99VgNtWGMAriy0J_zOV2il"
    },
    {
      name: "Patagonia Circuit",
      duration: "9 Days", 
      rating: 4.8,
      price: 900,
      description: "Traverse the rugged landscapes of Chile and Argentina in one epic journey.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5MvfLhFzFM4I4GsHXx4-NVj58cLSQIVtfK7M37DQio0H8CPBdPCtvfWnnGcKSm4cCxax8DU8ngEWgHK-zekNkQZr-T4rsRU149T3vhS4xP4Fzu1IZzryaddXmwKMulICERdE4MqDNDZ6tbdffDsvn6E_GWEUogvFPQ3MT8iaOiVlCmkrWlb1SkSXylmy4ax0twHtDND9YifM2DQorAsSmHEmOLxTMcclbE5u8wOpaTOW1JUPbuQ1LdQXYDxAL3GaeYT_4lhNq51RO"
    },
    {
      name: "Kilimanjaro Summit",
      duration: "7 Days",
      rating: 5.0,
      price: 1500,
      description: "Climb the roof of Africa through five distinct climate zones to the icy summit.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHDDD37GPZ8Y4aP8F9LH7kcCUcrCjFvRT59fyRYWIrgm_hr7tviGULidA31aCXCs0LkDX56_l6SUqC8drx23v9ElkfCuR9jajUEAjyeeWXcA0EOjbow4RqDcsm7lpDTQpZ9ey3cVZCCLVdbBAphjieqv5U3hPMtaFZ0hrxSuas7VRx1_-l5L2Gd5mdMS6xO95EPCXLkfWmjr7-9HiFUJ9OfgncfzPn-OnMivnI0bJ1xto2pGVKzzH2nqGXABqktYkL1nwpO_W0GAg4"
    }
  ];

  return (
    <section className="mb-24">
      <div className="flex items-end justify-between mb-10 px-2">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Featured Destinations</h2>
          <p className="text-text-secondary">Curated adventures for the brave hearted.</p>
        </div>
        <a className="hidden md:flex items-center text-primary font-bold hover:underline gap-1" href="#">
          View All
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <div key={index} className="group relative flex flex-col gap-4 p-3 bg-surface-dark rounded-[2rem] border border-white/5 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
            <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden">
              <div className="absolute top-4 right-4 z-10 bg-secondary/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10 shadow-md">
                {destination.duration}
              </div>
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={destination.image}
                alt={`${destination.name} with colorful prayer flags`}
              />
            </div>
            <div className="px-3 pb-3">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                <div className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                  <span className="text-sm font-bold text-white">{destination.rating}</span>
                </div>
              </div>
              <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                {destination.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wide">Starting from</p>
                  <p className="text-xl font-bold text-white">${destination.price.toLocaleString()}</p>
                </div>
                <button className="h-10 w-10 rounded-full bg-secondary hover:bg-primary text-white flex items-center justify-center transition-colors shadow-lg">
                  <span className="material-symbols-outlined">arrow_outward</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDestinations;