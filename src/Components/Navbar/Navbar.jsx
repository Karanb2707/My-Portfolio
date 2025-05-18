import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="relative top-0 left-0 w-full z-50 bg-slate-700 backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center px-6 md:px-16 py-4 text-white">
        <span className="font-bold tracking-wide">
          <span className="text-4xl text-yellow-500">KB</span>{' '}
          <span className="text-2xl">Portfolio</span>
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-medium text-lg">
          <li className="hover:text-yellow-400 transition"><a href="#About">About</a></li>
          <li className="hover:text-yellow-400 transition"><a href="#Skills">Skills</a></li>
          <li className="hover:text-yellow-400 transition"><a href="#Experience">Experience</a></li>
          <li className="hover:text-yellow-400 transition"><a href="#Projects">Projects</a></li>
          <li className="hover:text-yellow-400 transition"><a href="#Footer">Contact</a></li>
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden z-50" onClick={toggleMenu}>
          {menuOpen ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black bg-opacity-95 text-white absolute top-16 left-0 w-full px-8 py-6 space-y-6 transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <a href="#About" onClick={toggleMenu} className="block text-lg hover:text-yellow-400">About</a>
        <a href="#About" onClick={toggleMenu} className="block text-lg hover:text-yellow-400">Skills</a>
        <a href="#Experience" onClick={toggleMenu} className="block text-lg hover:text-yellow-400">Experience</a>
        <a href="#Projects" onClick={toggleMenu} className="block text-lg hover:text-yellow-400">Projects</a>
        <a href="#Footer" onClick={toggleMenu} className="block text-lg hover:text-yellow-400">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;