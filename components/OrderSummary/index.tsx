
import React from 'react';


export interface Addon {
  id: string;
  title: string;
  description: string;
  price: number;
}

interface Summary {
  travelerCount: number;
  baseTotal: number;
  permitsFees: number;
  addonsTotal: number;
  earlyBirdDiscount: number;
  subtotal: number;
  taxes: number;
  total: number;
}

interface OrderSummaryProps {
  summary: Summary;
  addons: Addon[];
  selectedAddons: string[];
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ summary, addons, selectedAddons }) => {
  return (
    <div className="sticky top-24 space-y-6">
      <div className="bg-surface-dark rounded-3xl border border-white/5 overflow-hidden shadow-2xl shadow-black/30">
        <div className="relative h-48 w-full">
          <img 
            alt="Everest Base Camp Trek" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRhAgmyafMtZInsKcZjC6PERny9fQkTYXnQc2xe3Dn2hSTQ2D2bEPyiLHkfuqDOIamvdyHiV6lOBJgYm_mzEkiQeGcxj6XcjWqapph7IcKty8Mcbs7CdDGengbgwALm5rAVVQmydirCKo5JLlaeh-L3z0AJYecOSmxkI8TpR7pMITU12XLou8iXgEwQe7_3NbQK8rZDzw39TV_j5JnhmpBQ55T2U0LJGQROBZEKe8IxNVO4-xOcOfSMr99VgNtWGMAriy0J_zOV2il"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent"></div>
          <div className="absolute bottom-4 left-6">
            <div className="inline-flex items-center gap-1 bg-primary/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md mb-2">
              <span className="material-symbols-outlined text-[12px]">landscape</span>
              <span>Expedition</span>
            </div>
            <h3 className="text-xl font-bold text-white leading-tight">Everest Base Camp Trek</h3>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4 mb-6 pb-6 border-b border-white/10">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-text-secondary uppercase mb-1">Dates</p>
                <p className="text-white font-bold text-sm">Oct 15 - Oct 29, 2024</p>
                <p className="text-xs text-text-secondary mt-0.5">14 Days</p>
              </div>
              <button className="text-primary text-xs font-bold hover:underline">Edit</button>
            </div>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-text-secondary uppercase mb-1">Guests</p>
                <p className="text-white font-bold text-sm">{summary.travelerCount} {summary.travelerCount === 1 ? 'Adult' : 'Adults'}</p>
              </div>
              <button className="text-primary text-xs font-bold hover:underline">Edit</button>
            </div>
          </div>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Base Price ({summary.travelerCount} x $1,200)</span>
              <span className="text-white font-medium">${summary.baseTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Permits & Fees</span>
              <span className="text-white font-medium">${summary.permitsFees.toLocaleString()}</span>
            </div>
            {selectedAddons.map(id => {
              const addon = addons.find(a => a.id === id);
              return (
                <div key={id} className="flex justify-between text-sm">
                  <span className="text-text-secondary">{addon?.title}</span>
                  <span className="text-white font-medium">${addon?.price.toLocaleString()}</span>
                </div>
              );
            })}
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Early Bird Discount</span>
              <span className="text-green-500 font-medium">-${summary.earlyBirdDiscount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm pt-3 border-t border-white/10">
              <span className="text-text-secondary">Subtotal</span>
              <span className="text-white font-medium">${summary.subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Taxes (10%)</span>
              <span className="text-white font-medium">${summary.taxes.toLocaleString()}</span>
            </div>
          </div>
          <div className="mb-6 pt-2">
            <div className="relative flex gap-2">
              <input className="w-full bg-surface-darker border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-text-secondary/50 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Discount code" type="text"/>
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-[20px]">sell</span>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold px-4 rounded-xl transition-colors uppercase tracking-wide">Apply</button>
            </div>
          </div>
          <div className="flex justify-between items-end mb-6 pt-4 border-t border-white/10">
            <div>
              <p className="text-xs text-text-secondary uppercase mb-1">Total Due</p>
              <p className="text-sm text-text-secondary">USD</p>
            </div>
            <p className="text-3xl font-black text-white">${summary.total.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
          </div>
          <button className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 group mb-4">
            Complete Booking
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <p className="text-center text-xs text-text-secondary px-4">
            By clicking the button, you agree to the <a className="text-primary hover:underline" href="#">Terms & Conditions</a> and <a className="text-primary hover:underline" href="#">Cancellation Policy</a>.
          </p>
        </div>
      </div>

      <div className="bg-surface-dark rounded-3xl border border-white/5 p-6 text-center">
        <p className="text-sm text-white font-bold mb-3">Need help with your booking?</p>
        <div className="flex items-center justify-center gap-2 mb-4">
          <img alt="Agent 1" className="w-8 h-8 rounded-full border border-white/10" src="https://picsum.photos/32/32?random=1"/>
          <img alt="Agent 2" className="w-8 h-8 rounded-full border border-white/10 -ml-4" src="https://picsum.photos/32/32?random=2"/>
          <img alt="Agent 3" className="w-8 h-8 rounded-full border border-white/10 -ml-4" src="https://picsum.photos/32/32?random=3"/>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold text-white border border-white/10 transition-colors flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-sm">chat</span>
            Live Chat
          </button>
          <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold text-white border border-white/10 transition-colors flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-sm">call</span>
            Call Us
          </button>
        </div>
      </div>
    </div>
  );
};
