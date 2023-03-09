// usando a notação literal

const obj1 = {

}

// Objeto em JS

const obj2 = new Object

// Função construtora

function obj3 ( nome, preco, estoque) {
    this.nome = nome
}


console.log(obj1)
console.log(obj2)
const produto = new obj3('caneta', 22, 21)
console.log(produto)
