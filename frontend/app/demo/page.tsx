"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PortfolioPieChart from '../components/DiversiFi/PortfolioPieChart';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import LoadingSpinner from '../components/LoadingSpinner';

// Mock data for demo
const DEMO_PORTFOLIO_DATA = {
  totalValue: 10000.00,
  allocations: [
    { token: 'ETH', percentage: 40, color: '#C93387', value: 4000.00, change: '+3.2%' },
    { token: 'BTC', percentage: 30, color: '#6AB596', value: 3000.00, change: '+1.5%' },
    { token: 'SOL', percentage: 10, color: '#2D3748', value: 1000.00, change: '+5.7%' },
    { token: 'USDC', percentage: 15, color: '#4A7AFF', value: 1500.00, change: '+0.0%' },
    { token: 'LINK', percentage: 5, color: '#F2B341', value: 500.00, change: '+2.3%' }
  ],
  score: 85,
  trends: [
    { name: 'Layer 1 Activity', status: 'Bullish', trend: 'Increasing', color: '#6AB596' },
    { name: 'DeFi TVL', status: 'Neutral', trend: 'Stable', color: '#F2B341' },
    { name: 'NFT Trading Volume', status: 'Bearish', trend: 'Decreasing', color: '#C93387' },
  ]
};

export default function Demo() {
  const router = useRouter();
  const { setFrameReady, isFrameReady } = useMiniKit();
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Set frame as ready when component mounts
  useEffect(() => {
    if (!isFrameReady && setFrameReady) {
      setFrameReady();
    }
  }, [isFrameReady, setFrameReady]);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {isLoading ? (
        <div className="h-64">
          <LoadingSpinner size="lg" />
        </div>
      ) : (
        <div className="space-y-8">
          {/* Demo Banner */}
          <div className="notification-info">
            <div className="flex items-center gap-2 text-[var(--info)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Demo Mode</span>
            </div>
            <p className="mt-1 text-sm text-[var(--dark-gray)]">
              This is a demonstration of DiversiFi's features using sample data. Connect your wallet to access your actual portfolio.
            </p>
          </div>

          {/* Demo Tabs */}
          <div className="flex border-b border-[var(--light-gray)]">
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'dashboard' ? 'text-[var(--magenta)] border-b-2 border-[var(--magenta)]' : 'text-[var(--mid-gray)]'}`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'portfolio' ? 'text-[var(--magenta)] border-b-2 border-[var(--magenta)]' : 'text-[var(--mid-gray)]'}`}
              onClick={() => setActiveTab('portfolio')}
            >
              Portfolio
            </button>
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'optimize' ? 'text-[var(--magenta)] border-b-2 border-[var(--magenta)]' : 'text-[var(--mid-gray)]'}`}
              onClick={() => setActiveTab('optimize')}
            >
              Optimize
            </button>
          </div>

          {/* Dashboard Tab Content */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="card">
                <h2 className="text-lg font-semibold mb-4 text-[var(--navy)]">Portfolio Overview</h2>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <PortfolioPieChart allocations={DEMO_PORTFOLIO_DATA.allocations} />
                  
                  <div className="text-center">
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6">
                      {DEMO_PORTFOLIO_DATA.allocations.map((asset) => (
                        <div key={asset.token} className="flex items-center">
                          <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: asset.color }}></div>
                          <span className="text-sm">{asset.token} {asset.percentage}%</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-2xl font-bold text-[var(--navy)]">${DEMO_PORTFOLIO_DATA.totalValue.toLocaleString()}</div>
                    <div className="text-sm text-[var(--mid-gray)]">Total Portfolio Value</div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h2 className="text-lg font-semibold mb-4 text-[var(--navy)]">Optimization Score</h2>
                <div className="flex items-center gap-6">
                  <div className="relative w-20 h-20">
                    <div className="w-full h-full rounded-full border-8 border-[var(--light-gray)]"></div>
                    <div 
                      className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-[var(--teal)]"
                      style={{ 
                        clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos(Math.PI * 2 * DEMO_PORTFOLIO_DATA.score / 100)}% ${50 - 50 * Math.sin(Math.PI * 2 * DEMO_PORTFOLIO_DATA.score / 100)}%, 50% 0%)`,
                        transform: 'rotate(-90deg)'
                      }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-[var(--navy)]">
                      {DEMO_PORTFOLIO_DATA.score}
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-semibold">Excellent Balance</div>
                    <div className="text-sm text-[var(--dark-gray)]">
                      Your portfolio is well-optimized. Consider reviewing the Optimize tab for minor adjustments.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Portfolio Tab Content */}
          {activeTab === 'portfolio' && (
            <div className="space-y-6">
              <div className="space-y-4">
                {DEMO_PORTFOLIO_DATA.allocations.map((asset) => (
                  <div key={asset.token} className="flex items-center p-4 border border-gray-100 rounded-lg shadow-sm bg-white">
                    <div 
                      className="w-10 h-10 rounded-full mr-4 flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: asset.color }}
                    >
                      {asset.token.charAt(0)}
                    </div>
                    <div className="flex-grow">
                      <div className="font-medium">{getFullTokenName(asset.token)}</div>
                      <div className="text-sm text-gray-500">{asset.token}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">${asset.value.toLocaleString()}</div>
                      <div 
                        className={`text-sm ${asset.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}
                      >
                        {asset.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex-1">Deposit</button>
                <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md flex-1">Withdraw</button>
              </div>
            </div>
          )}

          {/* Optimize Tab Content */}
          {activeTab === 'optimize' && (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                <div className="flex items-center gap-2 text-green-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">AI Recommendation Ready</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  Based on current market conditions and your risk profile, we've generated optimization recommendations.
                </p>
              </div>
              
              <div className="card">
                <h2 className="text-lg font-semibold mb-4 text-[var(--navy)]">Market Trends</h2>
                <div className="space-y-4">
                  {DEMO_PORTFOLIO_DATA.trends.map((trend) => (
                    <div key={trend.name} className="p-3 border border-[var(--light-gray)] rounded-lg bg-[var(--white)]">
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

              <div className="card">
                <h2 className="text-lg font-semibold mb-4 text-[var(--navy)]">Recommended Changes</h2>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-[var(--success-light)] border border-[var(--success-light)]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-[var(--navy)]">SOL</span>
                      <div className="text-white text-sm px-2 py-0.5 rounded bg-[var(--success)]">
                        Increase
                      </div>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="text-sm text-[var(--dark-gray)]">10%</div>
                      <div className="flex-grow mx-2 h-2 bg-[var(--light-gray)] rounded-full">
                        <div className="h-full rounded-full bg-[var(--success)]" style={{ width: '10%' }}></div>
                      </div>
                      <div className="text-sm text-[var(--dark-gray)]">15%</div>
                    </div>
                    <p className="text-sm text-[var(--dark-gray)]">Strong momentum in developer activity</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-[var(--error-light)] border border-[var(--error-light)]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-[var(--navy)]">BTC</span>
                      <div className="text-white text-sm px-2 py-0.5 rounded bg-[var(--error)]">
                        Decrease
                      </div>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="text-sm text-[var(--dark-gray)]">30%</div>
                      <div className="flex-grow mx-2 h-2 bg-[var(--light-gray)] rounded-full">
                        <div className="h-full rounded-full bg-[var(--error)]" style={{ width: '30%' }}></div>
                      </div>
                      <div className="text-sm text-[var(--dark-gray)]">25%</div>
                    </div>
                    <p className="text-sm text-[var(--dark-gray)]">Short-term volatility concerns</p>
                  </div>
                </div>
                
                <button className="btn-primary w-full mt-6">
                  Apply Recommendations
                </button>
              </div>
            </div>
          )}

          {/* Connect Wallet Button */}
          <div className="mt-8 text-center">
            <button 
              onClick={() => router.push('/')}
              className="btn-primary max-w-md mx-auto"
            >
              Connect Wallet for Real Data
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Helper function to get full token names
function getFullTokenName(symbol: string): string {
  const tokenNames: Record<string, string> = {
    'ETH': 'Ethereum',
    'BTC': 'Bitcoin',
    'SOL': 'Solana',
    'USDC': 'USD Coin',
    'LINK': 'Chainlink'
  };
  
  return tokenNames[symbol] || symbol;
}
