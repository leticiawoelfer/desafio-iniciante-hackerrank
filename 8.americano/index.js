const numeros = [10, 8, 7, 7]
//const numeros = [1, 1, 1, 2, 1, 5, 8, 1, 7, 8]
//const numeros = [1, 1, 1]

//codigo hackerrank abaixo
//aprendi a fazer essa forma "reduzida" do reduce, onde não passo mais os 4 parametros na function e sim somente esses dois...
const soma = numeros.reduce((s, numero) => {
    return s + numero
})
if (soma <= numeros.length) {
    console.log(soma)
} else if (soma % numeros.length == 0) {
    console.log(numeros.length)
} else {
    console.log(soma % numeros.length)
}