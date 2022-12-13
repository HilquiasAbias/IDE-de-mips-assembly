import instructions from "./instructions.js";
import { whichOrganization } from "./iTypeManager.js";

export default function operationInstruction(instruction) { // { label: null, func: 'addi', values: ['$2', '$0', '5'] }
    if ( whichOrganization(instruction.func) === 'a' ) { // 10 instructions
        return {
            rt: instruction.values[0],
            rs: instruction.values[1],
            imm: parseInt( instruction.values[2] )
        };
    }

    if ( whichOrganization(instruction.func) === 'b' ) { // 2 instructions
        return {
            rs: instruction.values[0],
            rt: instruction.values[1],
            offset: instruction.values[2]
        }
    }

    if ( whichOrganization(instruction.func) === 'c' ) { // 4 instructions
        return {
            rs: instruction.values[0],
            offset: instruction.values[1]
        }
    }

    if ( whichOrganization(instruction.func) === 'd' ) {
        return {
            rs: instruction.values[0],
            offset: instruction.values[1]
        }
    }

    if ( whichOrganization(instruction.func) === 'e') {
        return {
            rs: instruction.values[1].slice( instruction.values[1].indexOf('$'), instruction.values[1].indexOf(')') ),
            rt: instruction.values[0],
            imm: parseInt( instruction.values[1].slice(0, instruction.values[1].indexOf('(') ) )
        }
    }

    if ( whichOrganization(instruction.func) === 'f') {
        return {
            rs: instruction.values[0],
            imm: parseInt( instruction.values[1] )
        }
    }
}