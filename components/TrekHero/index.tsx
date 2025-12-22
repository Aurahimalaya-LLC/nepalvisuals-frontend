import React from "react";

const TrekHero = () => {
  return (
    <header className="relative min-h-[85vh] flex items-end overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110 animate-pulse-slow"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRhAgmyafMtZInsKcZjC6PERny9fQkTYXnQc2xe3Dn2hSTQ2D2bEPyiLHkfuqDOIamvdyHiV6lOBJgYm_mzEkiQeGcxj6XcjWqapph7IcKty8Mcbs7CdDGengbgwALm5rAVVQmydirCKo5JLlaeh-L3z0AJYecOSmxkI8TpR7pMITU12XLou8iXgEwQe7_3NbQK8rZDzw39TV_j5JnhmpBQ55T2U0LJGQROBZEKe8IxNVO4-xOcOfSMr99VgNtWGMAriy0J_zOV2il')`,
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl pb-16 pt-32 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-6">
              <span className="material-symbols-outlined text-sm text-primary">
                landscape
              </span>
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Most Popular
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
              Everest Base Camp <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">
                Expedition
              </span>
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm md:text-base font-medium text-gray-200">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  schedule
                </span>
                <span>14 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  bar_chart
                </span>
                <span>Challenging</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  groups
                </span>
                <span>Max 12 People</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary fill-current">
                  star
                </span>
                <span>4.9 (124 Reviews)</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 min-w-[280px]">
            <div className="text-right">
              <p className="text-sm text-text-secondary uppercase tracking-wider mb-1">
                Starting Price
              </p>
              <div className="flex items-baseline justify-end gap-2">
                <span className="text-4xl md:text-5xl font-bold text-white">
                  $1,200
                </span>
                <span className="text-text-secondary text-lg line-through">
                  $1,450
                </span>
              </div>
              <p className="text-xs text-primary font-bold mt-1">
                Save $250 - Early Bird Offer
              </p>
            </div>
            <button className="w-full h-14 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all flex items-center justify-center gap-2 group">
              Book This Trek
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TrekHero;
