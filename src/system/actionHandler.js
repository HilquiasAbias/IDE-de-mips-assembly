import { handleUserInput, organizeInstructions } from "./toolkit"

import { formatInstruction as formatI } from './scripts/itype/iTypeManager.js'
import { formatInstruction as formatR } from './scripts/rtype/rTypeManager.js'
import { formatInstruction as formatJ } from './scripts/jtype/jTypeManager.js'

export default (action, data) => {
    if (action === 'treatInput') {
        return organizeInstructions( handleUserInput(data) )
    }

    if (action === 'formatInstructionForTypeI') {
        return formatI( data[0], data[1] )
    }
        
    if (action === 'formatInstructionForTypeR') {
        return formatR( data[0], data[1] )
    }
        
    if (action === 'formatInstructionForTypeJ') {
        return formatJ( data[0], data[1] )
    }
}
