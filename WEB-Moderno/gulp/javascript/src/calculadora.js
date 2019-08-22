/*
 * Essa é uma calculadora bem legal!!!
 */
const Calculadora = {
    _resultado: 0,
    get resultado() {
        return this._resultado
    },
    somar(a, b = 0) {
        const soma = a + b
        this._resultado += soma
        return this
    },
    potencia(a, b) {
        const potencia = a ** b
        this._resultado += potencia
        return this
    },
    zerar() {
        this._resultado = 0
        return this
    },
    log() {
        console.log(this._resultado)
    }
}








const Calculadora2 = {
    _resultado: 0,
    
    //get resultado() {
    //    return this._resultado
    //},
    somar(a, b = 0) {
        const soma = a + b
        this._resultado += soma
        console.log(this)
        console.log(soma)
        console.log(_resultado)
        return this
    }
    //log() {
    //    console.log(this._resultado)
    //}
}

console.log(Calculadora2.somar(1,2).somar(3,4))



