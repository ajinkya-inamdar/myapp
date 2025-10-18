// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { blogPosts } from '../data/blogData';
import BlogCard from '../components/BlogCard';

import profilePic from "../assets/myphoto.jpg";
import cvFile from "../assets/Ajinkya_Inamdar_CV.pdf";

const Home = () => {
  return (
    <div className="text-black px-4 sm:px-6 py-8 sm:py-10 min-h-screen">
      {/* Intro Section */}
      <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10 max-w-6xl mx-auto mt-6 md:mt-10">
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

{/*About Section*/}
<div className="flex flex-col justify-center md:pl-6 lg:pl-10 text-left mt-4 md:mt-0">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">Hi, I'm Ajinkya Inamdar</h1>
  <p className="text-black-400 mb-3 md:mb-4 text-base sm:text-lg md:text-xl max-w-md md:mx-0">
    Engineer | Strategy, Management & Leadership | Artificial Intelligence | Human Longevity and Health-tech
  </p>
  <p className="mb-6 text-black-300 max-w-lg text-sm sm:text-base md:text-lg md:mx-0">
    Interested in working with me?
  </p>
  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
    <a 
      href="https://mail.google.com/mail/?view=cm&fs=1&to=ajinkyainamdar228@gmail.com&su=Enquiry&body=Hi%20Ajinkya,"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white border-2 border-grey px-4 py-2 sm:px-6 sm:py-3 rounded text-black hover:bg-white transition text-center text-sm sm:text-base"
    >
      Get in Touch
    </a>
    {/* The "Download CV" button has been removed from here. */}
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
            Ajinkya Inamdar is an engineering graduate with a strong foundation in technology and a growing passion for leadership, management, longevity and optimal health solutions.
          </p>
          <p className="mb-4 sm:mb-6">
            He continuously explore topics like business strategy, leadership and Health-tech to bridge the gap between technical execution and User driven solutions.
          </p>
          <p className="mb-4 sm:mb-6">
           He write blogs that explore topics related to business, health, optimal fitness, longevity, psychology, philosophy, technology and current trends offering valuable insights. Whether you're here to connect, reflect, or stay ahead of the curve, there's something here for you.
          </p>
        </div>
      </div>

{/* Latest Blog Posts */}
<div className="max-w-6xl mx-auto px-4 py-16">
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-black">
    Latest Blog Posts
  </h2>
  <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {blogPosts
      .sort((a, b) => new Date(b.date) - new Date(a.date)) // sort by latest date
      .slice(0, 3) // take latest 3
      .map((post) => (
        <BlogCard key={post.id} blog={post} />
      ))}
  </div>
  <div className="flex justify-center mt-10">
    <a
      href="/blog"
      className="border-2 border-black px-6 py-2 rounded-md text-black font-semibold text-lg hover:bg-white hover:text-black transition"
    >
      View All Blogs
    </a>
  </div>
</div>
</div>
  );
};

export default Home;
