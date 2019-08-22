//Get e Set
const sequencia = {
    _valor: 1,
    get valor() { return this._valor++ },
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor
        } 
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 100
console.log(sequencia.valor, sequencia.valor)

//Aula 94 Funções importantes de objetos.
const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.keys(pessoa))
console.log(Object.keys(pessoa))
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => { 
    console.log(`${chave}: ${valor}`)
});


Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '24/05/1994'
})


