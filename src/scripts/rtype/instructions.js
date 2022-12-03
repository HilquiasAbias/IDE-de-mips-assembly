import sys from '../tools/sys.js'
import { uInt } from '../tools/FormattingTools.js'

export default {
    add: { 
        function: '100000', 
        type: 'a', 
        does: (rs, rt) => rs + rt // (rd, rs, rt) => rd = rs + rt ???
    },
    addu: { 
        function: '100001', 
        type: 'a', 
        does: (rs, rt) => uInt(rs + rt)
    },
    and: { 
        function: '100100', 
        type: 'a', 
        does: (rs, rt) => rs & rt 
    },
    break: { 
        function: '001101', 
        type: 'b' 
    },
    div: { 
        function: '011010', 
        type: 'c', 
        does: (rs, rt) => { sys.memory.hi = rs % rt; sys.memory.lo = rs / rt; }
    },
    divu: { 
        function: '011011', 
        type: 'c', 
        does: (rs, rt) => rs / rt 
    },
    jalr: { 
        function: '001001', 
        type: 'i', 
        does: null 
    },
    jr: { 
        function: '001000', 
        type: 'h', 
        does: null 
    },
    mfhi: { 
        function: '010000', 
        type: 'd', 
        does: () => {
            console.log(sys);
            
            return sys.memory.hi
        }
    },
    mflo: { 
        function: '010010', 
        type: 'd', 
        does: (rs) => { rs = sys.memory.lo }
    },
    mthi: { 
        function: '010001', 
        type: 'h', 
        does: null
    },
    mtlo: { 
        function: '010011', 
        type: 'h', 
        does: null
    },
    mult: { 
        function: '011000', 
        type: 'c', 
        does: (rs, rt) => rs * rt
    },
    multu: { 
        function: '011001', 
        type: 'c', 
        does: (rs, rt) => rs * rt
    },
    nor: { 
        function: '100111', 
        type: 'a', 
        does: (rs, rt) => ~(rs|rt)
    },
    or: { 
        function: '100101', 
        type: 'a', 
        does: (rs, rt) => rs | rt
    },
    sll: {
        function: '000000', 
        type: 'f', 
        does: (rt, sa) => rt << sa // INCORRETO!
    },
    sllv: { 
        function: '000100', 
        type: 'g', 
        does: null
    },
    slt: { 
        function: '101010', 
        type: 'a', 
        does: (rs, rt) => rs < rt ? 1 : 0
    },
    sltu: { 
        function: '101011', 
        type: 'a', 
        does: (rs, rt) => rs < rt ? 1 : 0
    },
    sra: { 
        function: '000011', 
        type: 'f', 
        does: (rt, sa) => rt >> sa
    },
    srav: { 
        function: '000111', 
        type: 'f', 
        does: null
    },
    srl: { 
        function: '000010', 
        type: 'f', 
        does: (rt, sa) => rt >> sa
    },
    srlv: { 
        function: '000110', 
        type: 'f', 
        does: null
    },
    sub: { 
        function: '100010', 
        type: 'a', 
        does: (rs, rt) => rs - rt
    },
    subu: { 
        function: '100011', 
        type: 'a', 
        does: (rs, rt) => rs - rt
    },
    syscall: { 
        function: '001100', 
        type: 'b', 
        does: null
    },
    xor: { 
        function: '100110', 
        type: 'a', 
        does: (rs, rt) => rs ^ rt
    }
}
