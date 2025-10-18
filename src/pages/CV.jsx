// src/pages/CV.jsx
import React from "react";
import Slider from "react-slick";
import cert1 from "../assets/certifications/cert1.png";
import cert2 from "../assets/certifications/cert2.png";
import cert3 from "../assets/certifications/cert3.png";
import cert4 from "../assets/certifications/cert4.png";
import attendanceImg from '../assets/attendance.jpg';
import stockMarketImg from '../assets/stock_market.jpg';

// STEP 1: Import your CV file here.
// Make sure the path to your PDF file is correct.
import cvFile from '../assets/Ajinkya_Inamdar_CV.pdf';

const skillsData = [
  { title: "Machine Learning", level: "Intermediate", details: "Experienced with Python, TensorFlow, and Scikit-learn." },
  { title: "Team Management", level: "Beginner", details: "Building expertise in team leadership and coordination." },
  { title: "Web Development", level: "Advanced", details: "Built websites using React.js, Vite, Tailwind CSS." },
  { title: "Business Development", level: "Beginner", details: "Learning to manage clients and deal execution" },
  { title: "Hindi & Marathi", level: "Native", details: "Fluent for communication and collaboration." },
  { title: "English", level: "Professional", details: "Proficient in technical and professional communication." },
];

const certifications = [
  { id: 1, image: cert1, title: "NPTEL Cloud Computing by IIT Kharagpur", description: "Credit based Course." },
  { id: 2, image: cert2, title: "ML Specialization by Deeplearning.AI", description: "Built solid ML & DL foundations." },
  { id: 3, image: cert3, title: "Computational Neuroscience", description: "Studied neural coding and learning mechanisms." },
  { id: 4, image: cert4, title: "Python for Data Science", description: "Practical data science with real-world projects." },
];

