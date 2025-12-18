
import React from 'react';


export interface Traveler {
  id: string;
  fullName: string;
  dob: string;
  passportNumber: string;
  nationality: string;
  dietary: string;
}

interface TravelerDetailsProps {
  travelers: Traveler[];
  onAdd: () => void;
  onRemove: (id: string) => void;
}

export const TravelerDetails: React.FC<TravelerDetailsProps> = ({ travelers, onAdd, onRemove }) => {

  return (
    <section className="bg-surface-dark border border-white/5 rounded-3xl p-6 md:p-8 shadow-xl shadow-black/10">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">groups</span>
        Travelers Details
      </h2>
      <div className="space-y-6">
        {travelers.map((traveler, index) => (
          <div key={traveler.id} className="border border-white/5 bg-surface-darker/50 rounded-2xl p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wide flex items-center gap-2">
                <span className={`w-6 h-6 flex items-center justify-center rounded-full text-xs ${index === 0 ? 'bg-primary' : 'bg-white/10'}`}>
                  {index + 1}
                </span>
                {index === 0 ? 'Primary Traveler' : `Traveler ${index + 1}`}
              </h3>
              {index > 0 && (
                <button 
                  onClick={() => onRemove(traveler.id)}
                  className="text-xs text-primary font-bold hover:text-primary-dark transition-colors"
                >
                  Remove
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Full Name</label>
                <input className="w-full bg-surface-darker border border-white/10 rounded-xl px-4 py-3 text-white placeholder-text-secondary/50 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Enter name" type="text"/>
              </div>
              <div>
                <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Date of Birth</label>
                <input className="w-full bg-surface-darker border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" type="date"/>
              </div>
              <div>
                <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Passport Number</label>
                <input className="w-full bg-surface-darker border border-white/10 rounded-xl px-4 py-3 text-white placeholder-text-secondary/50 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="A1234567" type="text"/>
              </div>
              <div>
                <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Nationality</label>
                <select className="w-full bg-surface-darker border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:ring-1 focus:ring-primary focus:border-primary outline-none cursor-pointer">
                  <option>Select Country</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                  <option>Canada</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Dietary or Special Requests</label>
                <textarea className="w-full bg-surface-darker border border-white/10 rounded-xl px-4 py-3 text-white placeholder-text-secondary/50 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all h-20 resize-none" placeholder="E.g., Vegetarian, Gluten-free, Allergies..."></textarea>
              </div>
            </div>
          </div>
        ))}
        
        <button 
          onClick={onAdd}
          className="w-full py-4 border border-dashed border-white/20 bg-surface-darker/30 hover:bg-surface-darker/60 rounded-xl text-text-secondary hover:text-white font-bold text-sm transition-all flex items-center justify-center gap-2 group"
        >
          <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">add_circle</span>
          Add Another Traveler
        </button>

        <div className="flex items-start gap-3 px-1 pt-2">
          <input className="mt-1 w-4 h-4 rounded border-white/10 bg-surface-darker text-primary focus:ring-offset-background-dark focus:ring-primary cursor-pointer" id="save_travelers" type="checkbox"/>
          <div>
            <label className="text-sm font-bold text-white cursor-pointer select-none block hover:text-primary transition-colors" htmlFor="save_travelers">
              Save traveler details for future bookings
            </label>
            <p className="text-xs text-text-secondary mt-1 leading-relaxed">
              Securely save these details to your account to save time on your next booking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
