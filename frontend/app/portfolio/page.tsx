"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PortfolioPieChart from '../components/DiversiFi/PortfolioPieChart';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import LoadingSpinner from '../components/LoadingSpinner';

// Mock data (will be replaced with actual data from smart contract)
const MOCK_PORTFOLIO_DATA = {
  totalValue: 8604.90,
  allocations: [
    { token: 'ETH', percentage: 35, color: '#C93387', value: 2345.67, change: '+5.2%' },
    { token: 'BTC', percentage: 25, color: '#6AB596', value: 3456.78, change: '-2.1%' },
    { token: 'SOL', percentage: 15, color: '#2D3748', value: 1234.56, change: '+8.7%' },
    { token: 'USDC', percentage: 15, color: '#4A7AFF', value: 1000.00, change: '+0.1%' },
    { token: 'LINK', percentage: 10, color: '#F2B341', value: 567.89, change: '+3.5%' }
  ]
};

export default function Portfolio() {
  const router = useRouter();
  const { setFrameReady, isFrameReady, context } = useMiniKit();
  const [isLoading, setIsLoading] = useState(true);
  // Check if wallet is connected based on context
  const isConnected = context?.client && 'account' in context.client ? true : false;
  
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
          {/* Current Allocation */}
          <div className="card">
            <h2 className="text-lg font-semibold mb-4 text-[var(--navy)]">Current Allocation</h2>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="w-full md:w-auto">
                <PortfolioPieChart allocations={MOCK_PORTFOLIO_DATA.allocations} />
              </div>
              
              <div className="w-full md:w-auto text-center">
                {/* Portfolio allocation legend */}
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6">
                  {MOCK_PORTFOLIO_DATA.allocations.map((asset) => (
                    <div key={asset.token} className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: asset.color }}></div>
                      <span className="text-sm">{asset.token} {asset.percentage}%</span>
                    </div>
                  ))}
                </div>
                
                {/* Total value */}
                <div className="text-2xl font-bold text-[var(--navy)]">${MOCK_PORTFOLIO_DATA.totalValue.toLocaleString()}</div>
                <div className="text-sm text-[var(--mid-gray)]">Total Portfolio Value</div>
              </div>
            </div>
          </div>
          
          {/* Asset List */}
          <div className="space-y-4">
            {MOCK_PORTFOLIO_DATA.allocations.map((asset) => (
              <div key={asset.token} className="flex items-center p-4 border border-[var(--light-gray)] rounded-lg shadow-sm bg-[var(--white)]">
                <div 
                  className="w-10 h-10 rounded-full mr-4 flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: asset.color }}
                >
                  {asset.token.charAt(0)}
                </div>
                <div className="flex-grow">
                  <div className="font-medium text-[var(--navy)]">{getFullTokenName(asset.token)}</div>
                  <div className="text-sm text-[var(--mid-gray)]">{asset.token}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-[var(--navy)]">${asset.value.toLocaleString()}</div>
                  <div 
                    className={`text-sm ${asset.change.startsWith('+') ? 'text-[var(--success)]' : 'text-[var(--error)]'}`}
                  >
                    {asset.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Deposit/Withdraw */}
          <div className="flex gap-4">
            <button className="btn-primary flex-1">Deposit</button>
            <button className="btn-outline flex-1">Withdraw</button>
          </div>
          
          {/* Historical Performance (placeholder) */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Historical Performance</h2>
            <div className="bg-gray-100 h-40 rounded-lg flex items-center justify-center text-gray-500">
              Chart Placeholder
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
