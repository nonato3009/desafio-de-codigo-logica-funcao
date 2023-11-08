let nomeJogador = "Player01"

let resultado = rankeada(127, 49)
let saldoVitorias = resultado

function rankeada(vitorias, derrotas){
let resultado = vitorias - derrotas
    return resultado
}

if (saldoVitorias < 10) {
    let nivel = "Ferro"
    console.log("O Herói tem de saldo de '" + saldoVitorias + "'vitórias está no nível de --> " + nivel)
} else if (saldoVitorias >= 11 && saldoVitorias <= 20){
    let nivel = "Bronze"
    console.log("O Herói tem de saldo de '" + saldoVitorias + "' está no nível de --> " + nivel)
} else if (saldoVitorias >= 21 && saldoVitorias <= 50){
    let nivel = "Prata"
    console.log("O Herói tem de saldo de '" + saldoVitorias + "' está no nível de --> " + nivel)
} else if (saldoVitorias >= 51 && saldoVitorias <= 80){
    let nivel = "Ouro"
    console.log("O Herói tem de saldo de '" + saldoVitorias + "' está no nível de --> " + nivel)
} else if (saldoVitorias >= 81 && saldoVitorias <= 90){
    let nivel = "Diamante"
    console.log("O Herói tem de saldo de '" + saldoVitorias + "' está no nível de --> " + nivel)
} else if (saldoVitorias >= 91 && saldoVitorias <= 100){
    let nivel = "Lendário"
    console.log("O Herói tem de saldo de '" + saldoVitorias + "' está no nível de --> " + nivel)
} else {
    let nivel = "Imortal"
    console.log("O Herói tem de saldo de '" + saldoVitorias + "' está no nível de --> " + nivel)
}