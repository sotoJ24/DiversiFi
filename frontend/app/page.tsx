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
          <div className="text-5xl font-bold mb-2 text-[var(--magenta)]">DiversiFi</div>
          <div className="text-xl text-[var(--dark-gray)] max-w-md mx-auto">
            AI-powered portfolio diversification for the modern crypto investor
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-md bg-[var(--white)] rounded-xl shadow-lg overflow-hidden p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-[var(--navy)]">Welcome to DiversiFi</h2>
            <p className="text-[var(--dark-gray)]">
              Connect your wallet to access AI-driven portfolio optimization
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-center">
              <WalletButton className="w-full" />
            </div>

            <div className="text-center">
              <span className="text-[var(--mid-gray)]">or</span>
            </div>

            <button 
              onClick={handleDemoClick}
              className="btn-outline"
            >
              Try Demo
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className="card">
            <div className="text-[var(--magenta)] text-xl font-semibold mb-2">AI Recommendations</div>
            <p className="text-[var(--dark-gray)]">Get personalized portfolio optimization recommendations based on market trends.</p>
          </div>
          <div className="card">
            <div className="text-[var(--magenta)] text-xl font-semibold mb-2">Smart Diversification</div>
            <p className="text-[var(--dark-gray)]">Automatically diversify your assets according to your risk profile.</p>
          </div>
          <div className="card">
            <div className="text-[var(--magenta)] text-xl font-semibold mb-2">Real-time Analytics</div>
            <p className="text-[var(--dark-gray)]">Track your portfolio performance with real-time analytics and insights.</p>
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
