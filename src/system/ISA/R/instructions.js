import * as op from './functions.js'

export default {
    add: { 
        function: '100000', 
        type: 'a', 
        does: op.add
    },
    addu: { 
        function: '100001', 
        type: 'a', 
        does: op.addu
    },
    and: { 
        function: '100100', 
        type: 'a', 
        does: op.and
    },
    break: { 
        function: '001101', 
        type: 'b',
        does: op.Break
    },
    div: { 
        function: '011010', 
        type: 'c', 
        does: op.div
    },
    divu: { 
        function: '011011', 
        type: 'c', 
        does: 
    },
    jalr: { 
        function: '001001', 
        type: 'h', 
        does: op.jalr 
    },
    jr: { 
        function: '001000', 
        type: 'g', 
        does: null 
    },
    mfhi: { 
        function: '010000', 
        type: 'd', 
        does: null
    },
    mflo: { 
        function: '010010', 
        type: 'd', 
        does: null
    },
    mthi: { 
        function: '010001', 
        type: 'g', 
        does: null
    },
    mtlo: { 
        function: '010011', 
        type: 'g', 
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
        does: (rs, rt) => uInt(rs * rt)
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
        type: 'e', 
        does: (rt, sa) => rt << sa // INCORRETO!
    },
    sllv: { 
        function: '000100', 
        type: 'f', 
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
        type: 'e', 
        does: (rt, sa) => rt >> sa
    },
    srav: { 
        function: '000111', 
        type: 'f', 
        does: null
    },
    srl: { 
        function: '000010', 
        type: 'e', 
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
