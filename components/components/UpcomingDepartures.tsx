import React from "react";

const UpcomingDepartures = () => {
  const departures = [
    {
      name: "Everest Base Camp",
      duration: "14 Days",
      difficulty: "Difficult",
      startDate: { month: "Oct 2024", day: "15" },
      endDate: { month: "Oct 2024", day: "29" },
      spotsLeft: 4,
      spotsTotal: 10,
      status: "orange",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRhAgmyafMtZInsKcZjC6PERny9fQkTYXnQc2xe3Dn2hSTQ2D2bEPyiLHkfuqDOIamvdyHiV6lOBJgYm_mzEkiQeGcxj6XcjWqapph7IcKty8Mcbs7CdDGengbgwALm5rAVVQmydirCKo5JLlaeh-L3z0AJYecOSmxkI8TpR7pMITU12XLou8iXgEwQe7_3NbQK8rZDzw39TV_j5JnhmpBQ55T2U0LJGQROBZEKe8IxNVO4-xOcOfSMr99VgNtWGMAriy0J_zOV2il"
    },
    {
      name: "Annapurna Circuit",
      duration: "18 Days", 
      difficulty: "Moderate",
      startDate: { month: "Nov 2024", day: "02" },
      endDate: { month: "Nov 2024", day: "20" },
      spotsLeft: 8,
      spotsTotal: 12,
      status: "green",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwWW3lEJ9YYM6nDdQ_clegxQ7nPWH-Trbv40arFyiafhUfI8TSQG1BbV5qC8CVnbZTdocnjJPmXxOW8gwfFA04Byy5vrMjRBD8rXQCFOAKi77ATkMO6rJbEN7truIDQj484smO4H2WPG9dNRmsDO33DoBkSP7HikkIFWIqYm89TDPRD-g9CAIz4zoCF_ixKAl_E7arOVyQ36V-Nl3tdG9w0ZAfFYMJZsq7qHFyh6AeiRd81D4QcIIVtWzZjZmBGyoIMmZ020UPJGo5"
    },
    {
      name: "Manaslu Winter Trek",
      duration: "12 Days",
      difficulty: "Challenging", 
      startDate: { month: "Dec 2024", day: "10" },
      endDate: { month: "Dec 2024", day: "22" },
      spotsLeft: 10,
      spotsTotal: 12,
      status: "green",
      isNew: true,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5MvfLhFzFM4I4GsHXx4-NVj58cLSQIVtfK7M37DQio0H8CPBdPCtvfWnnGcKSm4cCxax8DU8ngEWgHK-zekNkQZr-T4rsRU149T3vhS4xP4Fzu1IZzryaddXmwKMulICERdE4MqDNDZ6tbdffDsvn6E_GWEUogvFPQ3MT8iaOiVlCmkrWlb1SkSXylmy4ax0twHtDND9YifM2DQorAsSmHEmOLxTMcclbE5u8wOpaTOW1JUPbuQ1LdQXYDxAL3GaeYT_4lhNq51RO"
    }
  ];

  return (
    <section className="mb-24 px-4 md:px-8 lg:px-16 container mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Booking Fast for Autumn 2024</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Upcoming Departures</h2>
          <p className="text-text-secondary max-w-xl">Secure your spot on our most popular expeditions for the upcoming season.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-full border border-white/10 bg-surface-dark hover:bg-white/5 text-white text-sm font-medium transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            Filter
          </button>
          <button className="px-4 py-2 rounded-full border border-white/10 bg-surface-dark hover:bg-white/5 text-white text-sm font-medium transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            Full Calendar
          </button>
        </div>
      </div>
      
      <div className="flex flex-col gap-4">
        {departures.map((departure, index) => (
          <div key={index} className="group bg-surface-dark p-4 md:p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex items-center gap-4 flex-grow md:w-1/3">
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 relative">
                {departure.isNew && (
                  <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] z-10 flex items-center justify-center font-bold text-white text-xs uppercase tracking-widest border border-primary/30">
                    New
                  </div>
                )}
                <img
                  alt={departure.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={departure.image}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{departure.name}</h3>
                <div className="flex items-center gap-2 text-xs text-text-secondary mt-1">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">schedule</span> {departure.duration}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">hiking</span> {departure.difficulty}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 md:items-center flex-grow justify-between w-full md:w-auto">
              <div className="flex items-center gap-3">
                <div className="bg-surface-darker px-3 py-2 rounded-xl text-center min-w-[85px] border border-white/10 shadow-sm group-hover:border-primary/20 transition-colors">
                  <span className="block text-[10px] font-bold text-primary uppercase tracking-widest mb-0.5">{departure.startDate.month}</span>
                  <span className="block text-2xl font-black text-white">{departure.startDate.day}</span>
                </div>
                <span className="material-symbols-outlined text-white/20">arrow_forward</span>
                <div className="bg-surface-darker px-3 py-2 rounded-xl text-center min-w-[85px] border border-white/10 shadow-sm group-hover:border-primary/20 transition-colors">
                  <span className="block text-[10px] font-bold text-primary uppercase tracking-widest mb-0.5">{departure.endDate.month}</span>
                  <span className="block text-2xl font-black text-white">{departure.endDate.day}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 justify-between md:justify-start w-full md:w-auto">
                <div className="flex flex-col items-end md:items-start">
                  <span className={`text-xs font-bold mb-1 flex items-center gap-1 ${departure.status === 'orange' ? 'text-orange-400' : 'text-green-500'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${departure.status === 'orange' ? 'bg-orange-400' : 'bg-green-500'}`}></span>
                    {departure.status === 'orange' ? `${departure.spotsLeft} Spots Left` : 'Available'}
                  </span>
                  <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${departure.status === 'orange' ? 'bg-orange-400 w-[80%]' : 'bg-green-500 w-[40%]'}`}></div>
                  </div>
                </div>
                <button className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${departure.status === 'orange' ? 'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20' : 'bg-white/10 hover:bg-primary hover:text-white text-white border border-white/10 hover:border-primary/50'}`}>
                  {departure.status === 'orange' ? 'Book Now' : 'View Details'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingDepartures;