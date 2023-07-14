const { ethers } = require("hardhat");

async function main() {
  const TokenPrice = await ethers.getContractFactory("TokenPrice");
  const tokenPrice = await TokenPrice.deploy();

  await tokenPrice.deployed(); // 배포 완료 대기

  console.log("TokenPrice deployed to:", tokenPrice.address);

  // getLatestPrice 함수 실행 예시
  const symbol = "BTC";
  const latestPrice = await tokenPrice.getLatestPrice(symbol);
  console.log(`Latest price for ${symbol}:`, latestPrice.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
