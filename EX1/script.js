function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = "Dia.png"
        document.body.style.background = '#ffa82c'
    } else if (hora >= 12 && hora <= 18) {
        img.src = "Tarde.png"
        document.body.style.background = '#86442c'
    } else {
        img.src = "Noite.png"
        document.body.style.background = '#004144'
    }
}

