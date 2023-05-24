import { instructions as Instructions } from "./instructions";
import { ordernate } from "./ordernation";

// TODO: fazer um function factory
export class IType {
  constructor (
    private readonly instructions = Instructions,
  ) {}

  isTypeI(op: string) {
    return this.instructions[op] !== undefined
  }

  teste() {
    console.log(this.instructions.addi.function);
  }
}
