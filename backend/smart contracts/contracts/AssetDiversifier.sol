// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/// @title Asset Diversifier
/// @dev This contract allows users to deposit funds and diversify them among multiple assets based on AI recommendations.
contract AssetDiversifier {
    // Events
    event Deposited(address indexed user, uint256 amount);
    event Diversified(address indexed user, address[] tokens, uint256[] amounts);

    // User balances in the contract
    mapping(address => uint256) public userBalances;

    /// @notice Allows users to deposit funds (ETH) into the contract
    function deposit() external payable {
        require(msg.value > 0, "Deposit amount must be greater than zero");
        userBalances[msg.sender] += msg.value;
        emit Deposited(msg.sender, msg.value);
    }

    /// @notice Allows users to diversify their funds among multiple tokens
    /// @param tokens Array of token addresses to diversify into
    /// @param percentages Array of percentages for each token (must total 100)
    function diversify(address[] calldata tokens, uint256[] calldata percentages) external {
        require(tokens.length == percentages.length, "Mismatched arrays");
        uint256 userBalance = userBalances[msg.sender];
        require(userBalance > 0, "No funds to diversify");

        uint256 totalPercentage = 0;
        for (uint256 i = 0; i < percentages.length; i++) {
            totalPercentage += percentages[i];
        }
        /// At this point the totalPercentage represents as a validator or verifier that the percentages should add up to 100
        require(totalPercentage == 100, "Percentages must total 100");

        for (uint256 i = 0; i < tokens.length; i++) {
            uint256 amount = (userBalance * percentages[i]) / 100;
            require(IERC20(tokens[i]).transfer(msg.sender, amount), "Transfer failed");
        }

        // Clear user balance after diversification
        userBalances[msg.sender] = 0;

        emit Diversified(msg.sender, tokens, percentages);
    }

    /// @notice Returns the user’s current balance
    function getBalance() external view returns (uint256) {
        return userBalances[msg.sender];
    }
}
