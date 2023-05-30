function convertBinToHex(bin) {
  return parseInt(bin, 2).toString(16);
}

function convertBinaryInstructionToHex(binaryInstrution) {
  const binaryArrayInstruction = binaryInstrution.split('')
  const array = [];

  let i = 0;
  while (i++ !== 8) {
    const pieceWithHexLenght = binaryArrayInstruction.splice(0, 4).join('')
    array.push(
      convertBinToHex(pieceWithHexLenght)
    );
  }
  
  return '0x' + array.join('');
}

console.log(convertBinaryInstructionToHex('11010010101100110111001010110101'));
