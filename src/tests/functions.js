function completeElementsLength(element, size) {
    while (element.length !== size) element = '0' + element
    console.log(element.length);
    return element
}

function convertBinToHex(bin) {
    return parseInt(bin, 2).toString(16);
}

const srl = (rt, sa) => rt >> sa


function convertDecimalToBin(dec) {
    return dec.toString(2);
}

let func = '000010'

let aux = 4194304 + 1 * 4 // enderço da primeira instrução + quantidade de instruções antes do rótulo * 4

aux = completeElementsLength(
    convertDecimalToBin(srl(aux, 2)),
    26
)

const code = '0x' + completeElementsLength( convertBinToHex(func + aux), 8 )
console.log(code)
