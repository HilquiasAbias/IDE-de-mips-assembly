export function executeTypeI(instruction, sys) {
    if (instruction.typing.org === 'a') {
        sys.memory[ instruction.registers.destinationRegister ] = instruction.do(
            sys.memory[ instruction.registers.operands.first ], instruction.registers.operands.second
        );
    }

    //return { reg: instruction.registers, does: instruction.do }

    // if (org === 'b') {}
}
