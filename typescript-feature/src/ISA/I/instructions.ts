import { uInt } from "../../core/utils/general"
import { InstructionsConstants, OrganizationTypeConstants } from "./constants"

export class ConstraintsInstructions {
  public static readonly addi = { 
    function: InstructionsConstants.ADDI_FUNCTION, 
    type: OrganizationTypeConstants.A_TYPE, 
    run: (rs: number, imm: number) => rs + imm
  }

  public static readonly addiu = { 
    function: InstructionsConstants.ADDIU_FUNCTION,
    type: OrganizationTypeConstants.A_TYPE, 
    run: (rs: number, imm: number) => rs + uInt(imm)
  }

  public static readonly andi = { 
    function: InstructionsConstants.ADDIU_FUNCTION, 
    type: OrganizationTypeConstants.A_TYPE, 
    run: (rs: number, imm: number) => rs & imm
  }

  public static readonly beq = { 
    function: InstructionsConstants.ADDIU_FUNCTION, 
    type: OrganizationTypeConstants.B_TYPE, 
    run: (rs: number, rt: number) => rs === rt
  }

  public static readonly bge = { 
    function: InstructionsConstants.BGE_FUNCTION, 
    type: OrganizationTypeConstants.B_TYPE, 
    run: (rs: number, rt: number) => rs >= rt
  }

  public static readonly bgt = { 
    function: InstructionsConstants.BGT_FUNCTION, 
    type: OrganizationTypeConstants.B_TYPE, 
    run: (rs: number, rt: number) => rs > rt 
  }

  public static readonly ble = { 
    function: InstructionsConstants.BLE_FUNCTION, 
    type: OrganizationTypeConstants.B_TYPE, 
    run: (rs: number, rt: number) => rs <= rt 
  }

  public static readonly blt = { 
    function: InstructionsConstants.BLT_FUNCTION, 
    type: OrganizationTypeConstants.B_TYPE, 
    run: (rs: number, rt: number) => rs < rt 
  }

  public static readonly bne = { 
    function: InstructionsConstants.BNE_FUNCTION, 
    type: OrganizationTypeConstants.B_TYPE, 
    run: (rs: number, rt: number) => rs !== rt
  }

  public static readonly bgez = { 
    function: InstructionsConstants.BGEZ_FUNCTION, 
    type: OrganizationTypeConstants.C_TYPE, 
    run: (rs: number) => rs >= 0
  }

  public static readonly bgtz = { 
    function: InstructionsConstants.BGTZ_FUNCTION, 
    type: OrganizationTypeConstants.D_TYPE, 
    run: (rs: number) => rs > 0
  }

  public static readonly blez = { 
    function: InstructionsConstants.BLEZ_FUNCTION, 
    type: OrganizationTypeConstants.D_TYPE, 
    run: (rs: number) => rs <= 0  
  }

  public static readonly bltz = { 
    function: InstructionsConstants.BLTZ_FUNCTION, 
    type: OrganizationTypeConstants.D_TYPE, 
    run: (rs: number) => rs < 0 
  }

  /*
  lb	rt, imm(rs)	100000	
  lbu	rt, imm(rs)	100100	
  lh	rt, imm(rs)	100001	
  lhu	rt, imm(rs)	100101
  */

  public static readonly lui = { 
    function: InstructionsConstants.LUI_FUNCTION, 
    type: OrganizationTypeConstants.F_TYPE, 
    run: null 
  }

  public static readonly lw = {
    function: InstructionsConstants.LW_FUNCTION,
    type: OrganizationTypeConstants.E_TYPE,
    run: null
  }

  /*
  lw	rt, imm(rs)	100011
  lwc1	rt, imm(rs)	110001
  */

  public static readonly ori = { 
    function: InstructionsConstants.ORI_FUNCTION, 
    type: OrganizationTypeConstants.A_TYPE, 
    run: (rs: number, imm: number) => rs | imm 
  }

  /*
  sb	rt, imm(rs)	101000	
  */

  public static readonly slti = { 
    function: InstructionsConstants.SLTI_FUNCTION, 
    type: OrganizationTypeConstants.A_TYPE, 
    run: (rs: number, imm: number) => rs < imm ? 1 : 0 
  }

  public static readonly sltiu = { 
    function: InstructionsConstants.SLTIU_FUNCTION, 
    type: OrganizationTypeConstants.A_TYPE, 
    run: (rs: number, imm: number) => rs < uInt(imm) ? 1 : 0 
  }

  /*
  sh	rt, imm(rs)	101001	
  sw	rt, imm(rs)	101011	
  swc1  rt, imm(rs)	111001
  */

  public static readonly xori = { 
    function: InstructionsConstants.XORI_FUNCTION, 
    type: OrganizationTypeConstants.A_TYPE, 
    run: (rs: number, imm: number) => rs ^ imm 
  }
}
