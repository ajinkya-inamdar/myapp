// src/pages/BlogList.jsx
import React, { useState, useRef, useEffect } from "react";
import { blogPosts } from "../data/blogData";
import BlogCard from "../components/BlogCard";
import { BsChevronDown } from "react-icons/bs";

const categories = ["All", "Business and Management", "Health and Fitness", "Technology", "Psychology"];

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Blog Posts</h1>

      {/* Search Bar + Category Dropdown */}
      <div className="bg-white px-6 py-4 rounded-lg shadow-sm mb-10">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
          {/* Search Input */}
          <div className="flex-1 w-full">
            <input
              type="text"
              placeholder="Search blogs by title, category, or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring "
            />
          </div>
          
          {/* Category Dropdown */}
          <div className="relative w-full lg:w-64" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2  focus:border-transparent"
            >
              <span className="truncate">{selectedCategory}</span>
              <BsChevronDown 
                className={`transform transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-black rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className={`w-full text-left px-4 py-3 border-b border-gray-100 last:border-b-0 transition-colors ${
                      selectedCategory === category
                        ? "bg-purple-50 text-purple-700 font-medium"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Results Count */}

        </div>

        {/* Selected Category Badge */}
        {selectedCategory !== "All" && (
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm text-gray-600">Active filter:</span>
            <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
              {selectedCategory}
              <button
                onClick={() => setSelectedCategory("All")}
                className="text-purple-600 hover:text-purple-800 text-lg font-bold"
                title="Clear filter"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-600 text-lg mb-2">No blog posts found.</p>
            <p className="text-gray-500 text-sm">
              Try adjusting your search or selecting a different category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;