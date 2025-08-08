"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FileText, PlusSquare } from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/dashboard/posts', label: 'All Posts', icon: FileText },
    { href: '/dashboard/create', label: 'Create Post', icon: PlusSquare },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={`flex items-center p-2 rounded-lg ${pathname === item.href ? 'bg-gray-700' : 'hover:bg-gray-800'}`}>
                <item.icon className="mr-3" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;