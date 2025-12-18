
import React from 'react';


export interface Addon {
  id: string;
  title: string;
  description: string;
  price: number;
}

interface AddonsProps {
  addons: Addon[];
  selectedIds: string[];
  onToggle: (id: string) => void;
}

export const Addons: React.FC<AddonsProps> = ({ addons, selectedIds, onToggle }) => {
  return (
    <section className="bg-surface-dark border border-white/5 rounded-3xl p-6 md:p-8 shadow-xl shadow-black/10">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">extension</span>
        Add-ons & Extras
      </h2>
      <div className="space-y-4">
        {addons.map((addon) => (
          <label key={addon.id} className="relative block cursor-pointer group">
            <input 
              className="peer sr-only" 
              type="checkbox"
              checked={selectedIds.includes(addon.id)}
              onChange={() => onToggle(addon.id)}
            />
            <div className="p-4 rounded-xl border border-white/10 bg-surface-darker/30 hover:bg-surface-darker/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all flex items-center justify-between">
              <div className="flex items-start gap-4">
                <div className={`mt-1 w-5 h-5 rounded border border-white/10 flex items-center justify-center shrink-0 transition-all ${
                  selectedIds.includes(addon.id) ? 'bg-primary border-primary' : 'bg-surface-darker'
                }`}>
                  <span className={`material-symbols-outlined text-[14px] font-bold text-white transition-all ${
                    selectedIds.includes(addon.id) ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}>check</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{addon.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed max-w-sm">{addon.description}</p>
                </div>
              </div>
              <div className="text-right pl-4 shrink-0">
                <span className="block text-sm font-bold text-white mb-0.5">+${addon.price}</span>
              </div>
            </div>
          </label>
        ))}
      </div>
    </section>
  );
};
