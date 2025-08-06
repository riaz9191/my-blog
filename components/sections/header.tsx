
"use client";

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="py-4 px-8 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl font-bold">Luminous</h1>
      </Link>
      <nav className="flex items-center gap-4">
        <Link href="/blog">Blog</Link>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
