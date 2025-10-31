import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = [
    { name: "About", href: "#About" },
    { name: "Skills", href: "#Skills" },
    { name: "Experience", href: "#Experience" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact", href: "#Footer" }
  ];

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-slate-800 backdrop-blur-md shadow-lg border-b border-slate-600/50">
      <div className="flex justify-between items-center px-6 md:px-16 py-4 text-white">
        <span className="font-bold tracking-wide hover:scale-105 transition-transform duration-300 cursor-pointer">
          <span className="text-4xl text-yellow-500">KB</span>{' '}
          <span className="text-2xl">Portfolio</span>
        </span>

        <ul className="hidden md:flex gap-10 font-medium text-lg">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <a href={item.href} className="hover:text-yellow-400 transition-colors duration-300">
                {item.name}
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        <button className="md:hidden z-50 p-2 rounded-lg hover:bg-slate-700 transition-all duration-300" onClick={toggleMenu}>
          {menuOpen ? <RiCloseLine size={30} className="text-yellow-400" /> : <RiMenu2Line size={30} />}
        </button>
      </div>

      <div
        className={`md:hidden bg-slate-900/95 backdrop-blur-lg text-white absolute top-full left-0 w-full px-8 py-6 space-y-4 transition-all duration-300 border-b border-slate-700 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={toggleMenu}
            className="block text-lg hover:text-yellow-400 hover:translate-x-2 transition-all duration-300 py-2 border-l-2 border-transparent hover:border-yellow-400 pl-4"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;