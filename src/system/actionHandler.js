import { handleUserInput, organizeInstructions,  } from "./toolkit.js"

import { formatInstruction as formatI } from './ISA/I/manager.js'
import { formatInstruction as formatR } from './ISA/R/manager.js'
import { formatInstruction as formatJ } from './ISA/J/manager.js'

import mountHandler from "./errorHandling/mountHandler.js"
import sys from "./sys.js"

export default (action, data) => {
    if (action === 'treatInput') {
        //if (data === '') mountHandler

        const firstTreatement = organizeInstructions( handleUserInput(data) )
        //return firstTreatement
        return sys.SystemInputTreatement(firstTreatement)
    }

    if (action === 'formatInstructionForTypeI') {
        return formatI( ...data )
    }
        
    if (action === 'formatInstructionForTypeR') {
        return formatR( ...data )
    }
        
    if (action === 'formatInstructionForTypeJ') {
        return formatJ( ...data )
    }
}
