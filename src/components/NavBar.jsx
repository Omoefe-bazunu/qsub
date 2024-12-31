import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiAlignRight, FiX } from "react-icons/fi";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className="h-auto w-full bg-white bg-cover bg-center bg-no-repeat top-0 flex items-center py-8"
      style={{ backgroundImage: `url('./navbg.jpg')` }}
      aria-label="Main Navigation"
    >
      <div className="h-20 w-4/6 bg-white mx-auto rounded-lg border border-secondary flex justify-between items-center px-6 sm:px-12">
        {/* Logo */}
        <img
          src="./web2.png"
          alt="QSub Logo - Navigate to Home"
          className="h-10"
        />

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiAlignRight size={24} />}
        </button>

        {/* Desktop Navigation */}
        <ul className="navLinks hidden sm:flex items-center gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `focus:outline-none focus:ring-2 focus:ring-secondary ${
                  isActive ? "text-secondary" : "text-black"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#join"
              className="text-white bg-secondary rounded-full px-6 py-2 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Join Us
            </a>
          </li>
          <li>
            <NavLink
              to="/Blog"
              className={({ isActive }) =>
                `focus:outline-none focus:ring-2 focus:ring-secondary ${
                  isActive ? "text-secondary" : "text-gray-800"
                }`
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul
            id="mobile-menu"
            className="navLinks sm:hidden absolute top-28 right-20 bg-white shadow-md rounded-md flex flex-col gap-4 p-4"
          >
            <li>
              <NavLink
                to="/"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block text-center focus:outline-none focus:ring-2 focus:ring-secondary ${
                    isActive ? "text-secondary" : "text-black"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <a
                href="#about"
                onClick={toggleMenu}
                className="block text-center text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#join"
                onClick={toggleMenu}
                className="block text-center text-white bg-secondary rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Join Us
              </a>
            </li>
            <li>
              <NavLink
                to="/Blog"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block text-center focus:outline-none focus:ring-2 focus:ring-secondary ${
                    isActive ? "text-secondary" : "text-gray-800"
                  }`
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="block text-center text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                Contact Us
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
