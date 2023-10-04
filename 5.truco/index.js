let carta = "Q"

//codigo hackerrank
const cartas = ["Q", "J", "K", "A", "2", "3"]
let index = cartas.indexOf(carta)
index = (index == (cartas.length - 1)) ? 0 : (index + 1)
console.log(cartas[index])