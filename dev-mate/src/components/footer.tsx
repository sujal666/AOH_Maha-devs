
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-bold text-xl">Dev Mate</span>
        </div>
        <div>
          <nav className="space-x-4">
            <a href="#" className="hover:text-gray-500">About</a>
            <a href="#" className="hover:text-gray-500">Blog</a>
            <a href="#" className="hover:text-gray-500">Contact</a>
            {/* Add more links as needed */}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
