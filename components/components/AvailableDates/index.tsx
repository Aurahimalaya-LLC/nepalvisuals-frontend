import React from 'react';

const AvailableDates = () => {
  return (
    <section id="available-dates" className="scroll-mt-32">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">Available Dates</h2>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="text-sm text-text-secondary font-medium">
            Filling Fast
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 bg-surface-dark border border-white/5 rounded-3xl p-6 md:p-8">
        
        {/* Calendar Column */}
        <div className="xl:col-span-2 flex flex-col gap-4">
          <h3 className="text-lg font-bold text-white mb-2">Select Start Date</h3>
          <div className="bg-surface-darker rounded-2xl border border-white/5 p-4">
            <div className="flex items-center justify-between mb-4 px-2">
              <button className="text-text-secondary hover:text-white transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <h4 className="text-white font-bold">October 2024</h4>
              <button className="text-text-secondary hover:text-white transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                  <div key={d} className="text-xs text-text-secondary font-bold py-2">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
              <div className="p-2 text-sm text-text-secondary/30">29</div>
              <div className="p-2 text-sm text-text-secondary/30">30</div>
              {[...Array(31)].map((_, i) => {
                  const day = i + 1;
                  const is15 = day === 15;
                  const is22 = day === 22;
                  if(is15) {
                      return (
                        <button key={day} className="relative p-2 rounded-lg bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 hover:scale-110 transition-transform group">
                        {day}
                        <span className="absolute -top-1 -right-1 flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        </button>
                      )
                  }
                  if(is22) {
                      return (
                        <button key={day} className="relative p-2 rounded-lg hover:bg-white/10 text-white font-bold text-sm border border-primary text-primary transition-all group">
                        {day}
                        </button>
                      )
                  }
                  return (
                    <div key={day} className="p-2 text-sm text-text-secondary/50">{day}</div>
                  )
              })}
            </div>
          </div>
          <div className="flex items-center gap-4 px-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-primary"></div>
              <span className="text-xs text-text-secondary">Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded border border-primary"></div>
              <span className="text-xs text-text-secondary">Available</span>
            </div>
          </div>
        </div>

        {/* List Column */}
        <div className="xl:col-span-3 space-y-4">
          <p className="text-text-secondary mb-6 leading-relaxed">
            Select a departure date to begin your booking. Prices are per person
            based on twin sharing.
          </p>
          
          <div className="group flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl border border-primary bg-surface-darker/50 shadow-lg shadow-primary/5 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center justify-center bg-primary text-white rounded-xl w-16 h-16 shadow-lg shadow-primary/20 transition-colors">
                <span className="text-xs uppercase font-bold text-white/80">
                  Oct
                </span>
                <span className="text-2xl font-bold">15</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">
                  Autumn Expedition 2024
                </h4>
                <p className="text-sm text-text-secondary">
                  Oct 15 - Oct 29 • Guaranteed Departure
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto mt-2 md:mt-0">
              <div className="text-right">
                <span className="block text-xl font-bold text-primary">
                  $1,200
                </span>
                <span className="text-xs text-green-500 font-bold">
                  4 Spots Left
                </span>
              </div>
              <button className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/20">
                Select
              </button>
            </div>
          </div>

          <div className="group flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl border border-white/5 bg-surface-darker hover:border-primary/50 transition-all cursor-pointer hover:bg-surface-darker/80">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center justify-center bg-white/5 rounded-xl w-16 h-16 border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                <span className="text-xs text-text-secondary uppercase font-bold">
                  Oct
                </span>
                <span className="text-2xl font-bold text-white">22</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">
                  Autumn Expedition 2024
                </h4>
                <p className="text-sm text-text-secondary">
                  Oct 22 - Nov 05 • Filling Fast
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto mt-2 md:mt-0">
              <div className="text-right">
                <span className="block text-xl font-bold text-primary">
                  $1,200
                </span>
                <span className="text-xs text-green-500 font-bold">
                  6 Spots Left
                </span>
              </div>
              <button className="bg-white/5 hover:bg-primary hover:text-white text-white border border-white/10 hover:border-transparent px-5 py-2.5 rounded-full text-sm font-bold transition-all">
                Select
              </button>
            </div>
          </div>

          {/* More dates... simplified for brevity in example but following structure */}
          <div className="group flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl border border-white/5 bg-surface-darker hover:border-primary/50 transition-all cursor-pointer hover:bg-surface-darker/80">
            <div className="flex items-center gap-4">
                <div className="flex flex-col items-center justify-center bg-white/5 rounded-xl w-16 h-16 border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                    <span className="text-xs text-text-secondary uppercase font-bold">Nov</span>
                    <span className="text-2xl font-bold text-white">01</span>
                </div>
                <div>
                    <h4 className="text-white font-bold text-lg">Late Autumn Special</h4>
                    <p className="text-sm text-text-secondary">Nov 01 - Nov 15 • Limited Availability</p>
                </div>
            </div>
            <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto mt-2 md:mt-0">
                <div className="text-right">
                    <span className="block text-xl font-bold text-primary">$1,150</span>
                    <span className="text-xs text-green-500 font-bold">8 Spots Left</span>
                </div>
                <button className="bg-white/5 hover:bg-primary hover:text-white text-white border border-white/10 hover:border-transparent px-5 py-2.5 rounded-full text-sm font-bold transition-all">
                    Select
                </button>
            </div>
          </div>

          <div className="pt-4 flex justify-center">
            <button className="text-primary font-bold text-sm flex items-center gap-2 hover:underline">
              View More Dates (2025)
              <span className="material-symbols-outlined text-sm">
                calendar_month
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailableDates;
