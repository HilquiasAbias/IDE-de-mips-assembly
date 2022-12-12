import memory from "./memory.js";
import * as tools from "./toolkit.js";
import { executeTypeI } from '../itype/execution.js'
import { executeTypeR } from '../rtype/execution.js'
//import { executeTypeJ } from '../jtype/execution.js'

const sys = { 
    regs: {
        $0: 0, $1: 0, $2: 0, $3: 0, $4: 0, $5: 0, $6: 0, $7: 0, $8: 0, $9: 0,
        $10: 0, $11: 0, $12: 0, $13: 0, $14: 0, $15: 0, $16: 0, $17: 0, $18: 0, $19: 0,
        $20: 0, $21: 0, $22: 0, $23: 0, $24: 0, $25: 0, $26: 0, $27: 0, $28: 0, $29: 0,
        $30: 0, $31: 0, pc: 4194304, hi: 0, lo: 0
    },
    memory: memory, // { '0x10010000': 0 }
    addressCount: 0,
    instructions: [],
    regsStackTimeline: [],
    viewInformations: [],
    lastInstructionExecuted: 0,
    initialAssembly: true
}

Object.prototype.Data = () => {}

Object.prototype.Text = () => {}

Object.prototype.Word = () => {}

Object.prototype.ToOutput = (data) => {}

Object.prototype.Call = () => {
    if (sys.regs.$2 === 1) console.log(sys.regs.$4); // integer to print
    else if (sys.regs.$2 === 2) console.log(sys.regs.$4.toFixed(2)); // float to print
    else if (sys.regs.$2 === 3) console.log(sys.regs.$4.toFixed(1)); // double to print
    else if (sys.regs.$2 === 5) sys.regs.$2 = parseInt(prompt()); // $2 contains integer read
    else if (sys.regs.$2 === 6) sys.regs.$2 = parseFloat(prompt()); // $2 contains float read
    else if (sys.regs.$2 === 7) sys.regs.$2 = parseFloat(prompt()); // $2 contains double read
    else if (sys.regs.$2 === 8) sys.regs.$2 = prompt(); // $2 contains string read
    // else if (sys.regs.$2 === 9) // allocate heap regs
    else if (sys.regs.$2 === 10) {
        console.log('encerra programa!');
        sys.Clean();
    };

    // TODO: Completar chamada do sistema
}

Object.prototype.Clean = () => {
    sys.regs = {
        $0: 0, $1: 0, $2: 0, $3: 0, $4: 0, $5: 0, $6: 0, $7: 0, $8: 0, $9: 0,
        $10: 0, $11: 0, $12: 0, $13: 0, $14: 0, $15: 0, $16: 0, $17: 0, $18: 0, $19: 0,
        $20: 0, $21: 0, $22: 0, $23: 0, $24: 0, $25: 0, $26: 0, $27: 0, $28: 0, $29: 0,
        $30: 0, $31: 0, pc: 0, hi: 0, lo: 0
    }
    sys.addressCount = 0;
    sys.instructions = [];
    sys.regsStackTimeline = [];
    sys.viewInformations = [];
    sys.lastInstructionExecuted = 0;
}

Object.prototype.OnlyLabel = (instruction, regsSpace) => {
    return {
        address: tools.formatAddress(regsSpace), // 0x00000004
        onlyLabel: true,
        label: instruction.label
    }
}

Object.prototype.Execute = () => {
    console.log('Execute()');
    const instruction = sys.instructions.find(
        instruction => instruction.address === tools.convertDecimalToAddressHex( sys.regs.pc )
    )
    console.log(instruction);
    if (instruction.onlyLabel) { console.log('only label'); return; }

    if (instruction.do || instruction.syscall) {
        if (instruction.typing.type === "i") {
            return executeTypeI(instruction, sys)
        }
    
        if (instruction.typing.type === "r") {
            return executeTypeR(instruction, sys)
        }
    
        if (instruction.typing.type === "j") {
            // return executeTypeJ(instruction, sys)
        }
    }
}

Object.prototype.Branch = (instruction, op) => {
    if (op === 'j') 
        sys.regs.pc = tools.convertHexToDecimal(instruction.address)

    
}

export default sys;
