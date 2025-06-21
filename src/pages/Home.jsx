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
  { id: 1, image: cert1, title: "NPTEL Cloud Computing by IIT Kharagpur", description: "Credit based Course." },
  { id: 2, image: cert2, title: "ML Specialization by Deeplearning.AI", description: "Built solid ML & DL foundations." },
  { id: 3, image: cert3, title: "Computational Neuroscience", description: "Studied neural coding and learning mechanisms." },
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
    <div className="text-black px-4 sm:px-6 py-8 sm:py-10 min-h-screen">
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
    className="w-65 h-80 sm:w-64 sm:h-80 md:w-72 md:h-96 object-cover rounded-lg shadow-lg relative z-10"
    style={{ marginTop: "20px" }}
  />
</motion.div>


        {/* About Section */}
        <div className="flex flex-col justify-center md:pl-6 lg:pl-10 text-left mt-4 md:mt-0">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">Hi, I'm Ajinkya Inamdar</h1>
  <p className="text-black-400 mb-3 md:mb-4 text-base sm:text-lg md:text-xl max-w-md md:mx-0">
    Engineer | Passionate about Strategy, Culture & Leadership | Artificial Intelligence
  </p>
  <p className="mb-6 text-black-300 max-w-lg text-sm sm:text-base md:text-lg md:mx-0">
    An electronics and telecommunication engineer with a strong foundation in machine learning, leadership, and team management.
  </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ajinkyainamdar228@gmail.com&su=Enquiry&body=Hi%20Ajinkya,"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-200 border-2 border-grey px-4 py-2 sm:px-6 sm:py-3 rounded text-black hover:bg-green-200  transition text-center text-sm sm:text-base"
            >
              Get in Touch
            </a>
            <a 
              href={cvFile} 
              download 
              className="bg-blue-100 border-2 border-grey px-4 py-2 sm:px-6 sm:py-3 rounded text-black  hover:bg-blue-100 transition text-center text-sm sm:text-base"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="mt-16 sm:mt-5 max-w-6xl mx-auto px-4">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 text-center md:text-left">
          About Me
        </h3>
        <div className="text-sm sm:text-base md:text-lg text-black-300 ">
          <p className="mb-4 sm:mb-6">
            I'm an engineering graduate with a strong foundation in technology and a growing passion for product development, organizational culture, and leadership. While rooted in AI/ML, my curiosity extends to human behavior, team dynamics, and the psychology behind innovation.
          </p>
          <p className="mb-4 sm:mb-6">
            I continuously explore topics like business strategy, leadership, and workplace culture to bridge the gap between technical execution and human-centered design. I believe the most impactful products emerge from a deep understanding of both systems and people—and that great leadership blends vision, empathy, and adaptability.
          </p>
          
        </div>
      </div>



{/* Work Experience Section */}
<div className="mt-20">
  <h2 className="text-4xl font-bold mb-10 text-center">Work Experience</h2>

  <div className="flex flex-col md:flex-row justify-center items-center gap-10">
    {/* Lead Software Developer */}
    <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md border-2 border-black hover:scale-105 transition-transform duration-300  hover:bg-white active:bg-white  cursor-pointer">
      <h3 className="text-2xl font-semibold text-black mb-2 text-center">
        Lead Software Developer, QCX Energy Pvt. Ltd
      </h3>
      <p className="text-lg text-black mb-4 text-center">
        <strong>Apr 2024 - Apr 2025</strong>
      </p>
      <p className="text-lg text-black text-center">
        Worked on a patent associated with QCX Energy Pvt. Ltd, involving software and AI model development.
      </p>
    </div>

    {/* Co-founder LifeXtension */}
    <div className="bg-green-200 shadow-xl rounded-lg p-8 w-full max-w-md border-2 border-black hover:scale-105 transition-transform duration-300 hover:bg-green-200 active:bg-green-200 cursor-pointer">
      <h3 className="text-2xl font-semibold text-black mb-2 text-center">
        Co-founder, LifeXtension
      </h3>
      <p className="text-lg text-black mb-4 text-center">
        <strong>Oct 2024 - Present</strong>
      </p>
      <p className="text-lg text-black text-center mb-2">
        LifeXtension is a vibrant community for longevity enthusiasts passionate about healthy aging.
      </p>
      <p className="text-lg text-black text-center">
        Join us:{" "}
        <a
          href="https://indiaswaytolongevity.wixsite.com/india"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 hover:underline"
        >
          LifeXtension Website
        </a>
      </p>
    </div>
  </div>
</div>



