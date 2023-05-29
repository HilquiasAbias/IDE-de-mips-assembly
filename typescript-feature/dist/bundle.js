/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ISA/I/iType.ts":
/*!****************************!*\
  !*** ./src/ISA/I/iType.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const instructions_1 = __webpack_require__(/*! ./instructions */ "./src/ISA/I/instructions.ts"); //  
const ordernation_1 = __webpack_require__(/*! ./ordernation */ "./src/ISA/I/ordernation.ts");
// class version
class IType {
    constructor(instructions = instructions_1.instructions, orderInstruction = ordernation_1.ordination) {
        this.instructions = instructions;
        this.orderInstruction = orderInstruction;
    }
    // isTypeI(op: string) {
    //   return this.instructions[op] !== undefined
    // }
    buildInstructionScope() { } // formatInstruction
    teste() {
        console.log(this.instructions.addi.function);
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
const helpers_1 = __webpack_require__(/*! ../../core/helpers */ "./src/core/helpers.ts");
exports.instructions = {
    addi: {
        function: '001000',
        type: 'a',
        does: (rs, imm) => rs + imm
    },
    addiu: {
        function: '001001',
        type: 'a',
        does: (rs, imm) => rs + (0, helpers_1.uInt)(imm)
    },
    andi: {
        function: '001100',
        type: 'a',
        does: (rs, imm) => rs & imm
    },
    beq: {
        function: '000100',
        type: 'b',
        does: (rs, rt) => rs === rt
    },
    bge: {
        function: '000001',
        type: 'b',
        does: (rs, rt) => rs >= rt
    },
    bgt: {
        function: '000111',
        type: 'b',
        does: (rs, rt) => rs > rt
    },
    ble: {
        function: '000110',
        type: 'b',
        does: (rs, rt) => rs <= rt
    },
    blt: {
        function: '000001',
        type: 'b',
        does: (rs, rt) => rs < rt
    },
    bne: {
        function: '000100',
        type: 'b',
        does: (rs, rt) => rs !== rt
    },
    bgez: {
        function: '000001',
        type: 'c',
        does: (rs) => rs >= 0
    },
    bgtz: {
        function: '000111',
        type: 'd',
        does: (rs) => rs > 0
    },
    blez: {
        function: '000110',
        type: 'd',
        does: (rs) => rs <= 0
    },
    bltz: {
        function: '000001',
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
        function: '001111',
        type: 'f',
        does: null
    },
    lw: {
        function: '100011',
        type: 'e',
        does: null
    },
    /*
    lw	rt, imm(rs)	100011
    lwc1	rt, imm(rs)	110001
    */
    ori: {
        function: '001101',
        type: 'a',
        does: (rs, imm) => rs | imm
    },
    /*
    sb	rt, imm(rs)	101000
    */
    slti: {
        function: '001010',
        type: 'a',
        does: (rs, imm) => rs < imm ? 1 : 0
    },
    sltiu: {
        function: '001011',
        type: 'a',
        does: (rs, imm) => rs < (0, helpers_1.uInt)(imm) ? 1 : 0
    },
    /*
    sh	rt, imm(rs)	101001
    sw	rt, imm(rs)	101011
    swc1  rt, imm(rs)	111001
    */
    xori: {
        function: '001110',
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

/***/ "./src/core/helpers.ts":
/*!*****************************!*\
  !*** ./src/core/helpers.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertHexToDecimal = exports.convertDecimalToAddressHex = exports.convertDecimalToHex = exports.convertBinToHex = exports.convertDecimalToBin = exports.formatMemoryAddress = exports.uInt = exports.memoryAddressBase = void 0;
exports.memoryAddressBase = 4194304;
function uInt(number) {
    return Math.sqrt(Math.pow(number, 2));
}
exports.uInt = uInt;
function formatMemoryAddress(currentMemoryCount) {
    const baseAddressIncrement = 4;
    let address = (baseAddressIncrement + currentMemoryCount).toString(16);
    while (address.length != 8) {
        address = '0' + address;
    }
    return '0x' + address;
}
exports.formatMemoryAddress = formatMemoryAddress;
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