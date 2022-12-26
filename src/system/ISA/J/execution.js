import { convertHexToDecimal } from '../../toolkit.js'

export function executeTypeJ(instruction, sys) {
    if (instruction.func === 'j') {
        const target = sys.instructions.find( instru => instru.label === instruction.target )
        console.log(target);
        const value = convertHexToDecimal(target.address)
        sys.regs.pc = value
        sys.SetValueInViewRegister(value, 'pc')
    }

    if (instruction.func === 'jal') {}
}
