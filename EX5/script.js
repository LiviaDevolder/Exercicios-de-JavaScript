var valor = document.getElementById('txtn')
var lista = document.getElementById('campo')
var res = document.getElementById('resultado')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(valor.value) && !inLista(valor.value, valores)) {
        var valorf = Number(valor.value)
        let item = document.createElement('option')
        item.text = `Valor ${valorf} adicionado.`
        lista.appendChild(item)
        valores.push(valorf)
        res.innerHTML = ""
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    valor.value = ""
    valor.focus()
}

function calcular() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        valores.sort()
        var maior = Math.max.apply(null, valores);
        var menor = Math.min.apply(null, valores);
        var soma = 0
        for (var i = 0; i < valores.length; i++) {
            soma += valores[i];
        }
        var media = soma / valores.length

        res.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.</p><p>O maior valor informado foi ${maior}.</p><p>O menor valor informado foi ${menor}.</p><p>Somando todos os valores, temos ${soma}.</p><p>A média dos valores digitados é ${media}.</p>`
    }
}