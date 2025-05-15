const express = require("express");
const router = express.Router();
const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
const privateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"; 
const wallet = new ethers.Wallet(privateKey, provider);

const contractAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
const abi = [
    "function deposit() payable",
    "function diversify(address[] tokens, uint256[] percentages)",
    "function getBalance() view returns (uint256)"
];
const contract = new ethers.Contract(contractAddress, abi, wallet);

router.post("/deposit", async (req, res) => {
  try {
    const { amount } = req.body;
    if (!amount || Number.isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: "Invalid deposit amount" });
    }

    const valueInWei = ethers.parseEther(amount.toString());

    const tx = await contract.deposit({ value: valueInWei });
    await tx.wait();

    res.json({
      message: "Deposit successful",
      txHash: tx.hash,
      amountDeposited: amount
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/diversify", async (req, res) => {
    const { tokens, percentages } = req.body;

    try {
        if (!Array.isArray(tokens) || !Array.isArray(percentages)) {
            return res.status(400).json({ error: "Tokens and percentages must be arrays" });
        }

        if (tokens.length !== percentages.length) {
            return res.status(400).json({ error: "Tokens and percentages arrays must have the same length" });
        }

        const totalPercentage = percentages.reduce((acc, val) => acc + val, 0);
        if (totalPercentage !== 100) {
            return res.status(400).json({ error: "Percentages must total 100" });
        }

        const tx = await contract.diversify(tokens, percentages);
        await tx.wait();
        res.json({ message: "Funds diversified successfully", txHash: tx.hash });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

router.get("/get_balance", async (req, res) => {
    try {
        const balance = await contract.getBalance();
        const balanceInEther = ethers.formatEther(balance);
        res.json({ balance: balanceInEther });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
