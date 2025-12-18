
import React, { useState } from 'react';

const BookingWidget: React.FC = () => {
  const [guests, setGuests] = useState(2);
  const basePrice = 1200;
  const fees = 100;
  const total = (basePrice * guests) + fees;

  return (
    <div className="bg-surface-dark rounded-3xl border border-white/5 p-6 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
      
      <h3 className="text-xl font-bold text-white mb-6 relative z-10">Select Date & Guests</h3>
      
      <div className="space-y-6 relative z-10">
        <div>
          <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Start Date</label>
          <div className="relative">
            <select className="w-full bg-surface-darker border border-white/10 text-white rounded-xl px-4 py-3 appearance-none focus:ring-1 focus:ring-primary outline-none">
              <option>Oct 15, 2024</option>
              <option>Oct 22, 2024</option>
              <option>Nov 01, 2024</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <span className="material-symbols-outlined text-text-secondary text-sm">calendar_month</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Guests</label>
          <div className="flex items-center justify-between bg-surface-darker border border-white/10 rounded-xl px-4 py-2">
            <button 
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary transition-colors flex items-center justify-center text-white"
              onClick={() => setGuests(Math.max(1, guests - 1))}
            >
              <span className="material-symbols-outlined text-sm">remove</span>
            </button>
            <span className="font-bold text-white">{guests} Guests</span>
            <button 
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary transition-colors flex items-center justify-center text-white"
              onClick={() => setGuests(guests + 1)}
            >
              <span className="material-symbols-outlined text-sm">add</span>
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Base Price (x{guests})</span>
            <span className="text-white font-medium">${(basePrice * guests).toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Permits & Fees</span>
            <span className="text-white font-medium">${fees}</span>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-white/10">
            <span className="text-lg font-bold text-white">Total</span>
            <span className="text-2xl font-black text-primary">${total.toLocaleString()}</span>
          </div>
        </div>

        <button className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group">
          Check Availability
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">calendar_month</span>
        </button>
        
        <p className="text-center text-[10px] text-text-secondary">No credit card required for reservation</p>
      </div>
    </div>
  );
};

export default BookingWidget;
