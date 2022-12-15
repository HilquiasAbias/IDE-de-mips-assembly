import { dataOut } from "../dataEntryAndOut"

export default (error) => {
    if (error === 'tryBackOneStepWithoutInstructions') {
        dataOut(null, 'error', 'Você tentou retroceder uma etapa, mas não instruções.')
    }
    
    // ...
}
