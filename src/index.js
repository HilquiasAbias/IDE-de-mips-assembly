// import { sys, actionHandler, errorHandler } from './scripts/system' // isso funciona ???
import sys from './system/sys.js'
import errorHandler from './system/errorHandlers/main.js'
import actionHandler from './system/actionHandler.js'

import { isTypeI } from './system/itype/iTypeManager.js'
import { isTypeR } from './system/rtype/rTypeManager.js'
import { isTypeJ } from './system/jtype/jTypeManager.js'

import { convertHexToDecimal } from './system/toolkit.js'

const input = document.querySelector('.input')
const output = document.querySelector('.output')
const address = document.querySelector('.address')
const mount = document.querySelector('.mount')
const run = document.querySelector('.run')
const step = document.querySelector('.step')
const back = document.querySelector('.back')

mount.addEventListener('click', () => {
    // TODO: Função para receber o input e tratar todos os casos de escrita.
    //       como erros, espaços em branco na mesma linha, espaço em branco entrelinhas, case sensitive, etc...

    if (!sys.initialAssembly) {
        sys.Clean()
    }

    const inputInstructions = actionHandler( 'treatInput', (input.value) )
    
    inputInstructions.forEach( (instruction, index) => { // [ { label: 'main', func: 'addi', values: ['$2', '$0', '5']}, {...}, {...}, ...]
        if ( isTypeI( instruction.func ) ) {
            const formattedInstrucion = actionHandler( 'formatInstructionForTypeI', [ instruction, sys.addressCount ] )

            sys.instructions.push(formattedInstrucion)

            sys.viewInformations.push({
                address: formattedInstrucion.address,
                code: formattedInstrucion.code,
                line: index
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
                line: index
            })

            sys.addressCount += 4

            return
        }
        
        if ( isTypeJ( instruction.func ) ) {
            const formattedInstrucion = actionHandler( 'formatInstructionForTypeJ', [ instruction, sys.addressCount ] )

            sys.instructions.push(formattedInstrucion)

            sys.viewInformations.push({
                address: formattedInstrucion.address,
                code: formattedInstrucion.code,
                line: index
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
    
    // console.log(parseInt(sys.instructions[0].address, 16))
    // sys.memory.pc = convertHexToDecimal( sys.instructions[0].address )
    
    // TODO: enviar dados para montagem da view
    
    sys.initialAssembly = false
    
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
    
    sys.instructions.forEach(() => {
        // action: continueExecutionOfRemainingInstructions
        // if (index <= sys.lastInstructionExecuted) continue

        sys.Execute()

        sys.lastInstructionExecuted++

        if (sys.lastInstructionExecuted <= sys.instructions.length - 1) {
            const address = sys.instructions[ sys.lastInstructionExecuted ].address
    
            sys.regs.pc = convertHexToDecimal(address)
        }

        console.log('run in step ', sys.lastInstructionExecuted)
        console.log(sys)
    })
})

step.addEventListener('click', () => {
    if (sys.instructions.length === 0) {
        errorHandler('step', 'tryToMoveOneStepWithoutInstructions')
    }

    sys.regsStackTimeline.push(
        Object.assign( {}, sys.regs )
    )

    sys.Execute()
    sys.lastInstructionExecuted++
    
    if (sys.lastInstructionExecuted <= sys.instructions.length - 1) {
        const address = sys.instructions[ sys.lastInstructionExecuted ].address

        sys.regs.pc = convertHexToDecimal(address)
    }

    console.log('step ', sys.lastInstructionExecuted)
    console.log(sys)
})

back.addEventListener('click', () => {
    if (sys.instructions.length === 0) {
        errorHandler('back', 'tryBackOneStepWithoutInstructions')
    }

    sys.regs = sys.regsStackTimeline.pop()
    sys.regs.pc = convertHexToDecimal(sys.instructions[sys.lastInstructionExecuted].address)
    --sys.lastInstructionExecuted

    console.log('back ', sys.lastInstructionExecuted)
    console.log(sys)
});
