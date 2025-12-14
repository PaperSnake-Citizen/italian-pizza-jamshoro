import logo from './assets/spicy logo.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
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
            Spicy Restaurant Jamshoro
          </h1>
        </div>

        {/* LINKS */}
        <div className="flex gap-6">
          <a href="#home" className="hover:text-red-600 duration-200">Home</a>
          <a href="#menu" className="hover:text-red-600 duration-200">Menu</a>
          <a href="#about" className="hover:text-red-600 duration-200">About</a>
          <a href="#contact" className="hover:text-red-600 duration-200">Contact</a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-sm text-gray-400 mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Spicy Restaurant Jamshoro. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
