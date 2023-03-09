class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`Olá, meu nome é ${this.nome}`)
    }
}

const joca = new Pessoa('Joca')
joca.falar()