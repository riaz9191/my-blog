
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

interface Post {
  _id: string;
  title: string;
  image: string;
  slug: string;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('/api/blog');
        setPosts(res.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">Blog</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link key={post._id} href={`/blog/${post.slug}`}>
            <div className="border rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold">{post.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default BlogPage;
