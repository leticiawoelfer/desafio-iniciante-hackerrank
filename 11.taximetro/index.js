let min = 25, km = 11.5


//codigo hackerrank
let precoMin = 50
let precoKm = 70
let precoCorrida = 0
if (km <= 10) {
    precoCorrida = km * precoKm
} else if (km > 10) {
    precoCorrida = 10 * precoKm
    precoKm = 50
    precoCorrida += (km - 10) * precoKm
}
if (min <= 20) {
    precoCorrida += min * precoMin
} else if (min > 20) {
    precoCorrida += 20 * precoMin
    precoMin = 30
    precoCorrida += (min - 20) * precoMin
}
console.log(precoCorrida)
