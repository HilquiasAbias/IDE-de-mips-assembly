import { inputedObjectInstrucion } from "../../core/types";

const opcodeFieldExtensionForOrderC = '00001'
const opcodeFieldExtensionForOrderD = '00000'

export function ordination(instruction: inputedObjectInstrucion) {
  if (instruction.func === 'a') {
    return { 
      rt: instruction.values[0], 
      rs: instruction.values[1],
      imm: parseInt( instruction.values[2] )
    }
  }

  if (instruction.func === 'b') {
    return { 
      rt: instruction.values[0], 
      rs: instruction.values[1],
      label: instruction.values[2]
    }
  }

  if (instruction.func === 'c') {
    return {
      rs: instruction.values[0],
      rt: opcodeFieldExtensionForOrderC,
      label: instruction.values[1],
    }
  }

  if (instruction.func === 'd') {
    return {
      rs: instruction.values[0],
      rt: opcodeFieldExtensionForOrderD,
      label: instruction.values[1],
    }
  }

  if (instruction.func === 'e') {
    return {
      rs: null,
      rt: null,
      imm: null,
    }
  }

  if (instruction.func === 'f') {
    return { 
      rs: instruction.values[0],
      imm: parseInt( instruction.values[1] )
    }
  }
}
