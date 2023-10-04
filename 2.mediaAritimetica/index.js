const lista = [2, 3, 4]

//codigo hackerrank
if (lista.length > 0) {
    const soma = lista.reduce((soma, valorAtual, i, lista) => {
        return soma + valorAtual
    });
    console.log(soma / lista.length)
} else {
    console.log("0")
}