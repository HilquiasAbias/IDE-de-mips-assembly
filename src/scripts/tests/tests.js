// const instructions = {
//     addi: { 
//         op: '001000', 
//         type: 'a', 
//         does: (rs, imm) => rs + imm 
//     },
//     addiu: { 
//         op: '001001', 
//         type: 'a', 
//         does: (rs, imm) => rs + imm 
//     },
//     andi: { 
//         op: '001100', 
//         type: 'a', 
//         does: (rs, imm) => rs & imm },
//     beq: { 
//         op: '000100', 
//         type: 'b', 
//         does: (rs, rt) => rs == rt 
//     },
//     bgez: { 
//         op: '000001', 
//         type: 'c', 
//         does: null 
//     },
//     bgtz: { 
//         op: '000111', 
//         type: 'd', 
//         does: null 
//     },
//     blez: { 
//         op: '000110', 
//         type: 'd', 
//         does: null 
//     },
//     bltz: { 
//         op: '000001', 
//         type: 'd', 
//         does: null 
//     },
//     bne: { 
//         op: '000100', 
//         type: 'b', 
//         does: (rs, rt) => rs != rt 
//     },
//     // ...
//     lui: { 
//         op: '001111', 
//         type: 'f', 
//         does: null 
//     },

//     // ...

//     ori: { 
//         op: '001101', 
//         type: 'a', 
//         does: (rs, imm) => rs | imm 
//     },

//     // ...

//     slti: { 
//         function: '001010', 
//         type: 'a', 
//         does: (rs, imm) => rs < imm ? 1 : 0 
//     },
//     sltiu: { 
//         function: '001011', 
//         type: 'a', 
//         does: (rs, imm) => rs < imm ? 1 : 0 
//     },

//     // ...
    
//     xori: { 
//         function: '001110', 
//         type: 'a', 
//         does: (rs, imm) => rs ^ imm 
//     }
// }

// function cleanElement(str) {
//     return str.includes(',') ? str.slice(0, str.indexOf(',')) : str;
// }

/*
export function cleanElement(str) {
    return str.includes(',') ? str.slice(0, str.indexOf(',')) : str;
}
*/

// const listInstructions = [
//     ['add', '$13,', '$11,', '$12'],
//     ['addi', '$13,', '$11,', '5'],
//     ['addi', '$15,', '$14,', '-10']
// ]

// listInstructions.forEach(element => {
//     const arr1 = [];
//     element.forEach(el => {
//         arr1.push(cleanElement(el));
//     })
//     console.log(arr1);
// });


// function structureTheInstructions(listInstructions) {
//     if (instructions[listInstructions[0]].type === 'a') 
//         return {
//             op: listInstructions[0],
//             rt: listInstructions[1],
//             rs: listInstructions[2],
//             imm: parseInt(listInstructions[3])
//         }
    
//     if (instructions[listInstructions[0]].type === 'b') 
//         return {
//             op: listInstructions[0],
//             rt: listInstructions[1],
//             rs: listInstructions[2],
//             label: listInstructions[3]
//         }
    
//     // ...
// }

// console.log(structureTheInstructions(['addi', '$2,', '$0,', '5']));

// const memory = {
//     $0: 0, $1: 0, $2: 0, $3: 0, $4: 0, $5: 0, $6: 0, $7: 0, $8: 0, $9: 0,
//     $10: 0, $11: 0, $12: 0, $13: 0, $14: 0, $15: 0, $16: 0, $17: 0, $18: 0, $19: 0,
//     $20: 0, $21: 0, $22: 0, $23: 0, $24: 0, $25: 0, $26: 0, $27: 0, $28: 0, $29: 0,
//     $30: 0, $31: 0, pc: 0, hi: 0, lo: 0
// }

// const stack = [Object.assign({}, memory)];

// memory.$2 = 5;

// stack.push(Object.assign({}, memory));

// memory.$4 = 8;

// stack.push(Object.assign({}, memory));

// memory.$2 = 1;

// stack.push(Object.assign({}, memory));

// memory.$2 = 10;

// stack.push(Object.assign({}, memory));

// console.log(stack);

/*
addi $2, $0, 5
syscall
add $4, $2, $2
addi $2, $0, 1
syscall
addi $2, $0, 10
syscall
*/

// function formatArrayElements(arr) {
//     const imm = arr.pop();
//     const op = instructions[arr.shift()].op;
    
//     console.log(imm);
//     console.log(op);
//     console.log(arr);
// }

// formatArrayElements(['addi', '$2', '$0', '5'])

// function uInt(number) {
//     return Math.sqrt(Math.pow(number, 2));
// }
// const test = -7;

// console.log(test);
// console.log(uInt(test));

