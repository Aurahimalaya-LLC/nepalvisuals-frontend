import React from "react";

const partners = [
  { name: "Partner 1", logo: "/images/partner1_logo.png" },
  { name: "Partner 2", logo: "/images/partner2_logo.png" },
  { name: "Partner 3", logo: "/images/partner3_logo.png" },
  { name: "Partner 4", logo: "/images/partner4_logo.png" },
  { name: "Partner 5", logo: "/images/partner5_logo.png" },
];

const TrustedPartners = () => {
  return (
    <section className="py-7 md:py-16 bg-surface">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
          Our Trusted <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">
            Partners
          </span>
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          We collaborate with the best in the industry to ensure top-notch
          services for our trekkers.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="w-32 h-32 flex justify-center items-center"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedPartners;
