import React from "react";

const PopularPackages = () => {
  const packages = [
    {
      name: "Annapurna Circuit",
      duration: "18 Days",
      rating: 4.7,
      price: 1150,
      description: "Complete loop around the Annapurna range with diverse terrain.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwWW3lEJ9YYM6nDdQ_clegxQ7nPWH-Trbv40arFyiafhUfI8TSQG1BbV5qC8CVnbZTdocnjJPmXxOW8gwfFA04Byy5vrMjRBD8rXQCFOAKi77ATkMO6rJbEN7truIDQj484smO4H2WPG9dNRmsDO33DoBkSP7HikkIFWIqYm89TDPRD-g9CAIz4zoCF_ixKAl_E7arOVyQ36V-Nl3tdG9w0ZAfFYMJZsq7qHFyh6AeiRd81D4QcIIVtWzZjZmBGyoIMmZ020UPJGo5"
    },
    {
      name: "Langtang Valley",
      duration: "10 Days",
      rating: 4.5,
      price: 850,
      description: "The valley of glaciers, close to Kathmandu yet wild.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRhAgmyafMtZInsKcZjC6PERny9fQkTYXnQc2xe3Dn2hSTQ2D2bEPyiLHkfuqDOIamvdyHiV6lOBJgYm_mzEkiQeGcxj6XcjWqapph7IcKty8Mcbs7CdDGengbgwALm5rAVVQmydirCKo5JLlaeh-L3z0AJYecOSmxkI8TpR7pMITU12XLou8iXgEwQe7_3NbQK8rZDzw39TV_j5JnhmpBQ55T2U0LJGQROBZEKe8IxNVO4-xOcOfSMr99VgNtWGMAriy0J_zOV2il"
    },
    {
      name: "Manaslu Circuit", 
      duration: "14 Days",
      rating: 4.8,
      price: 1350,
      description: "Off-the-beaten-path trek around the world's 8th highest mountain.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5MvfLhFzFM4I4GsHXx4-NVj58cLSQIVtfK7M37DQio0H8CPBdPCtvfWnnGcKSm4cCxax8DU8ngEWgHK-zekNkQZr-T4rsRU149T3vhS4xP4Fzu1IZzryaddXmwKMulICERdE4MqDNDZ6tbdffDsvn6E_GWEUogvFPQ3MT8iaOiVlCmkrWlb1SkSXylmy4ax0twHtDND9YifM2DQorAsSmHEmOLxTMcclbE5u8wOpaTOW1JUPbuQ1LdQXYDxAL3GaeYT_4lhNq51RO"
    },
    {
      name: "Upper Mustang",
      duration: "12 Days", 
      rating: 4.9,
      price: 1800,
      description: "Explore the forbidden kingdom and its unique desert landscape.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHDDD37GPZ8Y4aP8F9LH7kcCUcrCjFvRT59fyRYWIrgm_hr7tviGULidA31aCXCs0LkDX56_l6SUqC8drx23v9ElkfCuR9jajUEAjyeeWXcA0EOjbow4RqDcsm7lpDTQpZ9ey3cVZCCLVdbBAphjieqv5U3hPMtaFZ0hrxSuas7VRx1_-l5L2Gd5mdMS6xO95EPCXLkfWmjr7-9HiFUJ9OfgncfzPn-OnMivnI0bJ1xto2pGVKzzH2nqGXABqktYkL1nwpO_W0GAg4"
    }
  ];

  return (
    <section className="mb-24">
      <div className="flex items-center justify-between mb-8 px-2">
        <h2 className="text-3xl font-bold text-white tracking-tight">Popular Packages</h2>
        <a className="text-sm font-medium text-primary hover:text-primary-dark transition-colors flex items-center gap-1" href="#">
          View all packages
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg, index) => (
          <div key={index} className="bg-surface-dark rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all group hover:shadow-lg hover:shadow-primary/5 flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img
                alt={pkg.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={pkg.image}
              />
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold text-white border border-white/10">
                {pkg.duration}
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                <div className="flex items-center gap-1 text-primary text-xs bg-primary/10 px-1.5 py-0.5 rounded-md">
                  <span className="material-symbols-outlined text-sm fill-current">star</span> {pkg.rating}
                </div>
              </div>
              <p className="text-text-secondary text-xs mb-4 line-clamp-2">{pkg.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <span className="text-xs text-text-secondary block">Price</span>
                  <span className="text-lg font-bold text-white">${pkg.price.toLocaleString()}</span>
                </div>
                <button className="text-xs font-bold text-primary hover:bg-primary hover:text-white border border-primary px-3 py-1.5 rounded-full transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularPackages;