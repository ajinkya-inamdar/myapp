// src/pages/BlogPost.jsx
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { BsSearch } from "react-icons/bs";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogPosts.find((post) => String(post.id) === id);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const results = blogPosts.filter((post) => {
      const query = searchTerm.toLowerCase();
      return (
        post.title.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        (post.description && post.description.toLowerCase().includes(query)) ||
        post.content.toLowerCase().includes(query)
      );
    });

    setSearchResults(results);
    setShowSearchResults(true);
  }, [searchTerm]);

  const handleSearchSelect = (blog) => {
    navigate(`/blog/${blog.slug}/${blog.id}`);
    setSearchTerm("");
    setShowSearchResults(false);
    window.scrollTo(0, 0);
  };

  if (!blog)
    return (
      <div className="text-center pt-24 text-red-600">Blog not found.</div>
    );

  return (
    <>
      <Helmet>
        <title>{blog.title} | Ajinkya Inamdar Blog</title>
      </Helmet>

      <div className="blog-content-container">
        {/* Search Bar — Normal position (scrolls away completely) */}
<div className="max-w-3xl mx-auto px-4 sm:px-6 mt-24">
  <div className="border-2 border-gray-300 shadow-md px-4 py-3 bg-white rounded-lg flex justify-between items-center gap-4">
    
    <div className="relative w-full sm:w-72">
      <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search other blogs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />

      {/* Search Results Dropdown */}
      {showSearchResults && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
          {searchResults.map((result) => (
            <button
              key={result.id}
              onClick={() => handleSearchSelect(result)}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 border-b border-gray-100 last:border-b-0 transition-colors"
            >
              <div className="font-semibold text-gray-800">{result.title}</div>
              <div className="text-sm text-gray-600 mt-1">{result.category}</div>
            </button>
          ))}
        </div>
      )}

      {/* No Results */}
      {showSearchResults &&
        searchTerm.trim() !== "" &&
        searchResults.length === 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50 p-4 text-gray-600 text-center">
            No blogs found matching your search.
          </div>
        )}
    </div>

  </div>
</div>

        {/* Blog Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-12">
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <span>{blog.date}</span>
            <span className="bg-black text-white px-2 py-1 rounded-full text-xs">{blog.category}</span>
          </div>

          <img src={blog.image} alt={blog.title} className="w-full h-auto mb-6 rounded-lg shadow-md" />

          <div
            className="prose max-w-none leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </>
  );
};

export default BlogPost;