
function updateRelogio() {

    const agora = new Date()

    const horas = agora.getHours().toString().padStart(2, 0)
    const minutos = agora.getMinutes().toString().padStart(2, 0)
    const segundos = agora.getSeconds().toString().padStart(2, 0)
    
    const horaString = `${horas}:${minutos}:${segundos}`

    document.getElementById("relogio").textContent = horaString

}

updateRelogio()
setInterval(updateRelogio, 1000)