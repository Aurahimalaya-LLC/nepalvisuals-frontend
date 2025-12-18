import React from 'react';
import { IconBase } from 'react-icons';

const RegionHero: React.FC = () => {
    const IMG_EVEREST = "https://lh3.googleusercontent.com/aida-public/AB6AXuDRhAgmyafMtZInsKcZjC6PERny9fQkTYXnQc2xe3Dn2hSTQ2D2bEPyiLHkfuqDOIamvdyHiV6lOBJgYm_mzEkiQeGcxj6XcjWqapph7IcKty8Mcbs7CdDGengbgwALm5rAVVQmydirCKo5JLlaeh-L3z0AJYecOSmxkI8TpR7pMITU12XLou8iXgEwQe7_3NbQK8rZDzw39TV_j5JnhmpBQ55T2U0LJGQROBZEKe8IxNVO4-xOcOfSMr99VgNtWGMAriy0J_zOV2il";
 const HERO_BG = IMG_EVEREST;
  return (
    <header className="relative -mt-[100px] min-h-[75vh] md:min-h-[85vh] flex items-end justify-center overflow-hidden rounded-b-[2rem] md:rounded-b-[3rem] shadow-2xl shadow-black/50">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed md:bg-scroll"
        style={{ 
          backgroundImage: `url('${HERO_BG}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/20" /> {/* Dimmer */}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pb-16 pt-40 max-w-7xl">
        <div className="max-w-4xl animate-fade-in-up">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-6 shadow-lg shadow-primary/10 hover:bg-primary/30 transition-colors cursor-default">
            <IconBase name="landscape" className="text-sm text-primary" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">The Himalayas</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05] mb-6 drop-shadow-2xl">
            Explore Nepal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary bg-300% animate-gradient">
              Treks
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-2xl text-gray-200 font-medium max-w-2xl leading-relaxed drop-shadow-md">
            The ultimate trekking hub for adventure seekers. From the giants of the Everest region to the cultural trails of Annapurna, discover the diversity of the Himalayas.
          </p>
        </div>
      </div>
    </header>
  );
};

export default RegionHero;