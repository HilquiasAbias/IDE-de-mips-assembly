import * as tools from "../tools/FormattingTools.js";
import * as formatting from './formatting.js'
import instructions from "./instructions.js";
import operationInstruction from "./createOperationInstruction.js";

function selectOrganizationType(type, arr) {
    if (type === 'a') return formatting.organizationFromTypeA(arr);
    if (type === 'b') return formatting.organizationFromTypeB(arr);
    if (type === 'c') return formatting.organizationFromTypeC(arr);
    if (type === 'd') return formatting.organizationFromTypeC(arr);
    if (type === 'e') return formatting.organizationFromTypeC(arr);
    if (type === 'f') return formatting.organizationFromTypeC(arr);
    if (type === 'g') return formatting.organizationFromTypeC(arr);
    if (type === 'h') return formatting.organizationFromTypeC(arr);
}

export function isTypeR(fn) {
    return instructions[fn] !== undefined;
}

export function formatInstruction(instruction, memorySpace) { // ['add', '$13,', '$11,', '$12']
    console.log(instruction);

    if (instruction.func === 'syscall') return {
        address: tools.formatAddress(memorySpace), // 0x00000004
        hex: '0x0000000c',
        typing: {
            type: 'r',
            org: instructions[instruction.func].type
        },
        syscall: true
    }

    const binaryInstrution = selectOrganizationType( // '100000011010101101100'
        instructions[ instruction.func ].type,
        formatting.formatArrayElements( [ instruction.func, ...instruction.values ] ) // ['100000', '01101', '01011', '01100']
    );

    return {
        address: tools.formatAddress(memorySpace), // 0x00000004
        hex: '0x' + tools.convertBinInstructionToHex(binaryInstrution), // 0x0010356c
        do: instructions[ instruction.func ].does, // (rs, rt) => rs + rt
        registers: operationInstruction(instruction), // {...}
        typing: {
            type: 'r',
            org: instructions[ instruction.func ].type // a
        },
        label: instruction.label
    }
}
