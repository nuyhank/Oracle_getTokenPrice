require('dotenv').config(); // dotenv 모듈을 추가해 .env 파일 로드
require("@openzeppelin/hardhat-upgrades");
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: { },
    sepolia : {
      url: process.env.SEPOLIA_URL, // 환경 변수 사용
      accounts: {
        mnemonic: process.env.MNEMONIC // 환경 변수 사용
      },
      gas: 2100000,
      gasPrice: 8000000000,
      saveDeployments: true
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY // 환경 변수 사용
  },
  solidity: "0.8.0",
  namedAccounts:{
    deployer:{
      default: 0
    }
  }
};
