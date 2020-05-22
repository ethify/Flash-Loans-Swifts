import {getWeb3Instance} from "./index";


export const deployContract=async (byteCode, abi)=>{
    const abiJson = JSON.parse(abi);
    const byteJson = JSON.parse(byteCode)
    const web3 = await getWeb3Instance();
    console.log(byteCode)
    console.log(byteJson.object)
    var newContract =  web3.eth.contract(abiJson);
    
    var deployedContract =  newContract.new({from: web3.eth.accounts[0], gas: 10000000, data: byteJson.object, arguments:['0x1c8756FD2B28e9426CDBDcC7E3c4d64fa9A54728','0x2Ee331840018465bD7Fe74aA4E442b9EA407fBBE','0x2Ee331840018465bD7Fe74aA4E442b9EA407fBBE']},function(err, result){
        console.log(err,result)
    });
    // .send(
    //     {
    //         from: web3.eth.accounts[0],
    //         gas:1500000, 
    //         gasPrice:web3.utils.toWei('0.00003', 'ether')
    //     }
        
    // );
    //console.log(deployedContract.options.address);
}
export const executeOperation=()=>{

}