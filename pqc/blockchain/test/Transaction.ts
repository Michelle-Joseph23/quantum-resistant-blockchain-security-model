import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";
import { parseEther } from "viem";

describe("Transaction", async function () {
  const { viem } = await network.connect();

  it("should deploy Transaction and return SUBKEY_ONLY for small amounts", async function () {
    const [sender] = await viem.getWalletClients();

    const transaction = await viem.deployContract("Transaction");

    const level = await sender.readContract({
      address: transaction.address,
      abi: transaction.abi,
      functionName: "determineRequiredAuthLevel",
      args: [sender.account.address, 0n],
    });

    // SUBKEY_ONLY == 0
    assert.equal(Number(level), 0);
  });
});