"use client";

import { ethers } from 'ethers';

// Contract ABI - simplified for the essential functions
const contractABI = [
  // View function to get balance
  "function getBalance() external view returns (uint256)",
  
  // Payable function to deposit ETH
  "function deposit() external payable",
  
  // Function to diversify funds
  "function diversify(address[] calldata tokens, uint256[] calldata percentages) external"
];

// This will be set from environment variables in production
const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '0x0'; // Replace with deployed contract address

/**
 * Service for interacting with the AssetDiversifier smart contract
 */
const contractService = {
  /**
   * Get contract instance
   * @param signer Ethers signer
   * @returns Contract instance
   */
  getContract: (signer: ethers.Signer) => {
    return new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);
  },

  /**
   * Get user's balance in the contract
   * @param signer Ethers signer
   * @returns Promise with balance in ETH
   */
  getBalance: async (signer: ethers.Signer): Promise<string> => {
    try {
      const contract = contractService.getContract(signer);
      const balanceWei = await contract.getBalance();
      return ethers.formatEther(balanceWei);
    } catch (error) {
      console.error('Error getting balance:', error);
      throw error;
    }
  },

  /**
   * Deposit ETH into the contract
   * @param signer Ethers signer
   * @param amountEth Amount in ETH to deposit
   * @returns Promise with transaction response
   */
  deposit: async (signer: ethers.Signer, amountEth: string): Promise<ethers.TransactionResponse> => {
    try {
      const contract = contractService.getContract(signer);
      const amountWei = ethers.parseEther(amountEth);
      
      return await contract.deposit({ 
        value: amountWei,
        gasLimit: 300000 // Set appropriate gas limit
      });
    } catch (error) {
      console.error('Error depositing ETH:', error);
      throw error;
    }
  },

  /**
   * Diversify funds according to specified allocations
   * @param signer Ethers signer
   * @param tokenAddresses Array of token contract addresses
   * @param percentages Array of percentages (should total 100)
   * @returns Promise with transaction response
   */
  diversify: async (
    signer: ethers.Signer,
    tokenAddresses: string[],
    percentages: number[]
  ): Promise<ethers.TransactionResponse> => {
    try {
      // Validate percentages
      const totalPercentage = percentages.reduce((sum, pct) => sum + pct, 0);
      if (totalPercentage !== 100) {
        throw new Error('Percentages must total 100');
      }
      
      // Call diversify function on contract
      const contract = contractService.getContract(signer);
      return await contract.diversify(tokenAddresses, percentages, {
        gasLimit: 500000 // Set appropriate gas limit
      });
    } catch (error) {
      console.error('Error diversifying portfolio:', error);
      throw error;
    }
  }
};

export default contractService;
