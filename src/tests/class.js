class test {
    constructor() {
        this.data = { 
            propOne: '1', 
            propTwo: '2', 
            propThree: '3', 
        }
    }

    firstProp () {
        return this.data.propOne
    }

    secondProp () {
        return this.data.propTwo
    }

    tirdProp () {
        return this.data.propThree
    }
}

const t = new test()

console.log(t.firstProp())
console.log(t.secondProp())
console.log(t.tirdProp())
