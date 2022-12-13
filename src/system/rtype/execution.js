import { getLowOrder, getHighOrder } from "../toolkit.js"

export function executeTypeR(instruction, sys) {
    if (instruction.typing.org === 'a') {
        sys.regs[ instruction.GPR.rd ] = instruction.does( sys.regs[instruction.GPR.rs], sys.regs[instruction.GPR.rt] )
    }

    if (instruction.typing.org === 'b') {}
    
    if (instruction.typing.org === 'c') {
        const res = instruction.does( sys.regs[instruction.GPR.rs], sys.regs[instruction.GPR.rt] )

        if (instruction.func === 'mult' || instruction.func === 'multu') {
            sys.regs.hi = getHighOrder(res)
            sys.regs.lo = getLowOrder(res)

            return
        }

        sys.regs.hi = res[0]
        sys.regs.lo = res[1]
    }

    if (instruction.typing.org === 'd') {}

    if (instruction.typing.org === 'e') {}

    if (instruction.typing.org === 'f') {}

    if (instruction.typing.org === 'g') {}

    if (instruction.typing.org === 'h') {}
}
