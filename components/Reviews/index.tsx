import React from 'react';

const Reviews= () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-6 mt-8">
        <h2 className="text-3xl font-bold text-white">Reviews</h2>
        <button className="text-sm text-primary font-bold hover:text-white transition-colors flex items-center gap-1">
          Write a Review
          <span className="material-symbols-outlined text-sm">edit_square</span>
        </button>
      </div>
      <div className="bg-surface-dark p-6 md:p-8 rounded-3xl border border-white/5 mb-8">
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8 pb-8 border-b border-white/5">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 bg-surface-darker rounded-2xl flex items-center justify-center text-3xl font-bold text-primary border border-primary/20 shadow-lg shadow-black/20">
              4.9
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex text-primary">
                {[1, 2, 3, 4].map((s) => (
                  <span
                    key={s}
                    className="material-symbols-outlined text-2xl fill-current"
                  >
                    star
                  </span>
                ))}
                <span className="material-symbols-outlined text-2xl fill-current">
                  star_half
                </span>
              </div>
              <p className="text-white font-bold text-lg">Excellent</p>
              <p className="text-text-secondary text-sm">
                Based on 124 verified reviews
              </p>
            </div>
          </div>
          <div className="flex-grow space-y-2 max-w-md">
            {[
              { val: 5, pct: "85%", w: "85%" },
              { val: 4, pct: "12%", w: "12%" },
              { val: 3, pct: "3%", w: "3%" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className="text-white font-bold w-3">{stat.val}</span>
                <div className="flex-grow h-2 bg-surface-darker rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: stat.w, opacity: i === 0 ? 1 : 1 - i * 0.3 }}
                  ></div>
                </div>
                <span className="text-text-secondary w-8 text-right">
                  {stat.pct}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
            {/* Review 1 */}
          <div className="border-b border-white/5 pb-8 last:border-0 last:pb-0">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <img
                  alt="User Sarah J."
                  className="w-10 h-10 rounded-full object-cover border-2 border-surface-darker"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh3GXkIyI2Zk2bAv01eDZjdykcXxzEJarRNwLHEAq3iRGdJOZj9GJOC0ImbnYkFFf9_TUxv8_Jm5x9Rl1XiPAX2uqHJFLpaEEhHJOGZabYd1m9PPIQdnWTP-UmFEop_y0ayindnPQtfkJ8m8Eq7jvVrVYGXp3Fxjuz3CERtVDhkh06zc3YglALFLnvQ963_cUOYZvOJRaUkNqRZKn8SgeIemmlQLtg0mY6Ilk5RaT4Z_jZLnCT0HK28VxeWXBNkaEAUokRxBm7Tl-j"
                />
                <div>
                  <h4 className="font-bold text-white text-base">
                    Sarah Johnson
                  </h4>
                  <p className="text-xs text-text-secondary">
                    United Kingdom • Oct 2023
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-surface-darker px-2 py-1 rounded-lg border border-white/5">
                <span className="material-symbols-outlined text-sm text-primary fill-current">
                  star
                </span>
                <span className="text-sm font-bold text-white">5.0</span>
              </div>
            </div>
            <h5 className="font-bold text-white text-lg mb-2">
              Incredible Experience of a Lifetime!
            </h5>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              "The guide was amazing and very supportive throughout the entire
              trek. The views were breathtaking every single day. I was worried
              about the altitude, but the acclimatization schedule was perfect.
              The tea houses selected were better than I expected. Highly
              recommended for anyone looking for an adventure!"
            </p>
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              <img
                alt="Review photo 1"
                className="h-20 w-20 rounded-lg object-cover cursor-pointer hover:opacity-80 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRhAgmyafMtZInsKcZjC6PERny9fQkTYXnQc2xe3Dn2hSTQ2D2bEPyiLHkfuqDOIamvdyHiV6lOBJgYm_mzEkiQeGcxj6XcjWqapph7IcKty8Mcbs7CdDGengbgwALm5rAVVQmydirCKo5JLlaeh-L3z0AJYecOSmxkI8TpR7pMITU12XLou8iXgEwQe7_3NbQK8rZDzw39TV_j5JnhmpBQ55T2U0LJGQROBZEKe8IxNVO4-xOcOfSMr99VgNtWGMAriy0J_zOV2il"
              />
              <img
                alt="Review photo 2"
                className="h-20 w-20 rounded-lg object-cover cursor-pointer hover:opacity-80 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRhAgmyafMtZInsKcZjC6PERny9fQkTYXnQc2xe3Dn2hSTQ2D2bEPyiLHkfuqDOIamvdyHiV6lOBJgYm_mzEkiQeGcxj6XcjWqapph7IcKty8Mcbs7CdDGengbgwALm5rAVVQmydirCKo5JLlaeh-L3z0AJYecOSmxkI8TpR7pMITU12XLou8iXgEwQe7_3NbQK8rZDzw39TV_j5JnhmpBQ55T2U0LJGQROBZEKe8IxNVO4-xOcOfSMr99VgNtWGMAriy0J_zOV2il"
              />
            </div>
            <div className="mt-3 flex items-center gap-4">
              <button className="text-xs text-text-secondary hover:text-white flex items-center gap-1 transition-colors">
                <span className="material-symbols-outlined text-sm">
                  thumb_up
                </span>
                Helpful (12)
              </button>
            </div>
          </div>
          {/* Add more reviews similarly if needed, sticking to one for brevity */}
        </div>
        <button className="w-full py-3 mt-6 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-colors flex items-center justify-center gap-2 group">
          Show All 124 Reviews
          <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">
            expand_more
          </span>
        </button>
      </div>
    </section>
  );
};

export default Reviews;
