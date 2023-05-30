import { ITypeFormatAddress, ITypeInstructionValues } from "../../core/types";
import { instructions } from "./instructions";

function teste() {}

function formatting() {
  return {
    convertInstructionValuesInBinary(values: ITypeInstructionValues) {
      const nonRegisterElement = values.label ? values.label : values.imm
      
    },

    teste
  }
}