const CV = () => {
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
    <div className="max-w-6xl mx-auto p-6 pt-28">

      {/* Digital Portfolio Header */}
      <div className="text-center mt-10 mb-10 ">
  <h1 className="text-5xl font-bold mb-6">Digital Portfolio</h1>
  {/* Container for the action buttons */}
        <div className="flex justify-center items-center gap-4 mt-4">
          {/* Get in Touch Button */}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ajinkyainamdar228@gmail.com&su=Enquiry&body=Hi%20Ajinkya,"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 mb-1 inline-block bg-white border-2 border-grey px-6 py-3 rounded text-black hover:bg-gray-100 transition text-center text-base font-semibold shadow-sm"
          >
            Get in Touch
          </a>
  <a 
    href={cvFile} 
    download 
    className="mt-4 mb-1 inline-block bg-blue-100 border-2 border-grey px-6 py-3 rounded text-black hover:bg-blue-200 transition text-center text-base font-semibold shadow-sm"
  >
    Download CV
  </a>
</div>
</div>

      {/* Work Experience Section */}
      <div className="mt-20">
        <h2 className="text-4xl font-bold mb-10 text-center">Work Experience</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Lead Software Developer */}
          <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md border-2 border-black hover:scale-105 transition-transform duration-300 cursor-pointer">
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
          <div className="bg-blue-100 shadow-xl rounded-lg p-8 w-full max-w-md border-2 border-black hover:scale-105 transition-transform duration-300 cursor-pointer">
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
      <div className="mt-10 max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-black">Skills</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skillsData.map((skill, i) => {
            const baseColors = ['bg-white', 'bg-blue-100'];
            const hoverColors = ['hover:bg-white', 'hover:bg-blue-100'];
            const baseColor = baseColors[i % baseColors.length];
            const hoverColor = hoverColors[i % hoverColors.length];
            return (
              <div key={i} className="flip-card w-full h-40 sm:h-44 md:h-48">
                <div className="flip-card-inner w-full h-full relative">
                  <div className={`flip-card-front absolute w-full h-full p-4 text-black rounded-lg shadow-md border-2 border-black backface-hidden transition duration-300 cursor-pointer ${baseColor} ${hoverColor}`}>
                    <h3 className="text-md sm:text-lg md:text-xl font-bold text-center">{skill.title}</h3>
                    <p className="text-sm sm:text-base text-black mt-2 text-center">{skill.level}</p>
                  </div>
                  <div className={`flip-card-back absolute w-full h-full p-4 text-black text-center rounded-lg shadow-md border-2 border-black backface-hidden transform rotateY-180 transition duration-300 cursor-pointer ${baseColor} ${hoverColor}`}>
                    <p className="text-sm sm:text-base font-semibold">{skill.details}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-20 px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-black">Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { id: 1, title: "Image Paragraph Generation for Attendance Application", img: attendanceImg, mentor: "Mr. Krunal Pawar", teamSize: 4, skills: "Image Processing, Computer Vision, Deep Learning, NLP", description: "Developed an innovative solution for automating attendance tracking." },
            { id: 2, title: "Stock Market Price Prediction", img: stockMarketImg, mentor: "Dr. Vijay Muthekar", teamSize: 4, skills: "Data Analysis, Neural Networks, Time Series Analysis", description: "Used advanced models like reinforcement learning, SVMs, RNNs to predict trends." }
          ].map((project, i) => {
            const baseColors = ['bg-blue-100', 'bg-white'];
            const colorClass = ['hover:bg-blue-100 active:bg-blue-100', 'hover:bg-white active:bg-white'][i % 2];
            return (
              <div key={project.id} className="flip-card w-80 h-96">
                <div className="flip-card-inner w-full h-full">
                  <div className={`flip-card-front ${baseColors[i % 2]} shadow-xl p-4 rounded-lg border-2 border-black transition duration-300 cursor-pointer ${colorClass}`}>
                    <img src={project.img} alt={project.title} className="w-64 h-40 object-cover rounded-md mb-4" />
                    <h3 className="text-2xl font-semibold text-black text-center px-2">{project.title}</h3>
                  </div>
                  <div className={`flip-card-back ${baseColors[i % 2]} shadow-xl p-6 text-center rounded-lg border-2 border-black transition duration-300 cursor-pointer ${colorClass}`}>
                    <p className="text-l text-black mb-2"><strong>Mentor:</strong> {project.mentor}</p>
                    <p className="text-l text-black mb-2"><strong>Team Size:</strong> {project.teamSize}</p>
                    <p className="text-l text-black mb-2"><strong>Key Skills:</strong> {project.skills}</p>
                    <p className="text-l text-black mt-4">{project.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="rounded-lg border-2 border-black bg-blue-100 mt-32 mx-auto w-full md:w-[600px] px-4 py-8 transition duration-300 hover:bg-blue-100 active:bg-blue-100">
        <h2 className="text-black text-4xl font-bold mb-10 text-center mt-4">Certifications</h2>
        <Slider {...sliderSettings}>
          {certifications.map((cert) => (
            <div key={cert.id} className="flex flex-col items-center justify-center px-2 sm:px-4 min-h-[400px]">
              <div className="flex justify-center items-center w-full">
                <img src={cert.image} alt={cert.title} className="bg-white w-full max-w-[90%] max-h-80 object-contain rounded-lg shadow-md mb-6" />
              </div>
              <div className="text-center px-2">
                <h3 className="text-black text-xl sm:text-2xl font-semibold mb-4">{cert.title}</h3>
                <p className="text-blue-600 text-sm sm:text-base">{cert.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Discover More Section */}
      <div className="mt-32">
        <div className="text-left md:text-center mb-12">
          <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-black">Discover more about me</h1>
        </div>
        <div className="bg-white bg-opacity-10 backdrop-blur-md border-3 border-black shadow-2xl rounded-2xl p-6 sm:p-10 space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold bg-white text-gray-800 px-4 sm:px-6 py-2 sm:py-3 mb-4 border-2 border-black">Education</h2>
            <p className="text-black"><strong>Secondary Education (10th Std - 2019)</strong> - Jai Hind High School (75%)</p>
            <p className="text-black"><strong>Higher Secondary Education (12th Std - 2021)</strong> - Dr. D. Y. Patil College (81%)</p>
            <p className="text-black"><strong>B.Tech in Electronics & Telecommunication</strong> - MIT Academy of Engineering, Pune</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold bg-white text-gray-800 px-4 sm:px-6 py-2 sm:py-3 mb-4 mt-10 border-2 border-black">Hobbies & Interests</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-white bg-opacity-30 py-2 px-4 rounded-lg shadow-md text-gray-800">📚 Reading</div>
              <div className="bg-white bg-opacity-30 py-2 px-4 rounded-lg shadow-md text-gray-800">⚽ Sports</div>
              <div className="bg-white bg-opacity-30 py-2 px-4 rounded-lg shadow-md text-gray-800">✍️ Blog Writing</div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold bg-white text-gray-800 px-4 sm:px-6 py-2 sm:py-3 mb-4 border-2 border-black">Contact</h2>
            <p className="text-black text-base sm:text-xl">Email: <a href="mailto:ajinkyainamdar228@gmail.com" className="text-blue-600 hover:underline">ajinkyainamdar228@gmail.com</a></p>
            <p className="text-black text-base sm:text-xl">College Email: <a href="mailto:ajinkya.inamdar@mitaoe.ac.in" className="text-blue-600 hover:underline">ajinkya.inamdar@mitaoe.ac.in</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
