require("@nomicfoundation/hardhat-ethers");



module.exports = {
  solidity: "0.8.20",
  paths: {
    sources: "./smart contracts/contracts",
    tests: "./smart contracts/tests",
    scripts: "./smart contracts/scripts",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};