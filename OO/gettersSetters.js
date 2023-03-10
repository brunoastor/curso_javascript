class Produto{
    constructor(marca, preco, estoque){
        this.marca = marca
        this.preco = preco
        this.estoque = estoque
    }

    limparEstoque(){
        this.estoque = 0
    }

}

const shampoo = new Produto('Shampoo', 19.99, 32)

console.log(shampoo)
shampoo.limparEstoque()

console.log(shampoo)


const sequencia = {
    _valor: 1,
    get valor(){
        return this._valor++
    },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 200
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1
console.log(sequencia.valor, sequencia.valor)
