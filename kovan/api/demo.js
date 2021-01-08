const DataConsumer = require('../../regest/callGetDataWork/contracts/DataConsumer.json');
const Web3 = require('web3');

const ContractAddress = "0xCf0fE0461c4867283D0c6A36BE947C26b652555B";

//xxl 切换本地节点
//const ws = "ws://13.115.138.227:8546";
const ws = "ws://0.0.0.0:8546";

console.log("watch btc chain balance");

//var web3Obj = new Web3(ws);
const web3Obj = new Web3()
const provider = new Web3.providers.WebsocketProvider(ws);
web3Obj.setProvider(provider);

const dataConsumerContract = new web3Obj.eth.Contract(DataConsumer.abi, ContractAddress, {
gasPrice: 1000000000, // 1gwei
gasLimit: 4000000,
});


// events = dataConsumerContract.events;
// events.all(function(error, event){
//     if (error) {
//         console.log("Error: " + error);
//     } else {
//         console.log(event.event + ": " + JSON.stringify(event.args));
//     }
// });

// console.log(dataConsumerContract.events);

dataConsumerContract.events.allEvents({
}, function(err, data) {
	console.log(err);
	console.log(data);
	console.log("catch ...");

});





