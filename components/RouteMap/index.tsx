import React from 'react';

const RouteMap = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 mt-7">
        <h2 className="text-3xl font-bold text-white">Route Map</h2>
        <div className="flex items-center gap-3">
          <button className="text-xs font-bold text-primary bg-primary/10 hover:bg-primary hover:text-white px-4 py-2 rounded-full transition-all flex items-center gap-2 border border-primary/20">
            <span className="material-symbols-outlined text-base">
              download
            </span>
            Download GPX
          </button>
          <button className="text-xs font-bold text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-all flex items-center gap-2 border border-white/10">
            <span className="material-symbols-outlined text-base">
              open_in_full
            </span>
            Full Screen
          </button>
        </div>
      </div>
      <div className="relative w-full h-[450px] bg-surface-dark rounded-3xl overflow-hidden border border-white/5 shadow-2xl shadow-black/40 group select-none">
        <div className="absolute inset-0 opacity-20">
          <svg
            height="100%"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                height="100"
                id="topo"
                patternUnits="userSpaceOnUse"
                width="100"
                x="0"
                y="0"
              >
                <path
                  d="M0 50 Q 25 25 50 50 T 100 50"
                  fill="none"
                  opacity="0.3"
                  stroke="white"
                  strokeWidth="0.5"
                ></path>
                <path
                  d="M0 25 Q 25 0 50 25 T 100 25"
                  fill="none"
                  opacity="0.3"
                  stroke="white"
                  strokeWidth="0.5"
                ></path>
                <path
                  d="M0 75 Q 25 50 50 75 T 100 75"
                  fill="none"
                  opacity="0.3"
                  stroke="white"
                  strokeWidth="0.5"
                ></path>
              </pattern>
            </defs>
            <rect fill="url(#topo)" height="100%" width="100%"></rect>
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-darker via-transparent to-surface-darker/50"></div>
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 800 450"
        >
          <path
            d="M100,380 C140,370 160,340 200,320 S280,320 330,260 S430,240 480,190 S580,160 630,140"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeDasharray="8 8"
            strokeLinecap="round"
            strokeWidth="4"
          ></path>
          <path
            className="drop-shadow-[0_0_8px_rgba(217,30,70,0.6)]"
            d="M100,380 C140,370 160,340 200,320 S280,320 330,260 S430,240 480,190 S580,160 630,140"
            fill="none"
            stroke="#d91e46"
            strokeLinecap="round"
            strokeWidth="3"
          ></path>
        </svg>

        {/* Map Points */}
        <div className="absolute bottom-[15%] left-[12%] z-10 group/point">
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover/point:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/point:translate-y-0 pointer-events-none">
            <div className="bg-surface-darker border border-white/10 px-3 py-2 rounded-xl shadow-xl">
              <p className="text-xs font-bold text-white whitespace-nowrap">
                Lukla (Start)
              </p>
              <p className="text-[10px] text-primary font-medium">
                2,860m • Day 1
              </p>
            </div>
            <div className="w-2 h-2 bg-surface-darker border-r border-b border-white/10 absolute -bottom-1 left-1/2 -translate-x-1/2 rotate-45"></div>
          </div>
          <div className="w-4 h-4 bg-white rounded-full border-4 border-surface-darker cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:scale-125 transition-transform"></div>
        </div>

        <div className="absolute bottom-[28%] left-[25%] z-10 group/point">
           <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover/point:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/point:translate-y-0 pointer-events-none">
            <div className="bg-surface-darker border border-white/10 px-3 py-2 rounded-xl shadow-xl">
              <p className="text-xs font-bold text-white whitespace-nowrap">
                Namche Bazaar
              </p>
              <p className="text-[10px] text-text-secondary font-medium">
                3,440m • Acclimatization
              </p>
            </div>
            <div className="w-2 h-2 bg-surface-darker border-r border-b border-white/10 absolute -bottom-1 left-1/2 -translate-x-1/2 rotate-45"></div>
          </div>
          <div className="w-3 h-3 bg-white rounded-full cursor-pointer hover:scale-150 transition-transform hover:bg-primary"></div>
        </div>

        <div className="absolute top-[42%] left-[41%] z-10 group/point">
          <div className="w-3 h-3 bg-white rounded-full cursor-pointer hover:scale-150 transition-transform hover:bg-primary"></div>
        </div>

        <div className="absolute top-[34%] right-[40%] z-10 group/point">
          <div className="w-3 h-3 bg-white rounded-full cursor-pointer hover:scale-150 transition-transform hover:bg-primary"></div>
        </div>

        <div className="absolute top-[22%] right-[25%] z-10 group/point">
           <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover/point:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/point:translate-y-0 pointer-events-none">
            <div className="bg-surface-darker border border-white/10 px-3 py-2 rounded-xl shadow-xl">
              <p className="text-xs font-bold text-white whitespace-nowrap">
                Gorakshep
              </p>
              <p className="text-[10px] text-text-secondary font-medium">
                5,164m • Last Camp
              </p>
            </div>
            <div className="w-2 h-2 bg-surface-darker border-r border-b border-white/10 absolute -bottom-1 left-1/2 -translate-x-1/2 rotate-45"></div>
          </div>
          <div className="w-3 h-3 bg-white rounded-full cursor-pointer hover:scale-150 transition-transform hover:bg-primary"></div>
        </div>

        <div className="absolute top-[31%] right-[21%] z-20 group/point cursor-pointer">
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 transition-all duration-300 transform pointer-events-none">
            <div className="bg-primary px-3 py-2 rounded-xl shadow-xl shadow-primary/20 flex flex-col items-center">
              <p className="text-xs font-bold text-white whitespace-nowrap">
                Everest Base Camp
              </p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="material-symbols-outlined text-[10px] text-white">
                  flag
                </span>
                <p className="text-[10px] text-white/90 font-medium">
                  5,364m
                </p>
              </div>
            </div>
            <div className="w-2 h-2 bg-primary absolute -bottom-1 left-1/2 -translate-x-1/2 rotate-45"></div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full z-10"></div>
            <div className="absolute w-8 h-8 bg-primary/40 rounded-full animate-ping"></div>
            <div className="absolute w-12 h-12 bg-primary/20 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-6 right-6 flex flex-col gap-3 z-30">
          <button className="w-10 h-10 bg-surface-darker/90 backdrop-blur border border-white/10 rounded-xl text-white hover:bg-primary hover:text-white transition-all flex items-center justify-center shadow-lg group">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
              add
            </span>
          </button>
          <button className="w-10 h-10 bg-surface-darker/90 backdrop-blur border border-white/10 rounded-xl text-white hover:bg-primary hover:text-white transition-all flex items-center justify-center shadow-lg group">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
              remove
            </span>
          </button>
        </div>

        {/* Legend */}
        <div className="absolute top-6 left-6 bg-surface-darker/80 backdrop-blur border border-white/10 p-3 rounded-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary text-sm">
              hiking
            </span>
            <span className="text-xs font-bold text-white">Route Info</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-[10px] text-gray-300">Main Path</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <span className="text-[10px] text-gray-300">Stops</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[10px] text-primary">
                flag
              </span>
              <span className="text-[10px] text-gray-300">Base Camp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RouteMap;
