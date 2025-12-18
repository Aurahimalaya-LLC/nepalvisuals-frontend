
import React from 'react';


export enum PaymentPlan {
  FULL = 'FULL',
  PARTIAL = 'PARTIAL'
}

interface PaymentMethodProps {
  plan: PaymentPlan;
  onPlanChange: (plan: PaymentPlan) => void;
  total: number;
}

export const PaymentMethod: React.FC<PaymentMethodProps> = ({ plan, onPlanChange, total }) => {
  return (
    <section className="bg-surface-dark border border-white/5 rounded-3xl p-6 md:p-8 shadow-xl shadow-black/10">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">credit_card</span>
        Payment Method
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <label className="relative cursor-pointer group">
          <input 
            className="peer sr-only" 
            type="radio" 
            name="payment_plan"
            checked={plan === PaymentPlan.FULL}
            onChange={() => onPlanChange(PaymentPlan.FULL)}
          />
          <div className="h-full p-5 rounded-2xl border border-white/10 bg-surface-darker/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all flex flex-col relative overflow-hidden">
            <div className="flex justify-between items-start mb-4 z-10">
              <span className="font-bold text-white text-lg">Pay in Full</span>
              <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">Save 5%</span>
            </div>
            <div className="mt-auto z-10">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-white">${(total * 0.95).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                <span className="text-sm text-text-secondary line-through">${total.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
              </div>
              <p className="text-xs text-text-secondary mt-1">Total amount due today</p>
            </div>
            <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center opacity-0 scale-50 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-300 shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-sm font-bold">check</span>
            </div>
          </div>
        </label>
        
        <label className="relative cursor-pointer group">
          <input 
            className="peer sr-only" 
            type="radio" 
            name="payment_plan"
            checked={plan === PaymentPlan.PARTIAL}
            onChange={() => onPlanChange(PaymentPlan.PARTIAL)}
          />
          <div className="h-full p-5 rounded-2xl border border-white/10 bg-surface-darker/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all flex flex-col relative overflow-hidden">
            <div className="flex justify-between items-start mb-4 z-10">
              <span className="font-bold text-white text-lg">Partial Payment</span>
              <span className="bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">30% Advance</span>
            </div>
            <div className="mt-auto z-10">
              <div className="text-2xl font-black text-white">${(total * 0.3).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
              <p className="text-xs text-text-secondary mt-1">Pay the rest upon arrival</p>
            </div>
            <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center opacity-0 scale-50 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-300 shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-sm font-bold">check</span>
            </div>
          </div>
        </label>
      </div>

      <div className="flex gap-3 items-start p-4 mb-8 rounded-xl bg-surface-darker/50 border border-white/5">
        <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">info</span>
        <p className="text-sm text-text-secondary leading-relaxed">
          Please read our <a className="text-white font-bold hover:text-primary underline transition-colors" href="#">Terms and Conditions</a> carefully before selecting your payment plan. This document contains important information about cancellations and refunds.
        </p>
      </div>

      <div className="space-y-4 mb-6 pt-2 border-t border-white/5">
        <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-4 mt-6">Enter Card Details</h3>
        <div>
          <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Card Number</label>
          <div className="relative">
            <input className="w-full bg-surface-darker border border-white/10 rounded-xl px-4 py-3 pl-12 text-white placeholder-text-secondary/50 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="0000 0000 0000 0000" type="text"/>
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary">credit_card</span>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2 pr-2">
              <div className="h-5 w-8 bg-white rounded flex items-center justify-center">
                <img alt="Visa" className="h-2.5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpKJIGNyK-p1JtWnLeHYQqEk3T34AbutsFzvO3-kavhqcG0rLGqcDcVMlgtqIxD8r0ZqHmcRQIECNrBS3uWNvdLqADfgLmUp3QIHTs7MMZJUnubnEFG2xNTsXNkajsYMgilqD3mdbiSOjW0oPkOkBb_vhRl9l5JtDJYa1KuPGP-WaOKd0wSYPI9B3Nvcc9rO_oDA1CmyeV1j2EAcyj5ooos0r4qO3cNmgl9MkFYvPiIeP6Ai-oLPN90iUN6FUVQt8wgmzx5AGZT5Ie"/>
              </div>
              <div className="h-5 w-8 bg-white rounded flex items-center justify-center">
                <img alt="Mastercard" className="h-3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe6mMEp73dkRMEponbmklGDm4TuYNKNW8b6HqxbiFhrkaXhB9DEPxgUBjf_3A309_-rGy1Gl-fvXrQ-sR9CLeUZlEMIq3ipMPYXwXIfN9miIxUTNPOrVJd5nGX6tmdU3p8M0SmAwVkTpT1JHINY7ZjyM42nlEsNfe1ElWG749gHBYuFmSlbBvoUaHdgwjR4Zft2hjoov7YP-CdlRg5HnAZ5_-O0l74cpx8zVL2YEzPvI0SnVacjkU0S0fn7hvvzTApaR04rYBSEM8t"/>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Expiration Date</label>
            <input className="w-full bg-surface-darker border border-white/10 rounded-xl px-4 py-3 text-white placeholder-text-secondary/50 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="MM/YY" type="text"/>
          </div>
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase mb-2">CVC / CVV</label>
            <div className="relative">
              <input className="w-full bg-surface-darker border border-white/10 rounded-xl px-4 py-3 text-white placeholder-text-secondary/50 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="123" type="text"/>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary text-sm cursor-help">help</span>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Name on Card</label>
          <input className="w-full bg-surface-darker border border-white/10 rounded-xl px-4 py-3 text-white placeholder-text-secondary/50 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Full Name" type="text"/>
        </div>
      </div>

      <div className="mb-4 p-4 rounded-xl border border-white/10 bg-surface-darker/50 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
            <span className="material-symbols-outlined text-xl">support_agent</span>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Having trouble paying?</h4>
            <p className="text-xs text-text-secondary mt-0.5">Contact our support team immediately.</p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none text-center text-xs font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg transition-colors">Call Now</button>
          <button className="flex-1 sm:flex-none text-center text-xs font-bold text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-lg transition-colors shadow-lg shadow-primary/20">Live Chat</button>
        </div>
      </div>

      <div className="bg-surface-darker rounded-xl p-4 flex items-start gap-3 border border-white/5">
        <span className="material-symbols-outlined text-green-500 text-xl mt-0.5">lock</span>
        <div>
          <h4 className="text-sm font-bold text-white">Secure SSL Encryption</h4>
          <p className="text-xs text-text-secondary mt-1">Your financial data is encrypted and secure.</p>
        </div>
      </div>
    </section>
  );
};
