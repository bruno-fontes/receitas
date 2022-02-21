let nomeReceita = document.getElementById('nome-receita').value
let ingredientes = document.getElementById('ingredientes').innerHTML
let modoPreparo = document.getElementById('modo-preparo').innerHTML
let pesquisarReceitas = document.getElementById('procurar-receita').value
let nomeReceitaArray = []
let modoPreparoArray = []
let ingredientesArray = []
function salvarReceita() {
    nomeReceitaArray = JSON.parse(localStorage.getItem('nome-receita-chave'))
    modoPreparoArray = JSON.parse(localStorage.getItem('modo-preparo-chave'))
    ingredientesArray = JSON.parse(localStorage.getItem('ingredientes-chave'))
    if (nomeReceitaArray == null) {
        nomeReceitaArray = []
        modoPreparoArray = []
        ingredientesArray = []

        nomeReceitaArray.push(nome.value)
        modoPreparoArray.push(modo.value)
        ingredientesArray.push(ingredientess.value)
        localStorage.setItem('nome-receita-chave', JSON.stringify(nomeReceitaArray))
        localStorage.setItem('modo-preparo-chave', JSON.stringify(modoPreparoArray))
        localStorage.setItem('ingredientes-chave', JSON.stringify(ingredientesArray))

    } else {
        nomeReceitaArray.push(nome.value)
        modoPreparoArray.push(modo.value)
        ingredientesArray.push(ingredientess.value)
        localStorage.setItem('nome-receita-chave', JSON.stringify(nomeReceitaArray))
        localStorage.setItem('modo-preparo-chave', JSON.stringify(modoPreparoArray))
        localStorage.setItem('ingredientes-chave', JSON.stringify(ingredientesArray))

    }
    alert('tudo salvo por aq')
}
