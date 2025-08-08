"use client";

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 py-4 px-8 bg-gray-900/50 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl font-bold text-white">Luminous</h1>
        </Link>
        <nav className="flex items-center gap-6 text-lg text-white">
          <Link href="/blog" className="hover:text-indigo-400 transition-colors">Blog</Link>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;