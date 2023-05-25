export const memoryAddressBase = 4194304

export function uInt(number: number) {
    return Math.sqrt(Math.pow(number, 2));
}

export function formatMemoryAddress(currentMemoryCount: number) {
    const baseAddressIncrement = 4

    let address = (baseAddressIncrement + currentMemoryCount).toString(16)
    while (address.length != 8) {
        address = '0' + address
    }

    return '0x' + address
}
