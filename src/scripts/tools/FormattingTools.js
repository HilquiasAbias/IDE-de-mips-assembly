import { isTypeI } from "../itype/iTypeManager.js";
import { isTypeR } from "../rtype/rTypeManager.js";
//import { isTypeJ } from "../jtype/jTypeManager";

export function convertDecimalToBin(dec) {
    return dec.toString(2);
}

export function convertBinToHex(bin) {
    return parseInt(bin, 2).toString(16);
}

export function convertDecimalToHex(dec) {
    return dec.toString(16);
}

export function convertDecimalToAddressHex(dec) {
    let hex = dec.toString(16);
    while (hex.length !== 8) {
        hex = '0' + hex;
    }
    return '0x' + hex;
}

export function convertHexToDecimal(hex) {
    return parseInt(hex, 16);
}

export function cleanElement(str) {
    return str.includes(',') ? str.slice(1, str.indexOf(',')) : str.slice(1);
}

export function cleanOnlyComma(str) {
    return str.includes(',') ? str.slice(0, str.indexOf(',')) : str;
}

export function cleanInstruction(arr) {
    return arr.map( element => cleanOnlyComma(element) );
}

export function completeElementsLength(arr) {
    return arr.map(element => {
        while (element.length < 5) element = '0' + element;
        return element;
    });
}

export function completeImmLength(element) {
    while (element.length < 16) element = '0' + element;
    return element;
}

export function convertBinInstructionToHex(binaryInstrution) {
    const arrayFromBinary = binaryInstrution.split('')
    const array = [];
    let i = 0;
    while (i++ !== 8) array.push(arrayFromBinary.splice(0, 4).join(''));
    return '0x' + array.map(element => convertBinToHex(element)).join('');
}

export function formatAddress(addressCount) {
    let address = convertDecimalToHex(addressCount);
    while (address.length !== 8) address = '0'+address;
    return '0x' + address;
}

export function uInt(number) {
    return Math.sqrt(Math.pow(number, 2));
}

export function handleUserInput(input) {
    return input.split('\n').filter(
        instruction => instruction.split('').every(el => el === ' ') === false
    )
}

export function organizeInstructions(instructions) {
    return instructions.map( instruction => structureInstruction(instruction) )
}

export function structureInstruction(instruction) { // 'main:    addi $2, $0, 5'
    const properties = {
        label: null,
        func: null,
        values: null
    }

    instruction = instruction.trim()

    if (instruction.includes(':')) {
        let aux = instruction.split(':') // ['main:', '   addi $2, $0, 5']
        properties.label = aux[0]
        aux = aux[1].trim().split(' ').map(el => el.trim())
        properties.func = aux.length > 1 ? aux[0] : null
        properties.values = aux.length > 1 ? cleanInstruction(aux.slice(1)) : null
    }

    else {
        properties.label = null
        let aux = instruction.trim().split(' ').map(el => el.trim())
        properties.func = aux[0]
        properties.values =  aux.length > 1 ? cleanInstruction(aux.slice(1)) : null
    }

    return properties // { label: 'main', func: 'addi', values: ['$2', '$0', '5']}
}
