function tabuadar() {
    var valor = document.getElementById('txtn')
    var resultado = document.getElementById('res')

    if (valor.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var v = Number(valor.value)
        var contador = 1
        resultado.innerHTML = ""

        while (contador <= 10) {
            let item = document.createElement('option')
            item.text = `${contador} x ${v} = ${contador*v}`
            item.value = `resultado${contador}`
            resultado.appendChild(item)
            contador++
        }
    }
}