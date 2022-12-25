import sys from './system/sys.js'
import errorHandler from './system/errorHandling/manager.js'
import actionHandler from './system/actionHandler.js'
import { mountView } from './system/view.js'

import { isTypeI } from './system/ISA/I/manager.js'
import { isTypeR } from './system/ISA/R/manager.js'
import { isTypeJ } from './system/ISA/J/manager.js'

import { convertHexToDecimal } from './system/toolkit.js'

const input = document.querySelector('.input')
//const output = document.querySelector('.output')
const address = document.querySelector('.address')
const mount = document.querySelector('.mount')
const run = document.querySelector('.run')
const step = document.querySelector('.step')
const back = document.querySelector('.back')

mount.addEventListener('click', () => {
    if (!sys.initialAssembly) sys.Clean()

    const inputInstructions = actionHandler( 'treatInput', (input.value) )
    console.log(inputInstructions);
    
    inputInstructions.forEach( (instruction, index) => {
        if ( isTypeI( instruction.func ) ) {
            const formattedInstrucion = actionHandler( 'formatInstructionForTypeI', [ instruction, sys.addressCount ] )

            sys.instructions.push(formattedInstrucion)

            sys.viewInformations.push({
                address: formattedInstrucion.address,
                code: formattedInstrucion.code,
                line: index + 1
            })

            sys.addressCount += 4

            return
        }
        
        if ( isTypeR( instruction.func ) ) {
            const formattedInstrucion = actionHandler( 'formatInstructionForTypeR', [ instruction, sys.addressCount ] )

            sys.instructions.push(formattedInstrucion)

            sys.viewInformations.push({
                address: formattedInstrucion.address,
                code: formattedInstrucion.code,
                line: index + 1
            })

            sys.addressCount += 4

            return
        }
        
        if ( isTypeJ( instruction.func ) ) {
            const instructionWithLabel = sys.instructions.find( instru => instru.label === instruction.values[0] )
            console.log(instructionWithLabel);
            const instructionsBeforeLabel = sys.viewInformations.find( instru => instru.address === instructionWithLabel.address )
            console.log(instructionsBeforeLabel);
            const formattedInstrucion = actionHandler( 'formatInstructionForTypeJ', [ instruction, sys.addressCount, sys.instructions.viewInformations[instructionsBeforeLabel.address].line-1 ] )
            console.log(formattedInstrucion);
            sys.instructions.push(formattedInstrucion)

            sys.viewInformations.push({
                address: formattedInstrucion.address,
                code: formattedInstrucion.code,
                line: index + 1
            })

            sys.addressCount += 4

            return
        }

        if (!instruction.values && !instruction.func) { // TODO: tratar melhor este caso do sistema.
            sys.instructions.push(
                sys.OnlyLabel( instruction, sys.addressCount )
            )
        }

    })
    
    // TODO: enviar dados para montagem da view
    mountView( sys.viewInformations )
    
    sys.initialAssembly = false

    sys.regs.pc = convertHexToDecimal(sys.instructions[0].address)
    sys.SetValueInViewRegister(sys.regs.pc, 'pc')

    console.log('mounted')
    console.log(sys)
})

run.addEventListener('click', () => {
    console.log('run')
    console.log(Object.assign( {}, sys ))

    if (sys.instructions.length === 0) {
        errorHandler('run', 'tryToRunWithoutInstructions')
    }

    // TODO: definir error e tratar
    //if (sys.lastInstructionExecuted !== 0) return
    
    // action: continueExecutionOfRemainingInstructions
    // if (index <= sys.lastInstructionExecuted) continue
    sys.instructions.forEach(() => {
        sys.Execute()
        sys.lastInstructionExecuted++

        if (sys.lastInstructionExecuted <= sys.instructions.length - 1) {
            const address = sys.instructions[ sys.lastInstructionExecuted ].address
            
            sys.regs.pc = convertHexToDecimal(address)
            sys.SetValueInViewRegister(sys.regs.pc, 'pc')
        }

        console.log('run in step ', sys.lastInstructionExecuted)
        console.log(sys)
    })
})

step.addEventListener('click', () => {
    if (sys.instructions.length === 0) 
        return errorHandler('step', 'tryToMoveOneStepWithoutInstructions')

    sys.regsStackTimeline.push( Object.assign( {}, sys.regs ) )

    sys.Execute()
    sys.lastInstructionExecuted++
    
    if (sys.lastInstructionExecuted <= sys.instructions.length - 1) {
        const address = sys.instructions[ sys.lastInstructionExecuted ].address

        sys.regs.pc = convertHexToDecimal(address)
        sys.SetValueInViewRegister(sys.regs.pc, 'pc')
    }

    console.log('step ', sys.lastInstructionExecuted)
    console.log(sys)
})

back.addEventListener('click', () => {
    if (sys.instructions.length === 0) {
        errorHandler('back', 'tryBackOneStepWithoutInstructions')
        return
    }

    --sys.lastInstructionExecuted
    sys.regs = sys.regsStackTimeline.pop()
    sys.regs.pc = convertHexToDecimal(sys.instructions[sys.lastInstructionExecuted].address)
    sys.SetValueInViewRegister(sys.regs.pc, 'pc')

    console.log('back ', sys.lastInstructionExecuted)
    console.log(sys)
});
