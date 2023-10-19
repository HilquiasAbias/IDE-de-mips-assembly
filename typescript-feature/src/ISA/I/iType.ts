import { ConstraintsInstructions } from "./instructions"; //  
import { ordination } from "./ordernation";

// class version
class IType {
  constructor (
    private readonly instructions = ConstraintsInstructions,
    private readonly orderInstruction: Function = ordination,
    // private readonly buildCodeInstruction: Function
  ) {}

  // isTypeI(op: string) {
  //   return this.instructions[op] !== undefined
  // }

  buildInstructionScope() {} // formatInstruction --> mandar pro convertInstructionValuesInBinary o func já capturado das instructions !!!

  teste() {
    console.log(this.instructions.addi.function);
  }
}

export default new IType();


// // factory function version
// function IType() {
//   const instructions = Instructions
//   const orderInstruction = ordination

//   return {
//     instructions,
//     orderInstruction,

//     // isTypeI(op: string) {
//     //   return instructions[op] !== undefined
//     // },

//     teste() {
//       console.log(instructions.addi.function);
//     }
//   }
// }

// export default IType()
