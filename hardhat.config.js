const { ethers } = require("ethers");

require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_KEY = process.env.ALCHEMY_KEY;
const METAMASK_KEY = process.env.METAMASK_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: { /** Mainnet fork */
        url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`,
      },
      accounts: [{ privateKey: `0x${METAMASK_KEY}`, balance: "9999000000000000000000" }]
    },
    mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`,
      accounts: [`0x${METAMASK_KEY}`]
    }
  },
  solidity: "0.8.24"
};
