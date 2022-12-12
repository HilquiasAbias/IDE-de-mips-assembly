import * as tools from "../system/toolkit.js";
import * as formatting from "./formatting.js";
import instructions from "./instructions.js";

export function isTypeJ(op) {
    return instructions[op] !== undefined;
}
