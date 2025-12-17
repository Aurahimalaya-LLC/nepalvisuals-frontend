import React from 'react';
import { IconBase } from 'react-icons';



const AdventureTypes = () => {
const ADVENTURE_TYPES= [
  {
    id: 'trekking',
    name: 'Trekking',
    description: 'Immersive walks on well-trodden paths. Connect with local culture and enjoy the scenery without technical challenges.',
    icon: 'hiking',
    colorTheme: 'primary',
    features: [
      { icon: 'hotel', text: 'Tea House Lodging' },
      { icon: 'terrain', text: 'Max 5,500m' },
    ]
  },
  {
    id: 'climbing',
    name: 'Peak Climbing',
    description: 'Add a summit challenge to your trek. Ideal for fit trekkers looking to step into basic mountaineering on 6,000m peaks.',
    icon: 'mountain_flag',
    colorTheme: 'secondary',
    features: [
      { icon: 'biotech', text: 'Basic Gear Needed' },
      { icon: 'terrain', text: 'Max 6,500m' },
    ]
  },
  {
    id: 'expedition',
    name: 'Expedition',
    description: 'Full-scale mountaineering missions to 7,000m and 8,000m giants. Technical, demanding, and life-changing.',
    icon: 'flag',
    colorTheme: 'yellow',
    features: [
      { icon: 'camping', text: 'Full Camping Support' },
      { icon: 'terrain', text: 'Max 8,848m' },
    ]
  }
];


  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Adventure Types</h2>
          <p className="text-text-secondary">Different ways to experience the Nepal Himalayas.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {ADVENTURE_TYPES.map((type) => {
            const isPrimary = type.colorTheme === 'primary';
            const isSecondary = type.colorTheme === 'secondary';
            const isYellow = type.colorTheme === 'yellow';

            let accentColorClass = 'text-primary';
            let bgGradient = 'from-primary/20 to-primary/5';
            let borderColor = 'border-primary/20';
            let hoverBorder = 'hover:border-primary/50';
            
            if (isSecondary) {
                accentColorClass = 'text-secondary';
                bgGradient = 'from-secondary/20 to-secondary/5';
                borderColor = 'border-secondary/20';
                hoverBorder = 'hover:border-secondary/50';
            } else if (isYellow) {
                accentColorClass = 'text-yellow-500';
                bgGradient = 'from-yellow-500/20 to-yellow-500/5';
                borderColor = 'border-yellow-500/20';
                hoverBorder = 'hover:border-yellow-500/50';
            }

            return (
                <div key={type.id} className={`group relative bg-surface-dark rounded-[2rem] p-8 border border-white/5 overflow-hidden ${hoverBorder} transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}>
                    {/* Background Icon */}
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                        <IconBase name={type.icon} className={`text-9xl ${accentColorClass}`} />
                    </div>

                    <div className="relative z-10">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${bgGradient} border ${borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <IconBase name={type.icon} className={`text-3xl ${accentColorClass}`} />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3">{type.name}</h3>
                        <p className="text-text-secondary text-sm leading-relaxed mb-8 min-h-[60px]">
                            {type.description}
                        </p>

                        <div className="flex flex-col gap-4">
                            {type.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-gray-300 group/item">
                                    <IconBase name={feature.icon} className={`${accentColorClass} text-lg`} />
                                    <span className="group-hover/item:text-white transition-colors">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        })}
      </div>
    </section>
  );
};

export default AdventureTypes;