const Carro = {
    buzina: 'bip bip',
    buzinar() {
        console.log(this.buzina)
    }
}

var fiat = Carro

fiat.buzinar()

console.log(Carro)