
function CARREGAR() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('fotos')
    var b =document.getElementById('botar')
    var trocar =Number(b.value)
    msg.innerHTML = `A hora e ${trocar}hr`
    document.body.style.background =`#e2cd9f`
    if (trocar >= 0 && trocar < 12) {
        img.src = `fotomanha.jpg`
    } else if (trocar >= 12 && trocar <= 18) {
        img.src = `fototarde.jpg`
        document.body.style.background =`#b9846f`
    } else {
        img.src = `fotonoite.jpg`
        document.body.style.background =`#515154`
    }
}