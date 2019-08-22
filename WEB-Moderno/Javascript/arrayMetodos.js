const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // massa quebrou o carro
console.log(pilotos)

pilotos.push('Verstappen')

pilotos.shift()

// pop() remove da ultima posição e shift remove da primeira posição

console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode remover ou adicionar elementos no array

//adicionar
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

//remover

pilotos.splice(3, 1) // massa quebrou
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)