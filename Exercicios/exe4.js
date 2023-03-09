//04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

function resto(dividendo, divisor){
    return `Resultado: ${dividendo / divisor} Resto: ${dividendo % divisor}`
}

console.log(resto(10,5))
console.log(resto(72, 7))