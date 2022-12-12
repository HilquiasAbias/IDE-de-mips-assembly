// let arr = []
// let bin = '01010101010101010101010101010101'

// for (let i = 0; i < 7; i++) {
//     arr.push(bin.slice(0, 4))
//     bin = bin.slice(4)
// }

// // console.log(arr);

// const test = {}


// function saveInMemory(address, value) {
//     const add = parseInt(address, 16) + 4
//     const ress = '0x' + add.toString(16)
//     test[ress] = value
// }

// saveInMemory('0x1001000', 5)
// saveInMemory('0x1001004', 10)
// saveInMemory('0x1001008', 15)

// console.log(test);

// const addressBase = 4194304

// function formatAddress(addressCount) {
//     let address = (addressBase + addressCount).toString(16)
//     while (address.length != 8) address = '0' + address
//     return '0x' + address
// }

// let addressCount = 0

// for (let i = 0; i < 5; i++) {
//     console.log(formatAddress(addressCount));
//     addressCount = addressCount + 4
// }

console.log(parseInt('0x00400000', 16));
