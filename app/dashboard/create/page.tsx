"use client";

import { useState } from 'react';
import NovelEditor from '@/components/novel-editor';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const CreatePostPage = () => {
  const { data: session } = useSession();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);
    setIsUploading(true);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        formData
      );
      setImage(res.data.data.url);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image) {
      alert('Please upload an image first.');
      return;
    }

    try {
      await axios.post('/api/blog', {
        title,
        content,
        author: session?.user?.name,
        image,
        slug,
      });
      alert('Blog post created successfully!');
    } catch (error) {
      console.error('Error creating blog post:', error);
      alert('Error creating blog post');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Create New Post</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Slug</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Content</label>
          <TiptapEditor value={content} onChange={setContent} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          {image && (
            <img src={image} alt="Uploaded" className="mt-2 max-h-40 rounded" />
          )}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded" disabled={isUploading}>
          {isUploading ? 'Uploading...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
};

export default CreatePostPage;

