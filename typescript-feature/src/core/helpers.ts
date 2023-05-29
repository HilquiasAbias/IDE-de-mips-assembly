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

export function convertDecimalToBin(dec: number) {
    return dec.toString(2);
}

export function convertBinToHex(bin: string) {
    return parseInt(bin, 2).toString(16);
}

export function convertDecimalToHex(dec: number) {
    return dec.toString(16);
}

export function convertDecimalToAddressHex(dec: number) {
    let hex = dec.toString(16);

    while (hex.length !== 8) {
        hex = '0' + hex;
    }
    
    return '0x' + hex;
}

export function convertHexToDecimal(hex: string) {
    return parseInt(hex, 16);
}
