import React from "react";

const Sustainability = () => {
  return (
    <section className="mb-24 px-4 md:px-8 lg:px-16 container mx-auto max-w-7xl">
      <div className="bg-surface-dark rounded-[3rem] overflow-hidden border border-white/5 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 w-fit mb-6">
              <span className="material-symbols-outlined text-green-500 text-sm">eco</span>
              <span className="text-green-500 font-bold uppercase tracking-wider text-xs">Sustainability</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Trekking for a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Greener Tomorrow</span>
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              We believe the Himalayas are not just a destination, but a legacy we borrow from future generations. Our commitment to sustainable tourism ensures that every step you take leaves a positive impact on the environment and local communities.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-surface-darker border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-green-500/30 group-hover:bg-green-500/10 transition-all duration-300">
                  <span className="material-symbols-outlined text-green-500">forest</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Reforestation Initiatives</h4>
                  <p className="text-text-secondary text-sm">For every trekker, we plant 5 trees in deforested areas of Nepal to combat soil erosion.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-surface-darker border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-green-500/30 group-hover:bg-green-500/10 transition-all duration-300">
                  <span className="material-symbols-outlined text-green-500">volunteer_activism</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Empowering Locals</h4>
                  <p className="text-text-secondary text-sm">We ensure fair wages and provide education funding for the children of our porters and guides.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-surface-darker border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-green-500/30 group-hover:bg-green-500/10 transition-all duration-300">
                  <span className="material-symbols-outlined text-green-500">delete_sweep</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Zero Waste Treks</h4>
                  <p className="text-text-secondary text-sm">Our "Carry In, Carry Out" policy ensures trails remain pristine. We use reusable gear to minimize plastic.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative min-h-[400px] lg:min-h-full h-full">
            <img
              alt="Sustainable Trekking in Nepal"
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRhAgmyafMtZInsKcZjC6PERny9fQkTYXnQc2xe3Dn2hSTQ2D2bEPyiLHkfuqDOIamvdyHiV6lOBJgYm_mzEkiQeGcxj6XcjWqapph7IcKty8Mcbs7CdDGengbgwALm5rAVVQmydirCKo5JLlaeh-L3z0AJYecOSmxkI8TpR7pMITU12XLou8iXgEwQe7_3NbQK8rZDzw39TV_j5JnhmpBQ55T2U0LJGQROBZEKe8IxNVO4-xOcOfSMr99VgNtWGMAriy0J_zOV2il"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/50 to-transparent lg:bg-gradient-to-t lg:from-surface-dark lg:via-transparent lg:to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 bg-surface-dark/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-text-secondary text-xs uppercase tracking-wider mb-1">Our Impact in 2023</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">2.5</span>
                    <span className="text-lg font-medium text-green-400">Tons</span>
                  </div>
                  <p className="text-white text-sm font-medium">Waste removed from trails</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/20">
                  <span className="material-symbols-outlined text-white">check</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;