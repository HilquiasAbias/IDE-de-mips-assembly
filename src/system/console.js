const dataInAndOut = document.querySelector('.console')

export const cleanIt = () => {
    dataInAndOut.innerHTML = '<div></div>'
}

export const dataOut = (data, type, msg) => {
    if (type === 'error') {}

    if (type === 'value') {
        const output = document.createElement('p')

        output.textContent = `${data}`

        dataInAndOut.appendChild(output)
    }

    if (type === 'exit') {
        const output = document.createElement('div')

        output.textContent = `--- ${msg} ---`
        output.style.textAlign = 'center'

        dataInAndOut.appendChild(output)
    }

    if (type === 'log') {}

    if (type === 'comment') {
        const output = document.createElement('p')

        output.textContent = `--- ${msg} ---`
        output.style.textAlign = 'center'

        dataInAndOut.appendChild(output)
    }
}

export const dataIn = () => {
    const inputLine = document.createElement('input')
    
}

export const clean = () => {
    dataInAndOut.innerHTML = ''
}
