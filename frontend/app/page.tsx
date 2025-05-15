"use client";

import { useRouter } from 'next/navigation';
import { useMiniKit, useAddFrame, useOpenUrl } from "@coinbase/onchainkit/minikit";
import { useEffect, useState, useCallback } from "react";
import WalletButton from './components/WalletButton';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  const { setFrameReady, isFrameReady, context } = useMiniKit();
  const [isLoading, setIsLoading] = useState(false);
  // Check if wallet is connected based on context
  const isConnected = context?.client && 'account' in context.client ? true : false;
  
  const addFrame = useAddFrame();
  const openUrl = useOpenUrl();

  // Set frame as ready when component mounts
  useEffect(() => {
    if (!isFrameReady && setFrameReady) {
      setFrameReady();
    }
  }, [isFrameReady, setFrameReady]);

  // Redirect to dashboard if already connected
  useEffect(() => {
    if (isConnected) {
      router.push('/dashboard');
    }
  }, [isConnected, router]);

  const handleConnectWallet = async () => {
    setIsLoading(true);
    // After wallet is connected, user will be redirected to dashboard
    // via the useEffect above
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleDemoClick = () => {
    router.push('/demo');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[var(--light-gray)] to-[var(--white)]">
      <div className="container mx-auto px-4 py-8 max-w-4xl flex flex-col items-center justify-center flex-grow text-center">
        {/* Logo and Title */}
        <div className="mb-12">
          <div className="flex flex-col items-center">
            {/* Pie chart logo */}
            <div className="w-48 h-48 mb-6">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="white" />
                <path d="M50,10 A40,40 0 0,1 90,50 L50,50 Z" fill="#C93387" /> {/* Magenta */}
                <path d="M90,50 A40,40 0 0,1 50,90 L50,50 Z" fill="#6AB596" /> {/* Green */}
                <path d="M50,90 A40,40 0 0,1 10,50 L50,50 Z" fill="#2D3748" /> {/* Navy */}
                <path d="M10,50 A40,40 0 0,1 50,10 L50,50 Z" fill="#E5E7EB" /> {/* Light Gray */}
                <circle cx="50" cy="50" r="15" fill="white" /> {/* Inner white circle */}
              </svg>
            </div>
            <div className="text-5xl font-bold mb-2 text-[var(--magenta)]">DiversiFi</div>
            <div className="text-xl text-[var(--dark-gray)] max-w-md mx-auto">
              Algorithm-driven asset allocation for your crypto portfolio
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-md bg-[var(--white)] rounded-xl shadow-lg overflow-hidden p-8 mb-8">
   

          <div className="space-y-4">
            <button 
              onClick={handleConnectWallet}
              className="w-full py-3 bg-[var(--magenta)] hover:bg-[var(--magenta-dark)] text-white font-medium rounded-md"
            >
              Connect Wallet
            </button>

            <button 
              onClick={handleDemoClick}
              className="w-full py-3 bg-[#27B998] hover:bg-opacity-90 text-white font-medium rounded-md"
            >
              View Demo
            </button>
          </div>
        </div>


      </div>

      <footer className="w-full py-4 bg-[var(--white)] border-t border-[var(--light-gray)]">
        <div className="container mx-auto px-4 text-center text-[var(--mid-gray)] text-sm">
          <p>© 2025 DiversiFi. All rights reserved.</p>
          <p className="mt-1">Built on Base with MiniKit</p>
        </div>
      </footer>
    </div>
  );
}