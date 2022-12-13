import mountHandler from './mountHandler'
import runHandler from './runHandler'
import stepHandler from './stepHandler'
import backHandler from './backHandler'

export default (module, error) => {
    if (module === 'mount'){ 
        mountHandler(error)
    }
    
    if (module === 'run') {
        runHandler(error)
    }
    
    if (module === 'step') {
        stepHandler(error)
    }
    
    if (module === 'back') {
        backHandler(error)
    }
}
