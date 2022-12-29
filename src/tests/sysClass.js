import memory from "../system/memory.js";
// import view from "./viewRegisters.js";
import { convertDecimalToAddressHex, formatAddress, convertHexToDecimal } from "../system/toolkit.js";
import { executeTypeI } from '../system/ISA/I/execution.js'
import { executeTypeR } from '../system/ISA/R/execution.js'
import { executeTypeJ } from '../system/ISA/J/execution.js'

class Sys {
    constructor() {
        this.regs = {
            $0: 0, $1: 0, $2: 0, $3: 0, $4: 0, $5: 0, $6: 0, $7: 0, $8: 0, $9: 0,
            $10: 0, $11: 0, $12: 0, $13: 0, $14: 0, $15: 0, $16: 0, $17: 0, $18: 0, $19: 0,
            $20: 0, $21: 0, $22: 0, $23: 0, $24: 0, $25: 0, $26: 0, $27: 0, $28: 0, $29: 0,
            $30: 0, $31: 0, pc: 0, hi: 0, lo: 0, currentIndex: null
        },
        this.memory,
        this.addressCount = 0,
        this.instructions = [],
        this.regsStackTimeline = [],
        this.executedInstructionsStack = [],
        this.executionInstructionCount = 0,
        this.instructionExecuted = null,
        this.instructionExecutedIndex = null,
        this.initialAssembly = true
    }

    call() {
        if (this.regs.$2 === 1) { // integer to print
            Console.dataOut(this.regs.$4, 'value', '')
            return
        }
    
        else if (this.regs.$2 === 2) console.log(this.regs.$4.toFixed(2)); // float to print
        else if (this.regs.$2 === 3) console.log(this.regs.$4.toFixed(1)); // double to print
        else if (this.regs.$2 === 5) {
            this.regs.$2 = parseInt(prompt());
            this.SetValueInViewRegister(this.regs.$2, '$2')
        } // $2 contains integer read
        else if (this.regs.$2 === 6) this.regs.$2 = parseFloat(prompt()); // $2 contains float read
        else if (this.regs.$2 === 7) this.regs.$2 = parseFloat(prompt()); // $2 contains double read
        else if (this.regs.$2 === 8) this.regs.$2 = prompt(); // $2 contains string read
        // else if (this.regs.$2 === 9) // allocate heap regs
        else if (this.regs.$2 === 10) {
            Console.dataOut(null, 'exit', 'Programa finalizado!')
            this.Clean();
        };
    }

    clean() {
        this.regs = {
            $0: 0, $1: 0, $2: 0, $3: 0, $4: 0, $5: 0, $6: 0, $7: 0, $8: 0, $9: 0,
            $10: 0, $11: 0, $12: 0, $13: 0, $14: 0, $15: 0, $16: 0, $17: 0, $18: 0, $19: 0,
            $20: 0, $21: 0, $22: 0, $23: 0, $24: 0, $25: 0, $26: 0, $27: 0, $28: 0, $29: 0,
            $30: 0, $31: 0, pc: 0, hi: 0, lo: 0, currentIndex: null
        },
        this.memory,
        this.addressCount = 0,
        this.instructions = [],
        this.regsStackTimeline = [],
        this.executedInstructionsStack = [],
        this.executionInstructionCount = 0,
        this.instructionExecuted = null,
        this.instructionExecutedIndex = null,
        this.initialAssembly = true
    }

    onlyLabel(instruction, regsSpace) {
        return {
            address: formatAddress(regsSpace),
            onlyLabel: true,
            label: [ instruction.label ]
        }
    }

    
}
