// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract TokenPrice {
    mapping(string => address) public aggregatorAddresses;

    constructor() {
        // 토큰 심볼과 Aggregator 주소 매핑
        aggregatorAddresses["BTC"] = 0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43;
        // 다른 토큰에 대한 매핑도 추가해 프로그램 확장성을 높일 수 있음
    }

    function getLatestPrice(string memory symbol) public view returns (int) {
        address aggregatorAddress = aggregatorAddresses[symbol];
        require(
            aggregatorAddress != address(0),
            "Aggregator address not found for the token symbol"
        );

        AggregatorV3Interface dataFeed;
        dataFeed = AggregatorV3Interface(aggregatorAddress);
        (, int price, , , ) = dataFeed.latestRoundData();
        return price;
    }
}
