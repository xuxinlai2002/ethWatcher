const DataConsumer = require('../../test/callGetDataWork/contracts/DataConsumer.json');
const Web3 = require('web3');

//xxl todo
const ContractAddress = "0xe97f3512521314513eEc91F9BA788B50889e6063";
const ws = "ws://13.115.138.227:20635";

//btc balance
const watchBtcBalanceChainRequest = (callback) =>{

  console.log("watch btc chain balance");

  //var web3Obj = new Web3(ws);
  const web3Obj = new Web3()
  const provider = new Web3.providers.WebsocketProvider(ws);
  web3Obj.setProvider(provider);

  const dataConsumerContract = new web3Obj.eth.Contract(DataConsumer.abi, ContractAddress, {
    gasPrice: 1000000000, // 1gwei
    gasLimit: 4000000,
  });

  dataConsumerContract.events.RequestBtcBalanceFulfilled({
  }, function(err, data) {

      provider.disconnect();
     
      const retVal = parseInt(data.returnValues["1"])
      const retReponse = {
        data:retVal
      }
      callback(200,retReponse);
    
  });

}

const watchBtcTimespanChainRequest = (callback) =>{

  console.log("watch btc chain timespan");

  //var web3Obj = new Web3(ws);
  const web3Obj = new Web3()
  const provider = new Web3.providers.WebsocketProvider(ws);
  web3Obj.setProvider(provider);
  
  const dataConsumerContract = new web3Obj.eth.Contract(DataConsumer.abi, ContractAddress, {
    gasPrice: 1000000000, // 1gwei
    gasLimit: 4000000,
  });

  dataConsumerContract.events.RequestBtcTimespanFulfilled({
  }, function(err, data) {

      provider.disconnect();
     
      const retVal = parseInt(data.returnValues["1"])
      const retReponse = {
        data:retVal
      }
      callback(200,retReponse);
      
      
  });

}

const watchEthBalanceChainRequest = (callback) =>{

  console.log("watch eth chain balance");

  //var web3Obj = new Web3(ws);
  const web3Obj = new Web3()
  const provider = new Web3.providers.WebsocketProvider(ws);
  web3Obj.setProvider(provider);

  const dataConsumerContract = new web3Obj.eth.Contract(DataConsumer.abi, ContractAddress, {
    gasPrice: 1000000000, // 1gwei
    gasLimit: 4000000,
  });

  dataConsumerContract.events.RequestEthBalanceFulfilled({
  }, function(err, data) {

      provider.disconnect();
     
      console.log(data);

      const retVal = data.returnValues["1"]
      const retReponse = {
        data:retVal
      }
      callback(200,retReponse);
    
  });

}

const watchEthTimespanChainRequest = (callback) =>{

  console.log("watch eth chain timespan");

  //var web3Obj = new Web3(ws);
  const web3Obj = new Web3()
  const provider = new Web3.providers.WebsocketProvider(ws);
  web3Obj.setProvider(provider);
  
  const dataConsumerContract = new web3Obj.eth.Contract(DataConsumer.abi, ContractAddress, {
    gasPrice: 1000000000, // 1gwei
    gasLimit: 4000000,
  });

  dataConsumerContract.events.RequestEthTimespanFulfilled({
  }, function(err, data) {

      provider.disconnect();
     
      const retVal = parseInt(data.returnValues["1"])
      const retReponse = {
        data:retVal
      }
      callback(200,retReponse);
      
      
  });

}


// This is a wrapper to allow the function to work with
// GCP Functions
exports.gcpservice = (req, res) => {
  createRequest(req.body, (statusCode, data) => {
    res.status(statusCode).send(data)
  })
}

// This is a wrapper to allow the function to work with
// AWS Lambda
exports.handler = (event, context, callback) => {
  createRequest(event, (statusCode, data) => {
    callback(null, data)
  })
}

// This is a wrapper to allow the function to work with
// newer AWS Lambda implementations
exports.handlerv2 = (event, context, callback) => {
  createRequest(JSON.parse(event.body), (statusCode, data) => {
    callback(null, {
      statusCode: statusCode,
      body: JSON.stringify(data),
      isBase64Encoded: false
    })
  })
}


module.exports.watchBtcBalanceChainRequest =  watchBtcBalanceChainRequest
module.exports.watchBtcTimespanChainRequest = watchBtcTimespanChainRequest

module.exports.watchEthBalanceChainRequest =  watchEthBalanceChainRequest
module.exports.watchEthTimespanChainRequest = watchEthTimespanChainRequest