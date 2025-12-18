import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the best time to trek in Nepal?",
    answer:
      "The best trekking seasons are Autumn (September to November) and Spring (March to May). Autumn offers clear skies and moderate temperatures, while Spring is famous for blooming rhododendrons and lush landscapes. Winter treks are possible at lower altitudes.",
  },
  {
    question: "Do I need prior trekking experience?",
    answer:
      "It depends on the trek. Easy to moderate treks like Poon Hill or Langtang Valley are suitable for beginners with average fitness. However, high-altitude treks like Everest Base Camp or Manaslu Circuit require good physical conditioning and prior hiking experience is beneficial.",
  },
  {
    question: "What gear do I need to bring?",
    answer:
      "We provide a comprehensive packing list upon booking. Generally, you'll need good hiking boots, thermal layers, a down jacket, and a sleeping bag (which can be rented in Kathmandu). We provide duffel bags for porters to carry your main luggage.",
  },
  {
    question: "Is travel insurance mandatory?",
    answer:
      "Yes, comprehensive travel insurance is mandatory for all our trekkers. It must cover medical emergencies, accidents, and emergency evacuation (helicopter rescue) up to the maximum altitude of your trek.",
  },
  {
    question: "How do I book a trek?",
    answer:
      "You can book directly through our website by selecting your desired trek and dates. A 20% deposit is required to secure your booking, with the balance due upon arrival in Kathmandu or via bank transfer prior to the trip.",
  },
  {
    question: "What if I get altitude sickness?",
    answer:
      "Our itineraries are designed with proper acclimatization days. Our guides are trained in wilderness first aid and carry oximeters to monitor your health. If symptoms persist, we have protocols for safe descent or evacuation if necessary.",
  },
  // Add any additional FAQs or modify the section as needed.
];

const FAQSection = () => {
  return (
    <section className="mb-10 md:mb-32">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            Common Questions
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
          Frequently Asked <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">
            Questions
          </span>
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Quick answers to common questions about our treks, booking process,
          and preparations for your Himalayan adventure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group bg-surface-dark border border-white/10 rounded-[2rem] p-4 md:p-8 cursor-pointer hover:border-primary/30 transition-all duration-300 shadow-lg shadow-black/20"
          >
            <summary className="flex justify-between items-start gap-4 font-bold text-white text-sm md:text-lg leading-tight list-none">
              <span className="flex-1">{faq.question}</span>
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-primary text-2xl flex-shrink-0 mt-0.5">
                expand_more
              </span>
            </summary>
            <div className="text-text-secondary mt-6 leading-relaxed text-base border-t border-white/5 pt-6">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
