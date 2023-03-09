class Carro{
    constructor(marca){
        this.marca = marca
    }
    buzinar() {
        console.log('bip bip')
    }
}

var fiat = new Carro('fiat')

fiat.buzinar()