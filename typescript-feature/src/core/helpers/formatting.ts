export const memoryAddressBase = 4194304

export function formatMemoryAddress(currentMemoryCount: number) {
  const baseAddressIncrement = 4

  let address = (baseAddressIncrement + currentMemoryCount).toString(16)
  while (address.length != 8) {
    address = '0' + address
  }

  return '0x' + address
}

export function cleanElement(element: string) {
  return element.includes(',') ? element.slice(1, element.indexOf(',')) : element.slice(1);
}

export function cleanOnlyComma(element: string) {
  return element.includes(',') ? element.slice(0, element.indexOf(',')) : element;
}

export function cleanElementsInstruction(elements: string[]) {
  return elements.map( element => cleanOnlyComma(element) );
}

export function completeBinaryElementsLength(elements: string[]) {
  return elements.map(element => {
    while (element.length < 5) element = '0' + element;
    return element;
  });
}

export function completeBinaryElementLength(element: string) {
  while (element.length < 5) element = '0' + element;
  return element;
}

export function completeBinaryImmLength(element: string) {
  while (element.length < 16) element = '0' + element;
  return element;
}
