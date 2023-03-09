
//O que eu sabia de JAVA
function criarProduto(nome, preco){
    this.nome = nome;
    this.preco = preco;
    this.desconto = 20;
}

let sabao = new criarProduto('Sabão', 19.99)

console.log(sabao)

//Aprendi no curso de JS
function criarProduto2 (nome, preco) { 
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto2('Maça', 5.99))