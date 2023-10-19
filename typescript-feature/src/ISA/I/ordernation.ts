import { inputedObjectInstrucion } from "../../core/types";
import { OrganizationTypeConstants } from "./constants";

const opcodeFieldExtensionForOrderC = '00001'
const opcodeFieldExtensionForOrderD = '00000'

export function ordination(instruction: inputedObjectInstrucion) {
  if (instruction.func === OrganizationTypeConstants.A_TYPE) {
    return { 
      rt: instruction.values[0], 
      rs: instruction.values[1],
      imm: parseInt( instruction.values[2] )
    }
  }

  if (instruction.func === OrganizationTypeConstants.B_TYPE) {
    return { 
      rt: instruction.values[0], 
      rs: instruction.values[1],
      label: instruction.values[2]
    }
  }

  if (instruction.func === OrganizationTypeConstants.C_TYPE) {
    return {
      rs: instruction.values[0],
      rt: opcodeFieldExtensionForOrderC,
      label: instruction.values[1],
    }
  }

  if (instruction.func === OrganizationTypeConstants.D_TYPE) {
    return {
      rs: instruction.values[0],
      rt: opcodeFieldExtensionForOrderD,
      label: instruction.values[1],
    }
  }

  if (instruction.func === OrganizationTypeConstants.E_TYPE) {
    return {
      rs: null,
      rt: null,
      imm: null,
    }
  }

  if (instruction.func === OrganizationTypeConstants.F_TYPE) {
    return { 
      rs: instruction.values[0],
      imm: parseInt( instruction.values[1] )
    }
  }
}
