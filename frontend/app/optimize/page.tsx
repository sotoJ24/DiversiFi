"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PortfolioPieChart from '../components/DiversiFi/PortfolioPieChart';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import LoadingSpinner from '../components/LoadingSpinner';

// Mock data (will be replaced with actual data from API)
const MOCK_PORTFOLIO_DATA = {
  current: {
    totalValue: 8604.90,
    allocations: [
      { token: 'ETH', percentage: 35, color: '#C93387' },
      { token: 'BTC', percentage: 25, color: '#6AB596' },
      { token: 'SOL', percentage: 15, color: '#2D3748' },
      { token: 'USDC', percentage: 15, color: '#4A7AFF' },
      { token: 'LINK', percentage: 10, color: '#F2B341' }
    ]
  },
  recommended: {
    allocations: [
      { token: 'ETH', percentage: 35, color: '#C93387' },
      { token: 'BTC', percentage: 20, color: '#6AB596' },
      { token: 'SOL', percentage: 20, color: '#2D3748' },
      { token: 'USDC', percentage: 15, color: '#4A7AFF' },
      { token: 'LINK', percentage: 10, color: '#F2B341' }
    ]
  },
  changes: [
    { 
      token: 'SOL', 
      current: 15, 
      recommended: 20, 
      change: 'increase', 
      reason: 'Strong momentum in developer activity' 
    },
    { 
      token: 'BTC', 
      current: 25, 
      recommended: 20, 
      change: 'decrease', 
      reason: 'Short-term volatility concerns' 
    },
    { 
      token: 'ETH', 
      current: 35, 
      recommended: 35, 
      change: 'hold', 
      reason: 'Well-positioned for upcoming network upgrade' 
    },
    { 
      token: 'USDC', 
      current: 15, 
      recommended: 15, 
      change: 'hold', 
      reason: 'Maintains stable reserve in current market' 
    },
    { 
      token: 'LINK', 
      current: 10, 
      recommended: 10, 
      change: 'hold', 
      reason: 'Current allocation matches risk profile' 
    }
  ]
};

export default function Optimize() {
  const router = useRouter();
  const { setFrameReady, isFrameReady, context } = useMiniKit();
  const [isLoading, setIsLoading] = useState(true);
  // Check if wallet is connected based on context
  const isConnected = context?.client && 'account' in context.client ? true : false;
  const [applyingChanges, setApplyingChanges] = useState(false);
  
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
  
  // Function to handle applying recommendations
  const handleApplyRecommendations = async () => {
    if (!isConnected) {
      router.push('/');
      return;
    }
    
    setApplyingChanges(true);
    
    // Simulate API call for smart contract interaction
    setTimeout(() => {
      setApplyingChanges(false);
      router.push('/portfolio');
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {isLoading ? (
        <div className="h-64">
          <LoadingSpinner size="lg" />
        </div>
      ) : (
        <div className="space-y-8">
          {/* AI Recommendation Banner */}
          <div className="notification-success">
            <div className="flex items-center gap-2 text-[var(--success)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">AI Recommendation Ready</span>
            </div>
            <p className="mt-1 text-sm text-[var(--dark-gray)]">
              Based on current market conditions and your risk profile, we've generated optimization recommendations.
            </p>
          </div>
          
          {/* Current vs Recommended Charts */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="text-center">
              <div className="mb-2 text-[var(--navy)] font-medium">Current Allocation</div>
              <PortfolioPieChart allocations={MOCK_PORTFOLIO_DATA.current.allocations} size="sm" />
            </div>
            <div className="text-center">
              <div className="mb-2 text-[var(--navy)] font-medium">Recommended Allocation</div>
              <PortfolioPieChart allocations={MOCK_PORTFOLIO_DATA.recommended.allocations} size="sm" />
            </div>
          </div>
          
          {/* Changes Needed */}
          <div className="card">
            <h2 className="text-lg font-semibold mb-4 text-[var(--navy)]">Changes Needed</h2>
            <div className="space-y-4">
              {MOCK_PORTFOLIO_DATA.changes.map((item) => {
                const changeColor = 
                  item.change === 'increase' ? 'bg-[var(--success)]' : 
                  item.change === 'decrease' ? 'bg-[var(--error)]' : 
                  'bg-[var(--mid-gray)]';
                const changeLabel = 
                  item.change === 'increase' ? 'Increase' : 
                  item.change === 'decrease' ? 'Decrease' : 
                  'Hold';
                
                const bgColor = 
                  item.change === 'increase' ? 'bg-[var(--success-light)]' : 
                  item.change === 'decrease' ? 'bg-[var(--error-light)]' : 
                  'bg-[var(--light-gray)]';
                
                const barColor = 
                  item.change === 'increase' ? 'bg-[var(--success)]' : 
                  item.change === 'decrease' ? 'bg-[var(--error)]' : 
                  'bg-[var(--mid-gray)]';
                
                const displayText = 
                  item.change === 'hold' ? `Maintain at ${item.current}%` : 
                  `${item.current}%`;
              
                return (
                  <div key={item.token} className={`p-4 rounded-lg ${bgColor} border border-${bgColor}`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-[var(--navy)]">{item.token}</span>
                      <div className={`text-white text-sm px-2 py-0.5 rounded ${changeColor}`}>
                        {changeLabel}
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-2">
                      <div className="text-sm text-[var(--dark-gray)]">{displayText}</div>
                      <div className="flex-grow mx-2 h-2 bg-[var(--light-gray)] rounded-full">
                        <div className={`h-full rounded-full ${barColor}`} style={{ width: `${item.current}%` }}></div>
                      </div>
                      <div className="text-sm text-[var(--dark-gray)]">{item.recommended}%</div>
                    </div>
                    
                    <p className="text-sm text-[var(--dark-gray)]">{item.reason}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Apply Button */}
          <div className="mt-8 text-center">
            <button 
              onClick={handleApplyRecommendations}
              disabled={applyingChanges}
              className="btn-primary max-w-md mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {applyingChanges ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Applying Changes...
                </span>
              ) : 'Apply Recommendations'}
            </button>
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
