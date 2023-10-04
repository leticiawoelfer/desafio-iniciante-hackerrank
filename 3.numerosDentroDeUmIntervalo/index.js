let numero = 3, limiteInferior = 5, limiteSuperior = 20

//codigo hackerrank
if (limiteInferior > limiteSuperior || numero > limiteSuperior || numero < limiteInferior) {
    console.log("NAO PERTENCE")
} else if (numero >= limiteInferior && numero <= limiteSuperior) {
    console.log("PERTENCE")
}
