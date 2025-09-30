import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">LivelinessCheck</h1>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-gray-300">Features</a>
          <a href="#docs" className="hover:text-gray-300">Docs</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
