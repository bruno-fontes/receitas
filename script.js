let nomeReceita = document.getElementById('nome-receita')
let ingredientes = document.getElementById('ingredientes')
let modoPreparo = document.getElementById('modo-preparo')
let pesquisarReceitas = document.getElementById('procurar-receita')
let nomeReceitaArray = []
let modoPreparoArray = []
let ingredientesArray = []
let modoPreparoAparecer = document.getElementById('modo-preparo-aparecer')
let ingredientesAparecer = document.getElementById('ingredientes-aparecer')
let posiçao = ""
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

function pesquisarReceita(params) {

    let encontrou = 0
    nomeReceitaArray = JSON.parse(localStorage.getItem('nome-receita-chave'))
    modoPreparoArray = JSON.parse(localStorage.getItem('modo-preparo-chave'))
    ingredientesArray = JSON.parse(localStorage.getItem('ingredientes-chave'))

    for (let i = 0; i < nomeReceitaArray.length; i++) {
        if (pesquisarReceita.value == nomeReceitaArray[i])
            encontrou = 1
            posiçao = i

        if (encontrou == 1)
        ewqe
       document.getElementById('ingredientes-aparecer').innerHTML = ingredientesArray[i]
    }  
    for (let i = 0; i < nomeReceitaArray.length; i++) {
        if (pesquisarReceita.value == nomeReceitaArray[i])
            encontrou = 1
            posiçao = i

        if (encontrou == 1)
        eqweqw
        document.getElementById('modo-preparo-aparecer').innerHTML = modoPreparoArray[i]   
}

}

