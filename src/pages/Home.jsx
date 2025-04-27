import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import profilePic from "../assets/myphoto.jpg";
import cvFile from "../assets/Ajinkya_Inamdar_CV.pdf";
import cert1 from "../assets/certifications/cert1.png";
import cert2 from "../assets/certifications/cert2.png";
import cert3 from "../assets/certifications/cert3.png";
import cert4 from "../assets/certifications/cert4.png";
import attendanceImg from '../assets/attendance.jpg';
import stockMarketImg from '../assets/stock_market.jpg';

const skillsData = [
  { title: "Machine Learning", level: "Intermediate", details: "Experienced with Python, TensorFlow, and Scikit-learn." },
  { title: "Team Management", level: "Advanced", details: "Led multiple tech teams successfully." },
  { title: "Web Development", level: "Advanced", details: "Built websites using React.js, Vite, Tailwind CSS." },
  { title: "Product Development", level: "Beginner", details: "Learning agile methodology and lean startup principles." },
  { title: "Hindi & Marathi", level: "Native", details: "Fluent for communication and collaboration." },
  { title: "English", level: "Professional", details: "Proficient in technical and professional communication." },
];

const certifications = [
  { id: 1, image: cert1, title: "Internship Certificate", description: "QCX PVT.LTD - Smartsort.io development." },
  { id: 2, image: cert2, title: "ML Specialization by Deeplearning.AI", description: "Built solid ML & DL foundations." },
  { id: 3, image: cert3, title: "Computational Neuroscience", description: "Learned neural coding and learning models." },
  { id: 4, image: cert4, title: "Python for Data Science", description: "Practical data science with real-world projects." },
];

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="text-white px-4 sm:px-6 py-8 sm:py-10 min-h-screen">
      {/* Intro Section */}
      <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10 max-w-6xl mx-auto mt-6 md:mt-10">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-shrink-0 mx-auto md:mx-0"
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-48 h-64 sm:w-64 sm:h-80 md:w-72 md:h-96 object-cover rounded-lg shadow-lg relative z-10"
            style={{ marginTop: "20px" }}
          />
        </motion.div>

        {/* About Section */}
        <div className="flex flex-col justify-center md:pl-6 lg:pl-10 text-left mt-4 md:mt-0">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">Hi, I'm Ajinkya Inamdar</h1>
  <p className="text-gray-400 mb-3 md:mb-4 text-base sm:text-lg md:text-xl max-w-md md:mx-0">
    Engineer | Passionate about Strategy, Culture & Leadership | Artificial Intelligence
  </p>
  <p className="mb-6 text-gray-300 max-w-lg text-sm sm:text-base md:text-lg md:mx-0">
    An electronics and telecommunication engineer working across multiple startups, applying strong foundations in ML, leadership, and team management.
  </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ajinkyainamdar228@gmail.com&su=Enquiry&body=Hi%20Ajinkya,"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#BAFF39] text-black px-4 py-2 sm:px-6 sm:py-3 rounded hover:bg-[#6E6E6E] hover:text-white transition text-center text-sm sm:text-base"
            >
              Get in Touch
            </a>
            <a 
              href={cvFile} 
              download 
              className="border border-[#BAFF39] px-4 py-2 sm:px-6 sm:py-3 rounded text-[#BAFF39] hover:bg-[#6E6E6E] transition text-center text-sm sm:text-base"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="mt-16 sm:mt-20 max-w-6xl mx-auto px-4">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 text-center md:text-left">
          About Me
        </h3>
        <div className="text-sm sm:text-base md:text-lg text-gray-300 text-justify">
          <p className="mb-4 sm:mb-6">
            I am an engineering graduate with a strong foundation in technology and a growing passion for business management, organizational culture, and human psychology. Alongside my work in Artificial Intelligence and Machine Learning, I have always been deeply curious about the human side of innovation and how leadership, behavior, and culture shape successful organizations.
          </p>
          <p className="mb-4 sm:mb-6">
            My passion for learning has pushed me to explore a wide range of non-fiction books on business strategy, psychology, and philosophy, helping me build a well-rounded perspective that blends technical expertise with human understanding. I believe that true leadership comes not just from knowledge, but from empathy, vision, and the ability to inspire growth in others.
          </p>
          <p className="mb-4 sm:mb-6">
            Professionally, I have gained valuable experience by working with two dynamic startups, including co-founding LifeXtension, a community focused on longevity and healthy aging. These experiences have taught me the importance of vision, collaboration, adaptability, and building communities with purpose.
          </p>
          <p>
            I am excited to embark on this next chapter, where I can leverage my technical background, psychological insights, and passion for leadership to create stronger, more innovative, and more compassionate organizations. I firmly believe that the future of business lies at the intersection of technology, human behavior, and visionary leadership — and I am committed to being at the forefront of this exciting transformation.
          </p>
        </div>
      </div>



