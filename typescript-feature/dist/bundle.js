/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ISA/I/formatting.ts":
/*!*********************************!*\
  !*** ./src/ISA/I/formatting.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const converting_1 = __webpack_require__(/*! ../../core/helpers/converting */ "./src/core/helpers/converting.ts");
const formatting_1 = __webpack_require__(/*! ../../core/helpers/formatting */ "./src/core/helpers/formatting.ts");
function formatNonRegisterElement(imm) {
    const valuePatternForNegativeImm = 65536;
    let immValue = parseInt(imm);
    if (imm.includes('-')) {
        immValue += valuePatternForNegativeImm; // pode dar erro pois o cleanElement talvez tire o sinal de menos
    }
    let binaryImmValue = (0, converting_1.convertDecimalToBin)(immValue);
    while (binaryImmValue.length < 16) {
        binaryImmValue = '0' + binaryImmValue;
    }
    return binaryImmValue;
}
function formatting() {
    return {
        convertInstructionValuesInBinary(values) {
            const nonRegisterElement = values.label ? values.label : values.imm;
            if (values.imm) {
                values.imm = formatNonRegisterElement(values.imm);
            }
            else {
                values.label = formatNonRegisterElement(values.label);
            }
            values.rs = (0, formatting_1.completeBinaryElementLength)((0, converting_1.convertDecimalToBin)(parseInt((0, formatting_1.cleanElement)(values.rs))));
            values.rt = (0, formatting_1.completeBinaryElementLength)((0, converting_1.convertDecimalToBin)(parseInt((0, formatting_1.cleanElement)(values.rt))));
            console.log(nonRegisterElement);
            console.log(values);
            return Object.values(values).join('');
        }
    };
}
exports["default"] = formatting();


/***/ }),

/***/ "./src/ISA/I/iType.ts":
/*!****************************!*\
  !*** ./src/ISA/I/iType.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const formatting_1 = __importDefault(__webpack_require__(/*! ./formatting */ "./src/ISA/I/formatting.ts"));
const instructions_1 = __webpack_require__(/*! ./instructions */ "./src/ISA/I/instructions.ts"); //  
const ordernation_1 = __webpack_require__(/*! ./ordernation */ "./src/ISA/I/ordernation.ts");
// class version
class IType {
    constructor(instructions = instructions_1.instructions, orderInstruction = ordernation_1.ordination, format = formatting_1.default
    // private readonly buildCodeInstruction: Function
    ) {
        this.instructions = instructions;
        this.orderInstruction = orderInstruction;
        this.format = format;
    }
    // isTypeI(op: string) {
    //   return this.instructions[op] !== undefined
    // }
    buildInstructionScope() { } // formatInstruction --> mandar pro convertInstructionValuesInBinary o opcode já capturado das instructions !!!
    teste() {
        console.log(formatting_1.default.convertInstructionValuesInBinary({
            op: this.instructions.addi.opcode,
            rs: '$2',
            rt: '$0',
            imm: '5'
        }));
    }
}
exports["default"] = new IType();
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


/***/ }),

/***/ "./src/ISA/I/instructions.ts":
/*!***********************************!*\
  !*** ./src/ISA/I/instructions.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.instructions = void 0;
const general_1 = __webpack_require__(/*! ../../core/helpers/general */ "./src/core/helpers/general.ts");
exports.instructions = {
    addi: {
        opcode: '001000',
        type: 'a',
        does: (rs, imm) => rs + imm
    },
    addiu: {
        opcode: '001001',
        type: 'a',
        does: (rs, imm) => rs + (0, general_1.uInt)(imm)
    },
    andi: {
        opcode: '001100',
        type: 'a',
        does: (rs, imm) => rs & imm
    },
    beq: {
        opcode: '000100',
        type: 'b',
        does: (rs, rt) => rs === rt
    },
    bge: {
        opcode: '000001',
        type: 'b',
        does: (rs, rt) => rs >= rt
    },
    bgt: {
        opcode: '000111',
        type: 'b',
        does: (rs, rt) => rs > rt
    },
    ble: {
        opcode: '000110',
        type: 'b',
        does: (rs, rt) => rs <= rt
    },
    blt: {
        opcode: '000001',
        type: 'b',
        does: (rs, rt) => rs < rt
    },
    bne: {
        opcode: '000100',
        type: 'b',
        does: (rs, rt) => rs !== rt
    },
    bgez: {
        opcode: '000001',
        type: 'c',
        does: (rs) => rs >= 0
    },
    bgtz: {
        opcode: '000111',
        type: 'd',
        does: (rs) => rs > 0
    },
    blez: {
        opcode: '000110',
        type: 'd',
        does: (rs) => rs <= 0
    },
    bltz: {
        opcode: '000001',
        type: 'd',
        does: (rs) => rs < 0
    },
    /*
    lb	rt, imm(rs)	100000
    lbu	rt, imm(rs)	100100
    lh	rt, imm(rs)	100001
    lhu	rt, imm(rs)	100101
    */
    lui: {
        opcode: '001111',
        type: 'f',
        does: null
    },
    lw: {
        opcode: '100011',
        type: 'e',
        does: null
    },
    /*
    lw	rt, imm(rs)	100011
    lwc1	rt, imm(rs)	110001
    */
    ori: {
        opcode: '001101',
        type: 'a',
        does: (rs, imm) => rs | imm
    },
    /*
    sb	rt, imm(rs)	101000
    */
    slti: {
        opcode: '001010',
        type: 'a',
        does: (rs, imm) => rs < imm ? 1 : 0
    },
    sltiu: {
        opcode: '001011',
        type: 'a',
        does: (rs, imm) => rs < (0, general_1.uInt)(imm) ? 1 : 0
    },
    /*
    sh	rt, imm(rs)	101001
    sw	rt, imm(rs)	101011
    swc1  rt, imm(rs)	111001
    */
    xori: {
        opcode: '001110',
        type: 'a',
        does: (rs, imm) => rs ^ imm
    }
};


