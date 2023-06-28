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

// export function convertBinaryInstructionToHex(binaryInstrution: string) {
//   const binaryArrayInstruction = binaryInstrution.split('')
//   const hexArrayInstruction = [];

//   let i = 0;
//   while (i++ !== 8) {
//     const pieceWithHexLenght: string = binaryArrayInstruction.splice(0, 4).join('')
//     hexArrayInstruction.push( convertBinToHex(pieceWithHexLenght) );
//   }
  
//   return '0x' + hexArrayInstruction.join('');
// }
