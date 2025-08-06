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

const HomePage = () => {
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
    <main className="bg-gray-900 text-white min-h-screen">
      <section className="hero text-center py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
        <h1 className="text-6xl font-bold">Luminous</h1>
        <p className="text-2xl mt-4">Exploring the frontiers of code and creativity.</p>
      </section>

      <section className="container mx-auto p-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg max-w-3xl mx-auto">
            I'm Riaz Ahammed, a passionate developer on a mission to build beautiful, functional, and futuristic web experiences. This blog is my canvas for sharing insights, tutorials, and musings on the ever-evolving world of technology.
          </p>
        </div>

        <h2 className="text-4xl font-bold text-center mb-8">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post._id} href={`/blog/${post.slug}`}>
              <div className="bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{post.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;