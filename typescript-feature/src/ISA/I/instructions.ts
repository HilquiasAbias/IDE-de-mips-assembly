import { uInt } from "../../core/helpers/general"

export const instructions = {
  addi: { 
    opcode: '001000', 
    type: 'a', 
    does: (rs: number, imm: number) => rs + imm
  },

  addiu: { 
    opcode: '001001',
    type: 'a', 
    does: (rs: number, imm: number) => rs + uInt(imm)
  },

  andi: { 
    opcode: '001100', 
    type: 'a', 
    does: (rs: number, imm: number) => rs & imm
  },

  beq: { 
    opcode: '000100', 
    type: 'b', 
    does: (rs: number, rt: number) => rs === rt
  },

  bge: { 
    opcode: '000001', 
    type: 'b', 
    does: (rs: number, rt: number) => rs >= rt
  },

  bgt: { 
    opcode: '000111', 
    type: 'b', 
    does: (rs: number, rt: number) => rs > rt 
  },

  ble: { 
    opcode: '000110', 
    type: 'b', 
    does: (rs: number, rt: number) => rs <= rt 
  },

  blt: { 
    opcode: '000001', 
    type: 'b', 
    does: (rs: number, rt: number) => rs < rt 
  },

  bne: { 
    opcode: '000100', 
    type: 'b', 
    does: (rs: number, rt: number) => rs !== rt
  },

  bgez: { 
    opcode: '000001', 
    type: 'c', 
    does: (rs: number) => rs >= 0
  },

  bgtz: { 
    opcode: '000111', 
    type: 'd', 
    does: (rs: number) => rs > 0
  },

  blez: { 
    opcode: '000110', 
    type: 'd', 
    does: (rs: number) => rs <= 0  
  },

  bltz: { 
    opcode: '000001', 
    type: 'd', 
    does: (rs: number) => rs < 0 
  },

  /*
  lb	rt, imm(rs)	100000	
  lbu	rt, imm(rs)	100100	
  lh	rt, imm(rs)	100001	
  lhu	rt, imm(rs)	100101
  */

  lui: { 
    opcode: '001111', 
    type: 'f', 
    does: null 
  },

  lw: {
    opcode: '100011',
    type: 'e',
    does: null
  },
  /*
  lw	rt, imm(rs)	100011
  lwc1	rt, imm(rs)	110001
  */

  ori: { 
    opcode: '001101', 
    type: 'a', 
    does: (rs: number, imm: number) => rs | imm 
  },

  /*
  sb	rt, imm(rs)	101000	
  */

  slti: { 
    opcode: '001010', 
    type: 'a', 
    does: (rs: number, imm: number) => rs < imm ? 1 : 0 
  },
  sltiu: { 
    opcode: '001011', 
    type: 'a', 
    does: (rs: number, imm: number) => rs < uInt(imm) ? 1 : 0 
  },

  /*
  sh	rt, imm(rs)	101001	
  sw	rt, imm(rs)	101011	
  swc1  rt, imm(rs)	111001
  */

  xori: { 
    opcode: '001110', 
    type: 'a', 
    does: (rs: number, imm: number) => rs ^ imm 
  }
}