//const texto = "Um texto qualquer"
const texto = "Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer   ala "

//codigo hackerrank
const textoArray = texto.trim().split(" ").filter((palavra) => {
    return palavra != ""
})
console.log(textoArray.length)