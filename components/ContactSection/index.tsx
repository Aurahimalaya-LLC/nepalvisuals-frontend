import React from "react";

const ContactSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-10 md:mb-32 bg-red ">
      {/* Left Column: Contact Info */}
      <div className="flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            Support 24/7
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Let's Start the <br />
          <span className="text-primary">Conversation</span>
        </h2>

        <p className="text-text-secondary mb-10 leading-relaxed text-lg">
          Whether you're looking for a custom itinerary, have specific questions
          about gear, or just want to say hello, we'd love to hear from you.
        </p>

        <div className="space-y-8">
          <div className="flex items-start gap-5 group">
            <div className="w-14 h-14 rounded-2xl bg-surface-dark border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 group-hover:bg-surface-darker transition-all duration-300 shadow-lg shadow-black/20">
              <span className="material-symbols-outlined text-primary text-2xl">
                location_on
              </span>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-1">
                Headquarters
              </h4>
              <p className="text-text-secondary text-base leading-relaxed">
                123 Adventure Marg, Thamel,
                <br />
                Kathmandu 44600, Nepal
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5 group">
            <div className="w-14 h-14 rounded-2xl bg-surface-dark border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 group-hover:bg-surface-darker transition-all duration-300 shadow-lg shadow-black/20">
              <span className="material-symbols-outlined text-primary text-2xl">
                call
              </span>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-1">
                Phone & WhatsApp
              </h4>
              <p className="text-text-secondary text-base leading-relaxed mb-1">
                <a
                  href="tel:+97714423456"
                  className="hover:text-white transition-colors"
                >
                  +977 1 442 3456
                </a>{" "}
                (Office)
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                <a
                  href="https://wa.me/9779800000000"
                  className="hover:text-white transition-colors"
                >
                  +977 980 000 0000
                </a>{" "}
                (24/7 Support)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5 group">
            <div className="w-14 h-14 rounded-2xl bg-surface-dark border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 group-hover:bg-surface-darker transition-all duration-300 shadow-lg shadow-black/20">
              <span className="material-symbols-outlined text-primary text-2xl">
                mail
              </span>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-1">Email Us</h4>
              <p className="text-text-secondary text-base leading-relaxed mb-1">
                <a
                  href="mailto:hello@nepalvisuals.com"
                  className="hover:text-white transition-colors"
                >
                  hello@nepalvisuals.com
                </a>
              </p>
              <p className="text-text-secondary text-sm">
                We typically reply within 2 hours.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <h5 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
            Follow our journey
          </h5>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-surface-dark border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-surface-dark border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="relative">
        <div className="bg-surface-dark p-8 md:p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden shadow-2xl shadow-black/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none"></div>

          <form
            className="relative z-10 space-y-6"
            // onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-white mb-2 ml-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full bg-background-dark border border-white/10 rounded-2xl py-4 px-5 text-white placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-bold text-white mb-2 ml-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-background-dark border border-white/10 rounded-2xl py-4 px-5 text-white placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-white mb-2 ml-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                className="w-full bg-background-dark border border-white/10 rounded-2xl py-4 px-5 text-white placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-bold text-white mb-2 ml-1"
              >
                Subject
              </label>
              <select
                id="subject"
                className="w-full bg-background-dark border border-white/10 rounded-2xl py-4 px-5 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none appearance-none cursor-pointer"
              >
                <option>General Inquiry</option>
                <option>Booking Request</option>
                <option>Custom Itinerary</option>
                <option>Partnership</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold text-white mb-2 ml-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Tell us about your travel plans..."
                className="w-full bg-background-dark border border-white/10 rounded-2xl py-4 px-5 text-white placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none h-40 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-[0.98] flex items-center justify-center gap-2 text-lg mt-2"
            >
              Send Message
              <span className="material-symbols-outlined">send</span>
            </button>

            <p className="text-center text-xs text-text-secondary mt-4">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              apply.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
