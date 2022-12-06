import * as tools from "../tools/FormattingTools.js";
import * as formatting from "./formatting.js";
import instructions from "./instructions.js";
import operateInstrucion from "./createOperationInstruction.js";

function selectOrganizationType(type, arr) { // a, ['addi', '$2', '$0', '5']
    console.log(arr);

    if (type === 'a') return formatting.organizationTypeA(arr);
    if (type === 'b') return formatting.organizationTypeB(arr);
    if (type === 'c') return formatting.organizationTypeC(arr);
    if (type === 'd') return formatting.organizationTypeD(arr);
    if (type === 'e') return formatting.organizationTypeE(arr);
    if (type === 'f') return formatting.organizationTypeF(arr);
}

export function isTypeI(op) {
    return instructions[op] !== undefined;
}

export function whichOrganization(op) {
    return instructions[op].type
}

export function formatInstruction(instruction, memorySpace) { // { label: null, func: 'addi', values: ['$2', '$0', '5'] }, 4
    const binaryInstrution = selectOrganizationType( // '001000000100000000101'
        instructions[ instruction.func ].type, // i
        formatting.formatInstructionsInBinary( [ instruction.func, ...instruction.values ] ) // ['001000', '00010', '00000', '00101']
    );

    return {
        address: tools.formatAddress(memorySpace), // 0x00000004
        hex: tools.convertBinInstructionToHex(binaryInstrution), // 0x00040805
        do: instructions[ instruction.func ].does, // ( rs, imm) => rs + imm
        GPR: operateInstrucion(instruction),
        typing: {
            type: 'i',
            org: instructions[ instruction.func ].type
        },
        label: instruction.label
    }
}

/*
addi $8, $0, 5
beq $8, $9, lbBeq
bgez $10, lbBgez
bgtz $11, lbBgtz
lw $13, 4($12)
lui $14, 100

lbBeq:
lbBgez:
lbBgtz:
*/