import { formatAddress } from "../../toolkit.js"
import { formatCodeInstruction } from "./formatting.js"
import instructions from "./instructions.js"

export function isTypeJ(op) {
    return 'j' === op || op === 'jal'
}

export function formatInstruction(instruction, memorySpace, index) {
    console.log(instruction)
    console.log(memorySpace)
    console.log(index)
    const instructionProperties = {
        address: formatAddress(memorySpace),
        code: formatCodeInstruction(instruction, index),
        index,
        target: instruction.values[0],
        label: instruction.label,
        does: instructions[instruction.func].does,
        func: instruction.func,
        typing: {
            type: 'j'
        }
    }

    return instructionProperties
}

/*
main:   addi $2, $0, 5
        j main
*/
