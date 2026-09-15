// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./TransactionRegistry.sol";

contract Transaction is TransactionRegistry {
    constructor() TransactionRegistry(msg.sender, msg.sender) {}
}
