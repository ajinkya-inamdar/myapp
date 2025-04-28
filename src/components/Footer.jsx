import React from 'react';
import footerBg from '../assets/footer.jpg'; // 👈 Import your image properly

const Footer = () => {
  return (
    <footer className="relative w-full h-full text-gray-800 py-10 flex flex-col items-center  overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={footerBg} // 👈 Now use the imported image
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col items-center">
        <p className="text-2xl font-bold text-white">Connect with me</p>
        <div className="flex space-x-6 mt-4">
          <a
            href="https://x.com/ajinkyainamdar_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/ajinkya-inamdar-9369b9211/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
