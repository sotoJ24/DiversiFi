"use client";
import React, { useState } from "react";

export default function MetaMaskIntegration() {
  const [userAccount, setUserAccount] = useState(null);

  const connectMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setUserAccount(accounts[0]);
        alert(`Connected: ${accounts[0]}`);
      } catch (error) {
        alert("Failed to connect MetaMask.");
        console.error(error);
      }
    } else {
      alert("MetaMask not detected. Please install it.");
    }
  };

  const signTransaction = async () => {
    if (!userAccount) {
      alert("Please connect MetaMask first.");
      return;
    }

    const value = prompt("Enter deposit amount in ETH:");

    try {
      const response = await fetch("/api/assetDiversifierRoute/signTransaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ account: userAccount, value }),
      });

      const data = await response.json();
      console.log(data);
      alert("Transaction Result: " + JSON.stringify(data));
    } catch (error) {
      alert("Failed to sign transaction.");
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={connectMetaMask}>
        Connect MetaMask
      </button>
      <button className="bg-green-500 text-white px-4 py-2 rounded ml-4" onClick={signTransaction}>
        Sign Transaction
      </button>
    </div>
  );
}
