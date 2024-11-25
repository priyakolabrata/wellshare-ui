// custom/WellshareNavbar.tsx
import React from 'react';

const WellshareNavbar = () => {
  return (
    <nav className="w-full bg-gray-800 fixed top-0 left-0 z-50">
    <div className="container mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <img src="/app/images/wellshare.png" alt="Logo" className="h-8 w-8 mr-2" />
        <div className="text-white text-lg font-bold">Wellshare</div>
      </div>
      <ul className="flex space-x-4">
        <li><a href="/" className="text-white">Home</a></li>
        <li><a href="/about" className="text-white">About</a></li>
        <li><a href="/contact" className="text-white">Contact</a></li>
      </ul>
    </div>
  </nav>
  );
};

export default WellshareNavbar;