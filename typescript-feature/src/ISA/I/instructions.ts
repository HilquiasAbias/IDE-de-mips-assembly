import { uInt } from "../../core/helpers/general"
import { InstructionsConstants, OrganizationTypeConstants } from "./constants"

export const instructions = {
  addi: { 
    function: InstructionsConstants.ADDI_FUNCTION, 
    type: OrganizationTypeConstants.A_TYPE, 
    does: (rs: number, imm: number) => rs + imm
  },

  addiu: { 
    function: InstructionsConstants.ADDIU_FUNCTION,
    type: OrganizationTypeConstants.A_TYPE, 
    does: (rs: number, imm: number) => rs + uInt(imm)
  },

  andi: { 
    function: InstructionsConstants.ADDIU_FUNCTION, 
    type: OrganizationTypeConstants.A_TYPE, 
    does: (rs: number, imm: number) => rs & imm
  },

  beq: { 
    function: InstructionsConstants.ADDIU_FUNCTION, 
    type: OrganizationTypeConstants.B_TYPE, 
    does: (rs: number, rt: number) => rs === rt
  },

  bge: { 
    function: InstructionsConstants.BGE_FUNCTION, 
    type: OrganizationTypeConstants.B_TYPE, 
    does: (rs: number, rt: number) => rs >= rt
  },

  bgt: { 
    function: InstructionsConstants.BGT_FUNCTION, 
    type: OrganizationTypeConstants.B_TYPE, 
    does: (rs: number, rt: number) => rs > rt 
  },

  ble: { 
    function: InstructionsConstants.BLE_FUNCTION, 
    type: OrganizationTypeConstants.B_TYPE, 
    does: (rs: number, rt: number) => rs <= rt 
  },

  blt: { 
    function: InstructionsConstants.BLT_FUNCTION, 
    type: OrganizationTypeConstants.B_TYPE, 
    does: (rs: number, rt: number) => rs < rt 
  },

  bne: { 
    function: InstructionsConstants.BNE_FUNCTION, 
    type: OrganizationTypeConstants.B_TYPE, 
    does: (rs: number, rt: number) => rs !== rt
  },

  bgez: { 
    function: InstructionsConstants.BGEZ_FUNCTION, 
    type: OrganizationTypeConstants.C_TYPE, 
    does: (rs: number) => rs >= 0
  },

  bgtz: { 
    function: InstructionsConstants.BGTZ_FUNCTION, 
    type: OrganizationTypeConstants.D_TYPE, 
    does: (rs: number) => rs > 0
  },

  blez: { 
    function: InstructionsConstants.BLEZ_FUNCTION, 
    type: OrganizationTypeConstants.D_TYPE, 
    does: (rs: number) => rs <= 0  
  },

  bltz: { 
    function: InstructionsConstants.BLTZ_FUNCTION, 
    type: OrganizationTypeConstants.D_TYPE, 
    does: (rs: number) => rs < 0 
  },

  /*
  lb	rt, imm(rs)	100000	
  lbu	rt, imm(rs)	100100	
  lh	rt, imm(rs)	100001	
  lhu	rt, imm(rs)	100101
  */

  lui: { 
    function: InstructionsConstants.LUI_FUNCTION, 
    type: OrganizationTypeConstants.F_TYPE, 
    does: null 
  },

  lw: {
    function: InstructionsConstants.LW_FUNCTION,
    type: OrganizationTypeConstants.E_TYPE,
    does: null
  },

  /*
  lw	rt, imm(rs)	100011
  lwc1	rt, imm(rs)	110001
  */

  ori: { 
    function: InstructionsConstants.ORI_FUNCTION, 
    type: OrganizationTypeConstants.A_TYPE, 
    does: (rs: number, imm: number) => rs | imm 
  },

  /*
  sb	rt, imm(rs)	101000	
  */

  slti: { 
    function: InstructionsConstants.SLTI_FUNCTION, 
    type: OrganizationTypeConstants.A_TYPE, 
    does: (rs: number, imm: number) => rs < imm ? 1 : 0 
  },
  sltiu: { 
    function: InstructionsConstants.SLTIU_FUNCTION, 
    type: OrganizationTypeConstants.A_TYPE, 
    does: (rs: number, imm: number) => rs < uInt(imm) ? 1 : 0 
  },

  /*
  sh	rt, imm(rs)	101001	
  sw	rt, imm(rs)	101011	
  swc1  rt, imm(rs)	111001
  */

  xori: { 
    function: InstructionsConstants.XORI_FUNCTION, 
    type: OrganizationTypeConstants.A_TYPE, 
    does: (rs: number, imm: number) => rs ^ imm 
  }
}
