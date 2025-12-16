import React from "react";

const Hero: React.FC = () => {
  return (
    <header className="relative -mt-[100px] min-h-[85vh] flex items-center justify-center overflow-hidden rounded-b-2xl md:rounded-b-[3rem]">
      <div className="absolute inset-0 z-0 bg-surface-darker">
        <video
          autoPlay
          className="absolute inset-0 w-full h-full object-cover"
          loop
          muted
          playsInline
          poster="https://lh3.googleusercontent.com/aida-public/AB6AXuB7oJvicfMYF2tTDspjyC_dNc6L_u3AS3u1gLba-Lnwk50u3YZOQu3BkxHIjp6qOm8t6-NdGiFKjAxtFwVL1N5XTTmnRQEsYogfMQZfRLPcoYucuMk0ybPhdPiwooV3LVT_bSwr3Ld2FpmTFJP4MwAgLfiztLA7j1qaUiTbpBEa-bWWzUGuIU_wFBqd0T-S_5J3Xle-0CUZZp84IdPuI3fpZyaG0t50baFmMaApe8X6CrvYDROuk7W1PI6KncjUpZ3zKUnhjmCd4hWa"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-hiker-on-a-snowy-mountain-peak-40488-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-secondary-dark/60 via-secondary-dark/30 to-background-dark/90"></div>
      
      <div className="relative z-10 container mx-auto px-4 pt-32 text-center max-w-5xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30 border border-white/20 backdrop-blur-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-xs font-medium text-white uppercase tracking-wider">New Season Open</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
          Conquer the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">Unseen Peaks</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-10 font-medium drop-shadow-md">
          Professional guides, unforgettable trails, and the adventure of a lifetime waiting just beyond the horizon.
        </p>
        
        <div className="w-full max-w-5xl mx-auto mt-8">
          <div className="bg-surface-dark/40 backdrop-blur-xl border border-white/10 p-2 rounded-[2rem] shadow-2xl">
            <form className="flex flex-col md:flex-row gap-2">
              <div className="relative flex-grow group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">location_on</span>
                </div>
                <input
                  className="w-full h-16 bg-surface-darker/60 border border-white/5 rounded-[1.5rem] pl-14 pr-4 text-white placeholder-text-secondary focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none font-medium"
                  placeholder="Where do you want to go?"
                  type="text"
                />
              </div>
              <div className="relative md:w-[220px] group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">calendar_month</span>
                </div>
                <input
                  className="w-full h-16 bg-surface-darker/60 border border-white/5 rounded-[1.5rem] pl-14 pr-4 text-white placeholder-text-secondary focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none font-medium"
                  // onBlur={() => {}}
                  // onFocus={() => {}}
                  placeholder="Date"
                  type="text"
                />
              </div>
              <div className="relative md:w-[220px] group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">hiking</span>
                </div>
                <select className="w-full h-16 bg-surface-darker/60 border border-white/5 rounded-[1.5rem] pl-14 pr-10 text-white placeholder-text-secondary focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none appearance-none cursor-pointer font-medium">
                  <option className="bg-surface-dark text-text-secondary" value="">Activity</option>
                  <option className="bg-surface-dark" value="trekking">Trekking</option>
                  <option className="bg-surface-dark" value="climbing">Climbing</option>
                  <option className="bg-surface-dark" value="tours">Tours</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400">expand_more</span>
                </div>
              </div>
              <button
                className="h-16 px-8 bg-primary hover:bg-primary-dark text-white font-bold rounded-[1.5rem] transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95 flex items-center justify-center gap-2 md:w-auto w-full"
                type="button"
              >
                <span className="hidden lg:inline">Search</span>
                <span className="material-symbols-outlined">search</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
