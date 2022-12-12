export function executeTypeI(instruction, sys) {
    if (instruction.typing.org === 'a') {
        sys.regs[ instruction.GPR.rt ] = instruction.do( sys.regs[ instruction.GPR.rs ], instruction.GPR.imm )
    }

    //return { reg: instruction.registers, does: instruction.do }

    // if (org === 'b') {}
}
