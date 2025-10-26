import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === id);

  if (!blog) {
    return <div className="text-center text-red-600 text-xl pt-24">Blog not found.</div>;
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{blog.title} | Ajinkya Inamdar Blog</title>
        <meta 
          name="description" 
          content={blog.description || blog.content.substring(0, 160)} 
        />
        <meta 
          name="keywords" 
          content={`Ajinkya Inamdar, blog, ${blog.title}, ${blog.tags?.join(', ') || ''}`} 
        />
        <meta property="og:title" content={`${blog.title} | Ajinkya Inamdar Blog`} />
        <meta property="og:description" content={blog.description || blog.content.substring(0, 160)} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://ajinkyainamdar.vercel.app/blog/${id}`} />
        <meta property="og:image" content={blog.ogImage || blog.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 pt-24 pb-12">
        {/* Blog Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-black">{blog.title}</h1>

        {/* Blog Description (visible on page) */}
        {blog.description && (
          <p className="text-lg text-gray-700 mb-6">{blog.description}</p>
        )}

        {/* Author and Date */}
        <div className="flex items-center gap-4 mb-6">
          <p className="text-base text-gray-800">Ajinkya Inamdar</p>
          <span className="text-gray-400">•</span>
          <p className="text-sm text-gray-600">{blog.date}</p>
        </div>

        {/* Blog Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto mb-8 rounded-lg shadow-md"
        />

        {/* Blog Content */}
        <div
          className="prose max-w-none text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </>
  );
};

export default BlogPost;