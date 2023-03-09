//High Order Function  

function fun1(){ }
const fun2 = function () { }

const array = [function (a,b) { return a+b}, fun1, fun2]

const funcao = function () { return "Olá Mundo"}
console.log(array[0](5,5))
console.log(funcao())

const obj = {}
obj.falar = function () { return 'Olá'}
console.log(obj.falar())

function run(fun) {
    fun()
}

run(function () { console.log('Executando....')})

function soma ( a, b) {
    return a+b
}

console.log(soma(2,5))

