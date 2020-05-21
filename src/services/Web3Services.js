import {getWeb3Instance} from "./index";


export const deployContract=async (byteCode, abi)=>{
    const abiJson = JSON.parse(abi);
    const web3 = await getWeb3Instance();
    var newContract = new web3.eth.Contract(abiJson);
    var options = {
        jsonInterface: abiJson,
        from: web3.eth.accounts[0],
        gasPrice: '10000000000000',
        gas: 1000000
    }
    var deployedContract = newContract.deploy(options);
    console.log(deployedContract.options.address);
}
export const executeOperation=()=>{

}