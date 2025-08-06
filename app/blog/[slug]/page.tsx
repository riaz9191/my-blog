"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { ArrowLeft } from 'lucide-react';

interface Post {
  title: string;
  content: string;
  image: string;
}

const BlogDetailsPage = () => {
  const { slug } = useParams();
  const router = useRouter();
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
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      </div>
    );
  }

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto p-8">
        <button onClick={() => router.push('/')} className="flex items-center gap-2 mb-8 text-lg hover:text-indigo-400 transition-colors">
          <ArrowLeft />
          Back to Blog
        </button>
        <h1 className="text-5xl font-bold text-center my-8">{post.title}</h1>
        <img src={post.image} alt={post.title} className="w-full h-[500px] object-cover rounded-lg shadow-lg" />
        <div className="prose dark:prose-invert max-w-none mt-12 text-lg" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </main>
  );
};

export default BlogDetailsPage;