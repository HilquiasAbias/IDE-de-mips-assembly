import { whichOrganization } from "./rTypeManager.js";

export default function operationInstruction(instruction) { // { label: null, func: 'addi', values: ['$2', '$0', '5'] }
    if ( whichOrganization(instruction.func) === 'a' ) { // 10 instructions
        return {
            rd: instruction.values[0],
            rs: instruction.values[1],
            rt: instruction.values[2]
        };
    }

    if ( whichOrganization(instruction.func) === 'b' ) { // 2 instructions
        return {}
    }

    if ( whichOrganization(instruction.func) === 'c' ) { // 4 instructions
        return {
            rs: instruction.values[0],
            rt: instruction.values[1]
        }
    }

    if ( whichOrganization(instruction.func) === 'd' ) {
        return {
            rd: instruction.values[0]
        }
    }

    if ( whichOrganization(instruction.func) === 'e') {
        return {
            rd: instruction.values[0],
            rt: instruction.values[1],
            sa: parseInt( instruction.values[2] )
        }
    }

    if ( whichOrganization(instruction.func) === 'f') {
        return {
            rd: instruction.values[0],
            rt: instruction.values[1],
            rs: instruction.values[2]
        }
    }

    if ( whichOrganization(instruction.func) === 'g') {}

    if ( whichOrganization(instruction.func) === 'h') {}
}