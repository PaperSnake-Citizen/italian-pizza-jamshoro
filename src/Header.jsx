import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from './assets/spicy logo.png';

export default function Header() {
  const [open, setOpen] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <header className="w-full bg-gray-900 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        
        {/* LOGO */}
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img 
            src={logo} 
            className="w-19 h-12 object-contain"
            alt="Italian Pizza Logo"
          />
          <h1 className="text-2xl font-bold text-red-600">
            Italian Pizza Jamshoro
          </h1>
        </div>


        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <button onClick={() => scrollToSection("menu")} className="hover:text-red-600 duration-200">Menu</button>
          <button onClick={() => scrollToSection("about")} className="hover:text-red-600 duration-200">About</button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-red-600 duration-200">Contact</button>

          <a
            href="https://wa.me/923053442421"
            className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 duration-200"
          >
            Order Now
          </a>
        </nav>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden bg-white shadow-inner p-4 flex flex-col gap-4 text-gray-700 font-medium">
          <button onClick={() => scrollToSection("menu")} className="hover:text-red-600 duration-200">Menu</button>
          <button onClick={() => scrollToSection("about")} className="hover:text-red-600 duration-200">About</button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-red-600 duration-200">Contact</button>

          <a
            href="https://wa.me/923053442421"
            className="bg-red-600 text-white px-4 py-2 rounded-xl text-center hover:bg-red-700 duration-200"
          >
            Order Now
          </a>
        </nav>
      )}
    </header>
  );
}