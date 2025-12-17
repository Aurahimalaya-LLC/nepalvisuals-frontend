import React from 'react';

const Gallery = () => {
  return (
    <section >
      <div className="flex items-end justify-between mb-6 mt-7">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Gallery</h2>
          <p className="text-text-secondary">Visual highlights from the trail</p>
        </div>
        <div className="hidden md:flex gap-2">
          <button className="w-10 h-10 rounded-full bg-surface-dark border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all">
            <span className="material-symbols-outlined text-lg">arrow_back</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
      <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden mb-4 group border border-white/5 bg-surface-dark">
        <img
          alt="Everest View at Sunrise"
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRhAgmyafMtZInsKcZjC6PERny9fQkTYXnQc2xe3Dn2hSTQ2D2bEPyiLHkfuqDOIamvdyHiV6lOBJgYm_mzEkiQeGcxj6XcjWqapph7IcKty8Mcbs7CdDGengbgwALm5rAVVQmydirCKo5JLlaeh-L3z0AJYecOSmxkI8TpR7pMITU12XLou8iXgEwQe7_3NbQK8rZDzw39TV_j5JnhmpBQ55T2U0LJGQROBZEKe8IxNVO4-xOcOfSMr99VgNtWGMAriy0J_zOV2il"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent opacity-80"></div>
        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 right-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-3">
            <span className="material-symbols-outlined text-xs text-white">
              photo_camera
            </span>
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Day 4: Everest View Hotel
            </span>
          </div>
          <p className="text-white/90 text-sm md:text-base max-w-2xl leading-relaxed">
            Enjoying a panoramic breakfast with the first clear view of Mt.
            Everest, Lhotse, and Ama Dablam.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`relative rounded-2xl overflow-hidden aspect-square cursor-pointer group border border-white/5 ${
              i === 4 ? "hidden md:block" : ""
            } ${
              i === 1 ? "ring-2 ring-primary ring-offset-2 ring-offset-background-dark" : ""
            }`}
          >
            <img
              alt={`Thumbnail ${i}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={i === 1 || i === 4 
                  ? "https://lh3.googleusercontent.com/aida-public/AB6AXuDRhAgmyafMtZInsKcZjC6PERny9fQkTYXnQc2xe3Dn2hSTQ2D2bEPyiLHkfuqDOIamvdyHiV6lOBJgYm_mzEkiQeGcxj6XcjWqapph7IcKty8Mcbs7CdDGengbgwALm5rAVVQmydirCKo5JLlaeh-L3z0AJYecOSmxkI8TpR7pMITU12XLou8iXgEwQe7_3NbQK8rZDzw39TV_j5JnhmpBQ55T2U0LJGQROBZEKe8IxNVO4-xOcOfSMr99VgNtWGMAriy0J_zOV2il"
                  : "https://lh3.googleusercontent.com/aida-public/AB6AXuBHDDD37GPZ8Y4aP8F9LH7kcCUcrCjFvRT59fyRYWIrgm_hr7tviGULidA31aCXCs0LkDX56_l6SUqC8drx23v9ElkfCuR9jajUEAjyeeWXcA0EOjbow4RqDcsm7lpDTQpZ9ey3cVZCCLVdbBAphjieqv5U3hPMtaFZ0hrxSuas7VRx1_-l5L2Gd5mdMS6xO95EPCXLkfWmjr7-9HiFUJ9OfgncfzPn-OnMivnI0bJ1xto2pGVKzzH2nqGXABqktYkL1nwpO_W0GAg4"
                }
            />
            <div className={`absolute inset-0 transition-colors ${i===1 ? 'bg-black/10' : 'bg-black/40'} group-hover:bg-transparent`}></div>
             {i !== 1 && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="material-symbols-outlined text-white drop-shadow-lg">
                    visibility
                </span>
                </div>
             )}
          </div>
        ))}
        <button className="relative rounded-2xl overflow-hidden aspect-square cursor-pointer bg-surface-dark border border-white/5 group hover:bg-white/5 transition-all flex flex-col items-center justify-center gap-1">
          <span className="text-2xl md:text-3xl font-black text-white group-hover:text-primary transition-colors">
            +24
          </span>
          <span className="text-[10px] md:text-xs font-bold text-text-secondary uppercase tracking-wider">
            More Photos
          </span>
        </button>
      </div>
    </section>
  );
};

export default Gallery;
