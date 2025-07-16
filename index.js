
let mmr = winMeter (95, 5)
let eloName = (parameterElo())

function parameterElo () {

    let elo = mmr
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

console.log (`O Herói tem de saldo de ${mmr} e está no nível de ${eloName}.`)

