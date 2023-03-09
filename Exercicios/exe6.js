/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function rendimento( inicial, juros, tempo){
    console.log(`Juros Simples: ${inicial * (1+(juros * tempo))}`)
    console.log(`Juros Compostos : ${inicial * (1+juros) ** tempo}`)
}

rendimento(10000, 0.02, 5)