import instructions from "./instructions.js";

export default function operationInstruction(instruction) {
    if ( instructions[ instruction.func ].type === 'a' ) {
        return {
            destinationRegister: instruction.values[0],
            operands: {
                first: instruction.values[1],
                second: parseInt( instruction.values[2] )
            }
        };
    }

    if ( instructions[ instruction.func ].type === 'b' ) {
        return {
            
        }
    }

    // ...
}