{/* Work Experience Section */}
<div className="mt-20">
  <h2 className="text-4xl font-bold mb-10 text-center">Work Experience</h2>

  <div className="flex flex-col md:flex-row justify-center items-center gap-10">
    {/* Lead Software Developer */}
    <div className="bg-gray-800 shadow-xl rounded-lg p-8 w-full max-w-md hover:scale-105 transition-transform duration-300">
      <h3 className="text-2xl font-semibold text-white mb-2 text-center">
        Lead Software Developer, QCX Energy Pvt. Ltd
      </h3>
      <p className="text-lg text-gray-300 mb-4 text-center">
        <strong>Apr 2024 - Present</strong>
      </p>
      <p className="text-lg text-white text-center">
        Currently working on a patent associated with QCX Energy Pvt. Ltd, involving software and AI model development.
      </p>
    </div>

    {/* Co-founder LifeXtension */}
    <div className="bg-gray-800 shadow-xl rounded-lg p-8 w-full max-w-md hover:scale-105 transition-transform duration-300">
      <h3 className="text-2xl font-semibold text-white mb-2 text-center">
        Co-founder, LifeXtension
      </h3>
      <p className="text-lg text-gray-300 mb-4 text-center">
        <strong>Oct 2024 - Present</strong>
      </p>
      <p className="text-lg text-white text-center mb-2">
        LifeXtension is a vibrant community for longevity enthusiasts passionate about healthy aging.
      </p>
      <p className="text-lg text-white text-center">
        Join us:{" "}
        <a
          href="https://indiaswaytolongevity.wixsite.com/india"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          LifeXtension Website
        </a>
      </p>
    </div>
  </div>
</div>

      {/* Skills Section */}
      <div className="mt-30 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillsData.map((skill, i) => (
            <div key={i} className="w-full h-48 perspective">
              <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold">{skill.title}</h3>
                  <p className="text-[#BAFF39] mt-2">{skill.level}</p>
                </div>
                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-800 rounded-lg p-4 flex items-center justify-center text-center">
                  <p className="text-xl font-semibold">{skill.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      <div className="mt-30">
  <h2 className="text-4xl font-bold mt-10 mb-10 text-center">My Projects</h2>
  <div className="flex flex-wrap justify-center gap-8">

    {/* Attendance Project - Flip Card */}
    <div className="w-100 h-96 perspective">
      <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">
        
        {/* Front Side */}
        <div className="absolute w-full h-full bg-gray-800 rounded-lg shadow-xl flex flex-col items-center justify-center backface-hidden">
          <img 
            src={attendanceImg} 
            alt="Attendance Project" 
            className="w-64 h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold text-white text-center px-2">
            Image Paragraph Generation for Attendance Application
          </h3>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-gray-900 rounded-lg shadow-xl p-6 text-center transform rotate-y-180 backface-hidden flex flex-col justify-center">
          <p className="text-l text-gray-300 mb-2">
            <strong>Mentor:</strong> Mr. Krunal Pawar
          </p>
          <p className="text-l text-gray-300 mb-2">
            <strong>Team Size:</strong> 4
          </p>
          <p className="text-l text-gray-300 mb-2">
            <strong>Key Skills:</strong> Image Processing, Computer Vision, Deep Learning, Architectures, Data Processing, NLP
          </p>
          <p className="text-l text-white mt-4">
            Developed an innovative solution for automating attendance tracking using image processing and natural language generation.
          </p>
        </div>

      </div>
    </div>

    {/* Stock Market Project - Flip Card */}
    <div className="w-100 h-96 perspective">
      <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">
        
        {/* Front Side */}
        <div className="absolute w-full h-full bg-gray-800 rounded-lg shadow-xl flex flex-col items-center justify-center backface-hidden">
          <img 
            src={stockMarketImg} 
            alt="Stock Market Project" 
            className="w-64 h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold text-white text-center px-2">
            Stock Market Price Prediction
          </h3>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-gray-900 rounded-lg shadow-xl p-6 text-center transform rotate-y-180 backface-hidden flex flex-col justify-center">
          <p className="text-l text-gray-300 mb-2">
            <strong>Mentor:</strong> Dr. Vijay Muthekar
          </p>
          <p className="text-l text-gray-300 mb-2">
            <strong>Team Size:</strong> 4
          </p>
          <p className="text-l text-gray-300 mb-2">
            <strong>Key Skills:</strong> Data Analysis, Neural Networks, Feature Engineering, Time Series Analysis
          </p>
          <p className="text-l text-white mt-4">
            Used machine learning models like reinforcement learning, SVM, random forests, clustering, gradient boosting, decision trees, and RNNs to predict stock market trends.
          </p>
        </div>

      </div>
    </div>

  </div>
</div>




      {/* Certifications Section */}
      <div className="mt-32 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Certifications</h2>
        <Slider {...sliderSettings}>
          {certifications.map((cert) => (
            <div key={cert.id} className="flex flex-col items-center justify-center px-4">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full max-h-96 object-contain rounded-lg shadow-md mb-6"
              />
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-400">{cert.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;


