/*
 * Home Server Landing Page
 * Author: Deep Shah <shah.deep2025@gmail.com>
 * Created: 2024-02-29T11:59:31.187Z
 */

import React, { useState } from 'react';
import { Server, Menu, X } from 'lucide-react';

/**
 * @component
 * @description Header component for the landing page.
 * Includes the logo, navigation links, and a mobile menu toggle.
 * @author Deep Shah <shah.deep2025@gmail.com>
 * @param {Object} props - Component props (none expected)
 * @returns {JSX.Element} - Header component
 */
const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * @function toggleMobileMenu
   * @description Toggles the mobile menu open and close state.
   * @returns {void}
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 glassmorphic"> {/* Apply glassmorphic class and sticky header */}
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center text-text-DEFAULT no-underline"> {/* Use updated text color */}
          <Server className="mr-2 text-secondary-DEFAULT" /> {/* Neon accent color for icon */}
          <span className="font-bold text-xl">Home Server Solutions</span>
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="#hardware" className="text-text-secondary hover:text-text-DEFAULT transition-colors duration-300">Hardware</a>
          <a href="#os-comparison" className="text-text-secondary hover:text-text-DEFAULT transition-colors duration-300">OS Comparison</a>
          <a href="#testimonials" className="text-text-secondary hover:text-text-DEFAULT transition-colors duration-300">Testimonials</a>
          <a href="#contact" className="text-text-secondary hover:text-text-DEFAULT transition-colors duration-300">Contact</a>
        </div>
        <div className="md:hidden">
          <button
            className="text-text-secondary hover:text-text-DEFAULT focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="text-secondary-DEFAULT" /> : <Menu className="text-secondary-DEFAULT" />} {/* Neon icons */}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-primary-lighter`}> {/* Darker background for mobile menu */}
        <div className="px-4 py-4 space-y-4">
          <a href="#hardware" className="block text-text-secondary hover:text-text-DEFAULT transition-colors duration-300 py-2">Hardware</a>
          <a href="#os-comparison" className="block text-text-secondary hover:text-text-DEFAULT transition-colors duration-300 py-2">OS Comparison</a>
          <a href="#testimonials" className="block text-text-secondary hover:text-text-DEFAULT transition-colors duration-300 py-2">Testimonials</a>
          <a href="#contact" className="block text-text-secondary hover:text-text-DEFAULT transition-colors duration-300 py-2">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
