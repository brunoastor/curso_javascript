const notas = [7.5 , 3.5, 4.8, 8.9, 10.0, 5.6, 6.1, 7.9]

//Sem Callback

let notasBaixas = []
for(let i in notas){
    if(notas[i] < 6){
        notasBaixas.push(notas[i])
    }
}
console.log(`Sem CallBack: ${notasBaixas} `)

//Com CallBack

notasBaixas = notas.filter(function(nota){
    return nota < 7
})

console.log('Com CallBack: ' + notasBaixas)