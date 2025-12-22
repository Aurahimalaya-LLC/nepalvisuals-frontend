import React from "react";

const MissionValues = () => {
  return (
  <section className="mb-10 md:mb-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span className="text-xs font-bold text-white uppercase tracking-wider">Our Philosophy</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Mission & Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-dark p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group hover:shadow-xl hover:shadow-primary/5">
              <div className="w-14 h-14 rounded-full bg-secondary text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-secondary/30">
                <span className="material-symbols-outlined text-3xl">eco</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Eco-Friendly Treks</h3>
              <p className="text-text-secondary leading-relaxed">
                We prioritize sustainable travel practices to protect the pristine environments we explore, ensuring they remain for future generations.
              </p>
            </div>
            <div className="bg-surface-dark p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group hover:shadow-xl hover:shadow-primary/5">
              <div className="w-14 h-14 rounded-full bg-secondary text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-secondary/30">
                <span className="material-symbols-outlined text-3xl">verified_user</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Certified Guides</h3>
              <p className="text-text-secondary leading-relaxed">
                Our local experts are fully certified, bringing years of experience and deep cultural knowledge to every expedition.
              </p>
            </div>
            <div className="bg-surface-dark p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group hover:shadow-xl hover:shadow-primary/5">
              <div className="w-14 h-14 rounded-full bg-secondary text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-secondary/30">
                <span className="material-symbols-outlined text-3xl">medical_services</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Safety First</h3>
              <p className="text-text-secondary leading-relaxed">
                Comprehensive safety protocols, top-tier equipment, and emergency support systems ensure your peace of mind.
              </p>
            </div>
          </div>
        </section>
  );
};

export default MissionValues;
