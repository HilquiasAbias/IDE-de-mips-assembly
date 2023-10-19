export function convertDecimalToBinary(dec: number) {
  return dec.toString(2);
}

export function convertBinToHexadecimal(bin: string) {
  return parseInt(bin, 2).toString(16);
}

export function convertDecimalToHexadecimal(dec: number) {
  return dec.toString(16);
}

export function convertDecimalToHexadecimalAddress(dec: number) {
  let hex = dec.toString(16);

  while (hex.length !== 8) {
    hex = '0' + hex;
  }
  
  return '0x' + hex;
}

export function convertHexadecimalToDecimal(hex: string) {
  return parseInt(hex, 16);
}

export function convertBinaryInstructionToHexadecimal(binaryInstrution: string) {
  const binaryArrayInstruction = binaryInstrution.split('')
  const hexArrayInstruction = [];

  let i = 0;
  while (i++ !== 8) {
    const pieceWithHexLenght = binaryArrayInstruction.splice(0, 4).join('')
    hexArrayInstruction.push( convertBinToHexadecimal(pieceWithHexLenght) );
  }
  
  return '0x' + hexArrayInstruction.join('');
}
