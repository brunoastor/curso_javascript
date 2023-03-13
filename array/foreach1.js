const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, index){
    console.log(`${index + 1} : ${nome}`)
})
console.log(`\n`)

aprovados.forEach((nome,index) => console.log(`-------------- \n ${index} : ${nome}`))
console.log(`--------------`)
aprovados.push('Valdivia')

console.log(`\n`)
const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)
