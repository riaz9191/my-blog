"use client";

import { useSession } from 'next-auth/react';

const DashboardPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome, {session?.user?.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold">Total Posts</h2>
          <p className="text-3xl">0</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold">Total Views</h2>
          <p className="text-3xl">0</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;