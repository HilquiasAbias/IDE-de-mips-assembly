export function executeTypeI(instruction, sys) {
    if (instruction.typing.org === 'a') {
        sys.regs[ instruction.GPR.rt ] = instruction.does( sys.regs[instruction.GPR.rs], instruction.GPR.imm )
    }

    // if (org === 'b') {}
}
