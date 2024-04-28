require("dotenv").config();
const { ethers } = require("ethers")


getWalletBalance = async () => {
    const provider = new ethers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/OWWhRLWObFXeYuKm4NAOD92LVm0ep0Xg");
    const wallet = new ethers.Wallet(process.env.METAMASK_KEY, provider);
    console.log("balance is: ", await provider.getBalance(wallet.address))
    console.log("chain: ", (await provider.getNetwork()).chainId)
}

getWalletBalance();