import { formatAddress } from "../../toolkit.js"
import { formatCodeInstruction } from "./formatting.js"
import instructions from "./instructions.js"

export function isTypeJ(op) {
    return 'j' === op || op === 'jal'
}

export function formatInstruction(instruction, memorySpace, instructionsBeforeLabel) {
    console.log(instruction)
    console.log(memorySpace)
    console.log(instructionsBeforeLabel)
    const instructionProperties = {
        address: formatAddress(memorySpace),
        code: formatCodeInstruction(instruction, instructionsBeforeLabel-3),
        target: instruction.values[0],
        label: instruction.label,
        does: instructions[instruction.func].does,
        type: 'r'
    }

    return instructionProperties
}

/*
main:   addi $2, $0, 5
        j main
*/
