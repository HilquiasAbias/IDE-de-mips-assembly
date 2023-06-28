import { convertDecimalToBin } from "../../core/helpers/converting"
import { cleanElement, completeBinaryElementLength } from "../../core/helpers/formatting";
import { ITypeFormatAddress, ITypeInstructionValues } from "../../core/types";
import { instructions } from "./instructions";

function formatNonRegisterElement(imm: any) {
  const valuePatternForNegativeImm = 65536
  let immValue = parseInt(imm)

  if (imm.includes('-')) {
    immValue += valuePatternForNegativeImm // pode dar erro pois o cleanElement talvez tire o sinal de menos
  }

  let binaryImmValue = convertDecimalToBin(immValue)

  while (binaryImmValue.length < 16) {
    binaryImmValue = '0' + binaryImmValue
  }

  return binaryImmValue
}

function formatting() {
  return {
    convertInstructionValuesInBinary(values: ITypeFormatAddress) { // values = { op, rs, rt, imm|label }
      const nonRegisterElement = values.label ? values.label : values.imm

      if (values.imm) {
        values.imm = formatNonRegisterElement(values.imm)
      } else {
        values.label = formatNonRegisterElement(values.label)
      }

      values.rs = completeBinaryElementLength( convertDecimalToBin( parseInt( cleanElement(values.rs) ) ) )
      values.rt = completeBinaryElementLength( convertDecimalToBin( parseInt( cleanElement(values.rt) ) ) )

      console.log(nonRegisterElement)
      console.log(values)

      return Object.values(values).join('')
    }
  }
}

export default formatting()
