import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="relative -mt-[100px] min-h-[40vh] flex items-end justify-center overflow-hidden rounded-b-[3rem]">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRhAgmyafMtZInsKcZjC6PERny9fQkTYXnQc2xe3Dn2hSTQ2D2bEPyiLHkfuqDOIamvdyHiV6lOBJgYm_mzEkiQeGcxj6XcjWqapph7IcKty8Mcbs7CdDGengbgwALm5rAVVQmydirCKo5JLlaeh-L3z0AJYecOSmxkI8TpR7pMITU12XLou8iXgEwQe7_3NbQK8rZDzw39TV_j5JnhmpBQ55T2U0LJGQROBZEKe8IxNVO4-xOcOfSMr99VgNtWGMAriy0J_zOV2il')`,
        }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#051324] via-[#051324]/90 to-[#051324]/40"></div>
      <div className="relative z-10 container mx-auto px-4 pb-12 max-w-7xl">
        <div className="flex flex-col gap-4">
          <a
            className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors text-sm font-medium w-fit"
            href="#"
          >
            <span className="material-symbols-outlined text-lg">
              arrow_back
            </span>
            Back to Trip Details
          </a>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Checkout &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
              Payment
            </span>
          </h1>
        </div>
      </div>
    </header>
  );
};
