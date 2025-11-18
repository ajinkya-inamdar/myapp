// src/components/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border border-gray-300">
      
      {/* Image with Category Badge */}
      <div className="relative">
        {/* SPEED FIX: Lazy load images below the fold */}
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-48 object-cover" 
          loading="lazy"
          width="400" 
          height="192" 
        />
        {blog.category && (
          <span className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
            {blog.category}
          </span>
        )}
      </div>

      {/* Blog Content */}
      <div className="p-4 pl-2">
        <h3 className="text-xl font-bold text-black mb-2">{blog.title}</h3>
        <p className="text-L text-gray-800 mb-1">Ajinkya Inamdar</p>
        <p className="text-sm text-gray-800 mb-2">{blog.date}</p>
        <p className="text-sm text-gray-700 mb-3">
          {blog.description
            ? blog.description
            : blog.content.replace(/<[^>]+>/g, "").substring(0, 120) + "..."}
        </p>

        {/* ACCESSIBILITY SEO FIX: "Read More" is now descriptive for bots */}
        <Link
          to={`/blog/${blog.slug}/${blog.id}`}
          className="text-green-700 hover:underline font-medium"
        >
          Read More <span className="sr-only">about {blog.title}</span>
        </Link>

      </div>
    </div>
  );
};

export default BlogCard;