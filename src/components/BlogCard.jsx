// src/components/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border border-gray-300">
      
      {/* Image with Category Badge */}
      <div className="relative">
        <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
        {blog.category && (
          <span className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
            {blog.category}
          </span>
        )}
      </div>

      {/* Blog Content */}
      <div className="p-4 pl-2"> {/* Adjusted padding-left for left alignment */}
        <h3 className="text-xl font-bold text-black mb-2">{blog.title}</h3>
        <p className="text-L text-gray-800 mb-1">Ajinkya Inamdar</p>
        <p className="text-sm text-gray-800 mb-2">{blog.date}</p>
        <p className="text-sm text-gray-700 mb-3">
          {blog.description
            ? blog.description
            : blog.content.replace(/<[^>]+>/g, "").substring(0, 120) + "..."}
        </p>
        <Link
          to={`/blog/${blog.id}`}
          className="text-green-600 hover:underline font-medium"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
