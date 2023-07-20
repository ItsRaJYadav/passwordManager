import React from 'react';

const SimpleHeader = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Simple Header</h1>
      <nav className="flex mt-4">
        <a href="/" className="mr-4 hover:text-gray-400">Home</a>
        <a href="/about" className="mr-4 hover:text-gray-400">About</a>
        
      </nav>
    </header>
  );
};

export default SimpleHeader;
