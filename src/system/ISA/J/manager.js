import { formatAddress } from "../../toolkit.js"
import { formatCodeInstruction } from "./formatting.js"
import instructions from "./instructions.js"
import sys from "../../sys.js"

export function isTypeJ(op) {
    return 'j' === op || op === 'jal'
}

export function formatInstruction(instruction, memorySpace, index, target) {
    console.log(instruction)
    console.log(memorySpace)
    console.log(index)
    const targetLocal = sys.FindJumpTarget(target.index)
    const instructionProperties = {
        address: formatAddress(memorySpace),
        code: formatCodeInstruction(instruction, target.index),
        index,
        target: targetLocal,
        label: instruction.label,
        does: instructions[instruction.func].does,
        func: instruction.func,
        typing: {
            type: 'j',
        }
    }

    return instructionProperties
}

/*
main:   addi $2, $0, 5
        j main
*/
