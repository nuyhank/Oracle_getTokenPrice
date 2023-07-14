const { ethers } = require("hardhat");

async function run() {
  const [deployer] = await ethers.getSigners();

  // 배포된 TokenPrice 스마트 계약 주소
  const tokenPriceAddress = "0xBF914f758B92507F8FCe32893ACe09bB49CF46C8";

  // TokenPrice 스마트 계약 인스턴스 생성
  const TokenPrice = await ethers.getContractFactory("TokenPrice");
  const tokenPrice = await TokenPrice.attach(tokenPriceAddress);

  // getLatestPrice 함수 실행
  const symbol = "BTC";
  const latestPrice = await tokenPrice.getLatestPrice(symbol);
  console.log(`Latest price of ${symbol}: ${latestPrice}`);
}

run()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
