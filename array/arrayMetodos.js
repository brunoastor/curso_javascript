const pessoas = ['andre', 'bia', 'carlos', 'away']
pessoas.pop() //remove ultimo elemento
console.log(pessoas)

pessoas.push('away novo')
console.log(pessoas)

pessoas.shift() //remove o primeiro
console.log(pessoas)

pessoas.unshift('andre novo')
console.log(pessoas)

pessoas.sort()
console.log(pessoas)

pessoas.push('ada', 'marcola')
console.log(pessoas)
pessoas.sort()
console.log(pessoas)

const ultimasPessoas = pessoas.slice(4)
console.log(ultimasPessoas)



