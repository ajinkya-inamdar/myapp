import React from 'react';
import { Helmet } from 'react-helmet';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Ajinkya Inamdar - Contact | Engineer, Strategy & Leadership</title>
        
        <meta 
          name="keywords" 
          content="Ajinkya Inamdar, contact, engineer, strategy, leadership, AI, health-tech, longevity, collaboration, projects, opportunities"
        />
        <meta property="og:title" content="Ajinkya Inamdar - Contact | Engineer, Strategy & Leadership" />
        <meta 
          property="og:description" 
          content="Reach out to Ajinkya Inamdar for collaborations, freelance projects, or full-time opportunities in strategy, AI, and health-tech."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ajinkyainamdar.vercel.app/contact" />
        <meta property="og:image" content="https://ajinkyainamdar.com/assets/myphoto.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ajinkya Inamdar - Contact | Engineer, Strategy & Leadership" />
        <meta 
          name="twitter:description" 
          content="Contact Ajinkya Inamdar for collaborations, projects, or full-time opportunities in engineering, AI, and health-tech."
        />
      </Helmet>

      {/* Hidden H1 for SEO */}
      <h1 className="sr-only">Contact Ajinkya Inamdar - Engineer | Strategy & Leadership | AI & Health-tech</h1>

      <div className="text-black py-20" id="contact">
        <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
          {/* Heading */}
          <h2 className="pl-4 text-4xl sm:text-5xl font-bold pt-10 sm:text-center text-white mb-12 font-axy">
            Contact Me
          </h2>

          {/* Collaboration Section */}
          <div className="mt=1 px-4 sm:px-8 md:pl-20 lg:pl-40 pt-5">
            <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-6">
              Let's Collaborate
            </h3>
            <p className="text-base sm:text-lg text-black text-left">
              I am always open to exciting collaborations, freelance projects, or full-time opportunities where I can bring my skills, creativity, and passion to the table. 
              With a strong foundation in technology, a deep interest in business management and psychology, and a commitment to meaningful impact, I am eager to contribute to teams and projects that aim to make a real difference.
              <br /><br />
              Whether it’s building innovative solutions, shaping strong organizational cultures, or working on initiatives that blend technology with human-centered leadership, I am ready to bring dedication, adaptability, and fresh perspectives to the work.
              <br /><br />
              Let’s build something meaningful!
            </p>
          </div>

          {/* Contact Info & Button */}
          <div className="flex flex-col items-center space-y-6 mt-5">
            {/* Info */}
            <div className="text-center space-y-4">
              <p className="text-black text-base sm:text-lg flex justify-center items-center gap-2">
                <FaEnvelope /> ajinkyainamdar228@gmail.com
              </p>

              
            </div>

          {/* Button */}
<div className="flex justify-center mt-2 mb-2">
  <button
    onClick={() => {
      const email = "ajinkyainamdar228@gmail.com";
      const subject = encodeURIComponent("Enquiry");
      const body = encodeURIComponent("Hi Ajinkya,");

      // Detect mobile device
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

      if (isMobile) {
        // Open Gmail or default mail app
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      } else {
        // Open Gmail in web compose mode
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`,
          "_blank"
        );
      }
    }}
    className="border rounded text-black bg-white px-4 py-2 sm:px-6 sm:py-3 hover:bg-gray-100 transition text-center text-sm sm:text-base"
  >
    Get in Touch
  </button>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
