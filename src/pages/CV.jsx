// src/pages/CV.jsx
import React from "react";

const CV = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-28 ">
    {/* Header Section - Only this part is centered on desktop */}
    <div className="text-left md:text-center mb-12 ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black"> Resume</h1>
      <p className="text-lg sm:text-xl text-white mt-2">
        Electronics & Telecommunication Engineer | AI Innovator | Longevity Enthusiast
      </p>
      </div>

      {/* Main Box */}
      <div className="bg-gray-200 bg-opacity-10 backdrop-blur-md border-3 border-black shadow-2xl rounded-2xl p-6 sm:p-10 space-y-12">
 
        {/* Intro Section */}
        <div>
          <p className="text-black text-base sm:text-lg">
            An electronics and telecommunication engineer with a strong foundation in machine learning, leadership, and team management.
          </p>
        </div>

        {/* Experience Section */}
        <div>
          <h2 className="text-2xl border-2 border-black sm:text-3xl font-semibold bg-white text-black px-4 sm:px-6 py-2 sm:py-3 mb-4">Experience</h2>

          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-black">Lead Software Developer</h3>
            <p className="text-sm text-black"><strong>QCX Energy Pvt. Ltd</strong> | Apr 2024 - Apr 2025</p>
            <p className="text-blue-600">Worked on a patent associated with QCX Energy Pvt. Ltd, involving software and AI model development.</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-black">Co-founder</h3>
            <p className="text-sm text-black"><strong>LifeXtension</strong> | Oct 2024 - Present</p>
            <p className="text-blue-600">
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
          <h2 className="text-2xl sm:text-3xl font-semibold bg-[#BAFF39] bg-white text-gray-800 px-4 sm:px-6 py-2 sm:py-3 mb-4 border-2 border-black">Education</h2>
          <p className="text-black"><strong>Secondary Education (10th Std - 2019)</strong> - Jai Hind High School (75%)</p>
          <p className="text-black"><strong>Higher Secondary Education (12th Std - 2021)</strong> - Dr. D. Y. Patil College (81%)</p>
          <p className="text-black"><strong>B.Tech in Electronics & Telecommunication</strong> - MIT Academy of Engineering, Pune</p>
        </div>

        {/* Certifications Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold bg-white text-gray-800 px-4 sm:px-6 py-2 sm:py-3 mb-4 border-2 border-black">Certifications</h2>
          <p className="text-black"><strong>Machine Learning Specialization – DeepLearning.AI</strong></p>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold bg-white text-gray-800 px-4 sm:px-6 py-2 sm:py-3 mb-4 border-2 border-black">Skills</h2>
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
                className="bg-white bg-opacity-30 py-2 px-4 rounded-lg shadow-md text-black"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold bg-white text-gray-800 px-4 sm:px-6 py-2 sm:py-3 mb-4 mt-10 border-2 border-black">Projects</h2>
          <div className="mb-4">
            <p className="text-black font-semibold">Image Paragraph Generation for Attendance</p>
            <p className="text-blue-600">Developed an innovative solution for automating attendance tracking using image processing and natural language generation.</p>
          </div>
          <div className="mb-4">
            <p className="text-black font-semibold">Stock Market Trends Predictions</p>
            <p className="text-blue-600">Implemented machine learning models to predict stock market trends.</p>
          </div>
        </div>

        {/* Hobbies Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold bg-white text-gray-800 px-4 sm:px-6 py-2 sm:py-3 mb-4 border-2 border-black">Hobbies & Interests</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-white bg-opacity-30 py-2 px-4 rounded-lg shadow-md text-gray-800">📚 Reading</div>
            <div className="bg-white bg-opacity-30 py-2 px-4 rounded-lg shadow-md text-gray-800">⚽ Sports</div>
            <div className="bg-white bg-opacity-30 py-2 px-4 rounded-lg shadow-md text-gray-800">✍️ Blog Writing</div>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold bg-white text-gray-800 px-4 sm:px-6 py-2 sm:py-3 mb-4 border-2 border-black">Contact</h2>
          <p className="text-black text-base sm:text-xl">
            Email:{" "}
            <a href="mailto:ajinkyainamdar228@gmail.com" className="text-blue-600 hover:underline">
              ajinkyainamdar228@gmail.com
            </a>
          </p>
          <p className="text-black text-base sm:text-xl">
            College Email:{" "}
            <a href="mailto:ajinkya.inamdar@mitaoe.ac.in" className="text-blue-600 hover:underline">
              ajinkya.inamdar@mitaoe.ac.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CV;