// var programAttributes = {
//     addressCount: 0,
//     currentInstruction: 0,
//     instructions: [],
//     memoryStackTimeline: [],
//     viewInformations: []
// };

// programAttributes.instructions.push({ t: 1 });
// programAttributes.instructions.push({ t: 2 });
// programAttributes.instructions.push({ t: 3 });

// const test = programAttributes.instructions[programAttributes.currentInstruction++];

// console.log(test);

// const test2 = programAttributes.instructions.shift();

// console.log(test2);

// const andI = (rs, imm) => rs & imm

// console.log(andI(5, 3));

// function convertHexToDecimal(hex) {
//     return parseInt(hex, 16);
// }

// function convertDecimalToHex(dec) {
//     return dec.toString(16);
// }

// function formatAddress(addressCount) {
//     let address = convertDecimalToHex(addressCount);
//     while (address.length !== 8) address = '0'+address;
//     return '0x' + address;
// }

// console.log(convertHexToDecimal('0x2'));
// console.log(convertHexToDecimal('0x35'));
// console.log(convertHexToDecimal('0x1f4'));
// console.log(convertHexToDecimal('0x7b2'));
// console.log(convertHexToDecimal('0x123abc'));

// console.log(convertDecimalToHex(2));
// console.log(convertDecimalToHex(53));
// console.log(convertDecimalToHex(500));
// console.log(convertDecimalToHex(1970));
// console.log(convertDecimalToHex(1194684));

// console.log(formatAddress(4));
// console.log(formatAddress(8));
// console.log(formatAddress(12));

// function separateFunc(str) { // map(el => el.trim())
//     let func, label, regs, arr

//     str = str.trim()

//     if (str.includes(':')) {
//         arr = str.split(':') // [ 'main', '    addi $2, $0, 5' ]
//         label = arr[0]
//         arr = arr[1].trim().split(' ').map(el => el.trim())
//         func = arr.length > 1 ? arr[0] : null
//         regs = arr.length > 1 ? arr.slice(1) : null
//     }

//     else {
//         label = null
//         arr = str.trim().split(' ').map(el => el.trim())
//         func = arr[0]
//         regs =  arr.length > 1 ? arr.slice(1) : null
//     }

//     return { func, label, regs }
// }

// function separateFunc(str) { // map(el => el.trim())
//     let obj = {}, aux

//     str = str.trim()

//     if (str.includes(':')) {
//         aux = str.split(':') // [ 'main', '    addi $2, $0, 5' ]
//         obj.label = aux[0]
//         aux = aux[1].trim().split(' ').map(el => el.trim())
//         obj.func = aux.length > 1 ? aux[0] : null
//         obj.regs = aux.length > 1 ? aux.slice(1) : null
//     }

//     else {
//         obj.label = null
//         aux = str.trim().split(' ').map(el => el.trim())
//         obj.func = aux[0]
//         obj.regs =  aux.length > 1 ? aux.slice(1) : null
//     }

//     return obj
// }

// const test = [
//     'main:  addi $2, $0, 5',
//     '       syscall',
//     '       add $8, $2, $0    ', // este caso precisa ser tratado melhor!
//     'print:',
//     '       addi $2, $0, 1',
//     '       syscall',
//     'end:',
//     '       addi $2, $0, 10',
//     '       syscall       '
// ]

// //test.forEach(el => console.log(separateFunc(el)))

// const test2 = [1,8,7,6,9,2,3,4]
// console.log(test2.find(el => el === 9));

// const formatAddress = {
//     op: '000000',
//     rs: '00000',
//     rt: '00000',
//     immOrLabel: '0000000000000000'
// };

// function organizationTypeA(arr) {
//     formatAddress.op = arr[0];
//     formatAddress.rt = arr[1];
//     formatAddress.rs = arr[2];
//     formatAddress.immOrLabel = arr[3];
//     return Object.values(formatAddress).join('');
// }

// function organizationTypeB(arr) {
//     formatAddress.op = arr[0];
//     formatAddress.rt = arr[1];
//     formatAddress.rs = arr[2];
//     formatAddress.immOrLabel = arr[3];
//     return Object.values(formatAddress).join('');
// }

// const a = organizationTypeA(['000000', '00000', '00000', '0000000000000001']) // 00000000000000000000000000000001
//                                                                               // 00000000000000000000000000000001
// const b = organizationTypeB(['100000', '00000', '00000', '0000000000000000']) // 10000000000000000000000000000000
//                                                                               // 1000000000000000000000000000000
// console.log(a);                                                               // 10000000000000000
// console.log(b);                                                               // 1000000000000000

let arr = []
let bin = '01010101010101010101010101010101'

for (let i = 0; i < 7; i++) {
    arr.push(bin.slice(0, 4))
    bin = bin.slice(4)
}

console.log(arr);
