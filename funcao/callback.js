const fabricantes = ["Fiat", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function listar(a, index){
    console.log( `${index+1} - ${a} `)
})