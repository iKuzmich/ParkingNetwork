pragma solidity ^0.4.0;
pragma experimental ABIEncoderV2;

import "./Structures.sol";

contract CustomerServiceAccess {
    address publisher;
    mapping (address => Structures.Customer) customers;
    
    function CustomerServiceAccess() public {
        publisher = msg.sender;
    }
    
    function grantAccess(address forUser, string customer) public onlyPublisher() {
        customers[getCustomerByName(customer).owner];
        customers[getCustomerByName(customer).owner].userList[forUser];
    }
    
    function recallAccess(address forUser, string customer) public onlyPublisher() {
        
    }
    
    function getCustomerByName(string customer) private constant returns (Structures.Customer) {
        
    }
    
    modifier onlyPublisher() {
        if(msg.sender != publisher) {
            throw;
        }
        
        _;
    }
}