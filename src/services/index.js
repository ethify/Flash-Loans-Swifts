import Box from "3box";
import IdentityWallet from "identity-wallet";
import Onboard from "bnc-onboard";
import * as Web3 from "web3";

const seed = "0x7acca0ba544b6bb3f6ad3cfdcd375b76a2c1587250f0036f00d1d476bbb679b3";

let box
let space
let web3

const onboard = Onboard({
    dappId: "052b3fe9-87d5-4614-b2e9-6dd81115979a", // [String] The API key created by step one above
    networkId: 4, // [Integer] The Ethereum network ID your Dapp uses.
    subscriptions: {
      wallet: (wallet) => {
        web3 = new Web3(wallet.provider);
      },
    },
  });
  

export const getAccount = async () => {
    await onboard.walletSelect();
    await onboard.walletCheck();
};

export const defaultAddress = async () => {
    const currentState = onboard.getState();
    return currentState.address;
};

export const getBalance = (address) => {
    return web3.eth.getBalance(address);
};

export const getWeb3Instance = () => {
    return web3
}

const getConsent = async ({ type, origin, spaces }) => {
    return true;
};

export const get3BoxInstance = async () => {
    const idWallet = new IdentityWallet(getConsent, { seed });
    const threeIdProvider = idWallet.get3idProvider();
    box = await Box.openBox(null, threeIdProvider);
    await box.syncDone
}

export const getSpace = async () => {
    await get3BoxInstance()
    space = await box.openSpace('FlashLoans')
}

export const getSwifts = async () => {
    const swifts = await space.public.get('swiftsLists')
    return swifts
}

export const setSwifts = async (swiftData) => {
    let swifts = []

    swifts = await getSwifts()

    if (swifts == undefined) {
        swifts = []
    }

    console.log('swifts', swifts)

    swifts.push(swiftData)
    space.public.set('swiftsLists', swifts)

    const newSwifts = await getSwifts()
    console.log('now Swifts', newSwifts)
}

export const upVoteSwift = async () => {

}

export const downVoteSwift = async () => {

}

