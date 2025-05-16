"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import Navigation from './Navigation';
import WalletButton from './WalletButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const { context } = useMiniKit();
  
  // Check if wallet is connected based on context
  const isConnected = context?.client && 'account' in context.client ? true : false;
  
  // Only show nav bar if we're not on the landing page or if wallet is connected
  const showNavBar = pathname !== '/' || isConnected;
  
  // Helper function to check if a path is active
  const isActive = (path: string) => pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {showNavBar && (
        <header className="nav-container">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-[var(--white)]">
              DiversiFi
            </Link>
            <div className="flex items-center">
              <div className="mr-4">
                <Navigation />
              </div>
              {isConnected && (
                <WalletButton variant="compact" />
              )}
            </div>
          </div>
        </header>
      )}
      <main className="flex-grow">
        {children}
      </main>
      <footer className="py-4 text-center text-gray-500 text-sm">
        <p>Built on Base • Powered by AI</p>
      </footer>
    </div>
  );
};

export default Layout;
