"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

const AllPostsPage = () => {
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

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">All Posts</h1>
      <div className="bg-gray-800 p-4 rounded-lg">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="p-2">Title</th>
              <th className="p-2">Views</th>
              <th className="p-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post: any) => (
              <tr key={post._id}>
                <td className="p-2">{post.title}</td>
                <td className="p-2">{post.views}</td>
                <td className="p-2">{new Date(post.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPostsPage;
