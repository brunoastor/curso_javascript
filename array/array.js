console.log(typeof Array)
console.log(typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados[0])

aprovados[3] = 'Jandira'
aprovados.push('Ultimo')

console.log(aprovados)
aprovados[9] = 'Indice 9'
console.log(aprovados)

aprovados.sort()
console.log(aprovados.length)
console.log(aprovados)

aprovados = ['away', 'bianca', 'will']
console.log(aprovados)
aprovados.splice(1,1, 'novo1', 'novo2')
console.log(aprovados)

