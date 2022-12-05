import * as formatting from './scripts/tools/FormattingTools.js';
import sys from './scripts/tools/sys.js'

import * as rType from './scripts/rtype/rTypeManager.js';
import * as iType from './scripts/itype/iTypeManager.js';
import * as jType from './scripts/jtype/jTypeManager.js';

const input = document.querySelector('.input');
const output = document.querySelector('.output');
const address = document.querySelector('.address');
const mount = document.querySelector('.mount');
const run = document.querySelector('.run');
const step = document.querySelector('.step');
const back = document.querySelector('.back');

mount.addEventListener('click', () => {
    // TODO: Função para receber o input e tratar todos os casos de escrita.
    //       como erros, espaços em branco na mesma linha, espaço em branco entrelinhas, case sensitive, etc...

    sys.Clean();

    const inputInstructions = formatting.handleUserInput(input.value)
    const organizedInstructions = formatting.organizeInstructions(inputInstructions)
    
    // console.log(inputInstructions);
    // console.log(organizedInstructions);
    

    organizedInstructions.forEach( (instruction, index) => { // [ { label: 'main', func: 'addi', values: ['$2', '$0', '5']}, {...}, {...}, ...]
        if ( iType.isTypeI( instruction.func ) ) {
            const res = iType.formatInstruction( instruction, sys.addressCount += 4 )

            sys.instructions.push(res);
            sys.viewInformations.push({
                address: res.address,
                hex: res.hex,
                line: index + 1
            });

            return
        }
        
        if ( rType.isTypeR( instruction.func ) ) {
            const res = rType.formatInstruction( instruction, sys.addressCount += 4 )

            sys.instructions.push(res);
            sys.viewInformations.push({
                address: res.address,
                hex: res.hex,
                line: index + 1
            });

            return
        }
        
        // if ( jType.isTypeJ( instruction.func ) ) {
        //     const res = jType.formatInstruction( instruction, sys.addressCount += 4 )
        
        //     sys.instructions.push(res);
        //     sys.viewInformations.push({
        //         address: res.address,
        //         hex: res.hex,
        //         line: index + 1
        //     });
        // }

        if (!instruction.values && !instruction.func) {
            sys.instructions.push(
                sys.OnlyLabel( instruction, sys.addressCount += 4 )
            )
        }
    });
    sys.memory.pc = formatting.convertHexToDecimal( sys.instructions[ sys.lastInstructionExecuted ].address )

    // sys.viewInformations.forEach()

    console.log('mounted');
    console.log(sys);
});

run.addEventListener('click', () => {
    console.log('run');
    console.log(Object.assign( {}, sys ));

    if (sys.instructions.length === 0) return; // TODO: Tratar melhor essa joça
    //if (sys.lastInstructionExecuted !== 0) return; // TODO: Tratar melhor essa joça
    
    sys.instructions.forEach((instruction, index) => {
        // if (index <= sys.lastInstructionExecuted) continue;

        //execution.executionFlow( instruction, sys )

        sys.Execute()

        sys.lastInstructionExecuted++

        if (sys.lastInstructionExecuted <= sys.instructions.length - 1) {
            sys.memory.pc = formatting.convertHexToDecimal(
                sys.instructions[ sys.lastInstructionExecuted ].address
            )
        }

        console.log('run in step ', sys.lastInstructionExecuted);
        console.log(sys);
    })
});

step.addEventListener('click', () => {
    if (sys.instructions.length === 0) return; // TODO: Tratar melhor essa joça

    sys.memoryStackTimeline.push(
        Object.assign( {}, sys.memory )
    );

    sys.Execute()
    //execution.executionFlow( instruction, sys );
    sys.lastInstructionExecuted++
    
    if (sys.lastInstructionExecuted <= sys.instructions.length - 1) {
        sys.memory.pc = formatting.convertHexToDecimal(
            sys.instructions[ sys.lastInstructionExecuted ].address
        )
    }

    console.log('step ', sys.lastInstructionExecuted);
    console.log(sys);
});

back.addEventListener('click', () => {
    if (sys.instructions.length === 0) return; // TODO: Tratar melhor essa joça

    sys.memory = sys.memoryStackTimeline.pop();
    --sys.lastInstructionExecuted;
    sys.memory.pc = formatting.convertHexToDecimal(sys.instructions[sys.lastInstructionExecuted].address)

    console.log('back ', sys.lastInstructionExecuted);
    console.log(sys);
});
