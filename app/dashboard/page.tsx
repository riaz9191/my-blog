"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';

const DashboardPage = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

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

  const totalPosts = posts.length;
  const totalViews = posts.reduce((acc: number, post: any) => acc + post.views, 0);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome, {session?.user?.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold">Total Posts</h2>
          <p className="text-3xl">{totalPosts}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold">Total Views</h2>
          <p className="text-3xl">{totalViews}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
