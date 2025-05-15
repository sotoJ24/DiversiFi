"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PortfolioPieChart from '../components/DiversiFi/PortfolioPieChart';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import LoadingSpinner from '../components/LoadingSpinner';
import apiService, { Portfolio } from '../services/apiService';

// Default portfolio data structure
const DEFAULT_PORTFOLIO_DATA = {
  totalValue: 0,
  allocations: [],
  score: 0,
  trends: [
    { name: 'Layer 1 Activity', status: 'Bullish', trend: 'Increasing', color: '#6AB596' },
    { name: 'DeFi TVL', status: 'Neutral', trend: 'Stable', color: '#F2B341' },
    { name: 'NFT Trading Volume', status: 'Bearish', trend: 'Decreasing', color: '#C93387' },
  ]
};

export default function Dashboard() {
  const router = useRouter();
  const { setFrameReady, isFrameReady, context } = useMiniKit();
  const [isLoading, setIsLoading] = useState(true);
  const [portfolioData, setPortfolioData] = useState<Portfolio & { score: number, trends: any[] }>(DEFAULT_PORTFOLIO_DATA);
  const [error, setError] = useState<string | null>(null);
  
  // Check if wallet is connected based on context
  const isConnected = context?.client && 'account' in context.client ? true : false;

  // Get wallet address from context or use a demo address
  const walletAddress = isConnected && context?.client?.account 
    ? context.client.account.address 
    : '0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf';

  // Set frame as ready when component mounts
  useEffect(() => {
    if (!isFrameReady && setFrameReady) {
      setFrameReady();
    }
  }, [isFrameReady, setFrameReady]);

  // Fetch portfolio data from API
  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setIsLoading(true);
        
        // Generate a random budget between 5k and 15k for the API request
        const randomBudget = Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000;
        
        // If wallet is connected, get actual portfolio data
        // Otherwise, get a recommendation for a new user
        let data;
        if (isConnected) {
          data = await apiService.getUserPortfolio(walletAddress);
        } else {
          const recommendation = await apiService.getAIRecommendation(randomBudget);
          data = apiService.formatRecommendationData(recommendation);
        }
        
        // Get optimization data for the score
        const optimizationData = await apiService.getPortfolioOptimization(walletAddress);
        
        // Combine the data
        setPortfolioData({
          ...data,
          score: optimizationData.score,
          trends: DEFAULT_PORTFOLIO_DATA.trends
        });
        
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching portfolio data:', err);
        setError('Failed to load portfolio data. Please try again later.');
        setIsLoading(false);
      }
    };
    
    fetchPortfolioData();
  }, [isConnected, walletAddress]);

  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {isLoading ? (
          <div className="h-64">
            <LoadingSpinner size="lg" />
          </div>
        ) : error ? (
          <div className="notification-error">
            <div className="font-medium">Error</div>
            <p>{error}</p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* User info */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[var(--light-gray)] rounded-full"></div>
              <div>
                <div className="font-mono text-[var(--navy)]">{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</div>
                <div className="text-sm text-[var(--mid-gray)]">Connected to Base</div>
              </div>
            </div>

            {/* Portfolio overview */}
            <div className="card">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="w-full md:w-auto">
                  <PortfolioPieChart allocations={portfolioData.allocations} />
                </div>
                
                <div className="w-full md:w-auto text-center">
                  {/* Portfolio allocation legend */}
                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6">
                    {portfolioData.allocations.map((asset) => (
                      <div key={asset.token} className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: asset.color }}></div>
                        <span className="text-sm">{asset.token} {asset.percentage}%</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Total value */}
                  <div className="text-2xl font-bold text-[var(--navy)]">${portfolioData.totalValue.toLocaleString()}</div>
                  <div className="text-sm text-[var(--mid-gray)]">Total Portfolio Value</div>
                </div>
              </div>
            </div>

            {/* Optimization Score */}
            <div className="card">
              <h2 className="text-lg font-semibold mb-4 text-[var(--navy)]">Optimization Score</h2>
              <div className="flex items-center gap-6">
                <div className="relative w-20 h-20">
                  <div className="w-full h-full rounded-full border-8 border-[var(--light-gray)]"></div>
                  <div 
                    className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-[var(--teal)]"
                    style={{ 
                      clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos(Math.PI * 2 * portfolioData.score / 100)}% ${50 - 50 * Math.sin(Math.PI * 2 * portfolioData.score / 100)}%, 50% 0%)`,
                      transform: 'rotate(-90deg)'
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-[var(--navy)]">
                    {portfolioData.score}
                  </div>
                </div>
                
                <div>
                  <div className="font-semibold">
                    {portfolioData.score >= 90 ? 'Excellent Balance' :
                     portfolioData.score >= 70 ? 'Good Balance' :
                     portfolioData.score >= 50 ? 'Average Balance' :
                     'Needs Optimization'}
                  </div>
                  <div className="text-sm text-[var(--dark-gray)]">
                    {portfolioData.score >= 90 ? 'Your portfolio is extremely well-balanced.' :
                     portfolioData.score >= 70 ? 'Your portfolio is well-balanced, but there\'s room for improvement.' :
                     portfolioData.score >= 50 ? 'Your portfolio could benefit from some adjustments.' :
                     'Your portfolio needs significant optimization for better performance.'}
                    <a href="/optimize" className="text-[var(--magenta)] hover:underline ml-1">Optimize now</a>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => router.push('/optimize')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-6"
              >
                View Recommendations
              </button>
            </div>
            
            {/* Market Trends */}
            <div className="card">
              <h2 className="text-lg font-semibold mb-4 text-[var(--navy)]">Market Trends</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {portfolioData.trends.map((trend) => (
                  <div key={trend.name} className="p-3 border border-[var(--light-gray)] rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: trend.color }}></div>
                      <span className="font-medium text-[var(--navy)]">{trend.name}</span>
                    </div>
                    <div className="mt-2 flex justify-between text-sm">
                      <span className="text-[var(--mid-gray)]">Status:</span>
                      <span className="font-medium text-[var(--dark-gray)]">{trend.status}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[var(--mid-gray)]">Trend:</span>
                      <span className="font-medium text-[var(--dark-gray)]">{trend.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Demo version notice */}
            {!isConnected && (
              <div className="bg-blue-900 text-white p-4 rounded-lg text-center">
                <p className="mb-3">This is a demo version. Connect your wallet to access your actual portfolio.</p>
                <button 
                  onClick={() => router.push('/')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full"
                >
                  Connect Wallet
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
