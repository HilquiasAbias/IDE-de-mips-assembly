import * as tools from "../tools/FormattingTools.js"
import instructions from "./instructions.js"

const formatAddress = {
    op: '000000',
    rs: '00000',
    rt: '00000',
    immOrLabel: '0000000000000000'
};

export function organizationTypeA(arr) { // [fn, rd, rs, rt]
    formatAddress.op = arr[0]
    formatAddress.rt = arr[1]
    formatAddress.rs = arr[2]
    formatAddress.immOrLabel = arr[3]
    return Object.values(formatAddress).join('')
}

export function organizationTypeB(arr) {
    formatAddress.op = arr[0]
    formatAddress.rs = arr[1]
    formatAddress.rt = arr[2]
    formatAddress.immOrLabel = arr[3]
    return Object.values(formatAddress).join('')
}

export function organizationTypeC(arr) {
    formatAddress.op = arr[0]
    formatAddress.rs = arr[1]
    formatAddress.immOrLabel = arr[2]
    formatAddress.rt = '00001'
    return Object.values(formatAddress).join('')
}

export function organizationTypeD(arr) {
    formatAddress.op = arr[0]
    formatAddress.rs = arr[1]
    formatAddress.immOrLabel = arr[2]
    formatAddress.rt = '00000'
    return Object.values(formatAddress).join('')
}

export function organizationTypeE(arr) {
    // ...
    return Object.values(formatAddress).join('')
}

export function organizationTypeF(arr) {
    formatAddress.op = arr[0]
    formatAddress.rt = arr[1]
    formatAddress.immOrLabel = arr[2]
    return Object.values(formatAddress).join('')
}

export function formatImmElement(imm) {
    let temp = parseInt(imm)
    if (imm.includes('-')) temp += 65536; // pode dar erro pois o cleanElement talvez tire o sinal de menos
    return tools.completeImmLength(tools.convertDecimalToBin(temp))
}

export function formatInstructionsInBinary(binaryInstruction) {
    const imm = formatImmElement( binaryInstruction.pop() )
    const func = instructions[ binaryInstruction.shift() ].function

    const cleanedElements = binaryInstruction.map((element) => tools.convertDecimalToBin(parseInt(tools.cleanElement(element))))

    return [ func, ...tools.completeElementsLength(cleanedElements), imm ]; // [ '001000',  ]
}
