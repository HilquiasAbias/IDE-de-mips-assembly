import { instructions as Instructions } from "./instructions"; //  
import { ordination } from "./ordernation";

// class version
export class IType {
  constructor (
    private readonly instructions = Instructions,
    private readonly orderInstruction: Function = ordination,
    private readonly buildCodeInstruction: Function
  ) {}

  isTypeI(op: string) {
    return this.instructions[op] !== undefined
  }

  buildInstructionScope() {} // formatInstruction

  teste() {
    console.log(this.instructions.addi.function);
  }
}


// // factory function version
// function IType(
//   instructions: Object,
//   orderInstruction: Function
// ) {

// }

// export default IType()
