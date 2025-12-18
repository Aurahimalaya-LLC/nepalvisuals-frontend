import React from 'react';
import { IconBase } from 'react-icons';


const IMG_EVEREST = "https://lh3.googleusercontent.com/aida-public/AB6AXuDRhAgmyafMtZInsKcZjC6PERny9fQkTYXnQc2xe3Dn2hSTQ2D2bEPyiLHkfuqDOIamvdyHiV6lOBJgYm_mzEkiQeGcxj6XcjWqapph7IcKty8Mcbs7CdDGengbgwALm5rAVVQmydirCKo5JLlaeh-L3z0AJYecOSmxkI8TpR7pMITU12XLou8iXgEwQe7_3NbQK8rZDzw39TV_j5JnhmpBQ55T2U0LJGQROBZEKe8IxNVO4-xOcOfSMr99VgNtWGMAriy0J_zOV2il";
const IMG_ANNAPURNA = "https://lh3.googleusercontent.com/aida-public/AB6AXuBHDDD37GPZ8Y4aP8F9LH7kcCUcrCjFvRT59fyRYWIrgm_hr7tviGULidA31aCXCs0LkDX56_l6SUqC8drx23v9ElkfCuR9jajUEAjyeeWXcA0EOjbow4RqDcsm7lpDTQpZ9ey3cVZCCLVdbBAphjieqv5U3hPMtaFZ0hrxSuas7VRx1_-l5L2Gd5mdMS6xO95EPCXLkfWmjr7-9HiFUJ9OfgncfzPn-OnMivnI0bJ1xto2pGVKzzH2nqGXABqktYkL1nwpO_W0GAg4";
const IMG_LANGTANG = "https://lh3.googleusercontent.com/aida-public/AB6AXuCwWW3lEJ9YYM6nDdQ_clegxQ7nPWH-Trbv40arFyiafhUfI8TSQG1BbV5qC8CVnbZTdocnjJPmXxOW8gwfFA04Byy5vrMjRBD8rXQCFOAKi77ATkMO6rJbEN7truIDQj484smO4H2WPG9dNRmsDO33DoBkSP7HikkIFWIqYm89TDPRD-g9CAIz4zoCF_ixKAl_E7arOVyQ36V-Nl3tdG9w0ZAfFYMJZsq7qHFyh6AeiRd81D4QcIIVtWzZjZmBGyoIMmZ020UPJGo5";
const IMG_MUSTANG = "https://lh3.googleusercontent.com/aida-public/AB6AXuB5MvfLhFzFM4I4GsHXx4-NVj58cLSQIVtfK7M37DQio0H8CPBdPCtvfWnnGcKSm4cCxax8DU8ngEWgHK-zekNkQZr-T4rsRU149T3vhS4xP4Fzu1IZzryaddXmwKMulICERdE4MqDNDZ6tbdffDsvn6E_GWEUogvFPQ3MT8iaOiVlCmkrWlb1SkSXylmy4ax0twHtDND9YifM2DQorAsSmHEmOLxTMcclbE5u8wOpaTOW1JUPbuQ1LdQXYDxAL3GaeYT_4lhNq51RO";



const WhyTrek = () => {
     const HERO_BG = IMG_EVEREST;
  return (
    <section className="py-10 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Why Trek in Nepal?</h2>
          <p className="text-text-secondary leading-relaxed text-lg">
            Nepal is home to 8 of the world's 14 highest peaks, but it's more than just mountains. It's a tapestry of cultures, landscapes, and experiences. Whether you're traversing the arid Trans-Himalayas of Mustang, walking through the lush rhododendron forests of Annapurna, or standing at the foot of Everest, Nepal offers a life-changing journey for every traveler.
          </p>
          
          <ul className="space-y-6 pt-4">
            <li className="flex items-start gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-surface-dark border border-white/5 flex items-center justify-center text-primary shadow-lg group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300">
                <IconBase name="temple_buddhist" className="text-3xl" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1 group-hover:text-primary transition-colors">Diverse Culture</h4>
                <p className="text-text-secondary text-sm">Experience Sherpa, Gurung, and Tamang hospitality in remote villages.</p>
              </div>
            </li>
            <li className="flex items-start gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-surface-dark border border-white/5 flex items-center justify-center text-secondary shadow-lg group-hover:border-secondary/50 group-hover:scale-110 transition-all duration-300">
                <IconBase name="filter_hdr" className="text-3xl" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1 group-hover:text-secondary transition-colors">World's Highest Peaks</h4>
                <p className="text-text-secondary text-sm">Home to Everest, Kanchenjunga, Lhotse, and breathtaking vistas.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Video/Image Content */}
        <div className="relative h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl group cursor-pointer">
          <img 
            src={HERO_BG} 
            alt="Trekkers in Nepal" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-2xl">
               <IconBase name="play_arrow" className="text-4xl fill-current"  />
            </div>
          </div>

          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-bold text-xl">Himalayan Adventure</p>
                <p className="text-primary text-sm font-bold uppercase tracking-wider mt-1">Unforgettable Memories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrek;