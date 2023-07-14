# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

# How to Write .env

on .env file, you need Sepolia testnet endpoint URL, Metamask mnemonic and etherscan API key.

```
Sepolia testnet endpoint URL: visit(https://www.alchemy.com/) -> create account -> make project and set network SEPOLIA -> paste URL on .env.

Metamask mnemonic: metamask wallet -> settings -> security and privacy -> secret recovery syntax(twelve words)

Etherscan API key: create etherscan account -> get API key

.env should be like:
SEPOLIA_URL=your_url
MNEMONIC=your_mnemonic
ETHERSCAN_API_KEY=your_api
```

#How to Run

```
npx hardhat compile

npx hardhat run scripts/deploy.js --network sepolia

paste contract address of TokenPrice on getLatestPrice.js

npx hardhat run scripts/getLatestPrice.js --network sepolia
```
