let input = "CAPS"

//codigo hackerrank
const palavra = input.slice(1, input.length).split()
const capsLock = palavra.every((letra) => {
    return letra == letra.toUpperCase()
})
if (capsLock) {
    if (input[0] == input[0].toUpperCase()) {
        console.log(input.toLowerCase())
    }
    if (input[0] == input[0].toLowerCase()) {
        console.log(input[0].toUpperCase() + input.slice(1, input.length).toLowerCase())
    }
} else {
    console.log(input)
}