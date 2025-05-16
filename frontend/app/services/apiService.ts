import { AssetAllocation } from '../components/DiversiFi/PortfolioPieChart';

// Backend API URL - from environment variables
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

// Interfaces for API responses
export interface AIRecommendationResponse {
  budget: number;
  allocations: {
    token: string;
    percentage: number;
    amount: number;
  }[];
}

export interface OptimizationResponse {
  currentAllocation: Portfolio;
  recommendedAllocation: Portfolio;
  changes: {
    token: string;
    currentPercentage: number;
    recommendedPercentage: number;
    change: 'increase' | 'decrease' | 'hold';
    reason: string;
  }[];
  score: number;
}

export interface Portfolio {
  totalValue: number;
  allocations: AssetAllocation[];
}

/**
 * Service for making API calls to the backend
 */
const apiService = {
  /**
   * Get AI-driven portfolio recommendations for a new user
   * @param budget User's budget amount
   * @returns Promise with recommendation data
   */
  getAIRecommendation: async (budget: number): Promise<AIRecommendationResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/simulate-ai-recommendation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ budget }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching AI recommendation:', error);
      throw error;
    }
  },
  
  /**
   * Get portfolio optimization recommendations based on current holdings
   * @param walletAddress User's wallet address
   * @returns Promise with optimization data
   */
  getPortfolioOptimization: async (walletAddress: string): Promise<OptimizationResponse> => {
    try {
      // For demo purposes, we'll use a mock response
      // In production, this would call the actual API
      return mockOptimizationResponse();
    } catch (error) {
      console.error('Error fetching portfolio optimization:', error);
      throw error;
    }
  },
  
  /**
   * Apply the recommended portfolio changes
   * @param walletAddress User's wallet address
   * @param changes The changes to apply
   * @returns Promise with success status
   */
  applyRecommendations: async (walletAddress: string, changes: any[]): Promise<{ success: boolean }> => {
    try {
      // This would be an actual API call in production
      // For now, we'll just simulate a delay and return success
      await new Promise(resolve => setTimeout(resolve, 2000));
      return { success: true };
    } catch (error) {
      console.error('Error applying recommendations:', error);
      throw error;
    }
  },
  
  /**
   * Get the current portfolio for a wallet address
   * @param walletAddress User's wallet address
   * @returns Promise with portfolio data
   */
  getUserPortfolio: async (walletAddress: string): Promise<Portfolio> => {
    try {
      // For demo purposes, we'll use a mock response
      // In production, this would call the actual API
      return mockUserPortfolio();
    } catch (error) {
      console.error('Error fetching user portfolio:', error);
      throw error;
    }
  },

  /**
   * Format API recommendation data to match our UI components
   * @param data Raw API response
   * @returns Formatted portfolio data
   */
  formatRecommendationData: (data: AIRecommendationResponse): Portfolio => {
    // Color map for tokens
    const colorMap: Record<string, string> = {
      'ETH': '#C93387',
      'BTC': '#6AB596',
      'SOL': '#2D3748',
      'USDC': '#4A7AFF',
      'LINK': '#F2B341',
      'MATIC': '#8A2BE2',
    };

    return {
      totalValue: data.budget,
      allocations: data.allocations.map(item => ({
        token: item.token,
        percentage: item.percentage,
        color: colorMap[item.token] || '#CCCCCC', // Default color if token not in map
      })),
    };
  },
};

/**
 * Generate a mock optimization response for demo purposes
 * @returns Mock optimization data
 */
function mockOptimizationResponse(): OptimizationResponse {
  const colorMap: Record<string, string> = {
    'ETH': '#C93387',
    'BTC': '#6AB596',
    'SOL': '#2D3748',
    'USDC': '#4A7AFF',
    'LINK': '#F2B341',
    'MATIC': '#8A2BE2',
  };
  
  const currentAllocation = {
    totalValue: 10000,
    allocations: [
      { token: 'ETH', percentage: 40, color: colorMap['ETH'], value: 4000, change: '+3.2%' },
      { token: 'BTC', percentage: 30, color: colorMap['BTC'], value: 3000, change: '+1.5%' },
      { token: 'SOL', percentage: 10, color: colorMap['SOL'], value: 1000, change: '+5.7%' },
      { token: 'USDC', percentage: 15, color: colorMap['USDC'], value: 1500, change: '+0.0%' },
      { token: 'LINK', percentage: 5, color: colorMap['LINK'], value: 500, change: '+2.3%' }
    ]
  };
  
  const recommendedAllocation = {
    totalValue: 10000,
    allocations: [
      { token: 'ETH', percentage: 35, color: colorMap['ETH'], value: 3500, change: '+3.2%' },
      { token: 'BTC', percentage: 25, color: colorMap['BTC'], value: 2500, change: '+1.5%' },
      { token: 'SOL', percentage: 15, color: colorMap['SOL'], value: 1500, change: '+5.7%' },
      { token: 'USDC', percentage: 15, color: colorMap['USDC'], value: 1500, change: '+0.0%' },
      { token: 'LINK', percentage: 10, color: colorMap['LINK'], value: 1000, change: '+2.3%' }
    ]
  };
  
  return {
    currentAllocation,
    recommendedAllocation,
    changes: [
      {
        token: 'ETH',
        currentPercentage: 40,
        recommendedPercentage: 35,
        change: 'decrease',
        reason: 'Reduce exposure to market volatility'
      },
      {
        token: 'BTC',
        currentPercentage: 30,
        recommendedPercentage: 25,
        change: 'decrease',
        reason: 'Short-term volatility concerns'
      },
      {
        token: 'SOL',
        currentPercentage: 10,
        recommendedPercentage: 15,
        change: 'increase',
        reason: 'Strong momentum in developer activity'
      },
      {
        token: 'USDC',
        currentPercentage: 15,
        recommendedPercentage: 15,
        change: 'hold',
        reason: 'Maintain stable asset allocation'
      },
      {
        token: 'LINK',
        currentPercentage: 5,
        recommendedPercentage: 10,
        change: 'increase',
        reason: 'Growing adoption in DeFi protocols'
      }
    ],
    score: 85
  };
}

/**
 * Generate a mock user portfolio for demo purposes
 * @returns Mock portfolio data
 */
function mockUserPortfolio(): Portfolio {
  const colorMap: Record<string, string> = {
    'ETH': '#C93387',
    'BTC': '#6AB596',
    'SOL': '#2D3748',
    'USDC': '#4A7AFF',
    'LINK': '#F2B341',
    'MATIC': '#8A2BE2',
  };
  
  return {
    totalValue: 10000,
    allocations: [
      { token: 'ETH', percentage: 40, color: colorMap['ETH'], value: 4000, change: '+3.2%' },
      { token: 'BTC', percentage: 30, color: colorMap['BTC'], value: 3000, change: '+1.5%' },
      { token: 'SOL', percentage: 10, color: colorMap['SOL'], value: 1000, change: '+5.7%' },
      { token: 'USDC', percentage: 15, color: colorMap['USDC'], value: 1500, change: '+0.0%' },
      { token: 'LINK', percentage: 5, color: colorMap['LINK'], value: 500, change: '+2.3%' }
    ]
  };
}

export default apiService;
