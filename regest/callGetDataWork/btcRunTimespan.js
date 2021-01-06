const RunJSON = require('./contracts/DataConsumer.json');
const Web3 = require('web3');
const web3Obj = new Web3('http://127.0.0.1:8545');

const ContractAddress = "0x0b51085C773735C9e2310f7F44Bd9A139213785d";
const Run = new web3Obj.eth.Contract(RunJSON.abi, ContractAddress, {
  gasPrice: 1000000000, // 1gwei
  gasLimit: 8000000,
});

async function main() {


    const privateKey = "c03b0a988e2e18794f2f0e881d7ffcd340d583f63c1be078426ae09ddbdec9f5";
    const account = web3Obj.eth.accounts.privateKeyToAccount(privateKey);
    const transaction = Run.methods.RequestBtcTimespan(
        "0x4FFDE32f5D5692f15D12eC9179211c13ad73a850",
        "6799521a6e2c4231ae1de0898f1303dd",
        "1EzwoHtiXB4iFwedPr49iywjZn2nnekhoj"
    );

    const options = {
        to      : transaction._parent._address,
        data    : transaction.encodeABI(),
        gas     : await transaction.estimateGas({from: account.address}),
        gasPrice: await web3Obj.eth.getGasPrice() // or use some predefined value
    };
    const signed  = await web3Obj.eth.accounts.signTransaction(options, privateKey);
    const receipt = await web3Obj.eth.sendSignedTransaction(signed.rawTransaction)
    //console.log(receipt["logs"]);

  
  };


  
main().then(() => {
  
}).catch((e) => {
    console.log("error", e);


});
  