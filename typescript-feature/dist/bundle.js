/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ISA/I/iType.ts":
/*!****************************!*\
  !*** ./src/ISA/I/iType.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IType = void 0;
const instructions_1 = __webpack_require__(/*! ./instructions */ "./src/ISA/I/instructions.ts");
// TODO: fazer um function factory
class IType {
    constructor(instructions = instructions_1.instructions) {
        this.instructions = instructions;
    }
    isTypeI(op) {
        return this.instructions[op] !== undefined;
    }
    teste() {
        console.log(this.instructions.addi.function);
    }
}
exports.IType = IType;


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

/***/ "./src/core/helpers.ts":
/*!*****************************!*\
  !*** ./src/core/helpers.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.opcodeFieldExtensionForOrderD = exports.opcodeFieldExtensionForOrderC = exports.uInt = void 0;
function uInt(number) {
    return Math.sqrt(Math.pow(number, 2));
}
exports.uInt = uInt;
exports.opcodeFieldExtensionForOrderC = '00001';
exports.opcodeFieldExtensionForOrderD = '00000';


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

/* eslint-disable import/extensions */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const iType_1 = __webpack_require__(/*! ./ISA/I/iType */ "./src/ISA/I/iType.ts");
// import errors from './errors/main';
// errors({
//   module: 'back',
//   error: 'back_without_instructions',
// });
const i = new iType_1.IType();
i.teste();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map