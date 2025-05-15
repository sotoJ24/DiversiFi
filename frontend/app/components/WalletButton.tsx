"use client";

import React from 'react';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import {
  Name,
  Identity,
  Address,
  Avatar,
  EthBalance,
} from "@coinbase/onchainkit/identity";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";

interface WalletButtonProps {
  variant?: 'default' | 'compact';
  className?: string;
}

const WalletButton: React.FC<WalletButtonProps> = ({ 
  variant = 'default',
  className = ''
}) => {
  const { context } = useMiniKit();
  const isConnected = context?.client && 'account' in context.client ? true : false;

  if (variant === 'compact') {
    return (
      <Wallet className={`z-10 ${className}`}>
        <ConnectWallet>
          {isConnected ? (
            <div className="flex items-center bg-[var(--navy)] px-3 py-1 rounded-md">
              <div className="w-2 h-2 bg-[var(--success)] rounded-full mr-2"></div>
              <span className="text-sm text-[var(--white)]">Connected</span>
            </div>
          ) : (
            <div className="bg-[var(--magenta)] hover:bg-[var(--light-magenta)] text-[var(--white)] px-3 py-1 rounded-md text-sm">
              Connect
            </div>
          )}
        </ConnectWallet>
        <WalletDropdown>
          <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
            <Avatar />
            <Name />
            <Address />
            <EthBalance />
          </Identity>
          <WalletDropdownDisconnect />
        </WalletDropdown>
      </Wallet>
    );
  }

  return (
    <Wallet className={`z-10 ${className}`}>
      <ConnectWallet className="bg-[var(--magenta)] hover:bg-[var(--light-magenta)] text-[var(--white)] px-4 py-2 rounded-md">
        {isConnected ? (
          <div className="flex items-center">
            <div className="w-2 h-2 bg-[var(--success)] rounded-full mr-2"></div>
            <span>Wallet Connected</span>
          </div>
        ) : (
          "Connect Wallet"
        )}
      </ConnectWallet>
      <WalletDropdown>
        <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
          <Avatar />
          <Name />
          <Address />
          <EthBalance />
        </Identity>
        <WalletDropdownDisconnect />
      </WalletDropdown>
    </Wallet>
  );
};

export default WalletButton;
