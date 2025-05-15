# DiversiFI

## Project Overview

DiversiFI is a blockchain-powered asset diversification platform designed to help users efficiently manage their cryptocurrency assets using AI-driven recommendations. The platform enables users to diversify their funds among various cryptocurrencies directly through a smart contract, ensuring a secure and automated process.

---

## Project Structure

```
DiversiFI
├── backend
│   ├── api.js                # Node.js API with AI simulation and contract interaction
│   └── smart-contracts       # Smart Contracts (AssetDiversifier.sol)
│   └── scripts               # Deployment scripts
│   └── package.json          # Node.js dependencies
│
└── frontend                  # (Future) Frontend for user interaction
```

---

## Prerequisites

* Node.js (v16+ recommended)
* Hardhat (Ethereum development framework)
* Metamask (for interacting with the contract)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/DiversiFI.git
   cd DiversiFI/backend
   npm install
   ```

2. Set up a local Hardhat network:

   ```bash
   npx hardhat node
   ```

3. Set up a local Hardhat network:

 ```bash
  npx hardhat console --network localhost
 ```

4. Deploy your smart contract:

   ```bash
   cd DiversiFI/backend/smart-contracts
   npx hardhat run scripts/deploy.js --network localhost
   ```

   Example output:

   ```
   AssetDiversifier deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
   ```

---

## Running the API

1. Start the API server:

   ```bash
   cd DiversiFI/backend
   node api.js
   ```

2. Access the API endpoints:

   * Simulate AI Recommendation: `POST /simulate-ai-recommendation`
   * Diversify Funds: `POST /diversify`

---

## Usage with Postman

* Use the `/simulate-ai-recommendation` endpoint to simulate AI-generated diversification.
* Use the `/diversify` endpoint to directly interact with the smart contract.

---

## Future Improvements

* Add a complete frontend for user interaction.
* Integrate real AI recommendations using an external API.
* Add a user authentication system.

