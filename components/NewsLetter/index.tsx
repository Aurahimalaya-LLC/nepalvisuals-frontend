import React from "react";

const Newsletter = () => {
  return (
    <section className="mb-7 md:mb-24 px-4 md:px-8 lg:px-16 container mx-auto max-w-7xl">
      <div className="relative rounded-5xl overflow-hidden bg-surface-dark border border-white/5 p-8 md:p-16 lg:p-20 group">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-colors duration-700"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] group-hover:bg-secondary/30 transition-colors duration-700"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Community
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
              Join our tribe of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                explorers
              </span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed max-w-md">
              Receive exclusive stories, gear guides, and early access to new
              routes directly to your inbox.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&auto=format&fit=crop"
                  alt="Traveler"
                  className="w-12 h-12 rounded-full border-4 border-surface-dark object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&auto=format&fit=crop"
                  alt="Traveler"
                  className="w-12 h-12 rounded-full border-4 border-surface-dark object-cover"
                />
                <div className="w-12 h-12 rounded-full border-4 border-surface-dark bg-surface-darker flex items-center justify-center text-xs font-bold text-white">
                  +2k
                </div>
              </div>
              <div className="text-sm">
                <p className="text-white font-bold">Join 2,000+ travelers</p>
                <p className="text-text-secondary text-xs">
                  No spam, just adventure.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-darker/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl shadow-xl">
            <form className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="newsletter-email"
                  className="block text-sm font-bold text-white mb-2 ml-1"
                >
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-text-secondary">
                    <span className="material-symbols-outlined">mail</span>
                  </span>
                  <input
                    type="email"
                    id="newsletter-email"
                    placeholder="explorer@example.com"
                    className="w-full bg-surface-dark border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-[0.98] flex items-center justify-center gap-2 text-lg"
              >
                Subscribe to Newsletter
                <span className="material-symbols-outlined">send</span>
              </button>
              <p className="text-center text-xs text-text-secondary mt-2">
                By subscribing, you agree to our Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