/***/ }),

/***/ "./src/ISA/I/ordernation.ts":
/*!**********************************!*\
  !*** ./src/ISA/I/ordernation.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ordination = void 0;
const opcodeFieldExtensionForOrderC = '00001';
const opcodeFieldExtensionForOrderD = '00000';
function ordination(instruction) {
    if (instruction.func === 'a') {
        return {
            rt: instruction.values[0],
            rs: instruction.values[1],
            imm: parseInt(instruction.values[2])
        };
    }
    if (instruction.func === 'b') {
        return {
            rt: instruction.values[0],
            rs: instruction.values[1],
            label: instruction.values[2]
        };
    }
    if (instruction.func === 'c') {
        return {
            rs: instruction.values[0],
            rt: opcodeFieldExtensionForOrderC,
            label: instruction.values[1],
        };
    }
    if (instruction.func === 'd') {
        return {
            rs: instruction.values[0],
            rt: opcodeFieldExtensionForOrderD,
            label: instruction.values[1],
        };
    }
    if (instruction.func === 'e') {
        return {
            rs: null,
            rt: null,
            imm: null,
        };
    }
    if (instruction.func === 'f') {
        return {
            rs: instruction.values[0],
            imm: parseInt(instruction.values[1])
        };
    }
}
exports.ordination = ordination;


/***/ }),

/***/ "./src/core/helpers/converting.ts":
/*!****************************************!*\
  !*** ./src/core/helpers/converting.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertHexToDecimal = exports.convertDecimalToAddressHex = exports.convertDecimalToHex = exports.convertBinToHex = exports.convertDecimalToBin = void 0;
function convertDecimalToBin(dec) {
    return dec.toString(2);
}
exports.convertDecimalToBin = convertDecimalToBin;
function convertBinToHex(bin) {
    return parseInt(bin, 2).toString(16);
}
exports.convertBinToHex = convertBinToHex;
function convertDecimalToHex(dec) {
    return dec.toString(16);
}
exports.convertDecimalToHex = convertDecimalToHex;
function convertDecimalToAddressHex(dec) {
    let hex = dec.toString(16);
    while (hex.length !== 8) {
        hex = '0' + hex;
    }
    return '0x' + hex;
}
exports.convertDecimalToAddressHex = convertDecimalToAddressHex;
function convertHexToDecimal(hex) {
    return parseInt(hex, 16);
}
exports.convertHexToDecimal = convertHexToDecimal;
// export function convertBinaryInstructionToHex(binaryInstrution: string) {
//   const binaryArrayInstruction = binaryInstrution.split('')
//   const hexArrayInstruction = [];
//   let i = 0;
//   while (i++ !== 8) {
//     const pieceWithHexLenght: string = binaryArrayInstruction.splice(0, 4).join('')
//     hexArrayInstruction.push( convertBinToHex(pieceWithHexLenght) );
//   }
//   return '0x' + hexArrayInstruction.join('');
// }


/***/ }),

/***/ "./src/core/helpers/formatting.ts":
/*!****************************************!*\
  !*** ./src/core/helpers/formatting.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.completeBinaryImmLength = exports.completeBinaryElementLength = exports.completeBinaryElementsLength = exports.cleanElementsInstruction = exports.cleanOnlyComma = exports.cleanElement = exports.formatMemoryAddress = exports.memoryAddressBase = void 0;
exports.memoryAddressBase = 4194304;
function formatMemoryAddress(currentMemoryCount) {
    const baseAddressIncrement = 4;
    let address = (baseAddressIncrement + currentMemoryCount).toString(16);
    while (address.length != 8) {
        address = '0' + address;
    }
    return '0x' + address;
}
exports.formatMemoryAddress = formatMemoryAddress;
function cleanElement(element) {
    return element.includes(',') ? element.slice(1, element.indexOf(',')) : element.slice(1);
}
exports.cleanElement = cleanElement;
function cleanOnlyComma(element) {
    return element.includes(',') ? element.slice(0, element.indexOf(',')) : element;
}
exports.cleanOnlyComma = cleanOnlyComma;
function cleanElementsInstruction(elements) {
    return elements.map(element => cleanOnlyComma(element));
}
exports.cleanElementsInstruction = cleanElementsInstruction;
function completeBinaryElementsLength(elements) {
    return elements.map(element => {
        while (element.length < 5)
            element = '0' + element;
        return element;
    });
}
exports.completeBinaryElementsLength = completeBinaryElementsLength;
function completeBinaryElementLength(element) {
    while (element.length < 5)
        element = '0' + element;
    return element;
}
exports.completeBinaryElementLength = completeBinaryElementLength;
function completeBinaryImmLength(element) {
    while (element.length < 16)
        element = '0' + element;
    return element;
}
exports.completeBinaryImmLength = completeBinaryImmLength;


/***/ }),

/***/ "./src/core/helpers/general.ts":
/*!*************************************!*\
  !*** ./src/core/helpers/general.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uInt = void 0;
function uInt(number) {
    return Math.sqrt(Math.pow(number, 2));
}
exports.uInt = uInt;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* eslint-disable import/extensions */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const iType_1 = __importDefault(__webpack_require__(/*! ./ISA/I/iType */ "./src/ISA/I/iType.ts"));
// import errors from './errors/main';
// errors({
//   module: 'back',
//   error: 'back_without_instructions',
// });
const i = iType_1.default;
i.teste();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map