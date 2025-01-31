"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isHovered
          ? 'bg-brown-500 shadow-md' 
          : 'backdrop-blur-sm'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
            <div className="flex items-center space-x-2">
            <Image src="/logo-peninjoan-coffee.png" alt="Logo" width={32} height={32} className={`transition-colors duration-300 ${
              scrolled || isHovered ? 'filter brightness-0 invert' : 'filter brightness-0 invert'
            }`} />
            <span className={`text-xl font-bold transition-colors duration-300 ${
              scrolled || isHovered ? 'text-white' : 'text-white'
            }`}>Peninjoan Bean</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'products', 'buy', 'about'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`transition-colors duration-300 ${
                  scrolled || isHovered
                    ? 'text-white hover:text-gray-600'
                    : 'text-white hover:text-gray-300'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-300 ${
                scrolled || isHovered ? 'text-black' : 'text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className={`flex flex-col space-y-4 pb-4 ${
              scrolled || isHovered ? 'text-black' : 'text-white'
            }`}>
              {['home', 'products', 'buy', 'about'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`transition-colors duration-300 ${
                    scrolled || isHovered
                      ? 'hover:text-gray-600'
                      : 'hover:text-gray-300'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;