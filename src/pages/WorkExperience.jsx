// src/pages/WorkExperience.jsx
import React from 'react';

const WorkExperience = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Work Experience</h1>

      {/* Lead Software Developer */}
      <div className="bg-white shadow-xl rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Lead Software Developer, QCX Energy Pvt. Ltd</h2>
        <p className="text-sm text-gray-600 mb-4"><strong>Apr 2024 - Present</strong></p>
        <p className="text-gray-700 mb-4">Currently working on a patent associated with QCX Energy Pvt. Ltd, which involves developing software and AI models.</p>
      </div>

      {/* Co-founder LifeXtension */}
      <div className="bg-white shadow-xl rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Co-founder, LifeXtension</h2>
        <p className="text-sm text-gray-600 mb-4"><strong>Oct 2024 - Present</strong></p>
        <p className="text-gray-700 mb-4">LifeXtension is a vibrant community for longevity enthusiasts passionate about healthy aging.</p>
        <p className="text-gray-700">
          Join us:{" "}
          <a
            href="https://indiaswaytolongevity.wixsite.com/india"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LifeXtension Website
          </a>
        </p>
      </div>
    </div>
  );
};

export default WorkExperience;
