let nomeReceita = document.getElementById('nome-receita')
let ingredientes = document.getElementById('ingredientes')
let modoPreparo = document.getElementById('modo-preparo')
let procurarReceitas = document.getElementById('procurar-receita')
let nomeReceitaArray = []
let modoPreparoArray = []
let ingredientesArray = []
let modoPreparoAparecer = document.getElementById('modo-preparo-aparecer')
let ingredientesAparecer = document.getElementById('ingredientes-aparecer')
let posicao = ""
let encontrou = ""



function salvarReceita() {
    nomeReceitaArray = JSON.parse(localStorage.getItem('nome-receita-chave'))
    modoPreparoArray = JSON.parse(localStorage.getItem('modo-preparo-chave'))
    ingredientesArray = JSON.parse(localStorage.getItem('ingredientes-chave'))
    if (nomeReceita, ingredientes, modoPreparo == null) {
        alert('preencha todos os espaços')
    } else {
        if (nomeReceitaArray == null) {
            nomeReceitaArray = []
            modoPreparoArray = []
            ingredientesArray = []

            nomeReceitaArray.push(nomeReceita.value)
            modoPreparoArray.push(modoPreparo.value)
            ingredientesArray.push(ingredientes.value)
            localStorage.setItem('nome-receita-chave', JSON.stringify(nomeReceitaArray))
            localStorage.setItem('modo-preparo-chave', JSON.stringify(modoPreparoArray))
            localStorage.setItem('ingredientes-chave', JSON.stringify(ingredientesArray))

        } else {
            nomeReceitaArray.push(nomeReceita.value)
            modoPreparoArray.push(modoPreparo.value)
            ingredientesArray.push(ingredientes.value)
            localStorage.setItem('nome-receita-chave', JSON.stringify(nomeReceitaArray))
            localStorage.setItem('modo-preparo-chave', JSON.stringify(modoPreparoArray))
            localStorage.setItem('ingredientes-chave', JSON.stringify(ingredientesArray))

        }
        alert('tudo salvo por aq')
    }
}

function pesquisarReceita() {

    let encontrou = 0
    nomeReceitaArray = JSON.parse(localStorage.getItem('nome-receita-chave'))
    modoPreparoArray = JSON.parse(localStorage.getItem('modo-preparo-chave'))
    ingredientesArray = JSON.parse(localStorage.getItem('ingredientes-chave'))

    for (let i = 0; i < nomeReceitaArray.length; i++) {
        if (procurarReceitas.value == nomeReceitaArray[i]){
            encontrou = 1
            posicao = i
        }
    }
   
    if (encontrou == 1){
        document.getElementById('ingredientes-aparecer').innerHTML = ingredientesArray[posicao]
        document.getElementById('modo-preparo-aparecer').innerHTML = modoPreparoArray[posicao]; 
    }else{
        alert('Receita não encontrada');
    }
}

