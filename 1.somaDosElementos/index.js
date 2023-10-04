//Primeiro eu fiz dessa forma
const lista = [1, 2, 3, 4]//esse fica aqui pois é possivel rodar no vccode, mas essa parte não vai para o hackerrank ;)
/*let soma = 0
for (let i of lista) {
    soma += i
}
console.log(soma)*/

//Depois eu melhorei e ficou assim:
const soma = lista.reduce((soma, valorAtual, i, lista) => {
    return soma + valorAtual
});
console.log(soma);

