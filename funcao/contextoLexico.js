const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function executar() { 
    const valor = 'Local'
    minhaFuncao();
}


executar();
//Retorna Global