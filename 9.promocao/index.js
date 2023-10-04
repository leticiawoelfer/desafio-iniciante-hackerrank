//const precos = [150, 50]
const precos = [100, 100, 100, 1]
//const precos = [200, 150, 50, 100]

//codigo hackerrank
let maisBarato = precos[0]
const totalAPagar = precos.reduce((soma, produto) => {
    if (produto < maisBarato) {
        maisBarato = produto
    }
    return soma + produto
})
console.log(precos.length >= 3 ? (totalAPagar - (maisBarato * 0.5)) : totalAPagar)