class PessoaFisica{
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`Olá, meu nome é ${this.nome}`)
    }
}

const joca = new PessoaFisica('Joca')
joca.falar()

function PessoaJuridica(nome){
    this.nome = nome

    this.falar = function() {
        console.log(`Olá, meu nome é ${this.nome}`)
    }
}

const maria = new PessoaJuridica('Maria');
maria.falar();