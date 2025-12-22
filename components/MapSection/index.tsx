import React from "react";

const MapSection = () => {
  return (
    <section className="mb-32">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
          <span className="material-symbols-outlined text-sm text-secondary">
            map
          </span>
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            Our Location
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Visit Our Office
        </h2>
      </div>

      <div className="w-full rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl relative group h-[450px]">
        {/* Placeholder for loading state if needed, though iframe loads relatively fast */}
        <div className="absolute inset-0 bg-surface-dark z-0 flex items-center justify-center">
          <span className="text-text-secondary animate-pulse">
            Loading Map...
          </span>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31713614688!2d85.29111322238337!3d27.70895594444539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1652873982463!5m2!1sen!2sus"
          className="relative z-10 w-full h-full border-0 map-filter"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location Map"
        ></iframe>

        <div className="hidden md:block absolute bottom-8 left-8 z-20 bg-surface-dark/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl max-w-xs">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20 shrink-0">
              <span className="material-symbols-outlined text-white text-xl">
                storefront
              </span>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-1">
                Open for Visitors
              </h4>
              <p className="text-text-secondary text-xs leading-relaxed">
                Sunday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
