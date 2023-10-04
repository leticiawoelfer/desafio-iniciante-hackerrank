let min = 2, max = 10, valores = [0, 5, 6, 10, 11]

//codigo hackerrank
const valoresPermitidos = valores.filter((valor) => {
    return valor >= min && valor <= max
});
console.log(valoresPermitidos)

