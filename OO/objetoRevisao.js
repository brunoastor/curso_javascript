let produto = new Object

produto.nome = 'Arroz'
produto.preco = 20.99
produto.estoque = 99

console.log(produto)

delete produto.preco

console.log(produto)

const Carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Juca',
        idade: 11,
        endereco: {
            logradouro: 'Rua do Saci',
            cidade: 'MAringá'
        }
    },
    condutores: [
        {
            nome: 'Jandira',
            idade: 20 },
        {
            nome: 'Robson',
            idade: 32 }
    ]
}

console.log(Carro)

