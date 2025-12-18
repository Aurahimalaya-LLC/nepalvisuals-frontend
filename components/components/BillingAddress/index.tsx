
import React from 'react';

export const BillingAddress: React.FC = () => {
  return (
    <section className="bg-surface-dark border border-white/5 rounded-3xl p-6 md:p-8 shadow-xl shadow-black/10">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">pin_drop</span>
        Billing Address
      </h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase mb-2">First Name</label>
            <input className="w-full bg-surface-darker border border-white/10 rounded-xl px-4 py-3 text-white placeholder-text-secondary/50 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="First Name" type="text"/>
          </div>
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Last Name</label>
            <input className="w-full bg-surface-darker border border-white/10 rounded-xl px-4 py-3 text-white placeholder-text-secondary/50 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Last Name" type="text"/>
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Country / Region</label>
          <div className="relative">
            <select className="w-full bg-surface-darker border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:ring-1 focus:ring-primary focus:border-primary outline-none cursor-pointer">
              <option>Select Country</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Australia</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary">
              <span className="material-symbols-outlined">expand_more</span>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Street Address</label>
          <input className="w-full bg-surface-darker border border-white/10 rounded-xl px-4 py-3 text-white placeholder-text-secondary/50 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="123 Adventure Lane" type="text"/>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase mb-2">City</label>
            <input className="w-full bg-surface-darker border border-white/10 rounded-xl px-4 py-3 text-white placeholder-text-secondary/50 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="City" type="text"/>
          </div>
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Postal Code</label>
            <input className="w-full bg-surface-darker border border-white/10 rounded-xl px-4 py-3 text-white placeholder-text-secondary/50 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Code" type="text"/>
          </div>
        </div>
      </div>
    </section>
  );
};
