// src/pages/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === id);

  if (!blog) {
    return <div className="text-center text-red-600 text-xl">Blog not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 pt-24 pb-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-black">{blog.title}</h1>
      <p className="text-L text-gray-800 mb-4">Ajinkya Inamdar</p>
      <p className="text-sm text-gray-800 mb-6">{blog.date}</p>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-auto mb-6 rounded-lg shadow"
      />
      <div
        className="prose max-w-none text-black"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default BlogPost;
