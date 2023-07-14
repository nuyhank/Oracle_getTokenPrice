const { ethers } = require("hardhat")

const deployContract =  async function() {
  const [deployer] = await ethers.getSigners();

  const Prices = await ethers.deployContract("TokenPrice");

  console.log("Deployed, view on etherscan");

  // getLatestPrice 함수 실행
  const symbol = "BTC";
  const latestPrice = await tokenPrice.getLatestPrice(symbol);
  console.log(`Latest price of ${symbol}: ${latestPrice}`);
  
  console.log(Prices);
}

// 스크립트 실행
deployContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });