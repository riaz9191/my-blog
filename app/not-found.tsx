"use client";

import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <main className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-indigo-400">404</h1>
        <p className="text-3xl mt-4">Page Not Found</p>
        <p className="text-lg mt-2">The page you are looking for does not exist.</p>
        <Link href="/">
          <a className="mt-8 inline-block bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-indigo-600 transition-colors">
            Go Home
          </a>
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
