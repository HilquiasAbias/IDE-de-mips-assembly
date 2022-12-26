import { convertHexToDecimal } from '../../toolkit.js'

export function executeTypeJ(instruction, sys) {
    if (instruction.func === 'j') {
        const target = sys.instructions.find( instru => { if (checkInstruction(instruction, instru)) return instru } ) // instru.label === instruction.target
        const value = convertHexToDecimal(target.address)
        console.log(target);

        sys.regs.pc = value
        sys.SetValueInViewRegister(value, 'pc')
    }

    if (instruction.func === 'jal') {}
}

function checkInstruction(base, current) {
    if (typeof current.label === 'string' && current.label === base.target) 
        return current

    if (typeof current.label === [] && current.label.contains(base.target))
        return current
}
