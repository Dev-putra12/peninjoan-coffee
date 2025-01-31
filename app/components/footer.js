"use client"

import Image from "next/image";


const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brown-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative h-32 w-64 mx-auto flex items-center justify-center">
            <Image 
              src={"/logo-peninjoan-coffee.png"} 
              alt={"logo"}
              fill
              className="object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('home')}>Home</button></li>
              <li><button onClick={() => scrollToSection('products')}>Products</button></li>
              <li><button onClick={() => scrollToSection('buy')}>Buy</button></li>
              <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <p>Email: info@coffeehouse.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2025 Peninjoan Coffee Bean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;