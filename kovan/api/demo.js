const btcBlanance = require('./contracts/BtcBalanceConsumer.json');
const Web3 = require('web3');

//const ws = "ws://13.115.138.227:8546";
//const ws = "wss://kovan.infura.io/ws/v3/7e31d49d7c8a48f4a4539aff9da768e7";
const ws = "ws://13.115.138.227:20635";
var web3Obj = new Web3(ws);
const ContractAddress = "0x29547bB949b50fE49AD7db2C61661FD6aA7E7425";

const btcBlananceContract = new web3Obj.eth.Contract(btcBlanance.abi, ContractAddress, {
  gasPrice: 1000000000, // 1gwei
  gasLimit: 4000000,
});

btcBlananceContract.events.goEvt({
}, function(err, data) {
  
    console.log(err, data);

});


