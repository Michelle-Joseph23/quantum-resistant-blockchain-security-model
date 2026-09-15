/**
 * Minimal Hardhat config for pqc/blockchain tests.
 * It points `sources` at the canonical `contract-layer` contracts directory.
 */
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.24",
  paths: {
    sources: "../../contract-layer/contracts"
  }
};
