import formatting from "./formatting";
import { instructions as Instructions } from "./instructions"; //  
import { ordination } from "./ordernation";

// class version
class IType {
  constructor (
    private readonly instructions = Instructions,
    private readonly orderInstruction: Function = ordination,
    private readonly format = formatting
    // private readonly buildCodeInstruction: Function
  ) {}

  // isTypeI(op: string) {
  //   return this.instructions[op] !== undefined
  // }

  buildInstructionScope() {} // formatInstruction --> mandar pro convertInstructionValuesInBinary o opcode já capturado das instructions !!!

  teste() {
    console.log(formatting.convertInstructionValuesInBinary({
      op: this.instructions.addi.opcode,
      rs: '$2',
      rt: '$0',
      imm: '5'
    }));
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
