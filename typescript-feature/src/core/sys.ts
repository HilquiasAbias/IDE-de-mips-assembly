import { Memory } from "./memory";
import { Registers } from "./registers";

export class Sys {
  static registers = Registers
  static memory = Memory
}

const a = Sys.registers.general.$17
