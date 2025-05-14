const hre = require("hardhat");

async function main() {
  const AssetDiversifier = await hre.ethers.getContractFactory("AssetDiversifier");
  
  console.log("Deploying AssetDiversifier...");
  const assetDiversifier = await AssetDiversifier.deploy();

  await assetDiversifier.waitForDeployment();
  
  const deployedAddress = await assetDiversifier.getAddress();
  console.log("AssetDiversifier deployed to:", deployedAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });