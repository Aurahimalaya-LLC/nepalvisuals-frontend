
import React from 'react';

export const ContactInfo: React.FC = () => {
  return (
    <section className="bg-surface-dark border border-white/5 rounded-3xl p-6 md:p-8 shadow-xl shadow-black/10">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">contact_mail</span>
        Contact Information
      </h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Email Address</label>
            <input 
              className="w-full bg-surface-darker border border-white/10 rounded-xl px-4 py-3 text-white placeholder-text-secondary/50 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" 
              placeholder="you@example.com" 
              type="email"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Phone Number</label>
            <input 
              className="w-full bg-surface-darker border border-white/10 rounded-xl px-4 py-3 text-white placeholder-text-secondary/50 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" 
              placeholder="+1 (555) 000-0000" 
              type="tel"
            />
          </div>
        </div>
        <div className="flex items-start gap-3 mt-4">
          <input className="mt-1 w-4 h-4 rounded border-white/10 bg-surface-darker text-primary focus:ring-offset-background-dark focus:ring-primary" id="newsletter" type="checkbox"/>
          <label className="text-sm text-text-secondary leading-tight cursor-pointer select-none" htmlFor="newsletter">
            Yes, send me travel tips and exclusive offers for my trip to Nepal.
          </label>
        </div>
      </div>
    </section>
  );
};
