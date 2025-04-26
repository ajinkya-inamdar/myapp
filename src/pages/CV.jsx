// src/pages/CV.jsx
import React from "react";

const CV = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-28">

      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white">Ajinkya Inamdar</h1>
        <p className="text-xl text-white mt-2">
          Electronics & Telecommunication Engineer | AI Innovator | Longevity Enthusiast
        </p>
      </div>

      {/* Main Box */}
      <div className="bg-gray-800 bg-opacity-10 backdrop-blur-md shadow-2xl rounded-2xl p-10 space-y-12">

        {/* Intro Section */}
        <div>
          <p className=" text-white text-lg">
            Electronics and Telecommunication Engineer with expertise in machine learning and startup leadership.
            Experienced in applying ML to projects and managing teams across multiple startups to drive innovation and growth.
          </p>
        </div>

        {/* Experience Section */}
        <div>
          <h2 className="text-3xl font-semibold bg-white text-gray-800 px-6 py-3 mb-4 ">Experience</h2>

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white">Lead Software Developer</h3>
            <p className="text-sm text-white"><strong>QCX Energy Pvt. Ltd</strong> | Apr 2024 - Present</p>
            <p className="text-white">Working on a patent associated with QCX Energy Pvt. Ltd, developing software and AI models.</p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white">Co-founder</h3>
            <p className="text-sm text-white"><strong>LifeXtension</strong> | Oct 2024 - Present</p>
            <p className="text-white">
              LifeXtension is a vibrant community for longevity enthusiasts passionate about healthy aging.
              <br />
              <a
                href="https://indiaswaytolongevity.wixsite.com/india"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green hover:underline"
              >
                Visit LifeXtension
              </a>
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-3xl font-semibold bg-[#BAFF39] bg-white text-gray-800 px-6 py-3 mb-4">Education</h2>
          <p className="text-white"><strong>Secondary Education (10th Std - 2019)</strong> - Jai Hind High School (75%)</p>
          <p className="text-white"><strong>Higher Secondary Education (12th Std - 2021)</strong> - Dr. D. Y. Patil College (81%)</p>
          <p className="text-white"><strong>B.Tech in Electronics & Telecommunication</strong> - MIT Academy of Engineering, Pune</p>
        </div>

        {/* Certifications Section */}
        <div>
          <h2 className="text-3xl font-semibold bg-white text-gray-800 px-6 py-3 mb-4">Certifications</h2>
          <p className="text-white"><strong>Machine Learning Specialization – DeepLearning.AI</strong></p>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-3xl font-semibold bg-white text-gray-800 px-6 py-3 mb-4">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Machine Learning",
              "Artificial Neural Networks",
              "Web Development",
              "Team Management",
              "Product Development",
              "Leadership & Communication",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-30 text-center py-2 px-4 rounded-lg shadow-md text-gray-800"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-3xl font-semibold bg-white text-gray-800 px-6 py-3 mb-4 mt-10">Projects</h2>
          <div className="mb-4">
            <p className="text-white font-semibold mt-1">Image Paragraph Generation for Attendance</p>
            <p className="text-white MT-1">Developed an innovative solution for automating attendance tracking using image processing and natural language generation.</p>
          </div>
          <div className="mb-4">
            <p className="text-white font-semibold mt-1">Stock Market Trends Predictions</p>
            <p className="text-white">Implemented machine learning models to predict stock market trends.</p>
          </div>
        </div>

        {/* Hobbies Section */}
        <div>
          <h2 className="text-3xl font-semibold bg-white text-gray-800 px-6 py-3 mb-4">Hobbies & Interests</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white bg-opacity-30 text-center py-2 px-4 rounded-lg shadow-md text-gray-800">📚 Reading</div>
            <div className="bg-white bg-opacity-30 text-center py-2 px-4 rounded-lg shadow-md text-gray-800">⚽ Sports</div>
            <div className="bg-white bg-opacity-30 text-center py-2 px-4 rounded-lg shadow-md text-gray-800">✍️ Blog Writing</div>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-3xl font-semibold bg-white text-gray-800 px-6 py-3 mb-4">Contact</h2>
          <p className="text-white text-xl">
            Email:{" "}
            <a href="mailto:ajinkyainamdar228@gmail.com" className="text-white hover:underline">
              ajinkyainamdar228@gmail.com
            </a>
          </p>
          <p className="text-white text-xl">
            College Email:{" "}
            <a href="mailto:ajinkya.inamdar@mitaoe.ac.in" className="text-white hover:underline">
              ajinkya.inamdar@mitaoe.ac.in
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default CV;