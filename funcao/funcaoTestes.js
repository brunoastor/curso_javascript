function somar(nota1 , nota2) {
    let soma = (nota1 + nota2) /2
    if( soma >= 60){
        console.log(`Aluno Aprovado! Nota Final ${soma}`)
    }else {
        console.log(`Aluno Reprovado! Nota Final ${soma}`)
    }
}

somar(40,100)