const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuObjeto(){

}

console.log(typeof Object, typeof meuObjeto)

class Carro{
    constructor(tipo){
        this.tipo = tipo
    }
}

const fiat = new Carro('utilitario')

console.log(fiat)
console.log(typeof Carro, typeof fiat)

