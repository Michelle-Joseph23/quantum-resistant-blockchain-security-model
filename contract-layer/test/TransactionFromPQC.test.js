const { expect } = require("chai");
const { ethers } = require("hardhat");

const SUBKEY_ONLY = 0;

describe("Transaction (pqc wrapper check)", function () {
  it("deploys Transaction and returns SUBKEY_ONLY for small amounts", async function () {
    const [deployer] = await ethers.getSigners();

    const Tx = await ethers.getContractFactory("Transaction");
    const tx = await Tx.deploy();
    await tx.waitForDeployment?.();

    const level = await tx.determineRequiredAuthLevel(deployer.address, ethers.parseEther("0"));
    expect(level).to.equal(SUBKEY_ONLY);
  });
});
