import React from 'react';
import { FaXTwitter, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa6';
import footerBg from '../assets/footer.jpg';
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
    <footer className="relative w-full text-white py-10 overflow-hidden">
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

        {/* Grid layout: contact left, menu center on desktop — stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* ===== Left Column (Desktop: Contact | Mobile: Second) ===== */}
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start space-y-4">
            <h2 className="text-xl font-semibold uppercase tracking-wide text-center md:text-left">
              Contact
            </h2>

            {/* Email */}
            <button
              onClick={handleEmailClick}
              className="flex items-center space-x-2 text-lg hover:text-gray-300 transition justify-start"
            >
              <FaEnvelope />
              <span className="break-all">ajinkyainamdar228@gmail.com</span>
            </button>

            {/* Social Media */}
            <div className="flex justify-start space-x-6 text-2xl mt-4">
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

          {/* ===== Middle Column (Desktop: Menu Center | Mobile: First) ===== */}
          <div className="order-1 md:order-2 flex flex-col items-center md:items-start space-y-4">
            <h2 className="text-xl font-semibold uppercase tracking-wide text-center md:text-left">
              Menu
            </h2>

            <div className="flex flex-col space-y-1 text-lg font-medium text-left">
              <Link to="/" className="hover:text-gray-300 transition">
                About
              </Link>
              <Link to="/cv" className="hover:text-gray-300 transition">
                Portfolio
              </Link>
              <Link to="/blog" className="hover:text-gray-300 transition">
                Blogs
              </Link>
              <Link to="/contact" className="hover:text-gray-300 transition">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* ===== Divider Line ===== */}
        <div className="border-t border-gray-500 mt-10 opacity-40"></div>

        {/* ===== Bottom Line ===== */}
        <div className="text-center text-sm text-gray-300 mt-6">
          © {new Date().getFullYear()} Ajinkya Inamdar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
