const avo = {
    atr1: 'A'
}

const pai = {
    atr2: 'B'
    ,__proto__: avo
}

const filho = {
    __proto__: pai
    ,atr3: 'C'
}

//console.log(filho.atr1, filho.atr2, filho.atr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }

}

const ferrari = {
    modelo: `F40`,
    velMax: 324
}

const volvo = {
    modelo: `V40`,
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(volvo, carro)
Object.setPrototypeOf(ferrari, carro)

ferrari.aceleraMais(200)
console.log(ferrari)
volvo.aceleraMais(20)
console.log(volvo)

console.log(volvo.status())
console.log(ferrari.status())
