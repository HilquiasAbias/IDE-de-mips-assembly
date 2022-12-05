import * as tools from "../tools/FormattingTools.js";
import * as formatting from "./formatting.js";
import instructions from "./instructions.js";
import operateInstrucion from "./createOperationInstruction.js";

function selectOrganizationType(type, arr) {
    if (type === 'a') return formatting.organizationTypeA(arr);
    if (type === 'b') return formatting.organizationTypeB(arr);
    if (type === 'c') return formatting.organizationTypeC(arr);
    if (type === 'd') return formatting.organizationTypeC(arr);
    if (type === 'e') return formatting.organizationTypeC(arr);
    if (type === 'f') return formatting.organizationTypeC(arr);
}

export function isTypeI(op) {
    return instructions[op] !== undefined;
}

export function formatInstruction(instruction, memorySpace) { // { label: null, func: 'addi', values: ['$2', '$0', '5'] }, 4
    const binaryInstrution = selectOrganizationType( // '001000000100000000101'
        instructions[ instruction.func ].type, // i
        formatting.formatInstructionsInBinary( [ instruction.func, ...instruction.values ] ) // ['001000', '00010', '00000', '00101']
    );

    return {
        address: tools.formatAddress(memorySpace), // 0x00000004
        hex: '0x' + tools.convertBinInstructionToHex(binaryInstrution), // 0x00040805
        do: instructions[ instruction.func ].does, // ( rs, imm) => rs + imm
        registers: operateInstrucion(instruction),
        typing: {
            type: 'i',
            org: instructions[ instruction.func ].type
        },
        label: instruction.label
    }
}
