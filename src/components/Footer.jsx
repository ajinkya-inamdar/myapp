import React from 'react';
import { FaXTwitter, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa6';
import footerBg from '../assets/footer.jpg';
import footerLogo from '../assets/logo.png'; // 🟢 Add your logo image here
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleEmailClick = () => {
    const email = "ajinkyainamdar228@gmail.com";
    const subject = encodeURIComponent("Enquiry");
    const body = encodeURIComponent("Hi Ajinkya,");
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    } else {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`,
        "_blank"
      );
    }
  };

  return (
    <footer className="relative w-full text-white py-6 overflow-hidden">
      {/* ===== Background Image ===== */}
      <div className="absolute inset-0">
        <img
          src={footerBg}
          alt="Footer Background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* ===== Overlay ===== */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* ===== Footer Content ===== */}
      <div className="relative z-10 container mx-auto px-6">

        {/* ===== Grid layout ===== */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-center">

          {/* ===== Logo (Desktop only) ===== */}
          <div className="hidden md:flex justify-start ml-55 text-left">
            <img
              src={footerLogo}
              alt="Logo"
              className="w-80 h-auto object-contain opacity-95 hover:opacity-100 transition transform hover:scale-105 duration-300"
            />
          </div>

          {/* ===== Menu (Perfect Center, Left-aligned Text) ===== */}
          <div className="order-1 md:order-2 flex flex-col space-y-1 text-5xl font-medium text-left md:text-left mx-auto items-start">
            <h2 className="text-xl font-semibold tracking-wide text-center mt-6 md:text-left">
              Menu
            </h2>

            <div className="flex flex-col space-y-1 text-lg font-medium text-left">
              <Link to="/" className="hover:text-gray-300 transition block">
                About
              </Link>
              <Link to="/cv" className="hover:text-gray-300 transition block">
                Portfolio
              </Link>
              <Link to="/blog" className="hover:text-gray-300 transition block">
                Blogs
              </Link>
              <Link to="/contact" className="hover:text-gray-300 transition block">
                Contact
              </Link>
            </div>
          </div>

          {/* ===== Contact (Right side, Center aligned) ===== */}
          <div className="order-2 md:order-3 flex flex-col items-center md:items-center text-center space-y-2">
            <h2 className="text-lg font-semibold tracking-wide">
              Get in Touch
            </h2>

            {/* Email */}
            <button
              onClick={handleEmailClick}
              className="flex items-center space-x-2 text-base hover:text-gray-300 transition justify-center"
            >
              <FaEnvelope />
              <span className="break-all">ajinkyainamdar228@gmail.com</span>
            </button>

            {/* Social Media */}
            <div className="flex justify-center space-x-5 text-xl mt-2">
              <a
                href="https://x.com/ajinkyainamdar_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition"
                aria-label="Twitter / X"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/ajinkya-inamdar-9369b9211/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://whatsapp.com/channel/0029Val7Pek9WtBvmFWZtG3H"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition"
                aria-label="WhatsApp Channel"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* ===== Divider Line ===== */}
        <div className="border-t border-gray-500 mt-6 opacity-40"></div>

        {/* ===== Bottom Line ===== */}
        <div className="text-center text-xs text-gray-300 mt-4">
          © {new Date().getFullYear()} Ajinkya Inamdar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;