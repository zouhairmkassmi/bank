pragma solidity ^0.4.17;
 contract Payment {
  address transferFrom;
  address transferTo;
  uint paymentAmount;
 
  function Payment() {
    transferFrom = msg.sender;
  }
 

 
  function transferFund(address _transferTo) public payable returns (bool){
      transferTo = _transferTo;
      transferTo.transfer(msg.value);
     
      return true;
  }
 
  function getBalanceOfCurrentAccount() public payable returns (uint) {
    return transferFrom.balance;
  }
 
}
