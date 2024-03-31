
"use client"
import React from 'react';



function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 border-t">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <span className="font-bold text-xl">Dev Mate</span>
            </div>
            <div >
              <nav className="space-x-4 '">
                <a href="/dashboard" className="hover:text-gray-500">Dashboard</a>
                <a href="/pricing" className="hover:text-gray-500">Dev-Premium</a>
                <a href="#" className="hover:text-gray-500">About</a>
                <a href="#" className="hover:text-gray-500">Contact</a>
                {/* Add more links as needed */}
              </nav>
            </div>
          </div>
        </footer>
      );
}



export default Footer;
