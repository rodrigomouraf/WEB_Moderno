const obj = { a: 1 , b: 2, c: 3, soma() { return this.a + this.b + this.c } }

obj.a = 4
obj.b = 5

console.log(obj.soma())

//console.log(obj.soma())

console.log(JSON.stringify(obj))