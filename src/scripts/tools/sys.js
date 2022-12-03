import * as tools from "./FormattingTools.js";
import { executeTypeI } from '../itype/execution.js'
import { executeTypeR } from '../rtype/execution.js'
//import { executeTypeJ } from '../jtype/execution.js'

const sys = { 
    memory: {
        $0: 0, $1: 0, $2: 0, $3: 0, $4: 0, $5: 0, $6: 0, $7: 0, $8: 0, $9: 0,
        $10: 1, $11: 1, $12: 0, $13: 0, $14: 0, $15: 0, $16: 0, $17: 0, $18: 0, $19: 0,
        $20: 0, $21: 0, $22: 0, $23: 0, $24: 0, $25: 0, $26: 0, $27: 0, $28: 0, $29: 0,
        $30: 0, $31: 0, pc: 0, hi: 5, lo: 6
    },
    addressCount: 0,
    instructions: [],
    memoryStackTimeline: [],
    viewInformations: [],
    lastInstructionExecuted: 0
}

Object.prototype.Call = () => {
    if (sys.memory.$2 === 1) console.log(sys.memory.$4); // integer to print
    else if (sys.memory.$2 === 2) console.log(sys.memory.$4.toFixed(2)); // integer to float
    else if (sys.memory.$2 === 3) console.log(sys.memory.$4.toFixed(1)); // integer to double
    else if (sys.memory.$2 === 5) sys.memory.$2 = parseInt(prompt()); // $2 contains integer read
    else if (sys.memory.$2 === 6) sys.memory.$2 = parseFloat(prompt()); // $2 contains float read
    else if (sys.memory.$2 === 7) sys.memory.$2 = parseFloat(prompt()); // $2 contains double read
    else if (sys.memory.$2 === 8) sys.memory.$2 = prompt(); // $2 contains string read
    // else if (sys.memory.$2 === 9) // allocate heap memory
    else if (sys.memory.$2 === 10) {
        console.log('encerra programa!');
        sys.Clean();
    };

    // TODO: Completar chamada do sistema
}

Object.prototype.Clean = () => {
    sys.memory = {
        $0: 0, $1: 0, $2: 0, $3: 0, $4: 0, $5: 0, $6: 0, $7: 0, $8: 0, $9: 0,
        $10: 0, $11: 0, $12: 0, $13: 0, $14: 0, $15: 0, $16: 0, $17: 0, $18: 0, $19: 0,
        $20: 0, $21: 0, $22: 0, $23: 0, $24: 0, $25: 0, $26: 0, $27: 0, $28: 0, $29: 0,
        $30: 0, $31: 0, pc: 0, hi: 0, lo: 0
    }
    sys.addressCount = 0;
    sys.instructions = [];
    sys.memoryStackTimeline = [];
    sys.viewInformations = [];
    sys.lastInstructionExecuted = 0;
}

Object.prototype.OnlyLabel = (instruction, memorySpace) => {
    return {
        address: tools.formatAddress(memorySpace), // 0x00000004
        hex: null,
        do: null,
        registers: null,
        typing: null,
        label: instruction.label
    }
}

Object.prototype.Execute = () => {
    console.log('Execute()');
    const instruction = sys.instructions.find(
        instruction => instruction.address === tools.convertDecimalToAddressHex( sys.memory.pc )
    )
    
    if (instruction.do || instruction.syscall) {
        if (instruction.typing.type === "i") {
            return executeTypeI(instruction, sys)
        }
    
        if (instruction.typing.type === "r") {
            return executeTypeR(instruction, sys)
        }
    
        if (instruction.typing.type === "j") {
            
        }
    }
}

Object.prototype.Jump = (instruction, op) => {
    if (op === 'j') 
        sys.memory.pc = tools.convertHexToDecimal(instruction.address)

    
}

export default sys;
