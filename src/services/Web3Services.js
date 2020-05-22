import {getWeb3Instance,defaultAddress} from "./index";


export const deployContract=async (byteCode, abi)=>{
    const abiJson = JSON.parse(abi);
    const web3 = await getWeb3Instance();
    console.log(byteCode)
    var contract ;
    console.log(await defaultAddress());
    var newContract =  new web3.eth.Contract(abiJson,null);
    
    let parameter = {
        from:await defaultAddress(),
        gas: web3.utils.toHex(2220000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('30', 'gwei'))
    }
    var deployContract = await newContract.deploy({
        from:await defaultAddress(),
        data: "0x"+byteCode,
        arguments:['0x1c8756FD2B28e9426CDBDcC7E3c4d64fa9A54728','0x2Ee331840018465bD7Fe74aA4E442b9EA407fBBE','0x2Ee331840018465bD7Fe74aA4E442b9EA407fBBE']
    }).send(parameter, function(err, result){
        console.log(err,result)
    }).on('error', function(error){ console.log(error)})
    .on('transactionHash', function(transactionHash){ console.log(transactionHash) })
    .on('receipt', function(receipt){
       console.log(receipt) // contains the new contract address
    })
    .on('confirmation', function(confirmationNumber, receipt){  })
    .then(function(newContractInstance){
        contract = newContractInstance;
        console.log(newContractInstance.options.address) // instance with the new contract address
    });
    return contract.options.address;
}
export const executeOperation=async(address,abi,args)=>{
    var txhash;
    const abiJson = JSON.parse(abi);
    const web3 = await getWeb3Instance();
    var newContract =  new web3.eth.Contract(abiJson,address);
    var tx;
   
    newContract.methods.flashloanWrapper(...args).send({from:await defaultAddress(),gas: web3.utils.toHex(2220000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('100', 'gwei'))},function(err, txh){
            console.log(txh, err)
            txhash=txh;
        })
    return txhash;
}