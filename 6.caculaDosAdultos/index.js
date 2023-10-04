//const lista = [12, 18, 27, 18, 48, 15, 29, 19, 22] // teste 1
const lista = [12, 10, 17, 16] //teste 2

//codigo hackerrank
const listaDeMaior = lista.filter((idade) => {
    return idade >= 18
})
if (listaDeMaior == 0) {
    console.log("CRESCA E APARECA")
} else {
    const participanteMaisJovem = listaDeMaior.reduce((maisJovem, idadeAtual, i, listaDeMaior) => {
        return idadeAtual < maisJovem ? idadeAtual : maisJovem
    });
    console.log(participanteMaisJovem)
}

