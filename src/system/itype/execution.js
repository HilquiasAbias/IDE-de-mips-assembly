export function executeTypeI(instruction, sys) {
    if (instruction.typing.org === 'a') {
        console.log('sys.regs[instruction.GPR.rs] ', sys.regs[instruction.GPR.rs]);
        sys.regs[ instruction.GPR.rt ] = instruction.does( sys.regs[instruction.GPR.rs], instruction.GPR.imm )
    }

    // if (org === 'b') {}
}
