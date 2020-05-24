export const getShortAddress = (longAddress) => {
    const shortUserAddress =
      longAddress.substring(0, 7) +
      "........" +
      longAddress.substring(longAddress.length - 7, longAddress.length);

    return shortUserAddress
}

export const getShortDescription = (longDescription) => {
    return longDescription.substring(0, 25) + '...'
}