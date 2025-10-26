// src/pages/Projects.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import attendanceImg from '../assets/attendance.jpg';
import stockMarketImg from '../assets/stock_market.jpg';

const Projects = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>My Projects | Ajinkya Inamdar</title>
       
        <meta
          name="keywords"
          content="Ajinkya Inamdar, projects, image processing, computer vision, NLP, deep learning, stock market prediction, data science, machine learning, AI projects"
        />
        <meta property="og:title" content="My Projects | Ajinkya Inamdar" />
        <meta
          property="og:description"
          content="Explore Ajinkya Inamdar's innovative projects including an Image Paragraph Generation for Attendance application and Stock Market Trends Prediction using advanced AI and data science techniques."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ajinkyainamdar.vercel.app/projects" />
        <meta property="og:image" content={attendanceImg} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="max-w-screen-lg mx-auto px-4 py-12">
        {/* Main Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">My Projects</h1>

        {/* Image Paragraph Generation for Attendance */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-8">
          <img src={attendanceImg} alt="Attendance Project" className="w-full h-72 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Image Paragraph Generation for Attendance Application
            </h2>
            <p className="text-sm text-gray-600">
              <strong>Mentor:</strong> Mr. Krunal Pawar | <strong>Team Size:</strong> 4
            </p>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Key Skills:</strong> Image Processing, Computer Vision, Deep Learning, Architectures, Data Processing, NLP
            </p>
            <p className="text-gray-700">
              Developed an innovative solution for automating attendance tracking using image processing and natural language generation.
            </p>
          </div>
        </div>

        {/* Stock Market Trends Prediction */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <img src={stockMarketImg} alt="Stock Market Project" className="w-full h-72 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Stock Market Trends Predictions</h2>
            <p className="text-sm text-gray-600">
              <strong>Mentor:</strong> Dr. Vijay Muthekar | <strong>Team Size:</strong> 4
            </p>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Key Skills:</strong> Data Analysis, Neural Networks, Feature Engineering, Time Series Analysis
            </p>
            <p className="text-gray-700">
              Used machine learning models like reinforcement learning, SVM, random forests, clustering, gradient boosting, decision trees, and RNNs to predict stock market trends.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
