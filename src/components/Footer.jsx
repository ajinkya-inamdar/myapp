import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-6 flex flex-col items-center space-y-4 shadow-inner">
      <p className="text-lg font-semibold">Connect with me</p>
      <div className="flex space-x-6">
        <a
          href="https://x.com/ajinkyainamdar_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-800 transition-colors duration-300"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/ajinkya-inamdar-9369b9211/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-[#D3D3D3] transition-colors duration-300"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
