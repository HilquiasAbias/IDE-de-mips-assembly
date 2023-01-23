export function executeTypeI(instruction, sys) {
    if (instruction.typing.org === 'a') {
        sys.regs.general[ instruction.GPR.rt ] = instruction.does( 
            sys.regs.general[instruction.GPR.rs], instruction.GPR.imm 
        )

        sys.SetValueInViewRegister(
            sys.regs.general[ instruction.GPR.rt ], instruction.GPR.rt
        )

        sys.lastViewRegisterChanged = instruction.GPR.rt
    }

    if (instruction.typing.org === 'b' || instruction.typing.org === 'c' || instruction.typing.org === 'd') {
        
    }
}
