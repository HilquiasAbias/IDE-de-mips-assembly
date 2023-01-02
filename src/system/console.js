import * as user from './userAction.js'

const dataInAndOut = document.querySelector('.console')

export const cleanIt = () => {
    dataInAndOut.innerText = ''
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
    inputLine.classList.add('data-in-input')
    dataInAndOut.appendChild(inputLine)

    user.utils.freeze()

    inputLine.focus()
    inputLine.addEventListener('keyup', event => {
        if (event.key === 'Enter') { // && event.target === inputLine
            console.log('teste');

            console.log(inputLine.value);
            
            //inputLine.disabled = true
            user.utils.unFreeze()
            return inputLine.value
        }
    })

}
