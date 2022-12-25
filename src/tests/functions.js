const addressBase = 4194304

function convertBinToHex(bin) {
    return parseInt(bin, 2).toString(16);
}

function convertDecimalToBin(dec) {
    return dec.toString(2);
}

const shiftLeftTwoBitsLogical = value => value >> 2

const completeHexLength = value => { 
    while (value.length !== 8) 
        value = '0' + value 
    
    return value
}

const completeTargetInstruction = value => { 
    while (value.length !== 26) 
        value = '0' + value 
    
    return value
}

function getJumpTarget(instruction, index) { // TODO: descobrir se 'jr' e 'jal' formam o code igual ao 'j'
    if (instruction.func === 'j') {
        const bin = '000010' + completeTargetInstruction( convertDecimalToBin( shiftLeftTwoBitsLogical( addressBase + index * 4 ) ) )
        const code = '0x' + completeHexLength( convertBinToHex( bin ) )
        return code
    }
}
console.log(getJumpTarget( { func: 'j', }, 4 ));
