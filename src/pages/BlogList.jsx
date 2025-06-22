import React from 'react';
import { blogPosts } from '../data/blogData';
import BlogCard from '../components/BlogCard';

const BlogList = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-12">  {/* <-- Updated padding */}
      <h2 className="text-4xl font-bold text-center mb-20 text-black">Blogs</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} blog={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
