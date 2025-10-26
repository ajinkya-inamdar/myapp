// src/pages/BlogList.jsx
import React, { useState } from 'react';
import { blogPosts } from '../data/blogData';
import BlogCard from '../components/BlogCard';

const categories = [
  'All',
  'Business and Management',
  'Health and Fitness',
  'Technology',
  'Psychology'
];

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBlogs =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter(blog => blog.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-2 pt-24 pb-12">
      {/* Page Heading - Centered */}
      <h1 className="text-3xl font-bold mb-8 text-center">Blog Posts</h1>
      
      <div className="flex gap-4">
        {/* Left: Categories Menu */}
        <div className="w-48 flex-shrink-0">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-left px-2 py-2 rounded hover:bg-gray-200 transition-colors ${
                  selectedCategory === category ? 'bg-gray-300 font-semibold' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Blogs */}
        <div className="flex-1 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map(blog => <BlogCard key={blog.id} blog={blog} />)
          ) : (
            <p className="text-gray-600 col-span-full">No content found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogList;