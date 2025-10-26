import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-24">
        <div className="text-red-600 text-xl">Blog post not found.</div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.title} | Ajinkya Inamdar Blog</title>
        <meta 
          name="description" 
          content={blog.description || blog.content.substring(0, 160)} 
        />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        {/* Blog Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
          {blog.title}
        </h1>

        {/* Blog Description */}
        {blog.description && (
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            {blog.description}
          </p>
        )}

        {/* Author and Date */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-6">
          <p className="text-gray-800 font-medium">Ajinkya Inamdar</p>
          <span className="hidden sm:inline text-gray-400 mx-2">•</span>
          <p className="text-gray-600 text-sm">{blog.date}</p>
        </div>

        {/* Blog Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto mb-6 rounded-lg shadow-md"
        />

        {/* Blog Content */}
        <div
          className="prose max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </>
  );
};

export default BlogPost;