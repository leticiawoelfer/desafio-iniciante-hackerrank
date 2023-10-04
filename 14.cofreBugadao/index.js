const input = "cubos\ncuggbyos"
//const input = "cubos\newvelrabsocaeln"
//const input = "vassoura\nvaswfsosopfummnkroussa"

//codigo hackerrank
const senha = input.slice(0, input.indexOf("\n"))
const digitado = input.slice(input.indexOf("\n") + 1).split('')

let temp = []
for (let s of senha) {
    temp.push(digitado.indexOf(s))
    digitado.splice(s, 1)
}
if (temp.includes(-1)) {
    console.log("NAO")
} else {
    const tempOrdenado = temp.sort((a, b) => {
        return a - b;
    })
    if (tempOrdenado == temp) {
        console.log("SIM")
    } else {
        console.log("NAO")
    }
}