{/* Skills Section */}
<div className="mt-30 max-w-4xl mx-auto px-4">
  <h2 className="text-4xl font-bold mb-10 text-center text-black">Skills</h2>
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
    {skillsData.map((skill, i) => {
      const baseColors = [
        'bg-white',
        'bg-blue-100',
        'bg-white',
        'bg-blue-100',
        'bg-white',
        'bg-blue-100',
      ];

      const hoverColors = [
        'hover:bg-white',
        'hover:bg-blue-100',
        'hover:bg-white',
        'hover:bg-blue-100',
        'hover:bg-white',
        'hover:bg-blue-100',
      ];

      const baseColor = baseColors[i % baseColors.length];
      const hoverColor = hoverColors[i % hoverColors.length];

      return (
        <div key={i} className="flip-card w-full h-40 sm:h-44 md:h-48">
          <div className="flip-card-inner w-full h-full relative">
            {/* Front Side */}
            <div
              className={`flip-card-front absolute w-full h-full p-4 text-black rounded-lg shadow-md border-2 border-black backface-hidden transition duration-300 cursor-pointer ${baseColor} ${hoverColor}`}
            >
              <h3 className="text-md sm:text-lg md:text-xl font-bold text-center">{skill.title}</h3>
              <p className="text-sm sm:text-base text-black mt-2 text-center">{skill.level}</p>
            </div>

            {/* Back Side */}
            <div
              className={`flip-card-back absolute w-full h-full p-4 text-black text-center rounded-lg shadow-md border-2 border-black backface-hidden transform rotateY-180 transition duration-300 cursor-pointer ${baseColor} ${hoverColor}`}
            >
              <p className="text-sm sm:text-base font-semibold">{skill.details}</p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>







{/*project dection */}
<div className="mt-30 px-4">
  <h2 className="bg-white text-4xl font-bold mt-10 mb-10 text-center">My Projects</h2>
  <div className="flex flex-wrap justify-center gap-8">
    {[
      {
        id: 1,
        title: "Image Paragraph Generation for Attendance Application",
        img: attendanceImg,
        mentor: "Mr. Krunal Pawar",
        teamSize: 4,
        skills: "Image Processing, Computer Vision, Deep Learning, NLP",
        description: "Developed an innovative solution for automating attendance tracking."
      },
      {
        id: 2,
        title: "Stock Market Price Prediction",
        img: stockMarketImg,
        mentor: "Dr. Vijay Muthekar",
        teamSize: 4,
        skills: "Data Analysis, Neural Networks, Time Series Analysis",
        description: "Used advanced models like reinforcement learning, SVMs, RNNs to predict trends."
      }
    ].map((project, i) => {
     const baseColors = ['bg-blue-100', 'bg-white'];
const hoverColors = [
  'hover:bg-blue-100 active:bg-blue-100',
  'hover:bg-white active:bg-white'
];


      const baseColor = baseColors[i % baseColors.length];
      const colorClass = hoverColors[i % hoverColors.length];

      return (
        <div key={project.id} className="flip-card w-80 h-96">
          <div className="flip-card-inner w-full h-full">
            {/* Front */}
            <div className={`flip-card-front ${baseColor} shadow-xl p-4 rounded-lg border-2 border-black transition duration-300 cursor-pointer ${colorClass}`}>
              <img 
                src={project.img}
                alt={project.title}
                className="w-64 h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-black text-center px-2">
                {project.title}
              </h3>
            </div>

            {/* Back */}
            <div className={`flip-card-back ${baseColor} shadow-xl p-6 text-center rounded-lg border-2 border-black transition duration-300 cursor-pointer ${colorClass}`}>
              <p className="text-l text-black mb-2">
                <strong>Mentor:</strong> {project.mentor}
              </p>
              <p className="text-l text-black mb-2">
                <strong>Team Size:</strong> {project.teamSize}
              </p>
              <p className="text-l text-black mb-2">
                <strong>Key Skills:</strong> {project.skills}
              </p>
              <p className="text-l text-black mt-4">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>








{/* Certifications Section */}
<div className="rounded-lg border-2 border-black bg-blue-100 mt-32 mx-auto w-full md:w-[600px] px-4 py-8 transition duration-300 hover:bg-blue-100 active:bg-blue-100">
  <h2 className="text-black text-4xl font-bold mb-10 text-center mt-4">
    Certifications
  </h2>
  <Slider {...sliderSettings}>
    {certifications.map((cert) => (
      <div
        key={cert.id}
        className="flex flex-col items-center justify-center px-2 sm:px-4 min-h-[400px]"
      >
        <div className="flex justify-center items-center w-full">
          <img
            src={cert.image}
            alt={cert.title}
            className="bg-white w-full max-w-[90%] max-h-80 object-contain rounded-lg shadow-md mb-6"
          />
        </div>
        <div className="text-center px-2">
          <h3 className="text-black text-xl sm:text-2xl font-semibold mb-4">{cert.title}</h3>
          <p className="text-blue-600 text-sm sm:text-base">{cert.description}</p>
        </div>
      </div>
    ))}
  </Slider>
</div>



    </div>
  );
};

export default Home;


