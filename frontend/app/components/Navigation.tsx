"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation: React.FC = () => {
  const pathname = usePathname();
  
  // Helper function to check if a path is active
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="flex space-x-1">
      <Link 
        href="/dashboard" 
        className={`px-3 py-2 rounded-md transition-colors ${
          isActive('/dashboard') 
            ? 'bg-[var(--magenta)] text-[var(--white)]' 
            : 'text-[var(--white)] hover:bg-[var(--light-magenta)]/70'
        }`}
      >
        Dashboard
      </Link>
      <Link 
        href="/portfolio" 
        className={`px-3 py-2 rounded-md transition-colors ${
          isActive('/portfolio') 
            ? 'bg-[var(--magenta)] text-[var(--white)]' 
            : 'text-[var(--white)] hover:bg-[var(--light-magenta)]/70'
        }`}
      >
        Portfolio
      </Link>
      <Link 
        href="/optimize" 
        className={`px-3 py-2 rounded-md transition-colors ${
          isActive('/optimize') 
            ? 'bg-[var(--magenta)] text-[var(--white)]' 
            : 'text-[var(--white)] hover:bg-[var(--light-magenta)]/70'
        }`}
      >
        Optimize
      </Link>
    </nav>
  );
};

export default Navigation;
