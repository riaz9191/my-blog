
"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';

interface Post {
  title: string;
  content: string;
  image: string;
}

const BlogDetailsPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (slug) {
      const fetchPost = async () => {
        try {
          const res = await axios.get(`/api/blog/${slug}`);
          setPost(res.data);
        } catch (error) {
          console.error('Error fetching post:', error);
        }
      };

      fetchPost();
    }
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold my-8">{post.title}</h1>
      <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-lg" />
      <div className="prose dark:prose-invert max-w-none mt-8" dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  );
};

export default BlogDetailsPage;
