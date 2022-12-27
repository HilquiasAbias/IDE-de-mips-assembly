// const addressBase = 4194304

// function convertBinToHex(bin) {
//     return parseInt(bin, 2).toString(16);
// }

// function convertDecimalToBin(dec) {
//     return dec.toString(2);
// }

// const shiftLeftTwoBitsLogical = value => value >> 2

// const completeHexLength = value => { 
//     while (value.length !== 8) 
//         value = '0' + value 
    
//     return value
// }

// const completeTargetInstruction = value => { 
//     while (value.length !== 26) 
//         value = '0' + value 
    
//     return value
// }

// function getJumpTarget(instruction, index) { // TODO: descobrir se 'jr' e 'jal' formam o code igual ao 'j'
//     if (instruction.func === 'j') {
//         const bin = '000010' + completeTargetInstruction( convertDecimalToBin( shiftLeftTwoBitsLogical( addressBase + index * 4 ) ) )
//         const code = '0x' + completeHexLength( convertBinToHex( bin ) )
//         return code
//     }
// }
// console.log(getJumpTarget( { func: 'j', }, 4 ));

const test = [
    {
        address: '0x00000008', 
        hex: '0x0000000c', 
        typing: {type: 'r', org: 'b'}, 
        syscall: true,
        do: null
    },
    {
        address: '0x0000000c', 
        hex: '0x00422020', 
        registers: {}, 
        typing: {}, 
        do: ['outro']
    },
    {
        address: '0x00000010', 
        hex: '0x20020001', 
        registers: {}, 
        typing: {}, 
        do: null
    },
    {
        address: '0x00000014', 
        hex: '0x0000000c', 
        typing: {}, 
        syscall: true,
        do: ['teste']
    },
    {
        address: '0x00000018',
        hex: '0x2002000a',
        registers: {},
        typing: {},
        do: null
    },
]

function test(instruction) {
    if (instruction.onlyLabel) return false
    
}

const target = test.find( (current) => current.label && current.label.includes('teste') )


console.log(target);
