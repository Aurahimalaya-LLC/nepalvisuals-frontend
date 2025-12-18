"use client";

import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useMemo } from 'react';
import { IconBase } from 'react-icons';

const FeaturedAdventures: React.FC = () => {
 const IMG_EVEREST = "https://lh3.googleusercontent.com/aida-public/AB6AXuDRhAgmyafMtZInsKcZjC6PERny9fQkTYXnQc2xe3Dn2hSTQ2D2bEPyiLHkfuqDOIamvdyHiV6lOBJgYm_mzEkiQeGcxj6XcjWqapph7IcKty8Mcbs7CdDGengbgwALm5rAVVQmydirCKo5JLlaeh-L3z0AJYecOSmxkI8TpR7pMITU12XLou8iXgEwQe7_3NbQK8rZDzw39TV_j5JnhmpBQ55T2U0LJGQROBZEKe8IxNVO4-xOcOfSMr99VgNtWGMAriy0J_zOV2il";
const IMG_ANNAPURNA = "https://lh3.googleusercontent.com/aida-public/AB6AXuBHDDD37GPZ8Y4aP8F9LH7kcCUcrCjFvRT59fyRYWIrgm_hr7tviGULidA31aCXCs0LkDX56_l6SUqC8drx23v9ElkfCuR9jajUEAjyeeWXcA0EOjbow4RqDcsm7lpDTQpZ9ey3cVZCCLVdbBAphjieqv5U3hPMtaFZ0hrxSuas7VRx1_-l5L2Gd5mdMS6xO95EPCXLkfWmjr7-9HiFUJ9OfgncfzPn-OnMivnI0bJ1xto2pGVKzzH2nqGXABqktYkL1nwpO_W0GAg4";
const IMG_LANGTANG = "https://lh3.googleusercontent.com/aida-public/AB6AXuCwWW3lEJ9YYM6nDdQ_clegxQ7nPWH-Trbv40arFyiafhUfI8TSQG1BbV5qC8CVnbZTdocnjJPmXxOW8gwfFA04Byy5vrMjRBD8rXQCFOAKi77ATkMO6rJbEN7truIDQj484smO4H2WPG9dNRmsDO33DoBkSP7HikkIFWIqYm89TDPRD-g9CAIz4zoCF_ixKAl_E7arOVyQ36V-Nl3tdG9w0ZAfFYMJZsq7qHFyh6AeiRd81D4QcIIVtWzZjZmBGyoIMmZ020UPJGo5";
const IMG_MUSTANG = "https://lh3.googleusercontent.com/aida-public/AB6AXuB5MvfLhFzFM4I4GsHXx4-NVj58cLSQIVtfK7M37DQio0H8CPBdPCtvfWnnGcKSm4cCxax8DU8ngEWgHK-zekNkQZr-T4rsRU149T3vhS4xP4Fzu1IZzryaddXmwKMulICERdE4MqDNDZ6tbdffDsvn6E_GWEUogvFPQ3MT8iaOiVlCmkrWlb1SkSXylmy4ax0twHtDND9YifM2DQorAsSmHEmOLxTMcclbE5u8wOpaTOW1JUPbuQ1LdQXYDxAL3GaeYT_4lhNq51RO";

const router = useRouter();
const pathname = usePathname(); 
console.log("pathname",pathname);

const ADVENTURES = [
  {
    id: 'ebc',
    name: 'Everest Base Camp',
    price: 1200,
    originalPrice: 1450,
    description: "The classic route to the base of the world's highest mountain. Experience Sherpa culture and stand face-to-face with the Khumbu Icefall.",
    image: IMG_EVEREST,
    days: 14,
    difficulty: 'Challenging',
    maxAltitude: 5545,
    groupType: 'Group Join',
    tags: ['Best Seller'],
    region: 'everest'
  },
  {
    id: 'ac',
    name: 'Annapurna Circuit',
    price: 1150,
    description: "A legendary trek circling the Annapurna massif. Experience diverse landscapes from subtropical jungles to high-altitude deserts at Thorong La Pass.",
    image: IMG_ANNAPURNA,
    days: 16,
    difficulty: 'Moderate',
    maxAltitude: 5416,
    groupType: 'Private/Group',
    region: 'annapurna'
  },
  {
    id: 'mc',
    name: 'Manaslu Circuit',
    price: 1650,
    description: "The new classic. A restricted area trek that offers pristine culture, stunning views of Mount Manaslu, and the dramatic Larkya La Pass.",
    image: IMG_ANNAPURNA,
    days: 15,
    difficulty: 'Very Hard',
    maxAltitude: 5106,
    groupType: 'Small Group',
    tags: ['Premium'],
    region: 'manaslu'
  },
  {
    id: 'langtang',
    name: 'Langtang Valley',
    price: 850,
    description: "Known as the valley of glaciers, this is a beautiful short trek easily accessible from Kathmandu, offering Tamang culture and great views.",
    image: IMG_LANGTANG,
    days: 9,
    difficulty: 'Easy',
    maxAltitude: 4984,
    groupType: 'Family Friendly',
    region: 'langtang'
  },
  {
    id: 'mustang',
    name: 'Upper Mustang',
    price: 1850,
    description: "Journey to the last forbidden kingdom. Explore ancient caves, monasteries, and the walled city of Lo Manthang in this unique trans-Himalayan landscape.",
    image: IMG_MUSTANG,
    days: 17,
    difficulty: 'Moderate',
    maxAltitude: 3840,
    groupType: 'Private',
    region: 'mustang'
  },
  {
    id: 'island',
    name: 'Island Peak Climbing',
    price: 2100,
    description: "Combine the classic EBC trek with a summit of Island Peak (6,189m). A perfect introduction to Himalayan mountaineering requiring basic climbing skills.",
    image: IMG_LANGTANG, // Placeholder
    days: 19,
    difficulty: 'Extreme',
    maxAltitude: 6189,
    groupType: 'Small Group',
    tags: ['Expedition'],
    region: 'everest'
  }
];
  const [filterDuration, setFilterDuration] = useState<string>('');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('');
  const [filterRegion, setFilterRegion] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('popularity');

  const filteredAdventures = useMemo(() => {
    let result = [...ADVENTURES];

    if (filterDuration) {
      if (filterDuration === 'short') result = result.filter(a => a.days < 7);
      else if (filterDuration === 'medium') result = result.filter(a => a.days >= 7 && a.days <= 14);
      else if (filterDuration === 'long') result = result.filter(a => a.days > 14);
    }

    if (filterDifficulty) {
      result = result.filter(a => a.difficulty.toLowerCase() === filterDifficulty);
    }

    if (filterRegion) {
      result = result.filter(a => a.region === filterRegion);
    }

    if (sortBy === 'price_asc') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price_desc') result.sort((a, b) => b.price - a.price);
    // Popularity would need real data, preserving default order for now

    return result;
  }, [filterDuration, filterDifficulty, filterRegion, sortBy]);

  return (
    <section id="destinations" className="py-10 md:py-20 border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Featured Adventures</h2>
          <p className="text-text-secondary">Curated experiences from across the country.</p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-surface-dark border border-white/5 rounded-2xl p-2 mb-10 shadow-lg">
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center p-2">
          
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <span className="hidden md:flex items-center gap-2 text-white font-bold text-sm mr-2">
               <IconBase name="tune" className="text-primary" />
               Filters:
            </span>
            
            {/* Duration Filter */}
            <div className="relative flex-1 min-w-[140px] group">
              <select 
                value={filterDuration}
                onChange={(e) => setFilterDuration(e.target.value)}
                className="w-full appearance-none bg-background-dark border border-white/10 text-white text-sm font-medium rounded-xl pl-4 pr-10 py-2.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer hover:border-white/20"
              >
                <option value="">Duration</option>
                <option value="short">Short (&lt; 7 Days)</option>
                <option value="medium">Medium (7-14 Days)</option>
                <option value="long">Long (14+ Days)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-text-secondary group-hover:text-primary transition-colors">
                <IconBase name="expand_more" />
              </div>
            </div>

            {/* Difficulty Filter */}
            <div className="relative flex-1 min-w-[140px] group">
              <select 
                value={filterDifficulty}
                onChange={(e) => setFilterDifficulty(e.target.value)}
                className="w-full appearance-none bg-background-dark border border-white/10 text-white text-sm font-medium rounded-xl pl-4 pr-10 py-2.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer hover:border-white/20"
              >
                <option value="">Difficulty</option>
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="challenging">Challenging</option>
                <option value="extreme">Extreme</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-text-secondary group-hover:text-primary transition-colors">
                <IconBase name="expand_more" />
              </div>
            </div>

            {/* Region Filter */}
            <div className="relative flex-1 min-w-[140px] group">
              <select 
                value={filterRegion}
                onChange={(e) => setFilterRegion(e.target.value)}
                className="w-full appearance-none bg-background-dark border border-white/10 text-white text-sm font-medium rounded-xl pl-4 pr-10 py-2.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer hover:border-white/20"
              >
                <option value="">Region</option>
                <option value="everest">Everest</option>
                <option value="annapurna">Annapurna</option>
                <option value="langtang">Langtang</option>
                <option value="manaslu">Manaslu</option>
                <option value="mustang">Upper Mustang</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-text-secondary group-hover:text-primary transition-colors">
                <IconBase name="expand_more" />
              </div>
            </div>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-3 w-full lg:w-auto pt-4 mt-2 lg:pt-0 lg:mt-0 border-t border-white/5 lg:border-0 lg:pl-6 lg:border-l lg:border-white/10">
            <span className="text-text-secondary text-sm whitespace-nowrap">Sort by:</span>
            <div className="relative flex-1 lg:min-w-[180px] group">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full appearance-none bg-transparent text-white text-sm font-bold pr-8 py-2 outline-none cursor-pointer hover:text-primary transition-colors text-right lg:text-left"
              >
                <option className="bg-background-dark" value="popularity">Most Popular</option>
                <option className="bg-background-dark" value="price_asc">Price: Low to High</option>
                <option className="bg-background-dark" value="price_desc">Price: High to Low</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-white group-hover:text-primary transition-colors">
                <IconBase name="sort" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAdventures.map((adventure) => (
          <div key={adventure.id} onClick={()=> router.push(`${pathname}/${adventure.name.toLowerCase().replace(/ /g, "-")}`)} className="group flex flex-col bg-surface-dark rounded-[2rem] border border-white/5 overflow-hidden hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              {adventure.tags && adventure.tags.length > 0 && (
                <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10 flex items-center gap-1 shadow-lg backdrop-blur-md ${adventure.tags.includes('Premium') ? 'bg-secondary/90' : adventure.tags.includes('Best Seller') ? 'bg-black/60' : 'bg-primary/90'}`}>
                   <IconBase name={adventure.tags.includes('Premium') ? 'workspace_premium' : adventure.tags.includes('Best Seller') ? 'local_fire_department' : 'flag'} className={`text-sm ${adventure.tags.includes('Best Seller') ? 'text-primary' : 'text-white'} fill-current`}  />
                   {adventure.tags[0]}
                </div>
              )}
              <img 
                src={adventure.image} 
                alt={adventure.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{adventure.name}</h3>
                <div className="flex flex-col items-end">
                  <span className="text-lg font-bold text-white">${adventure.price.toLocaleString()}</span>
                  {adventure.originalPrice && (
                    <span className="text-xs text-text-secondary line-through">${adventure.originalPrice.toLocaleString()}</span>
                  )}
                </div>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                {adventure.description}
              </p>

              <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs font-medium text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <IconBase name="schedule" className="text-primary text-base" />
                  <span>{adventure.days} Days</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconBase name="signal_cellular_alt" className="text-secondary text-base" />
                  <span>{adventure.difficulty}</span>
                </div>
                <div className="flex items-center gap-2">
                   <IconBase name="hiking" className="text-primary text-base" />
                  <span>Max {adventure.maxAltitude.toLocaleString()}m</span>
                </div>
                <div className="flex items-center gap-2">
                   <IconBase name="group" className="text-secondary text-base" />
                  <span>{adventure.groupType}</span>
                </div>
              </div>

              <div className="mt-auto">
                <button className="w-full py-3 rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-primary hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 group-hover/btn">
                  View Details
                  <IconBase name="arrow_forward" className="text-sm transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
        {filteredAdventures.length === 0 && (
          <div className="col-span-full py-20 text-center text-text-secondary">
             <IconBase name="search_off" className="text-4xl mb-4" />
             <p>No adventures found matching your filters.</p>
             <button 
                onClick={() => {setFilterDuration(''); setFilterDifficulty(''); setFilterRegion('');}}
                className="mt-4 text-primary hover:underline"
             >
                Clear Filters
             </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedAdventures;