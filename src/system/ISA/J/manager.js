import * as tools from "../toolkit.js"
import * as formatting from "./formatting.js"
import instructions from "./instructions.js"

export function isTypeJ(op) {
    return 'j' === op || op === 'jal'
}

export function formatInstruction(instruction, memorySpace) {
    const instructionProperties = {
        GPR: {

        },
        label: instruction.label,
        does: (target) => {},
        
    }
}
