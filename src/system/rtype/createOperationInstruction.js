import instructions from "./instructions.js";

export default function operationInstruction(instruction) {
    //console.log(instruction);
    
    if ( instructions[ instruction.func ].type === 'a' ) {
        return {
            destinationRegister: instruction.values[0],
            operands: { 
                first: instruction.values[1], 
                second: instruction.values[2]
            }
        };
    }

    //if (instructions[instruction[0]].type === 'b') {}

    // ...

    console.log(instructions[instruction.func]);

    if (instructions[ instruction.func ].type === 'd') {
        return {
            destinationRegister: instruction.values[1]
        }
    }
}