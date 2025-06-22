  import React from 'react';
  import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

  const Contact = () => {
    return (
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

              <p className="text-black text-base sm:text-lg flex justify-center items-center gap-2">
                <FaMapMarkerAlt /> Pune, Maharashtra, India
              </p>
            </div>

            {/* Button */}
            <div className="flex justify-center mt-2 mb-2">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ajinkyainamdar228@gmail.com&su=Enquiry&body=Hi%20Ajinkya,"
                target="_blank"
                rel="noopener noreferrer"
                className="border rounded text-black bg-white text-black px-4 py-2 sm:px-6 sm:py-3 rounded hover:bg-white hover:text-black transition text-center text-sm sm:text-base"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Contact;
