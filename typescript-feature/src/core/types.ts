// import { Length } from "class-validator"

export type inputedObjectInstrucion = {
  func: string
  index: number
  label: string[]
  values: string[]
}

// export class IFormatAddressTest {
//   @Length(6)
//   op: string
//   rs: string
//   rt: string
//   label?: string
//   imm?: string
// }

export type ITypeFormatAddress = {
  op: string
  rs: string
  rt: string
  label?: string
  imm?: string
}

export type ITypeInstructionValues = ITypeFormatAddress & { func: string }
