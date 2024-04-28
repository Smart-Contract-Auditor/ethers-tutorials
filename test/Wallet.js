
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Wallet", function () {

    it("Should verify the wallet balance is equal to or greater than zero", async () => {
        const wallet = new ethers.Wallet(process.env.METAMASK_KEY, ethers.provider);
        const address = wallet.address;
        const balance = await ethers.provider.getBalance(address);
        console.log("Wallet address: ", address);
        console.log("Wallet balance: ", balance);
        const tx = await wallet.sendTransaction({
            to: "0x06E9a074bFCe889Ccc6b12C63216f14510A31e09",
            value: ethers.parseUnits("1", "wei")
        });
        // await tx.wait();
        console.log("Wallet balance 2: ", await ethers.provider.getBalance(wallet));
        expect(balance).is.greaterThanOrEqual(0);
    })
});
