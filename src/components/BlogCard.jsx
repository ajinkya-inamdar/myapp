// src/components/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border border-gray-300">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-black mb-2">{blog.title}</h3>
        <p className="text-sm text-gray-800 mb-4">{blog.date}</p>
        <Link
          to={`/blog/${blog.id}`}
          className="text-blue-600 hover:underline font-medium"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
