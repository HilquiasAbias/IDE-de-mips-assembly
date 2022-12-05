import instructions from "./instructions.js";

export default function operationInstruction(instruction) {
    console.log(instruction);
    if ( instructions[ instruction.func ].type === 'a' ) { // 10 instructions
        return {
            destinationRegister: instruction.values[0],
            operands: {
                first: instruction.values[1],
                second: parseInt( instruction.values[2] )
            }
        };
    }

    if ( instructions[ instruction.func ].type === 'b' ) { // 2 instructions
        return {
            destinationAddress: instruction.values[2],
            operands: {
                first: instruction.values[0],
                second: instruction.values[1]
            }
        }
    }

    if ( instructions[ instruction.func ].type === 'c' ) { // 4 instructions
        return {
            comparedAddress: instruction.values[0],
            destinationAddress: instruction.values[1]
        }
    }

    if ( instructions[ instruction.func ].type === 'd' ) {
        return {
            
        }
    }

    // ...
}