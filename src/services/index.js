import Box from "3box";
import IdentityWallet from "identity-wallet";
import Onboard from "bnc-onboard";
import * as Web3 from "web3";
import { upload } from "skynet-js";

const seed = "0x7acca0ba544b6bb3f6ad3cfdcd385b76a2c1587250f0036f00d1d476bbb679b3";

let box
let space = null
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
    if (!space) {
        await get3BoxInstance()
        await getSpace()
    }
    const swifts = await space.public.get('swiftsLists')
    return swifts
}

export const getSwift = async (swiftID) => {
    const allSwifts = await getSwifts()
    console.log('All Swifts', allSwifts)
    const swift = allSwifts.find((swift) => swift.id === swiftID)
    console.log('swift', swift)
    return swift
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

export const updateSwifts = async (newSwifts) => {
    space.public.set('swiftsLists', newSwifts)

    const newUpdatedSwifts = await getSwifts()
    console.log('now Updated Swifts', newUpdatedSwifts)

    return newUpdatedSwifts
}

export const upVoteSwift = async (swiftID) => {
    let currentSwifts = await getSwifts()

    const selectedSwiftIndex = currentSwifts.findIndex((filter) => {
        return filter.id === swiftID
    })

    const currentUserAddress = await defaultAddress()

    const voterInstanceIndex = currentSwifts[selectedSwiftIndex].voters.findIndex((voter) => voter.voterAddress === currentUserAddress)

    if (voterInstanceIndex !== -1) {
        console.log('Already Voted')
        const currentVote = currentSwifts[selectedSwiftIndex].voters[voterInstanceIndex].vote
        if (currentVote === true) {
            console.log('Deleteing Vote')
            currentSwifts[selectedSwiftIndex].upVotes--
            currentSwifts[selectedSwiftIndex].voters.splice(voterInstanceIndex, 1)
        } else {
            console.log('Already Voted Down')
        }
        return
    } else {
        currentSwifts[selectedSwiftIndex].voters.push({ voterAddress: currentUserAddress, vote: true })
        currentSwifts[selectedSwiftIndex].upVotes++
    }

    const newUpdatedSwifts = await updateSwifts(currentSwifts)
    return newUpdatedSwifts
}

export const downVoteSwift = async (swiftID) => {
    let currentSwifts = await getSwifts()

    const selectedSwiftIndex = currentSwifts.findIndex((filter) => {
        return filter.id === swiftID
    })

    const currentUserAddress = await defaultAddress()


    const voterInstanceIndex = currentSwifts[selectedSwiftIndex].voters.findIndex((voter) => voter.voterAddress === currentUserAddress)

    if (voterInstanceIndex !== -1) {
        console.log('Already Voted')
        const currentVote = currentSwifts[selectedSwiftIndex].voters[voterInstanceIndex].vote
        if (currentVote === false) {
            console.log('Deleting Vote')
            currentSwifts[selectedSwiftIndex].downVotes--
            currentSwifts[selectedSwiftIndex].voters.splice(voterInstanceIndex, 1)
            console.log('This voters', currentSwifts[selectedSwiftIndex].voters)
        } else {
            console.log('Already Voted Up')
        }
        return
    } else {
        currentSwifts[selectedSwiftIndex].voters.push({ voterAddress: currentUserAddress, vote: false })
        currentSwifts[selectedSwiftIndex].downVotes++
    }

    const newUpdatedSwifts = await updateSwifts(currentSwifts)
    return newUpdatedSwifts
}

export const getUserSwifts = async () => {

}

const DefaultUploadOptions = {
    portalUrl: "https://siasky.net",
    portalUploadPath: "/skynet/flashSwift",
    portalFileFieldname: "file",
    portalDirectoryFileFieldname: "files[]",
    customFilename: "",
}

function trimTrailingSlash(str) {
    return str.replace(/\/$/, "");
}

function trimSiaPrefix(str) {
    return str.replace("sia://", "")
}

export const uploadToSkynet = async (file) => {
    const onUploadProgress = (progress, { loaded, total }) => {
        console.info(`Progress ${Math.round(progress * 100)}%`);
    };

    const portalUrl = "https://siasky.net"
    const portalUploadPath = "/skynet/flashswifts"

    const url = `${trimTrailingSlash(portalUrl)}${trimTrailingSlash(portalUploadPath)}`

    try {
        const { skylink } = await upload(url, file, { onUploadProgress })
        console.log('Skylink', skylink)
    } catch (error) {
        console.log('error', error)
    }
}

// export const downloadFromSkynet = async (fileName, skylink) => {
//     const url = `${trimTrailingSlash(DefaultUploadOptions.portalUrl)}/${trimSiaPrefix(skylink)}`

//     const writer = fs.createWriteStream(fileName)

//     return new Promise((resolve, reject) => {
//         axios.get(url, { responseType: 'stream' })
//             .then(response => {
//                 response.data.pipe(writer)
//                 writer.on('finish', resolve)
//                 writer.on('error', reject)
//             })
//             .catch(error => {
//                 reject(error)
//             })
//     })
// }