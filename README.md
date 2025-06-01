# DiversiFI

## Project Overview

DiversiFI is a blockchain-powered asset diversification platform designed to help users efficiently manage their cryptocurrency assets using AI-driven recommendations. The platform enables users to diversify their funds among various cryptocurrencies directly through a smart contract, ensuring a secure and automated process.

---

## Project Structure

```
DiversiFI
├── backend
│   ├── api.js                # Node.js API with AI simulation and contract interaction.
│   └── smart-contracts       # Smart Contracts Solidity (AssetDiversifier.sol).
│   └── scripts               # Deployment scripts.
│   └── package.json          # Node.js dependencies.
│
└── frontend                  # Frontend for user interaction.
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

## Running the frontend

DiversiFi is a modern web application that provides AI-driven portfolio diversification for crypto investors. The application is built with:

- [Next.js App Router](https://nextjs.org/docs/app)
- [MiniKit](https://docs.base.org/builderkits/minikit/overview) for wallet integration
- [OnchainKit](https://www.base.org/builders/onchainkit) for blockchain interactions
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Chart.js](https://www.chartjs.org/) for data visualization

## Getting Started

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

2. Verify environment variables, these will be set up by the `npx create-onchain --mini` command:

You can regenerate the FARCASTER Account Association environment variables by running `npx create-onchain --manifest` in your project directory.

The environment variables enable the following features:

- Frame metadata - Sets up the Frame Embed that will be shown when you cast your frame
- Account association - Allows users to add your frame to their account, enables notifications
- Redis API keys - Enable Webhooks and background notifications for your application by storing users notification details

```bash
# Shared/OnchainKit variables
NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME=
NEXT_PUBLIC_URL=
NEXT_PUBLIC_ICON_URL=
NEXT_PUBLIC_ONCHAINKIT_API_KEY=

# Frame metadata
FARCASTER_HEADER=
FARCASTER_PAYLOAD=
FARCASTER_SIGNATURE=
NEXT_PUBLIC_APP_ICON=
NEXT_PUBLIC_APP_SUBTITLE=
NEXT_PUBLIC_APP_DESCRIPTION=
NEXT_PUBLIC_APP_SPLASH_IMAGE=
NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR=
NEXT_PUBLIC_APP_PRIMARY_CATEGORY=
NEXT_PUBLIC_APP_HERO_IMAGE=
NEXT_PUBLIC_APP_TAGLINE=
NEXT_PUBLIC_APP_OG_TITLE=
NEXT_PUBLIC_APP_OG_DESCRIPTION=
NEXT_PUBLIC_APP_OG_IMAGE=

# Redis config
REDIS_URL=
REDIS_TOKEN=
```

3. Start the development server:
```bash
npm run dev
```

## Template Features

### Frame Configuration
- `.well-known/farcaster.json` endpoint configured for Frame metadata and account association
- Frame metadata automatically added to page headers in `layout.tsx`

### Background Notifications
- Redis-backed notification system using Upstash
- Ready-to-use notification endpoints in `api/notify` and `api/webhook`
- Notification client utilities in `lib/notification-client.ts`

### Theming
- Custom theme defined in `theme.css` with OnchainKit variables
- Pixel font integration with Pixelify Sans
- Dark/light mode support through OnchainKit

### MiniKit Provider
The app is wrapped with `MiniKitProvider` in `providers.tsx`, configured with:
- OnchainKit integration
- Access to Frames context
- Sets up Wagmi Connectors
- Sets up Frame SDK listeners
- Applies Safe Area Insets

## Customization

To get started building your own frame, follow these steps:

1. Remove the DemoComponents:
   - Delete `components/DemoComponents.tsx`
   - Remove demo-related imports from `page.tsx`

2. Start building your Frame:
   - Modify `page.tsx` to create your Frame UI
   - Update theme variables in `theme.css`
   - Adjust MiniKit configuration in `providers.tsx`

3. Add your frame to your account:
   - Cast your frame to see it in action
   - Share your frame with others to start building your community

## Learn More

- [MiniKit Documentation](https://docs.base.org/builderkits/minikit/overview)
- [OnchainKit Documentation](https://docs.base.org/builderkits/onchainkit/getting-started)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)


1. Access the frontend folder
 ```bash 
cd frontend/
 ```
2. install dependencies
 ```bash 
cd frontend/app
 npm install
 ```
3. Start frontend server at localhost 3000
  ```bash 
   cd frontend/app
   npm run dev
 ```

## Frontend demo version
https://claude.ai/public/artifacts/c58165ad-1910-4154-bba8-4cb26c79367b

![Screenshot from 2025-05-15 22-26-45](https://github.com/user-attachments/assets/5731dd6a-5b8b-44bf-b121-88e57814c71f)


---

## Future Improvements

* Add a complete frontend for user interaction.
* Add a wallet integration.
* Integrate real AI recommendations using an external API.
* Add a user authentication system.
