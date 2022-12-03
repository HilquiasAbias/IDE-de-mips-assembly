import * as tools from "../tools/FormattingTools.js";
import * as formatting from "./formatting.js";
import instructions from "./instructions.js";

export function isTypeJ(op) {
    return instructions[op] !== undefined;
}
