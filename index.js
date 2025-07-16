
let vitoria = 200
let derrota = 5
let meeter = winMeter(vitoria, derrota)
let eloName = (parameterElo())

function parameterElo () {

    let elo = vitoria
    if (elo <= 10) {
        elo = "Ferro"
    } else if (elo <= 20) {
        elo = "Bronze"
    } else if (elo <= 50) {
    elo = "Prata"
    } else if (elo <= 80) {
        elo = "Ouro"
    } else if (elo <= 90) {
        elo = "Diamante"
    } else if (elo <= 100) {
        elo = "Lendário"
    } else if (elo >= 101) {
        elo = "Imortal"
    }
    let result = elo
    return result
}

function winMeter (win, los) {
    let wincall = win - los
    let result = wincall
    return  result
}

console.log (`O Herói tem de saldo de ${meeter} e está no nível de ${eloName}.`)

