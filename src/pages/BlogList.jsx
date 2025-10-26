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
  const [showMobileCategories, setShowMobileCategories] = useState(false);

  const filteredBlogs =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter(blog => blog.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-12">
      {/* Page Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Blog Posts</h1>
      
      {/* Mobile Categories Toggle - FIXED */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setShowMobileCategories(!showMobileCategories)}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-lg flex items-center justify-between"
        >
          <span>Categories {showMobileCategories ? '▲' : '▼'}</span>
          <span className="text-sm bg-gray-300 px-2 py-1 rounded">
            {selectedCategory}
          </span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Categories Sidebar - FIXED */}
        <div className={`w-full lg:w-64 flex-shrink-0 ${showMobileCategories ? 'block' : 'hidden lg:block'}`}>
          <h2 className="text-lg font-semibold mb-4 hidden lg:block">Categories</h2>
          <div className="bg-gray-50 lg:bg-transparent p-4 lg:p-0 rounded-lg">
            <div className="flex flex-col gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowMobileCategories(false);
                  }}
                  className={`text-left px-4 py-3 rounded-lg transition-colors ${
                    selectedCategory === category 
                      ? 'bg-blue-100 text-blue-800 font-semibold' 
                      : 'bg-white lg:bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map(blog => <BlogCard key={blog.id} blog={blog} />)
            ) : (
              <p className="text-gray-600 col-span-full text-center py-8">
                No blog posts found in this category.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;