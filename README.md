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
   
   * Deposit Funds: `POST /deposit`
   * Diversify Funds: `POST /diversify`
   * Get Balance: `GET /getBalance`

---

## Usage with Postman

* Use the `/deposit` endpoint to directly interact with the smart contract and deposit the amount.
* Use the `/diversify` endpoint to diversify their funds among multiple tokens.
* Use the `/getBalance` endpoint to returns the user’s current balance.
![Screenshot from 2025-05-15 14-01-53](https://github.com/user-attachments/assets/9e3547fe-0bdf-4daf-a94e-f0eef1f1a82e)



---

## Frontend demo version
https://claude.ai/public/artifacts/c58165ad-1910-4154-bba8-4cb26c79367b

![Screenshot from 2025-05-15 22-26-45](https://github.com/user-attachments/assets/5731dd6a-5b8b-44bf-b121-88e57814c71f)


---

## Future Improvements

* Add a complete frontend for user interaction.
* Integrate real AI recommendations using an external API.
* Add a user authentication system.
