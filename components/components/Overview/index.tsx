import React from 'react';

const Overview = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
      <p className="text-text-secondary leading-relaxed text-lg mb-6">
        Stand at the foot of the world's highest peak and experience Sherpa
        culture firsthand. This 14-day journey takes you through the legendary
        Khumbu Valley, surrounded by towering giants like Lhotse, Nuptse, and
        Ama Dablam. You'll traverse suspension bridges, visit ancient
        monasteries, and push your limits to reach the base camp of Mount
        Everest at 5,364 meters.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-surface-dark p-4 rounded-2xl border border-white/5 text-center">
          <span className="material-symbols-outlined text-3xl text-primary mb-2">
            hiking
          </span>
          <p className="text-xs text-text-secondary uppercase">Max Altitude</p>
          <p className="text-lg font-bold text-white">5,545m</p>
        </div>
        <div className="bg-surface-dark p-4 rounded-2xl border border-white/5 text-center">
          <span className="material-symbols-outlined text-3xl text-secondary mb-2">
            bed
          </span>
          <p className="text-xs text-text-secondary uppercase">Accommodation</p>
          <p className="text-lg font-bold text-white">Teahouse</p>
        </div>
        <div className="bg-surface-dark p-4 rounded-2xl border border-white/5 text-center">
          <span className="material-symbols-outlined text-3xl text-primary mb-2">
            restaurant
          </span>
          <p className="text-xs text-text-secondary uppercase">Meals</p>
          <p className="text-lg font-bold text-white">Included</p>
        </div>
        <div className="bg-surface-dark p-4 rounded-2xl border border-white/5 text-center">
          <span className="material-symbols-outlined text-3xl text-secondary mb-2">
            flight_takeoff
          </span>
          <p className="text-xs text-text-secondary uppercase">Transport</p>
          <p className="text-lg font-bold text-white">Flight/Bus</p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
