
import React from 'react';

interface StepperProps {
  currentStep: number;
}

export const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  const steps = [
    { label: 'Review Order', id: 1 },
    { label: 'Payment', id: 2 },
    { label: 'Confirmation', id: 3 },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="relative">
        <div className="absolute top-4 md:top-5 left-0 w-full h-0.5 bg-surface-dark border-t border-white/5 -translate-y-1/2 rounded-full"></div>
        <div 
          className="absolute top-4 md:top-5 left-0 h-0.5 bg-primary -translate-y-1/2 rounded-full shadow-[0_0_10px_rgba(217,30,70,0.5)] transition-all duration-500"
          style={{ width: `${(currentStep - 1) * 50}%` }}
        ></div>
        <div className="relative flex justify-between w-full">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center gap-3">
              <div 
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ring-[6px] ring-[#051324] z-10 transition-all ${
                  step.id < currentStep 
                    ? 'bg-primary text-white' 
                    : step.id === currentStep 
                    ? 'bg-white text-background-dark shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                    : 'bg-surface-dark border border-white/10 text-text-secondary'
                }`}
              >
                {step.id < currentStep ? (
                  <span className="material-symbols-outlined text-base md:text-lg font-bold">check</span>
                ) : (
                  <span className="font-black text-sm md:text-base">{step.id}</span>
                )}
              </div>
              <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${
                step.id <= currentStep ? 'text-white' : 'text-text-secondary'
              }`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
