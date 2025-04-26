import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-5xl font-bold text-center text-white mb-16 font-axy">
          Contact Me
        </h2>
        <div className="  pl-40">
  <h3 className="text-3xl font-semibold text-white mb-10 ">   
    Let's Collaborate
  </h3>
  <p className="text-lg text-white text-left">
  I am always open to exciting collaborations, freelance projects, or full-time opportunities where I can bring my skills, creativity, and passion to the table. With a strong foundation in technology, a deep interest in business management and psychology, and a commitment to meaningful impact, I am eager to contribute to teams and projects that aim to make a real difference.

Whether it’s building innovative solutions, shaping strong organizational cultures, or working on initiatives that blend technology with human-centered leadership, I am ready to bring dedication, adaptability, and fresh perspectives to the work. If you’re looking for a reliable, driven, and forward-thinking professional to join your team or collaborate on something impactful, I would love to connect and explore the possibilities together.

Let’s build something meaningful!
  </p>
</div>

        <div className="flex flex-col items-center space-y-6 mt-20">
          {/* Info */}
          <div className="text-center">
            <p className="text-white text-lg mb-2 flex justify-center items-center gap-2">
              <FaEnvelope /> ajinkyainamdar228@gmail.com
            </p>
            
            <p className="text-white text-lg flex justify-center items-center gap-2">
              <FaMapMarkerAlt /> Pune, Maharashtra, India
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-center mt-6">
  <a 
    href="https://mail.google.com/mail/?view=cm&fs=1&to=ajinkyainamdar228@gmail.com&su=Enquiry&body=Hi%20Ajinkya,"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#BAFF39] text-black px-6 py-3 rounded hover:bg-[#6E6E6E] hover:text-white transition"
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