import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 sticky bottom-0 mt-72">
      <p>
        Password Manager &copy; {new Date().getFullYear()} - Developed by{' '}
        <a
          href="https://www.linkedin.com/in/rajydv07"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:underline"
        >
          Raj
        </a>
      </p>
    </footer>
  );
};

export default Footer;
