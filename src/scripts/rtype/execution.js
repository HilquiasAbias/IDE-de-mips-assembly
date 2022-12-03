export function executeTypeR(instruction, sys) {
    console.log(instruction);
    
    if (instruction.typing.org === 'a') {
        sys.memory[ instruction.registers.destinationRegister ] = instruction.do(
            sys.memory[ instruction.registers.operands.first ], sys.memory[ instruction.registers.operands.second ]
        );
    }

    if (instruction.typing.org === 'b') {
        if (instruction.syscall) sys.Call();
    }

    // ...

    if (instruction.typing.org === 'd') {
        console.log(sys);
        
        sys.memory[instruction.registers.destinationRegister] = instruction.do(sys);
    }
}
