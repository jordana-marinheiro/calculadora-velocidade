function verificarVelocidade() {
    let inVelocidadePermitida = document.getElementById('inVelocidadePermitida')
    let inVelocidadeCondutor = document.getElementById('inVelocidadeCondutor')
    let outSaida = document.getElementById('outSaida')

    let velocidadePermitida = Number(inVelocidadePermitida.value)
    let velocidadeCondutor = Number(inVelocidadeCondutor.value)

    let vintePorcento = velocidadePermitida + (velocidadePermitida * 0.2)

    if (velocidadeCondutor <= velocidadePermitida) {
        outSaida.innerHTML = `Situação: Sem Multa.`
    } else if (velocidadeCondutor <= vintePorcento){
        outSaida.innerHTML = `Situação: Multa Leve.`
    }else if (velocidadeCondutor > vintePorcento) {
        outSaida.innerHTML = `Situação: Multa Grave.`
    }
}
let btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarVelocidade)