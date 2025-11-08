// src/pages/BlogList.jsx
import React, { useState } from "react";
import { blogPosts } from "../data/blogData";
import BlogCard from "../components/BlogCard";

const categories = ["All", "Business and Management", "Health and Fitness", "Technology", "Psychology"];

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showMobileCategories, setShowMobileCategories] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogPosts.filter((blog) => {
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    const q = searchTerm.toLowerCase();
    return (
      matchesCategory &&
      (blog.title.toLowerCase().includes(q) ||
        blog.category.toLowerCase().includes(q) ||
        (blog.description && blog.description.toLowerCase().includes(q)))
    );
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Blog Posts</h1>

      {/* Search Bar Only - No Theme Toggle */}
      <div className=" border-3 border-black square-md shadow-md flex flex-col md:flex-row justify-between items-center gap-4 mb-10 bg-white border-black px-6 py-4 rounded-lg shadow-sm">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input w-full border-black md:w-1/2 px-4 py-2 rounded-md border focus:outline-none focus:ring focus:ring-black"
        />
        
        {/* Removed theme toggle buttons */}
        <div className="w-full md:w-auto text-sm text-gray-600 text-center md:text-right">
         
        </div>
      </div>

      {/* Categories + Blogs */}
      <div className="flex flex-col border-black lg:flex-row gap-6">
        {/* Categories */}
        <div className={`w-full lg:w-64 flex-shrink-0 ${showMobileCategories ? "block" : "hidden lg:block"}`}>
          <h2 className="text-lg font-semibold mb-4 hidden lg:block">Categories</h2>
          <div className="flex flex-col gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setShowMobileCategories(false);
                }}
                className={`text-left px-4 py-3 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-100 text-blue-800 font-semibold"
                    : "bg-white hover:bg-gray-200 text-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
          ) : (
            <p className="text-white col-span-full text-center py-8">No blog posts found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogList;