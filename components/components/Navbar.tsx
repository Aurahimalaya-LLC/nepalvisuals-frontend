import React from "react";


const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 w-full px-4 py-6 md:px-8 lg:px-16 pointer-events-none">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-background-dark/80 backdrop-blur-md border border-white/10 px-6 py-3 shadow-lg shadow-black/10 pointer-events-auto">
        <div className="flex items-center gap-3">
          <a className="flex items-center gap-3 group" href="/">
            <div className="h-10 w-10 flex items-center justify-center bg-white/5 rounded-full border border-white/10 group-hover:border-primary/50 transition-colors">
              <img
                alt="Nepal Visuals Logo"
                className="h-6 object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRy0TbpJ_PyPRnlwm3vmv8YOwHEMLrjlqb1iCnDlkJLe7TYGezFcXQJFNepaD_5h9ikCI-MEbTZVYHqMdk7bHR13Gb35sZeixako-sQ-K5EOaybz8g_8E1ZJ1xGjpXfcIKch0PkvWe305Cb_OO7bUchCf8P7xEYkzpD26wi2-7CKBn3JEbMH2sunKHwOZRzuPWFiOaMaI3IfjBWF77rSmeoNtA16YRePZQbhg4l6D3QB6A8nsfN-cDCxs9SedoJ4W0NUU7Gnf-Coql"
              />
            </div>
            <span className="text-white font-bold text-lg tracking-tight group-hover:text-white/90 transition-colors">
              Nepal Visuals
            </span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-6 xl:gap-8 flex-1 justify-end mr-8">
          <a className="text-sm font-medium text-white hover:text-primary transition-colors" href="#">
            Services
          </a>
          <a className="text-sm font-medium text-white hover:text-primary transition-colors" href="#">
            Destinations
          </a>
          <a className="text-sm font-medium text-white hover:text-primary transition-colors" href="#">
            About
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="hidden md:flex bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all items-center gap-2 shadow-lg shadow-primary/20">
            <span>Book Now</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
          <button className="md:hidden text-white p-1">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
