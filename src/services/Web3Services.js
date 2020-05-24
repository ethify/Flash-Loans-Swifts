import { getWeb3Instance, defaultAddress } from "./index";


export const deployContract = async (byteCode, abi) => {
    const abiJson = JSON.parse(abi);
    const web3 = await getWeb3Instance();
    console.log(byteCode)
    var contract;
    console.log(await defaultAddress());
    var newContract = new web3.eth.Contract(abiJson, null);

    return newContract
}
export const executeOperation = async (address, abi, args) => {
    var txhash;
    const abiJson = JSON.parse(abi);
    const web3 = await getWeb3Instance();
    var newContract = new web3.eth.Contract(abiJson, address);

    return newContract
}

export const withdraw = async (address, abi, assetAddress) => {
    var txhash;
    const abiJson = JSON.parse(abi);
    const web3 = await getWeb3Instance();
    var newContract = new web3.eth.Contract(abiJson, address);

    return newContract
}